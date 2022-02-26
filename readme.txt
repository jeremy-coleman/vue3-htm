npm i
npm start


https://github.com/WICG/import-maps
if (HTMLScriptElement.supports && HTMLScriptElement.supports('importmap')) {
  console.log('Your browser supports import maps.');
}

if you want to find a url for unpkg, just go to https://unpkg.com/module_to_search_for and it will redirect you to the latest module
if you need another version, replace the version in the redirect path to the one you want to use.

https://reactjs.org/docs/web-components.html
https://custom-elements-everywhere.com/


custom element hackery
you can also do this, but then the custom element wont accept props, which means we cant pass them through vue