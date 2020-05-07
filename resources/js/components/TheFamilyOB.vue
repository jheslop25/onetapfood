<template>
  <div id="fam-container">
    <v-card max-width="600" >
      <v-row justify="center">
        <v-col v-for="n in this.count" v-bind:key="n" :num="n" md="12">
          <fam-form  />
        </v-col>
        <v-col>
          <v-row justify="center">
            <v-col sm="8" md="6">
              <v-btn class="mx-4" v-if="show" @click="addFam">
                <v-icon left color="blue accent-4">mdi-account-multiple-plus-outline</v-icon>Add Family Member
              </v-btn>
            </v-col>
            <v-col sm="8" md="6">
              <v-btn class="mx-4" v-if="show" color="primary" @click="goToSub">
                <v-icon left color="white">mdi-account-check-outline</v-icon>Next
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import FamForm from "./TheFamSubForm.vue";
export default {
  name: "FamilyOB",
  data() {
    return {
      show: true,
      count: 0
    };
  },
  components: {
    FamForm
  },
  methods: {
    addFam: function() {
      this.count++;
      this.show = false;
    },
    goToSub: function() {
      this.$root.$emit("subscription");
    }
  },
  mounted() {
    this.$root.$on("addMOAR", this.addFam);
  }
};
</script>

<style lang="scss" scoped>
</style>