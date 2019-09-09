// This is where you integrate with other tools (Vue Router, Vuex, ...)

import Vue from 'vue';
import getVueInstance from './getVueInstance';

export default domRender;

// This function renders your pages to the DOM
async function domRender({page, initialProps, CONTAINER_ID}) {
  const vm = getVueInstance(page.view, initialProps);

  vm.$mount('#'+CONTAINER_ID);
}
