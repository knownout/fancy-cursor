function dark(element){ return brightness(element) < 130 ? true : false; }
function brightness(element){
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

export { brightness, dark };