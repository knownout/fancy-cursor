## fancy-cursor
#### Custom animated cursor for websites
Cursor automatically changes color depending on the color of the element it is pointing to.
Adding an element to the variable `--cursor` allows you to change the cursor. Two variations are available: `text` and `pointer`.
Cover is turned off when a text field, input or contenteditable div is hovering and focusing.

To get this cursor, simply download script from `/dist/` and connect it to your project or use direct dropbox link
```html
<script src="https://dl.dropboxusercontent.com/s/dzn5abjed0ft61k/cursor.min.js"></script>
```
```javascript
window.addEventListener('load', () => {
  window.Cursor.init(Object: params)
});
```
#### Params object

<table>
  <tr>
    <th>Parameter</th>
    <th>Values</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><b>cursor</b></td>
    <td>Object</td>
    <td></td>
    <td>Cursor Pointer Parameters</td>
  </tr>
  <tr>
    <td>cursor<b>.icon</b></td>
    <td>String</td>
    <td></td>
    <td>If set, innerHTML of cursor pointer will be replaced by this string</td>
  </tr>
  <tr>
    <td>cursor<b>.stylesheets</b></td>
    <td>Array or String</td>
    <td></td>
    <td>Additional stylesheets for icons (like <code>fontello</code>)</td>
  </tr>
  <tr>
    <td>cursor<b>.interactive</b></td>
    <td>Object</td>
    <td></td>
    <td>Contains icons of interactive cursors</td>
  </tr>
  <tr>
    <td>cursor.interactive<b>.pointer</b></td>
    <td>String</td>
    <td></td>
    <td>innerHTML of <code>pointer</code> cursor</td>
  </tr>
  <tr>
    <td>cursor.interactive<b>.text</b></td>
    <td>String</td>
    <td></td>
    <td>innerHTML of <code>text</code> cursor</td>
  </tr>
  <tr>
    <td><b>cover</b></td>
    <td>Boolean</td>
    <td>true</td>
    <td>Enable or disable cursor highlighting</td>
  </tr>
</table>


If one of the interactive elements or the icon is not set, the cursor pointer will be replaced by the standard

#### Direct links to files in Dropbox

<table>
  <tr>
    <th>File</th>
    <th>Direct link</th>
  </tr>
  <tr>
    <td>cursor.js</td>
    <td>https://dl.dropboxusercontent.com/s/evrzpo9fcrv91eg/cursor.js</td>
  </tr>
  <tr>
    <td>cursor.min.js</td>
    <td>https://dl.dropboxusercontent.com/s/dzn5abjed0ft61k/cursor.min.js</td>
  </tr>
</table>

#### TODO

- [ ] Hide cursor when mouse leaves window
- [ ] Add more parameters for customization
- [x] Set icons instead of a cursor

**Stylesheet is set automatically.** Cursor element has a z-index value of 999, so do not create elements with higher z-index.

Demo: https://re-knownout.github.io/fancy-cursor/