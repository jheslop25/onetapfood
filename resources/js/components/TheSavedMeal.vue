<template>
    <v-card>
        <v-img :src="img"
        class="white--text align-end">
            <v-card-title>{{title}}</v-card-title>
        </v-img>

    </v-card>
</template>

<script>
    export default {
        name: "TheSavedMeal",
        props: {
            title: String,
            img: String,

        }
    }
</script>

<style lang="scss" scoped>

</style>