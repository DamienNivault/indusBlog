<template>
    <header v-if="username == ''">
        <router-link :to="{ name: 'login'}"><button class="btnSecondary">Se connecter</button></router-link>
        <router-link :to="{ name: 'register'}"><button class="btnPrimary">S'inscrire</button></router-link>
    </header>
    <header v-else>
        Bienvenue {{username}}
    </header>
</template>
<script>
export default {
  name: "Header",
  computed: {
    username() {
      return this.$store.getters.globals["last_username"];
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/globals/style.scss";

header {
  height: 70px;
  width: 100%;
  margin-bottom: 100px;
  display: flex !important;
  justify-content: flex-end !important;
  align-items: center !important;
  padding-right: 50px;
  z-index: 10;

  .btnSecondary {
    margin-right: 35px;
  }
}
</style>
