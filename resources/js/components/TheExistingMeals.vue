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
        }
    }
</script>

<style lang="scss" scoped>

</style>