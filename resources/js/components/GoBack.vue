<template>
    <v-icon x-large color="white" @click="goBack">mdi-arrow-left-circle</v-icon>
</template>

<script>
    export default {
        name: "GoBack",
        methods: {
            goBack: function(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>