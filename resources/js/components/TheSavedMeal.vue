<template>
    <v-card>
        <v-img :src="image"
        class="white--text align-end">
            <v-card-title>{{title}}</v-card-title>
        </v-img>
    <v-card-text>Instructions: {{instructions}}</v-card-text>
    <v-card-subtitle v-for="item in ingredients" v-bind:key="item.id">{{item.amount}} {{item.unit}} of {{item.name}}</v-card-subtitle>
    </v-card>
</template>

<script>
    export default {
        name: "TheSavedMeal",
        props: {
            title: String,
            image: String,
            instructions: String,
            ingredients: Array,
            cookingtime: Number,
            readytime: Number,
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>

</style>