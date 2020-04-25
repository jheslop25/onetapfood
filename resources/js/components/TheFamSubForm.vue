<template>
    <div>
        <v-form>
                <v-card-title>Family Member</v-card-title>
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
    </div>
</template>

<script>
    export default {
        name: 'FamSubForm',
        data(){
            return {
                age: null,
                diet: null,
                pref: null,
                isUser: false,
                ageGroups: ['Please Select...', '14-18', '19-30', '31-45', '46-65', '66+'],
                dietNames: ['Please Select...', 'Whole-30', 'Gluten-free', 'Ketogenic', 'Pescetarian', 'Vegetarian', 'Ovo-vegetarian', 'Lacto-vegetarian', 'vegan', 'paleo']
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>