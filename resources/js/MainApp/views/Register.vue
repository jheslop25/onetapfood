<template>
  <v-form class="card m-5 p-3" ref="form">
    <v-text-field v-model="name" label="Name"></v-text-field>
    <v-text-field v-model="email" label="email"></v-text-field>
    <v-text-field v-model="password" label="password"></v-text-field>
    <v-text-field v-model="location" label="location"></v-text-field>

    <v-btn color="sucesss" @click="register">Register</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "Register",
  data(){
      return {
          email: '',
          password: '',
          name: '',
          location: ''
      }
  },
  methods: {
      register: function () {
          axios.post('/api/user/register', {
              email: this.email,
              password: this.password,
              name: this.name,
              location: this.location,
              status: 'active',
              type: 'user'

          }).then((result) => {
              let data = {
                  email: result.data.user.email,
                  password: this.password
              }
              console.log(data);
              this.$store.dispatch('login', data);
          }).catch((err) => {
              console.log(err);
          });
      }
  }
};
</script>

<style lang="scss" scoped>
</style>
