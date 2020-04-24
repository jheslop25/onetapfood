<template>
    <div>
        <v-card max-width="600" class="mx-auto mt-3 p-2">
            <v-card-title>Family Profile</v-card-title>
            <v-card-text>Tell us about your family or anyone whom you'll be cooking for...</v-card-text>
            <v-form>
                <v-select
                    class="mx-3"
                    v-model="famCount"
                    label="Number of Family members"
                    :items="famOptions"
                    outlined
                ></v-select>
            </v-form>
            <fam-form v-for="n in this.count" v-bind:key="n" />
        </v-card>
    </div>
</template>

<script>
    import FamForm from './TheFamSubForm.vue';
    export default {
        name: 'FamilyOB',
        data() {
            return {
                famOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                count: 0,
        
            }
        },
        computed: {
                famCount: {
                    get: function(){
                        return this.count;
                    },
                    set: function(val){
                        this.count = val;
                    }
                },
        },
        components: {
            FamForm,
        }
    }
</script>

<style lang="scss" scoped>

</style>