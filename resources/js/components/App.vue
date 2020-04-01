<template>
    <v-app>
        <v-app-bar color="primary" app>
            <v-spacer/>
            <v-btn color="success">Hello World</v-btn>
            <v-btn color="primary">Hello World</v-btn>
        </v-app-bar>
        <v-content>
            <!-- content of the app here -->
            <v-card dark max-width="400">
                <v-card-title>Welcome to OneTapFood.ca</v-card-title>
                <v-card-text>
                   this is a test interface so that we can test all api end points
                </v-card-text>
                <v-text-field>some text</v-text-field>
                <v-text-field>some other text</v-text-field>
                <v-btn @click="sendTest" color="primary">Test Feature</v-btn>
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
        methods: {
            sendTest: function(){
                console.log('you clicked the test button');
                axios.get('/test').then((result) => {
                    console.log(result.data);
                }).catch((err) => {

                });
            }
        }
    }
</script>
