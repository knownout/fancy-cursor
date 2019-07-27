import { dark } from './brightness.js';
function Cursor(){
    return {
        init: () => {
            const _ = Object();
            ['box', 'pointer', 'selector']
                .forEach(e => _[e] = document.createElement('div'));
            
            for(let e in _){
                _[e].className = `_cursor-${e}`;
                if(e != 'box')
                    _['box'].appendChild(_[e]);
            }

            if(!document.body) return false;
                document.body.appendChild(_.box);

            const _move = (e => {
                _.pointer.style.transform = `matrix(1, 0, 0, 1, 
                    ${e.pageX}, 
                    ${e.pageY}) 
                    translate(-50%, -50%)`;
                    
                _.selector.style.transform = `matrix(1, 0, 0, 1, 
                    ${e.pageX}, 
                    ${e.pageY}) 
                    translate(-50%, -50%)`;
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

                    _.box.setAttribute('cursor', cursor.trim());
                    _.box.setAttribute('dark', dark(target));
                },
                mouseup: function(e){
                    let target = e.target;
                    if(target == document.activeElement && 
                        (['INPUT', 'TEXTAREA'].includes(target.tagName)
                        || target.getAttribute('contenteditable'))
                    ){
                        _.box.setAttribute('silent', true);
                        _.selector.style.transform = `matrix(1, 0, 0, 1, 
                            ${e.pageX}, 
                            ${e.pageY})`;
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
        }
    };
}

let cursor = Cursor();
export { cursor as Cursor };