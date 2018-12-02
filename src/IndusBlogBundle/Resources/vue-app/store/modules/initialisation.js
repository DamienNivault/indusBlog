import axios from "axios";

/*... helper	... */

const Calls = routes => ({
  [routes.api_user]: {
    commit: "refreshUser",
    failMessage: "Get User's informations failed"
  },
  [routes.api_user_servers]: {
    commit: "refreshUserServers",
    failMessage: "Get User's servers failed"
  },
  [routes.api_user_contexts]: {
    commit: "refreshUserContexts",
    failMessage: "Get User's contexts failed"
  },
  [routes.api_basics]: {
    commit: "SET_BASICS",
    failMessage: "Get Basics failed"
  },
  [routes.api_builtins]: {
    commit: "refreshBuiltIns",
    failMessage: "Get Built-ins failed"
  },
  [routes.api_user_archetypes]: {
    commit: "refreshUserArchetypes",
    failMessage: "Get User's archetypes failed"
  }
});

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
  routes: state => state.routes
};
/**********				Actions				**********/
const actions = {
  initialisation({ state, getters, commit, dispatch }, dataLayout) {
    commit("LOAD_DATA_LAYOUT", dataLayout);
  }
};
/**********				Mutations				**********/
const mutations = {
  LOAD_DATA_LAYOUT(state, dataLayout) {
    console.log("obj", dataLayout.routes["api_register"]);
    state.routes = dataLayout.routes["api_register"];
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
