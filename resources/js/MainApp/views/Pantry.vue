<template>
  <div>
    <the-nav class="m-3"></the-nav>
    <v-row justify="center">
      <v-col md="4">
        <p class="h4 text-center">My Pantry</p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-card class="col" max-width="800px">
        <v-row justify="center">
          <the-ingredient
            class="col-md-5 m-3"
            v-for="item in pantry"
            v-bind:key="item.id"
            :name="item.ingredient_name"
            :unit="item.unit"
            :quant="item.quantity"
            :unit-price="item.unit_price"
          ></the-ingredient>
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import TheNav from "../../components/TheNavigation.vue";
import TheIngredient from "../../components/TheIngredient.vue";
export default {
  name: "Pantry",
  components: {
    TheNav,
    TheIngredient
  },
  computed: {
    pantry() {
      return this.$store.state.pantry;
    }
  },
  methods: {
    getPantry() {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios
        .get("api/v1/cart/get", config)
        .then(result => {
          this.$store.state.pantry = result.data.cart;
          console.log(this.pantry);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getPantry();
  }
};
</script>

<style lang="scss" scoped>
</style>