# Vite Handlebars Loader

- Allows using ".hbs" imports
- Precompiles the import into a function
- Working in Laravel 10 and Vite 4.0

## Installation

Add this to the top of you `vite.config.js`

```js
import handlebars from 'vite-plugin-handlebars-loader';
```

Then add the imported function to the "plugins" array in `defineConfig`

```js
export default defineConfig({
    plugins: [
        handlebars()
    ]
});
```

## Usage

Now you can import any ".hbs" in your application scripts.

```js
import welcomeRenderer from '../templates/welcome.hbs';

let htmlData = {title:'Hello', ... };
let htmlString = welcomeRenderer(htmlData);

document.getElementById('welcome').innerHTML = htmlString;
```
