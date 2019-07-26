class Cursor{
    constructor(interactive){
        function brightness(rgb){
            rgb = rgb[0] == 'r' ? rgb : `(${rgb})`;
            rgb = rgb.replace(/\s|\r|\n/g, '')
                .match(/\(([^;]+)\)/)[1]
                .split(',');
            let alpha = 1;
            if(rgb.length == 4)
                alpha = parseFloat(rgb.pop());
            if(alpha < 0.2)
                rgb = [255, 255, 255];
            else
                rgb = rgb.map(e => parseInt(e.trim(), 10));
        
            const _brightness = (rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114) / 1000;
            return _brightness;
        }
        if('ontouchstart' in window || navigator.maxTouchPoints)
            return false;
        const _ = Object();

        ['box', 'point', 'cover']
            .forEach(e => _[e] = document.createElement('div'));
        for(let part in _)
            _[part].className = `_cursor-${part}`;
        [_.point, _.cover]
            .forEach(e => _.box.appendChild(e));

        if(document.body)
            document.body
                .appendChild(_.box);
        else return false;

        const _move = e => {
            const target = document.elementFromPoint(e.pageX, e.pageY);
            let active = document.activeElement;
            if(
                (['INPUT', 'TEXTAREA'].includes(active.tagName) || active.getAttribute('contenteditable'))
                && active == target
            )
                _.cover.setAttribute('hidden', true);
            else _.cover.removeAttribute('hidden');

            let computed = window.getComputedStyle(target),
                requestCursor = computed.getPropertyValue('--cursor').trim();
            if(!_.box.getAttribute('setup')){
                setTimeout(() => {
                    _.box.setAttribute('setup', true); setTimeout(() => _.box.setAttribute('setup', 'done'), 350);
                }, 10);
            }

            _.point.style.transform = `matrix(1, 0, 0, 1, ${e.pageX}, ${e.pageY})`
                + ' translate(-50%, -50%)';
            _.cover.style.transform = `matrix(1, 0, 0, 1, ${e.pageX}, ${e.pageY})`
                + ' translate(-50%, -50%)';

            if(interactive){

                let backgroundColor = computed.getPropertyValue('background-color')
                    .trim();
                _.box.setAttribute('dark', brightness(backgroundColor) < 110000 ? true : false);
                _.box.setAttribute('cursor', requestCursor || 'default');
            }
        };

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