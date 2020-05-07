<template>
  <div>
    <TheNav class="m-3"/>
    <div class="row justify-content-center">
      <v-card max-width="400" class="m-3 col-md-4">
      <p class="text-center h4">Hello {{this.username}}</p>
      <v-btn class="m-3" @click="showUser">My info</v-btn>
      <v-btn class="m-3" @click="showFamily">Family Info</v-btn>
      <v-btn class="m-3" @click="showSub">Manage Subscription</v-btn>
    </v-card>
    <v-card max-width="400" class="m-3 col-md-4" v-if="showOne">
      <v-card-title>My Info</v-card-title>
      <v-card-subtitle>Email: {{this.email}}</v-card-subtitle>
      <v-card-subtitle>Age Group: {{this.userAgeGroup}}</v-card-subtitle>
      <v-card-subtitle>Diet: {{this.userDiet}}</v-card-subtitle>
      <v-card-subtitle>I Can't Eat: {{this.userPref}}</v-card-subtitle>
    </v-card>
    <v-card max-width="400" class="m-3 col-md-4" v-if="showTwo">
      <v-card-title>Family Info</v-card-title>
      <div v-for="member in family" v-bind:key="member.id">
        <v-card-subtitle>Name: {{member.id}}</v-card-subtitle>
        <v-card-subtitle>Age Group: {{member.member_age_group}}</v-card-subtitle>
        <v-card-subtitle>Diet: {{member.member_diet}}</v-card-subtitle>
        <v-card-subtitle>I can't have: {{member.member_pref}}</v-card-subtitle>
      </div>
    </v-card>
    </div>
    <the-subscription v-if="showThree" class="m-3"></the-subscription>
  </div>
</template>

<script>
// import config from '../../axiosConfig.js';
import TheNav from "../../components/TheNavigation.vue";
import TheSubscription from "../../components/TheSubscription.vue";

export default {
  name: "Profile",
  components: {
    TheNav,
    TheSubscription
  },
  data() {
    return {
      showOne: false,
      showTwo: false,
      showThree: false
    };
  },
  computed: {
    username: function(){
      return this.$store.state.username;
    },
    email: function(){
      return this.$store.state.email;
    },
    userAgeGroup: function(){
      return this.$store.state.userAge;
    },
    userDiet: function(){
      return this.$store.state.userDiet;
    },
    userPref: function(){
      return this.$store.state.userPref;
    },
    family: function(){
      return this.$store.state.family;
    }
  },
  methods: {
    showUser: function() {
      if (this.showOne == true) {
        this.showOne = false;
      } else {
        this.showOne = true;
      }
    },
    showFamily: function() {
      if (this.showTwo == true) {
        this.showTwo = false;
      } else {
        this.showTwo = true;
      }
    },
    showSub: function() {
      if (this.showThree == true) {
        this.showThree = false;
      } else {
        this.showThree = true;
      }
    }
  },
  mounted() {
    
  }
};
</script>

<style lang="scss" scoped>
</style>
