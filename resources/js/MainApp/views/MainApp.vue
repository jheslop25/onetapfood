<template>
  <div>
      <TheNav />
      <the-meal-plan></the-meal-plan>
      <the-instacart></the-instacart>
  </div>
</template>

<script>
import TheNav from "../../components/TheNavigation.vue";
import TheMealPlan from '../../components/TheMealPlan.vue';
import TheInstacart from '../../components/TheInstacart.vue';

export default {
  name: "Main",
  components: {
    TheNav,
    TheMealPlan,
    TheInstacart
  }
};
</script>

<style lang="scss" scoped>
</style>
