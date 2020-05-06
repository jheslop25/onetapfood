<template>
  <v-row justify="center">
    
    <v-col xs="12" sm="8" md="4" lg="4">
      <v-form class="card p-3" ref="form">
        <v-card-title class="mx-auto">Welcome, Please Login.</v-card-title>
        <v-alert v-if="showErrorBox" type="error">{{error}}</v-alert>
        <v-text-field type="email" autofocus prepend-icon="mdi-email" v-model="email" label="email"></v-text-field>
        <v-text-field type="password" prepend-icon="mdi-lock-question" v-model="password" label="password"></v-text-field>
        <v-btn color="blue" @click="login">Login</v-btn>
      </v-form>
    </v-col>
    
  </v-row>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      showErrorBox: false
    };
  },
  methods: {
    login: function() {
      let context = this;
      axios
        .post("/api/user/login", {
          email: this.email,
          password: this.password
        })
        .then(result => {
          localStorage.setItem(
            "user-token",
            result.data.access_token.accessToken
          );
          localStorage.setItem("user-id", result.data.user.id);
          context.$router.push("/main");
          this.$store.state.loggedIn = true;
        })
        .catch(err => {
          console.log(err);
          context.error =
            "Sorry, something went wrong. We couldn't log you in.";
          context.showErrorBox = true;
        });
    }
  }
};
</script>


<style scoped>
</style>
