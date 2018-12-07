import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import initialisation from "./modules/initialisation.js";
import register from "./modules/registerAndLogin.js";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    /*... initialisation	... */
    initialisation,
    /*... internals	... */
    register
  },
  state: {},

  getters: {},

  actions: {},

  mutations: {}
});
