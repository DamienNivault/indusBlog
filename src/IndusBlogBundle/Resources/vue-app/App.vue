<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>
<style lang="scss">
@import "./assets/scss/globals/style.scss";

body {
  padding: 0;

  margin: 0;
}
</style>
