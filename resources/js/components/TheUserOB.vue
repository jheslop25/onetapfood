<template>
    <div>
        <v-card dark max-width="600" class="mx-auto mt-3 p-2">
            <v-card-title>Fill in your profile...</v-card-title>
            <v-card-text>Tell us about yourself so we can prepare a custom meal plan for you</v-card-text>
            <v-form>
                <v-text-field v-model="age" label="Age"></v-text-field>
                <v-text-field v-model="diet" label="Diet"></v-text-field>
                <v-text-field v-model="pref" label="Preferences"></v-text-field>
                <v-btn @click="nextStep">Next</v-btn>
            </v-form>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'UserOB',
        methods: {
            nextStep: function(){
                console.log('you clicked next');
            }
        },
        data(){
            return {
                age: null,
                diet: null,
                pref: null,
                isUser: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>