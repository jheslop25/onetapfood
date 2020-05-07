<template>
  <div>
    <v-card class="m-3 p-3 row justify-content-center">
      <p class="h5">{{title}}</p>
      <v-img max-width="200" :src="imgURL"></v-img>
      <v-card-text>
        <v-icon left color="blue accent-4">mdi-clock-outline</v-icon>
        Prep: {{prepTime}}
      </v-card-text>
      <v-card-text>
        <v-icon left color="blue accent-4">mdi-clock-outline</v-icon>
        Cooking: {{cookingTime}}
      </v-card-text>
      <v-card-text>
        <v-icon left color="blue accent-4">mdi-clock-outline</v-icon>
        Ready In: {{readyTime}}
      </v-card-text>
      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Details</v-btn>
        </template>

        <v-card>
          <v-card-title color="blue accent-4">Ingredients</v-card-title>
          <v-row v-for="item in ingredients" v-bind:key="item.id">
            <v-col>
              <v-icon left color="blue accent-4">mdi-circle-small</v-icon>
              <v-card-text>
                {{item.original}}
              </v-card-text>
            </v-col>
          </v-row>

          <v-card-title color="blue accent-4">Instructions</v-card-title>
          <div class="p-1" v-for="step in instruct" v-bind:key="step.step">
            <v-icon left color="blue accent-4">mdi-circle-small</v-icon>
            <v-card-text>
              {{step.step}}
            </v-card-text>
          </div>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue accent-4" text @click="dialog = false">Close</v-btn>
          <!-- <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn> -->
        </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TheRecipe",
  data() {
    return {
      show1: false,
      dialog: false
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
