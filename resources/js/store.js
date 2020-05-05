import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null,
        _instacart_session: null,
        breakfast: null,
        lunch: null,
        supper: null,
        profile: null,
    },
    mutations: {
        storeUser: function(state, data){
            state.user = data;
            console.log(state.user);
        },
        storeToken: function(state, data){
            state._instacart_session = data;
        },
        storeProfile: function(state, data){
            //store a user profile for the rest of the app to access
        },
        storeBreakfast: function(state, data){
            state.breakfast = data;
        },
        storeLunch: function(state, data){
            state.lunch = data;
        },
        storeSupper: function(state, data){
            state.supper = data;
        }
    },
    actions: {
        saveMealPlan(context){
            //store meal plan in DB
        },
        getMealPlan(context){
            //get meal plan from db
        },
        getProfile(context){

        },
        createMealPlan(context) {
            //a function to get a meal plan from spoon
            let spoonApi = "?apiKey=b2408b5b91424531aa6d57aa58070853"
            let q = "&query=steak and eggs"
            let diet = "&diet=whole30"
            let spoonUrl = "https://api.spoonacular.com/recipes/complexSearch"
            let type1 = "&type=breakfast"
            let type2 = "&type=main course"
            let options = "&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&number=7"
            axios
              .get(
                spoonUrl + spoonApi + type1 + diet + options
              )
              .then(result => {
                console.log(result.data.results);
                context.commit('storeBreakfast', result.data.results);
              })
              .catch(err => {
                console.log(err);
              });
            axios
              .get(
                spoonUrl + spoonApi + type2 + diet + options
              )
              .then(result => {
                console.log(result.data.results);
                context.commit('storeLunch',result.data.results);
              })
              .catch(err => {
                console.log(err);
              });
            axios
              .get(
                spoonUrl +
                  spoonApi +
                  type2 +
                  diet +
                  options +
                  "&offset=50"
              )
              .then(result => {
                console.log(result.data.results);
                context.commit('storeSupper', result.data.results);
              })
              .catch(err => {
                console.log(err);
              });
          }
    },
    getters: {

    }
});

export default store;
