import About from './About.vue';

export default {
  route: '/about',
  view: About,
  title,

  // This page is non-interactive & static.
  renderToDom: false,
  renderToHtml: true,
  renderHtmlAtBuildTime: true,
};

function title() {
  return 'About this starter.';
}
