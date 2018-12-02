import Vue from "vue";

import router from "./Router";
import store from "./store/index";
import App from "./App";

/*... Plugins	... */

import "./plugins/vuetify";
import i18n from "./plugins/i18n";

store.dispatch("initialisation", window.dataLayout);

export const app = new Vue({
  el: "#app",
  template: "<App/>",
  components: { App },
  router,
  i18n,
  store
});
