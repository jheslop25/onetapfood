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
    <v-card class="m-3 p-3">
      <v-card-title>Add Items to Cart</v-card-title>
      <v-btn @click="addToCart">Add</v-btn>
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
                  quantity: 8,
                  source_type: "store_root_department",
                  source_value: 11963,
                  tracking: {
                    source_type: "store_root_department",
                    source_value: 11963,
                    analytics_debug: false,
                    api_version: "3",
                    country_id: 124,
                    currency: "CAD",
                    guest: false,
                    inventory_area_id: 22545,
                    inventory_area_id_list: [22545],
                    is_new_user: true,
                    platform: "web",
                    region: "Calgary, AB",
                    region_id: 235,
                    service_type: "delivery",
                    user_id: 80436998,
                    warehouse_id: 351,
                    warehouse_id_list: [351],
                    whitelabel_id: 1,
                    whitelabel_retailer: "instacart",
                    wl_exclusive: "instacart",
                    zip_active: true,
                    zip_code: "T4B3V1",
                    zone_id: 1550,
                    ahoy_visit_token: "1a4f0474-2974-4bee-b29a-95e3897e8e7d",
                    ahoy_visitor_token: "cdbc586b-73f5-4cf4-80de-765e8f15d634",
                    m_id:
                      "4b26576bc27b7d8f304bc7c5ef550bf3dfda12e9a9d487c8a0c6b64a23af6a09",
                    user_channel_1: "store",
                    storefront_ssr_initial_bundle: true,
                    store: "real-canadian-superstore",
                    source1: "store_root_department",
                    product_flow: "store",
                    cart_id: 54133112,
                    source2: 11963,
                    item_id: 539228415,
                    original_position: 1,
                    availability_model_score: 0.969,
                    product_id: 2748189,
                    price_bucket: 1,
                    aisle_name: "Fresh Fruits",
                    display_name: "Banana",
                    item_card_impression_id:
                      "e3d6d615-aa59-4c92-b002-b936c953d5c1",
                    cartQty: 0,
                    qtyDiff: 1,
                    source3: null
                  },
                  item_tasks: [],
                  interactions: [
                    {
                      type: "item_interaction/add_to_cart",
                      data: {}
                    }
                  ],
                  qty_type: null
                }
              ],

              cookie: localStorage["_instacart_session"],
              cartID: "54133112"
            }
          },
          config
        )
        .then(result => {
          console.log(result.data.msg, result.data.body);
        })
        .catch(err => {
          console.log(err, err.msg, err.err);
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
