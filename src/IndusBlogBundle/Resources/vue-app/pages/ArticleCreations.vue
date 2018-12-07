<template>

    <v-app id="inspire">
      Pages du formulaire de création d'articles

       <v-form v-model="valid" ref="form">
       <v-text-field
         label="Title"
         v-model="title"
         :rules="titleRules"
         :counter="10"
         required
       ></v-text-field>
       <v-text-field
         label="Content"
         v-model="content"
         :rules="contentRules"
         :counter="10"
         required
       ></v-text-field>


       <v-btn @click="submit" :class="{ red: !valid, green: valid }">submit</v-btn>
       <v-btn @click="clear">clear</v-btn>
     </v-form>
     </v-app>
</template>
<script>
export default {
  name: "ArticleCreations",
  props: [],
  components: {},
  data: () => ({
    valid: false,
    title: "Default",
    titleRules: [
      v => !!v || "Title is required",
      v => (v && v.length <= 10) || "Title must be less than 10 characters"
    ],
    content: "Default",
    contentRules: [v => !!v || "Content is required"]
  }),
  computed: {},
  methods: {
    submit() {
      console.log("in submit");
      var data = {
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("registerUser", data);
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
<style scoped>
</style>
