import axios from "axios";

/**********				Store				**********/

const state = {
  loaded: false,
  //
  url: "",
  protocol: "",
  globals: {},
  routes: []
  //
};
/**********				Getters				**********/
const getters = {
  loaded: state => state.loaded,
  url: state => state.url,
  protocol: state => state.protocol,
  routes: state => state.routes,
  globals: state => state.globals
};
/**********				Actions				**********/
const actions = {
  initialisation({ state, getters, commit, dispatch }, dataLayout) {
    console.log("datalayout", dataLayout);
    return commit("LOAD_DATA_LAYOUT", dataLayout);
  }
};

/**********				Mutations				**********/
const mutations = {
  LOAD_DATA_LAYOUT(state, dataLayout) {
    console.log("dataLayout", dataLayout);
    state.globals = dataLayout.globals;
    state.routes = dataLayout.routes;
  },

  LOADED: (state, value) => {
    state.loaded = value;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
