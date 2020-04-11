<template>
  <v-form class="card" ref="form" >
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
          axios.post('/api/user/login', {
              email: this.email,
              password: this.password
          }).then((result) => {
              console.log(result.data);
          }).catch((err) => {
              console.log(err);
          });
      }
  }
};
</script>


<style scoped>
</style>
