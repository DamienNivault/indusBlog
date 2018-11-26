<template>
    <header>
        <button class="btnSecondary">Se connecter</button>
        <button class="btnPrimary">S'inscrire</button>
    </header>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style lang="scss">
@import "../assets/scss/globals/style.scss";

header {
  height: 70px;
  width: 100%;
  display: flex !important;
  justify-content: flex-end !important;
  align-items: center !important;
  padding-right: 50px;
  position: fixed;
  z-index: 10;

  .btnSecondary {
    margin-right: 35px;
  }
}
</style>
