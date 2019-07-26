export function brightness(rgb){
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