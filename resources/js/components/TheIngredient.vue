<template>
  <v-card class="p-2">
    <v-row justify="center">
      <v-col><v-icon left color="blue accent-4">mdi-bowl-mix-outline</v-icon>{{name}}</v-col>
      <v-col><v-icon left color="blue accent-4">mdi-scale</v-icon>{{quant}}</v-col>
      <v-col>{{unit}}</v-col>
      <v-col><v-icon left color="blue accent-4">mdi-currency-usd</v-icon>{{unitPrice}}</v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "TheIngredient",
  props: {
    name: String,
    unit: String,
    quant: Number,
    unitPrice: Number
  }
};
</script>

<style lang="scss" scoped>
</style>