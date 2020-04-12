<template>
    <v-btn @click="goBack">
        back
    </v-btn>
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