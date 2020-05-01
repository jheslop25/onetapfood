<template>
  <div>
    <v-card class="p-3">
      <v-card-title>Manage Your Subscription</v-card-title>
      <v-text-field class="m-3" id="card-holder-name" v-model="name" label="Card Holder Name"></v-text-field>
      <div class="m-3" id="card-element"></div>
      <v-btn id="add-card-button" class="m-3" @click="submitPaymentMethod()">Save Payment Method</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TheSubscription",
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
      paymentMethods: []
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
      axios
        .post("/api/user/payments", {
          payment_method: method
        })
        .then(
          function() {
            this.loadPaymentMethods();
          }.bind(this)
        );
    },
    loadPaymentMethods() {
      axios.get("/api/user/payment-methods").then(
        function(response) {
          this.paymentMethods = response.data;
        }.bind(this)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
