<template>
  <v-app>
    <v-app-bar color="primary" app>
      <go-back />
      <v-spacer></v-spacer>
      <div v-if="showLogin == false">
        <router-link :to="{ name: 'login'}">
        <v-btn>
          <v-icon left color="blue accent-4">mdi-account-circle-outline</v-icon>
          login
        </v-btn>
      </router-link>
      </div>
      <v-btn v-if="showLogin == true" @click="logout">
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
  computed: {
    showLogin: function(){
      return this.$store.state.loggedIn;
    }
  },
  mounted() {
    this.$store.dispatch("getProfile");
    //this.$store.dispatch('getMealPlan');
    if(localStorage.getItem('user-token')){
      this.$store.state.loggedIn = true;
    } else {
      this.$store.state.loggedIn = false;
    }
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
          this.$store.state.loggedIn = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
