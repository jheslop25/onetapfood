<template>
    <div>
        <v-card class="m-3 p-3">
            <!-- a place to display a meal plan from spoonacular -->
            <v-card-title>My Meal Plan</v-card-title>
            <v-btn @click="createMealPlan">Create Meal Plan</v-btn>
            <the-recipe 
            v-for="meal in meals" 
            v-bind:key="meal.id" 
            ></the-recipe>
        </v-card>
    </div>
</template>

<script>
    import TheRecipe from './TheRecipe.vue';

    export default {
        name: "TheMealPlan",
        data(){
            return {
                meals: null,
                spoonApi: 'b2408b5b91424531aa6d57aa58070853',
            }
        },
        methods: {
            createMealPlan(){
                //a function to get a meal plan from spoon
                axios.get('https://api.spoonacular.com/recipes/complexSearch?' + this.spoonApi +)
            }
        },
        mounted(){

        },
        props: {

        },
        components: {
            TheRecipe,
        }
    }
</script>

<style lang="scss" scoped>

</style>
