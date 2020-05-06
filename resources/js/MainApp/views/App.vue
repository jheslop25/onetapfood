<template>
  <v-app>
    <v-app-bar color="primary" app>
      <go-back />
      <v-spacer></v-spacer>
      <router-link v-if="!show" :to="{ name: 'login'}">
        <v-btn>
          <v-icon left color="blue accent-4">mdi-account-circle-outline</v-icon>
          login
        </v-btn>
      </router-link>
      <v-btn v-if="show" @click="logout">
        <v-icon left medium="true" color="blue accent-4">mdi-logout-variant</v-icon>
        Logout
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="primary" app>
      <v-btn color="success">bye</v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import GoBack from "../../components/GoBack.vue";
export default {
  name: "App",
  components: {
    GoBack
  },
  mounted() {
    this.$store.dispatch("getProfile");
    //this.$store.dispatch('getMealPlan');
  },
  methods: {
    logout: function() {
      let context = this;
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios
        .post(
          "api/user/logout",
          {
            userID: localStorage["user-id"]
          },
          config
        )
        .then(result => {
          console.log(result.data.msg);
          context.$router.push("/");
          localStorage.removeItem("user-token");
          localStorage.removeItem("user-id");
          localStorage.clear();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    show(){
      if(localStorage['user-token'] != null){
        return true;
      } else {
        return false
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
