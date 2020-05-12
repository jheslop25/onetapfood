<template>
    <div>
        Your saved meal plan...
        <v-btn @click="getMeals()">Get Meals</v-btn>
        <the-saved-meal></the-saved-meal>
    </div>
</template>

<script>
import TheSavedMeal from './TheSavedMeal.vue';
    export default {
        name: 'TheExistingMeals',
        components: {
            TheSavedMeal,
        },
        methods: {
            getMeals(){
                
            }
        },
        mounted(){
            this.$store.dispatch('getMealPlan');
        },
        data(){
            return {
                breakfast: this.$store.state.breakfastExisting,
                lunch: this.$store.state.lunchExisting,
                supper: this.$store.state.supperExisting,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>