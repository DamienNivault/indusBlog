import axios from "axios";
import { phpData } from "../../utils";

const state = () => ({});

const getters = {};

const actions = {
  registerUser({ state, getters, commit }, profile) {
    console.log("in func", profile);
    console.log("getters", getters.routes.api_register);
    return axios.post(getters.routes.api_register, profile).then(response => {
      console.log(response.data);
      console.log("in registerUser");
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
