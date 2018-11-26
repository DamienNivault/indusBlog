import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  theme: {
    primary: "#734276",
    secondary: "#AA9FB9",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    /*________ 		new color custom				 ________ */
    gdarker: "#555555",
    footerDark: "#333333",
    gwhite: "#ddd",
    greenButton: "#77C692",
    button: "#F6BD62"
  },
  iconfont: "fa"
});
