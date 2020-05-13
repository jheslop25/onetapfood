<template>
  <div>
    <TheNav class="m-3" />
    <v-row justify="center">

      <v-col v-if="showExisting" md="10">
        <the-existing class="m-3 p-3" ></the-existing>
      </v-col>
      <v-col v-if="!showExisting" md="10">
        <the-meal-plan ></the-meal-plan>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="10">
        <the-instacart></the-instacart>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TheNav from "../../components/TheNavigation.vue";
import TheMealPlan from "../../components/TheMealPlan.vue";
import TheInstacart from "../../components/TheInstacart.vue";
import TheExisting from "../../components/TheExistingMeals.vue";

export default {
  name: "Main",
  components: {
    TheNav,
    TheMealPlan,
    TheInstacart,
    TheExisting
  },
  computed: {
    showExisting: function() {
      return this.$store.state.showExisting;
    }
  },
  methods: {
    updateStatus(){
      this.$root.$emit('updateStatus');
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
