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
  routes: state => state.routes,
  globals: state => state.globals
};
/**********				Actions				**********/
const actions = {
  initialisation({ state, getters, commit, dispatch }, dataLayout) {
    return dispatch("loadDataLayout", dataLayout).then(_ => {
      return dispatch("loadInitialData", Calls(dataLayout.routes));
    });
  },

  setUrl({ getters, commit, dispatch }, newUrl) {
    /*... used in adminTest.vue as well	... */
    let [protocol, realUrl] = newUrl.split("://");
    if (!realUrl) {
      realUrl = protocol;
      protocol = getters.protocol || "http";
    }
    commit("SET_PROTOCOL", protocol);
    commit("SET_URL", realUrl);
  },

  loadDataLayout({ commit, dispatch }, data) {
    dispatch("setUrl", data.globals.url);
    commit("LOAD_DATA_LAYOUT", data);
  },

  loadInitialData({ commit }, storeCalls) {
    return Promise.all(Object.keys(storeCalls).map(url => axios.get(url))).then(
      responses => {
        for (let [i, response] of responses.entries()) {
          if (response.data.status == "ok") {
            commit(
              storeCalls[response.config.url].commit,
              response.data.message
            );
          } else {
            console.error(storeCalls[response.config.url].failMessage);
          }
        }
        commit("LOADED", true);
        return "data_loaded, from action";
      }
    );
  }
};
/**********				Mutations				**********/
const mutations = {
  SET_URL: (state, newUrl) => (state.url = newUrl),
  SET_PROTOCOL: (state, protocol) => (state.protocol = protocol),

  LOAD_DATA_LAYOUT(state, dataLayout) {
    state.globals = { ...dataLayout.globals };
    state.routes = { ...dataLayout.routes };
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
