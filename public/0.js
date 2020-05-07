(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/MainApp/views/MainApp.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/MainApp/views/MainApp.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TheNavigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/TheNavigation.vue */ "./resources/js/components/TheNavigation.vue");
/* harmony import */ var _components_TheMealPlan_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TheMealPlan.vue */ "./resources/js/components/TheMealPlan.vue");
/* harmony import */ var _components_TheInstacart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TheInstacart.vue */ "./resources/js/components/TheInstacart.vue");
/* harmony import */ var _components_TheExistingMeals_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TheExistingMeals.vue */ "./resources/js/components/TheExistingMeals.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Main",
  components: {
    TheNav: _components_TheNavigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheMealPlan: _components_TheMealPlan_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheInstacart: _components_TheInstacart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TheExisting: _components_TheExistingMeals_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    showExisting: function showExisting() {
      return this.$store.state.showExisting;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheExistingMeals.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheExistingMeals.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheSavedMeal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheSavedMeal.vue */ "./resources/js/components/TheSavedMeal.vue");
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TheExistingMeals',
  components: {
    TheSavedMeal: _TheSavedMeal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    getMeals: function getMeals() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheInstacart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheInstacart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TheInstacart",
  methods: {
    instaLogin: function instaLogin() {
      var _this = this;

      var config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios.post("/api/v1/instacart/login", {
        input: {
          email: this.email,
          password: this.password
        }
      }, config).then(function (result) {
        localStorage.setItem("_instacart_session", result.data._instacart_session);
        console.log(result.data._instacart_session);
        console.log(result.data.body);
        _this.Authenticated = true; //we will need to handle this in a more solid way in the future.

        _this.getUserCart();
      })["catch"](function (err) {
        console.log(err);
        _this.errorLogin = "Please tr went wrong, py again.";
      });
    },
    showForm: function showForm() {
      this.show = true;
    },
    searchInsta: function searchInsta() {
      var config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      console.log("youve decided to tempt your fate... good luck"); //lets build an array of query strings

      var queries = [];
      var ingred = this.$store.state.ingredients;

      for (var i = 0; i < ingred.length; i++) {
        queries.push(ingred[i].name);
      } //lets send the bulk queries to the api wrapper and let it do the heavy lifting.


      axios.post("api/v1/instacart/search", {
        input: {
          query: queries,
          cookie: localStorage["_instacart_session"]
        }
      }, config).then(function (result) {
        console.log(result.data);
        var searchRes = JSON.parse(result.data.res);
        console.log(searchRes.container.modules[3].data.items);
        console.log(searchRes.container.modules);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getUserCart: function getUserCart() {
      var _this2 = this;

      var config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios.post("/api/v1/instacart/user", {
        input: {
          cookie: localStorage["_instacart_session"]
        }
      }, config).then(function (result) {
        console.log(result.data);
        _this2.cartID = result.data.user[0][1];
        console.log(_this2.cartID);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    addToCart: function addToCart() {
      var _this3 = this;

      var config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios.post("/api/v1/instacart/cart/add", {
        input: {
          items: [{
            item_id: "item_539228415",
            quantity: 3
          }],
          cookie: localStorage["_instacart_session"],
          cartID: this.cartID
        }
      }, config).then(function (result) {
        console.log(result.data.msg, result.data.body);

        _this3.updateMP();
      })["catch"](function (err) {
        console.log(err, err.msg, err.err);
      });
    },
    updateMP: function updateMP() {
      var config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios.post("api/v1/meal-plan/status", {
        meals: this.$store.state.spoonIDs,
        status: "active"
      }, config).then(function (result) {
        console.log(result.data.msg);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    parseIngred: function parseIngred() {
      this.$store.dispatch("parseIngred");
    }
  },
  data: function data() {
    return {
      email: null,
      password: null,
      show: false,
      errorLogin: null,
      Authenticated: false,
      query: null,
      cartID: null
    };
  },
  mounted: function mounted() {
    if (localStorage["_instacart_session"]) {
      this.Authenticated = true;
    } else {
      this.Authenticated = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheMealPlan.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheMealPlan.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheRecipe_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheRecipe.vue */ "./resources/js/components/TheRecipe.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TheMealPlan",
  data: function data() {
    return {
      show1: true,
      show2: false,
      show3: false,
      show4: false
    };
  },
  computed: {
    breakfast: function breakfast() {
      return this.$store.state.breakfast;
    },
    lunch: function lunch() {
      return this.$store.state.lunch;
    },
    supper: function supper() {
      return this.$store.state.supper;
    }
  },
  methods: {
    saveIngred: function saveIngred() {
      this.$store.dispatch("saveIngredients");
    },
    createMealPlan: function createMealPlan() {
      //a function to get a meal plan from spoon
      this.show1 = false;
      this.$store.dispatch("createMealPlan");
      this.showBreakfast();
    },
    showBreakfast: function showBreakfast() {
      if (this.show2 == false) {
        this.show2 = true;
        this.show3 = false;
        this.show4 = false;
      } else {
        this.show2 = false;
      }
    },
    showLunch: function showLunch() {
      if (this.show3 == false) {
        this.show3 = true;
        this.show4 = false;
        this.show2 = false;
      } else {
        this.show3 = false;
      }
    },
    showSupper: function showSupper() {
      if (this.show4 == false) {
        this.show4 = true;
        this.show3 = false;
        this.show2 = false;
      } else {
        this.show4 = false;
      }
    },
    saveMeals: function saveMeals() {
      this.$store.dispatch("saveMeals");
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('getSavedIngred');
  },
  props: {},
  components: {
    TheRecipe: _TheRecipe_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheRecipe.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheRecipe.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TheRecipe",
  data: function data() {
    return {
      show1: false,
      dialog: false
    };
  },
  methods: {
    showDetails: function showDetails() {
      if (this.show1 == true) {
        this.show1 = false;
      } else {
        this.show1 = true;
      }
    }
  },
  mounted: function mounted() {},
  props: {
    title: String,
    imgURL: String,
    prepTime: Number,
    readyTime: Number,
    ingredients: Array,
    instruct: Array,
    cookingTime: Number
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheSavedMeal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheSavedMeal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TheSavedMeal"
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/MainApp/views/MainApp.vue?vue&type=template&id=7d5c89dc&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/MainApp/views/MainApp.vue?vue&type=template&id=7d5c89dc&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("TheNav", { staticClass: "m-3" }),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _vm.showExisting
            ? _c(
                "v-col",
                { attrs: { md: "10" } },
                [_c("the-existing", { staticClass: "m-3 p-3" })],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.showExisting
            ? _c("v-col", { attrs: { md: "10" } }, [_c("the-meal-plan")], 1)
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("the-instacart")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheExistingMeals.vue?vue&type=template&id=0b139482&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheExistingMeals.vue?vue&type=template&id=0b139482&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._v("\n    Your saved meal plan...\n    "),
      _c(
        "v-btn",
        {
          on: {
            click: function($event) {
              return _vm.getMeals()
            }
          }
        },
        [_vm._v("Get Meals")]
      ),
      _vm._v(" "),
      _c("the-saved-meal")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheInstacart.vue?vue&type=template&id=528f25f5&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheInstacart.vue?vue&type=template&id=528f25f5&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "py-3" },
    [
      !_vm.Authenticated
        ? _c(
            "v-row",
            [
              !_vm.show
                ? _c(
                    "v-btn",
                    { staticClass: "mx-3", on: { click: _vm.showForm } },
                    [_vm._v("Add to Instacart")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.show
                ? _c("v-card-title", [_vm._v("Please Login to Instacart")])
                : _vm._e(),
              _vm._v(" "),
              _c("v-card-subtitle", { attrs: { color: "red--text" } }, [
                _vm._v(_vm._s(_vm.errorLogin))
              ]),
              _vm._v(" "),
              _c(
                "v-form",
                { staticClass: "m-3" },
                [
                  _vm.show
                    ? _c("v-text-field", {
                        attrs: { label: "Instacart Email" },
                        model: {
                          value: _vm.email,
                          callback: function($$v) {
                            _vm.email = $$v
                          },
                          expression: "email"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.show
                    ? _c("v-text-field", {
                        attrs: { label: "Instacart Password" },
                        model: {
                          value: _vm.password,
                          callback: function($$v) {
                            _vm.password = $$v
                          },
                          expression: "password"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.show
                    ? _c("v-btn", { on: { click: _vm.instaLogin } }, [
                        _vm._v("Login")
                      ])
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("v-btn", { on: { click: _vm.searchInsta } }, [_vm._v("Search")]),
      _vm._v(" "),
      _c("v-btn", { on: { click: _vm.getUserCart } }, [_vm._v("cartID")])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheMealPlan.vue?vue&type=template&id=1c69c182&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheMealPlan.vue?vue&type=template&id=1c69c182&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    { attrs: { justify: "center" } },
    [
      _vm.show1
        ? _c("v-btn", { on: { click: _vm.createMealPlan } }, [
            _vm._v("Create Meal Plan")
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.show1
        ? _c(
            "v-row",
            { attrs: { justify: "center" } },
            [
              _c(
                "v-col",
                { staticClass: "p-4", attrs: { sm: "4", md: "3" } },
                [
                  !_vm.show1
                    ? _c("v-btn", { on: { click: _vm.showBreakfast } }, [
                        _vm._v("Breakfast")
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "p-4", attrs: { sm: "4", md: "3" } },
                [
                  !_vm.show1
                    ? _c("v-btn", { on: { click: _vm.showLunch } }, [
                        _vm._v("Lunch")
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "p-4", attrs: { sm: "4", md: "3" } },
                [
                  !_vm.show1
                    ? _c("v-btn", { on: { click: _vm.showSupper } }, [
                        _vm._v("Supper")
                      ])
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.show2
        ? _c(
            "v-row",
            { attrs: { justify: "center" } },
            _vm._l(_vm.breakfast, function(meal) {
              return _c("the-recipe", {
                key: meal.id,
                staticClass: "col-md-4",
                attrs: {
                  title: meal.title,
                  imgURL: meal.image,
                  prepTime: meal.preparationMinutes,
                  readyTime: meal.readyInMinutes,
                  ingredients: meal.missedIngredients,
                  instruct: meal.analyzedInstructions[0].steps,
                  cookingTime: meal.cookingMinutes
                }
              })
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.show3
        ? _c(
            "v-row",
            { attrs: { justify: "center" } },
            _vm._l(_vm.lunch, function(meal) {
              return _c("the-recipe", {
                key: meal.id,
                staticClass: "col-md-4",
                attrs: {
                  title: meal.title,
                  imgURL: meal.image,
                  prepTime: meal.preparationMinutes,
                  readyTime: meal.readyInMinutes,
                  ingredients: meal.missedIngredients,
                  instruct: meal.analyzedInstructions[0].steps,
                  cookingTime: meal.cookingMinutes
                }
              })
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.show4
        ? _c(
            "v-row",
            { attrs: { justify: "center" } },
            _vm._l(_vm.supper, function(meal) {
              return _c("the-recipe", {
                key: meal.id,
                staticClass: "col-md-4",
                attrs: {
                  title: meal.title,
                  imgURL: meal.image,
                  prepTime: meal.preparationMinutes,
                  readyTime: meal.readyInMinutes,
                  ingredients: meal.missedIngredients,
                  instruct: meal.analyzedInstructions[0].steps,
                  cookingTime: meal.cookingMinutes
                }
              })
            }),
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheRecipe.vue?vue&type=template&id=fd43e7f8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheRecipe.vue?vue&type=template&id=fd43e7f8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        { staticClass: "m-3 p-3 row justify-content-center" },
        [
          _c("p", { staticClass: "h5" }, [_vm._v(_vm._s(_vm.title))]),
          _vm._v(" "),
          _c("v-img", { attrs: { "max-width": "200", src: _vm.imgURL } }),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-icon", { attrs: { left: "", color: "blue accent-4" } }, [
                _vm._v("mdi-clock-outline")
              ]),
              _vm._v("\n      Prep: " + _vm._s(_vm.prepTime) + "\n    ")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-icon", { attrs: { left: "", color: "blue accent-4" } }, [
                _vm._v("mdi-clock-outline")
              ]),
              _vm._v("\n      Cooking: " + _vm._s(_vm.cookingTime) + "\n    ")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-icon", { attrs: { left: "", color: "blue accent-4" } }, [
                _vm._v("mdi-clock-outline")
              ]),
              _vm._v("\n      Ready In: " + _vm._s(_vm.readyTime) + "\n    ")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "600px" },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function(ref) {
                    var on = ref.on
                    return [
                      _c(
                        "v-btn",
                        _vm._g({ attrs: { color: "primary", dark: "" } }, on),
                        [_vm._v("Details")]
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c("v-card-title", { attrs: { color: "blue accent-4" } }, [
                    _vm._v("Ingredients")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.ingredients, function(item) {
                    return _c(
                      "v-row",
                      { key: item.id },
                      [
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-icon",
                              { attrs: { left: "", color: "blue accent-4" } },
                              [_vm._v("mdi-circle-small")]
                            ),
                            _vm._v(" "),
                            _c("v-card-text", [
                              _vm._v(
                                "\n              " +
                                  _vm._s(item.original) +
                                  "\n            "
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c("v-card-title", { attrs: { color: "blue accent-4" } }, [
                    _vm._v("Instructions")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.instruct, function(step) {
                    return _c(
                      "div",
                      { key: step.step, staticClass: "p-1" },
                      [
                        _c(
                          "v-icon",
                          { attrs: { left: "", color: "blue accent-4" } },
                          [_vm._v("mdi-circle-small")]
                        ),
                        _vm._v(" "),
                        _c("v-card-text", [
                          _vm._v(
                            "\n            " +
                              _vm._s(step.step) +
                              "\n          "
                          )
                        ])
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue accent-4", text: "" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [_vm._v("Close")]
                      )
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheSavedMeal.vue?vue&type=template&id=33a1b8e4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheSavedMeal.vue?vue&type=template&id=33a1b8e4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/MainApp/views/MainApp.vue":
/*!************************************************!*\
  !*** ./resources/js/MainApp/views/MainApp.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainApp_vue_vue_type_template_id_7d5c89dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainApp.vue?vue&type=template&id=7d5c89dc&scoped=true& */ "./resources/js/MainApp/views/MainApp.vue?vue&type=template&id=7d5c89dc&scoped=true&");
/* harmony import */ var _MainApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainApp.vue?vue&type=script&lang=js& */ "./resources/js/MainApp/views/MainApp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainApp_vue_vue_type_template_id_7d5c89dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainApp_vue_vue_type_template_id_7d5c89dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7d5c89dc",
  null
  
)

/* vuetify-loader */



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VCol"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/MainApp/views/MainApp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/MainApp/views/MainApp.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/MainApp/views/MainApp.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainApp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/MainApp/views/MainApp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/MainApp/views/MainApp.vue?vue&type=template&id=7d5c89dc&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/MainApp/views/MainApp.vue?vue&type=template&id=7d5c89dc&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainApp_vue_vue_type_template_id_7d5c89dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainApp.vue?vue&type=template&id=7d5c89dc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/MainApp/views/MainApp.vue?vue&type=template&id=7d5c89dc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainApp_vue_vue_type_template_id_7d5c89dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainApp_vue_vue_type_template_id_7d5c89dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TheExistingMeals.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/TheExistingMeals.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheExistingMeals_vue_vue_type_template_id_0b139482_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheExistingMeals.vue?vue&type=template&id=0b139482&scoped=true& */ "./resources/js/components/TheExistingMeals.vue?vue&type=template&id=0b139482&scoped=true&");
/* harmony import */ var _TheExistingMeals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheExistingMeals.vue?vue&type=script&lang=js& */ "./resources/js/components/TheExistingMeals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheExistingMeals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheExistingMeals_vue_vue_type_template_id_0b139482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheExistingMeals_vue_vue_type_template_id_0b139482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b139482",
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TheExistingMeals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TheExistingMeals.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/TheExistingMeals.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheExistingMeals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TheExistingMeals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheExistingMeals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheExistingMeals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TheExistingMeals.vue?vue&type=template&id=0b139482&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/TheExistingMeals.vue?vue&type=template&id=0b139482&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheExistingMeals_vue_vue_type_template_id_0b139482_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TheExistingMeals.vue?vue&type=template&id=0b139482&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheExistingMeals.vue?vue&type=template&id=0b139482&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheExistingMeals_vue_vue_type_template_id_0b139482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheExistingMeals_vue_vue_type_template_id_0b139482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TheInstacart.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/TheInstacart.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheInstacart_vue_vue_type_template_id_528f25f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheInstacart.vue?vue&type=template&id=528f25f5&scoped=true& */ "./resources/js/components/TheInstacart.vue?vue&type=template&id=528f25f5&scoped=true&");
/* harmony import */ var _TheInstacart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheInstacart.vue?vue&type=script&lang=js& */ "./resources/js/components/TheInstacart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheInstacart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheInstacart_vue_vue_type_template_id_528f25f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheInstacart_vue_vue_type_template_id_528f25f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "528f25f5",
  null
  
)

/* vuetify-loader */







_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardSubtitle"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_6__["VForm"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TheInstacart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TheInstacart.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/TheInstacart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheInstacart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TheInstacart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheInstacart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheInstacart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TheInstacart.vue?vue&type=template&id=528f25f5&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/TheInstacart.vue?vue&type=template&id=528f25f5&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheInstacart_vue_vue_type_template_id_528f25f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TheInstacart.vue?vue&type=template&id=528f25f5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheInstacart.vue?vue&type=template&id=528f25f5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheInstacart_vue_vue_type_template_id_528f25f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheInstacart_vue_vue_type_template_id_528f25f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TheMealPlan.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/TheMealPlan.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheMealPlan_vue_vue_type_template_id_1c69c182_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheMealPlan.vue?vue&type=template&id=1c69c182&scoped=true& */ "./resources/js/components/TheMealPlan.vue?vue&type=template&id=1c69c182&scoped=true&");
/* harmony import */ var _TheMealPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheMealPlan.vue?vue&type=script&lang=js& */ "./resources/js/components/TheMealPlan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheMealPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheMealPlan_vue_vue_type_template_id_1c69c182_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheMealPlan_vue_vue_type_template_id_1c69c182_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c69c182",
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VCol"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TheMealPlan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TheMealPlan.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/TheMealPlan.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheMealPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TheMealPlan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheMealPlan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheMealPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TheMealPlan.vue?vue&type=template&id=1c69c182&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/TheMealPlan.vue?vue&type=template&id=1c69c182&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheMealPlan_vue_vue_type_template_id_1c69c182_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TheMealPlan.vue?vue&type=template&id=1c69c182&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheMealPlan.vue?vue&type=template&id=1c69c182&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheMealPlan_vue_vue_type_template_id_1c69c182_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheMealPlan_vue_vue_type_template_id_1c69c182_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TheRecipe.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/TheRecipe.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheRecipe_vue_vue_type_template_id_fd43e7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheRecipe.vue?vue&type=template&id=fd43e7f8&scoped=true& */ "./resources/js/components/TheRecipe.vue?vue&type=template&id=fd43e7f8&scoped=true&");
/* harmony import */ var _TheRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheRecipe.vue?vue&type=script&lang=js& */ "./resources/js/components/TheRecipe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheRecipe_vue_vue_type_template_id_fd43e7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheRecipe_vue_vue_type_template_id_fd43e7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fd43e7f8",
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__["VImg"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TheRecipe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TheRecipe.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/TheRecipe.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TheRecipe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheRecipe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TheRecipe.vue?vue&type=template&id=fd43e7f8&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/TheRecipe.vue?vue&type=template&id=fd43e7f8&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheRecipe_vue_vue_type_template_id_fd43e7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TheRecipe.vue?vue&type=template&id=fd43e7f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheRecipe.vue?vue&type=template&id=fd43e7f8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheRecipe_vue_vue_type_template_id_fd43e7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheRecipe_vue_vue_type_template_id_fd43e7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TheSavedMeal.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/TheSavedMeal.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheSavedMeal_vue_vue_type_template_id_33a1b8e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheSavedMeal.vue?vue&type=template&id=33a1b8e4&scoped=true& */ "./resources/js/components/TheSavedMeal.vue?vue&type=template&id=33a1b8e4&scoped=true&");
/* harmony import */ var _TheSavedMeal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheSavedMeal.vue?vue&type=script&lang=js& */ "./resources/js/components/TheSavedMeal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheSavedMeal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheSavedMeal_vue_vue_type_template_id_33a1b8e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheSavedMeal_vue_vue_type_template_id_33a1b8e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "33a1b8e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TheSavedMeal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TheSavedMeal.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/TheSavedMeal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSavedMeal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TheSavedMeal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheSavedMeal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSavedMeal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TheSavedMeal.vue?vue&type=template&id=33a1b8e4&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/TheSavedMeal.vue?vue&type=template&id=33a1b8e4&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSavedMeal_vue_vue_type_template_id_33a1b8e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TheSavedMeal.vue?vue&type=template&id=33a1b8e4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheSavedMeal.vue?vue&type=template&id=33a1b8e4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSavedMeal_vue_vue_type_template_id_33a1b8e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSavedMeal_vue_vue_type_template_id_33a1b8e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);