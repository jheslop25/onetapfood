<template>
  <div>
    <v-card class="p-3">
      <v-card :color="selectedColorOne" class="my-3" @click="selectPlanOne">
        <v-row class="px-3">
          <v-card-subtitle class="col-6">Basic</v-card-subtitle>
          <v-card-subtitle class="col-6">15 days free, then $7/mo.</v-card-subtitle>
        </v-row>
      </v-card>
      <v-card :color="selectedColorTwo" class="my-3" @click="selectPlanTwo">
        <v-row class="px-3">
          <v-card-subtitle class="col-6">Premium</v-card-subtitle>
          <v-card-subtitle class="col-6">15 days free, then $15/mo.</v-card-subtitle>
        </v-row>
      </v-card>
      <v-card class="p-3">
        <v-text-field
          autofocus
          prepend-icon="mdi-card-account-details-outline"
          class="m-3"
          id="card-holder-name"
          v-model="name"
          label="Card Holder Name"
        ></v-text-field>
        <div class="m-3" id="card-element"></div>
        <!-- <v-btn id="add-card-button" class="m-3" @click="submitPaymentMethod()">Save Payment Method</v-btn> -->
      </v-card>
      <v-btn color="blue accent-4 white--text" class="m-3" @click="submitPaymentMethod()">
        <v-icon left color="white">mdi-arrow-right-circle-outline</v-icon>Subscribe
      </v-btn>
    </v-card>
  </div>
</template>

<script>
//this component was created in part by following an excellent
//tutorial from Dan Pastori https://serversideup.net/creating-a-stripe-subscription-with-laravel-cashier-laravel-passport/.
export default {
  name: "TheSignUp",
  data() {
    return {
      stripeAPIToken: "pk_test_Lzn1cZLlZN6K1jdrxE7aCeBc",
      stripe: "",
      elements: "",
      card: "",
      intentToken: "",
      name: "",
      addPaymentStatus: 0,
      addPaymentStatusError: "",
      paymentMethods: [],
      paymentMethodsLoadStatus: 0,
      paymentMethodSelected: {},
      selectedPlan: "plan_HC7gOF85Bn5CfQ",
      selectedColorOne: "green accent-2",
      selectedColorTwo: "white"
    };
  },
  mounted() {
    this.includeStripe(
      "js.stripe.com/v3/",
      function() {
        this.configureStripe();
      }.bind(this)
    );
    this.loadIntent();
    this.loadPaymentMethods();
  },
  methods: {
    selectPlanOne: function() {
      this.selectedPlan = "plan_HC7gOF85Bn5CfQ";
      this.selectedColorOne = "green accent-2";
      this.selectedColorTwo = "white";
    },
    selectPlanTwo: function() {
      this.selectedPlan = "plan_HC7myo3NX0wgfx";
      this.selectedColorTwo = "green accent-2";
      this.selectedColorOne = "white";
    },
    includeStripe(URL, callback) {
      let documentTag = document,
        tag = "script",
        object = documentTag.createElement(tag),
        scriptTag = documentTag.getElementsByTagName(tag)[0];
      object.src = "//" + URL;
      if (callback) {
        object.addEventListener(
          "load",
          function(e) {
            callback(null, e);
          },
          false
        );
      }
      scriptTag.parentNode.insertBefore(object, scriptTag);
    },
    configureStripe() {
      this.stripe = Stripe(this.stripeAPIToken);

      this.elements = this.stripe.elements();
      this.card = this.elements.create("card");

      this.card.mount("#card-element");
    },
    loadIntent() {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios.get("/api/user/setup-intent", config).then(
        function(response) {
          this.intentToken = response.data;
        }.bind(this)
      );
    },
    submitPaymentMethod() {
      this.addPaymentStatus = 1;

      this.stripe
        .confirmCardSetup(this.intentToken.client_secret, {
          payment_method: {
            card: this.card,
            billing_details: {
              name: this.name
            }
          }
        })
        .then(
          function(result) {
            if (result.error) {
              this.addPaymentStatus = 3;
              this.addPaymentStatusError = result.error.message;
            } else {
              this.savePaymentMethod(result.setupIntent.payment_method);
              this.addPaymentStatus = 2;
              this.card.clear();
              this.name = "";
            }
          }.bind(this)
        );
    },
    savePaymentMethod(method) {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios
        .post(
          "/api/user/payments",
          {
            payment_method: method
          },
          config
        )
        .then(
          function() {
            this.loadPaymentMethods();
            this.updateSubscription();
          }.bind(this)
        );
    },
    loadPaymentMethods() {
      this.paymentMethodsLoadStatus = 1;
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios.get("/api/user/payment-methods", config).then(
        function(response) {
          this.paymentMethods = response.data;
        }.bind(this)
      );
    },
    removePaymentMethod(paymentID) {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios
        .post(
          "/api/user/remove-payment",
          {
            id: paymentID
          },
          config
        )
        .then(
          function(response) {
            this.loadPaymentMethods();
          }.bind(this)
        );
    },
    updateSubscription() {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios
        .put(
          "/api/user/subscription",
          {
            plan: this.selectedPlan,
            payment: this.paymentMethodSelected
          },
          config
        )
        .then(
          function(response) {
            alert("You Are Subscribed!");
          }.bind(this),
          this.$router.push("/main")
        );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
