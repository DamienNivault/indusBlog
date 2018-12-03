import axios from "axios";
import { phpData } from "../../utils";

const state = () => ({});

const getters = {};

const actions = {
  registerUser({ state, getters, commit }, profile) {
    console.log("in func", profile);
    console.log("getters", getters.routes);
    return axios.post(getters.routes, profile).then(response => {
      console.log(response.data);
      console.log("in registerUser");
      return {
        type: response.data.status === "ko" ? "error" : "",
        text: response.data.message
      };
    });
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
