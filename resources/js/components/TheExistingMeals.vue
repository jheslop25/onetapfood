<template>
  <div>
    Your saved meal plan...
    <v-btn @click="getMeals()">Get Meals</v-btn>
    <the-saved-meal class="m-3" v-for="item in breakfast" v-bind:key="item.id"
        :title="item.title"
        :instructions="item.instructions"
        :ingredients="item.extendedIngredients"
        :image="item.image"
        :cookingtime="item.cookingMinutes"
        :readytime="item.readyInMinutes"
    ></the-saved-meal>
  </div>
</template>

<script>
import TheSavedMeal from "./TheSavedMeal.vue";
export default {
  name: "TheExistingMeals",
  components: {
    TheSavedMeal
  },
  methods: {
    getMeals() {}
  },
  mounted() {
    this.$store.dispatch("getMealPlan");
  },
  computed: {
      breakfast: function(){
          return this.$store.state.breakfastExisting;
      },
      lunch: function(){
          return this.$store.state.lunchExisting;
      },
      supper: function(){
          return this.$store.state.supperExisting;
      },
  }
};
</script>

<style lang="scss" scoped>
</style>