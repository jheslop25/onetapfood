<template>
  <div class="py-3">
    <v-row v-if="!Authenticated">
      <v-btn class="mx-3" v-if="!show" @click="showForm">Add to Instacart</v-btn>
      <v-card-title v-if="show">Please Login to Instacart</v-card-title>
      <v-card-subtitle color="red--text">{{errorLogin}}</v-card-subtitle>
      <v-form class="m-3">
        <v-text-field v-if="show" v-model="email" label="Instacart Email"></v-text-field>
        <v-text-field v-if="show" v-model="password" label="Instacart Password"></v-text-field>
        <v-btn v-if="show" @click="instaLogin">Login</v-btn>
      </v-form>
    </v-row>
    <v-btn @click="searchInsta">Search</v-btn>
    <v-btn @click="getUserCart">cartID</v-btn>
  </div>
</template>

<script>
import elasticlunr from "elasticlunr";
import convertUnits from "convert-units";

var search = elasticlunr();
search.addField("id");
search.addField("name");
search.setRef("id");

var convert = convertUnits();

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
      console.log("youve decided to tempt your fate... good luck");

      //lets build an array of query strings
      // let queries = [];
      // let ingred = this.$store.state.ingredients;
      // for (let i = 0; i < ingred.length; i++) {
      //   queries.push(ingred[i].name);
      // }
      // console.log(ingred);
      //lets send the bulk queries to the api wrapper and let it do the heavy lifting.
      axios
        .post(
          "api/v1/instacart/search",
          {
            input: {
              query: this.$store.state.ingredients,
              cookie: localStorage["_instacart_session"]
            }
          },
          config
        )
        .then(result => {
          let res = result.data.res;
          console.log(res[0].result);

          for (let i = 0; i < res.length; i++) {
            let set = JSON.parse(res[i].result);
            let q = res[i].query;
            let amount = res[i].amount;
            let unit = res[i].unit;
            // console.log(q);
            // console.log( 'amount: ' + amount);
            // console.log('unit: ' + unit);

            let itemsOne = set.container.modules[2].data.items;
            let itemsTwo = set.container.modules[3].data.items;

            if (itemsOne != null) {
              //console.log(itemsOne[0].unit);
              //console.log(itemsOne[0].size);
              for (let i = 0; i < itemsOne.length; i++) {
                search.addDoc(itemsOne[i]);
              }
              let match = search.search(q);
              //console.log(q);
              //console.log('match :' + match[0].ref);
              if (match.length >= 1) {
                let item = {
                  item_id: match[0].ref,
                  quantity: amount
                };
                this.$store.state.order.push(item);
              }
            } else {
              //console.log(itemsTwo[0].unit);
              //console.log(itemsTwo[0].size);
              for (let i = 0; i < itemsTwo.length; i++) {
                search.addDoc(itemsTwo[i]);
              }
              let match = search.search(q);
              //console.log('match :' + match[0].ref);
              //console.log(q);
              //console.log(match);
              if (match.length >= 1) {
                let item = {
                  item_id: match[0].ref,
                  quantity: amount
                };
                this.$store.state.order.push(item);
              }
            }
          }
          console.log(this.$store.state.order);
          this.addToCart();
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
          localStorage.setItem("card-id", result.data.user[0][1]);
          console.log(this.cartID);
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
              items: this.$store.state.order,
              cookie: localStorage["_instacart_session"],
              cartID: localStorage["card-id"]
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
        .post(
          "api/v1/meal-plan/status",
          {
            meals: this.$store.state.spoonIDs,
            status: "active"
          },
          config
        )
        .then(result => {
          console.log(result.data.msg);
        })
        .catch(err => {
          console.log(err);
        });
    },
    savePantry() {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios
        .post("api/v1/cart/add", {
          input: this.$store.state.ingredients
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
