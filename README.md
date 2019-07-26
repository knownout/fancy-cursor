# fancy-cursor
### Custom animated cursor for websites
Cursor automatically changes color depending on the color of the element it is pointing to.
Adding an element to the variable `--cursor` allows you to change the cursor. Two variations are available: `text` and `pointer`.
Cover is turned off when a text field, input or contenteditable div is hovering and focusing.

To get this cursor, simply download the files from `/dist/` and connect it to your project.
```html
<script src="fancy-cursor.min.js"></script>
<link rel="stylesheet" href="fancy-cursor.min.css">
```
```javascript
window.addEventListener('load', () => {
  new Cursor(true) // true means that cursor will be interactive
});
```
Cursor element has a z-index value of 999, so do not create elements with a higher z-index. Or simply change this value in the style sheet of the cursor.

Demo: https://re-knownout.github.io/fancy-cursor/
