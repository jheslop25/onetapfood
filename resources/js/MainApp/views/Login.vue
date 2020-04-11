<template>
  <v-form class="card m-5 p-3" ref="form" >
      <v-text-field v-model="email" label="email"></v-text-field>
      <v-text-field v-model="password" label="password"></v-text-field>
      <v-btn color="sucesss" @click="login">Login</v-btn>
  </v-form>
</template>
<script>
export default {
  name: "Login",
  data(){
      return {
          email: '',
          password: ''
      }
  },
  methods: {
      login: function () {
          let params = {
              email: this.email,
                password: this.password
          }
          this.$store.dispatch('login', params);
      }
  }
};
</script>


<style scoped>
</style>
