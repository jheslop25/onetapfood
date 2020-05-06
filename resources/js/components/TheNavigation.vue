<template>
  <div class="row justify-content-center">
    <v-spacer></v-spacer>
    <router-link :to="{ name: 'main'}">
      <v-icon x-large color="blue accent-4">mdi-home-circle</v-icon>
    </router-link>
    <v-spacer></v-spacer>
    <router-link :to="{ name: 'profile'}">
      <v-icon x-large color="blue accent-4">mdi-account-circle-outline</v-icon>
    </router-link>
    <v-spacer></v-spacer>
    <router-link :to="{ name: 'pantry'}">
      <v-icon x-large color="blue accent-4">mdi-format-list-bulleted-square</v-icon>
    </router-link>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
export default {
  name: "TheNavigation",
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
