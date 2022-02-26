npm i
npm start


https://github.com/WICG/import-maps
if (HTMLScriptElement.supports && HTMLScriptElement.supports('importmap')) {
  console.log('Your browser supports import maps.');
}

you could replace the local vue with unpkg or ../node_modules/path/to/vue in the import map section inside src/index.html
https://unpkg.com/vue@3.2.31/dist/vue.runtime.esm-browser.prod.js