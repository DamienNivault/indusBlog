<template>
  <v-app id="inspire">
     <v-form v-model="valid" ref="form">
     <v-text-field
       label="Username"
       v-model="username"
       :rules="usernameRules"
       :counter="10"
       required
     ></v-text-field>
     <v-text-field
       label="Firstname"
       v-model="firstname"
       :rules="firstnameRules"
       :counter="10"
       required
     ></v-text-field>
     <v-text-field
       label="Lastname"
       v-model="lastname"
       :rules="lastnameRules"
       :counter="10"
       required
     ></v-text-field>
     <v-text-field
       label="E-mail"
       v-model="email"
       :rules="emailRules"
       required
     ></v-text-field>
     <v-text-field
       label="Password"
       v-model="password"
       :rules="passwordRules"
       type="password"
       required
     ></v-text-field>

     <v-btn @click="submit" :class="{ red: !valid, green: valid }">submit</v-btn>
     <v-btn @click="clear">clear</v-btn>
   </v-form>
   </v-app>
</template>
<script>
export default {
  name: "Register",
  props: [],
  components: {},
  data: () => ({
    valid: false,
    username: "Default",
    usernameRules: [
      v => !!v || "Username is required",
      v => (v && v.length <= 10) || "Username must be less than 10 characters"
    ],
    firstname: "Default",
    firstnameRules: [
      v => !!v || "Firstname is required",
      v => (v && v.length <= 10) || "Firstname must be less than 10 characters"
    ],
    lastname: "Default",
    lastnameRules: [
      v => !!v || "Lastname is required",
      v => (v && v.length <= 10) || "Lastname must be less than 10 characters"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length <= 10) || "Password must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid"
    ]
  }),
  computed: {},
  methods: {
    submit() {
      this.$refs.form.validate();
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
<style scoped>
#inspire {
  margin-top: 50px;
}
</style>
