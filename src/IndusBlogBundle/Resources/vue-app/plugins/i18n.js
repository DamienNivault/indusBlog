// import Vue from "vue";
// import VueI18n from "vue-i18n";
// import messages from "@/translations/messages.js";
// import dateTimeFormats from "@/translations/dateTimeFormats.js";
//
// Vue.use(VueI18n);
//
// let cookieOptions = document.cookie
//   .split(";")
//   .filter(item => item.includes("golemUserLang="));
//
// let lang = window.dataLayout.globals.lang;
// if (cookieOptions.length) {
//   lang = JSON.parse(cookieOptions[0].split("=")[1]);
// }
//
// export default new VueI18n({
//   locale: lang.toLowerCase(),
//   fallbackLocale: "en",
//   dateTimeFormats,
//   messages
// });
