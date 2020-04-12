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
          axios.post('api/user/logout', {
              userID: this.$store.state.user.id
          }).then((result) => {
              console.log(result.data.msg);
              this.$store.user = null;
              this.$store.token = null;
              this.$router.push('/');
          }).catch((err) => {
              console.log(err);
          });
      }
  }
};
</script>

<style lang="scss" scoped>
</style>
