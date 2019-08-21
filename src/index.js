import './stylesheet.scss';
import { Element } from './modules/element-factory';

window.FancyCursor = class {
    constructor (options) {
        function init_options (obj) {
            const variables = [ /*['light', 'dark'],*/ ['cursor', 'backlight'], ['size', 'active-size', 'animation-time', 'color', 'active-color'] ];
            variables[0].forEach( function (array) {
                if (array in options) {
                    variables[1].forEach( function (variable) {
                        let format = variable.split('-');
                            
                        if (format.length > 1) {
                            format[1] = format[1][1].toLocaleUpperCase() + format[1].slice(1);
                            format = format.join('');
                        } 
                        
                        else format = format[0];

                        if (format in options[array]) {
                            let value = options[array][variable];
                            if( /size/.test(format) ) value = value + 'px';

                            while( /pxpx/.test(value) )
                                value = value.replace('pxpx', 'px');

                            obj.container.style .setProperty(`--${array}-${variable}`, options[array][variable]);
                        }
                    } );
                }
            } );
        }

        // If cursor already attached, throw error
        if (window.FancyCursorAttach === true)
            throw new Error('FancyCursor already attached to this page');

        const _ = options || {};

        // Create cursor as HTML element
        const obj = {
            cursor: new Element('div', { class: '_f-cursor _cursor' }).element,
            backlight: new Element('div', { class: '_f-cursor _backlight' }).element
        };

        obj.container = new Element('div', { class: '_f-cursor _container', show: false })
            .childs( obj.backlight, obj.cursor ).element;

        init_options (obj);
        // Move cursor after mousemove event firing
        let firstMove = true,
            scale = '';

        const move = event => {
            if (
                ( event.clientX >= window.innerWidth - 1 || event.clientX <= 0 ) ||
                ( event.clientY >= window.innerHeight - 1 || event.clientY <= 0 )
            ) scale = ' scale(0, 0)';
            
            obj.cursor.style = `transform: matrix(1, 0, 0, 1, `
                + `${(event.clientX - obj.cursor.offsetWidth / 2) - 7}, `
                + `${(event.clientY - obj.cursor.offsetHeight / 2) - 7})`
                    + scale;

            obj.backlight.style = `transform: matrix(1, 0, 0, 1, `
                + `${(event.clientX - obj.backlight.offsetWidth / 2) - 7}, `
                + `${(event.clientY - obj.backlight.offsetHeight / 2) - 7})`
                    + scale;
        };

        window.addEventListener( 'mousemove', function (event) {
            if (firstMove) {
                window.requestAnimationFrame( () => move(event) );
                scale = ' scale(0, 0)';

                setTimeout(() => {
                    obj.container.setAttribute('animate', true);

                    setTimeout(() => {
                        obj.container.setAttribute('show', true); scale = '';
                    }, 3); firstMove = false;
                }, 2);

                return false;
            }

            window.requestAnimationFrame( () => move(event) );
        } );

        const events = {
            mouseout: () => {
                scale = ' scale(0, 0)';
                obj.container.setAttribute('show', false);
            },

            mouseover: () => {
                obj.container.setAttribute('show', true);
                scale = '';
            }
        };

        Object.keys(events).forEach( event => window.addEventListener(event, events[event]) );
        document.body.appendChild(obj.container);
        window.FancyCursorAttach = true; this.container = obj.container;
    }
}