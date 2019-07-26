import { brightness } from './modules/brightness.js';
import { touch } from './modules/touch.js';

export class Cursor{
    cover = true;
    constructor({cover, interactive}){
        // script settings
        const params = {
            // full address to stylesheet from root dir
            stylesheet: '/stylesheet.css',
            contrast: true
        };

        cover = cover === false ? false : true;

        // Disable cursor on touch devices
        if(touch) return false;

        this.cover = !!cover;
        const _ = Object();

        // Create cursor parts
        ['box', 'point', 'cover']
            .forEach(e => _[e] = document.createElement('div'));

        // Set cursor parts classNames
        for(let part in _)
            _[part].className = `_cursor-${part}`;

        // Put cursor parts in one box
        [_.point, _.cover]
            .forEach(e => _.box.appendChild(e));
        if(!this.cover) _.cover.style.display = 'none';

        // load stylesheet
        let stylesheet = document.createElement('link');
            stylesheet.rel = 'stylesheet';
            stylesheet.href = params.stylesheet;

        if(document.body){
            document.body
                .appendChild(stylesheet);
            document.body
                .appendChild(_.box);
        }
        else return false;

        // mousemove event
        const _move = e => {
            const target = document.elementFromPoint(e.pageX, e.pageY); // get element under cursor
            
            let computed = window.getComputedStyle(target),
                requestCursor = computed.getPropertyValue('--cursor').trim();

            if(!_.box.getAttribute('setup')){
                setTimeout(() => {
                    _.box.setAttribute('setup', true); setTimeout(() => _.box.setAttribute('setup', 'done'), 350);
                }, 10);
            }

            if(!this.cover) _.cover.style.display = 'none';

            // This construction is more preformance than foreach
            // ~0.015 foreach vs ~0.013 this

            _.point.style.transform = `matrix(1, 0, 0, 1, ${e.pageX}, ${e.pageY})`
                + ' translate(-50%, -50%)';

            if(this.cover) _.cover.style.transform = `matrix(1, 0, 0, 1, ${e.pageX}, ${e.pageY})`
                + ' translate(-50%, -50%)';

            if(interactive){

                let backgroundColor = computed.getPropertyValue('background-color')
                    .trim();

                // check element contrast
                if(params.contrast)
                    _.box.setAttribute('dark', brightness(backgroundColor) < 110000 ? true : false);

                _.box.setAttribute('cursor', requestCursor || 'default'); // check cursor type
            }
        };

        // register event
        const mousemove = e => requestAnimationFrame(() => _move(e));
        try{
            window.removeEventListener('mousemove', mousemove);
        } catch {}
        window.addEventListener('mousemove', mousemove);

        this.event = mousemove;
        this.cursor = _;
        return _;
    };
}