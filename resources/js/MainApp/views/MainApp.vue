<template>
  <div>
    <v-app-bar>
      <TheNav />
    </v-app-bar>
    <!-- <test /> -->
  </div>
</template>

<script>
import TheNav from "../../components/TheNavigation.vue";
// import Test from "../views/Test.vue";
export default {
  name: "Main",
  components: {
    TheNav,
    // Test
  }
};
</script>

<style lang="scss" scoped>
</style>
