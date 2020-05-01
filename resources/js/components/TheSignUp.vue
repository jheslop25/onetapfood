<template>
  <div>
    <v-card class="m-3 p-3">
        <v-card-title>Choose a subscription</v-card-title>
      <v-card class="m-3 row" @click="selectedPlan = 'plan_HC7gOF85Bn5CfQ'">
        <v-card-subtitle class="col-6">Basic</v-card-subtitle>
        <v-card-subtitle class="col-6">$7/mo.</v-card-subtitle>
      </v-card>
      <v-card class="m-3 row" @click="selectedPlan = 'plan_HC7myo3NX0wgfx'">
        <v-card-subtitle class="col-6">Premium</v-card-subtitle>
        <v-card-subtitle class="col-6">$15/mo.</v-card-subtitle>
      </v-card>
      <v-card class="m-3">
          <v-text-field class="m-3" id="card-holder-name" v-model="name" label="Card Holder Name"></v-text-field>
      <div class="m-3" id="card-element"></div>
      <v-btn id="add-card-button" class="m-3" @click="submitPaymentMethod()">Save Payment Method</v-btn>
      </v-card>
      <v-btn class="m-3" @click="updateSubscription">Subscribe</v-btn>
    </v-card>
  </div>
</template>

<script>
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
      selectedPlan: ""
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
          }.bind(this)
        );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
