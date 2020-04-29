<template>
  <div>
    <v-card class="py-3" v-if="!Authenticated">
      <v-btn class="mx-3" v-if="!show" @click="showForm">Add to Instacart</v-btn>
      <v-card-title v-if="show">Please Login to Instacart</v-card-title>
      <v-card-subtitle color="red--text">{{errorLogin}}</v-card-subtitle>
      <v-form class="m-3">
        <v-text-field v-if="show" v-model="email" label="Instacart Email"></v-text-field>
        <v-text-field v-if="show" v-model="password" label="Instacart Password"></v-text-field>
        <v-btn v-if="show" @click="instaLogin">Login</v-btn>
      </v-form>
    </v-card>
    <v-card v-if="Authenticated" class="p-3">
      <v-card-title>Searching for Ingredients...</v-card-title>
      <v-form>
        <v-text-field v-model="query" label="search"></v-text-field>
        <v-btn @click="searchInsta">Search</v-btn>
      </v-form>
    </v-card>
    <v-card class="p-5 m-3">
      <v-card-title>Get user cart</v-card-title>
      <v-btn @click="getUserCart">GET IT</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TheInstacart",
  methods: {
    instaLogin: function() {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios
        .post(
          "/api/v1/instacart/login",
          {
            input: {
              email: this.email,
              password: this.password
            }
          },
          config
        )
        .then(result => {
          localStorage.setItem(
            "_instacart_session",
            result.data._instacart_session
          );
          console.log(result.data._instacart_session);
          console.log(result.data.body);
          this.Authenticated = true; //we will need to handle this in a more solid way in the future.
        })
        .catch(err => {
          console.log(err);
          this.errorLogin = "Please tr went wrong, py again.";
        });
    },
    showForm: function() {
      this.show = true;
    },
    searchInsta: function() {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      console.log("youve decided to tempt your fate");
      axios
        .post(
          "api/v1/instacart/search",
          {
            input: {
              query: this.query,
              cookie: localStorage["_instacart_session"]
            }
          },
          config
        )
        .then(result => {
          console.log(result.data);
          let searchRes = JSON.parse(result.data.res);
          console.log(searchRes.container.modules[3].data.items);
          console.log(searchRes.container.modules);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getUserCart: function() {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios
        .post(
          "/api/v1/instacart/user",
          {
            input: {
              cookie: localStorage["_instacart_session"]
            }
          },
          config
        )
        .then(result => {
            console.log(result.data);
        //   const regex = /\"user_id\":(.*)};/gm;
        //   let str = JSON.stringify(result.data.body);
        //   const user_id = str.match(regex);
        //   console.log(str);
        //   console.log('user_id' + user_id);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  data() {
    return {
      email: null,
      password: null,
      show: false,
      errorLogin: null,
      Authenticated: false,
      query: null
    };
  },
  mounted() {
    if (localStorage["_instacart_session"]) {
      this.Authenticated = true;
    } else {
      this.Authenticated = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
