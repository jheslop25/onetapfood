(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/MainApp/views/Login.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/MainApp/views/Login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Login",
  data: function data() {
    return {
      email: "",
      password: "",
      error: "",
      showErrorBox: false
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      var context = this;
      axios.post("/api/user/login", {
        email: this.email,
        password: this.password
      }).then(function (result) {
        localStorage.setItem("user-token", result.data.access_token.accessToken);
        localStorage.setItem("user-id", result.data.user.id);
        localStorage.setItem('user-sub-id', result.data.user.stripe_id);
        context.$router.push("/main");
        _this.$store.state.loggedIn = true;
      })["catch"](function (err) {
        console.log(err);
        context.error = "Sorry, something went wrong. We couldn't log you in.";
        context.showErrorBox = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/MainApp/views/Login.vue?vue&type=template&id=6d8a78d3&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/MainApp/views/Login.vue?vue&type=template&id=6d8a78d3&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-col",
        { attrs: { xs: "12", sm: "8", md: "4", lg: "4" } },
        [
          _c(
            "v-form",
            { ref: "form", staticClass: "card p-3" },
            [
              _c("v-card-title", { staticClass: "mx-auto" }, [
                _vm._v("Welcome, Please Login.")
              ]),
              _vm._v(" "),
              _vm.showErrorBox
                ? _c("v-alert", { attrs: { type: "error" } }, [
                    _vm._v(_vm._s(_vm.error))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  type: "email",
                  autofocus: "",
                  "prepend-icon": "mdi-email",
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
                  type: "password",
                  "prepend-icon": "mdi-lock-question",
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
              _c(
                "v-btn",
                { attrs: { color: "blue" }, on: { click: _vm.login } },
                [_vm._v("Login")]
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

/***/ "./resources/js/MainApp/views/Login.vue":
/*!**********************************************!*\
  !*** ./resources/js/MainApp/views/Login.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_6d8a78d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=6d8a78d3&scoped=true& */ "./resources/js/MainApp/views/Login.vue?vue&type=template&id=6d8a78d3&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/MainApp/views/Login.vue?vue&type=script&lang=js&");
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
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_6d8a78d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_6d8a78d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6d8a78d3",
  null
  
)

/* vuetify-loader */








_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["VForm"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/MainApp/views/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/MainApp/views/Login.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/MainApp/views/Login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/MainApp/views/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/MainApp/views/Login.vue?vue&type=template&id=6d8a78d3&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/MainApp/views/Login.vue?vue&type=template&id=6d8a78d3&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6d8a78d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=6d8a78d3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/MainApp/views/Login.vue?vue&type=template&id=6d8a78d3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6d8a78d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6d8a78d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);