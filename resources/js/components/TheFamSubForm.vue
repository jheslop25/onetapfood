<template>
    <div v-if="show">
        <v-form>
                <v-card-title>Family Member {{num}}</v-card-title>
                <v-card-subtitle>Select an age group</v-card-subtitle>
                <v-select
                    class="mx-3"
                    v-model="age"
                    label="Age group"
                    :items="ageGroups"
                    outlined
                    append-icon="menu-down"
                ></v-select>
                <v-btn v-if="show" color="primary" class="mx-3 mb-3" @click="goToSub">Finish</v-btn>
                <v-btn v-if="show" class="mx-3 mb-3" @click="addMOAR">Add Family Member</v-btn>
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
                dietNames: ['Please Select...', 'Whole-30', 'Gluten-free', 'Ketogenic', 'Pescetarian', 'Vegetarian', 'Ovo-vegetarian', 'Lacto-vegetarian', 'vegan', 'paleo'],
                show: true
            }
        },
        props: {
            num: Number
        },
        methods: {
            addMOAR: function(){
                console.log('this is addMOAR');
                this.show = false;
                this.$root.$emit('addMOAR');
                this.submit();
            },
            submit: function(){
                console.log('this is the submit function');
                let config = {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("user-token")
                    }
                };
                axios.post('/api/v1/family/create', {
                        'ageGroup' : this.age,
                        'diet' : this.diet,
                        'pref' : 'null',
                        'isUser' : false
                }, config).then((result) => {
                    console.log(result.data.msg);
                }).catch((err) => {
                    console.log(err);
                });
            },
            goToSub: function(){
                this.submit();
                this.$root.$emit('subscription');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
