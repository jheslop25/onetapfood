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
          let context = this;
           axios.post('/api/user/login', {
                email: this.email,
                password: this.password
            }).then((result) => {
                context.$store.commit('storeUser', result.data.user);
                context.$store.commit('storeToken', result.data.access_token);
                context.$router.push('/main');
            }).catch((err) => {
                console.log(err);
            });
      }
  }
};
</script>


<style scoped>
</style>
