(() => {
    let dark, brightness;
    (() => {
        dark = function(element){ return brightness(element) < 130 ? true : false; }
        brightness = function(element){
            let rgb = [255, 255, 255],
                opacity = 1;
            if(element && element instanceof Element){
                rgb = window.getComputedStyle(element)
                    .getPropertyValue('background-color')
                    .match(/\(([^]+)\)/)[1].trim()
                    .split(',');

                opacity = parseFloat(window.getComputedStyle(element).getPropertyValue('opacity'));
            }

            let rgba = Object(),
                alpha = opacity < 1 ? opacity : 1;

            if(rgb.length == 4) alpha = opacity < 1 ? opacity : parseFloat(rgb.pop());
            rgb.forEach((e, index) =>
                rgba[['r', 'g', 'b'][index]] = parseInt(e, 10));

            if(alpha < 0.44)
                return brightness(element.parentNode || null);

            return Math.round(
                ((rgba.r * 299)
                + (rgba.g * 567)
                + (rgba.b * 114))
                / 1000
            );
        }
    })();

    function Cursor(){
        return {
            init: (params) => {
                const _ = Object();
                ['box', 'pointer', 'selector']
                    .forEach(e => _[e] = document.createElement('div'));
                
                for(let e in _){
                    _[e].className = `_cursor-${e}`;
                    if(e != 'box')
                        _['box'].appendChild(_[e]);
                }
    
                let stylesheet = document.createElement('link');
                    stylesheet.rel = 'stylesheet';
                    stylesheet.href = 'https://dl.dropboxusercontent.com/s/58hp5e8395kgy4z/stylesheet.min.css';

                if(!document.body) return false;
                    document.body.appendChild(stylesheet);

                let selector = true;
                if(params){
                    if(
                        ('cursor' in params) &&
                        ('icon' in params.cursor)
                    ){
                        if('stylesheets' in params.cursor){
                            let stylesheets = params.cursor.stylesheets;
                            if(!Array.isArray(stylesheets))
                                stylesheets = Array(stylesheets);

                            stylesheets.forEach(e => {
                                let stylesheet = document.createElement('link');
                                    stylesheet.rel = 'stylesheet';
                                    stylesheet.href = e;

                                document.body.appendChild(stylesheet);
                            }); 
                        }

                        _['pointer'].innerHTML = params.cursor.icon;
                        _['box'].setAttribute('icon', true);
                    }

                    if(
                        ('cover' in params) &&
                        (params.cover.toString() == 'false')
                    ){
                        selector = false;
                        _['box'].querySelector('._cursor-selector')
                            .remove(); 
                    }
                } document.body.appendChild(_.box);
    
                const _move = (e => {
                    _.pointer.style.transform = `matrix(1, 0, 0, 1, `
                        + `${e.pageX}, `
                        + `${e.pageY}) `
                        + `translate(-50%, -50%)`;
                        
                    if(selector) _.selector.style.transform = `matrix(1, 0, 0, 1, `
                        + `${e.pageX}, `
                        + `${e.pageY}) `
                        + `translate(-50%, -50%)`;
                }), functions = {
                    mousemove: function(e){
                        if(!_.box.getAttribute('setup'))
                            setTimeout(() => _.box.setAttribute('setup', true), 50);

                        requestAnimationFrame(() => _move(e));
                        let target = document.elementFromPoint(e.pageX, e.pageY);
                        if(document.activeElement == target )
                            _.box.setAttribute('silent', true);
                        else if(_.box.getAttribute('silent'))
                            _.box.removeAttribute('silent');
    
                        let cursor = window.getComputedStyle(target).getPropertyValue('--cursor')
                            || 'default';
    
                        cursor = cursor.trim();
                        _.box.setAttribute('cursor', cursor);

                        try{
                            if(cursor == 'default') _.pointer.innerHTML = params.cursor.icon;
                            else
                                _.pointer.innerHTML = params.cursor.interactive[cursor];
                        } catch{}

                        _.box.setAttribute('dark', dark(target));
                    },
                    mouseup: function(e){
                        let target = e.target;
                        if(target == document.activeElement && 
                            (['INPUT', 'TEXTAREA'].includes(target.tagName)
                            || target.getAttribute('contenteditable'))
                        ){
                            _.box.setAttribute('silent', true);
                            if(selector) _.selector.style.transform = `matrix(1, 0, 0, 1, `
                                + `${e.pageX}, `
                                + `${e.pageY})`;
                        }
                        else if(_.box.getAttribute('silent'))
                            _.box.removeAttribute('silent');
                    }
                };
    
                try{
                    Object.keys(functions).forEach(e =>
                            window.removeEventListener(e, functions[e]));
                } catch{}
                Object.keys(functions).forEach(e =>
                    window.addEventListener(e, functions[e]));

                return _;
            }
        };
    }
    
    window.Cursor = Cursor();
})();