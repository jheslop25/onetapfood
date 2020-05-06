<template>
  <div>
    <router-link :to="{ name: 'register'}">
      <v-btn color="blue accent-4">
          <v-icon left large color="white">mdi-account-plus-outline</v-icon>
          Register
      </v-btn>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
