"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Frontend_CandidateProfiles_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/CandidateCarousel.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/CandidateCarousel.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _CandidateNameCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandidateNameCard.vue */ "./resources/js/Components/CandidateProfile/CandidateNameCard.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  props: {
    candidates: {
      type: Array
    },
    nationalPositions: Array
  },
  components: {
    NameCard: _CandidateNameCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/CandidateNameCard.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/CandidateNameCard.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  props: {
    candidate: {
      type: Object,
      "default": function _default() {
        return {
          name: "Default Name",
          img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde? ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
          partylist: "Default Partylist",
          refProfile: "1"
        };
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/NCollapse.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/NCollapse.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! naive-ui */ "./node_modules/naive-ui/es/collapse/src/Collapse.js");
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! naive-ui */ "./node_modules/naive-ui/es/collapse/src/CollapseItem.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CandidateNameCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CandidateNameCard.vue */ "./resources/js/Components/CandidateProfile/CandidateNameCard.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    locations: Array
  },
  components: {
    NCollapse: naive_ui__WEBPACK_IMPORTED_MODULE_2__["default"],
    NCollapseItem: naive_ui__WEBPACK_IMPORTED_MODULE_3__["default"],
    CandidateNameCard: _CandidateNameCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    groupCandidatesByPosition: function groupCandidatesByPosition(candidates) {
      console.log("Candidates: ", candidates);

      var grouped = lodash__WEBPACK_IMPORTED_MODULE_0___default().groupBy(candidates, function (candidate) {
        return candidate.running_position.name;
      });

      return grouped;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _Components_CandidateProfile_CandidateCarousel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/CandidateProfile/CandidateCarousel.vue */ "./resources/js/Components/CandidateProfile/CandidateCarousel.vue");
/* harmony import */ var _Components_CandidateProfile_NCollapse_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/CandidateProfile/NCollapse.vue */ "./resources/js/Components/CandidateProfile/NCollapse.vue");
/* harmony import */ var _Layouts_CandidateProfileLayout_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Layouts/CandidateProfileLayout.vue */ "./resources/js/Layouts/CandidateProfileLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! naive-ui */ "./node_modules/naive-ui/es/tree-select/src/TreeSelect.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__.defineComponent)({
  setup: function setup(props) {
    var locationToOption = function locationToOption(location) {
      var _location$children;

      return {
        key: location.id,
        label: location.name,
        children: (_location$children = location.children) === null || _location$children === void 0 ? void 0 : _location$children.map(locationToOption)
      };
    };

    var locationOptions = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(props.locations.map(locationToOption));
    return {
      locationOptions: locationOptions
    };
  },
  props: {
    locations: Array,
    nationalPositions: Array
  },
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.Link,
    Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.Head,
    CandidateCarousel: _Components_CandidateProfile_CandidateCarousel_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Layout: _Layouts_CandidateProfileLayout_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    NTreeSelect: naive_ui__WEBPACK_IMPORTED_MODULE_6__["default"],
    CandidateCollapse: _Components_CandidateProfile_NCollapse_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/CandidateCarousel.vue?vue&type=template&id=7dfce745&lang=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/CandidateCarousel.vue?vue&type=template&id=7dfce745&lang=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row row-cols-1 row-cols-sm-2 row-cols-md-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_NameCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NameCard");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.candidates, function (candidate) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: candidate.id,
      "class": "col"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NameCard, {
      "class": "m-3",
      candidate: candidate
    }, null, 8
    /* PROPS */
    , ["candidate"])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/CandidateNameCard.vue?vue&type=template&id=5616cca0":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/CandidateNameCard.vue?vue&type=template&id=5616cca0 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "m-3 text-primary border shadow rounded bg-white"
};
var _hoisted_2 = {
  "class": "row g-0"
};
var _hoisted_3 = {
  "class": "col col-md-4"
};
var _hoisted_4 = ["src", "alt"];
var _hoisted_5 = {
  "class": "col col-md-8"
};
var _hoisted_6 = {
  "class": "card-body d-flex flex-column h-100"
};
var _hoisted_7 = {
  "class": "card-title text-uppercase fw-bold lh-sm"
};
var _hoisted_8 = {
  "class": "card-text text-muted flex-grow-1"
};
var _hoisted_9 = {
  "class": "d-flex justify-content-end"
};
var _hoisted_10 = {
  type: "button",
  "class": "btn btn-primary align-self-end",
  style: {
    "border-radius": "20px"
  }
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" KNOW MORE ");

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-action"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$candidate$pro;

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: (_$props$candidate$pro = $props.candidate.profile_photo_url) !== null && _$props$candidate$pro !== void 0 && _$props$candidate$pro.thumbnailUrl ? $props.candidate.profile_photo_url.thumbnailUrl : 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png',
    "class": "candidate-name-image",
    alt: $props.candidate.name
  }, null, 8
  /* PROPS */
  , _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.candidate.name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.candidate.political_party.name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('candidate-profiles.show', $props.candidate.slug),
    target: "_blank",
    "class": "text-white text-decoration-none"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])])]), _hoisted_12])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/NCollapse.vue?vue&type=template&id=722be77d":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/NCollapse.vue?vue&type=template&id=722be77d ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = ["title", "name"];

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Candidates", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "row row-cols-3"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Districts", -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-primary fw-bold"
}, " CONGRESSMAN CANDIDATES ")], -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-primary fw-bold"
}, " MAYORAL CANDIDATES "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-danger fw-bold"
}, " VICE-MAYORAL CANDIDATES "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-warning fw-bold"
}, " COUNCILOR CANDIDATES ")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CandidateNameCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CandidateNameCard");

  var _component_n_collapse_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("n-collapse-item");

  var _component_n_collapse = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("n-collapse", true);

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Render the regions "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.locations, function (region) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: region.id,
      title: region.name,
      name: region.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_n_collapse, null, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Render the provinces "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(region.children, function (province) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_n_collapse_item, {
            key: province.id,
            title: province.name,
            name: province.id
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_n_collapse, {
                title: "Candidates"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.groupCandidatesByPosition(province.candidates), function (positionCandidates, position) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_n_collapse_item, {
                      key: position,
                      title: position,
                      name: position
                    }, {
                      header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["display-6", {
                            'text-primary': position === 'Governor',
                            'text-danger': position === 'Vice Governor'
                          }])
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(position), 3
                        /* TEXT, CLASS */
                        )];
                      }),
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(positionCandidates, function (candidate) {
                          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                            key: candidate.id,
                            "class": "col"
                          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ candidate.name }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CandidateNameCard, {
                            candidate: candidate
                          }, null, 8
                          /* PROPS */
                          , ["candidate"])]);
                        }), 128
                        /* KEYED_FRAGMENT */
                        ))])];
                      }),
                      _: 2
                      /* DYNAMIC */

                    }, 1032
                    /* PROPS, DYNAMIC_SLOTS */
                    , ["title", "name"]);
                  }), 128
                  /* KEYED_FRAGMENT */
                  ))];
                }),
                _: 2
                /* DYNAMIC */

              }, 1024
              /* DYNAMIC_SLOTS */
              ), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_n_collapse, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(province.children, function (district) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_n_collapse_item, {
                      key: district.id,
                      title: district.name,
                      name: district.id
                    }, {
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_n_collapse, null, {
                          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                            return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(district.children, function (city) {
                              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_n_collapse_item, {
                                key: city.id,
                                title: city.name,
                                name: city.id
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [_hoisted_7];
                                }),
                                _: 2
                                /* DYNAMIC */

                              }, 1032
                              /* PROPS, DYNAMIC_SLOTS */
                              , ["title", "name"]);
                            }), 128
                            /* KEYED_FRAGMENT */
                            ))];
                          }),
                          _: 2
                          /* DYNAMIC */

                        }, 1024
                        /* DYNAMIC_SLOTS */
                        )];
                      }),
                      _: 2
                      /* DYNAMIC */

                    }, 1032
                    /* PROPS, DYNAMIC_SLOTS */
                    , ["title", "name"]);
                  }), 128
                  /* KEYED_FRAGMENT */
                  ))];
                }),
                _: 2
                /* DYNAMIC */

              }, 1024
              /* DYNAMIC_SLOTS */
              )];
            }),
            _: 2
            /* DYNAMIC */

          }, 1032
          /* PROPS, DYNAMIC_SLOTS */
          , ["title", "name"]);
        }), 128
        /* KEYED_FRAGMENT */
        ))];
      }),
      _: 2
      /* DYNAMIC */

    }, 1024
    /* DYNAMIC_SLOTS */
    )], 8
    /* PROPS */
    , _hoisted_2);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=template&id=414e7eae":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=template&id=414e7eae ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=template&id=f667ca18":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=template&id=f667ca18 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=template&id=fbd95714":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=template&id=fbd95714 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=template&id=06837fbc&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=template&id=06837fbc&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-06837fbc"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "2022 Candidates", -1
  /* HOISTED */
  );
});

var _hoisted_2 = {
  "class": "container",
  style: {
    "margin-top": "5%"
  }
};

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "badge text-wrap text-white fw-bolder p-2 px-4 fs-5 mb-3",
    style: {
      'background-color': '#b5231b',
      'border-radius': '30px'
    }
  }, " National ", -1
  /* HOISTED */
  );
});

var _hoisted_4 = {
  "class": "d-flex flex-column gap-12"
};

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "text-primary fw-bold"
  }, "PRESIDENTIAL CANDIDATES", -1
  /* HOISTED */
  );
});

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "text-danger fw-bold"
  }, "VICE PRESIDENTIAL CANDIDATES", -1
  /* HOISTED */
  );
});

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "text-warning fw-bold"
  }, "SENATORIAL CANDIDATES", -1
  /* HOISTED */
  );
});

var _hoisted_8 = {
  "class": "row"
};

var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "fw-bold"
  }, "Regions", -1
  /* HOISTED */
  );
});

var _hoisted_10 = {
  "class": "row row-cols-1 row-cols-sm-2 row-cols-md-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_CandidateCarousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CandidateCarousel");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_Layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Layout");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Layout, {
    "class": "candidate-profile-background"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _ctx$nationalPosition, _ctx$nationalPosition2, _ctx$nationalPosition3;

      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h1 class=\"fw-bolder\">National</h1> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CandidateCarousel, {
        candidates: (_ctx$nationalPosition = _ctx.nationalPositions[0]) === null || _ctx$nationalPosition === void 0 ? void 0 : _ctx$nationalPosition.candidates
      }, null, 8
      /* PROPS */
      , ["candidates"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CandidateCarousel, {
        candidates: (_ctx$nationalPosition2 = _ctx.nationalPositions[1]) === null || _ctx$nationalPosition2 === void 0 ? void 0 : _ctx$nationalPosition2.candidates
      }, null, 8
      /* PROPS */
      , ["candidates"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CandidateCarousel, {
        candidates: (_ctx$nationalPosition3 = _ctx.nationalPositions[2]) === null || _ctx$nationalPosition3 === void 0 ? void 0 : _ctx$nationalPosition3.candidates
      }, null, 8
      /* PROPS */
      , ["candidates"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.locations, function (region) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: region.id,
          "class": "col mt-3"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
          href: _ctx.route('locations.region.show', region.id),
          "class": "btn btn-danger btn-lg p-4 px-5 w-100 h-100",
          style: {
            "padding": "20px",
            "border-radius": "10px"
          }
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(region.name), 1
            /* TEXT */
            )];
          }),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["href"])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <CandidateCollapse :locations=\"locations\"></CandidateCollapse> ")])];
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=style&index=0&id=06837fbc&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=style&index=0&id=06837fbc&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* .candidate-profile-background {\n  background-image: url(\"/images/candidate-backgrounds.svg\");\n  background-size: 100%;\n  background-position: bottom;\n} */\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Components/assets/logo.png":
/*!*************************************************!*\
  !*** ./resources/js/Components/assets/logo.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logo.png?0706ef5784e46b428b8a2893e5525084");

/***/ }),

/***/ "./node_modules/naive-ui/es/_internal/focus-detector/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/naive-ui/es/_internal/focus-detector/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_FocusDetector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/FocusDetector */ "./node_modules/naive-ui/es/_internal/focus-detector/src/FocusDetector.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_FocusDetector__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/naive-ui/es/_internal/focus-detector/src/FocusDetector.js":
/*!********************************************************************************!*\
  !*** ./node_modules/naive-ui/es/_internal/focus-detector/src/FocusDetector.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    props: {
        onFocus: Function,
        onBlur: Function
    },
    setup(props) {
        return () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: "width: 0; height: 0", tabindex: 0, onFocus: props.onFocus, onBlur: props.onBlur }));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/_internal/icons/Switcher.js":
/*!**************************************************************!*\
  !*** ./node_modules/naive-ui/es/_internal/icons/Switcher.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Switcher',
    render() {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 8l10 8l-10 8z" })));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/_internal/selection/src/Selection.js":
/*!***********************************************************************!*\
  !*** ./node_modules/naive-ui/es/_internal/selection/src/Selection.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vueuc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vueuc */ "./node_modules/vueuc/es/overflow/src/index.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../popover */ "./node_modules/naive-ui/es/popover/src/Popover.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../tag */ "./node_modules/naive-ui/es/tag/src/Tag.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-theme.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-css-vars-class.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_utils */ "./node_modules/naive-ui/es/_utils/vue/render.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_utils */ "./node_modules/naive-ui/es/_utils/cssr/create-key.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../_utils */ "./node_modules/naive-ui/es/_utils/naive/attribute.js");
/* harmony import */ var _suffix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../suffix */ "./node_modules/naive-ui/es/_internal/suffix/src/Suffix.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles */ "./node_modules/naive-ui/es/_internal/selection/styles/light.js");
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.cssr */ "./node_modules/naive-ui/es/_internal/selection/src/styles/index.cssr.js");
/* eslint-disable @typescript-eslint/no-non-null-assertion */









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'InternalSelection',
    props: Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), { clsPrefix: {
            type: String,
            required: true
        }, bordered: {
            type: Boolean,
            default: undefined
        }, active: Boolean, pattern: {
            type: String,
            default: ''
        }, placeholder: String, selectedOption: {
            type: Object,
            default: null
        }, selectedOptions: {
            type: Array,
            default: null
        }, multiple: Boolean, filterable: Boolean, clearable: Boolean, disabled: Boolean, size: {
            type: String,
            default: 'medium'
        }, loading: Boolean, autofocus: Boolean, showArrow: {
            type: Boolean,
            default: true
        }, inputProps: Object, focused: Boolean, renderTag: Function, onKeyup: Function, onKeydown: Function, onClick: Function, onBlur: Function, onFocus: Function, onDeleteOption: Function, maxTagCount: [String, Number], onClear: Function, onPatternInput: Function, onPatternFocus: Function, onPatternBlur: Function, renderLabel: Function, status: String, inlineThemeDisabled: Boolean }),
    setup(props) {
        const patternInputMirrorRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const patternInputRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const selfRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const multipleElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const singleElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const patternInputWrapperRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const counterRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const counterWrapperRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const overflowRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const inputTagElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const showTagsPopoverRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const patternInputFocusedRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const hoverRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('InternalSelection', '-internal-selection', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_2__["default"], _styles__WEBPACK_IMPORTED_MODULE_3__["default"], props, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'clsPrefix'));
        const mergedClearableRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return (props.clearable && !props.disabled && (hoverRef.value || props.active));
        });
        const filterablePlaceholderRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return props.selectedOption
                ? props.renderTag
                    ? props.renderTag({
                        option: props.selectedOption,
                        handleClose: () => { }
                    })
                    : props.renderLabel
                        ? props.renderLabel(props.selectedOption, true)
                        : (0,_utils__WEBPACK_IMPORTED_MODULE_4__.render)(props.selectedOption.label, props.selectedOption, true)
                : props.placeholder;
        });
        const labelRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const option = props.selectedOption;
            if (!option)
                return undefined;
            return option.label;
        });
        const selectedRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            if (props.multiple) {
                return !!(Array.isArray(props.selectedOptions) && props.selectedOptions.length);
            }
            else {
                return props.selectedOption !== null;
            }
        });
        function syncMirrorWidth() {
            var _a;
            const { value: patternInputMirrorEl } = patternInputMirrorRef;
            if (patternInputMirrorEl) {
                const { value: patternInputEl } = patternInputRef;
                if (patternInputEl) {
                    patternInputEl.style.width = `${patternInputMirrorEl.offsetWidth}px`;
                    if (props.maxTagCount !== 'responsive') {
                        (_a = overflowRef.value) === null || _a === void 0 ? void 0 : _a.sync();
                    }
                }
            }
        }
        function hideInputTag() {
            const { value: inputTagEl } = inputTagElRef;
            if (inputTagEl)
                inputTagEl.style.display = 'none';
        }
        function showInputTag() {
            const { value: inputTagEl } = inputTagElRef;
            if (inputTagEl)
                inputTagEl.style.display = 'inline-block';
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'active'), (value) => {
            if (!value)
                hideInputTag();
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'pattern'), () => {
            if (props.multiple) {
                void (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(syncMirrorWidth);
            }
        });
        function doFocus(e) {
            const { onFocus } = props;
            if (onFocus)
                onFocus(e);
        }
        function doBlur(e) {
            const { onBlur } = props;
            if (onBlur)
                onBlur(e);
        }
        function doDeleteOption(value) {
            const { onDeleteOption } = props;
            if (onDeleteOption)
                onDeleteOption(value);
        }
        function doClear(e) {
            const { onClear } = props;
            if (onClear)
                onClear(e);
        }
        function doPatternInput(value) {
            const { onPatternInput } = props;
            if (onPatternInput)
                onPatternInput(value);
        }
        function handleFocusin(e) {
            var _a;
            if (!e.relatedTarget ||
                !((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))) {
                doFocus(e);
            }
        }
        function handleFocusout(e) {
            var _a;
            if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))
                return;
            doBlur(e);
        }
        function handleClear(e) {
            doClear(e);
        }
        function handleMouseEnter() {
            hoverRef.value = true;
        }
        function handleMouseLeave() {
            hoverRef.value = false;
        }
        function handleMouseDown(e) {
            if (!props.active || !props.filterable)
                return;
            if (e.target === patternInputRef.value)
                return;
            e.preventDefault();
        }
        function handleDeleteOption(option) {
            doDeleteOption(option);
        }
        function handlePatternKeyDown(e) {
            if (e.code === 'Backspace' && !isCompositingRef.value) {
                if (!props.pattern.length) {
                    const { selectedOptions } = props;
                    if (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length) {
                        handleDeleteOption(selectedOptions[selectedOptions.length - 1]);
                    }
                }
            }
        }
        const isCompositingRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        // the composition end is later than its input so we can cached the event
        // and return the input event
        let cachedInputEvent = null;
        function handlePatternInputInput(e) {
            // we should sync mirror width here
            const { value: patternInputMirrorEl } = patternInputMirrorRef;
            if (patternInputMirrorEl) {
                const inputText = e.target.value;
                patternInputMirrorEl.textContent = inputText;
                syncMirrorWidth();
            }
            if (!isCompositingRef.value) {
                doPatternInput(e);
            }
            else {
                cachedInputEvent = e;
            }
        }
        function handleCompositionStart() {
            isCompositingRef.value = true;
        }
        function handleCompositionEnd() {
            isCompositingRef.value = false;
            doPatternInput(cachedInputEvent);
            cachedInputEvent = null;
        }
        function handlePatternInputFocus(e) {
            var _a;
            patternInputFocusedRef.value = true;
            (_a = props.onPatternFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }
        function handlePatternInputBlur(e) {
            var _a;
            patternInputFocusedRef.value = false;
            (_a = props.onPatternBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }
        function blur() {
            var _a, _b;
            if (props.filterable) {
                patternInputFocusedRef.value = false;
                (_a = patternInputWrapperRef.value) === null || _a === void 0 ? void 0 : _a.blur();
                (_b = patternInputRef.value) === null || _b === void 0 ? void 0 : _b.blur();
            }
            else if (props.multiple) {
                const { value: multipleEl } = multipleElRef;
                multipleEl === null || multipleEl === void 0 ? void 0 : multipleEl.blur();
            }
            else {
                const { value: singleEl } = singleElRef;
                singleEl === null || singleEl === void 0 ? void 0 : singleEl.blur();
            }
        }
        function focus() {
            var _a, _b, _c;
            if (props.filterable) {
                patternInputFocusedRef.value = false;
                (_a = patternInputWrapperRef.value) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else if (props.multiple) {
                (_b = multipleElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
            }
            else {
                (_c = singleElRef.value) === null || _c === void 0 ? void 0 : _c.focus();
            }
        }
        function focusInput() {
            const { value: patternInputEl } = patternInputRef;
            if (patternInputEl) {
                showInputTag();
                patternInputEl.focus();
            }
        }
        function blurInput() {
            const { value: patternInputEl } = patternInputRef;
            if (patternInputEl) {
                patternInputEl.blur();
            }
        }
        function updateCounter(count) {
            const { value } = counterRef;
            if (value) {
                value.setTextContent(`+${count}`);
            }
        }
        function getCounter() {
            const { value } = counterWrapperRef;
            return value;
        }
        function getTail() {
            return patternInputRef.value;
        }
        let enterTimerId = null;
        function clearEnterTimer() {
            if (enterTimerId !== null)
                window.clearTimeout(enterTimerId);
        }
        function handleMouseEnterCounter() {
            if (props.disabled || props.active)
                return;
            clearEnterTimer();
            enterTimerId = window.setTimeout(() => {
                showTagsPopoverRef.value = true;
            }, 100);
        }
        function handleMouseLeaveCounter() {
            clearEnterTimer();
        }
        function onPopoverUpdateShow(show) {
            if (!show) {
                clearEnterTimer();
                showTagsPopoverRef.value = false;
            }
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
                const patternInputWrapperEl = patternInputWrapperRef.value;
                if (!patternInputWrapperEl)
                    return;
                patternInputWrapperEl.tabIndex =
                    props.disabled || patternInputFocusedRef.value ? -1 : 0;
            });
        });
        const { inlineThemeDisabled } = props;
        const cssVarsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { size } = props;
            const { common: { cubicBezierEaseInOut }, self: { borderRadius, color, placeholderColor, textColor, paddingSingle, paddingMultiple, caretColor, colorDisabled, textColorDisabled, placeholderColorDisabled, colorActive, boxShadowFocus, boxShadowActive, boxShadowHover, border, borderFocus, borderHover, borderActive, arrowColor, arrowColorDisabled, loadingColor, 
            // form warning
            colorActiveWarning, boxShadowFocusWarning, boxShadowActiveWarning, boxShadowHoverWarning, borderWarning, borderFocusWarning, borderHoverWarning, borderActiveWarning, 
            // form error
            colorActiveError, boxShadowFocusError, boxShadowActiveError, boxShadowHoverError, borderError, borderFocusError, borderHoverError, borderActiveError, 
            // clear
            clearColor, clearColorHover, clearColorPressed, clearSize, 
            // arrow
            arrowSize, [(0,_utils__WEBPACK_IMPORTED_MODULE_5__.createKey)('height', size)]: height, [(0,_utils__WEBPACK_IMPORTED_MODULE_5__.createKey)('fontSize', size)]: fontSize } } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-border': border,
                '--n-border-active': borderActive,
                '--n-border-focus': borderFocus,
                '--n-border-hover': borderHover,
                '--n-border-radius': borderRadius,
                '--n-box-shadow-active': boxShadowActive,
                '--n-box-shadow-focus': boxShadowFocus,
                '--n-box-shadow-hover': boxShadowHover,
                '--n-caret-color': caretColor,
                '--n-color': color,
                '--n-color-active': colorActive,
                '--n-color-disabled': colorDisabled,
                '--n-font-size': fontSize,
                '--n-height': height,
                '--n-padding-single': paddingSingle,
                '--n-padding-multiple': paddingMultiple,
                '--n-placeholder-color': placeholderColor,
                '--n-placeholder-color-disabled': placeholderColorDisabled,
                '--n-text-color': textColor,
                '--n-text-color-disabled': textColorDisabled,
                '--n-arrow-color': arrowColor,
                '--n-arrow-color-disabled': arrowColorDisabled,
                '--n-loading-color': loadingColor,
                // form warning
                '--n-color-active-warning': colorActiveWarning,
                '--n-box-shadow-focus-warning': boxShadowFocusWarning,
                '--n-box-shadow-active-warning': boxShadowActiveWarning,
                '--n-box-shadow-hover-warning': boxShadowHoverWarning,
                '--n-border-warning': borderWarning,
                '--n-border-focus-warning': borderFocusWarning,
                '--n-border-hover-warning': borderHoverWarning,
                '--n-border-active-warning': borderActiveWarning,
                // form error
                '--n-color-active-error': colorActiveError,
                '--n-box-shadow-focus-error': boxShadowFocusError,
                '--n-box-shadow-active-error': boxShadowActiveError,
                '--n-box-shadow-hover-error': boxShadowHoverError,
                '--n-border-error': borderError,
                '--n-border-focus-error': borderFocusError,
                '--n-border-hover-error': borderHoverError,
                '--n-border-active-error': borderActiveError,
                // clear
                '--n-clear-size': clearSize,
                '--n-clear-color': clearColor,
                '--n-clear-color-hover': clearColorHover,
                '--n-clear-color-pressed': clearColorPressed,
                // arrow-size
                '--n-arrow-size': arrowSize
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0,_mixins__WEBPACK_IMPORTED_MODULE_6__.useThemeClass)('internal-selection', (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                return props.size[0];
            }), cssVarsRef, props)
            : undefined;
        return {
            mergedTheme: themeRef,
            mergedClearable: mergedClearableRef,
            patternInputFocused: patternInputFocusedRef,
            filterablePlaceholder: filterablePlaceholderRef,
            label: labelRef,
            selected: selectedRef,
            showTagsPanel: showTagsPopoverRef,
            isCompositing: isCompositingRef,
            // dom ref
            counterRef,
            counterWrapperRef,
            patternInputMirrorRef,
            patternInputRef,
            selfRef,
            multipleElRef,
            singleElRef,
            patternInputWrapperRef,
            overflowRef,
            inputTagElRef,
            handleMouseDown,
            handleFocusin,
            handleClear,
            handleMouseEnter,
            handleMouseLeave,
            handleDeleteOption,
            handlePatternKeyDown,
            handlePatternInputInput,
            handlePatternInputBlur,
            handlePatternInputFocus,
            handleMouseEnterCounter,
            handleMouseLeaveCounter,
            handleFocusout,
            handleCompositionEnd,
            handleCompositionStart,
            onPopoverUpdateShow,
            focus,
            focusInput,
            blur,
            blurInput,
            updateCounter,
            getCounter,
            getTail,
            renderLabel: props.renderLabel,
            cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
            themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
        };
    },
    render() {
        const { status, multiple, size, disabled, filterable, maxTagCount, bordered, clsPrefix, onRender, renderTag, renderLabel } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        const maxTagCountResponsive = maxTagCount === 'responsive';
        const maxTagCountNumeric = typeof maxTagCount === 'number';
        const useMaxTagCount = maxTagCountResponsive || maxTagCountNumeric;
        const suffix = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_suffix__WEBPACK_IMPORTED_MODULE_7__["default"], { clsPrefix: clsPrefix, loading: this.loading, showArrow: this.showArrow, showClear: this.mergedClearable && this.selected, onClear: this.handleClear }, {
            default: () => { var _a, _b; return (_b = (_a = this.$slots).arrow) === null || _b === void 0 ? void 0 : _b.call(_a); }
        }));
        let body;
        if (multiple) {
            const createTag = (option) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-selection-tag-wrapper`, key: option.value }, renderTag ? (renderTag({
                option,
                handleClose: () => this.handleDeleteOption(option)
            })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_tag__WEBPACK_IMPORTED_MODULE_8__["default"], { size: size, closable: !option.disabled, disabled: disabled, internalStopClickPropagation: true, onClose: () => this.handleDeleteOption(option) }, {
                default: () => renderLabel
                    ? renderLabel(option, true)
                    : (0,_utils__WEBPACK_IMPORTED_MODULE_4__.render)(option.label, option, true)
            }))));
            const originalTags = (maxTagCountNumeric
                ? this.selectedOptions.slice(0, maxTagCount)
                : this.selectedOptions).map(createTag);
            const input = filterable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-selection-input-tag`, ref: "inputTagElRef", key: "__input-tag__" },
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("input", Object.assign({}, this.inputProps, { ref: "patternInputRef", tabindex: -1, disabled: disabled, value: this.pattern, autofocus: this.autofocus, class: `${clsPrefix}-base-selection-input-tag__input`, onBlur: this.handlePatternInputBlur, onFocus: this.handlePatternInputFocus, onKeydown: this.handlePatternKeyDown, onInput: this.handlePatternInputInput, onCompositionstart: this.handleCompositionStart, onCompositionend: this.handleCompositionEnd })),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { ref: "patternInputMirrorRef", class: `${clsPrefix}-base-selection-input-tag__mirror` }, this.pattern))) : null;
            // May Overflow
            const renderCounter = maxTagCountResponsive
                ? () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-selection-tag-wrapper`, ref: "counterWrapperRef" },
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_tag__WEBPACK_IMPORTED_MODULE_8__["default"], { size: size, ref: "counterRef", onMouseenter: this.handleMouseEnterCounter, onMouseleave: this.handleMouseLeaveCounter, disabled: disabled })))
                : undefined;
            let counter;
            if (maxTagCountNumeric) {
                const rest = this.selectedOptions.length - maxTagCount;
                if (rest > 0) {
                    counter = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-selection-tag-wrapper`, key: "__counter__" },
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_tag__WEBPACK_IMPORTED_MODULE_8__["default"], { size: size, ref: "counterRef", onMouseenter: this.handleMouseEnterCounter, disabled: disabled }, {
                            default: () => `+${rest}`
                        })));
                }
            }
            const tags = maxTagCountResponsive ? (filterable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_9__["default"], { ref: "overflowRef", updateCounter: this.updateCounter, getCounter: this.getCounter, getTail: this.getTail, style: {
                    width: '100%',
                    display: 'flex',
                    overflow: 'hidden'
                } }, {
                default: () => originalTags,
                counter: renderCounter,
                tail: () => input
            })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_9__["default"], { ref: "overflowRef", updateCounter: this.updateCounter, getCounter: this.getCounter, style: {
                    width: '100%',
                    display: 'flex',
                    overflow: 'hidden'
                } }, {
                default: () => originalTags,
                counter: renderCounter
            }))) : maxTagCountNumeric ? (originalTags.concat(counter)) : (originalTags);
            const renderPopover = useMaxTagCount
                ? () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-selection-popover` }, maxTagCountResponsive
                    ? originalTags
                    : this.selectedOptions.map(createTag)))
                : undefined;
            const popoverProps = useMaxTagCount
                ? {
                    show: this.showTagsPanel,
                    trigger: 'hover',
                    overlap: true,
                    placement: 'top',
                    width: 'trigger',
                    onUpdateShow: this.onPopoverUpdateShow,
                    theme: this.mergedTheme.peers.Popover,
                    themeOverrides: this.mergedTheme.peerOverrides.Popover
                }
                : null;
            const showPlaceholder = this.selected
                ? false
                : this.active
                    ? !this.pattern && !this.isCompositing
                    : true;
            const placeholder = showPlaceholder ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay` }, this.placeholder)) : null;
            if (filterable) {
                const popoverTrigger = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: "patternInputWrapperRef", class: `${clsPrefix}-base-selection-tags` },
                    tags,
                    maxTagCountResponsive ? null : input,
                    suffix));
                body = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    useMaxTagCount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_popover__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, popoverProps), {
                        trigger: () => popoverTrigger,
                        default: renderPopover
                    })) : (popoverTrigger),
                    placeholder));
            }
            else {
                const popoverTrigger = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: "multipleElRef", class: `${clsPrefix}-base-selection-tags`, tabindex: disabled ? undefined : 0 },
                    tags,
                    suffix));
                body = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    useMaxTagCount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_popover__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, popoverProps), {
                        trigger: () => popoverTrigger,
                        default: renderPopover
                    })) : (popoverTrigger),
                    placeholder));
            }
        }
        else {
            if (filterable) {
                const hasInput = this.pattern || this.isCompositing;
                const showPlaceholder = this.active ? !hasInput : !this.selected;
                const showSelectedLabel = this.active ? false : this.selected;
                body = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: "patternInputWrapperRef", class: `${clsPrefix}-base-selection-label` },
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("input", Object.assign({}, this.inputProps, { ref: "patternInputRef", class: `${clsPrefix}-base-selection-input`, value: this.active ? this.pattern : '', placeholder: "", readonly: disabled, disabled: disabled, tabindex: -1, autofocus: this.autofocus, onFocus: this.handlePatternInputFocus, onBlur: this.handlePatternInputBlur, onInput: this.handlePatternInputInput, onCompositionstart: this.handleCompositionStart, onCompositionend: this.handleCompositionEnd })),
                    showSelectedLabel ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-selection-label__render-label ${clsPrefix}-base-selection-overlay`, key: "input" },
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-selection-overlay__wrapper` }, renderTag
                            ? renderTag({
                                option: this.selectedOption,
                                handleClose: () => { }
                            })
                            : renderLabel
                                ? renderLabel(this.selectedOption, true)
                                : (0,_utils__WEBPACK_IMPORTED_MODULE_4__.render)(this.label, this.selectedOption, true)))) : null,
                    showPlaceholder ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`, key: "placeholder" },
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-selection-overlay__wrapper` }, this.filterablePlaceholder))) : null,
                    suffix));
            }
            else {
                body = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: "singleElRef", class: `${clsPrefix}-base-selection-label`, tabindex: this.disabled ? undefined : 0 },
                    this.label !== undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-selection-input`, title: (0,_utils__WEBPACK_IMPORTED_MODULE_11__.getTitleAttribute)(this.label), key: "input" },
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-selection-input__content` }, renderTag
                            ? renderTag({
                                option: this.selectedOption,
                                handleClose: () => { }
                            })
                            : renderLabel
                                ? renderLabel(this.selectedOption, true)
                                : (0,_utils__WEBPACK_IMPORTED_MODULE_4__.render)(this.label, this.selectedOption, true)))) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`, key: "placeholder" }, this.placeholder)),
                    suffix));
            }
        }
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: "selfRef", class: [
                `${clsPrefix}-base-selection`,
                this.themeClass,
                status && `${clsPrefix}-base-selection--${status}-status`,
                {
                    [`${clsPrefix}-base-selection--active`]: this.active,
                    [`${clsPrefix}-base-selection--selected`]: this.selected || (this.active && this.pattern),
                    [`${clsPrefix}-base-selection--disabled`]: this.disabled,
                    [`${clsPrefix}-base-selection--multiple`]: this.multiple,
                    // focus is not controlled by selection itself since it always need
                    // to be managed together with menu. provide :focus style will cause
                    // many redundant codes.
                    [`${clsPrefix}-base-selection--focus`]: this.focused
                }
            ], style: this.cssVars, onClick: this.onClick, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onKeyup: this.onKeyup, onKeydown: this.onKeydown, onFocusin: this.handleFocusin, onFocusout: this.handleFocusout, onMousedown: this.handleMouseDown },
            body,
            bordered ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-selection__border` })) : null,
            bordered ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-selection__state-border` })) : null));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/_internal/selection/src/styles/index.cssr.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/naive-ui/es/_internal/selection/src/styles/index.cssr.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_utils/cssr */ "./node_modules/naive-ui/es/_utils/cssr/index.js");
 // vars:
// --n-bezier
// --n-border
// --n-border-active
// --n-border-focus
// --n-border-hover
// --n-border-radius
// --n-box-shadow-active
// --n-box-shadow-focus
// --n-box-shadow-hover
// --n-caret-color
// --n-color
// --n-color-active
// --n-color-disabled
// --n-font-size
// --n-height
// --n-padding-single
// --n-padding-multiple
// --n-placeholder-color
// --n-placeholder-color-disabled
// --n-text-color
// --n-text-color-disabled
// --n-arrow-color
// --n-arrow-size
// --n-loading-color
// ...clear vars
// ...form item vars

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)([(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection', `
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-loading', `
 color: var(--n-loading-color);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-tags', 'min-height: var(--n-height);'), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border, state-border', `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', `
 z-index: 1;
 border-color: #0000;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-suffix', `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('arrow', `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-overlay', `
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('wrapper', `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-placeholder', `
 color: var(--n-placeholder-color);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-tags', `
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-label', `
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-input', `
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('content', `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('render-label', `
 color: var(--n-text-color);
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('focus', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('active', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-label', 'background-color: var(--n-color-active);'), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-tags', 'background-color: var(--n-color-active);')])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', 'cursor: not-allowed;', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('arrow', `
 color: var(--n-arrow-color-disabled);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-label', `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-input', `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('render-label', `
 color: var(--n-text-color-disabled);
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-tags', `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-placeholder', `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-input-tag', `
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('input', `
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('mirror', `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 opacity: 0;
 `)]), ['warning', 'error'].map(status => (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)(`${status}-status`, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', `border: var(--n-border-${status});`), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', `
 box-shadow: var(--n-box-shadow-hover-${status});
 border: var(--n-border-hover-${status});
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('active', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', `
 box-shadow: var(--n-box-shadow-active-${status});
 border: var(--n-border-active-${status});
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-label', `background-color: var(--n-color-active-${status});`), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-tags', `background-color: var(--n-color-active-${status});`)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('focus', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)])])]))]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-popover', `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-selection-tag-wrapper', `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:last-child', 'padding-right: 0;'), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tag', `
 font-size: 14px;
 max-width: 100%;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('content', `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]));

/***/ }),

/***/ "./node_modules/naive-ui/es/_utils/naive/attribute.js":
/*!************************************************************!*\
  !*** ./node_modules/naive-ui/es/_utils/naive/attribute.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTitleAttribute": () => (/* binding */ getTitleAttribute)
/* harmony export */ });
function getTitleAttribute(value) {
    switch (typeof value) {
        case 'string':
            // The empty string should also be reset to undefined.
            return value || undefined;
        case 'number':
            return String(value);
        default:
            return undefined;
    }
}


/***/ }),

/***/ "./node_modules/naive-ui/es/_utils/vue/create-data-key.js":
/*!****************************************************************!*\
  !*** ./node_modules/naive-ui/es/_utils/vue/create-data-key.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDataKey": () => (/* binding */ createDataKey)
/* harmony export */ });
function createDataKey(key) {
    return typeof key === 'string' ? `s-${key}` : `n-${key}`;
}


/***/ }),

/***/ "./node_modules/naive-ui/es/checkbox/src/CheckMark.js":
/*!************************************************************!*\
  !*** ./node_modules/naive-ui/es/checkbox/src/CheckMark.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { viewBox: "0 0 64 64", class: "check-icon" },
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z" })));


/***/ }),

/***/ "./node_modules/naive-ui/es/checkbox/src/Checkbox.js":
/*!***********************************************************!*\
  !*** ./node_modules/naive-ui/es/checkbox/src/Checkbox.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/use-merged-state.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/use-memo.js");
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! seemly */ "./node_modules/seemly/es/misc/index.js");
/* harmony import */ var evtd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! evtd */ "./node_modules/evtd/es/delegate.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-theme.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-config.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-form-item.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-css-vars-class.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../_internal */ "./node_modules/naive-ui/es/_internal/icon-switch-transition/src/IconSwitchTransition.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/naive/warn.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/call.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/cssr/create-key.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles */ "./node_modules/naive-ui/es/checkbox/styles/light.js");
/* harmony import */ var _CheckMark__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CheckMark */ "./node_modules/naive-ui/es/checkbox/src/CheckMark.js");
/* harmony import */ var _LineMark__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LineMark */ "./node_modules/naive-ui/es/checkbox/src/LineMark.js");
/* harmony import */ var _CheckboxGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CheckboxGroup */ "./node_modules/naive-ui/es/checkbox/src/CheckboxGroup.js");
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/index.cssr */ "./node_modules/naive-ui/es/checkbox/src/styles/index.cssr.js");












const checkboxProps = Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), { size: String, checked: {
        type: [Boolean, String, Number],
        default: undefined
    }, defaultChecked: {
        type: [Boolean, String, Number],
        default: false
    }, value: [String, Number], disabled: {
        type: Boolean,
        default: undefined
    }, indeterminate: Boolean, label: String, focusable: {
        type: Boolean,
        default: true
    }, checkedValue: {
        type: [Boolean, String, Number],
        default: true
    }, uncheckedValue: {
        type: [Boolean, String, Number],
        default: false
    }, 'onUpdate:checked': [Function, Array], onUpdateChecked: [Function, Array], 
    // private
    privateInsideTable: Boolean, 
    // deprecated
    onChange: [Function, Array] });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Checkbox',
    props: checkboxProps,
    setup(props) {
        if (true) {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
                if (props.onChange) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.warnOnce)('checkbox', '`on-change` is deprecated, please use `on-update:checked` instead.');
                }
            });
        }
        const selfRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const { mergedClsPrefixRef, inlineThemeDisabled } = (0,_mixins__WEBPACK_IMPORTED_MODULE_3__["default"])(props);
        const formItem = (0,_mixins__WEBPACK_IMPORTED_MODULE_4__["default"])(props, {
            mergedSize(NFormItem) {
                const { size } = props;
                if (size !== undefined)
                    return size;
                if (NCheckboxGroup) {
                    const { value: mergedSize } = NCheckboxGroup.mergedSizeRef;
                    if (mergedSize !== undefined) {
                        return mergedSize;
                    }
                }
                if (NFormItem) {
                    const { mergedSize } = NFormItem;
                    if (mergedSize !== undefined)
                        return mergedSize.value;
                }
                return 'medium';
            },
            mergedDisabled(NFormItem) {
                const { disabled } = props;
                if (disabled !== undefined)
                    return disabled;
                if (NCheckboxGroup) {
                    if (NCheckboxGroup.disabledRef.value)
                        return true;
                    const { maxRef: { value: max }, checkedCountRef } = NCheckboxGroup;
                    if (max !== undefined &&
                        checkedCountRef.value >= max &&
                        !renderedCheckedRef.value) {
                        return true;
                    }
                    const { minRef: { value: min } } = NCheckboxGroup;
                    if (min !== undefined &&
                        checkedCountRef.value <= min &&
                        renderedCheckedRef.value) {
                        return true;
                    }
                }
                if (NFormItem) {
                    return NFormItem.disabled.value;
                }
                return false;
            }
        });
        const { mergedDisabledRef, mergedSizeRef } = formItem;
        const NCheckboxGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_CheckboxGroup__WEBPACK_IMPORTED_MODULE_5__.checkboxGroupInjectionKey, null);
        const uncontrolledCheckedRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.defaultChecked);
        const controlledCheckedRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'checked');
        const mergedCheckedRef = (0,vooks__WEBPACK_IMPORTED_MODULE_6__["default"])(controlledCheckedRef, uncontrolledCheckedRef);
        const renderedCheckedRef = (0,vooks__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
            if (NCheckboxGroup) {
                const groupValueSet = NCheckboxGroup.valueSetRef.value;
                if (groupValueSet && props.value !== undefined) {
                    return groupValueSet.has(props.value);
                }
                return false;
            }
            else {
                return mergedCheckedRef.value === props.checkedValue;
            }
        });
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('Checkbox', '-checkbox', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_8__["default"], _styles__WEBPACK_IMPORTED_MODULE_9__["default"], props, mergedClsPrefixRef);
        function toggle(e) {
            if (NCheckboxGroup && props.value !== undefined) {
                NCheckboxGroup.toggleCheckbox(!renderedCheckedRef.value, props.value);
            }
            else {
                const { onChange, 'onUpdate:checked': _onUpdateCheck, onUpdateChecked } = props;
                const { nTriggerFormInput, nTriggerFormChange } = formItem;
                const nextChecked = renderedCheckedRef.value
                    ? props.uncheckedValue
                    : props.checkedValue;
                if (_onUpdateCheck) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_10__.call)(_onUpdateCheck, nextChecked, e);
                }
                if (onUpdateChecked) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_10__.call)(onUpdateChecked, nextChecked, e);
                }
                if (onChange)
                    (0,_utils__WEBPACK_IMPORTED_MODULE_10__.call)(onChange, nextChecked, e); // deprecated
                nTriggerFormInput();
                nTriggerFormChange();
                uncontrolledCheckedRef.value = nextChecked;
            }
        }
        function handleClick(e) {
            if (!mergedDisabledRef.value) {
                toggle(e);
            }
        }
        function handleKeyUp(e) {
            if (mergedDisabledRef.value)
                return;
            switch (e.code) {
                case 'Space':
                case 'Enter':
                case 'NumpadEnter':
                    toggle(e);
            }
        }
        function handleKeyDown(e) {
            switch (e.code) {
                case 'Space':
                    e.preventDefault();
            }
        }
        const exposedMethods = {
            focus: () => {
                var _a;
                (_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.focus();
            },
            blur: () => {
                var _a;
                (_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.blur();
            }
        };
        const cssVarsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: mergedSize } = mergedSizeRef;
            const { common: { cubicBezierEaseInOut }, self: { borderRadius, color, colorChecked, colorDisabled, colorTableHeader, colorTableHeaderModal, colorTableHeaderPopover, checkMarkColor, checkMarkColorDisabled, border, borderFocus, borderDisabled, borderChecked, boxShadowFocus, textColor, textColorDisabled, checkMarkColorDisabledChecked, colorDisabledChecked, borderDisabledChecked, labelPadding, [(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('fontSize', mergedSize)]: fontSize, [(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('size', mergedSize)]: size } } = themeRef.value;
            return {
                '--n-size': size,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-border-radius': borderRadius,
                '--n-border': border,
                '--n-border-checked': borderChecked,
                '--n-border-focus': borderFocus,
                '--n-border-disabled': borderDisabled,
                '--n-border-disabled-checked': borderDisabledChecked,
                '--n-box-shadow-focus': boxShadowFocus,
                '--n-color': color,
                '--n-color-checked': colorChecked,
                '--n-color-table': colorTableHeader,
                '--n-color-table-modal': colorTableHeaderModal,
                '--n-color-table-popover': colorTableHeaderPopover,
                '--n-color-disabled': colorDisabled,
                '--n-color-disabled-checked': colorDisabledChecked,
                '--n-text-color': textColor,
                '--n-text-color-disabled': textColorDisabled,
                '--n-check-mark-color': checkMarkColor,
                '--n-check-mark-color-disabled': checkMarkColorDisabled,
                '--n-check-mark-color-disabled-checked': checkMarkColorDisabledChecked,
                '--n-font-size': fontSize,
                '--n-label-padding': labelPadding
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0,_mixins__WEBPACK_IMPORTED_MODULE_12__.useThemeClass)('checkbox', (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => mergedSizeRef.value[0]), cssVarsRef, props)
            : undefined;
        return Object.assign(formItem, exposedMethods, {
            selfRef,
            mergedClsPrefix: mergedClsPrefixRef,
            mergedDisabled: mergedDisabledRef,
            renderedChecked: renderedCheckedRef,
            mergedTheme: themeRef,
            labelId: (0,seemly__WEBPACK_IMPORTED_MODULE_13__.createId)(),
            handleClick,
            handleKeyUp,
            handleKeyDown,
            cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
            themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
        });
    },
    render() {
        var _a;
        const { $slots, renderedChecked, mergedDisabled, indeterminate, privateInsideTable, cssVars, labelId, label, mergedClsPrefix, focusable, handleKeyUp, handleKeyDown, handleClick } = this;
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: "selfRef", class: [
                `${mergedClsPrefix}-checkbox`,
                this.themeClass,
                renderedChecked && `${mergedClsPrefix}-checkbox--checked`,
                mergedDisabled && `${mergedClsPrefix}-checkbox--disabled`,
                indeterminate && `${mergedClsPrefix}-checkbox--indeterminate`,
                privateInsideTable && `${mergedClsPrefix}-checkbox--inside-table`
            ], tabindex: mergedDisabled || !focusable ? undefined : 0, role: "checkbox", "aria-checked": indeterminate ? 'mixed' : renderedChecked, "aria-labelledby": labelId, style: cssVars, onKeyup: handleKeyUp, onKeydown: handleKeyDown, onClick: handleClick, onMousedown: () => {
                (0,evtd__WEBPACK_IMPORTED_MODULE_14__.on)('selectstart', window, (e) => {
                    e.preventDefault();
                }, {
                    once: true
                });
            } },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-checkbox-box` },
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_15__["default"], null, {
                    default: () => this.indeterminate ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: "indeterminate", class: `${mergedClsPrefix}-checkbox-icon` }, _LineMark__WEBPACK_IMPORTED_MODULE_16__["default"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: "check", class: `${mergedClsPrefix}-checkbox-icon` }, _CheckMark__WEBPACK_IMPORTED_MODULE_17__["default"]))
                }),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-checkbox-box__border` })),
            label !== null || $slots.default ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: `${mergedClsPrefix}-checkbox__label`, id: labelId }, $slots.default ? $slots.default() : label)) : null));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/checkbox/src/CheckboxGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/naive-ui/es/checkbox/src/CheckboxGroup.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkboxGroupInjectionKey": () => (/* binding */ checkboxGroupInjectionKey),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/use-merged-state.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-config.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-form-item.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/create-injection-key.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/naive/warn.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/call.js");




const checkboxGroupInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createInjectionKey)('n-checkbox-group');
const checkboxGroupProps = {
    min: Number,
    max: Number,
    size: String,
    value: Array,
    defaultValue: {
        type: Array,
        default: null
    },
    disabled: {
        type: Boolean,
        default: undefined
    },
    'onUpdate:value': [Function, Array],
    onUpdateValue: [Function, Array],
    // deprecated
    onChange: {
        type: [Function, Array],
        validator: () => {
            if (true) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.warn)('checkbox-group', '`on-change` is deprecated, please use `on-update:value` instead.');
            }
            return true;
        },
        default: undefined
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'CheckboxGroup',
    props: checkboxGroupProps,
    setup(props) {
        const { mergedClsPrefixRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_3__["default"])(props);
        const formItem = (0,_mixins__WEBPACK_IMPORTED_MODULE_4__["default"])(props);
        const { mergedSizeRef, mergedDisabledRef } = formItem;
        const uncontrolledValueRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.defaultValue);
        const controlledValueRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.value);
        const mergedValueRef = (0,vooks__WEBPACK_IMPORTED_MODULE_5__["default"])(controlledValueRef, uncontrolledValueRef);
        const checkedCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            var _a;
            return ((_a = mergedValueRef.value) === null || _a === void 0 ? void 0 : _a.length) || 0;
        });
        const valueSetRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            if (Array.isArray(mergedValueRef.value)) {
                return new Set(mergedValueRef.value);
            }
            return new Set();
        });
        function toggleCheckbox(checked, checkboxValue) {
            const { nTriggerFormInput, nTriggerFormChange } = formItem;
            const { onChange, 'onUpdate:value': _onUpdateValue, onUpdateValue } = props;
            if (Array.isArray(mergedValueRef.value)) {
                const groupValue = Array.from(mergedValueRef.value);
                const index = groupValue.findIndex((value) => value === checkboxValue);
                if (checked) {
                    if (!~index) {
                        groupValue.push(checkboxValue);
                        if (onUpdateValue)
                            (0,_utils__WEBPACK_IMPORTED_MODULE_6__.call)(onUpdateValue, groupValue);
                        if (_onUpdateValue)
                            (0,_utils__WEBPACK_IMPORTED_MODULE_6__.call)(_onUpdateValue, groupValue);
                        nTriggerFormInput();
                        nTriggerFormChange();
                        uncontrolledValueRef.value = groupValue;
                        // deprecated
                        if (onChange)
                            (0,_utils__WEBPACK_IMPORTED_MODULE_6__.call)(onChange, groupValue);
                    }
                }
                else {
                    if (~index) {
                        groupValue.splice(index, 1);
                        if (onUpdateValue)
                            (0,_utils__WEBPACK_IMPORTED_MODULE_6__.call)(onUpdateValue, groupValue);
                        if (_onUpdateValue)
                            (0,_utils__WEBPACK_IMPORTED_MODULE_6__.call)(_onUpdateValue, groupValue);
                        if (onChange)
                            (0,_utils__WEBPACK_IMPORTED_MODULE_6__.call)(onChange, groupValue); // deprecated
                        uncontrolledValueRef.value = groupValue;
                        nTriggerFormInput();
                        nTriggerFormChange();
                    }
                }
            }
            else {
                if (checked) {
                    if (onUpdateValue)
                        (0,_utils__WEBPACK_IMPORTED_MODULE_6__.call)(onUpdateValue, [checkboxValue]);
                    if (_onUpdateValue)
                        (0,_utils__WEBPACK_IMPORTED_MODULE_6__.call)(_onUpdateValue, [checkboxValue]);
                    if (onChange)
                        (0,_utils__WEBPACK_IMPORTED_MODULE_6__.call)(onChange, [checkboxValue]); // deprecated
                    uncontrolledValueRef.value = [checkboxValue];
                    nTriggerFormInput();
                    nTriggerFormChange();
                }
                else {
                    if (onUpdateValue)
                        (0,_utils__WEBPACK_IMPORTED_MODULE_6__.call)(onUpdateValue, []);
                    if (_onUpdateValue)
                        (0,_utils__WEBPACK_IMPORTED_MODULE_6__.call)(_onUpdateValue, []);
                    if (onChange)
                        (0,_utils__WEBPACK_IMPORTED_MODULE_6__.call)(onChange, []); // deprecated
                    uncontrolledValueRef.value = [];
                    nTriggerFormInput();
                    nTriggerFormChange();
                }
            }
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(checkboxGroupInjectionKey, {
            checkedCountRef: checkedCount,
            maxRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'max'),
            minRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'min'),
            valueSetRef: valueSetRef,
            disabledRef: mergedDisabledRef,
            mergedSizeRef: mergedSizeRef,
            toggleCheckbox
        });
        return {
            mergedClsPrefix: mergedClsPrefixRef
        };
    },
    render() {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${this.mergedClsPrefix}-checkbox-group`, role: "group" }, this.$slots));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/checkbox/src/LineMark.js":
/*!***********************************************************!*\
  !*** ./node_modules/naive-ui/es/checkbox/src/LineMark.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { viewBox: "0 0 100 100", class: "line-icon" },
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z" })));


/***/ }),

/***/ "./node_modules/naive-ui/es/checkbox/src/styles/index.cssr.js":
/*!********************************************************************!*\
  !*** ./node_modules/naive-ui/es/checkbox/src/styles/index.cssr.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_utils/cssr */ "./node_modules/naive-ui/es/_utils/cssr/index.js");
/* harmony import */ var _styles_transitions_icon_switch_cssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_styles/transitions/icon-switch.cssr */ "./node_modules/naive-ui/es/_styles/transitions/icon-switch.cssr.js");

 // vars:
// --n-bezier
// --n-size
// --n-border
// --n-border-focus
// --n-border-checked
// --n-border-disabled
// --n-border-disabled-checked
// --n-box-shadow-focus
// --n-color
// --n-color-checked
// --n-color-table
// --n-color-table-modal
// --n-color-disabled
// --n-color-disabled-checked
// --n-text-color
// --n-text-color-disabled
// --n-check-mark-color
// --n-check-mark-color-disabled
// --n-check-mark-color-disabled-checked
// --n-border-radius
// --n-font-size
// --n-label-padding

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)([(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox', `
 line-height: 1;
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 align-items: center;
 white-space: nowrap;
 vertical-align: middle;
 --n-merged-color-table: var(--n-color-table);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox-box', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border', {
  border: 'var(--n-border-checked)'
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:focus:not(:active)', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox-box', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border', `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('inside-table', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox-box', `
 background-color: var(--n-merged-color-table);
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('checked', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox-box', `
 background-color: var(--n-color-checked);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox-icon', [// if not set width to 100%, safari & old chrome won't display the icon
(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('.check-icon', `
 opacity: 1;
 transform: scale(1);
 `)])])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('indeterminate', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox-box', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox-icon', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('.check-icon', `
 opacity: 0;
 transform: scale(.5);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('.line-icon', `
 opacity: 1;
 transform: scale(1);
 `)])])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('checked, indeterminate', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:focus:not(:active)', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox-box', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border', `
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox-box', `
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border', {
  border: 'var(--n-border-checked)'
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', {
  cursor: 'not-allowed'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('checked', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox-box', `
 background-color: var(--n-color-disabled-checked);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border', {
  border: 'var(--n-border-disabled-checked)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox-icon', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('.check-icon, .line-icon', {
  fill: 'var(--n-check-mark-color-disabled-checked)'
})])])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox-box', `
 background-color: var(--n-color-disabled);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border', {
  border: 'var(--n-border-disabled)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox-icon', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('.check-icon, .line-icon', {
  fill: 'var(--n-check-mark-color-disabled)'
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('label', {
  color: 'var(--n-text-color-disabled)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox-box', `
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 position: relative;
 transition:
 background-color 0.3s var(--n-bezier);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border', `
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox-icon', `
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('.check-icon, .line-icon', `
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `), (0,_styles_transitions_icon_switch_cssr__WEBPACK_IMPORTED_MODULE_1__["default"])({
  left: '1px',
  top: '1px'
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('label', `
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 padding: var(--n-label-padding);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:empty', {
  display: 'none'
})])]), // modal table header checkbox
(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.insideModal)((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox', `
 --n-merged-color-table: var(--n-color-table-modal);
 `)), // popover table header checkbox
(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.insidePopover)((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('checkbox', `
 --n-merged-color-table: var(--n-color-table-popover);
 `))]));

/***/ }),

/***/ "./node_modules/naive-ui/es/tag/src/Tag.js":
/*!*************************************************!*\
  !*** ./node_modules/naive-ui/es/tag/src/Tag.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/naive-ui/es/tree-select/src/TreeSelect.js":
/*!****************************************************************!*\
  !*** ./node_modules/naive-ui/es/tree-select/src/TreeSelect.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vueuc__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vueuc */ "./node_modules/vueuc/es/binder/src/Binder.js");
/* harmony import */ var vueuc__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vueuc */ "./node_modules/vueuc/es/binder/src/Target.js");
/* harmony import */ var vueuc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vueuc */ "./node_modules/vueuc/es/binder/src/Follower.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/use-merged-state.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/life-cycle/use-is-mounted.js");
/* harmony import */ var vdirs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! vdirs */ "./node_modules/vdirs/es/clickoutside.js");
/* harmony import */ var treemate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! treemate */ "./node_modules/treemate/es/create.js");
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! seemly */ "./node_modules/seemly/es/dom/happens-in.js");
/* harmony import */ var _tree_src_Tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tree */ "./node_modules/naive-ui/es/tree/src/Tree.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../_internal */ "./node_modules/naive-ui/es/_internal/selection/src/Selection.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../_internal */ "./node_modules/naive-ui/es/_internal/focus-detector/index.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../empty */ "./node_modules/naive-ui/es/empty/src/Empty.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-theme.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-config.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-locale.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-form-item.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/composable/use-adjusted-to.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/naive/warn.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/call.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles */ "./node_modules/naive-ui/es/tree-select/styles/light.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interface */ "./node_modules/naive-ui/es/tree-select/src/interface.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/naive-ui/es/tree-select/src/utils.js");
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/index.cssr */ "./node_modules/naive-ui/es/tree-select/src/styles/index.cssr.js");
















const props = Object.assign(Object.assign(Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), { bordered: {
        type: Boolean,
        default: true
    }, cascade: Boolean, checkable: Boolean, clearable: Boolean, clearFilterAfterSelect: {
        type: Boolean,
        default: true
    }, consistentMenuWidth: {
        type: Boolean,
        default: true
    }, defaultShow: Boolean, defaultValue: {
        type: [String, Number, Array],
        default: null
    }, disabled: {
        type: Boolean,
        default: undefined
    }, filterable: Boolean, checkStrategy: {
        type: String,
        default: 'all'
    }, maxTagCount: [String, Number], multiple: Boolean, showPath: Boolean, separator: {
        type: String,
        default: ' / '
    }, options: {
        type: Array,
        default: () => []
    }, placeholder: String, placement: {
        type: String,
        default: 'bottom-start'
    }, show: {
        type: Boolean,
        default: undefined
    }, size: String, value: [String, Number, Array], to: _utils__WEBPACK_IMPORTED_MODULE_2__.useAdjustedTo.propTo, menuProps: Object, virtualScroll: {
        type: Boolean,
        default: true
    } }), _tree_src_Tree__WEBPACK_IMPORTED_MODULE_3__.treeSharedProps), { onBlur: Function, onFocus: Function, onUpdateShow: [Function, Array], onUpdateValue: [Function, Array], 'onUpdate:value': [Function, Array], 'onUpdate:show': [Function, Array], 
    /**
     * @deprecated
     */
    leafOnly: {
        type: Boolean,
        default: undefined
    } });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'TreeSelect',
    props,
    setup(props) {
        if (true) {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
                if (props.leafOnly !== undefined) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warnOnce)('tree-select', '`leaf-only` is deprecated, please use `check-strategy="child"` instead.');
                }
            });
        }
        const followerInstRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const triggerInstRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const treeInstRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const menuElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const { mergedClsPrefixRef, namespaceRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_5__["default"])(props);
        const { localeRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_6__["default"])('Select');
        const { mergedSizeRef, mergedDisabledRef, mergedStatusRef, nTriggerFormBlur, nTriggerFormChange, nTriggerFormFocus, nTriggerFormInput } = (0,_mixins__WEBPACK_IMPORTED_MODULE_7__["default"])(props);
        const uncontrolledValueRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.defaultValue);
        const controlledValueRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'value');
        const mergedValueRef = (0,vooks__WEBPACK_IMPORTED_MODULE_8__["default"])(controlledValueRef, uncontrolledValueRef);
        const uncontrolledShowRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.defaultShow);
        const controlledShowRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'show');
        const mergedShowRef = (0,vooks__WEBPACK_IMPORTED_MODULE_8__["default"])(controlledShowRef, uncontrolledShowRef);
        const patternRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
        const mergedFilterRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { filter } = props;
            if (filter)
                return filter;
            const { labelField } = props;
            return (pattern, node) => {
                if (!pattern.length)
                    return true;
                return node[labelField]
                    .toLowerCase()
                    .includes(pattern.toLowerCase());
            };
        });
        const filteredTreeInfoRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            if (!props.filterable) {
                return {
                    filteredTree: props.options,
                    highlightKeySet: undefined,
                    expandedKeys: undefined
                };
            }
            const { value: pattern } = patternRef;
            if (!pattern.length || !mergedFilterRef.value) {
                return {
                    filteredTree: props.options,
                    highlightKeySet: undefined,
                    expandedKeys: undefined
                };
            }
            return (0,_utils__WEBPACK_IMPORTED_MODULE_9__.filterTree)(props.options, mergedFilterRef.value, pattern, props.keyField);
        });
        // used to resolve selected options
        const dataTreeMateRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (0,treemate__WEBPACK_IMPORTED_MODULE_10__.createTreeMate)(props.options, (0,_tree_src_Tree__WEBPACK_IMPORTED_MODULE_3__.createTreeMateOptions)(props.keyField, props.childrenField)));
        const displayTreeMateRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (0,treemate__WEBPACK_IMPORTED_MODULE_10__.createTreeMate)(filteredTreeInfoRef.value.filteredTree, (0,_tree_src_Tree__WEBPACK_IMPORTED_MODULE_3__.createTreeMateOptions)(props.keyField, props.childrenField)));
        const { value: initMergedValue } = mergedValueRef;
        const pendingNodeKeyRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.checkable
            ? null
            : Array.isArray(initMergedValue) && initMergedValue.length
                ? initMergedValue[initMergedValue.length - 1]
                : null);
        const mergedCascadeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return props.multiple && props.cascade && props.checkable;
        });
        // The same logic as tree, now it's not that complex so I don't extract a
        // function to reuse it.
        const uncontrolledExpandedKeysRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.defaultExpandAll
            ? displayTreeMateRef.value.getNonLeafKeys()
            : props.defaultExpandedKeys || props.expandedKeys);
        const controlledExpandedKeysRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'expandedKeys');
        const mergedExpandedKeysRef = (0,vooks__WEBPACK_IMPORTED_MODULE_8__["default"])(controlledExpandedKeysRef, uncontrolledExpandedKeysRef);
        const focusedRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const mergedPlaceholderRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { placeholder } = props;
            if (placeholder !== undefined)
                return placeholder;
            return localeRef.value.placeholder;
        });
        const treeSelectedKeysRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            if (props.checkable)
                return [];
            return treeCheckedKeysRef.value;
        });
        const treeCheckedKeysRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: mergedValue } = mergedValueRef;
            if (props.multiple) {
                if (Array.isArray(mergedValue))
                    return mergedValue;
                else
                    return [];
            }
            else {
                if (mergedValue === null || Array.isArray(mergedValue))
                    return [];
                else
                    return [mergedValue];
            }
        });
        const selectedOptionRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { multiple, showPath, separator, labelField } = props;
            if (multiple)
                return null;
            const { value: mergedValue } = mergedValueRef;
            if (!Array.isArray(mergedValue) && mergedValue !== null) {
                const { value: treeMate } = dataTreeMateRef;
                const tmNode = treeMate.getNode(mergedValue);
                if (tmNode !== null) {
                    return showPath
                        ? (0,_utils__WEBPACK_IMPORTED_MODULE_9__.treeOption2SelectOptionWithPath)(tmNode, treeMate.getPath(mergedValue).treeNodePath, separator, labelField)
                        : (0,_utils__WEBPACK_IMPORTED_MODULE_9__.treeOption2SelectOption)(tmNode, labelField);
                }
            }
            return null;
        });
        const selectedOptionsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { multiple, showPath, separator } = props;
            if (!multiple)
                return null;
            const { value: mergedValue } = mergedValueRef;
            if (Array.isArray(mergedValue)) {
                const res = [];
                const { value: treeMate } = dataTreeMateRef;
                const { checkedKeys } = treeMate.getCheckedKeys(mergedValue, {
                    checkStrategy: props.checkStrategy,
                    cascade: mergedCascadeRef.value
                });
                const { labelField } = props;
                checkedKeys.forEach((value) => {
                    const tmNode = treeMate.getNode(value);
                    if (tmNode !== null) {
                        res.push(showPath
                            ? (0,_utils__WEBPACK_IMPORTED_MODULE_9__.treeOption2SelectOptionWithPath)(tmNode, treeMate.getPath(value).treeNodePath, separator, labelField)
                            : (0,_utils__WEBPACK_IMPORTED_MODULE_9__.treeOption2SelectOption)(tmNode, labelField));
                    }
                });
                return res;
            }
            return [];
        });
        const menuPaddingRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { self: { menuPadding } } = themeRef.value;
            return menuPadding;
        });
        function focusSelection() {
            var _a;
            (_a = triggerInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        }
        function focusSelectionInput() {
            var _a;
            (_a = triggerInstRef.value) === null || _a === void 0 ? void 0 : _a.focusInput();
        }
        function doUpdateShow(value) {
            const { onUpdateShow, 'onUpdate:show': _onUpdateShow } = props;
            if (onUpdateShow)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onUpdateShow, value);
            if (_onUpdateShow)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(_onUpdateShow, value);
            uncontrolledShowRef.value = value;
        }
        function doUpdateValue(value, option) {
            const { onUpdateValue, 'onUpdate:value': _onUpdateValue } = props;
            if (onUpdateValue)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onUpdateValue, value, option);
            if (_onUpdateValue) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(_onUpdateValue, value, option);
            }
            uncontrolledValueRef.value = value;
            nTriggerFormInput();
            nTriggerFormChange();
        }
        function doUpdateIndeterminateKeys(value, option) {
            const { onUpdateIndeterminateKeys, 'onUpdate:indeterminateKeys': _onUpdateIndeterminateKeys } = props;
            if (onUpdateIndeterminateKeys) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onUpdateIndeterminateKeys, value, option);
            }
            if (_onUpdateIndeterminateKeys) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(_onUpdateIndeterminateKeys, value, option);
            }
        }
        function doUpdateExpandedKeys(keys, option) {
            const { onUpdateExpandedKeys, 'onUpdate:expandedKeys': _onUpdateExpandedKeys } = props;
            if (onUpdateExpandedKeys) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onUpdateExpandedKeys, keys, option);
            }
            if (_onUpdateExpandedKeys) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(_onUpdateExpandedKeys, keys, option);
            }
            uncontrolledExpandedKeysRef.value = keys;
        }
        function doFocus(e) {
            const { onFocus } = props;
            if (onFocus)
                onFocus(e);
            nTriggerFormFocus();
        }
        function doBlur(e) {
            closeMenu();
            const { onBlur } = props;
            if (onBlur)
                onBlur(e);
            nTriggerFormBlur();
        }
        function closeMenu() {
            doUpdateShow(false);
        }
        function openMenu() {
            if (!mergedDisabledRef.value) {
                patternRef.value = '';
                doUpdateShow(true);
                if (props.filterable) {
                    focusSelectionInput();
                }
            }
        }
        function handleMenuLeave() {
            patternRef.value = '';
        }
        function handleMenuClickoutside(e) {
            var _a;
            if (mergedShowRef.value) {
                if (!((_a = triggerInstRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(e.target))) {
                    // outside select, don't need to return focus
                    closeMenu();
                }
            }
        }
        function handleTriggerClick() {
            if (mergedDisabledRef.value)
                return;
            if (!mergedShowRef.value) {
                openMenu();
            }
            else {
                if (!props.filterable) {
                    // already focused, don't need to return focus
                    closeMenu();
                }
            }
        }
        function getOptionsByKeys(keys) {
            const { value: { getNode } } = dataTreeMateRef;
            return keys.map((key) => { var _a; return ((_a = getNode(key)) === null || _a === void 0 ? void 0 : _a.rawNode) || null; });
        }
        function handleUpdateCheckedKeys(keys) {
            const options = getOptionsByKeys(keys);
            if (props.multiple) {
                doUpdateValue(keys, options);
            }
            else {
                keys.length
                    ? doUpdateValue(keys[0], options[0] || null)
                    : doUpdateValue(null, null);
                closeMenu();
                if (!props.filterable) {
                    // Currently it is not necessary. However if there is an action slot,
                    // it will be useful. So just leave it here.
                    focusSelection();
                }
            }
            if (props.filterable) {
                focusSelectionInput();
                if (props.clearFilterAfterSelect)
                    patternRef.value = '';
            }
        }
        function handleUpdateIndeterminateKeys(keys) {
            if (props.checkable) {
                doUpdateIndeterminateKeys(keys, getOptionsByKeys(keys));
            }
        }
        function handleTriggerFocus(e) {
            var _a;
            if ((_a = menuElRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))
                return;
            focusedRef.value = true;
            doFocus(e);
        }
        function handleTriggerBlur(e) {
            var _a;
            if ((_a = menuElRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))
                return;
            focusedRef.value = false;
            doBlur(e);
        }
        function handleMenuFocusin(e) {
            var _a, _b, _c;
            if (((_a = menuElRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget)) ||
                ((_c = (_b = triggerInstRef.value) === null || _b === void 0 ? void 0 : _b.$el) === null || _c === void 0 ? void 0 : _c.contains(e.relatedTarget))) {
                return;
            }
            focusedRef.value = true;
            doFocus(e);
        }
        function handleMenuFocusout(e) {
            var _a, _b, _c;
            if (((_a = menuElRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget)) ||
                ((_c = (_b = triggerInstRef.value) === null || _b === void 0 ? void 0 : _b.$el) === null || _c === void 0 ? void 0 : _c.contains(e.relatedTarget))) {
                return;
            }
            focusedRef.value = false;
            doBlur(e);
        }
        function handleClear(e) {
            e.stopPropagation();
            const { multiple } = props;
            if (!multiple && props.filterable) {
                closeMenu();
            }
            if (multiple) {
                doUpdateValue([], []);
            }
            else {
                doUpdateValue(null, null);
            }
        }
        function handleDeleteOption(option) {
            // only work for multiple mode
            const { value: mergedValue } = mergedValueRef;
            if (Array.isArray(mergedValue)) {
                const index = mergedValue.findIndex((key) => key === option.value);
                if (~index) {
                    if (props.checkable) {
                        const { checkedKeys } = dataTreeMateRef.value.uncheck(option.value, mergedValue, {
                            cascade: mergedCascadeRef.value
                        });
                        doUpdateValue(checkedKeys, getOptionsByKeys(checkedKeys));
                    }
                    else {
                        const nextValue = Array.from(mergedValue);
                        nextValue.splice(index, 1);
                        doUpdateValue(nextValue, getOptionsByKeys(nextValue));
                    }
                }
            }
        }
        function handlePatternInput(e) {
            const { value } = e.target;
            patternRef.value = value;
        }
        function handleKeydown(e) {
            const { value: treeInst } = treeInstRef;
            if (treeInst) {
                treeInst.handleKeydown(e);
            }
        }
        function handleKeyup(e) {
            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                if (mergedShowRef.value) {
                    treeHandleKeyup(e);
                    if (!props.multiple) {
                        closeMenu();
                        focusSelection();
                    }
                }
                else {
                    openMenu();
                }
                e.preventDefault();
            }
            else if (e.code === 'Escape') {
                closeMenu();
                focusSelection();
            }
            else {
                if (mergedShowRef.value) {
                    treeHandleKeyup(e);
                }
                else if (e.code === 'ArrowDown') {
                    openMenu();
                }
            }
        }
        function treeHandleKeyup(e) {
            const { value: treeInst } = treeInstRef;
            if (treeInst) {
                treeInst.handleKeyup(e);
            }
        }
        function handleTabOut() {
            closeMenu();
            focusSelection();
        }
        function handleMenuMousedown(e) {
            // If there's an action slot later, we need to check if mousedown happens
            // in action panel
            if (!(0,seemly__WEBPACK_IMPORTED_MODULE_12__.happensIn)(e, 'action'))
                e.preventDefault();
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_interface__WEBPACK_IMPORTED_MODULE_13__.treeSelectInjectionKey, {
            pendingNodeKeyRef
        });
        function syncPosition() {
            var _a;
            (_a = followerInstRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(mergedValueRef, () => {
            if (!mergedShowRef.value)
                return;
            void (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(syncPosition);
        });
        let memorizedExpandedKeys;
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(patternRef, (value, oldValue) => {
            if (!value.length) {
                if (memorizedExpandedKeys !== undefined) {
                    doUpdateExpandedKeys(memorizedExpandedKeys, getOptionsByKeys(memorizedExpandedKeys));
                }
            }
            else {
                if (!oldValue.length) {
                    memorizedExpandedKeys = mergedExpandedKeysRef.value;
                }
                const { expandedKeys } = filteredTreeInfoRef.value;
                if (expandedKeys !== undefined) {
                    doUpdateExpandedKeys(expandedKeys, getOptionsByKeys(expandedKeys));
                }
            }
        });
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('TreeSelect', '-tree-select', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_14__["default"], _styles__WEBPACK_IMPORTED_MODULE_15__["default"], props, mergedClsPrefixRef);
        return {
            menuElRef,
            mergedStatus: mergedStatusRef,
            triggerInstRef,
            followerInstRef,
            treeInstRef,
            mergedClsPrefix: mergedClsPrefixRef,
            mergedValue: mergedValueRef,
            mergedShow: mergedShowRef,
            namespace: namespaceRef,
            adjustedTo: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.useAdjustedTo)(props),
            isMounted: (0,vooks__WEBPACK_IMPORTED_MODULE_16__["default"])(),
            focused: focusedRef,
            filteredTreeInfo: filteredTreeInfoRef,
            dataTreeMate: dataTreeMateRef,
            displayTreeMate: displayTreeMateRef,
            menuPadding: menuPaddingRef,
            mergedPlaceholder: mergedPlaceholderRef,
            mergedExpandedKeys: mergedExpandedKeysRef,
            treeSelectedKeys: treeSelectedKeysRef,
            treeCheckedKeys: treeCheckedKeysRef,
            mergedSize: mergedSizeRef,
            mergedDisabled: mergedDisabledRef,
            selectedOption: selectedOptionRef,
            selectedOptions: selectedOptionsRef,
            pattern: patternRef,
            pendingNodeKey: pendingNodeKeyRef,
            mergedCascade: mergedCascadeRef,
            doUpdateExpandedKeys,
            handleMenuLeave,
            handleTriggerClick,
            handleMenuClickoutside,
            handleUpdateCheckedKeys,
            handleUpdateIndeterminateKeys,
            handleTriggerFocus,
            handleTriggerBlur,
            handleMenuFocusin,
            handleMenuFocusout,
            handleClear,
            handleDeleteOption,
            handlePatternInput,
            handleKeydown,
            handleKeyup,
            handleTabOut,
            handleMenuMousedown,
            cssVars: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                const { common: { cubicBezierEaseInOut }, self: { menuBoxShadow, menuBorderRadius, menuColor, menuHeight, actionPadding, actionDividerColor, actionTextColor } } = themeRef.value;
                return {
                    '--n-menu-box-shadow': menuBoxShadow,
                    '--n-menu-border-radius': menuBorderRadius,
                    '--n-menu-color': menuColor,
                    '--n-menu-height': menuHeight,
                    '--n-bezier': cubicBezierEaseInOut,
                    '--n-action-padding': actionPadding,
                    '--n-action-text-color': actionTextColor,
                    '--n-action-divider-color': actionDividerColor
                };
            }),
            mergedTheme: themeRef
        };
    },
    render() {
        const { mergedTheme, mergedClsPrefix, $slots } = this;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-tree-select` },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_17__["default"], null, {
                default: () => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_18__["default"], null, {
                        default: () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_19__["default"], { ref: "triggerInstRef", status: this.mergedStatus, focused: this.focused, clsPrefix: mergedClsPrefix, theme: mergedTheme.peers.InternalSelection, themeOverrides: mergedTheme.peerOverrides.InternalSelection, selectedOption: this.selectedOption, selectedOptions: this.selectedOptions, size: this.mergedSize, bordered: this.bordered, placeholder: this.mergedPlaceholder, disabled: this.mergedDisabled, active: this.mergedShow, multiple: this.multiple, maxTagCount: this.maxTagCount, showArrow: true, filterable: this.filterable, clearable: this.clearable, pattern: this.pattern, onPatternInput: this.handlePatternInput, onClear: this.handleClear, onClick: this.handleTriggerClick, onFocus: this.handleTriggerFocus, onBlur: this.handleTriggerBlur, onDeleteOption: this.handleDeleteOption, onKeydown: this.handleKeydown, onKeyup: this.handleKeyup }))
                    }),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_20__["default"], { ref: "followerInstRef", show: this.mergedShow, placement: this.placement, to: this.adjustedTo, teleportDisabled: this.adjustedTo === _utils__WEBPACK_IMPORTED_MODULE_2__.useAdjustedTo.tdkey, containerClass: this.namespace, width: this.consistentMenuWidth ? 'target' : undefined, minWidth: "target" }, {
                        default: () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, { name: "fade-in-scale-up-transition", appear: this.isMounted, onLeave: this.handleMenuLeave }, {
                            default: () => {
                                if (!this.mergedShow)
                                    return null;
                                const { mergedClsPrefix, filteredTreeInfo, checkable, multiple, menuProps } = this;
                                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", Object.assign({}, menuProps, { class: [
                                        `${mergedClsPrefix}-tree-select-menu`,
                                        menuProps === null || menuProps === void 0 ? void 0 : menuProps.class
                                    ], ref: "menuElRef", style: [
                                        (menuProps === null || menuProps === void 0 ? void 0 : menuProps.style) || '',
                                        this.cssVars
                                    ], tabindex: 0, onMousedown: this.handleMenuMousedown, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown, onFocusin: this.handleMenuFocusin, onFocusout: this.handleMenuFocusout }),
                                    filteredTreeInfo.filteredTree.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_tree_src_Tree__WEBPACK_IMPORTED_MODULE_3__["default"], { ref: "treeInstRef", blockLine: true, animated: false, data: filteredTreeInfo.filteredTree, cancelable: multiple, labelField: this.labelField, theme: mergedTheme.peers.Tree, themeOverrides: mergedTheme.peerOverrides.Tree, defaultExpandAll: this.defaultExpandAll, defaultExpandedKeys: this.defaultExpandedKeys, expandedKeys: this.mergedExpandedKeys, checkedKeys: this.treeCheckedKeys, selectedKeys: this.treeSelectedKeys, checkable: checkable, checkStrategy: this.checkStrategy, cascade: this.mergedCascade, leafOnly: this.leafOnly, multiple: this.multiple, virtualScroll: this.consistentMenuWidth &&
                                            this.virtualScroll, internalDataTreeMate: this.dataTreeMate, internalDisplayTreeMate: this.displayTreeMate, internalHighlightKeySet: filteredTreeInfo.highlightKeySet, internalUnifySelectCheck: true, internalScrollable: true, internalScrollablePadding: this.menuPadding, internalFocusable: false, internalCheckboxFocusable: false, onUpdateCheckedKeys: this.handleUpdateCheckedKeys, onUpdateIndeterminateKeys: this.handleUpdateIndeterminateKeys, onUpdateExpandedKeys: this.doUpdateExpandedKeys })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-tree-select-menu__empty` }, $slots.empty ? ($slots.empty()) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_empty__WEBPACK_IMPORTED_MODULE_21__["default"], { theme: mergedTheme.peers.Empty, themeOverrides: mergedTheme.peerOverrides.Empty })))),
                                    $slots.action && ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-tree-select-menu__action`, "data-action": true }, {
                                        default: $slots.action
                                    })),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_22__["default"], { onFocus: this.handleTabOut })), [[vdirs__WEBPACK_IMPORTED_MODULE_23__["default"], this.handleMenuClickoutside]]);
                            }
                        }))
                    })
                ]
            })));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/tree-select/src/interface.js":
/*!***************************************************************!*\
  !*** ./node_modules/naive-ui/es/tree-select/src/interface.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "treeSelectInjectionKey": () => (/* binding */ treeSelectInjectionKey)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/create-injection-key.js");

const treeSelectInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-tree-select');


/***/ }),

/***/ "./node_modules/naive-ui/es/tree-select/src/styles/index.cssr.js":
/*!***********************************************************************!*\
  !*** ./node_modules/naive-ui/es/tree-select/src/styles/index.cssr.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_transitions_fade_in_scale_up_cssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_styles/transitions/fade-in-scale-up.cssr */ "./node_modules/naive-ui/es/_styles/transitions/fade-in-scale-up.cssr.js");
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_utils/cssr */ "./node_modules/naive-ui/es/_utils/cssr/index.js");

 // vars:
// --n-bezier
// --n-menu-height
// --n-menu-border-radius
// --n-menu-box-shadow
// --n-menu-color
// --n-action-padding
// --n-action-text-color
// --n-action-divider-color

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)([(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-select', `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-select-menu', `
 position: relative;
 overflow: hidden;
 margin: 4px 0;
 transition: box-shadow .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-menu-border-radius);
 box-shadow: var(--n-menu-box-shadow);
 background-color: var(--n-menu-color);
 outline: none;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree', 'max-height: var(--n-menu-height);'), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('empty', `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('action', `
 padding: var(--n-action-padding);
 transition: 
 color .3s var(--n-bezier);
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), (0,_styles_transitions_fade_in_scale_up_cssr__WEBPACK_IMPORTED_MODULE_1__["default"])()])]));

/***/ }),

/***/ "./node_modules/naive-ui/es/tree-select/src/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/naive-ui/es/tree-select/src/utils.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "treeOption2SelectOption": () => (/* binding */ treeOption2SelectOption),
/* harmony export */   "treeOption2SelectOptionWithPath": () => (/* binding */ treeOption2SelectOptionWithPath),
/* harmony export */   "filterTree": () => (/* binding */ filterTree)
/* harmony export */ });
function treeOption2SelectOption(tmNode, labelField) {
    const { rawNode } = tmNode;
    return Object.assign(Object.assign({}, rawNode), { label: rawNode[labelField], value: tmNode.key });
}
function treeOption2SelectOptionWithPath(tmNode, path, separator, labelField) {
    const { rawNode } = tmNode;
    return Object.assign(Object.assign({}, rawNode), { value: tmNode.key, label: path.map((v) => v.rawNode[labelField]).join(separator) });
}
function filterTree(tree, filter, pattern, keyField) {
    const visitedTailKeys = new Set();
    const visitedNonTailKeys = new Set();
    const highlightKeySet = new Set();
    const expandedKeys = [];
    const filteredTree = [];
    const path = [];
    function visit(t) {
        t.forEach((n) => {
            path.push(n);
            if (filter(pattern, n)) {
                visitedTailKeys.add(n[keyField]);
                highlightKeySet.add(n[keyField]);
                for (let i = path.length - 2; i >= 0; --i) {
                    const key = path[i][keyField];
                    if (!visitedNonTailKeys.has(key)) {
                        visitedNonTailKeys.add(key);
                        if (visitedTailKeys.has(key)) {
                            visitedTailKeys.delete(key);
                        }
                    }
                    else {
                        break;
                    }
                }
            }
            if (n.children) {
                visit(n.children);
            }
            path.pop();
        });
    }
    visit(tree);
    function build(t, sibs) {
        t.forEach((n) => {
            const key = n[keyField];
            const isVisitedTail = visitedTailKeys.has(key);
            const isVisitedNonTail = visitedNonTailKeys.has(key);
            if (!isVisitedTail && !isVisitedNonTail)
                return;
            const { children } = n;
            if (children) {
                if (isVisitedTail) {
                    // If it is visited path tail, use origin node
                    sibs.push(n);
                }
                else {
                    // It it is not visited path tail, use cloned node
                    expandedKeys.push(key);
                    const clonedNode = Object.assign(Object.assign({}, n), { children: [] });
                    sibs.push(clonedNode);
                    build(children, clonedNode.children);
                }
            }
            else {
                sibs.push(n);
            }
        });
    }
    build(tree, filteredTree);
    return {
        filteredTree,
        highlightKeySet,
        expandedKeys
    };
}


/***/ }),

/***/ "./node_modules/naive-ui/es/tree/src/MotionWrapper.js":
/*!************************************************************!*\
  !*** ./node_modules/naive-ui/es/tree/src/MotionWrapper.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! seemly */ "./node_modules/seemly/es/css/index.js");
/* harmony import */ var _internal_fade_in_expand_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_internal/fade-in-expand-transition */ "./node_modules/naive-ui/es/_internal/fade-in-expand-transition/src/FadeInExpandTransition.js");
/* harmony import */ var _TreeNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TreeNode */ "./node_modules/naive-ui/es/tree/src/TreeNode.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'TreeMotionWrapper',
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        height: Number,
        nodes: {
            type: Array,
            required: true
        },
        mode: {
            type: String,
            required: true
        },
        onAfterEnter: {
            type: Function,
            required: true
        }
    },
    render() {
        const { clsPrefix } = this;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal_fade_in_expand_transition__WEBPACK_IMPORTED_MODULE_1__["default"], { onAfterEnter: this.onAfterEnter, appear: true, reverse: this.mode === 'collapse' }, {
            default: () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: [
                    `${clsPrefix}-tree-motion-wrapper`,
                    `${clsPrefix}-tree-motion-wrapper--${this.mode}`
                ], style: {
                    height: (0,seemly__WEBPACK_IMPORTED_MODULE_2__.pxfy)(this.height)
                } }, this.nodes.map((node) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_TreeNode__WEBPACK_IMPORTED_MODULE_3__["default"], { clsPrefix: clsPrefix, tmNode: node })))))
        }));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/tree/src/Tree.js":
/*!***************************************************!*\
  !*** ./node_modules/naive-ui/es/tree/src/Tree.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTreeMateOptions": () => (/* binding */ createTreeMateOptions),
/* harmony export */   "treeSharedProps": () => (/* binding */ treeSharedProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var treemate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! treemate */ "./node_modules/treemate/es/create.js");
/* harmony import */ var treemate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! treemate */ "./node_modules/treemate/es/flatten.js");
/* harmony import */ var treemate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! treemate */ "./node_modules/treemate/es/utils.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/use-merged-state.js");
/* harmony import */ var vueuc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vueuc */ "./node_modules/vueuc/es/virtual-list/src/VirtualList.js");
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! seemly */ "./node_modules/seemly/es/css/index.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-theme.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/naive/warn.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/call.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/create-data-key.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../_internal */ "./node_modules/naive-ui/es/_internal/scrollbar/src/ScrollBar.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles */ "./node_modules/naive-ui/es/tree/styles/light.js");
/* harmony import */ var _TreeNode__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./TreeNode */ "./node_modules/naive-ui/es/tree/src/TreeNode.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/naive-ui/es/tree/src/utils.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./keyboard */ "./node_modules/naive-ui/es/tree/src/keyboard.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./interface */ "./node_modules/naive-ui/es/tree/src/interface.js");
/* harmony import */ var _MotionWrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./MotionWrapper */ "./node_modules/naive-ui/es/tree/src/MotionWrapper.js");
/* harmony import */ var _dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dnd */ "./node_modules/naive-ui/es/tree/src/dnd.js");
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/index.cssr */ "./node_modules/naive-ui/es/tree/src/styles/index.cssr.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable @typescript-eslint/no-non-null-assertion */
















// TODO:
// During expanding, some node are mis-applied with :active style
// Async dnd has bug
const ITEM_SIZE = 30; // 24 + 3 + 3
function createTreeMateOptions(keyField, childrenField) {
    return {
        getKey(node) {
            return node[keyField];
        },
        getChildren(node) {
            return node[childrenField];
        },
        getDisabled(node) {
            return !!(node.disabled || node.checkboxDisabled);
        }
    };
}
const treeSharedProps = {
    filter: Function,
    defaultExpandAll: Boolean,
    expandedKeys: Array,
    keyField: {
        type: String,
        default: 'key'
    },
    labelField: {
        type: String,
        default: 'label'
    },
    childrenField: {
        type: String,
        default: 'children'
    },
    defaultExpandedKeys: {
        type: Array,
        default: () => []
    },
    indeterminateKeys: Array,
    onUpdateIndeterminateKeys: [Function, Array],
    'onUpdate:indeterminateKeys': [Function, Array],
    onUpdateExpandedKeys: [Function, Array],
    'onUpdate:expandedKeys': [Function, Array]
};
const treeProps = Object.assign(Object.assign(Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), { data: {
        type: Array,
        default: () => []
    }, expandOnDragenter: {
        type: Boolean,
        default: true
    }, cancelable: {
        type: Boolean,
        default: true
    }, checkable: Boolean, draggable: Boolean, blockNode: Boolean, blockLine: Boolean, disabled: Boolean, checkedKeys: Array, defaultCheckedKeys: {
        type: Array,
        default: () => []
    }, selectedKeys: Array, defaultSelectedKeys: {
        type: Array,
        default: () => []
    }, remote: Boolean, leafOnly: Boolean, multiple: Boolean, pattern: {
        type: String,
        default: ''
    }, onLoad: Function, cascade: Boolean, selectable: {
        type: Boolean,
        default: true
    }, indent: {
        type: Number,
        default: 16
    }, allowDrop: {
        type: Function,
        default: _dnd__WEBPACK_IMPORTED_MODULE_2__.defaultAllowDrop
    }, animated: {
        type: Boolean,
        default: true
    }, virtualScroll: Boolean, watchProps: Array, renderLabel: Function, renderPrefix: Function, renderSuffix: Function, renderSwitcherIcon: Function, nodeProps: Function, onDragenter: [Function, Array], onDragleave: [Function, Array], onDragend: [Function, Array], onDragstart: [Function, Array], onDragover: [Function, Array], onDrop: [Function, Array], onUpdateCheckedKeys: [Function, Array], 'onUpdate:checkedKeys': [Function, Array], onUpdateSelectedKeys: [Function, Array], 'onUpdate:selectedKeys': [Function, Array] }), treeSharedProps), { 
    // internal props for tree-select
    internalScrollable: Boolean, internalScrollablePadding: String, 
    // use it to do check
    internalDataTreeMate: Object, 
    // use it to display
    internalDisplayTreeMate: Object, internalHighlightKeySet: Object, internalUnifySelectCheck: Boolean, internalHideFilteredNode: Boolean, internalCheckboxFocusable: {
        type: Boolean,
        default: true
    }, internalFocusable: {
        // Make tree-select take over keyboard operations
        type: Boolean,
        default: true
    }, checkStrategy: {
        type: String,
        default: 'all'
    } });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Tree',
    props: treeProps,
    setup(props) {
        const { mergedClsPrefixRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_3__["default"])(props);
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('Tree', '-tree', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_4__["default"], _styles__WEBPACK_IMPORTED_MODULE_5__["default"], props, mergedClsPrefixRef);
        const selfElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const scrollbarInstRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const virtualListInstRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        function getScrollContainer() {
            var _a;
            return (_a = virtualListInstRef.value) === null || _a === void 0 ? void 0 : _a.listElRef;
        }
        function getScrollContent() {
            var _a;
            return (_a = virtualListInstRef.value) === null || _a === void 0 ? void 0 : _a.itemsElRef;
        }
        // We don't expect data source to change so we just determine it once
        const displayTreeMateRef = props.internalDisplayTreeMate
            ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'internalDisplayTreeMate')
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (0,treemate__WEBPACK_IMPORTED_MODULE_6__.createTreeMate)(props.data, createTreeMateOptions(props.keyField, props.childrenField)));
        const dataTreeMateRef = props.internalDataTreeMate
            ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'internalDataTreeMate')
            : displayTreeMateRef;
        const { watchProps } = props;
        const uncontrolledCheckedKeysRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes('defaultCheckedKeys')) {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
                uncontrolledCheckedKeysRef.value = props.defaultCheckedKeys;
            });
        }
        else {
            uncontrolledCheckedKeysRef.value = props.defaultCheckedKeys;
        }
        const controlledCheckedKeysRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'checkedKeys');
        const mergedCheckedKeysRef = (0,vooks__WEBPACK_IMPORTED_MODULE_7__["default"])(controlledCheckedKeysRef, uncontrolledCheckedKeysRef);
        const checkedStatusRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const value = dataTreeMateRef.value.getCheckedKeys(mergedCheckedKeysRef.value, {
                cascade: props.cascade
            });
            return value;
        });
        const mergedCheckStrategyRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.leafOnly ? 'child' : props.checkStrategy);
        const displayedCheckedKeysRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return checkedStatusRef.value.checkedKeys;
        });
        const displayedIndeterminateKeysRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { indeterminateKeys } = props;
            if (indeterminateKeys !== undefined)
                return indeterminateKeys;
            return checkedStatusRef.value.indeterminateKeys;
        });
        const uncontrolledSelectedKeysRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes('defaultSelectedKeys')) {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
                uncontrolledSelectedKeysRef.value = props.defaultSelectedKeys;
            });
        }
        else {
            uncontrolledSelectedKeysRef.value = props.defaultSelectedKeys;
        }
        const controlledSelectedKeysRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'selectedKeys');
        const mergedSelectedKeysRef = (0,vooks__WEBPACK_IMPORTED_MODULE_7__["default"])(controlledSelectedKeysRef, uncontrolledSelectedKeysRef);
        const uncontrolledExpandedKeysRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const initUncontrolledExpandedKeys = (keys) => {
            uncontrolledExpandedKeysRef.value = props.defaultExpandAll
                ? dataTreeMateRef.value.getNonLeafKeys()
                : keys === undefined
                    ? props.defaultExpandedKeys
                    : keys;
        };
        if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes('defaultExpandedKeys')) {
            // if watching defaultExpandedKeys, we use access props.defaultExpandedKeys inside initiator
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => initUncontrolledExpandedKeys(undefined));
        }
        else {
            // We by default watchEffect since if defaultExpandAll is true, we should remain tree expand if data changes
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => initUncontrolledExpandedKeys(props.defaultExpandedKeys));
        }
        const controlledExpandedKeysRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'expandedKeys');
        const mergedExpandedKeysRef = (0,vooks__WEBPACK_IMPORTED_MODULE_7__["default"])(controlledExpandedKeysRef, uncontrolledExpandedKeysRef);
        const fNodesRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => displayTreeMateRef.value.getFlattenedNodes(mergedExpandedKeysRef.value));
        const { pendingNodeKeyRef, handleKeyup, handleKeydown } = (0,_keyboard__WEBPACK_IMPORTED_MODULE_8__.useKeyboard)({
            mergedSelectedKeysRef,
            fNodesRef,
            mergedExpandedKeysRef,
            handleSelect,
            handleSwitcherClick
        });
        let expandTimerId = null;
        let nodeKeyToBeExpanded = null;
        const uncontrolledHighlightKeySetRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(new Set());
        const controlledHighlightKeySetRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'internalHighlightKeySet');
        const mergedHighlightKeySetRef = (0,vooks__WEBPACK_IMPORTED_MODULE_7__["default"])(controlledHighlightKeySetRef, uncontrolledHighlightKeySetRef);
        const loadingKeysRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(new Set());
        const expandedNonLoadingKeysRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return mergedExpandedKeysRef.value.filter((key) => !loadingKeysRef.value.has(key));
        });
        let dragStartX = 0;
        const draggingNodeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const droppingNodeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const droppingMouseNodeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const droppingPositionRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const droppingOffsetLevelRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const droppingNodeParentRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: droppingNode } = droppingNodeRef;
            if (!droppingNode)
                return null;
            // May avoid overlap between line mark of first child & rect mark of parent
            // if (droppingNode.isFirstChild && droppingPositionRef.value === 'before') {
            //   return null
            // }
            return droppingNode.parent;
        });
        const mergedFilterRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { filter } = props;
            if (filter)
                return filter;
            const { labelField } = props;
            return (pattern, node) => {
                if (!pattern.length)
                    return true;
                return node[labelField]
                    .toLowerCase()
                    .includes(pattern.toLowerCase());
            };
        });
        // shallow watch data
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'data'), () => {
            loadingKeysRef.value.clear();
            pendingNodeKeyRef.value = null;
            resetDndState();
        }, {
            deep: false
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'pattern'), (value) => {
            if (value) {
                const { expandedKeys: expandedKeysAfterChange, highlightKeySet } = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.keysWithFilter)(props.data, props.pattern, props.keyField, props.childrenField, mergedFilterRef.value);
                uncontrolledHighlightKeySetRef.value = highlightKeySet;
                doUpdateExpandedKeys(expandedKeysAfterChange, getOptionsByKeys(expandedKeysAfterChange));
            }
            else {
                uncontrolledHighlightKeySetRef.value = new Set();
            }
        });
        function triggerLoading(node) {
            return __awaiter(this, void 0, void 0, function* () {
                const { onLoad } = props;
                if (!onLoad) {
                    if (true) {
                        (0,_utils__WEBPACK_IMPORTED_MODULE_10__.warn)('tree', 'There is unloaded node in data but props.onLoad is not specified.');
                    }
                    return yield Promise.resolve();
                }
                const { value: loadingKeys } = loadingKeysRef;
                return yield new Promise((resolve) => {
                    if (!loadingKeys.has(node.key)) {
                        loadingKeys.add(node.key);
                        onLoad(node.rawNode)
                            .then(() => {
                            loadingKeys.delete(node.key);
                            resolve();
                        })
                            .catch((loadError) => {
                            console.error(loadError);
                            resetDragExpandState();
                        });
                    }
                });
            });
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
            var _a;
            const { value: displayTreeMate } = displayTreeMateRef;
            if (!displayTreeMate)
                return;
            const { getNode } = displayTreeMate;
            (_a = mergedExpandedKeysRef.value) === null || _a === void 0 ? void 0 : _a.forEach((key) => {
                const node = getNode(key);
                if (node && !node.shallowLoaded) {
                    void triggerLoading(node);
                }
            });
        });
        // animation in progress
        const aipRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        // animation flattened nodes
        const afNodeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        // Note: Since the virtual list depends on min height, if there's a node
        // whose height starts from 0, the virtual list will have a wrong height
        // during animation. This will seldom cause wired scrollbar status. It is
        // fixable and need some changes in vueuc, I've no time so I just leave it
        // here. Maybe the bug won't be fixed during the life time of the project.
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(expandedNonLoadingKeysRef, (value, prevValue) => {
            if (!props.animated) {
                void (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(syncScrollbar);
                return;
            }
            const prevVSet = new Set(prevValue);
            let addedKey = null;
            let removedKey = null;
            for (const expandedKey of value) {
                if (!prevVSet.has(expandedKey)) {
                    if (addedKey !== null)
                        return; // multi expand, not triggered by click
                    addedKey = expandedKey;
                }
            }
            const currentVSet = new Set(value);
            for (const expandedKey of prevValue) {
                if (!currentVSet.has(expandedKey)) {
                    if (removedKey !== null)
                        return; // multi collapse, not triggered by click
                    removedKey = expandedKey;
                }
            }
            if ((addedKey !== null && removedKey !== null) ||
                (addedKey === null && removedKey === null)) {
                // 1. multi action, not triggered by click
                // 2. no action, don't know what happened
                return;
            }
            const { virtualScroll } = props;
            const viewportHeight = (virtualScroll ? virtualListInstRef.value.listElRef : selfElRef.value).offsetHeight;
            const viewportItemCount = Math.ceil(viewportHeight / ITEM_SIZE) + 1;
            if (addedKey !== null) {
                // play add animation
                aipRef.value = true;
                afNodeRef.value = displayTreeMateRef.value.getFlattenedNodes(prevValue);
                const expandedNodeIndex = afNodeRef.value.findIndex((node) => node.key === addedKey);
                if (~expandedNodeIndex) {
                    const expandedChildren = (0,treemate__WEBPACK_IMPORTED_MODULE_11__.flatten)(
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    afNodeRef.value[expandedNodeIndex].children, value);
                    afNodeRef.value.splice(expandedNodeIndex + 1, 0, {
                        __motion: true,
                        mode: 'expand',
                        height: virtualScroll
                            ? expandedChildren.length * ITEM_SIZE
                            : undefined,
                        nodes: virtualScroll
                            ? expandedChildren.slice(0, viewportItemCount)
                            : expandedChildren
                    });
                }
            }
            if (removedKey !== null) {
                // play remove animation
                aipRef.value = true;
                afNodeRef.value = displayTreeMateRef.value.getFlattenedNodes(value);
                const collapsedNodeIndex = afNodeRef.value.findIndex((node) => node.key === removedKey);
                if (~collapsedNodeIndex) {
                    const collapsedChildren = (0,treemate__WEBPACK_IMPORTED_MODULE_11__.flatten)(
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    afNodeRef.value[collapsedNodeIndex].children, value);
                    afNodeRef.value.splice(collapsedNodeIndex + 1, 0, {
                        __motion: true,
                        mode: 'collapse',
                        height: virtualScroll
                            ? collapsedChildren.length * ITEM_SIZE
                            : undefined,
                        nodes: virtualScroll
                            ? collapsedChildren.slice(0, viewportItemCount)
                            : collapsedChildren
                    });
                }
            }
        });
        const getFIndexRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return (0,treemate__WEBPACK_IMPORTED_MODULE_12__.createIndexGetter)(fNodesRef.value);
        });
        const mergedFNodesRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            if (aipRef.value)
                return afNodeRef.value;
            else
                return fNodesRef.value;
        });
        function syncScrollbar() {
            const { value: scrollbarInst } = scrollbarInstRef;
            if (scrollbarInst)
                scrollbarInst.sync();
        }
        function handleAfterEnter() {
            aipRef.value = false;
            if (props.virtualScroll) {
                // If virtual scroll, we won't listen to resize during animation, so
                // resize callback of virtual list won't be called and as a result
                // scrollbar won't sync. We need to sync scrollbar manually.
                void (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(syncScrollbar);
            }
        }
        function getOptionsByKeys(keys) {
            const { getNode } = dataTreeMateRef.value;
            return keys.map((key) => { var _a; return ((_a = getNode(key)) === null || _a === void 0 ? void 0 : _a.rawNode) || null; });
        }
        function doUpdateExpandedKeys(value, option) {
            const { 'onUpdate:expandedKeys': _onUpdateExpandedKeys, onUpdateExpandedKeys } = props;
            uncontrolledExpandedKeysRef.value = value;
            if (_onUpdateExpandedKeys) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.call)(_onUpdateExpandedKeys, value, option);
            }
            if (onUpdateExpandedKeys) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.call)(onUpdateExpandedKeys, value, option);
            }
        }
        function doUpdateCheckedKeys(value, option) {
            const { 'onUpdate:checkedKeys': _onUpdateCheckedKeys, onUpdateCheckedKeys } = props;
            uncontrolledCheckedKeysRef.value = value;
            if (onUpdateCheckedKeys) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.call)(onUpdateCheckedKeys, value, option);
            }
            if (_onUpdateCheckedKeys) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.call)(_onUpdateCheckedKeys, value, option);
            }
        }
        function doUpdateIndeterminateKeys(value, option) {
            const { 'onUpdate:indeterminateKeys': _onUpdateIndeterminateKeys, onUpdateIndeterminateKeys } = props;
            if (_onUpdateIndeterminateKeys) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.call)(_onUpdateIndeterminateKeys, value, option);
            }
            if (onUpdateIndeterminateKeys) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.call)(onUpdateIndeterminateKeys, value, option);
            }
        }
        function doUpdateSelectedKeys(value, option) {
            const { 'onUpdate:selectedKeys': _onUpdateSelectedKeys, onUpdateSelectedKeys } = props;
            uncontrolledSelectedKeysRef.value = value;
            if (onUpdateSelectedKeys) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.call)(onUpdateSelectedKeys, value, option);
            }
            if (_onUpdateSelectedKeys) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.call)(_onUpdateSelectedKeys, value, option);
            }
        }
        // Drag & Drop
        function doDragEnter(info) {
            const { onDragenter } = props;
            if (onDragenter)
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.call)(onDragenter, info);
        }
        function doDragLeave(info) {
            const { onDragleave } = props;
            if (onDragleave)
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.call)(onDragleave, info);
        }
        function doDragEnd(info) {
            const { onDragend } = props;
            if (onDragend)
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.call)(onDragend, info);
        }
        function doDragStart(info) {
            const { onDragstart } = props;
            if (onDragstart)
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.call)(onDragstart, info);
        }
        function doDragOver(info) {
            const { onDragover } = props;
            if (onDragover)
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.call)(onDragover, info);
        }
        function doDrop(info) {
            const { onDrop } = props;
            if (onDrop)
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.call)(onDrop, info);
        }
        function resetDndState() {
            resetDragState();
            resetDropState();
        }
        function resetDragState() {
            draggingNodeRef.value = null;
        }
        function resetDropState() {
            droppingOffsetLevelRef.value = 0;
            droppingNodeRef.value = null;
            droppingMouseNodeRef.value = null;
            droppingPositionRef.value = null;
            resetDragExpandState();
        }
        function resetDragExpandState() {
            if (expandTimerId) {
                window.clearTimeout(expandTimerId);
                expandTimerId = null;
            }
            nodeKeyToBeExpanded = null;
        }
        function handleCheck(node, checked) {
            // We don't guard for leaf only since we have done it in view layer
            if (props.disabled || node.disabled) {
                return;
            }
            if (props.internalUnifySelectCheck && !props.multiple) {
                handleSelect(node);
                return;
            }
            const { checkedKeys, indeterminateKeys } = dataTreeMateRef.value[checked ? 'check' : 'uncheck'](node.key, displayedCheckedKeysRef.value, {
                cascade: props.cascade,
                checkStrategy: mergedCheckStrategyRef.value
            });
            doUpdateCheckedKeys(checkedKeys, getOptionsByKeys(checkedKeys));
            doUpdateIndeterminateKeys(indeterminateKeys, getOptionsByKeys(indeterminateKeys));
        }
        function toggleExpand(key) {
            if (props.disabled)
                return;
            const { value: mergedExpandedKeys } = mergedExpandedKeysRef;
            const index = mergedExpandedKeys.findIndex((expandNodeId) => expandNodeId === key);
            if (~index) {
                const expandedKeysAfterChange = Array.from(mergedExpandedKeys);
                expandedKeysAfterChange.splice(index, 1);
                doUpdateExpandedKeys(expandedKeysAfterChange, getOptionsByKeys(expandedKeysAfterChange));
            }
            else {
                const nodeToBeExpanded = displayTreeMateRef.value.getNode(key);
                if (!nodeToBeExpanded || nodeToBeExpanded.isLeaf) {
                    return;
                }
                const nextKeys = mergedExpandedKeys.concat(key);
                doUpdateExpandedKeys(nextKeys, getOptionsByKeys(nextKeys));
            }
        }
        function handleSwitcherClick(node) {
            if (props.disabled || aipRef.value)
                return;
            toggleExpand(node.key);
        }
        function handleSelect(node) {
            if (props.disabled ||
                node.disabled ||
                !props.selectable ||
                (mergedCheckStrategyRef.value === 'child' && !node.isLeaf)) {
                return;
            }
            pendingNodeKeyRef.value = node.key;
            if (props.internalUnifySelectCheck) {
                const { value: { checkedKeys, indeterminateKeys } } = checkedStatusRef;
                if (props.multiple) {
                    handleCheck(node, !(checkedKeys.includes(node.key) ||
                        indeterminateKeys.includes(node.key)));
                }
                else {
                    doUpdateCheckedKeys([node.key], getOptionsByKeys([node.key]));
                }
            }
            if (props.multiple) {
                const selectedKeys = Array.from(mergedSelectedKeysRef.value);
                const index = selectedKeys.findIndex((key) => key === node.key);
                if (~index) {
                    if (props.cancelable) {
                        selectedKeys.splice(index, 1);
                    }
                }
                else if (!~index) {
                    selectedKeys.push(node.key);
                }
                doUpdateSelectedKeys(selectedKeys, getOptionsByKeys(selectedKeys));
            }
            else {
                const selectedKeys = mergedSelectedKeysRef.value;
                if (selectedKeys.includes(node.key)) {
                    if (props.cancelable) {
                        doUpdateSelectedKeys([], []);
                    }
                }
                else {
                    doUpdateSelectedKeys([node.key], getOptionsByKeys([node.key]));
                }
            }
        }
        function expandDragEnterNode(node) {
            if (expandTimerId) {
                window.clearTimeout(expandTimerId);
                expandTimerId = null;
            }
            // Don't expand leaf node.
            if (node.isLeaf)
                return;
            nodeKeyToBeExpanded = node.key;
            const expand = () => {
                if (nodeKeyToBeExpanded !== node.key)
                    return;
                const { value: droppingMouseNode } = droppingMouseNodeRef;
                if (droppingMouseNode &&
                    droppingMouseNode.key === node.key &&
                    !mergedExpandedKeysRef.value.includes(node.key)) {
                    const nextKeys = mergedExpandedKeysRef.value.concat(node.key);
                    doUpdateExpandedKeys(nextKeys, getOptionsByKeys(nextKeys));
                }
                expandTimerId = null;
                nodeKeyToBeExpanded = null;
            };
            if (!node.shallowLoaded) {
                expandTimerId = window.setTimeout(() => {
                    void triggerLoading(node).then(() => {
                        expand();
                    });
                }, 1000);
            }
            else {
                expandTimerId = window.setTimeout(() => {
                    expand();
                }, 1000);
            }
        }
        // Dnd
        function handleDragEnter({ event, node }) {
            // node should be a tmNode
            if (!props.draggable || props.disabled || node.disabled)
                return;
            handleDragOver({ event, node }, false);
            doDragEnter({ event, node: node.rawNode });
        }
        function handleDragLeave({ event, node }) {
            if (!props.draggable || props.disabled || node.disabled)
                return;
            doDragLeave({ event, node: node.rawNode });
        }
        function handleDragLeaveTree(e) {
            if (e.target !== e.currentTarget)
                return;
            resetDropState();
        }
        // Dragend is ok, we don't need to add global listener to reset drag status
        function handleDragEnd({ event, node }) {
            resetDndState();
            if (!props.draggable || props.disabled || node.disabled)
                return;
            doDragEnd({ event, node: node.rawNode });
        }
        function handleDragStart({ event, node }) {
            var _a;
            if (!props.draggable || props.disabled || node.disabled)
                return;
            // Most of time, the image will block user's view
            _utils__WEBPACK_IMPORTED_MODULE_9__.emptyImage && ((_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setDragImage(_utils__WEBPACK_IMPORTED_MODULE_9__.emptyImage, 0, 0));
            dragStartX = event.clientX;
            draggingNodeRef.value = node;
            doDragStart({ event, node: node.rawNode });
        }
        function handleDragOver({ event, node }, emit = true) {
            var _a;
            if (!props.draggable || props.disabled || node.disabled)
                return;
            const { value: draggingNode } = draggingNodeRef;
            if (!draggingNode)
                return;
            const { allowDrop, indent } = props;
            if (emit)
                doDragOver({ event, node: node.rawNode });
            // Update dropping node
            const el = event.currentTarget;
            const { height: elOffsetHeight, top: elClientTop } = el.getBoundingClientRect();
            const eventOffsetY = event.clientY - elClientTop;
            let mousePosition;
            const allowDropInside = allowDrop({
                node: node.rawNode,
                dropPosition: 'inside',
                phase: 'drag'
            });
            if (allowDropInside) {
                if (eventOffsetY <= 8) {
                    mousePosition = 'before';
                }
                else if (eventOffsetY >= elOffsetHeight - 8) {
                    mousePosition = 'after';
                }
                else {
                    mousePosition = 'inside';
                }
            }
            else {
                if (eventOffsetY <= elOffsetHeight / 2) {
                    mousePosition = 'before';
                }
                else {
                    mousePosition = 'after';
                }
            }
            const { value: getFindex } = getFIndexRef;
            /** determine the drop position and drop node */
            /** the dropping node needn't to be the mouse hovering node! */
            /**
             * if there is something i've learned from implementing a complex
             * drag & drop. that is never write unit test before you really figure
             * out what behavior is exactly you want.
             */
            let finalDropNode;
            let finalDropPosition;
            const hoverNodeFIndex = getFindex(node.key);
            if (hoverNodeFIndex === null) {
                resetDropState();
                return;
            }
            let mouseAtExpandedNonLeafNode = false;
            if (mousePosition === 'inside') {
                finalDropNode = node;
                finalDropPosition = 'inside';
            }
            else {
                if (mousePosition === 'before') {
                    if (node.isFirstChild) {
                        finalDropNode = node;
                        finalDropPosition = 'before';
                    }
                    else {
                        finalDropNode = fNodesRef.value[hoverNodeFIndex - 1];
                        finalDropPosition = 'after';
                    }
                }
                else {
                    finalDropNode = node;
                    finalDropPosition = 'after';
                }
            }
            // If the node is non-leaf and it is expanded, we don't allow it to
            // drop after it and change it to drop before its next view sibling
            if (!finalDropNode.isLeaf &&
                mergedExpandedKeysRef.value.includes(finalDropNode.key)) {
                mouseAtExpandedNonLeafNode = true;
                if (finalDropPosition === 'after') {
                    finalDropNode = fNodesRef.value[hoverNodeFIndex + 1];
                    if (!finalDropNode) {
                        // maybe there is no next view sibling when non-leaf node has no
                        // children and it is the last node in the tree
                        finalDropNode = node;
                        finalDropPosition = 'inside';
                    }
                    else {
                        finalDropPosition = 'before';
                    }
                }
            }
            const droppingMouseNode = finalDropNode;
            droppingMouseNodeRef.value = droppingMouseNode;
            // This is a speacial case, user is dragging a last child itself, so we
            // only view it as they are trying to drop after it.
            // There are some relevant codes in bailout 1's child branch.
            // Also, the expand bailout should have a high priority. If it's non-leaf
            // node and expanded, keep its origin drop position
            if (!mouseAtExpandedNonLeafNode &&
                draggingNode.isLastChild &&
                draggingNode.key === finalDropNode.key) {
                finalDropPosition = 'after';
            }
            if (finalDropPosition === 'after') {
                let offset = dragStartX - event.clientX; // drag left => > 0
                let offsetLevel = 0;
                while (offset >= indent / 2 && // divide by 2 to make it easier to trigger
                    finalDropNode.parent !== null &&
                    finalDropNode.isLastChild &&
                    offsetLevel < 1) {
                    offset -= indent;
                    offsetLevel += 1;
                    finalDropNode = finalDropNode.parent;
                }
                droppingOffsetLevelRef.value = offsetLevel;
            }
            else {
                droppingOffsetLevelRef.value = 0;
            }
            // Bailout 1
            // Drag self into self
            // Drag it into direct parent
            if (draggingNode.contains(finalDropNode) ||
                (finalDropPosition === 'inside' &&
                    ((_a = draggingNode.parent) === null || _a === void 0 ? void 0 : _a.key) === finalDropNode.key)) {
                if (draggingNode.key === droppingMouseNode.key &&
                    draggingNode.key === finalDropNode.key) {
                    // This is special case that we want ui to show a mark to guide user
                    // to start dragging. Nor they will think nothing happens.
                    // However this is an invalid drop, we need to guard it inside
                    // handleDrop
                }
                else {
                    resetDropState();
                    return;
                }
            }
            // Bailout 3
            if (!allowDrop({
                node: finalDropNode.rawNode,
                dropPosition: finalDropPosition,
                phase: 'drag'
            })) {
                resetDropState();
                return;
            }
            if (draggingNode.key === finalDropNode.key) {
                // don't expand when drag on itself
                resetDragExpandState();
            }
            else {
                if (nodeKeyToBeExpanded !== finalDropNode.key) {
                    if (finalDropPosition === 'inside') {
                        if (props.expandOnDragenter) {
                            expandDragEnterNode(finalDropNode);
                            // Bailout 4
                            // not try to loading
                            if (!finalDropNode.shallowLoaded &&
                                nodeKeyToBeExpanded !== finalDropNode.key) {
                                resetDndState();
                                return;
                            }
                        }
                        else {
                            // Bailout 5
                            // never expands on drag
                            if (!finalDropNode.shallowLoaded) {
                                resetDndState();
                                return;
                            }
                        }
                    }
                    else {
                        resetDragExpandState();
                    }
                }
                else {
                    if (finalDropPosition !== 'inside') {
                        resetDragExpandState();
                    }
                }
            }
            droppingPositionRef.value = finalDropPosition;
            droppingNodeRef.value = finalDropNode;
        }
        function handleDrop({ event, node, dropPosition }) {
            if (!props.draggable || props.disabled || node.disabled) {
                return;
            }
            const { value: draggingNode } = draggingNodeRef;
            const { value: droppingNode } = droppingNodeRef;
            const { value: droppingPosition } = droppingPositionRef;
            if (!draggingNode || !droppingNode || !droppingPosition) {
                return;
            }
            // Bailout 1
            if (!props.allowDrop({
                node: droppingNode.rawNode,
                dropPosition: droppingPosition,
                phase: 'drag'
            })) {
                return;
            }
            // Bailout 2
            // This is a special case to guard since we want ui to show the status
            // but not to emit a event
            if (draggingNode.key === droppingNode.key) {
                return;
            }
            // Bailout 3
            // insert before its next node
            // insert after its prev node
            if (droppingPosition === 'before') {
                const nextNode = draggingNode.getNext({ includeDisabled: true });
                if (nextNode) {
                    if (nextNode.key === droppingNode.key) {
                        resetDropState();
                        return;
                    }
                }
            }
            if (droppingPosition === 'after') {
                const prevNode = draggingNode.getPrev({ includeDisabled: true });
                if (prevNode) {
                    if (prevNode.key === droppingNode.key) {
                        resetDropState();
                        return;
                    }
                }
            }
            doDrop({
                event,
                node: droppingNode.rawNode,
                dragNode: draggingNode.rawNode,
                dropPosition
            });
            resetDndState();
        }
        function handleScroll() {
            syncScrollbar();
        }
        function handleResize() {
            syncScrollbar();
        }
        function handleFocusout(e) {
            var _a;
            if (props.virtualScroll || props.internalScrollable) {
                const { value: scrollbarInst } = scrollbarInstRef;
                if ((_a = scrollbarInst === null || scrollbarInst === void 0 ? void 0 : scrollbarInst.containerRef) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget)) {
                    return;
                }
                pendingNodeKeyRef.value = null;
            }
            else {
                const { value: selfEl } = selfElRef;
                if (selfEl === null || selfEl === void 0 ? void 0 : selfEl.contains(e.relatedTarget))
                    return;
                pendingNodeKeyRef.value = null;
            }
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(pendingNodeKeyRef, (value) => {
            var _a, _b;
            if (value === null)
                return;
            if (props.virtualScroll) {
                (_a = virtualListInstRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo({ key: value });
            }
            else if (props.internalScrollable) {
                const { value: scrollbarInst } = scrollbarInstRef;
                if (scrollbarInst === null)
                    return;
                const targetEl = (_b = scrollbarInst.contentRef) === null || _b === void 0 ? void 0 : _b.querySelector(`[data-key="${(0,_utils__WEBPACK_IMPORTED_MODULE_14__.createDataKey)(value)}"]`);
                if (!targetEl)
                    return;
                scrollbarInst.scrollTo({
                    el: targetEl
                });
            }
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_interface__WEBPACK_IMPORTED_MODULE_15__.treeInjectionKey, {
            loadingKeysRef,
            highlightKeySetRef: mergedHighlightKeySetRef,
            displayedCheckedKeysRef,
            displayedIndeterminateKeysRef,
            mergedSelectedKeysRef,
            mergedExpandedKeysRef,
            mergedThemeRef: themeRef,
            mergedCheckStrategyRef,
            nodePropsRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'nodeProps'),
            disabledRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'disabled'),
            checkableRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'checkable'),
            selectableRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'selectable'),
            remoteRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'remote'),
            onLoadRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'onLoad'),
            draggableRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'draggable'),
            blockLineRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'blockLine'),
            indentRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'indent'),
            cascadeRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'cascade'),
            droppingMouseNodeRef,
            droppingNodeParentRef,
            draggingNodeRef,
            droppingPositionRef,
            droppingOffsetLevelRef,
            fNodesRef,
            pendingNodeKeyRef,
            internalScrollableRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'internalScrollable'),
            internalCheckboxFocusableRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'internalCheckboxFocusable'),
            renderLabelRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'renderLabel'),
            renderPrefixRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'renderPrefix'),
            renderSuffixRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'renderSuffix'),
            renderSwitcherIconRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'renderSwitcherIcon'),
            labelFieldRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'labelField'),
            handleSwitcherClick,
            handleDragEnd,
            handleDragEnter,
            handleDragLeave,
            handleDragStart,
            handleDrop,
            handleDragOver,
            handleSelect,
            handleCheck
        });
        const exposedMethods = {
            handleKeydown,
            handleKeyup
        };
        return Object.assign({ mergedClsPrefix: mergedClsPrefixRef, mergedTheme: themeRef, fNodes: mergedFNodesRef, aip: aipRef, selfElRef,
            virtualListInstRef,
            scrollbarInstRef,
            handleFocusout,
            handleDragLeaveTree,
            handleScroll,
            getScrollContainer,
            getScrollContent,
            handleAfterEnter,
            handleResize, cssVars: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                const { common: { cubicBezierEaseInOut }, self: { fontSize, nodeBorderRadius, nodeColorHover, nodeColorPressed, nodeColorActive, arrowColor, loadingColor, nodeTextColor, nodeTextColorDisabled, dropMarkColor } } = themeRef.value;
                return {
                    '--n-arrow-color': arrowColor,
                    '--n-loading-color': loadingColor,
                    '--n-bezier': cubicBezierEaseInOut,
                    '--n-font-size': fontSize,
                    '--n-node-border-radius': nodeBorderRadius,
                    '--n-node-color-active': nodeColorActive,
                    '--n-node-color-hover': nodeColorHover,
                    '--n-node-color-pressed': nodeColorPressed,
                    '--n-node-text-color': nodeTextColor,
                    '--n-node-text-color-disabled': nodeTextColorDisabled,
                    '--n-drop-mark-color': dropMarkColor
                };
            }) }, exposedMethods);
    },
    render() {
        const { mergedClsPrefix, blockNode, blockLine, draggable, disabled, internalFocusable, checkable, handleKeyup, handleKeydown, handleFocusout } = this;
        const mergedFocusable = internalFocusable && !disabled;
        const tabindex = mergedFocusable ? '0' : undefined;
        const treeClass = [
            `${mergedClsPrefix}-tree`,
            checkable && `${mergedClsPrefix}-tree--checkable`,
            (blockLine || blockNode) && `${mergedClsPrefix}-tree--block-node`,
            blockLine && `${mergedClsPrefix}-tree--block-line`
        ];
        const createNode = (tmNode) => {
            return '__motion' in tmNode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_MotionWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], { height: tmNode.height, nodes: tmNode.nodes, clsPrefix: mergedClsPrefix, mode: tmNode.mode, onAfterEnter: this.handleAfterEnter })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_TreeNode__WEBPACK_IMPORTED_MODULE_17__["default"], { key: tmNode.key, tmNode: tmNode, clsPrefix: mergedClsPrefix }));
        };
        if (this.virtualScroll) {
            const { mergedTheme, internalScrollablePadding } = this;
            const padding = (0,seemly__WEBPACK_IMPORTED_MODULE_18__.getPadding)(internalScrollablePadding || '0');
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_19__.XScrollbar, { ref: "scrollbarInstRef", onDragleave: draggable ? this.handleDragLeaveTree : undefined, container: this.getScrollContainer, content: this.getScrollContent, class: treeClass, theme: mergedTheme.peers.Scrollbar, themeOverrides: mergedTheme.peerOverrides.Scrollbar, tabindex: tabindex, onKeyup: mergedFocusable ? handleKeyup : undefined, onKeydown: mergedFocusable ? handleKeydown : undefined, onFocusout: mergedFocusable ? handleFocusout : undefined }, {
                default: () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_20__["default"], { ref: "virtualListInstRef", items: this.fNodes, itemSize: ITEM_SIZE, ignoreItemResize: this.aip, paddingTop: padding.top, paddingBottom: padding.bottom, style: [
                        this.cssVars,
                        {
                            paddingLeft: padding.left,
                            paddingRight: padding.right
                        }
                    ], onScroll: this.handleScroll, onResize: this.handleResize, showScrollbar: false, itemResizable: true }, {
                    default: ({ item }) => createNode(item)
                }))
            }));
        }
        const { internalScrollable } = this;
        if (internalScrollable) {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_19__.XScrollbar, { class: treeClass, tabindex: tabindex, onKeyup: mergedFocusable ? handleKeyup : undefined, onKeydown: mergedFocusable ? handleKeydown : undefined, onFocusout: mergedFocusable ? handleFocusout : undefined, style: this.cssVars, contentStyle: { padding: this.internalScrollablePadding } }, {
                default: () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { onDragleave: draggable ? this.handleDragLeaveTree : undefined, ref: "selfElRef" }, this.fNodes.map(createNode)))
            }));
        }
        else {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: treeClass, tabindex: tabindex, ref: "selfElRef", style: this.cssVars, onKeyup: mergedFocusable ? handleKeyup : undefined, onKeydown: mergedFocusable ? handleKeydown : undefined, onFocusout: mergedFocusable ? handleFocusout : undefined, onDragleave: draggable ? this.handleDragLeaveTree : undefined }, this.fNodes.map(createNode)));
        }
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/tree/src/TreeNode.js":
/*!*******************************************************!*\
  !*** ./node_modules/naive-ui/es/tree/src/TreeNode.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/use-memo.js");
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! seemly */ "./node_modules/seemly/es/dom/happens-in.js");
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! seemly */ "./node_modules/seemly/es/misc/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/create-data-key.js");
/* harmony import */ var _TreeNodeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TreeNodeSwitcher */ "./node_modules/naive-ui/es/tree/src/TreeNodeSwitcher.js");
/* harmony import */ var _TreeNodeCheckbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TreeNodeCheckbox */ "./node_modules/naive-ui/es/tree/src/TreeNodeCheckbox.js");
/* harmony import */ var _TreeNodeContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TreeNodeContent */ "./node_modules/naive-ui/es/tree/src/TreeNodeContent.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./node_modules/naive-ui/es/tree/src/interface.js");
/* harmony import */ var _dnd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dnd */ "./node_modules/naive-ui/es/tree/src/dnd.js");
/* eslint-disable @typescript-eslint/no-non-null-assertion */









const TreeNode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'TreeNode',
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        tmNode: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const NTree = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_interface__WEBPACK_IMPORTED_MODULE_1__.treeInjectionKey);
        const { droppingNodeParentRef, droppingMouseNodeRef, draggingNodeRef, droppingPositionRef, droppingOffsetLevelRef, nodePropsRef, indentRef, blockLineRef } = NTree;
        const disabledRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => NTree.disabledRef.value || props.tmNode.disabled);
        const resolvedNodePropsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: nodeProps } = nodePropsRef;
            if (!nodeProps)
                return undefined;
            return nodeProps({ option: props.tmNode.rawNode });
        });
        // used for drag and drop
        const contentInstRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        // must be non-reactive
        const contentElRef = { value: null };
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            contentElRef.value = contentInstRef.value.$el;
        });
        function handleSwitcherClick() {
            const { tmNode } = props;
            if (NTree.remoteRef.value && !tmNode.isLeaf && !tmNode.shallowLoaded) {
                if (!NTree.loadingKeysRef.value.has(tmNode.key)) {
                    NTree.loadingKeysRef.value.add(tmNode.key);
                }
                const { onLoadRef: { value: onLoad } } = NTree;
                if (onLoad) {
                    void onLoad(tmNode.rawNode)
                        .then(() => {
                        NTree.handleSwitcherClick(tmNode);
                    })
                        .finally(() => {
                        NTree.loadingKeysRef.value.delete(tmNode.key);
                    });
                }
            }
            else {
                NTree.handleSwitcherClick(tmNode);
            }
        }
        function _handleClick(e) {
            if ((0,seemly__WEBPACK_IMPORTED_MODULE_2__.happensIn)(e, 'checkbox') || (0,seemly__WEBPACK_IMPORTED_MODULE_2__.happensIn)(e, 'switcher'))
                return;
            NTree.handleSelect(props.tmNode);
        }
        function handleContentClick(e) {
            var _a, _b;
            if (blockLineRef.value)
                return;
            if (!disabledRef.value)
                _handleClick(e);
            (_b = (_a = resolvedNodePropsRef.value) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        }
        function handleLineClick(e) {
            var _a, _b;
            if (!blockLineRef.value)
                return;
            if (!disabledRef.value) {
                _handleClick(e);
            }
            (_b = (_a = resolvedNodePropsRef.value) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        }
        function handleCheck(checked) {
            NTree.handleCheck(props.tmNode, checked);
        }
        // Dnd
        function handleDragStart(e) {
            NTree.handleDragStart({
                event: e,
                node: props.tmNode
            });
        }
        function handleDragEnter(e) {
            if (e.currentTarget !== e.target) {
                return;
            }
            NTree.handleDragEnter({
                event: e,
                node: props.tmNode
            });
        }
        function handleDragOver(e) {
            e.preventDefault(); // if not prevent, drop event won't be fired...
            NTree.handleDragOver({
                event: e,
                node: props.tmNode
            });
        }
        function handleDragEnd(e) {
            NTree.handleDragEnd({
                event: e,
                node: props.tmNode
            });
        }
        function handleDragLeave(e) {
            if (e.currentTarget !== e.target) {
                return;
            }
            NTree.handleDragLeave({
                event: e,
                node: props.tmNode
            });
        }
        function handleDrop(e) {
            e.preventDefault();
            if (droppingPositionRef.value !== null) {
                NTree.handleDrop({
                    event: e,
                    node: props.tmNode,
                    dropPosition: droppingPositionRef.value
                });
            }
        }
        return {
            showDropMark: (0,vooks__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
                const { value: draggingNode } = draggingNodeRef;
                if (!draggingNode)
                    return;
                const { value: droppingPosition } = droppingPositionRef;
                if (!droppingPosition)
                    return;
                const { value: droppingMouseNode } = droppingMouseNodeRef;
                if (!droppingMouseNode) {
                    return;
                }
                const { tmNode } = props;
                if (tmNode.key === droppingMouseNode.key)
                    return true;
                return false;
            }),
            showDropMarkAsParent: (0,vooks__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
                const { value: droppingNodeParent } = droppingNodeParentRef;
                if (!droppingNodeParent)
                    return false;
                const { tmNode } = props;
                const { value: droppingPosition } = droppingPositionRef;
                if (droppingPosition === 'before' || droppingPosition === 'after') {
                    return droppingNodeParent.key === tmNode.key;
                }
                return false;
            }),
            pending: (0,vooks__WEBPACK_IMPORTED_MODULE_3__["default"])(() => NTree.pendingNodeKeyRef.value === props.tmNode.key),
            loading: (0,vooks__WEBPACK_IMPORTED_MODULE_3__["default"])(() => NTree.loadingKeysRef.value.has(props.tmNode.key)),
            highlight: (0,vooks__WEBPACK_IMPORTED_MODULE_3__["default"])(() => NTree.highlightKeySetRef.value.has(props.tmNode.key)),
            checked: (0,vooks__WEBPACK_IMPORTED_MODULE_3__["default"])(() => NTree.displayedCheckedKeysRef.value.includes(props.tmNode.key)),
            indeterminate: (0,vooks__WEBPACK_IMPORTED_MODULE_3__["default"])(() => NTree.displayedIndeterminateKeysRef.value.includes(props.tmNode.key)),
            selected: (0,vooks__WEBPACK_IMPORTED_MODULE_3__["default"])(() => NTree.mergedSelectedKeysRef.value.includes(props.tmNode.key)),
            expanded: (0,vooks__WEBPACK_IMPORTED_MODULE_3__["default"])(() => NTree.mergedExpandedKeysRef.value.includes(props.tmNode.key)),
            disabled: disabledRef,
            checkable: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => NTree.checkableRef.value &&
                (NTree.cascadeRef.value ||
                    NTree.mergedCheckStrategyRef.value !== 'child' ||
                    props.tmNode.isLeaf)),
            checkboxDisabled: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !!props.tmNode.rawNode.checkboxDisabled),
            selectable: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => NTree.selectableRef.value &&
                (NTree.mergedCheckStrategyRef.value === 'child'
                    ? props.tmNode.isLeaf
                    : true)),
            internalScrollable: NTree.internalScrollableRef,
            draggable: NTree.draggableRef,
            blockLine: blockLineRef,
            nodeProps: resolvedNodePropsRef,
            checkboxFocusable: NTree.internalCheckboxFocusableRef,
            droppingPosition: droppingPositionRef,
            droppingOffsetLevel: droppingOffsetLevelRef,
            indent: indentRef,
            contentInstRef,
            contentElRef,
            handleCheck,
            handleDrop,
            handleDragStart,
            handleDragEnter,
            handleDragOver,
            handleDragEnd,
            handleDragLeave,
            handleLineClick,
            handleContentClick,
            handleSwitcherClick
        };
    },
    render() {
        const { tmNode, clsPrefix, checkable, selectable, selected, checked, highlight, draggable, blockLine, indent, disabled, pending, internalScrollable, nodeProps } = this;
        // drag start not inside
        // it need to be append to node itself, not wrapper
        const dragEventHandlers = draggable && !disabled
            ? {
                onDragenter: this.handleDragEnter,
                onDragleave: this.handleDragLeave,
                onDragend: this.handleDragEnd,
                onDrop: this.handleDrop,
                onDragover: this.handleDragOver
            }
            : undefined;
        // In non virtual mode, there's no evidence that which element should be
        // scrolled to, so we need data-key to query the target element.
        const dataKey = internalScrollable ? (0,_utils__WEBPACK_IMPORTED_MODULE_4__.createDataKey)(tmNode.key) : undefined;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", Object.assign({ class: `${clsPrefix}-tree-node-wrapper` }, dragEventHandlers),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", Object.assign({}, (blockLine ? nodeProps : undefined), { class: [
                    `${clsPrefix}-tree-node`,
                    {
                        [`${clsPrefix}-tree-node--selected`]: selected,
                        [`${clsPrefix}-tree-node--checkable`]: checkable,
                        [`${clsPrefix}-tree-node--highlight`]: highlight,
                        [`${clsPrefix}-tree-node--pending`]: pending,
                        [`${clsPrefix}-tree-node--disabled`]: disabled,
                        [`${clsPrefix}-tree-node--selectable`]: selectable
                    },
                    nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps.class
                ], "data-key": dataKey, draggable: draggable && blockLine, onClick: this.handleLineClick, onDragstart: draggable && blockLine && !disabled
                    ? this.handleDragStart
                    : undefined }),
                (0,seemly__WEBPACK_IMPORTED_MODULE_5__.repeat)(tmNode.level, (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-tree-node-indent`, style: { flex: `0 0 ${indent}px` } })),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_TreeNodeSwitcher__WEBPACK_IMPORTED_MODULE_6__["default"], { clsPrefix: clsPrefix, expanded: this.expanded, loading: this.loading, hide: tmNode.isLeaf, onClick: this.handleSwitcherClick }),
                checkable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_TreeNodeCheckbox__WEBPACK_IMPORTED_MODULE_7__["default"], { focusable: this.checkboxFocusable, disabled: disabled || this.checkboxDisabled, clsPrefix: clsPrefix, checked: this.checked, indeterminate: this.indeterminate, onCheck: this.handleCheck })) : null,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_TreeNodeContent__WEBPACK_IMPORTED_MODULE_8__["default"], { ref: "contentInstRef", clsPrefix: clsPrefix, checked: checked, selected: selected, onClick: this.handleContentClick, nodeProps: blockLine ? undefined : nodeProps, onDragstart: draggable && !blockLine && !disabled
                        ? this.handleDragStart
                        : undefined, tmNode: tmNode }),
                draggable
                    ? this.showDropMark
                        ? (0,_dnd__WEBPACK_IMPORTED_MODULE_9__.renderDropMark)({
                            el: this.contentElRef.value,
                            position: this.droppingPosition,
                            offsetLevel: this.droppingOffsetLevel,
                            indent
                        })
                        : this.showDropMarkAsParent
                            ? (0,_dnd__WEBPACK_IMPORTED_MODULE_9__.renderDropMark)({
                                el: this.contentElRef.value,
                                position: 'inside',
                                offsetLevel: this.droppingOffsetLevel,
                                indent
                            })
                            : null
                    : null)));
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeNode);


/***/ }),

/***/ "./node_modules/naive-ui/es/tree/src/TreeNodeCheckbox.js":
/*!***************************************************************!*\
  !*** ./node_modules/naive-ui/es/tree/src/TreeNodeCheckbox.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../checkbox */ "./node_modules/naive-ui/es/checkbox/src/Checkbox.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./node_modules/naive-ui/es/tree/src/interface.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'NTreeNodeCheckbox',
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        focusable: Boolean,
        disabled: Boolean,
        checked: Boolean,
        indeterminate: Boolean,
        onCheck: Function
    },
    setup(props) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const NTree = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_interface__WEBPACK_IMPORTED_MODULE_1__.treeInjectionKey);
        function doCheck(value) {
            const { onCheck } = props;
            if (onCheck)
                return onCheck(value);
        }
        function handleUpdateValue(value) {
            if (props.indeterminate) {
                doCheck(false);
            }
            else {
                doCheck(value);
            }
        }
        return {
            handleUpdateValue,
            mergedTheme: NTree.mergedThemeRef
        };
    },
    render() {
        const { clsPrefix, mergedTheme, checked, indeterminate, disabled, focusable, handleUpdateValue } = this;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: `${clsPrefix}-tree-node-checkbox`, "data-checkbox": true },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], { focusable: focusable, disabled: disabled, theme: mergedTheme.peers.Checkbox, themeOverrides: mergedTheme.peerOverrides.Checkbox, checked: checked, indeterminate: indeterminate, onUpdateChecked: handleUpdateValue })));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/tree/src/TreeNodeContent.js":
/*!**************************************************************!*\
  !*** ./node_modules/naive-ui/es/tree/src/TreeNodeContent.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/render.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./node_modules/naive-ui/es/tree/src/interface.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'TreeNodeContent',
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        disabled: Boolean,
        checked: Boolean,
        selected: Boolean,
        onClick: Function,
        onDragstart: Function,
        tmNode: {
            type: Object,
            required: true
        },
        nodeProps: Object
    },
    setup(props) {
        const { renderLabelRef, renderPrefixRef, renderSuffixRef, labelFieldRef } = 
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_interface__WEBPACK_IMPORTED_MODULE_1__.treeInjectionKey);
        const selfRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        function doClick(e) {
            const { onClick } = props;
            if (onClick)
                onClick(e);
        }
        function handleClick(e) {
            doClick(e);
        }
        return {
            selfRef,
            renderLabel: renderLabelRef,
            renderPrefix: renderPrefixRef,
            renderSuffix: renderSuffixRef,
            labelField: labelFieldRef,
            handleClick
        };
    },
    render() {
        const { clsPrefix, labelField, nodeProps, checked = false, selected = false, renderLabel, renderPrefix, renderSuffix, handleClick, onDragstart, tmNode: { rawNode, rawNode: { prefix, suffix, [labelField]: label } } } = this;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", Object.assign({}, nodeProps, { ref: "selfRef", class: [`${clsPrefix}-tree-node-content`, nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps.class], onClick: handleClick, draggable: onDragstart === undefined ? undefined : true, onDragstart: onDragstart }),
            renderPrefix || prefix ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-tree-node-content__prefix` }, renderPrefix
                ? renderPrefix({
                    option: rawNode,
                    selected,
                    checked
                })
                : (0,_utils__WEBPACK_IMPORTED_MODULE_2__.render)(prefix))) : null,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-tree-node-content__text` }, renderLabel
                ? renderLabel({
                    option: rawNode,
                    selected,
                    checked
                })
                : (0,_utils__WEBPACK_IMPORTED_MODULE_2__.render)(label)),
            renderSuffix || suffix ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-tree-node-content__suffix` }, renderSuffix
                ? renderSuffix({
                    option: rawNode,
                    selected,
                    checked
                })
                : (0,_utils__WEBPACK_IMPORTED_MODULE_2__.render)(suffix))) : null));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/tree/src/TreeNodeSwitcher.js":
/*!***************************************************************!*\
  !*** ./node_modules/naive-ui/es/tree/src/TreeNodeSwitcher.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _internal_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_internal/icons */ "./node_modules/naive-ui/es/_internal/icons/Switcher.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_internal */ "./node_modules/naive-ui/es/_internal/icon-switch-transition/src/IconSwitchTransition.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_internal */ "./node_modules/naive-ui/es/_internal/loading/src/Loading.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_internal */ "./node_modules/naive-ui/es/_internal/icon/src/Icon.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./node_modules/naive-ui/es/tree/src/interface.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'NTreeSwitcher',
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        expanded: Boolean,
        hide: Boolean,
        loading: Boolean,
        onClick: Function
    },
    setup(props) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const { renderSwitcherIconRef } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_interface__WEBPACK_IMPORTED_MODULE_1__.treeInjectionKey, null);
        return () => {
            const { clsPrefix } = props;
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "data-switcher": true, class: [
                    `${clsPrefix}-tree-node-switcher`,
                    {
                        [`${clsPrefix}-tree-node-switcher--expanded`]: props.expanded,
                        [`${clsPrefix}-tree-node-switcher--hide`]: props.hide
                    }
                ], onClick: props.onClick },
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-tree-node-switcher__icon` },
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_2__["default"], null, {
                        default: () => {
                            if (props.loading) {
                                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_3__["default"], { clsPrefix: clsPrefix, key: "loading", radius: 85, strokeWidth: 20 }));
                            }
                            const { value: renderSwitcherIcon } = renderSwitcherIconRef;
                            return renderSwitcherIcon ? (renderSwitcherIcon()) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_4__["default"], { clsPrefix: clsPrefix, key: "switcher" }, { default: () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal_icons__WEBPACK_IMPORTED_MODULE_5__["default"], null) }));
                        }
                    }))));
        };
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/tree/src/dnd.js":
/*!**************************************************!*\
  !*** ./node_modules/naive-ui/es/tree/src/dnd.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderDropMark": () => (/* binding */ renderDropMark),
/* harmony export */   "defaultAllowDrop": () => (/* binding */ defaultAllowDrop)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function renderDropMark({ position, offsetLevel, indent, el }) {
    const style = {
        position: 'absolute',
        boxSizing: 'border-box',
        right: 0
    };
    if (position === 'inside') {
        style.left = 0;
        style.top = 0;
        style.bottom = 0;
        style.borderRadius = 'inherit';
        style.boxShadow = 'inset 0 0 0 2px var(--n-drop-mark-color)';
    }
    else {
        const cssPosition = position === 'before' ? 'top' : 'bottom';
        style[cssPosition] = 0;
        // The left prop should be modified when tree's style is changed
        // Maybe it is possible to use content left
        style.left = `${el.offsetLeft + 6 - offsetLevel * indent}px`;
        style.height = '2px';
        style.backgroundColor = 'var(--n-drop-mark-color)';
        style.transformOrigin = cssPosition;
        style.borderRadius = '1px';
        style.transform =
            position === 'before' ? 'translateY(-4px)' : 'translateY(4px)';
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: style });
}
function defaultAllowDrop({ dropPosition, node }) {
    if (node.isLeaf === false)
        return true;
    if (node.children) {
        return true;
    }
    return dropPosition !== 'inside';
}


/***/ }),

/***/ "./node_modules/naive-ui/es/tree/src/interface.js":
/*!********************************************************!*\
  !*** ./node_modules/naive-ui/es/tree/src/interface.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "treeInjectionKey": () => (/* binding */ treeInjectionKey)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/create-injection-key.js");

const treeInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-tree');


/***/ }),

/***/ "./node_modules/naive-ui/es/tree/src/keyboard.js":
/*!*******************************************************!*\
  !*** ./node_modules/naive-ui/es/tree/src/keyboard.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useKeyboard": () => (/* binding */ useKeyboard)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _tree_select_src_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tree-select/src/interface */ "./node_modules/naive-ui/es/tree-select/src/interface.js");


function useKeyboard({ fNodesRef, mergedExpandedKeysRef, mergedSelectedKeysRef, handleSelect, handleSwitcherClick }) {
    const { value: mergedSelectedKeys } = mergedSelectedKeysRef;
    // If it's used in tree-select, make it take over pending state
    const treeSelectInjection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_tree_select_src_interface__WEBPACK_IMPORTED_MODULE_1__.treeSelectInjectionKey, null);
    const pendingNodeKeyRef = treeSelectInjection
        ? treeSelectInjection.pendingNodeKeyRef
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(mergedSelectedKeys.length
            ? mergedSelectedKeys[mergedSelectedKeys.length - 1]
            : null);
    function handleKeyup(e) {
        const { value: pendingNodeKey } = pendingNodeKeyRef;
        if (pendingNodeKey === null) {
            if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
                if (pendingNodeKey === null) {
                    const { value: fNodes } = fNodesRef;
                    let fIndex = 0;
                    while (fIndex < fNodes.length) {
                        if (!fNodes[fIndex].disabled) {
                            pendingNodeKeyRef.value = fNodes[fIndex].key;
                            break;
                        }
                        fIndex += 1;
                    }
                }
            }
        }
        else {
            const { value: fNodes } = fNodesRef;
            let fIndex = fNodes.findIndex((tmNode) => tmNode.key === pendingNodeKey);
            if (!~fIndex)
                return;
            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                handleSelect(fNodes[fIndex]);
            }
            else if (e.code === 'ArrowDown') {
                fIndex += 1;
                while (fIndex < fNodes.length) {
                    if (!fNodes[fIndex].disabled) {
                        pendingNodeKeyRef.value = fNodes[fIndex].key;
                        break;
                    }
                    fIndex += 1;
                }
            }
            else if (e.code === 'ArrowUp') {
                fIndex -= 1;
                while (fIndex >= 0) {
                    if (!fNodes[fIndex].disabled) {
                        pendingNodeKeyRef.value = fNodes[fIndex].key;
                        break;
                    }
                    fIndex -= 1;
                }
            }
            else if (e.code === 'ArrowLeft') {
                const pendingNode = fNodes[fIndex];
                if (pendingNode.isLeaf ||
                    !mergedExpandedKeysRef.value.includes(pendingNodeKey)) {
                    const parentTmNode = pendingNode.getParent();
                    if (parentTmNode) {
                        pendingNodeKeyRef.value = parentTmNode.key;
                    }
                }
                else {
                    handleSwitcherClick(pendingNode);
                }
            }
            else if (e.code === 'ArrowRight') {
                const pendingNode = fNodes[fIndex];
                if (pendingNode.isLeaf)
                    return;
                if (!mergedExpandedKeysRef.value.includes(pendingNodeKey)) {
                    handleSwitcherClick(pendingNode);
                }
                else {
                    // Tha same as ArrowDown
                    fIndex += 1;
                    while (fIndex < fNodes.length) {
                        if (!fNodes[fIndex].disabled) {
                            pendingNodeKeyRef.value = fNodes[fIndex].key;
                            break;
                        }
                        fIndex += 1;
                    }
                }
            }
        }
    }
    function handleKeydown(e) {
        switch (e.code) {
            case 'ArrowUp':
            case 'ArrowDown':
                e.preventDefault();
        }
    }
    return {
        pendingNodeKeyRef,
        handleKeyup,
        handleKeydown
    };
}


/***/ }),

/***/ "./node_modules/naive-ui/es/tree/src/styles/index.cssr.js":
/*!****************************************************************!*\
  !*** ./node_modules/naive-ui/es/tree/src/styles/index.cssr.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_utils/cssr */ "./node_modules/naive-ui/es/_utils/cssr/index.js");
/* harmony import */ var _styles_transitions_icon_switch_cssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_styles/transitions/icon-switch.cssr */ "./node_modules/naive-ui/es/_styles/transitions/icon-switch.cssr.js");
/* harmony import */ var _styles_transitions_fade_in_height_expand_cssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_styles/transitions/fade-in-height-expand.cssr */ "./node_modules/naive-ui/es/_styles/transitions/fade-in-height-expand.cssr.js");


 // vars:
// --n-arrow-color
// --n-bezier
// --n-font-size
// --n-node-border-radius
// --n-node-color-active
// --n-node-color-hover
// --n-node-color-pressed
// --n-node-text-color
// --n-node-text-color-disabled

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree', `
 font-size: var(--n-font-size);
 outline: none;
`, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('ul, li', `
 margin: 0;
 padding: 0;
 list-style: none;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('>', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:first-child', {
  marginTop: 0
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node-indent', `
 height: 0;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-motion-wrapper', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('expand', [(0,_styles_transitions_fade_in_height_expand_cssr__WEBPACK_IMPORTED_MODULE_1__["default"])({
  duration: '0.2s'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('collapse', [(0,_styles_transitions_fade_in_height_expand_cssr__WEBPACK_IMPORTED_MODULE_1__["default"])({
  duration: '0.2s',
  reverse: true
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node-wrapper', `
 padding: 3px 0;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node', `
 position: relative;
 display: flex;
 border-radius: var(--n-node-border-radius);
 transition: background-color .3s var(--n-bezier);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('highlight', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node-content', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('text', {
  borderBottomColor: 'var(--n-node-text-color-disabled)'
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node-content', `
 color: var(--n-node-text-color-disabled);
 cursor: not-allowed;
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('selectable', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node-content', `
 cursor: pointer;
 `)])])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('block-node', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node-content', `
 width: 100%;
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('block-line', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node-content', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', {
  backgroundColor: 'var(--n-node-color-hover)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('selectable', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node-content', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:active', {
  backgroundColor: 'var(--n-node-color-pressed)'
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('pending', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node-content', `
 background-color: var(--n-node-color-hover);
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('selected', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node-content', {
  backgroundColor: 'var(--n-node-color-active)'
})])])])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('block-line', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', {
  backgroundColor: 'var(--n-node-color-hover)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('selectable', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:active', {
  backgroundColor: 'var(--n-node-color-pressed)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('pending', `
 background-color: var(--n-node-color-hover);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('selected', {
  backgroundColor: 'var(--n-node-color-active)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', `
 cursor: not-allowed;
 `)])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node-switcher', `
 cursor: pointer;
 display: inline-flex;
 flex-shrink: 0;
 height: 24px;
 width: 24px;
 align-items: center;
 justify-content: center;
 transition: transform .15s var(--n-bezier);
 vertical-align: bottom;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('icon', `
 position: relative;
 height: 14px;
 width: 14px;
 display: flex;
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 font-size: 14px;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('icon', [(0,_styles_transitions_icon_switch_cssr__WEBPACK_IMPORTED_MODULE_2__["default"])()]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-loading', `
 color: var(--n-loading-color);
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [(0,_styles_transitions_icon_switch_cssr__WEBPACK_IMPORTED_MODULE_2__["default"])()])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('hide', {
  visibility: 'hidden'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('expanded', {
  transform: 'rotate(90deg)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node-checkbox', `
 display: inline-flex;
 height: 24px;
 width: 16px;
 vertical-align: bottom;
 align-items: center;
 justify-content: center;
 margin-right: 4px;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('checkable', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node-content', `
 padding: 0 6px;
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tree-node-content', `
 position: relative;
 display: inline-flex;
 align-items: center;
 min-height: 24px;
 box-sizing: border-box;
 line-height: 1.5;
 vertical-align: bottom;
 padding: 0 6px 0 4px;
 cursor: default;
 border-radius: var(--n-node-border-radius);
 text-decoration-color: #0000;
 text-decoration-line: underline;
 color: var(--n-node-text-color);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:last-child', {
  marginBottom: 0
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('prefix', `
 display: inline-flex;
 margin-right: 8px;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('text', `
 border-bottom: 1px solid #0000;
 transition: border-color .3s var(--n-bezier);
 flex-grow:1;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('suffix', `
 display: inline-flex;
 `)])]));

/***/ }),

/***/ "./node_modules/naive-ui/es/tree/src/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/naive-ui/es/tree/src/utils.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keysWithFilter": () => (/* binding */ keysWithFilter),
/* harmony export */   "emptyImage": () => (/* binding */ emptyImage)
/* harmony export */ });
function traverse(nodes, childrenField, callback, callbackAfter) {
    nodes === null || nodes === void 0 ? void 0 : nodes.forEach((node) => {
        callback(node);
        traverse(node[childrenField], childrenField, callback, callbackAfter);
        callbackAfter(node);
    });
}
function keysWithFilter(nodes, pattern, keyField, childrenField, filter) {
    const keys = new Set();
    const highlightKeySet = new Set();
    const path = [];
    traverse(nodes, childrenField, (node) => {
        path.push(node);
        if (filter(pattern, node)) {
            highlightKeySet.add(node[keyField]);
            for (let i = path.length - 2; i >= 0; --i) {
                if (!keys.has(path[i][keyField])) {
                    keys.add(path[i][keyField]);
                }
                else {
                    return;
                }
            }
        }
    }, () => {
        path.pop();
    });
    return {
        expandedKeys: Array.from(keys),
        highlightKeySet
    };
}
const emptyImage = null;
if (typeof window !== 'undefined' && Image) {
    const emptyImage = new Image();
    emptyImage.src =
        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
}



/***/ }),

/***/ "./node_modules/seemly/es/dom/happens-in.js":
/*!**************************************************!*\
  !*** ./node_modules/seemly/es/dom/happens-in.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "happensIn": () => (/* binding */ happensIn)
/* harmony export */ });
function happensIn(e, dataSetPropName) {
    let { target } = e;
    while (target) {
        if (target.dataset) {
            if (target.dataset[dataSetPropName] !== undefined)
                return true;
        }
        target = target.parentElement;
    }
    return false;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=style&index=0&id=06837fbc&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=style&index=0&id=06837fbc&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_06837fbc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=06837fbc&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=style&index=0&id=06837fbc&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_06837fbc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_06837fbc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/treemate/es/check.js":
/*!*******************************************!*\
  !*** ./node_modules/treemate/es/check.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubtreeNotLoadedError": () => (/* binding */ SubtreeNotLoadedError),
/* harmony export */   "getCheckedKeys": () => (/* binding */ getCheckedKeys),
/* harmony export */   "getExtendedCheckedKeySet": () => (/* binding */ getExtendedCheckedKeySet)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/treemate/es/utils.js");

class SubtreeNotLoadedError extends Error {
    constructor() {
        super();
        this.message =
            'SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.';
    }
}
function getExtendedCheckedKeySetAfterCheck(checkKeys, currentCheckedKeys, treeMate) {
    return getExtendedCheckedKeySet(currentCheckedKeys.concat(checkKeys), treeMate);
}
function getAvailableAscendantNodeSet(uncheckedKeys, treeMate) {
    const visitedKeys = new Set();
    uncheckedKeys.forEach((uncheckedKey) => {
        const uncheckedTreeNode = treeMate.treeNodeMap.get(uncheckedKey);
        if (uncheckedTreeNode !== undefined) {
            let nodeCursor = uncheckedTreeNode.parent;
            while (nodeCursor !== null) {
                if (nodeCursor.disabled)
                    break;
                if (visitedKeys.has(nodeCursor.key))
                    break;
                else {
                    visitedKeys.add(nodeCursor.key);
                }
                nodeCursor = nodeCursor.parent;
            }
        }
    });
    return visitedKeys;
}
function getExtendedCheckedKeySetAfterUncheck(uncheckedKeys, currentCheckedKeys, treeMate) {
    const extendedCheckedKeySet = getExtendedCheckedKeySet(currentCheckedKeys, treeMate);
    const extendedKeySetToUncheck = getExtendedCheckedKeySet(uncheckedKeys, treeMate, true);
    const ascendantKeySet = getAvailableAscendantNodeSet(uncheckedKeys, treeMate);
    const keysToRemove = [];
    extendedCheckedKeySet.forEach((key) => {
        if (extendedKeySetToUncheck.has(key) || ascendantKeySet.has(key)) {
            keysToRemove.push(key);
        }
    });
    keysToRemove.forEach((key) => extendedCheckedKeySet.delete(key));
    return extendedCheckedKeySet;
}
function getCheckedKeys(options, treeMate) {
    const { checkedKeys, keysToCheck, keysToUncheck, indeterminateKeys, cascade, leafOnly, checkStrategy } = options;
    if (!cascade) {
        if (keysToCheck !== undefined) {
            return {
                checkedKeys: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.merge)(checkedKeys, keysToCheck),
                indeterminateKeys: Array.from(indeterminateKeys)
            };
        }
        else if (keysToUncheck !== undefined) {
            return {
                checkedKeys: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.minus)(checkedKeys, keysToUncheck),
                indeterminateKeys: Array.from(indeterminateKeys)
            };
        }
        else {
            return {
                checkedKeys: Array.from(checkedKeys),
                indeterminateKeys: Array.from(indeterminateKeys)
            };
        }
    }
    const { levelTreeNodeMap } = treeMate;
    let extendedCheckedKeySet;
    if (keysToUncheck !== undefined) {
        extendedCheckedKeySet = getExtendedCheckedKeySetAfterUncheck(keysToUncheck, checkedKeys, treeMate);
    }
    else if (keysToCheck !== undefined) {
        extendedCheckedKeySet = getExtendedCheckedKeySetAfterCheck(keysToCheck, checkedKeys, treeMate);
    }
    else {
        extendedCheckedKeySet = getExtendedCheckedKeySet(checkedKeys, treeMate);
    }
    const checkStrategyIsParent = checkStrategy === 'parent';
    const checkStrategyIsChild = checkStrategy === 'child' || leafOnly;
    const syntheticCheckedKeySet = extendedCheckedKeySet;
    const syntheticIndeterminateKeySet = new Set();
    const maxLevel = Math.max.apply(null, Array.from(levelTreeNodeMap.keys()));
    // cascade check
    // 1. if tree is fully loaded, it just works
    // 2. if the tree is not fully loaded, we assume that keys which is in not
    //    loaded tree are not in checked keys
    //    for example:
    //    a -- b(fully-loaded)   -- c(fully-loaded)
    //      |- d(partial-loaded) -- ?e(not-loaded)
    //    in the case, `e` is assumed not to be checked, nor we can't calc `d`'s
    //    and `a`'s status
    for (let level = maxLevel; level >= 0; level -= 1) {
        const levelIsZero = level === 0;
        // it should exists, nor it is a bug
        const levelTreeNodes = levelTreeNodeMap.get(level);
        for (const levelTreeNode of levelTreeNodes) {
            if (levelTreeNode.isLeaf)
                continue;
            const { key: levelTreeNodeKey, shallowLoaded } = levelTreeNode;
            if (checkStrategyIsChild && shallowLoaded) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                levelTreeNode.children.forEach((v) => {
                    if (!v.disabled &&
                        !v.isLeaf &&
                        v.shallowLoaded &&
                        syntheticCheckedKeySet.has(v.key)) {
                        syntheticCheckedKeySet.delete(v.key);
                    }
                });
            }
            if (levelTreeNode.disabled || !shallowLoaded) {
                continue;
            }
            let fullyChecked = true;
            let partialChecked = false;
            let allDisabled = true;
            // it is shallow loaded, so `children` must exist
            for (const childNode of levelTreeNode.children) {
                const childKey = childNode.key;
                if (childNode.disabled)
                    continue;
                if (allDisabled)
                    allDisabled = false;
                if (syntheticCheckedKeySet.has(childKey)) {
                    partialChecked = true;
                }
                else if (syntheticIndeterminateKeySet.has(childKey)) {
                    partialChecked = true;
                    fullyChecked = false;
                    break;
                }
                else {
                    fullyChecked = false;
                    if (partialChecked) {
                        break;
                    }
                }
            }
            if (fullyChecked && !allDisabled) {
                if (checkStrategyIsParent) {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    levelTreeNode.children.forEach((v) => {
                        if (!v.disabled && syntheticCheckedKeySet.has(v.key)) {
                            syntheticCheckedKeySet.delete(v.key);
                        }
                    });
                }
                syntheticCheckedKeySet.add(levelTreeNodeKey);
            }
            else if (partialChecked) {
                syntheticIndeterminateKeySet.add(levelTreeNodeKey);
            }
            if (levelIsZero &&
                checkStrategyIsChild &&
                syntheticCheckedKeySet.has(levelTreeNodeKey)) {
                syntheticCheckedKeySet.delete(levelTreeNodeKey);
            }
        }
    }
    return {
        checkedKeys: Array.from(syntheticCheckedKeySet),
        indeterminateKeys: Array.from(syntheticIndeterminateKeySet)
    };
}
// unchecking is safe when doing cascade uncheck in async mode
function getExtendedCheckedKeySet(checkedKeys, treeMate, isUnchecking = false) {
    const { treeNodeMap, getChildren } = treeMate;
    const visitedKeySet = new Set();
    const extendedKeySet = new Set(checkedKeys);
    checkedKeys.forEach((checkedKey) => {
        const checkedTreeNode = treeNodeMap.get(checkedKey);
        if (checkedTreeNode !== undefined) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.traverseWithCb)(checkedTreeNode, (treeNode) => {
                if (treeNode.disabled) {
                    return _utils__WEBPACK_IMPORTED_MODULE_0__.TRAVERSE_COMMAND.STOP;
                }
                const { key } = treeNode;
                if (visitedKeySet.has(key))
                    return;
                visitedKeySet.add(key);
                // Adding keys before loaded check is okay, since if not valid error
                // would be thrown
                extendedKeySet.add(key);
                if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isExpilicitlyNotLoaded)(treeNode.rawNode, getChildren)) {
                    if (isUnchecking) {
                        return _utils__WEBPACK_IMPORTED_MODULE_0__.TRAVERSE_COMMAND.STOP;
                    }
                    else {
                        throw new SubtreeNotLoadedError();
                    }
                }
            });
        }
    });
    return extendedKeySet;
}


/***/ }),

/***/ "./node_modules/treemate/es/contains.js":
/*!**********************************************!*\
  !*** ./node_modules/treemate/es/contains.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contains": () => (/* binding */ contains)
/* harmony export */ });
function contains(parent, child) {
    const parentKey = parent.key;
    // eslint-disable-next-line no-unmodified-loop-condition
    while (child) {
        if (child.key === parentKey)
            return true;
        child = child.parent;
    }
    return false;
}


/***/ }),

/***/ "./node_modules/treemate/es/create.js":
/*!********************************************!*\
  !*** ./node_modules/treemate/es/create.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTreeMate": () => (/* binding */ createTreeMate)
/* harmony export */ });
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check */ "./node_modules/treemate/es/check.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/treemate/es/utils.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./path */ "./node_modules/treemate/es/path.js");
/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./move */ "./node_modules/treemate/es/move.js");
/* harmony import */ var _flatten__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flatten */ "./node_modules/treemate/es/flatten.js");
/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contains */ "./node_modules/treemate/es/contains.js");






function createTreeNodes(rawNodes, treeNodeMap, levelTreeNodeMap, nodeProto, getChildren, parent = null, level = 0) {
    const treeNodes = [];
    rawNodes.forEach((rawNode, index) => {
        var _a;
        if ( true &&
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isNodeInvalid)(rawNode, getChildren)) {
            console.error('[treemate]: node', rawNode, 'is invalid');
        }
        const treeNode = Object.create(nodeProto);
        treeNode.rawNode = rawNode;
        treeNode.siblings = treeNodes;
        treeNode.level = level;
        treeNode.index = index;
        treeNode.isFirstChild = index === 0;
        treeNode.isLastChild = index + 1 === rawNodes.length;
        treeNode.parent = parent;
        if (!treeNode.ignored) {
            const rawChildren = getChildren(rawNode);
            if (Array.isArray(rawChildren)) {
                treeNode.children = createTreeNodes(rawChildren, treeNodeMap, levelTreeNodeMap, nodeProto, getChildren, treeNode, level + 1);
            }
        }
        treeNodes.push(treeNode);
        treeNodeMap.set(treeNode.key, treeNode);
        if (!levelTreeNodeMap.has(level))
            levelTreeNodeMap.set(level, []);
        (_a = levelTreeNodeMap.get(level)) === null || _a === void 0 ? void 0 : _a.push(treeNode);
    });
    return treeNodes;
}
function createTreeMate(rawNodes, options = {}) {
    var _a;
    const treeNodeMap = new Map();
    const levelTreeNodeMap = new Map();
    const { getDisabled = _utils__WEBPACK_IMPORTED_MODULE_0__.isDisabled, getIgnored = _utils__WEBPACK_IMPORTED_MODULE_0__.isIgnored, getIsGroup = _utils__WEBPACK_IMPORTED_MODULE_0__.isGroup, getKey = _utils__WEBPACK_IMPORTED_MODULE_0__.defaultGetKey } = options;
    const _getChildren = (_a = options.getChildren) !== null && _a !== void 0 ? _a : _utils__WEBPACK_IMPORTED_MODULE_0__.defaultGetChildren;
    const getChildren = options.ignoreEmptyChildren
        ? (node) => {
            const children = _getChildren(node);
            if (Array.isArray(children)) {
                if (!children.length)
                    return null;
                return children;
            }
            return children;
        }
        : _getChildren;
    const nodeProto = Object.assign({
        get key() {
            // do not pass parent or related things to it
            // the key need to be specified explicitly
            return getKey(this.rawNode);
        },
        get disabled() {
            return getDisabled(this.rawNode);
        },
        get isGroup() {
            return getIsGroup(this.rawNode);
        },
        get isLeaf() {
            return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isLeaf)(this.rawNode, getChildren);
        },
        get shallowLoaded() {
            return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isShallowLoaded)(this.rawNode, getChildren);
        },
        get ignored() {
            return getIgnored(this.rawNode);
        },
        contains(node) {
            return (0,_contains__WEBPACK_IMPORTED_MODULE_1__.contains)(this, node);
        }
    }, _move__WEBPACK_IMPORTED_MODULE_2__.moveMethods);
    const treeNodes = createTreeNodes(rawNodes, treeNodeMap, levelTreeNodeMap, nodeProto, getChildren);
    function getNode(key) {
        if (key === null || key === undefined)
            return null;
        const tmNode = treeNodeMap.get(key);
        if (tmNode && !tmNode.isGroup && !tmNode.ignored) {
            return tmNode;
        }
        return null;
    }
    function _getNode(key) {
        if (key === null || key === undefined)
            return null;
        const tmNode = treeNodeMap.get(key);
        if (tmNode && !tmNode.ignored) {
            return tmNode;
        }
        return null;
    }
    function getPrev(key, options) {
        const node = _getNode(key);
        if (!node)
            return null;
        return node.getPrev(options);
    }
    function getNext(key, options) {
        const node = _getNode(key);
        if (!node)
            return null;
        return node.getNext(options);
    }
    function getParent(key) {
        const node = _getNode(key);
        if (!node)
            return null;
        return node.getParent();
    }
    function getChild(key) {
        const node = _getNode(key);
        if (!node)
            return null;
        return node.getChild();
    }
    const treemate = {
        treeNodes,
        treeNodeMap,
        levelTreeNodeMap,
        maxLevel: Math.max(...levelTreeNodeMap.keys()),
        getChildren,
        getFlattenedNodes(expandedKeys) {
            return (0,_flatten__WEBPACK_IMPORTED_MODULE_3__.flatten)(treeNodes, expandedKeys);
        },
        getNode,
        getPrev,
        getNext,
        getParent,
        getChild,
        getFirstAvailableNode() {
            return (0,_move__WEBPACK_IMPORTED_MODULE_2__.getFirstAvailableNode)(treeNodes);
        },
        getPath(key, options = {}) {
            return (0,_path__WEBPACK_IMPORTED_MODULE_4__.getPath)(key, options, treemate);
        },
        getCheckedKeys(checkedKeys, options = {}) {
            const { cascade = true, leafOnly = false, checkStrategy = 'all' } = options;
            return (0,_check__WEBPACK_IMPORTED_MODULE_5__.getCheckedKeys)({
                checkedKeys: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.unwrapCheckedKeys)(checkedKeys),
                indeterminateKeys: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.unwrapIndeterminateKeys)(checkedKeys),
                cascade,
                leafOnly,
                checkStrategy
            }, treemate);
        },
        check(keysToCheck, checkedKeys, options = {}) {
            const { cascade = true, leafOnly = false, checkStrategy = 'all' } = options;
            return (0,_check__WEBPACK_IMPORTED_MODULE_5__.getCheckedKeys)({
                checkedKeys: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.unwrapCheckedKeys)(checkedKeys),
                indeterminateKeys: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.unwrapIndeterminateKeys)(checkedKeys),
                keysToCheck: keysToCheck === undefined || keysToCheck === null
                    ? []
                    : (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toArray)(keysToCheck),
                cascade,
                leafOnly,
                checkStrategy
            }, treemate);
        },
        uncheck(keysToUncheck, checkedKeys, options = {}) {
            const { cascade = true, leafOnly = false, checkStrategy = 'all' } = options;
            return (0,_check__WEBPACK_IMPORTED_MODULE_5__.getCheckedKeys)({
                checkedKeys: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.unwrapCheckedKeys)(checkedKeys),
                indeterminateKeys: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.unwrapIndeterminateKeys)(checkedKeys),
                keysToUncheck: keysToUncheck === null || keysToUncheck === undefined
                    ? []
                    : (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toArray)(keysToUncheck),
                cascade,
                leafOnly,
                checkStrategy
            }, treemate);
        },
        getNonLeafKeys(options = {}) {
            return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNonLeafKeys)(treeNodes, options);
        }
    };
    return treemate;
}


/***/ }),

/***/ "./node_modules/treemate/es/flatten.js":
/*!*********************************************!*\
  !*** ./node_modules/treemate/es/flatten.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flatten": () => (/* binding */ flatten)
/* harmony export */ });
function flatten(treeNodes, expandedKeys) {
    const expandedKeySet = expandedKeys ? new Set(expandedKeys) : undefined;
    const flattenedNodes = [];
    function traverse(treeNodes) {
        treeNodes.forEach((treeNode) => {
            flattenedNodes.push(treeNode);
            if (treeNode.isLeaf || !treeNode.children || treeNode.ignored)
                return;
            if (treeNode.isGroup) {
                // group node shouldn't be expanded
                traverse(treeNode.children);
            }
            else if (
            // normal non-leaf node
            expandedKeySet === undefined ||
                expandedKeySet.has(treeNode.key)) {
                traverse(treeNode.children);
            }
        });
    }
    traverse(treeNodes);
    return flattenedNodes;
}


/***/ }),

/***/ "./node_modules/treemate/es/move.js":
/*!******************************************!*\
  !*** ./node_modules/treemate/es/move.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFirstAvailableNode": () => (/* binding */ getFirstAvailableNode),
/* harmony export */   "moveMethods": () => (/* binding */ moveMethods)
/* harmony export */ });
function getFirstAvailableNode(nodes) {
    if (nodes.length === 0)
        return null;
    const node = nodes[0];
    if (node.isGroup || node.ignored || node.disabled) {
        return node.getNext();
    }
    return node;
}
function rawGetNext(node, loop) {
    const sibs = node.siblings;
    const l = sibs.length;
    const { index } = node;
    if (loop) {
        return sibs[(index + 1) % l];
    }
    else {
        if (index === sibs.length - 1)
            return null;
        return sibs[index + 1];
    }
}
function move(fromNode, dir, { loop = false, includeDisabled = false } = {}) {
    const iterate = dir === 'prev' ? rawGetPrev : rawGetNext;
    const getChildOptions = {
        reverse: dir === 'prev'
    };
    let meet = false;
    let endNode = null;
    function traverse(node) {
        if (node === null)
            return;
        if (node === fromNode) {
            if (!meet) {
                meet = true;
            }
            else if (!fromNode.disabled && !fromNode.isGroup) {
                endNode = fromNode;
                return;
            }
        }
        else {
            if ((!node.disabled || includeDisabled) &&
                !node.ignored &&
                !node.isGroup) {
                endNode = node;
                return;
            }
        }
        if (node.isGroup) {
            const child = getChild(node, getChildOptions);
            if (child !== null) {
                endNode = child;
            }
            else {
                traverse(iterate(node, loop));
            }
        }
        else {
            const nextNode = iterate(node, false);
            if (nextNode !== null) {
                traverse(nextNode);
            }
            else {
                const parent = rawGetParent(node);
                if (parent === null || parent === void 0 ? void 0 : parent.isGroup) {
                    traverse(iterate(parent, loop));
                }
                else if (loop) {
                    traverse(iterate(node, true));
                }
            }
        }
    }
    traverse(fromNode);
    return endNode;
}
function rawGetPrev(node, loop) {
    const sibs = node.siblings;
    const l = sibs.length;
    const { index } = node;
    if (loop) {
        return sibs[(index - 1 + l) % l];
    }
    else {
        if (index === 0)
            return null;
        return sibs[index - 1];
    }
}
function rawGetParent(node) {
    return node.parent;
}
function getChild(node, options = {}) {
    const { reverse = false } = options;
    const { children } = node;
    if (children) {
        const { length } = children;
        const start = reverse ? length - 1 : 0;
        const end = reverse ? -1 : length;
        const delta = reverse ? -1 : 1;
        for (let i = start; i !== end; i += delta) {
            const child = children[i];
            if (!child.disabled && !child.ignored) {
                if (child.isGroup) {
                    const childInGroup = getChild(child, options);
                    if (childInGroup !== null)
                        return childInGroup;
                }
                else {
                    return child;
                }
            }
        }
    }
    return null;
}
const moveMethods = {
    getChild() {
        if (this.ignored)
            return null;
        return getChild(this);
    },
    getParent() {
        const { parent } = this;
        if (parent === null || parent === void 0 ? void 0 : parent.isGroup) {
            return parent.getParent();
        }
        return parent;
    },
    getNext(options = {}) {
        return move(this, 'next', options);
    },
    getPrev(options = {}) {
        return move(this, 'prev', options);
    }
};


/***/ }),

/***/ "./node_modules/treemate/es/path.js":
/*!******************************************!*\
  !*** ./node_modules/treemate/es/path.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPath": () => (/* binding */ getPath)
/* harmony export */ });
function getPath(key, { includeGroup = false, includeSelf = true }, treeMate) {
    var _a;
    const treeNodeMap = treeMate.treeNodeMap;
    let treeNode = key === null || key === undefined ? null : (_a = treeNodeMap.get(key)) !== null && _a !== void 0 ? _a : null;
    const mergedPath = {
        keyPath: [],
        treeNodePath: [],
        treeNode: treeNode
    };
    if (treeNode === null || treeNode === void 0 ? void 0 : treeNode.ignored) {
        mergedPath.treeNode = null;
        return mergedPath;
    }
    while (treeNode) {
        if (!treeNode.ignored && (includeGroup || !treeNode.isGroup)) {
            mergedPath.treeNodePath.push(treeNode);
        }
        treeNode = treeNode.parent;
    }
    mergedPath.treeNodePath.reverse();
    if (!includeSelf)
        mergedPath.treeNodePath.pop();
    mergedPath.keyPath = mergedPath.treeNodePath.map((treeNode) => treeNode.key);
    return mergedPath;
}


/***/ }),

/***/ "./node_modules/treemate/es/utils.js":
/*!*******************************************!*\
  !*** ./node_modules/treemate/es/utils.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "TRAVERSE_COMMAND": () => (/* binding */ TRAVERSE_COMMAND),
/* harmony export */   "traverseWithCb": () => (/* binding */ traverseWithCb),
/* harmony export */   "getNonLeafKeys": () => (/* binding */ getNonLeafKeys),
/* harmony export */   "isLeaf": () => (/* binding */ isLeaf),
/* harmony export */   "defaultGetChildren": () => (/* binding */ defaultGetChildren),
/* harmony export */   "defaultGetKey": () => (/* binding */ defaultGetKey),
/* harmony export */   "isIgnored": () => (/* binding */ isIgnored),
/* harmony export */   "isShallowLoaded": () => (/* binding */ isShallowLoaded),
/* harmony export */   "isDisabled": () => (/* binding */ isDisabled),
/* harmony export */   "isExpilicitlyNotLoaded": () => (/* binding */ isExpilicitlyNotLoaded),
/* harmony export */   "isNodeInvalid": () => (/* binding */ isNodeInvalid),
/* harmony export */   "unwrapCheckedKeys": () => (/* binding */ unwrapCheckedKeys),
/* harmony export */   "unwrapIndeterminateKeys": () => (/* binding */ unwrapIndeterminateKeys),
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "minus": () => (/* binding */ minus),
/* harmony export */   "isGroup": () => (/* binding */ isGroup),
/* harmony export */   "createIndexGetter": () => (/* binding */ createIndexGetter)
/* harmony export */ });
function toArray(arg) {
    if (Array.isArray(arg))
        return arg;
    return [arg];
}
// Do not use enum for lint plugin has error
const TRAVERSE_COMMAND = {
    STOP: 'STOP'
};
function traverseWithCb(treeNode, callback) {
    const command = callback(treeNode);
    if (treeNode.children !== undefined && command !== TRAVERSE_COMMAND.STOP) {
        treeNode.children.forEach((childNode) => traverseWithCb(childNode, callback));
    }
}
function getNonLeafKeys(treeNodes, options = {}) {
    const { preserveGroup = false } = options;
    const keys = [];
    const cb = preserveGroup
        ? (node) => {
            if (!node.isLeaf) {
                keys.push(node.key);
                traverse(node.children);
            }
        }
        : (node) => {
            if (!node.isLeaf) {
                if (!node.isGroup)
                    keys.push(node.key);
                traverse(node.children);
            }
        };
    function traverse(nodes) {
        nodes.forEach(cb);
    }
    traverse(treeNodes);
    return keys;
}
function isLeaf(rawNode, getChildren) {
    const { isLeaf } = rawNode;
    if (isLeaf !== undefined)
        return isLeaf;
    else if (!getChildren(rawNode))
        return true;
    return false;
}
function defaultGetChildren(node) {
    return node.children;
}
function defaultGetKey(node) {
    return node.key;
}
function isIgnored() {
    return false;
}
function isShallowLoaded(rawNode, getChildren) {
    const { isLeaf } = rawNode;
    if (isLeaf === false && !Array.isArray(getChildren(rawNode)))
        return false;
    return true;
}
function isDisabled(rawNode) {
    return rawNode.disabled === true;
}
function isExpilicitlyNotLoaded(rawNode, getChildren) {
    return (rawNode.isLeaf === false && !Array.isArray(getChildren(rawNode)));
}
function isNodeInvalid(rawNode, getChildren) {
    if (rawNode.isLeaf === true) {
        const children = getChildren(rawNode);
        if (Array.isArray(children) && children.length > 0)
            return true;
    }
    return false;
}
function unwrapCheckedKeys(result) {
    var _a;
    if (result === undefined || result === null)
        return [];
    if (Array.isArray(result))
        return result;
    return (_a = result.checkedKeys) !== null && _a !== void 0 ? _a : [];
}
function unwrapIndeterminateKeys(result) {
    var _a;
    if (result === undefined || result === null || Array.isArray(result)) {
        return [];
    }
    return (_a = result.indeterminateKeys) !== null && _a !== void 0 ? _a : [];
}
function merge(originalKeys, keysToAdd) {
    const set = new Set(originalKeys);
    keysToAdd.forEach((key) => {
        if (!set.has(key)) {
            set.add(key);
        }
    });
    return Array.from(set);
}
function minus(originalKeys, keysToRemove) {
    const set = new Set(originalKeys);
    keysToRemove.forEach((key) => {
        if (set.has(key)) {
            set.delete(key);
        }
    });
    return Array.from(set);
}
function isGroup(rawNode) {
    return (rawNode === null || rawNode === void 0 ? void 0 : rawNode.type) === 'group';
}
function createIndexGetter(treeNodes) {
    const map = new Map();
    treeNodes.forEach((treeNode, i) => {
        map.set(treeNode.key, i);
    });
    return (key) => { var _a; return (_a = map.get(key)) !== null && _a !== void 0 ? _a : null; };
}


/***/ }),

/***/ "./resources/js/Components/CandidateProfile/CandidateCarousel.vue":
/*!************************************************************************!*\
  !*** ./resources/js/Components/CandidateProfile/CandidateCarousel.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CandidateCarousel_vue_vue_type_template_id_7dfce745_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandidateCarousel.vue?vue&type=template&id=7dfce745&lang=true */ "./resources/js/Components/CandidateProfile/CandidateCarousel.vue?vue&type=template&id=7dfce745&lang=true");
/* harmony import */ var _CandidateCarousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CandidateCarousel.vue?vue&type=script&lang=js */ "./resources/js/Components/CandidateProfile/CandidateCarousel.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CandidateCarousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CandidateCarousel_vue_vue_type_template_id_7dfce745_lang_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/CandidateProfile/CandidateCarousel.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/CandidateProfile/CandidateNameCard.vue":
/*!************************************************************************!*\
  !*** ./resources/js/Components/CandidateProfile/CandidateNameCard.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CandidateNameCard_vue_vue_type_template_id_5616cca0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandidateNameCard.vue?vue&type=template&id=5616cca0 */ "./resources/js/Components/CandidateProfile/CandidateNameCard.vue?vue&type=template&id=5616cca0");
/* harmony import */ var _CandidateNameCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CandidateNameCard.vue?vue&type=script&lang=js */ "./resources/js/Components/CandidateProfile/CandidateNameCard.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CandidateNameCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CandidateNameCard_vue_vue_type_template_id_5616cca0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/CandidateProfile/CandidateNameCard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/CandidateProfile/NCollapse.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Components/CandidateProfile/NCollapse.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NCollapse_vue_vue_type_template_id_722be77d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NCollapse.vue?vue&type=template&id=722be77d */ "./resources/js/Components/CandidateProfile/NCollapse.vue?vue&type=template&id=722be77d");
/* harmony import */ var _NCollapse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NCollapse.vue?vue&type=script&lang=js */ "./resources/js/Components/CandidateProfile/NCollapse.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NCollapse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NCollapse_vue_vue_type_template_id_722be77d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/CandidateProfile/NCollapse.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Layout/ARISEnFooter.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Components/Layout/ARISEnFooter.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/Layouts/CandidateProfileLayout.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Layouts/CandidateProfileLayout.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/Layouts/Partials/Header.vue":
/*!**************************************************!*\
  !*** ./resources/js/Layouts/Partials/Header.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/Pages/Frontend/CandidateProfiles/Index.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Frontend/CandidateProfiles/Index.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_06837fbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=06837fbc&scoped=true */ "./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=template&id=06837fbc&scoped=true");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_06837fbc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=06837fbc&scoped=true&lang=css */ "./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=style&index=0&id=06837fbc&scoped=true&lang=css");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_06837fbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-06837fbc"],['__file',"resources/js/Pages/Frontend/CandidateProfiles/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/CandidateProfile/CandidateCarousel.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/Components/CandidateProfile/CandidateCarousel.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateCarousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateCarousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CandidateCarousel.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/CandidateCarousel.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/CandidateProfile/CandidateNameCard.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/Components/CandidateProfile/CandidateNameCard.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateNameCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateNameCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CandidateNameCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/CandidateNameCard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/CandidateProfile/NCollapse.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Components/CandidateProfile/NCollapse.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NCollapse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NCollapse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NCollapse.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/NCollapse.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ARISEnFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ARISEnFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ARISEnFooter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateProfileLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateProfileLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CandidateProfileLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/Partials/Header.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Layouts/Partials/Header.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/CandidateProfile/CandidateCarousel.vue?vue&type=template&id=7dfce745&lang=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Components/CandidateProfile/CandidateCarousel.vue?vue&type=template&id=7dfce745&lang=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateCarousel_vue_vue_type_template_id_7dfce745_lang_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateCarousel_vue_vue_type_template_id_7dfce745_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CandidateCarousel.vue?vue&type=template&id=7dfce745&lang=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/CandidateCarousel.vue?vue&type=template&id=7dfce745&lang=true");


/***/ }),

/***/ "./resources/js/Components/CandidateProfile/CandidateNameCard.vue?vue&type=template&id=5616cca0":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Components/CandidateProfile/CandidateNameCard.vue?vue&type=template&id=5616cca0 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateNameCard_vue_vue_type_template_id_5616cca0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateNameCard_vue_vue_type_template_id_5616cca0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CandidateNameCard.vue?vue&type=template&id=5616cca0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/CandidateNameCard.vue?vue&type=template&id=5616cca0");


/***/ }),

/***/ "./resources/js/Components/CandidateProfile/NCollapse.vue?vue&type=template&id=722be77d":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/CandidateProfile/NCollapse.vue?vue&type=template&id=722be77d ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NCollapse_vue_vue_type_template_id_722be77d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NCollapse_vue_vue_type_template_id_722be77d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NCollapse.vue?vue&type=template&id=722be77d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/CandidateProfile/NCollapse.vue?vue&type=template&id=722be77d");


/***/ }),

/***/ "./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=template&id=414e7eae":
/*!***************************************************************************************!*\
  !*** ./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=template&id=414e7eae ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ARISEnFooter_vue_vue_type_template_id_414e7eae__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ARISEnFooter_vue_vue_type_template_id_414e7eae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ARISEnFooter.vue?vue&type=template&id=414e7eae */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/ARISEnFooter.vue?vue&type=template&id=414e7eae");


/***/ }),

/***/ "./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=template&id=f667ca18":
/*!***************************************************************************************!*\
  !*** ./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=template&id=f667ca18 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateProfileLayout_vue_vue_type_template_id_f667ca18__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CandidateProfileLayout_vue_vue_type_template_id_f667ca18__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CandidateProfileLayout.vue?vue&type=template&id=f667ca18 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/CandidateProfileLayout.vue?vue&type=template&id=f667ca18");


/***/ }),

/***/ "./resources/js/Layouts/Partials/Header.vue?vue&type=template&id=fbd95714":
/*!********************************************************************************!*\
  !*** ./resources/js/Layouts/Partials/Header.vue?vue&type=template&id=fbd95714 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_fbd95714__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_fbd95714__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=fbd95714 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=template&id=fbd95714");


/***/ }),

/***/ "./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=template&id=06837fbc&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=template&id=06837fbc&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_06837fbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_06837fbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=06837fbc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=template&id=06837fbc&scoped=true");


/***/ }),

/***/ "./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_fbd95714_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=style&index=0&id=fbd95714&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css");


/***/ }),

/***/ "./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=style&index=0&id=06837fbc&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=style&index=0&id=06837fbc&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_06837fbc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=06837fbc&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/CandidateProfiles/Index.vue?vue&type=style&index=0&id=06837fbc&scoped=true&lang=css");


/***/ }),

/***/ "./node_modules/vueuc/es/overflow/src/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vueuc/es/overflow/src/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _css_render_vue3_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @css-render/vue3-ssr */ "./node_modules/@css-render/vue3-ssr/esm/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared */ "./node_modules/vueuc/es/shared/cssr.js");
/* eslint-disable @typescript-eslint/strict-boolean-expressions */



const hiddenAttr = 'v-hidden';
const style = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.c)('[v-hidden]', {
    display: 'none!important'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Overflow',
    props: {
        getCounter: Function,
        getTail: Function,
        updateCounter: Function,
        onUpdateOverflow: Function
    },
    setup(props, { slots }) {
        const selfRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const counterRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        function deriveCounter() {
            const { value: self } = selfRef;
            const { getCounter, getTail } = props;
            let counter;
            if (getCounter !== undefined)
                counter = getCounter();
            else {
                counter = counterRef.value;
            }
            if (!self || !counter)
                return;
            if (counter.hasAttribute(hiddenAttr)) {
                counter.removeAttribute(hiddenAttr);
            }
            const { children } = self;
            const containerWidth = self.offsetWidth;
            const childWidths = [];
            const tail = slots.tail ? getTail === null || getTail === void 0 ? void 0 : getTail() : null;
            let childWidthSum = tail ? tail.offsetWidth : 0;
            let overflow = false;
            const len = self.children.length - (slots.tail ? 1 : 0);
            for (let i = 0; i < len - 1; ++i) {
                if (i < 0)
                    continue;
                const child = children[i];
                if (overflow) {
                    if (!child.hasAttribute(hiddenAttr)) {
                        child.setAttribute(hiddenAttr, '');
                    }
                    continue;
                }
                else if (child.hasAttribute(hiddenAttr)) {
                    child.removeAttribute(hiddenAttr);
                }
                const childWidth = child.offsetWidth;
                childWidthSum += childWidth;
                childWidths[i] = childWidth;
                if (childWidthSum > containerWidth) {
                    const { updateCounter } = props;
                    for (let j = i; j >= 0; --j) {
                        const restCount = len - 1 - j;
                        if (updateCounter !== undefined) {
                            updateCounter(restCount);
                        }
                        else {
                            counter.textContent = `${restCount}`;
                        }
                        const counterWidth = counter.offsetWidth;
                        childWidthSum -= childWidths[j];
                        if (childWidthSum + counterWidth <= containerWidth || j === 0) {
                            overflow = true;
                            i = j - 1;
                            if (tail) {
                                // tail too long or 1st element too long
                                // we only consider tail now
                                if (i === -1) {
                                    tail.style.maxWidth = `${containerWidth - counterWidth}px`;
                                    tail.style.boxSizing = 'border-box';
                                }
                                else {
                                    tail.style.maxWidth = '';
                                }
                            }
                            break;
                        }
                    }
                }
            }
            const { onUpdateOverflow } = props;
            if (!overflow) {
                if (onUpdateOverflow !== undefined) {
                    onUpdateOverflow(false);
                }
                counter.setAttribute(hiddenAttr, '');
            }
            else {
                if (onUpdateOverflow !== undefined) {
                    onUpdateOverflow(true);
                }
            }
        }
        const ssrAdapter = (0,_css_render_vue3_ssr__WEBPACK_IMPORTED_MODULE_2__.useSsrAdapter)();
        style.mount({
            id: 'vueuc/overflow',
            head: true,
            anchorMetaName: _shared__WEBPACK_IMPORTED_MODULE_1__.cssrAnchorMetaName,
            ssr: ssrAdapter
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(deriveCounter);
        // besides onMounted, other case should be manually triggered, or we shoud watch items
        return {
            selfRef,
            counterRef,
            sync: deriveCounter
        };
    },
    render() {
        const { $slots } = this;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(this.sync);
        // It shouldn't have border
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', {
            class: 'v-overflow',
            ref: 'selfRef'
        }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)($slots, 'default'),
            // $slots.counter should only has 1 element
            $slots.counter
                ? $slots.counter()
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('span', {
                    style: {
                        display: 'inline-block'
                    },
                    ref: 'counterRef'
                }),
            // $slots.tail should only has 1 element
            $slots.tail ? $slots.tail() : null
        ]);
    }
}));


/***/ }),

/***/ "./node_modules/vueuc/es/shared/finweck-tree.js":
/*!******************************************************!*\
  !*** ./node_modules/vueuc/es/shared/finweck-tree.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinweckTree": () => (/* binding */ FinweckTree)
/* harmony export */ });
function lowBit(n) {
    return n & -n;
}
class FinweckTree {
    /**
     * @param l length of the array
     * @param min min value of the array
     */
    constructor(l, min) {
        this.l = l;
        this.min = min;
        const ft = new Array(l + 1);
        for (let i = 0; i < l + 1; ++i) {
            ft[i] = 0;
        }
        this.ft = ft;
    }
    /**
     * Add arr[i] by n, start from 0
     * @param i the index of the element to be added
     * @param n the value to be added
     */
    add(i, n) {
        if (n === 0)
            return;
        const { l, ft } = this;
        i += 1;
        while (i <= l) {
            ft[i] += n;
            i += lowBit(i);
        }
    }
    /**
     * Get the value of index i
     * @param i index
     * @returns value of the index
     */
    get(i) {
        return this.sum(i + 1) - this.sum(i);
    }
    /**
     * Get the sum of first i elements
     * @param i count of head elements to be added
     * @returns the sum of first i elements
     */
    sum(i) {
        if (i === 0)
            return 0;
        const { ft, min, l } = this;
        if (i === undefined)
            i = l;
        if (i > l)
            throw new Error('[FinweckTree.sum]: `i` is larger than length.');
        let ret = i * min;
        while (i > 0) {
            ret += ft[i];
            i -= lowBit(i);
        }
        return ret;
    }
    /**
     * Get the largest count of head elements whose sum are <= threshold
     * @param threshold
     * @returns the largest count of head elements whose sum are <= threshold
     */
    getBound(threshold) {
        let l = 0;
        let r = this.l;
        while (r > l) {
            const m = Math.floor((l + r) / 2);
            const sumM = this.sum(m);
            if (sumM > threshold) {
                r = m;
                continue;
            }
            else if (sumM < threshold) {
                if (l === m) {
                    if (this.sum(l + 1) <= threshold)
                        return l + 1;
                    return m;
                }
                l = m;
            }
            else {
                return m;
            }
        }
        return l;
    }
}


/***/ }),

/***/ "./node_modules/vueuc/es/virtual-list/src/VirtualList.js":
/*!***************************************************************!*\
  !*** ./node_modules/vueuc/es/virtual-list/src/VirtualList.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! seemly */ "./node_modules/seemly/es/css/index.js");
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! seemly */ "./node_modules/seemly/es/animation/next-frame-once.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/use-memo.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared */ "./node_modules/vueuc/es/shared/cssr.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./node_modules/vueuc/es/shared/finweck-tree.js");
/* harmony import */ var _resize_observer_src__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resize-observer/src */ "./node_modules/vueuc/es/resize-observer/src/VResizeObserver.js");
/* harmony import */ var _css_render_vue3_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @css-render/vue3-ssr */ "./node_modules/@css-render/vue3-ssr/esm/index.js");
/* eslint-disable no-void */
/* eslint-disable @typescript-eslint/restrict-plus-operands */






const styles = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.c)('.v-vl', {
    maxHeight: 'inherit',
    height: '100%',
    overflow: 'auto',
    minWidth: '1px' // a zero width container won't be scrollable
}, [
    (0,_shared__WEBPACK_IMPORTED_MODULE_1__.c)('&:not(.v-vl--show-scrollbar)', {
        scrollbarWidth: 'none'
    }, [
        (0,_shared__WEBPACK_IMPORTED_MODULE_1__.c)('&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb', {
            width: 0,
            height: 0,
            display: 'none'
        })
    ])
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'VirtualList',
    inheritAttrs: false,
    props: {
        showScrollbar: {
            type: Boolean,
            default: true
        },
        items: {
            type: Array,
            default: () => []
        },
        // it is suppose to be the min height
        itemSize: {
            type: Number,
            required: true
        },
        itemResizable: Boolean,
        itemsStyle: [String, Object],
        visibleItemsTag: {
            type: [String, Object],
            default: 'div'
        },
        visibleItemsProps: Object,
        ignoreItemResize: Boolean,
        onScroll: Function,
        onWheel: Function,
        onResize: Function,
        defaultScrollKey: [Number, String],
        defaultScrollIndex: Number,
        keyField: {
            type: String,
            default: 'key'
        },
        // Whether it is a good API?
        // ResizeObserver + footer & header is not enough.
        // Too complex for simple case
        paddingTop: {
            type: [Number, String],
            default: 0
        },
        paddingBottom: {
            type: [Number, String],
            default: 0
        }
    },
    setup(props) {
        const ssrAdapter = (0,_css_render_vue3_ssr__WEBPACK_IMPORTED_MODULE_2__.useSsrAdapter)();
        styles.mount({
            id: 'vueuc/virtual-list',
            head: true,
            anchorMetaName: _shared__WEBPACK_IMPORTED_MODULE_1__.cssrAnchorMetaName,
            ssr: ssrAdapter
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            const { defaultScrollIndex, defaultScrollKey } = props;
            if (defaultScrollIndex !== undefined && defaultScrollIndex !== null) {
                scrollTo({ index: defaultScrollIndex });
            }
            else if (defaultScrollKey !== undefined && defaultScrollKey !== null) {
                scrollTo({ key: defaultScrollKey });
            }
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onActivated)(() => {
            scrollTo({ top: scrollTopRef.value });
        });
        const keyIndexMapRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const map = new Map();
            const { keyField } = props;
            props.items.forEach((item, index) => {
                map.set(item[keyField], index);
            });
            return map;
        });
        const listElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const listHeightRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(undefined);
        const keyToHeightOffset = new Map();
        const finweckTreeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { items, itemSize, keyField } = props;
            const ft = new _shared__WEBPACK_IMPORTED_MODULE_3__.FinweckTree(items.length, itemSize);
            items.forEach((item, index) => {
                const key = item[keyField];
                const heightOffset = keyToHeightOffset.get(key);
                if (heightOffset !== undefined) {
                    ft.add(index, heightOffset);
                }
            });
            return ft;
        });
        const finweckTreeUpdateTrigger = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const scrollTopRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const startIndexRef = (0,vooks__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
            return Math.max(finweckTreeRef.value.getBound(scrollTopRef.value - (0,seemly__WEBPACK_IMPORTED_MODULE_5__.depx)(props.paddingTop)) - 1, 0);
        });
        const viewportItemsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: listHeight } = listHeightRef;
            if (listHeight === undefined)
                return [];
            const { items, itemSize } = props;
            const startIndex = startIndexRef.value;
            const endIndex = Math.min(startIndex + Math.ceil(listHeight / itemSize + 1), items.length - 1);
            const viewportItems = [];
            for (let i = startIndex; i <= endIndex; ++i) {
                viewportItems.push(items[i]);
            }
            return viewportItems;
        });
        const scrollTo = (options) => {
            const { left, top, index, key, position, behavior, debounce = true } = options;
            if (left !== undefined || top !== undefined) {
                scrollToPosition(left, top, behavior);
            }
            else if (index !== undefined) {
                scrollToIndex(index, behavior, debounce);
            }
            else if (key !== undefined) {
                const toIndex = keyIndexMapRef.value.get(key);
                if (toIndex !== undefined)
                    scrollToIndex(toIndex, behavior, debounce);
            }
            else if (position === 'bottom') {
                scrollToPosition(0, Number.MAX_SAFE_INTEGER, behavior);
            }
            else if (position === 'top') {
                scrollToPosition(0, 0, behavior);
            }
        };
        function scrollToIndex(index, behavior, debounce) {
            const { value: ft } = finweckTreeRef;
            const targetTop = ft.sum(index) + (0,seemly__WEBPACK_IMPORTED_MODULE_5__.depx)(props.paddingTop);
            if (!debounce) {
                listElRef.value.scrollTo({
                    left: 0,
                    top: targetTop,
                    behavior
                });
            }
            else {
                const { scrollTop, offsetHeight } = listElRef.value;
                if (targetTop > scrollTop) {
                    const itemSize = ft.get(index);
                    if (targetTop + itemSize <= scrollTop + offsetHeight) {
                        // do nothing
                    }
                    else {
                        listElRef.value.scrollTo({
                            left: 0,
                            top: targetTop + itemSize - offsetHeight,
                            behavior
                        });
                    }
                }
                else {
                    listElRef.value.scrollTo({
                        left: 0,
                        top: targetTop,
                        behavior
                    });
                }
            }
            lastScrollAnchorIndex = index;
        }
        function scrollToPosition(left, top, behavior) {
            listElRef.value.scrollTo({
                left,
                top,
                behavior
            });
        }
        function handleItemResize(key, entry) {
            var _a;
            if (props.ignoreItemResize)
                return;
            if (isHideByVShow(entry.target))
                return;
            const { value: ft } = finweckTreeRef;
            const index = keyIndexMapRef.value.get(key);
            const previousHeight = ft.get(index);
            const height = entry.contentRect.height;
            if (height === previousHeight)
                return;
            // height offset based on itemSize
            // used when rebuild the finweck tree
            const offset = height - props.itemSize;
            if (offset === 0) {
                keyToHeightOffset.delete(key);
            }
            else {
                keyToHeightOffset.set(key, height - props.itemSize);
            }
            // delta height based on finweck tree data
            const delta = height - previousHeight;
            if (delta === 0)
                return;
            if (lastAnchorIndex !== undefined && index <= lastAnchorIndex) {
                (_a = listElRef.value) === null || _a === void 0 ? void 0 : _a.scrollBy(0, delta);
            }
            ft.add(index, delta);
            finweckTreeUpdateTrigger.value++;
        }
        function handleListScroll(e) {
            (0,seemly__WEBPACK_IMPORTED_MODULE_6__.beforeNextFrameOnce)(syncViewport);
            const { onScroll } = props;
            if (onScroll !== undefined)
                onScroll(e);
        }
        function handleListResize(entry) {
            // List is HTMLElement
            if (isHideByVShow(entry.target))
                return;
            // If height is same, return
            if (entry.contentRect.height === listHeightRef.value)
                return;
            listHeightRef.value = entry.contentRect.height;
            const { onResize } = props;
            if (onResize !== undefined)
                onResize(entry);
        }
        let lastScrollAnchorIndex;
        let lastAnchorIndex;
        function syncViewport() {
            const { value: listEl } = listElRef;
            // sometime ref el can be null
            // https://github.com/TuSimple/naive-ui/issues/811
            if (listEl == null)
                return;
            lastAnchorIndex = lastScrollAnchorIndex !== null && lastScrollAnchorIndex !== void 0 ? lastScrollAnchorIndex : startIndexRef.value;
            lastScrollAnchorIndex = undefined;
            scrollTopRef.value = listElRef.value.scrollTop;
        }
        function isHideByVShow(el) {
            let cursor = el;
            while (cursor !== null) {
                if (cursor.style.display === 'none')
                    return true;
                cursor = cursor.parentElement;
            }
            return false;
        }
        return {
            listHeight: listHeightRef,
            listStyle: {
                overflow: 'auto'
            },
            keyToIndex: keyIndexMapRef,
            itemsStyle: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                const { itemResizable } = props;
                const height = (0,seemly__WEBPACK_IMPORTED_MODULE_5__.pxfy)(finweckTreeRef.value.sum());
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                finweckTreeUpdateTrigger.value;
                return [
                    props.itemsStyle,
                    {
                        boxSizing: 'content-box',
                        height: itemResizable ? '' : height,
                        minHeight: itemResizable ? height : '',
                        paddingTop: (0,seemly__WEBPACK_IMPORTED_MODULE_5__.pxfy)(props.paddingTop),
                        paddingBottom: (0,seemly__WEBPACK_IMPORTED_MODULE_5__.pxfy)(props.paddingBottom)
                    }
                ];
            }),
            visibleItemsStyle: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                finweckTreeUpdateTrigger.value;
                return {
                    transform: `translateY(${(0,seemly__WEBPACK_IMPORTED_MODULE_5__.pxfy)(finweckTreeRef.value.sum(startIndexRef.value))})`
                };
            }),
            viewportItems: viewportItemsRef,
            listElRef,
            itemsElRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null),
            scrollTo,
            handleListResize,
            handleListScroll,
            handleItemResize
        };
    },
    render() {
        const { itemResizable, keyField, keyToIndex, visibleItemsTag } = this;
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_resize_observer_src__WEBPACK_IMPORTED_MODULE_7__["default"], {
            onResize: this.handleListResize
        }, {
            default: () => {
                var _a, _b;
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(this.$attrs, {
                    class: ['v-vl', this.showScrollbar && 'v-vl--show-scrollbar'],
                    onScroll: this.handleListScroll,
                    onWheel: this.onWheel,
                    ref: 'listElRef'
                }), [
                    this.items.length !== 0
                        ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', {
                            ref: 'itemsElRef',
                            class: 'v-vl-items',
                            style: this.itemsStyle
                        }, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(visibleItemsTag, Object.assign({
                                class: 'v-vl-visible-items',
                                style: this.visibleItemsStyle
                            }, this.visibleItemsProps), {
                                default: () => this.viewportItems.map((item) => {
                                    const key = item[keyField];
                                    const index = keyToIndex.get(key);
                                    const itemVNode = this.$slots.default({
                                        item,
                                        index
                                    })[0];
                                    if (itemResizable) {
                                        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_resize_observer_src__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                            key,
                                            onResize: (entry) => this.handleItemResize(key, entry)
                                        }, {
                                            default: () => itemVNode
                                        });
                                    }
                                    itemVNode.key = key;
                                    return itemVNode;
                                })
                            })
                        ])
                        : (_b = (_a = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a)
                ]);
            }
        });
    }
}));


/***/ })

}]);