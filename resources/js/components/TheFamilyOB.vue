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
            <v-form v-for="n in this.count" v-bind:key="n">
                <v-card-subtitle>Select an age group</v-card-subtitle>
                <v-select 
                    class="mx-3"
                    v-model="age" 
                    label="Age group"
                    :items="ageGroups"
                    outlined
                    append-icon="menu-down"
                ></v-select>
                <v-card-subtitle>Select a diet...</v-card-subtitle>
                <v-select 
                    class="mx-3"
                    v-model="diet" 
                    label="Diet"
                    :items="dietNames"
                    outlined
                    append-icon="menu-down"
                ></v-select>
                <v-card-subtitle>Are there any foods you can't eat?</v-card-subtitle>
                <v-textarea 
                    class="mx-3"
                    v-model="pref" 
                    label="Preferences"
                    outlined
                ></v-textarea>
                <v-btn color="primary" class="mx-3 mb-3" >Next</v-btn>
            </v-form>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'FamilyOB',
        data() {
            return {
                famOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                count: 0,
                age: null,
                diet: null,
                pref: null,
                isUser: false,
                ageGroups: ['Please Select...', '14-18', '19-30', '31-45', '46-65', '66+'],
                dietNames: ['Please Select...', 'Whole-30', 'Gluten-free', 'Ketogenic', 'Pescetarian', 'Vegetarian', 'Ovo-vegetarian', 'Lacto-vegetarian', 'vegan', 'paleo']
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
        }
    }
</script>

<style lang="scss" scoped>

</style>