<template>
  <v-app>
    <v-app-bar color="primary" app>
      <v-btn color="secondary">
        <router-link :to="{ name: 'main'}">Main</router-link>
      </v-btn>
      <v-btn color="secondary">
        <router-link :to="{ name: 'cooking'}">Cook</router-link>
      </v-btn>
      <v-btn color="secondary">
        <router-link :to="{ name: 'onboard'}">Onboard</router-link>
      </v-btn>
      <v-btn color="secondary">
        <router-link :to="{ name: 'service'}">Service</router-link>
      </v-btn>
      <v-btn color="secondary">
        <router-link :to="{ name: 'vendor'}">Vendor</router-link>
      </v-btn>
      <v-btn color="secondary">
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
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
</style>
