<template>
  <div class="mb-3">
    <!-- a place to display a meal plan from spoonacular -->
    <v-card-title>My Meal Plan</v-card-title>
    <v-btn v-if="show1" @click="createMealPlan">Create Meal Plan</v-btn>
    <v-btn v-if="!show1" @click="showBreakfast">Breakfast</v-btn>
    <v-btn v-if="!show1" @click="showLunch">Lunch</v-btn>
    <v-btn v-if="!show1" @click="showSupper">Supper</v-btn>
    <v-btn v-if="!show1" @click="saveMeals">Save Meal Plan</v-btn>
    <div v-if="show2">
      <v-card-title>Breakfast</v-card-title>
      <the-recipe
        v-for="meal in breakfast"
        v-bind:key="meal.id"
        :title="meal.title"
        :imgURL="meal.image"
        :prepTime="meal.preparationMinutes"
        :readyTime="meal.readyInMinutes"
        :ingredients="meal.missedIngredients"
        :instruct="meal.analyzedInstructions[0].steps"
        :cookingTime="meal.cookingMinutes"
      ></the-recipe>
    </div>
    <div v-if="show3">
      <v-card-title>Lunch</v-card-title>
      <the-recipe
        v-for="meal in lunch"
        v-bind:key="meal.id"
        :title="meal.title"
        :imgURL="meal.image"
        :prepTime="meal.preparationMinutes"
        :readyTime="meal.readyInMinutes"
        :ingredients="meal.missedIngredients"
        :instruct="meal.analyzedInstructions[0].steps"
        :cookingTime="meal.cookingMinutes"
      ></the-recipe>
    </div>
    <div v-if="show4">
      <v-card-title>Supper</v-card-title>
      <the-recipe
        v-for="meal in supper"
        v-bind:key="meal.id"
        :title="meal.title"
        :imgURL="meal.image"
        :prepTime="meal.preparationMinutes"
        :readyTime="meal.readyInMinutes"
        :ingredients="meal.missedIngredients"
        :instruct="meal.analyzedInstructions[0].steps"
        :cookingTime="meal.cookingMinutes"
      ></the-recipe>
    </div>
  </div>
</template>

<script>
import TheRecipe from "./TheRecipe.vue";

export default {
  name: "TheMealPlan",
  data() {
    return {
      show1: true,
      show2: false,
      show3: false,
      show4: false
    };
  },
  computed: {
    breakfast: function() {
      return this.$store.state.breakfast;
    },
    lunch: function() {
      return this.$store.state.lunch;
    },
    supper: function() {
      return this.$store.state.supper;
    }
  },
  methods: {
    createMealPlan() {
      //a function to get a meal plan from spoon
      this.show1 = false;
      this.$store.dispatch("createMealPlan");
      this.showBreakfast();
    },
    showBreakfast() {
      if (this.show2 == false) {
        this.show2 = true;
        this.show3 = false;
        this.show4 = false;
      } else {
        this.show2 = false;
      }
    },
    showLunch() {
      if (this.show3 == false) {
        this.show3 = true;
        this.show4 = false;
        this.show2 = false;
      } else {
        this.show3 = false;
      }
    },
    showSupper() {
      if (this.show4 == false) {
        this.show4 = true;
        this.show3 = false;
        this.show2 = false;
      } else {
        this.show4 = false;
      }
    },
    saveMeals() {
      this.$store.dispatch('saveMeals'); 
    }
  },
  mounted() {},
  props: {},
  components: {
    TheRecipe
  }
};
</script>

<style lang="scss" scoped>
</style>
