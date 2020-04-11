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
  </div>
</template>

<script>
export default {
  name: "TheNavigation"
};
</script>

<style lang="scss" scoped>
</style>
