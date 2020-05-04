<template>
    <div>
        Your saved meal plan...
        <the-saved-meal></the-saved-meal>
    </div>
</template>

<script>
import TheSavedMeal from './TheSavedMeal.vue';
    export default {
        name: 'TheExistingMeals',
        components: {
            TheSavedMeal,
        }
    }
</script>

<style lang="scss" scoped>

</style>