<template>
  <div class="py-3" v-if="!Authenticated">
    <v-btn class="mx-3" v-if="!show" @click="showForm">Add to Instacart</v-btn>
    <v-card-title v-if="show">Please Login to Instacart</v-card-title>
    <v-card-subtitle color="red--text">{{errorLogin}}</v-card-subtitle>
    <v-form class="m-3">
      <v-text-field v-if="show" v-model="email" label="Instacart Email"></v-text-field>
      <v-text-field v-if="show" v-model="password" label="Instacart Password"></v-text-field>
      <v-btn v-if="show" @click="instaLogin">Login</v-btn>
    </v-form>
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
          this.getUserCart();
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
      //lets get the ingredients array from store
      let ingred = this.$store.state.ingredients;
      //lets build an array of query strings
      let queries = [];
      for( let i = 0; i < ingred.length; i++){
        queries.push(ingred[i].name);
      }
      //lets send the bulk queries to the api wrapper and let it do the heavy lifting.
      axios
        .post(
          "api/v1/instacart/search",
          {
            input: {
              query: queries,
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
          let user = JSON.parse(result.data.user);
          this.cartID = user.active_cart.id;
        })
        .catch(err => {
          console.log(err);
        });
    },
    addToCart() {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios
        .post(
          "/api/v1/instacart/cart/add",
          {
            input: {
              items: [
                {
                  item_id: "item_539228415",
                  quantity: 3
                }
              ],
              cookie: localStorage["_instacart_session"],
              cartID: this.cartID
            }
          },
          config
        )
        .then(result => {
          console.log(result.data.msg, result.data.body);
          this.updateMP();
        })
        .catch(err => {
          console.log(err, err.msg, err.err);
        });
    },
    updateMP() {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios
        .post("api/v1/meal-plan/status", {
          meals: this.$store.state.spoonIDs,
          status: 'active',
        }, config)
        .then(result => {
          console.log(result.data.msg);
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
      query: null,
      cartID: null
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
