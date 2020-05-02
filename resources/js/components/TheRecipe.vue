<template>
    <div>
        <v-card>
            <v-card-subtitle>
                {{title}}
            </v-card-subtitle>
            <v-img max-width="200" 
            :src='imgURL'></v-img>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "TheRecipe",
        data(){
            return {

            }
        },
        methods: {

        },
        mounted(){

        },
        props: {
            title: String,
            imgURL: String, 
        }
    }
</script>

<style lang="scss" scoped>

</style>
