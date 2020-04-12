<template>
  <v-app>
    <v-app-bar color="primary" app>
        <go-back/>
        <v-spacer></v-spacer>
      <v-btn class="mx-2" color="secondary">
        <router-link :to="{ name: 'login'}">Login</router-link>
      </v-btn>
      <v-btn class="mx-2" color="secondary">
        <router-link :to="{ name: 'register'}">Register</router-link>
      </v-btn>
      <v-btn class="mx-2" color="secondary">
        <router-link :to="{ name: 'home'}">Home</router-link>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="primary" app>
      <v-btn color="success">bye</v-btn>
    </v-footer>
  </v-app>
</template>

<script>

import GoBack from '../../components/GoBack.vue';
export default {
  name: "App",
  components: {
      GoBack
  }
};
</script>

<style lang="scss" scoped>
</style>
