<template>
  <div>
    <TheNav />
    <v-card class="my-3">
      <v-card-title>Hello {{username}}</v-card-title>
      <v-btn class="m-3" @click="showUser">My info</v-btn>
      <v-btn class="m-3" @click="showFamily">Family Info</v-btn>
    </v-card>
    <v-card class="my-3" v-if="showOne">
      <v-card-title>My Info</v-card-title>
      <v-card-subtitle>Email: {{email}}</v-card-subtitle>
      <v-card-subtitle>Age Group: {{userAgeGroup}}</v-card-subtitle>
      <v-card-subtitle>Diet: {{userDiet}}</v-card-subtitle>
      <v-card-subtitle>I Can't Eat: {{userPref}}</v-card-subtitle>
    </v-card>
    <v-card class="my-3" v-if="showTwo">
      <v-card-title>Family Info</v-card-title>
      <div v-for="member in family" v-bind:key="member.id">
        <v-card-subtitle>Name: {{member.id}}</v-card-subtitle>
        <v-card-subtitle>Age Group: {{member.member_age_group}}</v-card-subtitle>
        <v-card-subtitle>Diet: {{member.member_diet}}</v-card-subtitle>
        <v-card-subtitle>I can't have: {{member.member_pref}}</v-card-subtitle>
      </div>
    </v-card>
  </div>
</template>

<script>
// import config from '../../axiosConfig.js';
import TheNav from "../../components/TheNavigation.vue";
export default {
  name: "Profile",
  components: {
    TheNav
  },
  data() {
    return {
      username: null,
      email: null,
      userAgeGroup: null,
      userDiet: null,
      userPref: null,
      showOne: false,
      showTwo: false,
      family: null
    };
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
    }
  },
  mounted() {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user-token")
      }
    };
    axios
      .post("/api/v1/family/profile", { msg: "hello?" }, config)
      .then(result => {
        console.log(result.data);
        let profile = result.data.profile;
        this.username = profile[0].name;
        this.email = profile[0].email;
        this.userAgeGroup = profile[1][0].member_age_group;
        this.userDiet = profile[1][0].member_diet;
        this.userPref = profile[1][0].member_pref;
        this.family = profile[2];
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
</style>