<template>
  <v-row justify="center" align="center">
    <v-col xs="12" sm="8" md="4" lg="4">
      <v-form class="card m-1 p-3" ref="form">
        <v-card-title>Create Account</v-card-title>
        <v-text-field
          prepend-icon="mdi-account-plus"
          autofocus
          type="name"
          v-model="name"
          label="Name"
        ></v-text-field>
        <v-text-field prepend-icon="mdi-email" type="email" v-model="email" label="email"></v-text-field>
        <v-text-field
          prepend-icon="mdi-lock-question"
          type="password"
          v-model="password"
          label="password"
        ></v-text-field>
        <v-text-field
          prepend-icon="mdi-lock-question"
          type="password"
          v-model="passwordConf"
          label="confirm password"
        ></v-text-field>
        <v-text-field
          type="location"
          prepend-icon="mdi-map-marker"
          v-model="location"
          label="location"
        ></v-text-field>
        <v-alert type="error" v-if="showError">{{passwordError}}</v-alert>
        <v-btn color="sucesss" @click="register">Register</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: null,
      password: null,
      name: null,
      location: null,
      passwordConf: null,
      passwordError: null,
      showError: false,
    };
  },
  methods: {
    register: function() {
      if (this.password === this.passwordConf) {
        axios
          .post("/api/user/register", {
            email: this.email,
            password: this.password,
            name: this.name,
            location: this.location,
            status: "active",
            type: "user"
          })
          .then(result => {
            let data = {
              email: result.data.user.email,
              password: this.password
            };
            console.log(data);
            this.login();
          })
          .catch(err => {
            console.log(err);
          });
      } else {
          this.passwordError = "Please enter matching passwords";
          this.showError = true;
      }
    },
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
          localStorage.setItem('user-sub-id', result.data.user.stripe_id);
          context.$router.push("/onboard");
          this.$store.state.loggedIn = true;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
