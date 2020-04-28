<template>
  <div>
    <v-card class="py-3" v-if="!Authenticated">
      <v-btn class="mx-3" v-if="!show" @click="showForm">Add to Instacart</v-btn>
      <v-card-title v-if="show">Please Login to Instacart</v-card-title>
      <v-card-subtitle color="red--text">{{errorLogin}}</v-card-subtitle>
      <v-form class="m-3">
        <v-text-field v-if="show" v-model="email" label="Instacart Email"></v-text-field>
        <v-text-field v-if="show" v-model="password" label="Instacart Password"></v-text-field>
        <v-btn v-if="show" @click="instaLogin">Login</v-btn>
      </v-form>
    </v-card>
    <v-card v-if="Authenticated" class="p-3">
        <v-card-title>Searching for Ingredients...</v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TheInstacart",
  methods: {
    instaLogin: function() {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios.post(
        "/api/v1/instacart/login",
        {
          input: {
            email: this.email,
            password: this.password
          }
        },
        config
      ).then((result) => {
          localStorage.setItem('_instacart_session', result.data._instacart_session);
          console.log(result.data._instacart_session);
          this.Authenticated = true; //we will need to handle this in a more solid way in the future.
      }).catch((err) => {
          console.log(err);
          this.errorLogin = "Something went wrong, please try again."
      });;
    },
    showForm: function() {
      this.show = true;
    }
  },
  data() {
    return {
      email: null,
      password: null,
      show: false,
      errorLogin: null,
      Authenticated: false,
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
