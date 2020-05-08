import Vue from 'vue';
import Vuex from 'vuex';
import elasticlunr from 'elasticlunr';
elasticlunr.addStopWords(['cooked', 'chopped', 'diced', 'red', 'blue', 'green','fresh','dried', 'yellow', 'black', 'white', 'fillet']);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    _instacart_session: null,
    breakfast: null,
    lunch: null,
    supper: null,
    username: null,
    email: null,
    userAge: null,
    userDiet: null,
    userPref: null,
    family: null,
    showExisting: false,
    breakfastExisting: null,
    lunchExisting: null,
    supperExisting: null,
    loggedIn: null,
    ingredients: [],
    spoonIDs: [],
    pantry: [],
    order: [],
  },
  mutations: {
    storeUser: function (state, data) {
      state.user = data;
      console.log(state.user);
    },
    storeToken: function (state, data) {
      state._instacart_session = data;
    },
    storeProfile: function (state, data) {
      //store a user profile for the rest of the app to access
    },
    storeBreakfast: function (state, data) {
      state.breakfast = data;
    },
    storeLunch: function (state, data) {
      state.lunch = data;
    },
    storeSupper: function (state, data) {
      state.supper = data;
    }
  },
  actions: {
    getSpoonIDs(context) {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios.get('api/v1/meal-plan/get-new', config)
        .then((result) => {
          context.state.spoonIDs = result.data.meals;
          console.log(context.state.spoonIDs);
        }).catch((err) => {
          console.log(err);
        });
    },
    getMealPlan(context) {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      //get meal plan from db
      axios.post('/api/v1/meal-plan', {}, config)
        .then((result) => {
          console.log(result.data);
          context.state.showExisting = result.data.show;
          if (result.data.show == true) {
            let q = '';
            let breakfast = result.data.meals[0];
            var lunch = result.data.meals[1];
            var supper = result.data.meals[2];
            for (let i = 0; i < breakfast.length; i++) {
              q += breakfast[i].spoon_id + ','
            }
            axios.get('https://api.spoonacular.com/recipes/informationBulk?apiKey=b2408b5b91424531aa6d57aa58070853&ids=' + q)
              .then((result) => {
                console.log(result.data);
                context.state.breakfastExisting = result.data;
                let x = '';

                for (let i = 0; i < lunch.length; i++) {
                  x += lunch[i].spoon_id + ','
                }
                axios.get('https://api.spoonacular.com/recipes/informationBulk?apiKey=b2408b5b91424531aa6d57aa58070853&ids=' + x)
                  .then((result) => {
                    console.log(result.data);
                    context.state.lunchExisting = result.data;
                    let z = '';

                    for (let i = 0; i < supper.length; i++) {
                      z += supper[i].spoon_id + ','
                    }
                    axios.get('https://api.spoonacular.com/recipes/informationBulk?apiKey=b2408b5b91424531aa6d57aa58070853&ids=' + z)
                      .then((result) => {
                        console.log(result.data);
                        context.state.supperExisting = result.data;
                      }).catch((err) => {
                        console.log(err);
                      });
                  }).catch((err) => {
                    console.log(err);
                  });
              }).catch((err) => {
                console.log(err);
              });
          }
        }).catch((err) => {
          console.log(err);
        });
    },
    getProfile(context) {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios
        .post("/api/v1/family/profile", { msg: "hello?" }, config)
        .then(result => {
          console.log(result.data);
          let profile = result.data.profile;
          context.state.username = profile[0].name;
          context.state.email = profile[0].email;
          context.state.userAge = profile[1][0].member_age_group;
          context.state.userDiet = profile[1][0].member_diet;
          context.state.userPref = profile[1][0].member_pref;
          context.state.family = profile[2];
        })
        .catch(err => {
          console.log(err);
        });



    },
    createMealPlan(context) {
      //a function to get a meal plan from spoon
      let spoonApi = "?apiKey=b2408b5b91424531aa6d57aa58070853"
      let diet = '&diet=' + context.state.userDiet;
      let spoonUrl = "https://api.spoonacular.com/recipes/complexSearch"
      let type1 = "&type=breakfast"
      let type2 = "&type=main course"
      let options = "&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&number=7"
      let exclude = '&excludeIngredients=' + context.state.userPref;
      axios
        .get(
          spoonUrl + spoonApi + type1 + diet + options + exclude
        )
        .then(result => {
          console.log(result.data.results);
          context.commit('storeBreakfast', result.data.results);
          let b = result.data.results;
          for (let i = 0; i < b.length; i++) {
            let c = b[i].missedIngredients;
            for (let i = 0; i < c.length; i++) {
              context.state.ingredients.push(c[i]);
            }
          }
          axios
            .get(
              spoonUrl + spoonApi + type2 + diet + options
            )
            .then(result => {
              console.log(result.data.results);
              context.commit('storeLunch', result.data.results);
              let b = result.data.results;
              for (let i = 0; i < b.length; i++) {
                let c = b[i].missedIngredients;
                for (let i = 0; i < c.length; i++) {
                  context.state.ingredients.push(c[i]);
                }
              }
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
                  let b = result.data.results;
                  for (let i = 0; i < b.length; i++) {
                    let c = b[i].missedIngredients;
                    for (let i = 0; i < c.length; i++) {
                      context.state.ingredients.push(c[i]);
                    }
                  }
                  context.dispatch('saveMeals');
                  context.dispatch('saveIngredients');
                  console.log(context.state.ingredients);
                })
                .catch(err => {
                  console.log(err);
                });
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    },
    saveMeals(context) {
      console.log("so you want to save your meal plan eh?");
      // this.$store.dispatch('saveMealPlan');
      let meals = [];
      let breakfast = context.state.breakfast;
      let lunch = context.state.lunch;
      let supper = context.state.supper;
      for (let i = 0; i < breakfast.length; i++) {
        var tomorrow = new Date();
        let sched = tomorrow.setDate(tomorrow.getDate() + i);
        meals.push({ id: breakfast[i].id, type: "breakfast", date: sched });
      }
      for (let i = 0; i < lunch.length; i++) {
        var tomorrow = new Date();
        let sched = tomorrow.setDate(tomorrow.getDate() + i);
        meals.push({ id: lunch[i].id, type: "lunch", date: sched });
      }
      for (let i = 0; i < supper.length; i++) {
        var tomorrow = new Date();
        let sched = tomorrow.setDate(tomorrow.getDate() + i);
        meals.push({ id: supper[i].id, type: "supper", date: sched });
      }

      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios
        .post(
          "api/v1/meal-plan/make",
          {
            input: meals
          },
          config
        )
        .then(result => {
          console.log(result.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    saveIngredients(context) {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios.post('api/v1/ingredients/create', {
        input: [context.state.ingredients]
      }, config)
        .then((result) => {
          console.log(result.data);
          context.dispatch('getSavedIngred');
        }).catch((err) => {
          console.log(err);
        });
    },
    getSavedIngred(context) {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios.post('api/v1/ingredients/all', {}, config)
        .then((result) => {
          console.log(result.data.ingred);
          context.state.ingredients = result.data.ingred;
        }).catch((err) => {

        });
    }
  },
  getters: {}
});

export default store;
