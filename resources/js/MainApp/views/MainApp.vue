<template>
  <div>
      <TheNav />
      <the-existing v-if="showExisting"></the-existing>
      <the-meal-plan></the-meal-plan>
      <the-instacart></the-instacart>
  </div>
</template>

<script>
import TheNav from "../../components/TheNavigation.vue";
import TheMealPlan from '../../components/TheMealPlan.vue';
import TheInstacart from '../../components/TheInstacart.vue';
import TheExisting from '../../components/TheExistingMeals.vue';

export default {
  name: "Main",
  components: {
    TheNav,
    TheMealPlan,
    TheInstacart,
    TheExisting
  },
  computed: {
    showExisting: function(){
      return this.$store.state.showExisting;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
