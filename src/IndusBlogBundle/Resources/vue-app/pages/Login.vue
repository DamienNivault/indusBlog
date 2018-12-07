<template>
  <div>
    <router-link :to="{ name: 'articleCreations'}"><button class="btnSecondary">Créations d'articles</button></router-link>
    <div>
        <div>
        <div class="row">
            <form class="col s12" action="login" method="POST" id="login-form">
                <h1 class="title-content-container">Login</h1>

                <div class="row">
                    <div class="input-field col s12">
                    <input id="email_login" type="text" class="validate" name="_username" autocomplete="new-password">
                    <label for="email_login">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="password_login" type="password" class="validate" name="_password" autocomplete="new-password">
                        <label for="password_login">Password</label>
                    </div>
                </div>


                <div class="row center-align">
                    <button class="btn waves-effect waves-light red accent-1" type="submit" name="action">LOGIN
                        <i class="material-icons right">offline_pin</i>
                    </button>
                </div>
            </form>
        </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
export default {
  name: "Login",
  props: [],
  components: {},
  data: () => ({}),
  computed: {
    url() {
      return this.$store.getters.routes["api_login"];
    }
  },
  methods: {}
};
</script>
<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
