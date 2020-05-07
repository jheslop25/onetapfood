<template>
  <div>
    <v-card class="m-3 p-3 row justify-content-center">
      <v-card-title>{{title}}</v-card-title>
      <v-img max-width="200" :src="imgURL"></v-img>
      <v-card-text>Prep Time: {{prepTime}}</v-card-text>
      <v-card-text>Cooking Time: {{cookingTime}}</v-card-text>
      <v-card-text>Ready In: {{readyTime}}</v-card-text>
      <v-btn class="m-3" @click="showDetails">Show Details</v-btn>
      <div v-if="show1">
        <v-card-title v-if="show1">Ingredients</v-card-title>
        <v-row v-for="item in ingredients" v-bind:key="item.id">
          <v-col><v-text>{{item.original}}</v-text></v-col>
        </v-row>
        <v-card-title v-if="show1">Instructions</v-card-title>
        <div class="p-1" v-for="step in instruct" v-bind:key="step.step">
          <v-card-subtitle>{{step.step}}</v-card-subtitle>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TheRecipe",
  data() {
    return {
      show1: false
    };
  },
  methods: {
    showDetails() {
      if (this.show1 == true) {
        this.show1 = false;
      } else {
        this.show1 = true;
      }
    }
  },
  mounted() {},
  props: {
    title: String,
    imgURL: String,
    prepTime: Number,
    readyTime: Number,
    ingredients: Array,
    instruct: Array,
    cookingTime: Number
  }
};
</script>

<style lang="scss" scoped>
</style>
