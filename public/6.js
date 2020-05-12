(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/MainApp/views/Register.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/MainApp/views/Register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Register",
  data: function data() {
    return {
      email: null,
      password: null,
      name: null,
      location: null,
      passwordConf: null,
      passwordError: null,
      showError: false
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      if (this.password === this.passwordConf) {
        axios.post("/api/user/register", {
          email: this.email,
          password: this.password,
          name: this.name,
          location: this.location,
          status: "active",
          type: "user"
        }).then(function (result) {
          var data = {
            email: result.data.user.email,
            password: _this.password
          };
          console.log(data);

          _this.login();
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        this.passwordError = "Please enter matching passwords";
        this.showError = true;
      }
    },
    login: function login() {
      var _this2 = this;

      var context = this;
      axios.post("/api/user/login", {
        email: this.email,
        password: this.password
      }).then(function (result) {
        localStorage.setItem("user-token", result.data.access_token.accessToken);
        localStorage.setItem("user-id", result.data.user.id);
        localStorage.setItem('user-sub-id', result.data.user.stripe_id);
        context.$router.push("/onboard");
        _this2.$store.state.loggedIn = true;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/MainApp/views/Register.vue?vue&type=template&id=23738b29&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/MainApp/views/Register.vue?vue&type=template&id=23738b29&scoped=true& ***!
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
    { attrs: { justify: "center", align: "center" } },
    [
      _c(
        "v-col",
        { attrs: { xs: "12", sm: "8", md: "4", lg: "4" } },
        [
          _c(
            "v-form",
            { ref: "form", staticClass: "card m-1 p-3" },
            [
              _c("v-card-title", [_vm._v("Create Account")]),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "prepend-icon": "mdi-account-plus",
                  autofocus: "",
                  type: "name",
                  label: "Name"
                },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "prepend-icon": "mdi-email",
                  type: "email",
                  label: "email"
                },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "prepend-icon": "mdi-lock-question",
                  type: "password",
                  label: "password"
                },
                model: {
                  value: _vm.password,
                  callback: function($$v) {
                    _vm.password = $$v
                  },
                  expression: "password"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "prepend-icon": "mdi-lock-question",
                  type: "password",
                  label: "confirm password"
                },
                model: {
                  value: _vm.passwordConf,
                  callback: function($$v) {
                    _vm.passwordConf = $$v
                  },
                  expression: "passwordConf"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  type: "location",
                  "prepend-icon": "mdi-map-marker",
                  label: "location"
                },
                model: {
                  value: _vm.location,
                  callback: function($$v) {
                    _vm.location = $$v
                  },
                  expression: "location"
                }
              }),
              _vm._v(" "),
              _vm.showError
                ? _c("v-alert", { attrs: { type: "error" } }, [
                    _vm._v(_vm._s(_vm.passwordError))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { color: "sucesss" }, on: { click: _vm.register } },
                [_vm._v("Register")]
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

/***/ "./resources/js/MainApp/views/Register.vue":
/*!*************************************************!*\
  !*** ./resources/js/MainApp/views/Register.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_23738b29_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=23738b29&scoped=true& */ "./resources/js/MainApp/views/Register.vue?vue&type=template&id=23738b29&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/MainApp/views/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_23738b29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_23738b29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "23738b29",
  null
  
)

/* vuetify-loader */








_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["VForm"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/MainApp/views/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/MainApp/views/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/MainApp/views/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/MainApp/views/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/MainApp/views/Register.vue?vue&type=template&id=23738b29&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/MainApp/views/Register.vue?vue&type=template&id=23738b29&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_23738b29_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=23738b29&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/MainApp/views/Register.vue?vue&type=template&id=23738b29&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_23738b29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_23738b29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);