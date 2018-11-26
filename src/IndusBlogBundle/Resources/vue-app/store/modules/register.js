import axios from "axios";
import { phpData } from "@/utils";

const state = () => ({});

const getters = {};

const actions = {
  registerUser({ state, getters, commit }, profile) {
    return axios
      .post(getters.routes.api_user_profile_edit, phpData(profile))
      .then(response => {
        commit("LOADING", false);
        commit("EDIT_USER_INFO", profile);
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
