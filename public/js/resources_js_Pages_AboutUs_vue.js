(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_AboutUs_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _PeopleBehindCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PeopleBehindCard.vue */ "./resources/js/Components/AboutUs/PeopleBehindCard.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    PeopleBehindCard: _PeopleBehindCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    people: {
      type: Array,
      required: true
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PeopleBehindCard.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PeopleBehindCard.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! naive-ui */ "./node_modules/naive-ui/es/card/src/Card.js");
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! naive-ui */ "./node_modules/naive-ui/es/avatar/src/Avatar.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link,
    NCard: naive_ui__WEBPACK_IMPORTED_MODULE_1__["default"],
    NAvatar: naive_ui__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  setup: function setup() {
    return {
      defaultImageUrl: "/images/adduLogo.png"
    };
  },
  props: {
    people: {
      type: Object,
      "default": function _default() {
        return {
          person: "Default Person",
          name: "Default Name",
          img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde? ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        };
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _PreviousProjectCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreviousProjectCard.vue */ "./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Components_DeleteButton_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/DeleteButton.vue */ "./resources/js/Components/DeleteButton.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    PreviousProjectCard: _PreviousProjectCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.Link,
    DeleteButton: _Components_DeleteButton_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    projects: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/VolunteerProcessCard.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/VolunteerProcessCard.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _MarkdownViewer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MarkdownViewer.vue */ "./resources/js/Components/MarkdownViewer.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  props: {
    processStep: {
      type: Object,
      "default": function _default() {
        return {
          step: "STEP DEFAULT",
          title: "Default Title",
          description: "Default Description",
          primary_color: "#055094",
          secondary_color: "#ce2029"
        };
      }
    }
  },
  components: {
    MarkdownViewer: _MarkdownViewer_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/DeleteButton.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/DeleteButton.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  props: {
    routeName: String,
    item: Object
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/MarkdownViewer.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/MarkdownViewer.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    content: {
      type: String,
      "default": ""
    },
    size: {
      type: String,
      "default": "md"
    }
  },
  setup: function setup(props) {
    var markdown = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return marked__WEBPACK_IMPORTED_MODULE_0___default()(props.content);
    });
    var sizeStyle = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return {
        "prose-sm lg:prose-base 2xl:prose-xl": props.size === "sm",
        "prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl": props.size === "md",
        "prose-lg lg:prose-xl xl:prose-2xl": props.size === "lg"
      };
    });
    return {
      markdown: markdown,
      sizeStyle: sizeStyle
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Layout_ARISEnFooter_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Layout/ARISEnFooter.vue */ "./resources/js/Components/Layout/ARISEnFooter.vue");
/* harmony import */ var _Partials_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Partials/Header.vue */ "./resources/js/Layouts/Partials/Header.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ArisenFooter: _Components_Layout_ARISEnFooter_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ArisenHeader: _Partials_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.Link
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Guest.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Guest.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _CandidateProfileLayout_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CandidateProfileLayout.vue */ "./resources/js/Layouts/CandidateProfileLayout.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    CandidateProfileLayout: _CandidateProfileLayout_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _Components_assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/assets/logo.png */ "./resources/js/Components/assets/logo.png");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__.defineComponent)({
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  data: function data() {
    return {
      logo: _Components_assets_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"],
      navbarCollapse: null,
      show: false
    };
  },
  mounted: function mounted() {
    this.navbarCollapse = new bootstrap__WEBPACK_IMPORTED_MODULE_2__.Collapse(this.$refs.navbarCollapse, {
      toggle: false
    });
  },
  methods: {
    toggleNav: function toggleNav() {
      this.show = !this.show;
      this.navbarCollapse.toggle(this.show);
    },
    navManual: function navManual(show) {
      if (show) this.navbarCollapse.show();else this.navbarCollapse.hide();
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AboutUs.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AboutUs.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Layouts_Guest_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layouts/Guest.vue */ "./resources/js/Layouts/Guest.vue");
/* harmony import */ var _Components_AboutUs_VolunteerProcessCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/AboutUs/VolunteerProcessCard.vue */ "./resources/js/Components/AboutUs/VolunteerProcessCard.vue");
/* harmony import */ var _Components_AboutUs_PeopleBehindCard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/AboutUs/PeopleBehindCard.vue */ "./resources/js/Components/AboutUs/PeopleBehindCard.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Components_MarkdownViewer_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/MarkdownViewer.vue */ "./resources/js/Components/MarkdownViewer.vue");
/* harmony import */ var _Components_AboutUs_PreviousProjects_PreviousProjectList_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/AboutUs/PreviousProjects/PreviousProjectList.vue */ "./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue");
/* harmony import */ var _Components_AboutUs_BlueVotePeople_PeopleList_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/AboutUs/BlueVotePeople/PeopleList.vue */ "./resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_4__.defineComponent)({
  components: {
    Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Head,
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link,
    GuestLayout: _Layouts_Guest_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    StepCard: _Components_AboutUs_VolunteerProcessCard_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    PeopleCard: _Components_AboutUs_PeopleBehindCard_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    MarkdownViewer: _Components_MarkdownViewer_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    PreviousProjectList: _Components_AboutUs_PreviousProjects_PreviousProjectList_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    PeopleList: _Components_AboutUs_BlueVotePeople_PeopleList_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    bluevote_info: {
      type: Object,
      required: true
    },
    previous_projects: {
      type: Array,
      required: true
    },
    bluevote_people: {
      type: Array,
      required: true
    },
    volunteers: {
      type: Array,
      required: true
    },
    partner_offices: {
      type: Array,
      required: true
    },
    volunteer_steps: {
      type: Array,
      required: true
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue?vue&type=template&id=4250740a":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue?vue&type=template&id=4250740a ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row row-cols-1 row-cols-sm-2 row-cols-md-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PeopleBehindCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PeopleBehindCard");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.people, function (person) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PeopleBehindCard, {
      key: person.person,
      people: person
    }, null, 8
    /* PROPS */
    , ["people"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PeopleBehindCard.vue?vue&type=template&id=0be43ac8":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PeopleBehindCard.vue?vue&type=template&id=0be43ac8 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-full d-flex justify-content-center"
};
var _hoisted_2 = ["href"];
var _hoisted_3 = {
  "class": "d-flex w-full justify-content-center h-64"
};
var _hoisted_4 = ["src"];
var _hoisted_5 = {
  "class": "d-flex flex-column"
};
var _hoisted_6 = {
  key: 0,
  "class": "text-muted"
};
var _hoisted_7 = {
  "class": "d-flex w-full justify-content-center h-64"
};
var _hoisted_8 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_n_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("n-card");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$props.people.link ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 0,
    href: $props.people.link,
    "class": "w-full d-flex justify-content-center"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_n_card, {
    bordered: false,
    "class": "text-center",
    style: {
      "max-width": "300px"
    }
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.people.name), 1
      /* TEXT */
      )];
    }),
    cover: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$props$people$profil;

      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        "class": "bluevote-people-img",
        src: ((_$props$people$profil = $props.people.profile_photo) === null || _$props$people$profil === void 0 ? void 0 : _$props$people$profil.url) || $setup.defaultImageUrl
      }, null, 8
      /* PROPS */
      , _hoisted_4)])];
    }),
    _: 1
    /* STABLE */

  })], 8
  /* PROPS */
  , _hoisted_2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_n_card, {
    key: 1,
    bordered: false,
    "class": "text-center w-full",
    style: {
      "max-width": "300px"
    }
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.people.name), 1
      /* TEXT */
      ), $props.people.position ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.people.position), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    cover: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$props$people$profil2;

      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        "class": "bluevote-people-img",
        src: ((_$props$people$profil2 = $props.people.profile_photo) === null || _$props$people$profil2 === void 0 ? void 0 : _$props$people$profil2.url) || $setup.defaultImageUrl
      }, null, 8
      /* PROPS */
      , _hoisted_8)])];
    }),
    _: 1
    /* STABLE */

  }))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue?vue&type=template&id=055b0c23":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue?vue&type=template&id=055b0c23 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    href: _ctx.project.link,
    "class": "text-white text-center text-decoration-none btn-primary btn-lg block p-4 mb-3",
    style: {
      "padding": "20px",
      "border-radius": "10px"
    }
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.project.name), 9
  /* TEXT, PROPS */
  , _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue?vue&type=template&id=560dcab1":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue?vue&type=template&id=560dcab1 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-3"
};
var _hoisted_2 = {
  "class": "col"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PreviousProjectCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PreviousProjectCard");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.projects, function (project) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PreviousProjectCard, {
      project: project
    }, null, 8
    /* PROPS */
    , ["project"])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/VolunteerProcessCard.vue?vue&type=template&id=587e43b8":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/VolunteerProcessCard.vue?vue&type=template&id=587e43b8 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "m-4"
};
var _hoisted_2 = {
  "class": "text-white fs-6 mx-5 mb-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MarkdownViewer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MarkdownViewer");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "card p-3 shadow",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background-color: ".concat(_ctx.processStep.primary_color || '#055094', "; border-radius: 20px"))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-wrap text-white fw-bolder px-3 py-2 fs-4",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background-color: ".concat(_ctx.processStep.secondary_color || _ctx.processStep.primary_color || '#ce2029', "; border-radius: 30px; max-width: 75%; line-height: 1.65"))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.processStep.title), 5
  /* TEXT, STYLE */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownViewer, {
    "class": "text-white",
    content: _ctx.processStep.description,
    size: "lg"
  }, null, 8
  /* PROPS */
  , ["content"])])], 4
  /* STYLE */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/DeleteButton.vue?vue&type=template&id=093bbbf0":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/DeleteButton.vue?vue&type=template&id=093bbbf0 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["data-bs-target", "attrs"];

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi-trash"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
var _hoisted_4 = ["id", "aria-labelledby"];
var _hoisted_5 = {
  "class": "modal-dialog"
};
var _hoisted_6 = {
  "class": "modal-content"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"modal-header\" style=\"background-color:#dadeee;\"><h5 class=\"modal-title text-uppercase\"><i class=\"bi bi-exclamation-circle-fill\" style=\"color:#dc3545;\"></i> Delete Item </h5><button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button></div><div class=\"modal-body text-start\" style=\"height:80px;\"><h6 class=\"p-3\">Are you sure you want to delete item?</h6></div>", 2);

var _hoisted_9 = {
  "class": "modal-footer",
  style: {
    "background-color": "#dadeee"
  }
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-secondary",
  "data-bs-dismiss": "modal"
}, " Cancel ", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-danger",
    "data-bs-toggle": "modal",
    "data-bs-target": "#modalDelete-".concat(_ctx.item.id),
    attrs: _ctx.$attrs
  }, _hoisted_3, 8
  /* PROPS */
  , _hoisted_1), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal fade",
    id: "modalDelete-".concat(_ctx.item.id),
    tabindex: "-1",
    "aria-labelledby": "modalDelete-".concat(_ctx.item.id),
    "aria-hidden": "true"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    as: "button",
    "class": "btn btn-danger",
    method: "delete",
    href: _ctx.route(_ctx.routeName, _ctx.item.id),
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])])], 8
  /* PROPS */
  , _hoisted_4)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=template&id=414e7eae":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=template&id=414e7eae ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<footer class=\"text-white p-3 mt-4 mb-0\" style=\"background-color:#083b74;\"><div class=\"d-flex container\"><div><img src=\"/images/logo2.png\" class=\"mr-3\" width=\"480\"></div><div class=\"mt-3 ml-auto\"><h5><b>ATENEO DE DAVAO UNIVERSITY BLUE VOTE</b></h5><hr><p><b>CONTACT US</b> <br> Tel No: +63 (82) 221.2411 local 8262 <br> Fax: +63 (82) 226.4116 </p></div></div></footer><footer class=\"text-white p-3 mb-0\" style=\"background-color:#083b74;\"><div class=\"d-flex justify-content-between container\"><div>Copyright © 2021 | Developed by <b>ARISEn Lab</b></div><div class=\"d-flex gap-2\"><a href=\"https://www.facebook.com/AdDUBlueVote/\" target=\"_blank\"><i class=\"bi bi-facebook text-white\"></i></a><a href=\"https://twitter.com/AdDUBlueVote\" target=\"_blank\"><i class=\"bi bi-twitter text-white\"></i></a><a href=\"mailto:bluevote@addu.edu.ph?subject=subject text\" target=\"_blank\"><i class=\"bi bi-google text-white\"></i></a></div></div></footer>", 2);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _hoisted_1;
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/MarkdownViewer.vue?vue&type=template&id=cb152328":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/MarkdownViewer.vue?vue&type=template&id=cb152328 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.sizeStyle),
    innerHTML: $setup.markdown
  }, null, 10
  /* CLASS, PROPS */
  , _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=template&id=f667ca18":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=template&id=f667ca18 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "min-vh-100 d-flex flex-column"
};
var _hoisted_2 = {
  "class": "nav navbar-nav navbar-dark ms-auto mb-2 mb-lg-0 gap-4"
};
var _hoisted_3 = {
  "class": "nav-item dropdown"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link dropdown-toggle",
  href: "#",
  role: "button",
  id: "votersRegistrationDropdown",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, " Voters Registration ", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "dropdown-menu",
  "aria-labelledby": "votersRegistrationDropdown"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Registration Process ");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" FAQs ");

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Registration Sites ");

var _hoisted_9 = {
  "class": "nav-item"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Voters Education ");

var _hoisted_11 = {
  "class": "nav-item"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Candidates Profile ");

var _hoisted_13 = {
  "class": "nav-item"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Voting Precints ");

var _hoisted_15 = {
  "class": "nav-item"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" About Us ");

var _hoisted_17 = {
  "class": "flex-grow-1",
  style: {
    "position": "relative"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_ArisenHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ArisenHeader");

  var _component_ArisenFooter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ArisenFooter");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ArisenHeader, null, {
    "collapse-content": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        "class": "dropdown-item",
        href: "".concat(_ctx.route('voters-registration'), "#voter-registration")
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_6];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        "class": "dropdown-item",
        href: "".concat(_ctx.route('voters-registration'), "#faqs")
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_7];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        "class": "dropdown-item",
        href: "".concat(_ctx.route('voters-registration'), "#map")
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_8];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        "class": "nav-link",
        href: _ctx.route('voters-education')
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_10];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        "class": "nav-link",
        href: _ctx.route('candidate-profiles.index')
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_12];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        "class": "nav-link",
        href: _ctx.route('voting-precints')
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_14];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        "class": "nav-link",
        href: _ctx.route('about-us')
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_16];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"])])])];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ArisenFooter)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Guest.vue?vue&type=template&id=5421e404":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Guest.vue?vue&type=template&id=5421e404 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CandidateProfileLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CandidateProfileLayout");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CandidateProfileLayout, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
    }),
    _: 3
    /* FORWARDED */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=template&id=fbd95714":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=template&id=fbd95714 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["attrs"];
var _hoisted_2 = {
  "class": "container-md"
};
var _hoisted_3 = {
  "class": "d-flex"
};
var _hoisted_4 = ["src"];

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "navbar-toggler-icon"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];
var _hoisted_7 = {
  "class": "collapse navbar-collapse flex-grow-1",
  ref: "navbarCollapse"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", {
    attrs: _ctx.$attrs,
    "class": "navbar sticky-top navbar-dark bg-primary navbar-expand-md arisen-header"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "before-logo"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "navbar-brand",
    href: "/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: _ctx.logo,
        "class": "navbar-logo"
      }, null, 8
      /* PROPS */
      , _hoisted_4)];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "after-logo", {}, function () {
    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "navbar-toggler",
      onClick: _cache[0] || (_cache[0] = function () {
        return _ctx.toggleNav && _ctx.toggleNav.apply(_ctx, arguments);
      }),
      type: "button",
      "aria-label": "Toggle navigation"
    }, _hoisted_6)];
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "collapse-content")], 512
  /* NEED_PATCH */
  )])], 8
  /* PROPS */
  , _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AboutUs.vue?vue&type=template&id=29b059f2":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AboutUs.vue?vue&type=template&id=29b059f2 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container-md",
  style: {
    "margin-top": "5%"
  }
};
var _hoisted_2 = {
  "class": "row g-0 mb-3"
};
var _hoisted_3 = {
  "class": "col-12 col-md-5 order-2 order-sm-1"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-primary fw-bold"
}, "What is Blue Vote?", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12 col-md-7 order-1 order-sm-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "images/blue vote logo.png"
})], -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row g-0 mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-primary fw-bold"
}, "Previous Projects")], -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "row g-0 mt-3 mb-3"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-primary fw-bold mb-4"
}, "People Behind Blue Vote", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-danger fw-bold mb-4"
}, "Volunteers", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-warning fw-bold mb-4"
}, "Partner Offices", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "row g-0 mt-3 mb-3"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-primary fw-bold"
}, "How to Volunteer", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "d-flex flex-column gap-4 mt-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_MarkdownViewer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MarkdownViewer");

  var _component_PreviousProjectList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PreviousProjectList");

  var _component_PeopleList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PeopleList");

  var _component_StepCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StepCard");

  var _component_GuestLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GuestLayout");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "About Us"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GuestLayout, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownViewer, {
        content: _ctx.bluevote_info.description,
        size: "sm"
      }, null, 8
      /* PROPS */
      , ["content"])]), _hoisted_5]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PreviousProjectList, {
        projects: _ctx.previous_projects
      }, null, 8
      /* PROPS */
      , ["projects"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PeopleList, {
        people: _ctx.bluevote_people
      }, null, 8
      /* PROPS */
      , ["people"]), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PeopleList, {
        people: _ctx.volunteers
      }, null, 8
      /* PROPS */
      , ["people"]), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PeopleList, {
        people: _ctx.partner_offices
      }, null, 8
      /* PROPS */
      , ["people"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.volunteer_steps, function (step) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_StepCard, {
          key: step.id,
          processStep: step
        }, null, 8
        /* PROPS */
        , ["processStep"]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])])])];
    }),
    _: 1
    /* STABLE */

  })], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.navbar-logo {\n  max-height: 50px;\n  max-width: 80%;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Components/assets/logo.png":
/*!*************************************************!*\
  !*** ./resources/js/Components/assets/logo.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logo.png?0706ef5784e46b428b8a2893e5525084");

/***/ }),

/***/ "./node_modules/marked/lib/marked.js":
/*!*******************************************!*\
  !*** ./node_modules/marked/lib/marked.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2021, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);

    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var defaults$5 = {exports: {}};

  function getDefaults$1() {
    return {
      baseUrl: null,
      breaks: false,
      extensions: null,
      gfm: true,
      headerIds: true,
      headerPrefix: '',
      highlight: null,
      langPrefix: 'language-',
      mangle: true,
      pedantic: false,
      renderer: null,
      sanitize: false,
      sanitizer: null,
      silent: false,
      smartLists: false,
      smartypants: false,
      tokenizer: null,
      walkTokens: null,
      xhtml: false
    };
  }

  function changeDefaults$1(newDefaults) {
    defaults$5.exports.defaults = newDefaults;
  }

  defaults$5.exports = {
    defaults: getDefaults$1(),
    getDefaults: getDefaults$1,
    changeDefaults: changeDefaults$1
  };

  /**
   * Helpers
   */
  var escapeTest = /[&<>"']/;
  var escapeReplace = /[&<>"']/g;
  var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
  var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
  var escapeReplacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  var getEscapeReplacement = function getEscapeReplacement(ch) {
    return escapeReplacements[ch];
  };

  function escape$2(html, encode) {
    if (encode) {
      if (escapeTest.test(html)) {
        return html.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }

    return html;
  }

  var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

  function unescape$1(html) {
    // explicitly match decimal, hex, and named HTML entities
    return html.replace(unescapeTest, function (_, n) {
      n = n.toLowerCase();
      if (n === 'colon') return ':';

      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }

      return '';
    });
  }

  var caret = /(^|[^\[])\^/g;

  function edit$1(regex, opt) {
    regex = regex.source || regex;
    opt = opt || '';
    var obj = {
      replace: function replace(name, val) {
        val = val.source || val;
        val = val.replace(caret, '$1');
        regex = regex.replace(name, val);
        return obj;
      },
      getRegex: function getRegex() {
        return new RegExp(regex, opt);
      }
    };
    return obj;
  }

  var nonWordAndColonTest = /[^\w:]/g;
  var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

  function cleanUrl$1(sanitize, base, href) {
    if (sanitize) {
      var prot;

      try {
        prot = decodeURIComponent(unescape$1(href)).replace(nonWordAndColonTest, '').toLowerCase();
      } catch (e) {
        return null;
      }

      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
        return null;
      }
    }

    if (base && !originIndependentUrl.test(href)) {
      href = resolveUrl(base, href);
    }

    try {
      href = encodeURI(href).replace(/%25/g, '%');
    } catch (e) {
      return null;
    }

    return href;
  }

  var baseUrls = {};
  var justDomain = /^[^:]+:\/*[^/]*$/;
  var protocol = /^([^:]+:)[\s\S]*$/;
  var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

  function resolveUrl(base, href) {
    if (!baseUrls[' ' + base]) {
      // we can ignore everything in base after the last slash of its path component,
      // but we might need to add _that_
      // https://tools.ietf.org/html/rfc3986#section-3
      if (justDomain.test(base)) {
        baseUrls[' ' + base] = base + '/';
      } else {
        baseUrls[' ' + base] = rtrim$1(base, '/', true);
      }
    }

    base = baseUrls[' ' + base];
    var relativeBase = base.indexOf(':') === -1;

    if (href.substring(0, 2) === '//') {
      if (relativeBase) {
        return href;
      }

      return base.replace(protocol, '$1') + href;
    } else if (href.charAt(0) === '/') {
      if (relativeBase) {
        return href;
      }

      return base.replace(domain, '$1') + href;
    } else {
      return base + href;
    }
  }

  var noopTest$1 = {
    exec: function noopTest() {}
  };

  function merge$2(obj) {
    var i = 1,
        target,
        key;

    for (; i < arguments.length; i++) {
      target = arguments[i];

      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }

    return obj;
  }

  function splitCells$1(tableRow, count) {
    // ensure that every cell-delimiting pipe has a space
    // before it to distinguish it from an escaped pipe
    var row = tableRow.replace(/\|/g, function (match, offset, str) {
      var escaped = false,
          curr = offset;

      while (--curr >= 0 && str[curr] === '\\') {
        escaped = !escaped;
      }

      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
        cells = row.split(/ \|/);
    var i = 0; // First/last cell in a row cannot be empty if it has no leading/trailing pipe

    if (!cells[0].trim()) {
      cells.shift();
    }

    if (!cells[cells.length - 1].trim()) {
      cells.pop();
    }

    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) {
        cells.push('');
      }
    }

    for (; i < cells.length; i++) {
      // leading or trailing whitespace is ignored per the gfm spec
      cells[i] = cells[i].trim().replace(/\\\|/g, '|');
    }

    return cells;
  } // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
  // /c*$/ is vulnerable to REDOS.
  // invert: Remove suffix of non-c chars instead. Default falsey.


  function rtrim$1(str, c, invert) {
    var l = str.length;

    if (l === 0) {
      return '';
    } // Length of suffix matching the invert condition.


    var suffLen = 0; // Step left until we fail to match the invert condition.

    while (suffLen < l) {
      var currChar = str.charAt(l - suffLen - 1);

      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }

    return str.substr(0, l - suffLen);
  }

  function findClosingBracket$1(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }

    var l = str.length;
    var level = 0,
        i = 0;

    for (; i < l; i++) {
      if (str[i] === '\\') {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;

        if (level < 0) {
          return i;
        }
      }
    }

    return -1;
  }

  function checkSanitizeDeprecation$1(opt) {
    if (opt && opt.sanitize && !opt.silent) {
      console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
    }
  } // copied from https://stackoverflow.com/a/5450113/806777


  function repeatString$1(pattern, count) {
    if (count < 1) {
      return '';
    }

    var result = '';

    while (count > 1) {
      if (count & 1) {
        result += pattern;
      }

      count >>= 1;
      pattern += pattern;
    }

    return result + pattern;
  }

  var helpers = {
    escape: escape$2,
    unescape: unescape$1,
    edit: edit$1,
    cleanUrl: cleanUrl$1,
    resolveUrl: resolveUrl,
    noopTest: noopTest$1,
    merge: merge$2,
    splitCells: splitCells$1,
    rtrim: rtrim$1,
    findClosingBracket: findClosingBracket$1,
    checkSanitizeDeprecation: checkSanitizeDeprecation$1,
    repeatString: repeatString$1
  };

  var defaults$4 = defaults$5.exports.defaults;
  var rtrim = helpers.rtrim,
      splitCells = helpers.splitCells,
      _escape = helpers.escape,
      findClosingBracket = helpers.findClosingBracket;

  function outputLink(cap, link, raw, lexer) {
    var href = link.href;
    var title = link.title ? _escape(link.title) : null;
    var text = cap[1].replace(/\\([\[\]])/g, '$1');

    if (cap[0].charAt(0) !== '!') {
      lexer.state.inLink = true;
      var token = {
        type: 'link',
        raw: raw,
        href: href,
        title: title,
        text: text,
        tokens: lexer.inlineTokens(text, [])
      };
      lexer.state.inLink = false;
      return token;
    } else {
      return {
        type: 'image',
        raw: raw,
        href: href,
        title: title,
        text: _escape(text)
      };
    }
  }

  function indentCodeCompensation(raw, text) {
    var matchIndentToCode = raw.match(/^(\s+)(?:```)/);

    if (matchIndentToCode === null) {
      return text;
    }

    var indentToCode = matchIndentToCode[1];
    return text.split('\n').map(function (node) {
      var matchIndentInNode = node.match(/^\s+/);

      if (matchIndentInNode === null) {
        return node;
      }

      var indentInNode = matchIndentInNode[0];

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    }).join('\n');
  }
  /**
   * Tokenizer
   */


  var Tokenizer_1 = /*#__PURE__*/function () {
    function Tokenizer(options) {
      this.options = options || defaults$4;
    }

    var _proto = Tokenizer.prototype;

    _proto.space = function space(src) {
      var cap = this.rules.block.newline.exec(src);

      if (cap) {
        if (cap[0].length > 1) {
          return {
            type: 'space',
            raw: cap[0]
          };
        }

        return {
          raw: '\n'
        };
      }
    };

    _proto.code = function code(src) {
      var cap = this.rules.block.code.exec(src);

      if (cap) {
        var text = cap[0].replace(/^ {1,4}/gm, '');
        return {
          type: 'code',
          raw: cap[0],
          codeBlockStyle: 'indented',
          text: !this.options.pedantic ? rtrim(text, '\n') : text
        };
      }
    };

    _proto.fences = function fences(src) {
      var cap = this.rules.block.fences.exec(src);

      if (cap) {
        var raw = cap[0];
        var text = indentCodeCompensation(raw, cap[3] || '');
        return {
          type: 'code',
          raw: raw,
          lang: cap[2] ? cap[2].trim() : cap[2],
          text: text
        };
      }
    };

    _proto.heading = function heading(src) {
      var cap = this.rules.block.heading.exec(src);

      if (cap) {
        var text = cap[2].trim(); // remove trailing #s

        if (/#$/.test(text)) {
          var trimmed = rtrim(text, '#');

          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            // CommonMark requires space before trailing #s
            text = trimmed.trim();
          }
        }

        var token = {
          type: 'heading',
          raw: cap[0],
          depth: cap[1].length,
          text: text,
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    };

    _proto.hr = function hr(src) {
      var cap = this.rules.block.hr.exec(src);

      if (cap) {
        return {
          type: 'hr',
          raw: cap[0]
        };
      }
    };

    _proto.blockquote = function blockquote(src) {
      var cap = this.rules.block.blockquote.exec(src);

      if (cap) {
        var text = cap[0].replace(/^ *> ?/gm, '');
        return {
          type: 'blockquote',
          raw: cap[0],
          tokens: this.lexer.blockTokens(text, []),
          text: text
        };
      }
    };

    _proto.list = function list(src) {
      var cap = this.rules.block.list.exec(src);

      if (cap) {
        var raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, lines, itemContents;
        var bull = cap[1].trim();
        var isordered = bull.length > 1;
        var list = {
          type: 'list',
          raw: '',
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : '',
          loose: false,
          items: []
        };
        bull = isordered ? "\\d{1,9}\\" + bull.slice(-1) : "\\" + bull;

        if (this.options.pedantic) {
          bull = isordered ? bull : '[*+-]';
        } // Get next list item


        var itemRegex = new RegExp("^( {0,3}" + bull + ")((?: [^\\n]*| *)(?:\\n[^\\n]*)*(?:\\n|$))"); // Get each top-level item

        while (src) {
          if (this.rules.block.hr.test(src)) {
            // End list if we encounter an HR (possibly move into itemRegex?)
            break;
          }

          if (!(cap = itemRegex.exec(src))) {
            break;
          }

          lines = cap[2].split('\n');

          if (this.options.pedantic) {
            indent = 2;
            itemContents = lines[0].trimLeft();
          } else {
            indent = cap[2].search(/[^ ]/); // Find first non-space char

            indent = cap[1].length + (indent > 4 ? 1 : indent); // intented code blocks after 4 spaces; indent is always 1

            itemContents = lines[0].slice(indent - cap[1].length);
          }

          blankLine = false;
          raw = cap[0];

          if (!lines[0] && /^ *$/.test(lines[1])) {
            // items begin with at most one blank line
            raw = cap[1] + lines.slice(0, 2).join('\n') + '\n';
            list.loose = true;
            lines = [];
          }

          var nextBulletRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}(?:[*+-]|\\d{1,9}[.)])");

          for (i = 1; i < lines.length; i++) {
            line = lines[i];

            if (this.options.pedantic) {
              // Re-align to follow commonmark nesting rules
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
            } // End list item if found start of new bullet


            if (nextBulletRegex.test(line)) {
              raw = cap[1] + lines.slice(0, i).join('\n') + '\n';
              break;
            } // Until we encounter a blank line, item contents do not need indentation


            if (!blankLine) {
              if (!line.trim()) {
                // Check if current line is empty
                blankLine = true;
              } // Dedent if possible


              if (line.search(/[^ ]/) >= indent) {
                itemContents += '\n' + line.slice(indent);
              } else {
                itemContents += '\n' + line;
              }

              continue;
            } // Dedent this line


            if (line.search(/[^ ]/) >= indent || !line.trim()) {
              itemContents += '\n' + line.slice(indent);
              continue;
            } else {
              // Line was not properly indented; end of this item
              raw = cap[1] + lines.slice(0, i).join('\n') + '\n';
              break;
            }
          }

          if (!list.loose) {
            // If the previous item ended with a blank line, the list is loose
            if (endsWithBlankLine) {
              list.loose = true;
            } else if (/\n *\n *$/.test(raw)) {
              endsWithBlankLine = true;
            }
          } // Check for task list items


          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.exec(itemContents);

            if (istask) {
              ischecked = istask[0] !== '[ ] ';
              itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
            }
          }

          list.items.push({
            type: 'list_item',
            raw: raw,
            task: !!istask,
            checked: ischecked,
            loose: false,
            text: itemContents
          });
          list.raw += raw;
          src = src.slice(raw.length);
        } // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic


        list.items[list.items.length - 1].raw = raw.trimRight();
        list.items[list.items.length - 1].text = itemContents.trimRight();
        list.raw = list.raw.trimRight();
        var l = list.items.length; // Item child tokens handled here at end because we needed to have the final item to trim it first

        for (i = 0; i < l; i++) {
          this.lexer.state.top = false;
          list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);

          if (list.items[i].tokens.some(function (t) {
            return t.type === 'space';
          })) {
            list.loose = true;
            list.items[i].loose = true;
          }
        }

        return list;
      }
    };

    _proto.html = function html(src) {
      var cap = this.rules.block.html.exec(src);

      if (cap) {
        var token = {
          type: 'html',
          raw: cap[0],
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: cap[0]
        };

        if (this.options.sanitize) {
          token.type = 'paragraph';
          token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]);
          token.tokens = [];
          this.lexer.inline(token.text, token.tokens);
        }

        return token;
      }
    };

    _proto.def = function def(src) {
      var cap = this.rules.block.def.exec(src);

      if (cap) {
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
        return {
          type: 'def',
          tag: tag,
          raw: cap[0],
          href: cap[2],
          title: cap[3]
        };
      }
    };

    _proto.table = function table(src) {
      var cap = this.rules.block.table.exec(src);

      if (cap) {
        var item = {
          type: 'table',
          header: splitCells(cap[1]).map(function (c) {
            return {
              text: c
            };
          }),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          rows: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          item.raw = cap[0];
          var l = item.align.length;
          var i, j, k, row;

          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          l = item.rows.length;

          for (i = 0; i < l; i++) {
            item.rows[i] = splitCells(item.rows[i], item.header.length).map(function (c) {
              return {
                text: c
              };
            });
          } // parse child tokens inside headers and cells
          // header child tokens


          l = item.header.length;

          for (j = 0; j < l; j++) {
            item.header[j].tokens = [];
            this.lexer.inlineTokens(item.header[j].text, item.header[j].tokens);
          } // cell child tokens


          l = item.rows.length;

          for (j = 0; j < l; j++) {
            row = item.rows[j];

            for (k = 0; k < row.length; k++) {
              row[k].tokens = [];
              this.lexer.inlineTokens(row[k].text, row[k].tokens);
            }
          }

          return item;
        }
      }
    };

    _proto.lheading = function lheading(src) {
      var cap = this.rules.block.lheading.exec(src);

      if (cap) {
        var token = {
          type: 'heading',
          raw: cap[0],
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1],
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    };

    _proto.paragraph = function paragraph(src) {
      var cap = this.rules.block.paragraph.exec(src);

      if (cap) {
        var token = {
          type: 'paragraph',
          raw: cap[0],
          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1],
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    };

    _proto.text = function text(src) {
      var cap = this.rules.block.text.exec(src);

      if (cap) {
        var token = {
          type: 'text',
          raw: cap[0],
          text: cap[0],
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    };

    _proto.escape = function escape(src) {
      var cap = this.rules.inline.escape.exec(src);

      if (cap) {
        return {
          type: 'escape',
          raw: cap[0],
          text: _escape(cap[1])
        };
      }
    };

    _proto.tag = function tag(src) {
      var cap = this.rules.inline.tag.exec(src);

      if (cap) {
        if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
          this.lexer.state.inLink = false;
        }

        if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = false;
        }

        return {
          type: this.options.sanitize ? 'text' : 'html',
          raw: cap[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
        };
      }
    };

    _proto.link = function link(src) {
      var cap = this.rules.inline.link.exec(src);

      if (cap) {
        var trimmedUrl = cap[2].trim();

        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          // commonmark requires matching angle brackets
          if (!/>$/.test(trimmedUrl)) {
            return;
          } // ending angle bracket cannot be escaped


          var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');

          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          // find closing parenthesis
          var lastParenIndex = findClosingBracket(cap[2], '()');

          if (lastParenIndex > -1) {
            var start = cap[0].indexOf('!') === 0 ? 5 : 4;
            var linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = '';
          }
        }

        var href = cap[2];
        var title = '';

        if (this.options.pedantic) {
          // split pedantic href and title
          var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

          if (link) {
            href = link[1];
            title = link[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }

        href = href.trim();

        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            // pedantic allows starting angle bracket without ending angle bracket
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }

        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
          title: title ? title.replace(this.rules.inline._escapes, '$1') : title
        }, cap[0], this.lexer);
      }
    };

    _proto.reflink = function reflink(src, links) {
      var cap;

      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = links[link.toLowerCase()];

        if (!link || !link.href) {
          var text = cap[0].charAt(0);
          return {
            type: 'text',
            raw: text,
            text: text
          };
        }

        return outputLink(cap, link, cap[0], this.lexer);
      }
    };

    _proto.emStrong = function emStrong(src, maskedSrc, prevChar) {
      if (prevChar === void 0) {
        prevChar = '';
      }

      var match = this.rules.inline.emStrong.lDelim.exec(src);
      if (!match) return; // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well

      if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/)) return;
      var nextChar = match[1] || match[2] || '';

      if (!nextChar || nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar))) {
        var lLength = match[0].length - 1;
        var rDelim,
            rLength,
            delimTotal = lLength,
            midDelimTotal = 0;
        var endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
        endReg.lastIndex = 0; // Clip maskedSrc to same section of string as src (move to lexer?)

        maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

        while ((match = endReg.exec(maskedSrc)) != null) {
          rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
          if (!rDelim) continue; // skip single * in __abc*abc__

          rLength = rDelim.length;

          if (match[3] || match[4]) {
            // found another Left Delim
            delimTotal += rLength;
            continue;
          } else if (match[5] || match[6]) {
            // either Left or Right Delim
            if (lLength % 3 && !((lLength + rLength) % 3)) {
              midDelimTotal += rLength;
              continue; // CommonMark Emphasis Rules 9-10
            }
          }

          delimTotal -= rLength;
          if (delimTotal > 0) continue; // Haven't found enough closing delimiters
          // Remove extra characters. *a*** -> *a*

          rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal); // Create `em` if smallest delimiter has odd char count. *a***

          if (Math.min(lLength, rLength) % 2) {
            var _text = src.slice(1, lLength + match.index + rLength);

            return {
              type: 'em',
              raw: src.slice(0, lLength + match.index + rLength + 1),
              text: _text,
              tokens: this.lexer.inlineTokens(_text, [])
            };
          } // Create 'strong' if smallest delimiter has even char count. **a***


          var text = src.slice(2, lLength + match.index + rLength - 1);
          return {
            type: 'strong',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text: text,
            tokens: this.lexer.inlineTokens(text, [])
          };
        }
      }
    };

    _proto.codespan = function codespan(src) {
      var cap = this.rules.inline.code.exec(src);

      if (cap) {
        var text = cap[2].replace(/\n/g, ' ');
        var hasNonSpaceChars = /[^ ]/.test(text);
        var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);

        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }

        text = _escape(text, true);
        return {
          type: 'codespan',
          raw: cap[0],
          text: text
        };
      }
    };

    _proto.br = function br(src) {
      var cap = this.rules.inline.br.exec(src);

      if (cap) {
        return {
          type: 'br',
          raw: cap[0]
        };
      }
    };

    _proto.del = function del(src) {
      var cap = this.rules.inline.del.exec(src);

      if (cap) {
        return {
          type: 'del',
          raw: cap[0],
          text: cap[2],
          tokens: this.lexer.inlineTokens(cap[2], [])
        };
      }
    };

    _proto.autolink = function autolink(src, mangle) {
      var cap = this.rules.inline.autolink.exec(src);

      if (cap) {
        var text, href;

        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
          href = 'mailto:' + text;
        } else {
          text = _escape(cap[1]);
          href = text;
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    };

    _proto.url = function url(src, mangle) {
      var cap;

      if (cap = this.rules.inline.url.exec(src)) {
        var text, href;

        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          var prevCapZero;

          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);

          text = _escape(cap[0]);

          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    };

    _proto.inlineText = function inlineText(src, smartypants) {
      var cap = this.rules.inline.text.exec(src);

      if (cap) {
        var text;

        if (this.lexer.state.inRawBlock) {
          text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0];
        } else {
          text = _escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
        }

        return {
          type: 'text',
          raw: cap[0],
          text: text
        };
      }
    };

    return Tokenizer;
  }();

  var noopTest = helpers.noopTest,
      edit = helpers.edit,
      merge$1 = helpers.merge;
  /**
   * Block-Level Grammar
   */

  var block$1 = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
    html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
    + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
    + ')',
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    table: noopTest,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    // regex template, placeholders will be replaced according to different paragraph
    // interruption rules of commonmark and the original markdown spec:
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
    text: /^[^\n]+/
  };
  block$1._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
  block$1._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block$1.def = edit(block$1.def).replace('label', block$1._label).replace('title', block$1._title).getRegex();
  block$1.bullet = /(?:[*+-]|\d{1,9}[.)])/;
  block$1.listItemStart = edit(/^( *)(bull) */).replace('bull', block$1.bullet).getRegex();
  block$1.list = edit(block$1.list).replace(/bull/g, block$1.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block$1.def.source + ')').getRegex();
  block$1._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
  block$1._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
  block$1.html = edit(block$1.html, 'i').replace('comment', block$1._comment).replace('tag', block$1._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block$1.paragraph = edit(block$1._paragraph).replace('hr', block$1.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block$1._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
  block$1.blockquote = edit(block$1.blockquote).replace('paragraph', block$1.paragraph).getRegex();
  /**
   * Normal Block Grammar
   */

  block$1.normal = merge$1({}, block$1);
  /**
   * GFM Block Grammar
   */

  block$1.gfm = merge$1({}, block$1.normal, {
    table: '^ *([^\\n ].*\\|.*)\\n' // Header
    + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
    + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

  });
  block$1.gfm.table = edit(block$1.gfm.table).replace('hr', block$1.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block$1._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();
  /**
   * Pedantic grammar (original John Gruber's loose markdown specification)
   */

  block$1.pedantic = merge$1({}, block$1.normal, {
    html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block$1._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: noopTest,
    // fences not supported
    paragraph: edit(block$1.normal._paragraph).replace('hr', block$1.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block$1.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
  });
  /**
   * Inline-Level Grammar
   */

  var inline$1 = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noopTest,
    tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    // CDATA section
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
      //        () Skip orphan delim inside strong    (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
      rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
      rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _

    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noopTest,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/
  }; // list of punctuation marks from CommonMark spec
  // without * and _ to handle the different emphasis markers * and _

  inline$1._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
  inline$1.punctuation = edit(inline$1.punctuation).replace(/punctuation/g, inline$1._punctuation).getRegex(); // sequences em should skip over [title](link), `code`, <html>

  inline$1.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
  inline$1.escapedEmSt = /\\\*|\\_/g;
  inline$1._comment = edit(block$1._comment).replace('(?:-->|$)', '-->').getRegex();
  inline$1.emStrong.lDelim = edit(inline$1.emStrong.lDelim).replace(/punct/g, inline$1._punctuation).getRegex();
  inline$1.emStrong.rDelimAst = edit(inline$1.emStrong.rDelimAst, 'g').replace(/punct/g, inline$1._punctuation).getRegex();
  inline$1.emStrong.rDelimUnd = edit(inline$1.emStrong.rDelimUnd, 'g').replace(/punct/g, inline$1._punctuation).getRegex();
  inline$1._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  inline$1._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline$1._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline$1.autolink = edit(inline$1.autolink).replace('scheme', inline$1._scheme).replace('email', inline$1._email).getRegex();
  inline$1._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline$1.tag = edit(inline$1.tag).replace('comment', inline$1._comment).replace('attribute', inline$1._attribute).getRegex();
  inline$1._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  inline$1._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
  inline$1._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline$1.link = edit(inline$1.link).replace('label', inline$1._label).replace('href', inline$1._href).replace('title', inline$1._title).getRegex();
  inline$1.reflink = edit(inline$1.reflink).replace('label', inline$1._label).getRegex();
  inline$1.reflinkSearch = edit(inline$1.reflinkSearch, 'g').replace('reflink', inline$1.reflink).replace('nolink', inline$1.nolink).getRegex();
  /**
   * Normal Inline Grammar
   */

  inline$1.normal = merge$1({}, inline$1);
  /**
   * Pedantic Inline Grammar
   */

  inline$1.pedantic = merge$1({}, inline$1.normal, {
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g
    },
    link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline$1._label).getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline$1._label).getRegex()
  });
  /**
   * GFM Inline Grammar
   */

  inline$1.gfm = merge$1({}, inline$1.normal, {
    escape: edit(inline$1.escape).replace('])', '~|])').getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  });
  inline$1.gfm.url = edit(inline$1.gfm.url, 'i').replace('email', inline$1.gfm._extended_email).getRegex();
  /**
   * GFM + Line Breaks Inline Grammar
   */

  inline$1.breaks = merge$1({}, inline$1.gfm, {
    br: edit(inline$1.br).replace('{2,}', '*').getRegex(),
    text: edit(inline$1.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
  });
  var rules = {
    block: block$1,
    inline: inline$1
  };

  var Tokenizer$1 = Tokenizer_1;
  var defaults$3 = defaults$5.exports.defaults;
  var block = rules.block,
      inline = rules.inline;
  var repeatString = helpers.repeatString;
  /**
   * smartypants text replacement
   */

  function smartypants(text) {
    return text // em-dashes
    .replace(/---/g, "\u2014") // en-dashes
    .replace(/--/g, "\u2013") // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
    .replace(/'/g, "\u2019") // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
    .replace(/"/g, "\u201D") // ellipses
    .replace(/\.{3}/g, "\u2026");
  }
  /**
   * mangle email addresses
   */


  function mangle(text) {
    var out = '',
        i,
        ch;
    var l = text.length;

    for (i = 0; i < l; i++) {
      ch = text.charCodeAt(i);

      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }

      out += '&#' + ch + ';';
    }

    return out;
  }
  /**
   * Block Lexer
   */


  var Lexer_1 = /*#__PURE__*/function () {
    function Lexer(options) {
      this.tokens = [];
      this.tokens.links = Object.create(null);
      this.options = options || defaults$3;
      this.options.tokenizer = this.options.tokenizer || new Tokenizer$1();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      this.tokenizer.lexer = this;
      this.inlineQueue = [];
      this.state = {
        inLink: false,
        inRawBlock: false,
        top: true
      };
      var rules = {
        block: block.normal,
        inline: inline.normal
      };

      if (this.options.pedantic) {
        rules.block = block.pedantic;
        rules.inline = inline.pedantic;
      } else if (this.options.gfm) {
        rules.block = block.gfm;

        if (this.options.breaks) {
          rules.inline = inline.breaks;
        } else {
          rules.inline = inline.gfm;
        }
      }

      this.tokenizer.rules = rules;
    }
    /**
     * Expose Rules
     */


    /**
     * Static Lex Method
     */
    Lexer.lex = function lex(src, options) {
      var lexer = new Lexer(options);
      return lexer.lex(src);
    }
    /**
     * Static Lex Inline Method
     */
    ;

    Lexer.lexInline = function lexInline(src, options) {
      var lexer = new Lexer(options);
      return lexer.inlineTokens(src);
    }
    /**
     * Preprocessing
     */
    ;

    var _proto = Lexer.prototype;

    _proto.lex = function lex(src) {
      src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
      this.blockTokens(src, this.tokens);
      var next;

      while (next = this.inlineQueue.shift()) {
        this.inlineTokens(next.src, next.tokens);
      }

      return this.tokens;
    }
    /**
     * Lexing
     */
    ;

    _proto.blockTokens = function blockTokens(src, tokens) {
      var _this = this;

      if (tokens === void 0) {
        tokens = [];
      }

      if (this.options.pedantic) {
        src = src.replace(/^ +$/gm, '');
      }

      var token, lastToken, cutSrc, lastParagraphClipped;

      while (src) {
        if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function (extTokenizer) {
          if (token = extTokenizer.call({
            lexer: _this
          }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }

          return false;
        })) {
          continue;
        } // newline


        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length);

          if (token.type) {
            tokens.push(token);
          }

          continue;
        } // code


        if (token = this.tokenizer.code(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

          if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }

          continue;
        } // fences


        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // heading


        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // hr


        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // blockquote


        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // list


        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // html


        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // def


        if (token = this.tokenizer.def(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];

          if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.raw;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title
            };
          }

          continue;
        } // table (gfm)


        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // lheading


        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // top-level paragraph
        // prevent paragraph consuming extensions by clipping 'src' to extension start


        cutSrc = src;

        if (this.options.extensions && this.options.extensions.startBlock) {
          (function () {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart = void 0;

            _this.options.extensions.startBlock.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: this
              }, tempSrc);

              if (typeof tempStart === 'number' && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });

            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          })();
        }

        if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
          lastToken = tokens[tokens.length - 1];

          if (lastParagraphClipped && lastToken.type === 'paragraph') {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }

          lastParagraphClipped = cutSrc.length !== src.length;
          src = src.substring(token.raw.length);
          continue;
        } // text


        if (token = this.tokenizer.text(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];

          if (lastToken && lastToken.type === 'text') {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }

          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      this.state.top = true;
      return tokens;
    };

    _proto.inline = function inline(src, tokens) {
      this.inlineQueue.push({
        src: src,
        tokens: tokens
      });
    }
    /**
     * Lexing/Compiling
     */
    ;

    _proto.inlineTokens = function inlineTokens(src, tokens) {
      var _this2 = this;

      if (tokens === void 0) {
        tokens = [];
      }

      var token, lastToken, cutSrc; // String with links masked to avoid interference with em and strong

      var maskedSrc = src;
      var match;
      var keepPrevChar, prevChar; // Mask out reflinks

      if (this.tokens.links) {
        var links = Object.keys(this.tokens.links);

        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      } // Mask out other blocks


      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      } // Mask out escaped em & strong delimiters


      while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
      }

      while (src) {
        if (!keepPrevChar) {
          prevChar = '';
        }

        keepPrevChar = false; // extensions

        if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function (extTokenizer) {
          if (token = extTokenizer.call({
            lexer: _this2
          }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }

          return false;
        })) {
          continue;
        } // escape


        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // tag


        if (token = this.tokenizer.tag(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];

          if (lastToken && token.type === 'text' && lastToken.type === 'text') {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }

          continue;
        } // link


        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // reflink, nolink


        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];

          if (lastToken && token.type === 'text' && lastToken.type === 'text') {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }

          continue;
        } // em & strong


        if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // code


        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // br


        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // del (gfm)


        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // autolink


        if (token = this.tokenizer.autolink(src, mangle)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // url (gfm)


        if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // text
        // prevent inlineText consuming extensions by clipping 'src' to extension start


        cutSrc = src;

        if (this.options.extensions && this.options.extensions.startInline) {
          (function () {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart = void 0;

            _this2.options.extensions.startInline.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: this
              }, tempSrc);

              if (typeof tempStart === 'number' && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });

            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          })();
        }

        if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
          src = src.substring(token.raw.length);

          if (token.raw.slice(-1) !== '_') {
            // Track prevChar before string of ____ started
            prevChar = token.raw.slice(-1);
          }

          keepPrevChar = true;
          lastToken = tokens[tokens.length - 1];

          if (lastToken && lastToken.type === 'text') {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }

          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      return tokens;
    };

    _createClass(Lexer, null, [{
      key: "rules",
      get: function get() {
        return {
          block: block,
          inline: inline
        };
      }
    }]);

    return Lexer;
  }();

  var defaults$2 = defaults$5.exports.defaults;
  var cleanUrl = helpers.cleanUrl,
      escape$1 = helpers.escape;
  /**
   * Renderer
   */

  var Renderer_1 = /*#__PURE__*/function () {
    function Renderer(options) {
      this.options = options || defaults$2;
    }

    var _proto = Renderer.prototype;

    _proto.code = function code(_code, infostring, escaped) {
      var lang = (infostring || '').match(/\S*/)[0];

      if (this.options.highlight) {
        var out = this.options.highlight(_code, lang);

        if (out != null && out !== _code) {
          escaped = true;
          _code = out;
        }
      }

      _code = _code.replace(/\n$/, '') + '\n';

      if (!lang) {
        return '<pre><code>' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
      }

      return '<pre><code class="' + this.options.langPrefix + escape$1(lang, true) + '">' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
    };

    _proto.blockquote = function blockquote(quote) {
      return '<blockquote>\n' + quote + '</blockquote>\n';
    };

    _proto.html = function html(_html) {
      return _html;
    };

    _proto.heading = function heading(text, level, raw, slugger) {
      if (this.options.headerIds) {
        return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
      } // ignore IDs


      return '<h' + level + '>' + text + '</h' + level + '>\n';
    };

    _proto.hr = function hr() {
      return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    };

    _proto.list = function list(body, ordered, start) {
      var type = ordered ? 'ol' : 'ul',
          startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    };

    _proto.listitem = function listitem(text) {
      return '<li>' + text + '</li>\n';
    };

    _proto.checkbox = function checkbox(checked) {
      return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
    };

    _proto.paragraph = function paragraph(text) {
      return '<p>' + text + '</p>\n';
    };

    _proto.table = function table(header, body) {
      if (body) body = '<tbody>' + body + '</tbody>';
      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
    };

    _proto.tablerow = function tablerow(content) {
      return '<tr>\n' + content + '</tr>\n';
    };

    _proto.tablecell = function tablecell(content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
      return tag + content + '</' + type + '>\n';
    } // span level renderer
    ;

    _proto.strong = function strong(text) {
      return '<strong>' + text + '</strong>';
    };

    _proto.em = function em(text) {
      return '<em>' + text + '</em>';
    };

    _proto.codespan = function codespan(text) {
      return '<code>' + text + '</code>';
    };

    _proto.br = function br() {
      return this.options.xhtml ? '<br/>' : '<br>';
    };

    _proto.del = function del(text) {
      return '<del>' + text + '</del>';
    };

    _proto.link = function link(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = '<a href="' + escape$1(href) + '"';

      if (title) {
        out += ' title="' + title + '"';
      }

      out += '>' + text + '</a>';
      return out;
    };

    _proto.image = function image(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = '<img src="' + href + '" alt="' + text + '"';

      if (title) {
        out += ' title="' + title + '"';
      }

      out += this.options.xhtml ? '/>' : '>';
      return out;
    };

    _proto.text = function text(_text) {
      return _text;
    };

    return Renderer;
  }();

  /**
   * TextRenderer
   * returns only the textual part of the token
   */

  var TextRenderer_1 = /*#__PURE__*/function () {
    function TextRenderer() {}

    var _proto = TextRenderer.prototype;

    // no need for block level renderers
    _proto.strong = function strong(text) {
      return text;
    };

    _proto.em = function em(text) {
      return text;
    };

    _proto.codespan = function codespan(text) {
      return text;
    };

    _proto.del = function del(text) {
      return text;
    };

    _proto.html = function html(text) {
      return text;
    };

    _proto.text = function text(_text) {
      return _text;
    };

    _proto.link = function link(href, title, text) {
      return '' + text;
    };

    _proto.image = function image(href, title, text) {
      return '' + text;
    };

    _proto.br = function br() {
      return '';
    };

    return TextRenderer;
  }();

  /**
   * Slugger generates header id
   */

  var Slugger_1 = /*#__PURE__*/function () {
    function Slugger() {
      this.seen = {};
    }

    var _proto = Slugger.prototype;

    _proto.serialize = function serialize(value) {
      return value.toLowerCase().trim() // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
    }
    /**
     * Finds the next safe (unique) slug to use
     */
    ;

    _proto.getNextSafeSlug = function getNextSafeSlug(originalSlug, isDryRun) {
      var slug = originalSlug;
      var occurenceAccumulator = 0;

      if (this.seen.hasOwnProperty(slug)) {
        occurenceAccumulator = this.seen[originalSlug];

        do {
          occurenceAccumulator++;
          slug = originalSlug + '-' + occurenceAccumulator;
        } while (this.seen.hasOwnProperty(slug));
      }

      if (!isDryRun) {
        this.seen[originalSlug] = occurenceAccumulator;
        this.seen[slug] = 0;
      }

      return slug;
    }
    /**
     * Convert string to unique id
     * @param {object} options
     * @param {boolean} options.dryrun Generates the next unique slug without updating the internal accumulator.
     */
    ;

    _proto.slug = function slug(value, options) {
      if (options === void 0) {
        options = {};
      }

      var slug = this.serialize(value);
      return this.getNextSafeSlug(slug, options.dryrun);
    };

    return Slugger;
  }();

  var Renderer$1 = Renderer_1;
  var TextRenderer$1 = TextRenderer_1;
  var Slugger$1 = Slugger_1;
  var defaults$1 = defaults$5.exports.defaults;
  var unescape = helpers.unescape;
  /**
   * Parsing & Compiling
   */

  var Parser_1 = /*#__PURE__*/function () {
    function Parser(options) {
      this.options = options || defaults$1;
      this.options.renderer = this.options.renderer || new Renderer$1();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.textRenderer = new TextRenderer$1();
      this.slugger = new Slugger$1();
    }
    /**
     * Static Parse Method
     */


    Parser.parse = function parse(tokens, options) {
      var parser = new Parser(options);
      return parser.parse(tokens);
    }
    /**
     * Static Parse Inline Method
     */
    ;

    Parser.parseInline = function parseInline(tokens, options) {
      var parser = new Parser(options);
      return parser.parseInline(tokens);
    }
    /**
     * Parse Loop
     */
    ;

    var _proto = Parser.prototype;

    _proto.parse = function parse(tokens, top) {
      if (top === void 0) {
        top = true;
      }

      var out = '',
          i,
          j,
          k,
          l2,
          l3,
          row,
          cell,
          header,
          body,
          token,
          ordered,
          start,
          loose,
          itemBody,
          item,
          checked,
          task,
          checkbox,
          ret;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i]; // Run any renderer extensions

        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({
            parser: this
          }, token);

          if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
            out += ret || '';
            continue;
          }
        }

        switch (token.type) {
          case 'space':
            {
              continue;
            }

          case 'hr':
            {
              out += this.renderer.hr();
              continue;
            }

          case 'heading':
            {
              out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
              continue;
            }

          case 'code':
            {
              out += this.renderer.code(token.text, token.lang, token.escaped);
              continue;
            }

          case 'table':
            {
              header = ''; // header

              cell = '';
              l2 = token.header.length;

              for (j = 0; j < l2; j++) {
                cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
                  header: true,
                  align: token.align[j]
                });
              }

              header += this.renderer.tablerow(cell);
              body = '';
              l2 = token.rows.length;

              for (j = 0; j < l2; j++) {
                row = token.rows[j];
                cell = '';
                l3 = row.length;

                for (k = 0; k < l3; k++) {
                  cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                    header: false,
                    align: token.align[k]
                  });
                }

                body += this.renderer.tablerow(cell);
              }

              out += this.renderer.table(header, body);
              continue;
            }

          case 'blockquote':
            {
              body = this.parse(token.tokens);
              out += this.renderer.blockquote(body);
              continue;
            }

          case 'list':
            {
              ordered = token.ordered;
              start = token.start;
              loose = token.loose;
              l2 = token.items.length;
              body = '';

              for (j = 0; j < l2; j++) {
                item = token.items[j];
                checked = item.checked;
                task = item.task;
                itemBody = '';

                if (item.task) {
                  checkbox = this.renderer.checkbox(checked);

                  if (loose) {
                    if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                      item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

                      if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                        item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                      }
                    } else {
                      item.tokens.unshift({
                        type: 'text',
                        text: checkbox
                      });
                    }
                  } else {
                    itemBody += checkbox;
                  }
                }

                itemBody += this.parse(item.tokens, loose);
                body += this.renderer.listitem(itemBody, task, checked);
              }

              out += this.renderer.list(body, ordered, start);
              continue;
            }

          case 'html':
            {
              // TODO parse inline content if parameter markdown=1
              out += this.renderer.html(token.text);
              continue;
            }

          case 'paragraph':
            {
              out += this.renderer.paragraph(this.parseInline(token.tokens));
              continue;
            }

          case 'text':
            {
              body = token.tokens ? this.parseInline(token.tokens) : token.text;

              while (i + 1 < l && tokens[i + 1].type === 'text') {
                token = tokens[++i];
                body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
              }

              out += top ? this.renderer.paragraph(body) : body;
              continue;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    }
    /**
     * Parse Inline Tokens
     */
    ;

    _proto.parseInline = function parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      var out = '',
          i,
          token,
          ret;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i]; // Run any renderer extensions

        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({
            parser: this
          }, token);

          if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
            out += ret || '';
            continue;
          }
        }

        switch (token.type) {
          case 'escape':
            {
              out += renderer.text(token.text);
              break;
            }

          case 'html':
            {
              out += renderer.html(token.text);
              break;
            }

          case 'link':
            {
              out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
              break;
            }

          case 'image':
            {
              out += renderer.image(token.href, token.title, token.text);
              break;
            }

          case 'strong':
            {
              out += renderer.strong(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'em':
            {
              out += renderer.em(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'codespan':
            {
              out += renderer.codespan(token.text);
              break;
            }

          case 'br':
            {
              out += renderer.br();
              break;
            }

          case 'del':
            {
              out += renderer.del(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'text':
            {
              out += renderer.text(token.text);
              break;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    };

    return Parser;
  }();

  var Lexer = Lexer_1;
  var Parser = Parser_1;
  var Tokenizer = Tokenizer_1;
  var Renderer = Renderer_1;
  var TextRenderer = TextRenderer_1;
  var Slugger = Slugger_1;
  var merge = helpers.merge,
      checkSanitizeDeprecation = helpers.checkSanitizeDeprecation,
      escape = helpers.escape;
  var getDefaults = defaults$5.exports.getDefaults,
      changeDefaults = defaults$5.exports.changeDefaults,
      defaults = defaults$5.exports.defaults;
  /**
   * Marked
   */

  function marked(src, opt, callback) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked(): input parameter is undefined or null');
    }

    if (typeof src !== 'string') {
      throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    if (typeof opt === 'function') {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);

    if (callback) {
      var highlight = opt.highlight;
      var tokens;

      try {
        tokens = Lexer.lex(src, opt);
      } catch (e) {
        return callback(e);
      }

      var done = function done(err) {
        var out;

        if (!err) {
          try {
            if (opt.walkTokens) {
              marked.walkTokens(tokens, opt.walkTokens);
            }

            out = Parser.parse(tokens, opt);
          } catch (e) {
            err = e;
          }
        }

        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return done();
      }

      delete opt.highlight;
      if (!tokens.length) return done();
      var pending = 0;
      marked.walkTokens(tokens, function (token) {
        if (token.type === 'code') {
          pending++;
          setTimeout(function () {
            highlight(token.text, token.lang, function (err, code) {
              if (err) {
                return done(err);
              }

              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }

              pending--;

              if (pending === 0) {
                done();
              }
            });
          }, 0);
        }
      });

      if (pending === 0) {
        done();
      }

      return;
    }

    try {
      var _tokens = Lexer.lex(src, opt);

      if (opt.walkTokens) {
        marked.walkTokens(_tokens, opt.walkTokens);
      }

      return Parser.parse(_tokens, opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';

      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
      }

      throw e;
    }
  }
  /**
   * Options
   */


  marked.options = marked.setOptions = function (opt) {
    merge(marked.defaults, opt);
    changeDefaults(marked.defaults);
    return marked;
  };

  marked.getDefaults = getDefaults;
  marked.defaults = defaults;
  /**
   * Use Extension
   */

  marked.use = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var opts = merge.apply(void 0, [{}].concat(args));
    var extensions = marked.defaults.extensions || {
      renderers: {},
      childTokens: {}
    };
    var hasExtensions;
    args.forEach(function (pack) {
      // ==-- Parse "addon" extensions --== //
      if (pack.extensions) {
        hasExtensions = true;
        pack.extensions.forEach(function (ext) {
          if (!ext.name) {
            throw new Error('extension name required');
          }

          if (ext.renderer) {
            // Renderer extensions
            var prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;

            if (prevRenderer) {
              // Replace extension with func to run new extension but fall back if false
              extensions.renderers[ext.name] = function () {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }

                var ret = ext.renderer.apply(this, args);

                if (ret === false) {
                  ret = prevRenderer.apply(this, args);
                }

                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }

          if (ext.tokenizer) {
            // Tokenizer Extensions
            if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') {
              throw new Error("extension level must be 'block' or 'inline'");
            }

            if (extensions[ext.level]) {
              extensions[ext.level].unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }

            if (ext.start) {
              // Function to check for start of token
              if (ext.level === 'block') {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === 'inline') {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }

          if (ext.childTokens) {
            // Child tokens to be visited by walkTokens
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
      } // ==-- Parse "overwrite" extensions --== //


      if (pack.renderer) {
        (function () {
          var renderer = marked.defaults.renderer || new Renderer();

          var _loop = function _loop(prop) {
            var prevRenderer = renderer[prop]; // Replace renderer with func to run extension, but fall back if false

            renderer[prop] = function () {
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }

              var ret = pack.renderer[prop].apply(renderer, args);

              if (ret === false) {
                ret = prevRenderer.apply(renderer, args);
              }

              return ret;
            };
          };

          for (var prop in pack.renderer) {
            _loop(prop);
          }

          opts.renderer = renderer;
        })();
      }

      if (pack.tokenizer) {
        (function () {
          var tokenizer = marked.defaults.tokenizer || new Tokenizer();

          var _loop2 = function _loop2(prop) {
            var prevTokenizer = tokenizer[prop]; // Replace tokenizer with func to run extension, but fall back if false

            tokenizer[prop] = function () {
              for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
              }

              var ret = pack.tokenizer[prop].apply(tokenizer, args);

              if (ret === false) {
                ret = prevTokenizer.apply(tokenizer, args);
              }

              return ret;
            };
          };

          for (var prop in pack.tokenizer) {
            _loop2(prop);
          }

          opts.tokenizer = tokenizer;
        })();
      } // ==-- Parse WalkTokens extensions --== //


      if (pack.walkTokens) {
        var walkTokens = marked.defaults.walkTokens;

        opts.walkTokens = function (token) {
          pack.walkTokens.call(this, token);

          if (walkTokens) {
            walkTokens.call(this, token);
          }
        };
      }

      if (hasExtensions) {
        opts.extensions = extensions;
      }

      marked.setOptions(opts);
    });
  };
  /**
   * Run callback for every token
   */


  marked.walkTokens = function (tokens, callback) {
    var _loop3 = function _loop3() {
      var token = _step.value;
      callback.call(marked, token);

      switch (token.type) {
        case 'table':
          {
            for (var _iterator2 = _createForOfIteratorHelperLoose(token.header), _step2; !(_step2 = _iterator2()).done;) {
              var cell = _step2.value;
              marked.walkTokens(cell.tokens, callback);
            }

            for (var _iterator3 = _createForOfIteratorHelperLoose(token.rows), _step3; !(_step3 = _iterator3()).done;) {
              var row = _step3.value;

              for (var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;) {
                var _cell = _step4.value;
                marked.walkTokens(_cell.tokens, callback);
              }
            }

            break;
          }

        case 'list':
          {
            marked.walkTokens(token.items, callback);
            break;
          }

        default:
          {
            if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
              // Walk any extensions
              marked.defaults.extensions.childTokens[token.type].forEach(function (childTokens) {
                marked.walkTokens(token[childTokens], callback);
              });
            } else if (token.tokens) {
              marked.walkTokens(token.tokens, callback);
            }
          }
      }
    };

    for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
      _loop3();
    }
  };
  /**
   * Parse Inline
   */


  marked.parseInline = function (src, opt) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked.parseInline(): input parameter is undefined or null');
    }

    if (typeof src !== 'string') {
      throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);

    try {
      var tokens = Lexer.lexInline(src, opt);

      if (opt.walkTokens) {
        marked.walkTokens(tokens, opt.walkTokens);
      }

      return Parser.parseInline(tokens, opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';

      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
      }

      throw e;
    }
  };
  /**
   * Expose
   */


  marked.Parser = Parser;
  marked.parser = Parser.parse;
  marked.Renderer = Renderer;
  marked.TextRenderer = TextRenderer;
  marked.Lexer = Lexer;
  marked.lexer = Lexer.lex;
  marked.Tokenizer = Tokenizer;
  marked.Slugger = Slugger;
  marked.parse = marked;
  var marked_1 = marked;

  return marked_1;

}));


/***/ }),

/***/ "./node_modules/naive-ui/es/avatar/src/Avatar.js":
/*!*******************************************************!*\
  !*** ./node_modules/naive-ui/es/avatar/src/Avatar.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "avatarProps": () => (/* binding */ avatarProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vueuc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vueuc */ "./node_modules/vueuc/es/resize-observer/src/VResizeObserver.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/naive-ui/es/avatar/src/context.js");
/* harmony import */ var _tag_src_Tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tag/src/Tag */ "./node_modules/naive-ui/es/tag/src/Tag.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-theme.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-config.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-css-vars-class.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles */ "./node_modules/naive-ui/es/avatar/styles/light.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/cssr/create-key.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/css/color-to-class.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/resolve-slot.js");
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/index.cssr */ "./node_modules/naive-ui/es/avatar/src/styles/index.cssr.js");








const avatarProps = Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), { size: [String, Number], src: String, circle: {
        type: Boolean,
        default: undefined
    }, objectFit: String, round: {
        type: Boolean,
        default: undefined
    }, bordered: {
        type: Boolean,
        default: undefined
    }, onError: Function, fallbackSrc: String, 
    /** @deprecated */
    color: String });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Avatar',
    props: avatarProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = (0,_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])(props);
        const hasLoadErrorRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        let memoedTextHtml = null;
        const textRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const selfRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const fitTextTransform = () => {
            const { value: textEl } = textRef;
            if (textEl) {
                if (memoedTextHtml === null || memoedTextHtml !== textEl.innerHTML) {
                    memoedTextHtml = textEl.innerHTML;
                    const { value: selfEl } = selfRef;
                    if (selfEl) {
                        const { offsetWidth: elWidth, offsetHeight: elHeight } = selfEl;
                        const { offsetWidth: textWidth, offsetHeight: textHeight } = textEl;
                        const radix = 0.9;
                        const ratio = Math.min((elWidth / textWidth) * radix, (elHeight / textHeight) * radix, 1);
                        textEl.style.transform = `translateX(-50%) translateY(-50%) scale(${ratio})`;
                    }
                }
            }
        };
        const NAvatarGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_3__.avatarGroupInjectionKey, null);
        const mergedSizeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { size } = props;
            if (size)
                return size;
            const { size: avatarGroupSize } = NAvatarGroup || {};
            if (avatarGroupSize)
                return avatarGroupSize;
            return 'medium';
        });
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('Avatar', '-avatar', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_4__["default"], _styles__WEBPACK_IMPORTED_MODULE_5__["default"], props, mergedClsPrefixRef);
        const TagInjection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_tag_src_Tag__WEBPACK_IMPORTED_MODULE_6__.tagInjectionKey, null);
        const mergedRoundRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            if (NAvatarGroup)
                return true;
            const { round, circle } = props;
            if (round !== undefined || circle !== undefined)
                return round || circle;
            if (TagInjection) {
                return TagInjection.roundRef.value;
            }
            return false;
        });
        const mergedBorderedRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            if (NAvatarGroup)
                return true;
            return props.bordered || false;
        });
        const handleError = (e) => {
            hasLoadErrorRef.value = true;
            const { onError } = props;
            if (onError) {
                onError(e);
            }
        };
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.src, () => (hasLoadErrorRef.value = false));
        const cssVarsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const size = mergedSizeRef.value;
            const round = mergedRoundRef.value;
            const bordered = mergedBorderedRef.value;
            const { color: propColor } = props;
            const { self: { borderRadius, fontSize, color, border, colorModal, colorPopover }, common: { cubicBezierEaseInOut } } = themeRef.value;
            let height;
            if (typeof size === 'number') {
                height = `${size}px`;
            }
            else {
                height = themeRef.value.self[(0,_utils__WEBPACK_IMPORTED_MODULE_7__.createKey)('height', size)];
            }
            return {
                '--n-font-size': fontSize,
                '--n-border': bordered ? border : 'none',
                '--n-border-radius': round ? '50%' : borderRadius,
                '--n-color': propColor || color,
                '--n-color-modal': propColor || colorModal,
                '--n-color-popover': propColor || colorPopover,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-merged-size': `var(--n-avatar-size-override, ${height})`
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0,_mixins__WEBPACK_IMPORTED_MODULE_8__.useThemeClass)('avatar', (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                const size = mergedSizeRef.value;
                const round = mergedRoundRef.value;
                const bordered = mergedBorderedRef.value;
                const { color } = props;
                let hash = '';
                if (size) {
                    if (typeof size === 'number') {
                        hash += `a${size}`;
                    }
                    else {
                        hash += size[0];
                    }
                }
                if (round) {
                    hash += 'b';
                }
                if (bordered) {
                    hash += 'c';
                }
                if (color) {
                    hash += (0,_utils__WEBPACK_IMPORTED_MODULE_9__.color2Class)(color);
                }
                return hash;
            }), cssVarsRef, props)
            : undefined;
        return {
            textRef,
            selfRef,
            mergedRoundRef,
            mergedClsPrefix: mergedClsPrefixRef,
            fitTextTransform,
            cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
            themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
            hasLoadError: hasLoadErrorRef,
            handleError
        };
    },
    render() {
        const { $slots, src, mergedClsPrefix, onRender } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        let img;
        if (this.hasLoadError) {
            img = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: this.fallbackSrc, style: { objectFit: this.objectFit } });
        }
        else {
            img = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.resolveWrappedSlot)($slots.default, (children) => {
                if (children) {
                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_11__["default"], { onResize: this.fitTextTransform }, {
                        default: () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { ref: "textRef", class: `${mergedClsPrefix}-avatar__text` }, children))
                    }));
                }
                else if (src) {
                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: src, onError: this.handleError, style: { objectFit: this.objectFit } }));
                }
            });
        }
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { ref: "selfRef", class: [`${mergedClsPrefix}-avatar`, this.themeClass], style: this.cssVars }, img));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/avatar/src/context.js":
/*!********************************************************!*\
  !*** ./node_modules/naive-ui/es/avatar/src/context.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "avatarGroupInjectionKey": () => (/* binding */ avatarGroupInjectionKey)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/create-injection-key.js");

const avatarGroupInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-avatar-group');


/***/ }),

/***/ "./node_modules/naive-ui/es/avatar/src/styles/index.cssr.js":
/*!******************************************************************!*\
  !*** ./node_modules/naive-ui/es/avatar/src/styles/index.cssr.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_utils/cssr */ "./node_modules/naive-ui/es/_utils/cssr/index.js");
 // vars:
// --n-font-size
// --n-border-radius
// --n-color
// --n-color-modal
// --n-color-popover
// --n-bezier
// --n-merged-size

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('avatar', `
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.insideModal)((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&', '--n-merged-color: var(--n-color-modal);')), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.insidePopover)((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&', '--n-merged-color: var(--n-color-popover);')), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('img', `
 width: 100%;
 height: 100%;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('text', `
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('icon', `
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('text', 'line-height: 1.25')]));

/***/ }),

/***/ "./node_modules/naive-ui/es/tag/src/Tag.js":
/*!*************************************************!*\
  !*** ./node_modules/naive-ui/es/tag/src/Tag.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tagInjectionKey": () => (/* binding */ tagInjectionKey),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-theme.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-config.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-css-vars-class.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../_internal */ "./node_modules/naive-ui/es/_internal/close/src/Close.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/naive/warn.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/create-injection-key.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/call.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/cssr/create-key.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/css/color-to-class.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/resolve-slot.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles */ "./node_modules/naive-ui/es/tag/styles/light.js");
/* harmony import */ var _common_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-props */ "./node_modules/naive-ui/es/tag/src/common-props.js");
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/index.cssr */ "./node_modules/naive-ui/es/tag/src/styles/index.cssr.js");
/* harmony import */ var _mixins_use_rtl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_mixins/use-rtl */ "./node_modules/naive-ui/es/_mixins/use-rtl.js");








const tagProps = Object.assign(Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), _common_props__WEBPACK_IMPORTED_MODULE_2__["default"]), { bordered: {
        type: Boolean,
        default: undefined
    }, checked: Boolean, checkable: Boolean, onClose: [Array, Function], onMouseenter: Function, onMouseleave: Function, 'onUpdate:checked': Function, onUpdateChecked: Function, 
    // private
    internalStopClickPropagation: Boolean, 
    // deprecated
    onCheckedChange: {
        type: Function,
        validator: () => {
            if (true) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__.warn)('tag', '`on-checked-change` is deprecated, please use `on-update:checked` instead');
            }
            return true;
        },
        default: undefined
    } });
const tagInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.createInjectionKey)('n-tag');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Tag',
    props: tagProps,
    setup(props) {
        const contentRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const { mergedBorderedRef, mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_5__["default"])(props);
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('Tag', '-tag', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_6__["default"], _styles__WEBPACK_IMPORTED_MODULE_7__["default"], props, mergedClsPrefixRef);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(tagInjectionKey, {
            roundRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'round')
        });
        function handleClick(e) {
            if (!props.disabled) {
                if (props.checkable) {
                    const { checked, onCheckedChange, onUpdateChecked, 'onUpdate:checked': _onUpdateChecked } = props;
                    if (onUpdateChecked)
                        onUpdateChecked(!checked);
                    if (_onUpdateChecked)
                        _onUpdateChecked(!checked);
                    // deprecated
                    if (onCheckedChange)
                        onCheckedChange(!checked);
                }
            }
        }
        function handleCloseClick(e) {
            if (props.internalStopClickPropagation) {
                e.stopPropagation();
            }
            if (!props.disabled) {
                const { onClose } = props;
                if (onClose)
                    (0,_utils__WEBPACK_IMPORTED_MODULE_8__.call)(onClose, e);
            }
        }
        const tagPublicMethods = {
            setTextContent(textContent) {
                const { value } = contentRef;
                if (value)
                    value.textContent = textContent;
            }
        };
        const rtlEnabledRef = (0,_mixins_use_rtl__WEBPACK_IMPORTED_MODULE_9__["default"])('Tag', mergedRtlRef, mergedClsPrefixRef);
        const cssVarsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { type, size, color: { color, textColor } = {} } = props;
            const { common: { cubicBezierEaseInOut }, self: { padding, closeMargin, closeMarginRtl, borderRadius, opacityDisabled, textColorCheckable, textColorHoverCheckable, textColorPressedCheckable, textColorChecked, colorCheckable, colorHoverCheckable, colorPressedCheckable, colorChecked, colorCheckedHover, colorCheckedPressed, [(0,_utils__WEBPACK_IMPORTED_MODULE_10__.createKey)('closeSize', size)]: closeSize, [(0,_utils__WEBPACK_IMPORTED_MODULE_10__.createKey)('fontSize', size)]: fontSize, [(0,_utils__WEBPACK_IMPORTED_MODULE_10__.createKey)('height', size)]: height, [(0,_utils__WEBPACK_IMPORTED_MODULE_10__.createKey)('color', type)]: typedColor, [(0,_utils__WEBPACK_IMPORTED_MODULE_10__.createKey)('textColor', type)]: typeTextColor, [(0,_utils__WEBPACK_IMPORTED_MODULE_10__.createKey)('border', type)]: border, [(0,_utils__WEBPACK_IMPORTED_MODULE_10__.createKey)('closeColor', type)]: closeColor, [(0,_utils__WEBPACK_IMPORTED_MODULE_10__.createKey)('closeColorHover', type)]: closeColorHover, [(0,_utils__WEBPACK_IMPORTED_MODULE_10__.createKey)('closeColorPressed', type)]: closeColorPressed } } = themeRef.value;
            return {
                '--n-avatar-size-override': `calc(${height} - 8px)`,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-border-radius': borderRadius,
                '--n-border': border,
                '--n-close-color': closeColor,
                '--n-close-color-hover': closeColorHover,
                '--n-close-color-pressed': closeColorPressed,
                '--n-close-color-disabled': closeColor,
                '--n-close-margin': closeMargin,
                '--n-close-margin-rtl': closeMarginRtl,
                '--n-close-size': closeSize,
                '--n-color': color || typedColor,
                '--n-color-checkable': colorCheckable,
                '--n-color-checked': colorChecked,
                '--n-color-checked-hover': colorCheckedHover,
                '--n-color-checked-pressed': colorCheckedPressed,
                '--n-color-hover-checkable': colorHoverCheckable,
                '--n-color-pressed-checkable': colorPressedCheckable,
                '--n-font-size': fontSize,
                '--n-height': height,
                '--n-opacity-disabled': opacityDisabled,
                '--n-padding': padding,
                '--n-text-color': textColor || typeTextColor,
                '--n-text-color-checkable': textColorCheckable,
                '--n-text-color-checked': textColorChecked,
                '--n-text-color-hover-checkable': textColorHoverCheckable,
                '--n-text-color-pressed-checkable': textColorPressedCheckable
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0,_mixins__WEBPACK_IMPORTED_MODULE_11__.useThemeClass)('tag', (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                let hash = '';
                const { type, size, color: { color, textColor } = {} } = props;
                hash += type[0];
                hash += size[0];
                if (color) {
                    hash += `a${(0,_utils__WEBPACK_IMPORTED_MODULE_12__.color2Class)(color)}`;
                }
                if (textColor) {
                    hash += `b${(0,_utils__WEBPACK_IMPORTED_MODULE_12__.color2Class)(textColor)}`;
                }
                return hash;
            }), cssVarsRef, props)
            : undefined;
        return Object.assign(Object.assign({}, tagPublicMethods), { rtlEnabled: rtlEnabledRef, mergedClsPrefix: mergedClsPrefixRef, contentRef, mergedBordered: mergedBorderedRef, handleClick,
            handleCloseClick, cssVars: inlineThemeDisabled ? undefined : cssVarsRef, themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass, onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender });
    },
    render() {
        var _a, _b;
        const { mergedClsPrefix, rtlEnabled, color: { borderColor } = {}, onRender, $slots } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: [
                `${mergedClsPrefix}-tag`,
                this.themeClass,
                {
                    [`${mergedClsPrefix}-tag--rtl`]: rtlEnabled,
                    [`${mergedClsPrefix}-tag--disabled`]: this.disabled,
                    [`${mergedClsPrefix}-tag--checkable`]: this.checkable,
                    [`${mergedClsPrefix}-tag--checked`]: this.checkable && this.checked,
                    [`${mergedClsPrefix}-tag--round`]: this.round
                }
            ], style: this.cssVars, onClick: this.handleClick, onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave },
            (0,_utils__WEBPACK_IMPORTED_MODULE_13__.resolveWrappedSlot)($slots.avatar, (children) => children && ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-tag__avatar` }, children))),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: `${mergedClsPrefix}-tag__content`, ref: "contentRef" }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)),
            !this.checkable && this.closable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_14__["default"], { clsPrefix: mergedClsPrefix, class: `${mergedClsPrefix}-tag__close`, disabled: this.disabled, onClick: this.handleCloseClick })) : null,
            !this.checkable && this.mergedBordered ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-tag__border`, style: { borderColor } })) : null));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/tag/src/common-props.js":
/*!**********************************************************!*\
  !*** ./node_modules/naive-ui/es/tag/src/common-props.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    color: Object,
    type: {
        type: String,
        default: 'default'
    },
    round: Boolean,
    size: {
        type: String,
        default: 'medium'
    },
    closable: Boolean,
    disabled: {
        type: Boolean,
        default: undefined
    }
});


/***/ }),

/***/ "./node_modules/naive-ui/es/tag/src/styles/index.cssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/naive-ui/es/tag/src/styles/index.cssr.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_utils/cssr */ "./node_modules/naive-ui/es/_utils/cssr/index.js");
 // vars:
// --n-bezier
// --n-border-radius
// --n-border
// --n-close-color
// --n-close-color-hover
// --n-close-color-pressed
// --n-close-margin
// --n-close-size
// --n-color
// --n-color-checkable
// --n-color-checked
// --n-color-checked-hover
// --n-color-checked-pressed
// --n-color-hover-checkable
// --n-color-pressed-checkable
// --n-font-size
// --n-height
// --n-opacity-disabled
// --n-padding
// --n-text-color
// --n-text-color-checkable
// --n-text-color-checked
// --n-text-color-hover-checkable
// --n-text-color-pressed-checkable

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tag', `
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border', `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('avatar', `
 display: flex;
 margin-right: 6px;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('close', `
 font-size: var(--n-close-size);
 margin: var(--n-close-margin);
 transition: color .3s var(--n-bezier);
 cursor: pointer;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('round', `
 padding: 0 calc(var(--n-height) / 2);
 border-radius: calc(var(--n-height) / 2);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('avatar', `
 margin-left: calc((var(--n-height) - 8px) / -2);
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('checkable', `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', 'background-color: var(--n-color-hover-checkable);', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('checked', 'color: var(--n-text-color-hover-checkable);')]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:active', 'background-color: var(--n-color-pressed-checkable);', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('checked', 'color: var(--n-text-color-pressed-checkable);')])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('checked', `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', 'background-color: var(--n-color-checked-hover);'), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:active', 'background-color: var(--n-color-checked-pressed);')])])])]));

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_fbd95714_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=style&index=0&id=fbd95714&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_fbd95714_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_fbd95714_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PeopleList_vue_vue_type_template_id_4250740a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeopleList.vue?vue&type=template&id=4250740a */ "./resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue?vue&type=template&id=4250740a");
/* harmony import */ var _PeopleList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PeopleList.vue?vue&type=script&lang=js */ "./resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PeopleList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PeopleList_vue_vue_type_template_id_4250740a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/AboutUs/PeopleBehindCard.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Components/AboutUs/PeopleBehindCard.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PeopleBehindCard_vue_vue_type_template_id_0be43ac8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeopleBehindCard.vue?vue&type=template&id=0be43ac8 */ "./resources/js/Components/AboutUs/PeopleBehindCard.vue?vue&type=template&id=0be43ac8");
/* harmony import */ var _PeopleBehindCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PeopleBehindCard.vue?vue&type=script&lang=js */ "./resources/js/Components/AboutUs/PeopleBehindCard.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PeopleBehindCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PeopleBehindCard_vue_vue_type_template_id_0be43ac8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/AboutUs/PeopleBehindCard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PreviousProjectCard_vue_vue_type_template_id_055b0c23__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreviousProjectCard.vue?vue&type=template&id=055b0c23 */ "./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue?vue&type=template&id=055b0c23");
/* harmony import */ var _PreviousProjectCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreviousProjectCard.vue?vue&type=script&lang=js */ "./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PreviousProjectCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PreviousProjectCard_vue_vue_type_template_id_055b0c23__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PreviousProjectList_vue_vue_type_template_id_560dcab1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreviousProjectList.vue?vue&type=template&id=560dcab1 */ "./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue?vue&type=template&id=560dcab1");
/* harmony import */ var _PreviousProjectList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreviousProjectList.vue?vue&type=script&lang=js */ "./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PreviousProjectList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PreviousProjectList_vue_vue_type_template_id_560dcab1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/AboutUs/VolunteerProcessCard.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Components/AboutUs/VolunteerProcessCard.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VolunteerProcessCard_vue_vue_type_template_id_587e43b8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VolunteerProcessCard.vue?vue&type=template&id=587e43b8 */ "./resources/js/Components/AboutUs/VolunteerProcessCard.vue?vue&type=template&id=587e43b8");
/* harmony import */ var _VolunteerProcessCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VolunteerProcessCard.vue?vue&type=script&lang=js */ "./resources/js/Components/AboutUs/VolunteerProcessCard.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_VolunteerProcessCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VolunteerProcessCard_vue_vue_type_template_id_587e43b8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/AboutUs/VolunteerProcessCard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/DeleteButton.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/DeleteButton.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteButton_vue_vue_type_template_id_093bbbf0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteButton.vue?vue&type=template&id=093bbbf0 */ "./resources/js/Components/DeleteButton.vue?vue&type=template&id=093bbbf0");
/* harmony import */ var _DeleteButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteButton.vue?vue&type=script&lang=js */ "./resources/js/Components/DeleteButton.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DeleteButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DeleteButton_vue_vue_type_template_id_093bbbf0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/DeleteButton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Layout/ARISEnFooter.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Components/Layout/ARISEnFooter.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ARISEnFooter_vue_vue_type_template_id_414e7eae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ARISEnFooter.vue?vue&type=template&id=414e7eae */ "./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=template&id=414e7eae");
/* harmony import */ var _ARISEnFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ARISEnFooter.vue?vue&type=script&lang=js */ "./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ARISEnFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ARISEnFooter_vue_vue_type_template_id_414e7eae__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Layout/ARISEnFooter.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/MarkdownViewer.vue":
/*!****************************************************!*\
  !*** ./resources/js/Components/MarkdownViewer.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MarkdownViewer_vue_vue_type_template_id_cb152328__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MarkdownViewer.vue?vue&type=template&id=cb152328 */ "./resources/js/Components/MarkdownViewer.vue?vue&type=template&id=cb152328");
/* harmony import */ var _MarkdownViewer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownViewer.vue?vue&type=script&lang=js */ "./resources/js/Components/MarkdownViewer.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MarkdownViewer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MarkdownViewer_vue_vue_type_template_id_cb152328__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/MarkdownViewer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/CandidateProfileLayout.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Layouts/CandidateProfileLayout.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CandidateProfileLayout_vue_vue_type_template_id_f667ca18__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandidateProfileLayout.vue?vue&type=template&id=f667ca18 */ "./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=template&id=f667ca18");
/* harmony import */ var _CandidateProfileLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CandidateProfileLayout.vue?vue&type=script&lang=js */ "./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CandidateProfileLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CandidateProfileLayout_vue_vue_type_template_id_f667ca18__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Layouts/CandidateProfileLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/Guest.vue":
/*!****************************************!*\
  !*** ./resources/js/Layouts/Guest.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Guest_vue_vue_type_template_id_5421e404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Guest.vue?vue&type=template&id=5421e404 */ "./resources/js/Layouts/Guest.vue?vue&type=template&id=5421e404");
/* harmony import */ var _Guest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Guest.vue?vue&type=script&lang=js */ "./resources/js/Layouts/Guest.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Guest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Guest_vue_vue_type_template_id_5421e404__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Layouts/Guest.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/Partials/Header.vue":
/*!**************************************************!*\
  !*** ./resources/js/Layouts/Partials/Header.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_fbd95714__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=fbd95714 */ "./resources/js/Layouts/Partials/Header.vue?vue&type=template&id=fbd95714");
/* harmony import */ var _Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js */ "./resources/js/Layouts/Partials/Header.vue?vue&type=script&lang=js");
/* harmony import */ var _Header_vue_vue_type_style_index_0_id_fbd95714_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=0&id=fbd95714&lang=css */ "./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Header_vue_vue_type_template_id_fbd95714__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Layouts/Partials/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/AboutUs.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/AboutUs.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AboutUs_vue_vue_type_template_id_29b059f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=template&id=29b059f2 */ "./resources/js/Pages/AboutUs.vue?vue&type=template&id=29b059f2");
/* harmony import */ var _AboutUs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=script&lang=js */ "./resources/js/Pages/AboutUs.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AboutUs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AboutUs_vue_vue_type_template_id_29b059f2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/AboutUs.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PeopleList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PeopleList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PeopleList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/AboutUs/PeopleBehindCard.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/AboutUs/PeopleBehindCard.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PeopleBehindCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PeopleBehindCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PeopleBehindCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PeopleBehindCard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviousProjectCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviousProjectCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PreviousProjectCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviousProjectList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviousProjectList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PreviousProjectList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/AboutUs/VolunteerProcessCard.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Components/AboutUs/VolunteerProcessCard.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VolunteerProcessCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VolunteerProcessCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VolunteerProcessCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/VolunteerProcessCard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/DeleteButton.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Components/DeleteButton.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/DeleteButton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ARISEnFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ARISEnFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ARISEnFooter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/MarkdownViewer.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/MarkdownViewer.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MarkdownViewer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MarkdownViewer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MarkdownViewer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/MarkdownViewer.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateProfileLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateProfileLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CandidateProfileLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/Guest.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Layouts/Guest.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Guest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Guest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Guest.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Guest.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/Partials/Header.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Layouts/Partials/Header.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/AboutUs.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/AboutUs.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AboutUs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AboutUs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AboutUs.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AboutUs.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue?vue&type=template&id=4250740a":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue?vue&type=template&id=4250740a ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PeopleList_vue_vue_type_template_id_4250740a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PeopleList_vue_vue_type_template_id_4250740a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PeopleList.vue?vue&type=template&id=4250740a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/BlueVotePeople/PeopleList.vue?vue&type=template&id=4250740a");


/***/ }),

/***/ "./resources/js/Components/AboutUs/PeopleBehindCard.vue?vue&type=template&id=0be43ac8":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/AboutUs/PeopleBehindCard.vue?vue&type=template&id=0be43ac8 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PeopleBehindCard_vue_vue_type_template_id_0be43ac8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PeopleBehindCard_vue_vue_type_template_id_0be43ac8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PeopleBehindCard.vue?vue&type=template&id=0be43ac8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PeopleBehindCard.vue?vue&type=template&id=0be43ac8");


/***/ }),

/***/ "./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue?vue&type=template&id=055b0c23":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue?vue&type=template&id=055b0c23 ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviousProjectCard_vue_vue_type_template_id_055b0c23__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviousProjectCard_vue_vue_type_template_id_055b0c23__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PreviousProjectCard.vue?vue&type=template&id=055b0c23 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectCard.vue?vue&type=template&id=055b0c23");


/***/ }),

/***/ "./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue?vue&type=template&id=560dcab1":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue?vue&type=template&id=560dcab1 ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviousProjectList_vue_vue_type_template_id_560dcab1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviousProjectList_vue_vue_type_template_id_560dcab1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PreviousProjectList.vue?vue&type=template&id=560dcab1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/PreviousProjects/PreviousProjectList.vue?vue&type=template&id=560dcab1");


/***/ }),

/***/ "./resources/js/Components/AboutUs/VolunteerProcessCard.vue?vue&type=template&id=587e43b8":
/*!************************************************************************************************!*\
  !*** ./resources/js/Components/AboutUs/VolunteerProcessCard.vue?vue&type=template&id=587e43b8 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VolunteerProcessCard_vue_vue_type_template_id_587e43b8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VolunteerProcessCard_vue_vue_type_template_id_587e43b8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VolunteerProcessCard.vue?vue&type=template&id=587e43b8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/AboutUs/VolunteerProcessCard.vue?vue&type=template&id=587e43b8");


/***/ }),

/***/ "./resources/js/Components/DeleteButton.vue?vue&type=template&id=093bbbf0":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/DeleteButton.vue?vue&type=template&id=093bbbf0 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteButton_vue_vue_type_template_id_093bbbf0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteButton_vue_vue_type_template_id_093bbbf0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteButton.vue?vue&type=template&id=093bbbf0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/DeleteButton.vue?vue&type=template&id=093bbbf0");


/***/ }),

/***/ "./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=template&id=414e7eae":
/*!***************************************************************************************!*\
  !*** ./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=template&id=414e7eae ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ARISEnFooter_vue_vue_type_template_id_414e7eae__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ARISEnFooter_vue_vue_type_template_id_414e7eae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ARISEnFooter.vue?vue&type=template&id=414e7eae */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=template&id=414e7eae");


/***/ }),

/***/ "./resources/js/Components/MarkdownViewer.vue?vue&type=template&id=cb152328":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/MarkdownViewer.vue?vue&type=template&id=cb152328 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MarkdownViewer_vue_vue_type_template_id_cb152328__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MarkdownViewer_vue_vue_type_template_id_cb152328__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MarkdownViewer.vue?vue&type=template&id=cb152328 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/MarkdownViewer.vue?vue&type=template&id=cb152328");


/***/ }),

/***/ "./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=template&id=f667ca18":
/*!***************************************************************************************!*\
  !*** ./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=template&id=f667ca18 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateProfileLayout_vue_vue_type_template_id_f667ca18__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateProfileLayout_vue_vue_type_template_id_f667ca18__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CandidateProfileLayout.vue?vue&type=template&id=f667ca18 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=template&id=f667ca18");


/***/ }),

/***/ "./resources/js/Layouts/Guest.vue?vue&type=template&id=5421e404":
/*!**********************************************************************!*\
  !*** ./resources/js/Layouts/Guest.vue?vue&type=template&id=5421e404 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Guest_vue_vue_type_template_id_5421e404__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Guest_vue_vue_type_template_id_5421e404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Guest.vue?vue&type=template&id=5421e404 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Guest.vue?vue&type=template&id=5421e404");


/***/ }),

/***/ "./resources/js/Layouts/Partials/Header.vue?vue&type=template&id=fbd95714":
/*!********************************************************************************!*\
  !*** ./resources/js/Layouts/Partials/Header.vue?vue&type=template&id=fbd95714 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_fbd95714__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_fbd95714__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=fbd95714 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=template&id=fbd95714");


/***/ }),

/***/ "./resources/js/Pages/AboutUs.vue?vue&type=template&id=29b059f2":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/AboutUs.vue?vue&type=template&id=29b059f2 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AboutUs_vue_vue_type_template_id_29b059f2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AboutUs_vue_vue_type_template_id_29b059f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AboutUs.vue?vue&type=template&id=29b059f2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/AboutUs.vue?vue&type=template&id=29b059f2");


/***/ }),

/***/ "./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_fbd95714_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=style&index=0&id=fbd95714&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css");


/***/ })

}]);