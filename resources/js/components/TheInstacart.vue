<template>
  <div>
    <v-card>
      <v-btn v-if="!show" @click="showForm">Add to Instacart</v-btn>
      <v-card-title v-if="show">Please Login to Instacart</v-card-title>
      <v-form>
        <v-text-field v-if="show" v-model="email" label="Instacart Email"></v-text-field>
        <v-text-field v-if="show" v-model="password" label="Instacart Password"></v-text-field>
        <v-btn v-if="show" @click="instaLogin">Login</v-btn>
      </v-form>
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
          this.$store.commit('storeToken', result.data._instacart_session);
          console.log(result.data._instacart_session);
      }).catch((err) => {
          console.log(err);
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
      show: false
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
