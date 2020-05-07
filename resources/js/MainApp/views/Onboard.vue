<template>
  <div>
    <v-row justify="center">
      <v-col md="5" lg="5">
        <v-alert
          class="my-3"
          border="left"
          colored-border
          color="blue accent-4"
          elevation="1"
        >{{step}}</v-alert>
      </v-col>
    </v-row>
    <v-row id="onboard-container" justify="center">
      <v-col md="5" lg="5" v-if="!show">
        <user-o-b />
      </v-col>
      <v-col md="5" lg="5" v-if="showFam">
        <family-o-b />
      </v-col>
      <v-col md="5" lg="5" v-if="showSub">
        <the-sign-up class="m-3"></the-sign-up>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TheNav from "../../components/TheNavigation.vue";
import UserOB from "../../components/TheUserOB.vue";
import FamilyOB from "../../components/TheFamilyOB.vue";
import TheSignUp from "../../components/TheSignUp.vue";

export default {
  name: "Onboard",
  components: {
    TheNav,
    UserOB,
    FamilyOB,
    TheSignUp
  },
  data() {
    return {
      show: false,
      showFam: false,
      showSub: false,
      step: "Step 1: Tell us about yourself."
    };
  },
  methods: {
    showNext: function() {
      this.show = true;
      this.showFam = true;
      this.step = "Step 2: Tell us how many people you shop for.";
    },
    showSubBox: function() {
      this.showSub = true;
      this.showFam = false;
      this.step = "Step 3: Choose your plan.";
    }
  },
  mounted() {
    this.$root.$on("user-next", this.showNext);
    this.$root.$on("subscription", this.showSubBox);
  }
};
</script>

<style lang="scss" scoped>
</style>
