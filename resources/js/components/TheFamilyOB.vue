<template>
    <div id="fam-container">
        <v-card max-width="600" class="mx-auto mt-3 p-2">
            <v-card-title>Family Profile</v-card-title>
            <v-card-text>Tell us about your family or anyone whom you'll be cooking for...</v-card-text>
            <fam-form v-for="n in this.count" v-bind:key="n" :num="n"/>
            <v-btn v-if="show" @click="addFam">Add Family Member</v-btn>
        </v-card>
    </div>
</template>

<script>
    import FamForm from './TheFamSubForm.vue';
    export default {
        name: 'FamilyOB',
        data() {
            return {
                show: true,
                count: 0,
        
            }
        },
        components: {
            FamForm,
        },
        methods: {
            addFam: function(){
                this.count ++;
                this.show = false;
            }
        },
        mounted(){
            this.$root.$on('addMOAR', this.addFam);
        }
    }
</script>

<style lang="scss" scoped>

</style>