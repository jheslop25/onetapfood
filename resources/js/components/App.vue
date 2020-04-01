<template>
    <v-app>
        <v-app-bar color="primary" app>
            <v-spacer/>
            <v-btn color="success">Hello World</v-btn>
            <v-btn color="primary">Hello World</v-btn>
        </v-app-bar>
        <v-content>
            <!-- content of the app here -->
            <v-card dark max-width="400" class="mx-auto">
                <v-card-title>Welcome to OneTapFood.ca</v-card-title>
                <v-card-text>
                   this is a test interface so that we can test all api end points
                </v-card-text>
                <v-form>
                    <v-text-field v-model="inputOne" label="inputOne"></v-text-field>
                    <v-text-field v-model="inputTwo" label="inputTwo"></v-text-field>
                    <v-btn @click="sendTestPost" color="primary">Test Feature</v-btn>
                </v-form>
            </v-card>
        </v-content>
        <v-footer color="primary" app>
            <!-- footer here -->
            <v-spacer/>
            <v-btn color="danger">another button</v-btn>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data(){
            return {
                inputOne: '',
                inputTwo: ''
            }
        },
        methods: {
            sendTest: function(){
                console.log('you clicked the test button');
                axios.get('/test').then((result) => {
                    console.log(result.data);
                }).catch((err) => {

                });
            },
            sendTestPost: function(){
                console.log('you are about to send a post. good luck');
                axios.post('/test/post', {
                    input: {
                        1: this.inputOne,
                        2: this.inputTwo

                    }
                }).then((result) =>{
                    console.log(result.data);
                });
            }
        }
    }
</script>
