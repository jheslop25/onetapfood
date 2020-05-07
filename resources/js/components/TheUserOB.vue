<template>
    <div>
        <v-card max-width="600" class="mx-auto mt-3 p-2">
            <v-form>
                <v-card-title>Select an age group</v-card-title>
                <v-select 
                    autofocus
                    class="mx-3"
                    v-model="age" 
                    label="Please Select"
                    :items="ageGroups"
                    outlined
                    append-icon="mdi-menu-down"
                ></v-select>
                <v-card-title>Select a diet...</v-card-title>
                <v-select 
                    class="mx-3"
                    v-model="diet" 
                    label="Please Select"
                    :items="dietNames"
                    outlined
                    append-icon="mdi-menu-down"
                ></v-select>
                <p class="text-wrap h5 mx-3">Are there any foods you can't eat?</p>
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
                this.submit();
                this.$root.$emit('user-next');
            },
            submit: function(){
                let config = {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("user-token")
                    }
                };
                axios.post('/api/v1/family/create', {
                        'ageGroup' : this.age,
                        'diet' : this.diet,
                        'pref' : this.pref,
                        'isUser' : true
                }, config).then((result) => {
                    console.log(result.data.msg);
                }).catch((err) => {
                    console.log(err);
                });
            }
        },
        data(){
            return {
                age: null,
                diet: null,
                pref: ' ',
                isUser: true,
                ageGroups: ['Please Select...', '0-18', '19-30', '31-45', '46-65', '66+'],
                dietNames: ['Please Select...', 'Whole-30', 'Gluten-free', 'Ketogenic', 'Pescetarian', 'Vegetarian', 'Ovo-vegetarian', 'Lacto-vegetarian', 'vegan', 'paleo']
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>