<template>
  <div>
    <v-btn color="secondary">
      <router-link :to="{ name: 'main'}">Main</router-link>
    </v-btn>
    <v-btn color="secondary">
      <router-link :to="{ name: 'cooking'}">Cook</router-link>
    </v-btn>
    <v-btn color="secondary">
      <router-link :to="{ name: 'onboard'}">Onboard</router-link>
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
              userID: this.$store.state.user.id
          }).then((result) => {
              console.log(result.data.msg);
              console.log(context.$store.token);
              context.$store.user = null;
              context.$store.token = null;
              console.log(context.$store.token);
              context.$router.push('/');
              context.reloadWindow();
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
