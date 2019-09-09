// This is where you integrate with other tools (Vue Router, Vuex, ...)

const VueServerRenderer = require('vue-server-renderer');
const getVueInstance = require('./getVueInstance');

module.exports = htmlRender;

// This function renders your pages to HTML
async function htmlRender({page, initialProps}) {
  const renderer = VueServerRenderer.createRenderer();

  const vm = getVueInstance(page.view, initialProps);

  const html = await renderer.renderToString(vm);

  // Instead of returning a string, you can return an
  // option object for a full control over the generated
  // HTML, see https://github.com/brillout/html
  return html;
}
