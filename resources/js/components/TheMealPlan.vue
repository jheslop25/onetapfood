<template>
  <v-row justify="center">
    <!-- a place to display a meal plan from spoonacular -->
    <v-btn v-if="show1" @click="createMealPlan">Create Meal Plan</v-btn>
    <v-row v-if="!show1" justify="center">
      <v-col class="p-4" sm="4" md="3">
        <v-btn v-if="!show1" @click="showBreakfast">Breakfast</v-btn>
      </v-col>
      <v-col class="p-4" sm="4" md="3">
        <v-btn v-if="!show1" @click="showLunch">Lunch</v-btn>
      </v-col>
      <v-col class="p-4" sm="4" md="3">
        <v-btn v-if="!show1" @click="showSupper">Supper</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center" v-if="show2">
      <the-recipe
        class="col-md-4"
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
    </v-row>
    <v-row justify="center" v-if="show3">
      <the-recipe
        class="col-md-4"
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
    </v-row>
    <v-row justify="center" v-if="show4">
      <the-recipe
        class="col-md-4"
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
    </v-row>
  </v-row>
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
    saveIngred() {
      this.$store.dispatch("saveIngredients");
    },
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
      this.$store.dispatch("saveMeals");
    }
  },
  mounted() {
    this.$store.dispatch('getSavedIngred');
  },
  props: {},
  components: {
    TheRecipe
  }
};
</script>

<style lang="scss" scoped>
</style>
