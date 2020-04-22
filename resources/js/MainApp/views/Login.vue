<template>
  <v-form class="card m-5 p-3" ref="form" >
      <p class="h6 red--text">{{ error }}</p>
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
          password: '',
          error: ''
      }
  },
  methods: {
      login: function () {
          let context = this;
           axios.post('/api/user/login', {
                email: this.email,
                password: this.password
            }).then((result) => {
                localStorage.setItem('user-token', result.data.access_token.accessToken);
                localStorage.setItem('user-id', result.data.user.id);
                context.$router.push('/main');
            }).catch((err) => {
                console.log(err);
                context.error = "Sorry, something went wrong. We couldn't log you in.";
            });
      }
  }
};
</script>


<style scoped>
</style>
