<template>
  <div>
    <v-card class="m-3 p-3">
      <!-- a place to display a meal plan from spoonacular -->
      <v-card-title>My Meal Plan</v-card-title>
      <v-btn @click="createMealPlan">Create Meal Plan</v-btn>
      <the-recipe v-for="meal in meals" v-bind:key="meal.id" :title="meal.title" :imgURL="meal.image"></the-recipe>
    </v-card>
  </div>
</template>

<script>
import TheRecipe from "./TheRecipe.vue";

export default {
  name: "TheMealPlan",
  data() {
    return {
      meals: null,
      spoonApi: "?apiKey=b2408b5b91424531aa6d57aa58070853",
      q: "&query=steak and eggs",
      diet: "&diet=whole30",
      spoonUrl: "https://api.spoonacular.com/recipes/complexSearch"
    };
  },
  methods: {
    createMealPlan() {
      //a function to get a meal plan from spoon
      axios
        .get(this.spoonUrl + this.spoonApi + this.q + this.diet)
        .then(result => {
            console.log(result.data.results);
            this.meals = result.data.results;
        })
        .catch(err => {
            console.log(err);
        });
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
