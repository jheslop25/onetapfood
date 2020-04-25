<template>
    <div>
        <TheNav />
        <v-card>
            <v-card-title>Hello {{username}}</v-card-title>
            <v-btn class="m-3" @click="showUser">My info</v-btn>
            <v-btn class="m-3" @click="showFamily">Family Info</v-btn>
        </v-card>
        <v-card class="my-3" v-if="showOne">
            <v-card-title>My Info</v-card-title>
        </v-card>
        <v-card class="my-3" v-if="showTwo">
            <v-card-title>Family Info</v-card-title>
        </v-card>
    </div>
</template>

<script>
import TheNav from '../../components/TheNavigation.vue';
    export default {
        name: 'Profile',
        data(){
            return {
                username: null,
                showOne: false,
                showTwo: false,
            }
        },
        methods: {
            showUser: function(){
                this.showOne = true;
            },
            showFamily: function(){
                this.showTwo = true;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>