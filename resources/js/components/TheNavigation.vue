<template>
  <div>
    <v-btn color="secondary">
      <router-link :to="{ name: 'main'}">Main</router-link>
    </v-btn>
    <v-btn color="secondary">
      <router-link :to="{ name: 'cooking'}">Cook</router-link>
    </v-btn>
    <v-btn color="secondary">
      <router-link :to="{ name: 'profile'}">Profile</router-link>
    </v-btn>
    <v-btn @click="logout">Logout</v-btn>
  </div>
</template>

<script>
export default {
  name: "TheNavigation",
  methods: {
      logout: function(){
          let context = this;
          axios.post('api/user/logout', {
              userID: localStorage['user-id']
          }).then((result) => {
              console.log(result.data.msg);
              context.$router.push('/');
              localStorage.removeItem('user-token');
              localStorage.removeItem('user-id');
          }).catch((err) => {
              console.log(err);
          });
      },
      reloadWindow: function(){
          window.location.reload();
      }
  }
};
</script>

<style lang="scss" scoped>
</style>
