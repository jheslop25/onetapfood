<template>
    <div>
        <v-card max-width="600" class="mx-auto mt-3 p-2">
            <v-card-title>Fill in your profile...</v-card-title>
            <v-card-text>Tell us about yourself so we can prepare a custom meal plan for you</v-card-text>
            <v-form>
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
                <v-btn color="primary" class="mx-3 mb-3" @click="nextStep">Next</v-btn>
            </v-form>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'UserOB',
        methods: {
            nextStep: function(){
                this.$root.$emit('user-next');
            }
        },
        data(){
            return {
                age: null,
                diet: null,
                pref: null,
                isUser: true,
                ageGroups: ['Please Select...', '14-18', '19-30', '31-45', '46-65', '66+'],
                dietNames: ['Please Select...', 'Whole-30', 'Gluten-free', 'Ketogenic', 'Pescetarian', 'Vegetarian', 'Ovo-vegetarian', 'Lacto-vegetarian', 'vegan', 'paleo']
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>