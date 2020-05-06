<template>
    <div>
        <the-nav class="m-3"></the-nav>
        <the-ingredient></the-ingredient>
    </div>
</template>

<script>
    import TheNav from '../../components/TheNavigation.vue';
    import TheIngredient from '../../components/TheIngredient.vue';
    export default {
        name: 'Pantry',
        components: {
            TheNav,
            TheIngredient
        }
    }
</script>

<style lang="scss" scoped>

</style>