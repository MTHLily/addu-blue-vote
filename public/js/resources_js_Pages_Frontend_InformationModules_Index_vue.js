"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Frontend_InformationModules_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModuleCard.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModuleCard.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    informationModule: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      "default": false
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModuleShow.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModuleShow.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InformationModules_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformationModules.vue */ "./resources/js/Components/InformationModule/InformationModules.vue");
/* harmony import */ var _Components_VideoResources_VideoResources_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/VideoResources/VideoResources.vue */ "./resources/js/Components/VideoResources/VideoResources.vue");
/* harmony import */ var _ModuleCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModuleCard.vue */ "./resources/js/Components/InformationModule/ModuleCard.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    InfoModule: _InformationModules_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VideoResources: _Components_VideoResources_VideoResources_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ModuleCard: _ModuleCard_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    informationModules: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModules.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModules.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModuleCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModuleCard.vue */ "./resources/js/Components/InformationModule/ModuleCard.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    category: {
      type: Object,
      "default": function _default() {
        return {
          title: "Default Category Title"
        };
      }
    },
    modules: {
      type: Object,
      "default": function _default() {
        return {
          title: "Default Module Title",
          img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde? ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
          description: "Default description"
        };
      }
    }
  },
  components: {
    ModuleCard: _ModuleCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/ModuleCard.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/ModuleCard.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  props: {
    module: {
      type: Object,
      "default": function _default() {
        return {
          title: "Default Module Title",
          img: "https://assets.tumblr.com/images/default_header/optica_pattern_01.png",
          description: "Default description"
        };
      }
    }
  }
}));

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PaginatedList.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PaginatedList.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Pagination_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue */ "./resources/js/Components/Pagination.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    pagination: {
      type: Object,
      required: true
    },
    pageKey: {
      type: String,
      "default": "page"
    }
  },
  components: {
    Pagination: _Pagination_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Pagination.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Pagination.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! naive-ui */ "./node_modules/naive-ui/es/popconfirm/src/Popconfirm.js");
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/core/index.mjs");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.defineComponent)({
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link,
    NPopconfirm: naive_ui__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    pagination: Object,
    size: {
      type: String,
      "default": "md"
    },
    pageKey: {
      type: String,
      "default": "page"
    }
  },
  setup: function setup(props) {
    var gotoPage = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__.ref)(1);

    var changePage = function changePage() {
      var _data;

      if (gotoPage.value > props.pagination.last_page) gotoPage.value = props.pagination.last_page;
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit(props.pagination.path, {
        data: (_data = {}, _defineProperty(_data, props.pageKey, gotoPage.value), _defineProperty(_data, "itemsPerPage", props.pagination.per_page), _data),
        preserveScroll: true,
        preserveState: true
      });
    };

    var breakpoints = (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_5__.useBreakpoints)(_vueuse_core__WEBPACK_IMPORTED_MODULE_5__.breakpointsBootstrapV5);
    var actualSize = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {
      return breakpoints.greater("md").value ? "md" : "sm";
    });
    return {
      gotoPage: gotoPage,
      changePage: changePage,
      actualSize: actualSize
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/VideoResources/VideoResourceCard.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/VideoResources/VideoResourceCard.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    videoResource: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      "default": false
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/VideoResources/VideoResources.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/VideoResources/VideoResources.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _VideoResourceCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoResourceCard.vue */ "./resources/js/Components/VideoResources/VideoResourceCard.vue");
/* harmony import */ var _PaginatedList_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PaginatedList.vue */ "./resources/js/Components/PaginatedList.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    VideoResourceCard: _VideoResourceCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PaginatedList: _PaginatedList_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    featured: {
      type: Array
    },
    videos: {
      type: Object,
      required: true
    },
    noTitle: {
      type: Boolean,
      "default": false
    },
    noFeatured: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props) {
    var featuredVideos = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return !!props.featured && props.featured.length > 0 ? props.featured : props.videos.data.slice(0, 3);
    });
    var currentVideo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(featuredVideos.value[0]);
    var currentVideoEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();

    var setCurrentVideo = function setCurrentVideo(video) {
      currentVideo.value = video;
    };

    return {
      currentVideo: currentVideo,
      currentVideoEl: currentVideoEl,
      setCurrentVideo: setCurrentVideo,
      featuredVideos: featuredVideos
    };
  }
}));

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/InformationModules/Index.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/InformationModules/Index.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Layouts_CandidateProfileLayout_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/CandidateProfileLayout.vue */ "./resources/js/Layouts/CandidateProfileLayout.vue");
/* harmony import */ var _Components_InformationModule_InformationModuleCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/InformationModule/InformationModuleCard.vue */ "./resources/js/Components/InformationModule/InformationModuleCard.vue");
/* harmony import */ var _Components_InformationModule_ModuleCard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/InformationModule/ModuleCard.vue */ "./resources/js/Components/InformationModule/ModuleCard.vue");
/* harmony import */ var _Components_InformationModule_InformationModuleShow_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/InformationModule/InformationModuleShow.vue */ "./resources/js/Components/InformationModule/InformationModuleShow.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    CandidateProfileLayout: _Layouts_CandidateProfileLayout_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    InformationModuleCard: _Components_InformationModule_InformationModuleCard_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ModuleCard: _Components_InformationModule_ModuleCard_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    InformationModuleShow: _Components_InformationModule_InformationModuleShow_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    information_modules: {
      type: Array,
      required: true
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModuleCard.vue?vue&type=template&id=36219ab6":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModuleCard.vue?vue&type=template&id=36219ab6 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card-body"
};
var _hoisted_2 = {
  "class": "card-title fs-5"
};
var _hoisted_3 = {
  "class": "card-text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["card hover:shadow-lg cursor-pointer", {
      'bg-primary text-white': _ctx.active
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.informationModule.description), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.informationModule.description), 1
  /* TEXT */
  )])], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModuleShow.vue?vue&type=template&id=226d3c23":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModuleShow.vue?vue&type=template&id=226d3c23 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container mx-auto"
};
var _hoisted_2 = {
  "class": "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ModuleCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModuleCard");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" for information modules "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.informationModules, function (infoMod) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: infoMod,
      "class": "col"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModuleCard, {
      module: infoMod
    }, null, 8
    /* PROPS */
    , ["module"])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModules.vue?vue&type=template&id=71f2875d":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModules.vue?vue&type=template&id=71f2875d ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container mx-auto"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-primary fw-bold my-5"
}, "Information Modules", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "accordion",
  id: "accordionExample"
};
var _hoisted_4 = {
  "class": "accordion-item"
};
var _hoisted_5 = {
  "class": "accordion-header",
  id: "headingOne"
};
var _hoisted_6 = {
  "class": "accordion-button text-white bg-primary",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#catCollapse",
  "aria-expanded": "true",
  "aria-controls": "catCollapse"
};
var _hoisted_7 = {
  id: "catCollapse",
  "class": "accordion-collapse collapse show mx-8 row row-cols-1 row-cols-sm-2 row-cols-md-3",
  "aria-labelledby": "headingOne",
  "data-bs-parent": "#accordionExamples"
};
var _hoisted_8 = {
  "class": "col"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ModuleCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModuleCard");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" for information modules "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.category.title), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <template v-for=\"mod in modules\" :key=\"mod.id\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModuleCard, {
    "class": "m-3",
    mod: _ctx.mod
  }, null, 8
  /* PROPS */
  , ["mod"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </template> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col\">\n                        <ModuleCard class=\"m-3\" :mod=\"mod\"></ModuleCard>\n                    </div> ")])])])])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/ModuleCard.vue?vue&type=template&id=416e77be":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/ModuleCard.vue?vue&type=template&id=416e77be ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card"
};
var _hoisted_2 = ["src", "alt"];
var _hoisted_3 = {
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "card-title"
};
var _hoisted_5 = {
  "class": "card-text"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Learn More... ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.module.cover.url,
    "class": "card-img-top",
    style: {
      height: '300px',
      'object-fit': 'cover'
    },
    alt: _ctx.module.title
  }, null, 8
  /* PROPS */
  , _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.module.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.module.description), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('modules.show', _ctx.module.id),
    "class": "btn btn-primary text-white text-decoration-none"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PaginatedList.vue?vue&type=template&id=3b3e4960":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PaginatedList.vue?vue&type=template&id=3b3e4960 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "d-flex flex-column align-items-center gap-2 mt-3"
};
var _hoisted_2 = {
  "class": "list-group w-100"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "list-group-item"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Pagination");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.pagination.data, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "list-item", {
      item: item
    }, function () {
      return [_hoisted_3];
    });
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Pagination, {
    pagination: _ctx.pagination,
    "page-key": _ctx.pageKey
  }, null, 8
  /* PROPS */
  , ["pagination", "page-key"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Pagination.vue?vue&type=template&id=0e1fe725":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Pagination.vue?vue&type=template&id=0e1fe725 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  key: 1
};
var _hoisted_3 = {
  key: 2,
  "aria-hidden": "true"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#goto",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true"
}, "...")], -1
/* HOISTED */
);

var _hoisted_5 = ["max"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_NPopconfirm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NPopconfirm");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", {
    "class": "mt-3",
    "aria-label": "Page navigation",
    key: _ctx.pagination.per_page
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["pagination", {
      'pagination-lg': _ctx.actualSize === 'lg',
      'pagination-sm': _ctx.actualSize === 'sm'
    }])
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.pagination.links, function (link, ind) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: link.url,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
        disabled: link.active
      }])
    }, [link.label !== '...' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 0,
      href: link.url,
      "class": "page-link",
      "preserve-scroll": ""
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [ind === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_1, "«")) : ind === _ctx.pagination.links.length - 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2, "»")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(link.label), 1
        /* TEXT */
        ))];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NPopconfirm, {
      key: 1,
      id: "goto",
      "negative-text": null,
      "positive-text": "Go to",
      "show-icon": false,
      "on-positive-click": _ctx.changePage
    }, {
      trigger: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_4];
      }),
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "number",
          max: _ctx.pagination.last_page,
          min: 1,
          "class": "form-control",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
            return _ctx.gotoPage = $event;
          })
        }, null, 8
        /* PROPS */
        , _hoisted_5), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.gotoPage]])];
      }),
      _: 1
      /* STABLE */

    }, 8
    /* PROPS */
    , ["on-positive-click"]))], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/VideoResources/VideoResourceCard.vue?vue&type=template&id=77e77f9f":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/VideoResources/VideoResourceCard.vue?vue&type=template&id=77e77f9f ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card-body"
};
var _hoisted_2 = {
  "class": "card-title fs-5"
};
var _hoisted_3 = {
  "class": "card-text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["card hover:shadow-lg cursor-pointer", {
      'bg-primary text-white': _ctx.active
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.videoResource.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.videoResource.description), 1
  /* TEXT */
  )])], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/VideoResources/VideoResources.vue?vue&type=template&id=a8f819d8":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/VideoResources/VideoResources.vue?vue&type=template&id=a8f819d8 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-column mt-1"
};
var _hoisted_2 = {
  key: 0,
  id: "video-resources"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge text-wrap text-white fw-bolder p-3 px-4 fs-5",
  style: {
    'background-color': '#b5231b',
    'border-radius': '30px'
  }
}, " Video Resources ", -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_3];
var _hoisted_5 = {
  key: 1,
  "class": "row"
};
var _hoisted_6 = {
  "class": "d-flex flex-column text-primary fs-1 fw-bold",
  ref: "currentVideoEl"
};
var _hoisted_7 = {
  "class": "ratio ratio-16x9"
};
var _hoisted_8 = ["src", "title"];
var _hoisted_9 = {
  "class": "lead fs-4 fw-bold"
};
var _hoisted_10 = {
  key: 0,
  "class": "lead italic fs-6"
};
var _hoisted_11 = {
  key: 2,
  "class": "row"
};
var _hoisted_12 = {
  "class": "col-12 col-md-8 d-flex flex-column text-primary fs-1 fw-bold",
  ref: "currentVideoEl"
};
var _hoisted_13 = {
  "class": "ratio ratio-16x9"
};
var _hoisted_14 = ["src", "title"];
var _hoisted_15 = {
  "class": "lead fs-4 fw-bold"
};
var _hoisted_16 = {
  key: 0,
  "class": "lead italic fs-6"
};
var _hoisted_17 = {
  "class": "col-12 col-md-4 h-100"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge text-wrap text-white fw-bolder p-3 fs-5 mb-2",
  style: {
    'background-color': '#fdb338',
    'border-radius': '30px'
  }
}, " Featured Videos ", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "d-flex flex-column gap-2 overflow-y-scroll",
  style: {
    "max-height": "29rem"
  }
};
var _hoisted_20 = ["onClick"];
var _hoisted_21 = {
  "class": "row"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "flex flex-column badge text-wrap text-white fw-bolder p-3 fs-5 mt-3",
  style: {
    'background-color': '#fdb338',
    'border-radius': '30px'
  }
}, " More Videos ", -1
/* HOISTED */
);

var _hoisted_23 = ["onClick"];
var _hoisted_24 = {
  "class": "italic"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VideoResourceCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("VideoResourceCard");

  var _component_PaginatedList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PaginatedList");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [!_ctx.noTitle ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h1", _hoisted_2, _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.noFeatured ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentVideo.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
    src: _ctx.currentVideo.link,
    title: _ctx.currentVideo.title,
    allowfullscreen: ""
  }, null, 8
  /* PROPS */
  , _hoisted_8)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentVideo.information), 1
  /* TEXT */
  ), _ctx.currentVideo.guests != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_10, " Guests: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentVideo.guests), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 512
  /* NEED_PATCH */
  )])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentVideo.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
    src: _ctx.currentVideo.link,
    title: _ctx.currentVideo.title,
    allowfullscreen: ""
  }, null, 8
  /* PROPS */
  , _hoisted_14)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentVideo.information), 1
  /* TEXT */
  ), _ctx.currentVideo.guests != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_16, " Guests: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentVideo.guests), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h2>Featured Videos</h2> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.featuredVideos, function (featuredResource) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: featuredResource.id,
      href: "#video-resources",
      "class": "text-decoration-none text-primary",
      onClick: function onClick($event) {
        return _ctx.setCurrentVideo(featuredResource);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VideoResourceCard, {
      "video-resource": featuredResource,
      active: featuredResource.id === _ctx.currentVideo.id
    }, null, 8
    /* PROPS */
    , ["video-resource", "active"])], 8
    /* PROPS */
    , _hoisted_20);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PaginatedList, {
    pagination: _ctx.videos,
    "page-key": "videos"
  }, {
    "list-item": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var item = _ref.item;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: "#video-resources",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["list-group-item list-group-item-action", {
          active: item.id === _ctx.currentVideo.id
        }]),
        onClick: function onClick($event) {
          return _ctx.setCurrentVideo(item);
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title) + " - ", 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.description), 1
      /* TEXT */
      )], 10
      /* CLASS, PROPS */
      , _hoisted_23)];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["pagination"])])]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/InformationModules/Index.vue?vue&type=template&id=70ab3602":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/InformationModules/Index.vue?vue&type=template&id=70ab3602 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container d-flex flex-column mt-2"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-primary fw-bold my-2"
}, "Information Modules", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InformationModuleShow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InformationModuleShow");

  var _component_CandidateProfileLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CandidateProfileLayout");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CandidateProfileLayout, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InformationModuleShow, {
        "information-modules": _ctx.information_modules
      }, null, 8
      /* PROPS */
      , ["information-modules"])])];
    }),
    _: 1
    /* STABLE */

  });
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

/***/ "./node_modules/naive-ui/es/popconfirm/src/Popconfirm.js":
/*!***************************************************************!*\
  !*** ./node_modules/naive-ui/es/popconfirm/src/Popconfirm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _popover_src_Popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../popover/src/Popover */ "./node_modules/naive-ui/es/popover/src/Popover.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/call.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/omit.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/keep.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-theme.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-config.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles */ "./node_modules/naive-ui/es/popconfirm/styles/light.js");
/* harmony import */ var _PopconfirmPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PopconfirmPanel */ "./node_modules/naive-ui/es/popconfirm/src/PopconfirmPanel.js");
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/index.cssr */ "./node_modules/naive-ui/es/popconfirm/src/styles/index.cssr.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interface */ "./node_modules/naive-ui/es/popconfirm/src/interface.js");









const popconfirmProps = Object.assign(Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), _popover_src_Popover__WEBPACK_IMPORTED_MODULE_2__.popoverBaseProps), { positiveText: String, negativeText: String, showIcon: {
        type: Boolean,
        default: true
    }, trigger: {
        type: String,
        default: 'click'
    }, onPositiveClick: Function, onNegativeClick: Function });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Popconfirm',
    props: popconfirmProps,
    __popover__: true,
    setup(props) {
        const { mergedClsPrefixRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_3__["default"])();
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('Popconfirm', '-popconfirm', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_4__["default"], _styles__WEBPACK_IMPORTED_MODULE_5__["default"], props, mergedClsPrefixRef);
        const popoverInstRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        function handlePositiveClick(e) {
            const { onPositiveClick, 'onUpdate:show': onUpdateShow } = props;
            void Promise.resolve(onPositiveClick ? onPositiveClick(e) : true).then((value) => {
                var _a;
                if (value === false)
                    return;
                (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.setShow(false);
                if (onUpdateShow)
                    (0,_utils__WEBPACK_IMPORTED_MODULE_6__.call)(onUpdateShow, false);
            });
        }
        function handleNegativeClick(e) {
            const { onNegativeClick, 'onUpdate:show': onUpdateShow } = props;
            void Promise.resolve(onNegativeClick ? onNegativeClick(e) : true).then((value) => {
                var _a;
                if (value === false)
                    return;
                (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.setShow(false);
                if (onUpdateShow)
                    (0,_utils__WEBPACK_IMPORTED_MODULE_6__.call)(onUpdateShow, false);
            });
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_interface__WEBPACK_IMPORTED_MODULE_7__.popconfirmInjectionKey, {
            mergedThemeRef: themeRef,
            mergedClsPrefixRef
        });
        return {
            mergedTheme: themeRef,
            popoverInstRef,
            handlePositiveClick,
            handleNegativeClick
        };
    },
    render() {
        const { $slots: slots, $props: props, mergedTheme } = this;
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_popover_src_Popover__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_utils__WEBPACK_IMPORTED_MODULE_8__.omit)(props, _PopconfirmPanel__WEBPACK_IMPORTED_MODULE_9__.panelPropKeys, {
            theme: mergedTheme.peers.Popover,
            themeOverrides: mergedTheme.peerOverrides.Popover,
            internalExtraClass: ['popconfirm'],
            ref: 'popoverInstRef'
        }), {
            trigger: slots.activator || slots.trigger,
            default: () => {
                const panelProps = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.keep)(props, _PopconfirmPanel__WEBPACK_IMPORTED_MODULE_9__.panelPropKeys);
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_PopconfirmPanel__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign(Object.assign({}, panelProps), { onPositiveClick: this.handlePositiveClick, onNegativeClick: this.handleNegativeClick }), slots);
            }
        });
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/popconfirm/src/PopconfirmPanel.js":
/*!********************************************************************!*\
  !*** ./node_modules/naive-ui/es/popconfirm/src/PopconfirmPanel.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "panelProps": () => (/* binding */ panelProps),
/* harmony export */   "panelPropKeys": () => (/* binding */ panelPropKeys),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../button */ "./node_modules/naive-ui/es/button/src/Button.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_internal */ "./node_modules/naive-ui/es/_internal/icon/src/Icon.js");
/* harmony import */ var _internal_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_internal/icons */ "./node_modules/naive-ui/es/_internal/icons/Warning.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-locale.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/keysOf.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface */ "./node_modules/naive-ui/es/popconfirm/src/interface.js");







const panelProps = {
    positiveText: String,
    negativeText: String,
    showIcon: {
        type: Boolean,
        default: true
    },
    onPositiveClick: {
        type: Function,
        required: true
    },
    onNegativeClick: {
        type: Function,
        required: true
    }
};
const panelPropKeys = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.keysOf)(panelProps);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'NPopconfirmPanel',
    props: panelProps,
    setup(props) {
        const { localeRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])('Popconfirm');
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const { mergedClsPrefixRef, mergedThemeRef } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_interface__WEBPACK_IMPORTED_MODULE_3__.popconfirmInjectionKey);
        return Object.assign(Object.assign({}, (0,_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])('Popconfirm')), { mergedClsPrefix: mergedClsPrefixRef, cssVars: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                const { common: { cubicBezierEaseInOut }, self: { fontSize, iconSize, iconColor } } = mergedThemeRef.value;
                return {
                    '--n-bezier': cubicBezierEaseInOut,
                    '--n-font-size': fontSize,
                    '--n-icon-size': iconSize,
                    '--n-icon-color': iconColor
                };
            }), localizedPositiveText: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                return props.positiveText || localeRef.value.positiveText;
            }), localizedNegativeText: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                return props.negativeText || localeRef.value.negativeText;
            }), handlePositiveClick(e) {
                props.onPositiveClick(e);
            },
            handleNegativeClick(e) {
                props.onNegativeClick(e);
            } });
    },
    render() {
        var _a;
        const { mergedClsPrefix, $slots } = this;
        const actionContentNode = $slots.action
            ? $slots.action()
            : this.negativeText === null && this.positiveText === null
                ? null
                : [
                    this.negativeText !== null && ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_button__WEBPACK_IMPORTED_MODULE_4__["default"], { size: "small", onClick: this.handleNegativeClick }, { default: () => this.localizedNegativeText })),
                    this.positiveText !== null && ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_button__WEBPACK_IMPORTED_MODULE_4__["default"], { size: "small", type: "primary", onClick: this.handlePositiveClick }, { default: () => this.localizedPositiveText }))
                ];
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: this.cssVars },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-popconfirm__body` },
                this.showIcon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-popconfirm__icon` }, $slots.icon ? ($slots.icon()) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_5__["default"], { clsPrefix: mergedClsPrefix }, { default: () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal_icons__WEBPACK_IMPORTED_MODULE_6__["default"], null) })))) : null, (_a = $slots.default) === null || _a === void 0 ? void 0 :
                _a.call($slots)),
            actionContentNode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-popconfirm__action` }, actionContentNode)) : null));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/popconfirm/src/interface.js":
/*!**************************************************************!*\
  !*** ./node_modules/naive-ui/es/popconfirm/src/interface.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popconfirmInjectionKey": () => (/* binding */ popconfirmInjectionKey)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/create-injection-key.js");

const popconfirmInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-popconfirm');


/***/ }),

/***/ "./node_modules/naive-ui/es/popconfirm/src/styles/index.cssr.js":
/*!**********************************************************************!*\
  !*** ./node_modules/naive-ui/es/popconfirm/src/styles/index.cssr.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_utils/cssr */ "./node_modules/naive-ui/es/_utils/cssr/index.js");
 // vars:
// --n-font-size
// --n-icon-size
// --n-bezier
// --n-icon-color

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('popconfirm', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('body', `
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('icon', `
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('action', `
 margin-top: 8px;
 display: flex;
 justify-content: flex-end;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('button', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:not(:last-child)', {
  marginRight: '8px'
})])])]));

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

/***/ "./resources/js/Components/InformationModule/InformationModuleCard.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/InformationModule/InformationModuleCard.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InformationModuleCard_vue_vue_type_template_id_36219ab6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformationModuleCard.vue?vue&type=template&id=36219ab6 */ "./resources/js/Components/InformationModule/InformationModuleCard.vue?vue&type=template&id=36219ab6");
/* harmony import */ var _InformationModuleCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformationModuleCard.vue?vue&type=script&lang=js */ "./resources/js/Components/InformationModule/InformationModuleCard.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InformationModuleCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InformationModuleCard_vue_vue_type_template_id_36219ab6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/InformationModule/InformationModuleCard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/InformationModule/InformationModuleShow.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/InformationModule/InformationModuleShow.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InformationModuleShow_vue_vue_type_template_id_226d3c23__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformationModuleShow.vue?vue&type=template&id=226d3c23 */ "./resources/js/Components/InformationModule/InformationModuleShow.vue?vue&type=template&id=226d3c23");
/* harmony import */ var _InformationModuleShow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformationModuleShow.vue?vue&type=script&lang=js */ "./resources/js/Components/InformationModule/InformationModuleShow.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InformationModuleShow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InformationModuleShow_vue_vue_type_template_id_226d3c23__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/InformationModule/InformationModuleShow.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/InformationModule/InformationModules.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/Components/InformationModule/InformationModules.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InformationModules_vue_vue_type_template_id_71f2875d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformationModules.vue?vue&type=template&id=71f2875d */ "./resources/js/Components/InformationModule/InformationModules.vue?vue&type=template&id=71f2875d");
/* harmony import */ var _InformationModules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformationModules.vue?vue&type=script&lang=js */ "./resources/js/Components/InformationModule/InformationModules.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InformationModules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InformationModules_vue_vue_type_template_id_71f2875d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/InformationModule/InformationModules.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/InformationModule/ModuleCard.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Components/InformationModule/ModuleCard.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModuleCard_vue_vue_type_template_id_416e77be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModuleCard.vue?vue&type=template&id=416e77be */ "./resources/js/Components/InformationModule/ModuleCard.vue?vue&type=template&id=416e77be");
/* harmony import */ var _ModuleCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModuleCard.vue?vue&type=script&lang=js */ "./resources/js/Components/InformationModule/ModuleCard.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ModuleCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModuleCard_vue_vue_type_template_id_416e77be__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/InformationModule/ModuleCard.vue"]])
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

/***/ "./resources/js/Components/PaginatedList.vue":
/*!***************************************************!*\
  !*** ./resources/js/Components/PaginatedList.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaginatedList_vue_vue_type_template_id_3b3e4960__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginatedList.vue?vue&type=template&id=3b3e4960 */ "./resources/js/Components/PaginatedList.vue?vue&type=template&id=3b3e4960");
/* harmony import */ var _PaginatedList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginatedList.vue?vue&type=script&lang=js */ "./resources/js/Components/PaginatedList.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PaginatedList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PaginatedList_vue_vue_type_template_id_3b3e4960__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/PaginatedList.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Pagination.vue":
/*!************************************************!*\
  !*** ./resources/js/Components/Pagination.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_0e1fe725__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=0e1fe725 */ "./resources/js/Components/Pagination.vue?vue&type=template&id=0e1fe725");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js */ "./resources/js/Components/Pagination.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_0e1fe725__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Pagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/VideoResources/VideoResourceCard.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/Components/VideoResources/VideoResourceCard.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VideoResourceCard_vue_vue_type_template_id_77e77f9f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoResourceCard.vue?vue&type=template&id=77e77f9f */ "./resources/js/Components/VideoResources/VideoResourceCard.vue?vue&type=template&id=77e77f9f");
/* harmony import */ var _VideoResourceCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoResourceCard.vue?vue&type=script&lang=js */ "./resources/js/Components/VideoResources/VideoResourceCard.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_VideoResourceCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VideoResourceCard_vue_vue_type_template_id_77e77f9f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/VideoResources/VideoResourceCard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/VideoResources/VideoResources.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/VideoResources/VideoResources.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VideoResources_vue_vue_type_template_id_a8f819d8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoResources.vue?vue&type=template&id=a8f819d8 */ "./resources/js/Components/VideoResources/VideoResources.vue?vue&type=template&id=a8f819d8");
/* harmony import */ var _VideoResources_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoResources.vue?vue&type=script&lang=js */ "./resources/js/Components/VideoResources/VideoResources.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_VideoResources_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VideoResources_vue_vue_type_template_id_a8f819d8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/VideoResources/VideoResources.vue"]])
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

/***/ "./resources/js/Pages/Frontend/InformationModules/Index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Frontend/InformationModules/Index.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_70ab3602__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=70ab3602 */ "./resources/js/Pages/Frontend/InformationModules/Index.vue?vue&type=template&id=70ab3602");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Frontend/InformationModules/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_70ab3602__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Frontend/InformationModules/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/InformationModule/InformationModuleCard.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/InformationModule/InformationModuleCard.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationModuleCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationModuleCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InformationModuleCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModuleCard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/InformationModule/InformationModuleShow.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/InformationModule/InformationModuleShow.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationModuleShow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationModuleShow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InformationModuleShow.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModuleShow.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/InformationModule/InformationModules.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Components/InformationModule/InformationModules.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationModules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationModules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InformationModules.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModules.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/InformationModule/ModuleCard.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Components/InformationModule/ModuleCard.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModuleCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModuleCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModuleCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/ModuleCard.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Components/PaginatedList.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/PaginatedList.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaginatedList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaginatedList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PaginatedList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PaginatedList.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Pagination.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/Components/Pagination.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Pagination.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/VideoResources/VideoResourceCard.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/VideoResources/VideoResourceCard.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoResourceCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoResourceCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VideoResourceCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/VideoResources/VideoResourceCard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/VideoResources/VideoResources.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Components/VideoResources/VideoResources.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoResources_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoResources_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VideoResources.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/VideoResources/VideoResources.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/Frontend/InformationModules/Index.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Frontend/InformationModules/Index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/InformationModules/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/InformationModule/InformationModuleCard.vue?vue&type=template&id=36219ab6":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Components/InformationModule/InformationModuleCard.vue?vue&type=template&id=36219ab6 ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationModuleCard_vue_vue_type_template_id_36219ab6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationModuleCard_vue_vue_type_template_id_36219ab6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InformationModuleCard.vue?vue&type=template&id=36219ab6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModuleCard.vue?vue&type=template&id=36219ab6");


/***/ }),

/***/ "./resources/js/Components/InformationModule/InformationModuleShow.vue?vue&type=template&id=226d3c23":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Components/InformationModule/InformationModuleShow.vue?vue&type=template&id=226d3c23 ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationModuleShow_vue_vue_type_template_id_226d3c23__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationModuleShow_vue_vue_type_template_id_226d3c23__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InformationModuleShow.vue?vue&type=template&id=226d3c23 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModuleShow.vue?vue&type=template&id=226d3c23");


/***/ }),

/***/ "./resources/js/Components/InformationModule/InformationModules.vue?vue&type=template&id=71f2875d":
/*!********************************************************************************************************!*\
  !*** ./resources/js/Components/InformationModule/InformationModules.vue?vue&type=template&id=71f2875d ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationModules_vue_vue_type_template_id_71f2875d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationModules_vue_vue_type_template_id_71f2875d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InformationModules.vue?vue&type=template&id=71f2875d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/InformationModules.vue?vue&type=template&id=71f2875d");


/***/ }),

/***/ "./resources/js/Components/InformationModule/ModuleCard.vue?vue&type=template&id=416e77be":
/*!************************************************************************************************!*\
  !*** ./resources/js/Components/InformationModule/ModuleCard.vue?vue&type=template&id=416e77be ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModuleCard_vue_vue_type_template_id_416e77be__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModuleCard_vue_vue_type_template_id_416e77be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModuleCard.vue?vue&type=template&id=416e77be */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/InformationModule/ModuleCard.vue?vue&type=template&id=416e77be");


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

/***/ "./resources/js/Components/PaginatedList.vue?vue&type=template&id=3b3e4960":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/PaginatedList.vue?vue&type=template&id=3b3e4960 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaginatedList_vue_vue_type_template_id_3b3e4960__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaginatedList_vue_vue_type_template_id_3b3e4960__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PaginatedList.vue?vue&type=template&id=3b3e4960 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PaginatedList.vue?vue&type=template&id=3b3e4960");


/***/ }),

/***/ "./resources/js/Components/Pagination.vue?vue&type=template&id=0e1fe725":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/Pagination.vue?vue&type=template&id=0e1fe725 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_0e1fe725__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_0e1fe725__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=template&id=0e1fe725 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Pagination.vue?vue&type=template&id=0e1fe725");


/***/ }),

/***/ "./resources/js/Components/VideoResources/VideoResourceCard.vue?vue&type=template&id=77e77f9f":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Components/VideoResources/VideoResourceCard.vue?vue&type=template&id=77e77f9f ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoResourceCard_vue_vue_type_template_id_77e77f9f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoResourceCard_vue_vue_type_template_id_77e77f9f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VideoResourceCard.vue?vue&type=template&id=77e77f9f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/VideoResources/VideoResourceCard.vue?vue&type=template&id=77e77f9f");


/***/ }),

/***/ "./resources/js/Components/VideoResources/VideoResources.vue?vue&type=template&id=a8f819d8":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Components/VideoResources/VideoResources.vue?vue&type=template&id=a8f819d8 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoResources_vue_vue_type_template_id_a8f819d8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoResources_vue_vue_type_template_id_a8f819d8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VideoResources.vue?vue&type=template&id=a8f819d8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/VideoResources/VideoResources.vue?vue&type=template&id=a8f819d8");


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

/***/ "./resources/js/Pages/Frontend/InformationModules/Index.vue?vue&type=template&id=70ab3602":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Frontend/InformationModules/Index.vue?vue&type=template&id=70ab3602 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_70ab3602__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_70ab3602__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=70ab3602 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Frontend/InformationModules/Index.vue?vue&type=template&id=70ab3602");


/***/ }),

/***/ "./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_fbd95714_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=style&index=0&id=fbd95714&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css");


/***/ }),

/***/ "./node_modules/@vueuse/core/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/@vueuse/core/index.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "and": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.and),
/* harmony export */   "assert": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.assert),
/* harmony export */   "biSyncRef": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.biSyncRef),
/* harmony export */   "bypassFilter": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.bypassFilter),
/* harmony export */   "clamp": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.clamp),
/* harmony export */   "containsProp": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.containsProp),
/* harmony export */   "controlledComputed": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.controlledComputed),
/* harmony export */   "controlledRef": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.controlledRef),
/* harmony export */   "createEventHook": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook),
/* harmony export */   "createFilterWrapper": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createFilterWrapper),
/* harmony export */   "createGlobalState": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState),
/* harmony export */   "createReactiveFn": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createReactiveFn),
/* harmony export */   "createSharedComposable": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createSharedComposable),
/* harmony export */   "createSingletonPromise": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createSingletonPromise),
/* harmony export */   "debounceFilter": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.debounceFilter),
/* harmony export */   "debouncedRef": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.debouncedRef),
/* harmony export */   "debouncedWatch": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.debouncedWatch),
/* harmony export */   "eagerComputed": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.eagerComputed),
/* harmony export */   "extendRef": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.extendRef),
/* harmony export */   "get": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.get),
/* harmony export */   "identity": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.identity),
/* harmony export */   "ignorableWatch": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.ignorableWatch),
/* harmony export */   "increaseWithUnit": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.increaseWithUnit),
/* harmony export */   "invoke": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.invoke),
/* harmony export */   "isBoolean": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isBoolean),
/* harmony export */   "isClient": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient),
/* harmony export */   "isDef": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isDef),
/* harmony export */   "isDefined": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isDefined),
/* harmony export */   "isFunction": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction),
/* harmony export */   "isNumber": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber),
/* harmony export */   "isObject": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isObject),
/* harmony export */   "isString": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isString),
/* harmony export */   "isWindow": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isWindow),
/* harmony export */   "makeDestructurable": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.makeDestructurable),
/* harmony export */   "noop": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop),
/* harmony export */   "not": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.not),
/* harmony export */   "now": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.now),
/* harmony export */   "objectPick": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.objectPick),
/* harmony export */   "or": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.or),
/* harmony export */   "pausableFilter": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.pausableFilter),
/* harmony export */   "pausableWatch": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.pausableWatch),
/* harmony export */   "promiseTimeout": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.promiseTimeout),
/* harmony export */   "rand": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.rand),
/* harmony export */   "reactify": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.reactify),
/* harmony export */   "reactifyObject": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.reactifyObject),
/* harmony export */   "reactivePick": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.reactivePick),
/* harmony export */   "refDefault": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.refDefault),
/* harmony export */   "set": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.set),
/* harmony export */   "syncRef": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.syncRef),
/* harmony export */   "throttleFilter": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.throttleFilter),
/* harmony export */   "throttledRef": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.throttledRef),
/* harmony export */   "throttledWatch": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.throttledWatch),
/* harmony export */   "timestamp": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp),
/* harmony export */   "toReactive": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toReactive),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "tryOnBeforeUnmount": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnBeforeUnmount),
/* harmony export */   "tryOnMounted": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted),
/* harmony export */   "tryOnScopeDispose": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose),
/* harmony export */   "tryOnUnmounted": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnUnmounted),
/* harmony export */   "until": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.until),
/* harmony export */   "useCounter": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useCounter),
/* harmony export */   "useDebounce": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useDebounce),
/* harmony export */   "useDebounceFn": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useDebounceFn),
/* harmony export */   "useInterval": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useInterval),
/* harmony export */   "useIntervalFn": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn),
/* harmony export */   "useLastChanged": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useLastChanged),
/* harmony export */   "useThrottle": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useThrottle),
/* harmony export */   "useThrottleFn": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useThrottleFn),
/* harmony export */   "useTimeout": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeout),
/* harmony export */   "useTimeoutFn": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeoutFn),
/* harmony export */   "useToggle": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useToggle),
/* harmony export */   "watchAtMost": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchAtMost),
/* harmony export */   "watchOnce": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchOnce),
/* harmony export */   "watchWithFilter": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchWithFilter),
/* harmony export */   "whenever": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.whenever),
/* harmony export */   "DefaultMagicKeysAliasMap": () => (/* binding */ DefaultMagicKeysAliasMap),
/* harmony export */   "StorageSerializers": () => (/* binding */ StorageSerializers),
/* harmony export */   "SwipeDirection": () => (/* binding */ SwipeDirection),
/* harmony export */   "TransitionPresets": () => (/* binding */ TransitionPresets),
/* harmony export */   "asyncComputed": () => (/* binding */ asyncComputed),
/* harmony export */   "autoResetRef": () => (/* binding */ autoResetRef),
/* harmony export */   "breakpointsAntDesign": () => (/* binding */ breakpointsAntDesign),
/* harmony export */   "breakpointsBootstrapV5": () => (/* binding */ breakpointsBootstrapV5),
/* harmony export */   "breakpointsQuasar": () => (/* binding */ breakpointsQuasar),
/* harmony export */   "breakpointsSematic": () => (/* binding */ breakpointsSematic),
/* harmony export */   "breakpointsTailwind": () => (/* binding */ breakpointsTailwind),
/* harmony export */   "breakpointsVuetify": () => (/* binding */ breakpointsVuetify),
/* harmony export */   "computedInject": () => (/* binding */ computedInject),
/* harmony export */   "createFetch": () => (/* binding */ createFetch),
/* harmony export */   "createUnrefFn": () => (/* binding */ createUnrefFn),
/* harmony export */   "defaultDocument": () => (/* binding */ defaultDocument),
/* harmony export */   "defaultLocation": () => (/* binding */ defaultLocation),
/* harmony export */   "defaultNavigator": () => (/* binding */ defaultNavigator),
/* harmony export */   "defaultWindow": () => (/* binding */ defaultWindow),
/* harmony export */   "getSSRHandler": () => (/* binding */ getSSRHandler),
/* harmony export */   "onClickOutside": () => (/* binding */ onClickOutside),
/* harmony export */   "onKeyDown": () => (/* binding */ onKeyDown),
/* harmony export */   "onKeyPressed": () => (/* binding */ onKeyPressed),
/* harmony export */   "onKeyStroke": () => (/* binding */ onKeyStroke),
/* harmony export */   "onKeyUp": () => (/* binding */ onKeyUp),
/* harmony export */   "onStartTyping": () => (/* binding */ onStartTyping),
/* harmony export */   "setSSRHandler": () => (/* binding */ setSSRHandler),
/* harmony export */   "templateRef": () => (/* binding */ templateRef),
/* harmony export */   "unrefElement": () => (/* binding */ unrefElement),
/* harmony export */   "useActiveElement": () => (/* binding */ useActiveElement),
/* harmony export */   "useAsyncQueue": () => (/* binding */ useAsyncQueue),
/* harmony export */   "useAsyncState": () => (/* binding */ useAsyncState),
/* harmony export */   "useBase64": () => (/* binding */ useBase64),
/* harmony export */   "useBattery": () => (/* binding */ useBattery),
/* harmony export */   "useBreakpoints": () => (/* binding */ useBreakpoints),
/* harmony export */   "useBroadcastChannel": () => (/* binding */ useBroadcastChannel),
/* harmony export */   "useBrowserLocation": () => (/* binding */ useBrowserLocation),
/* harmony export */   "useClamp": () => (/* binding */ useClamp),
/* harmony export */   "useClipboard": () => (/* binding */ useClipboard),
/* harmony export */   "useColorMode": () => (/* binding */ useColorMode),
/* harmony export */   "useConfirmDialog": () => (/* binding */ useConfirmDialog),
/* harmony export */   "useCssVar": () => (/* binding */ useCssVar),
/* harmony export */   "useCycleList": () => (/* binding */ useCycleList),
/* harmony export */   "useDark": () => (/* binding */ useDark),
/* harmony export */   "useDebouncedRefHistory": () => (/* binding */ useDebouncedRefHistory),
/* harmony export */   "useDeviceMotion": () => (/* binding */ useDeviceMotion),
/* harmony export */   "useDeviceOrientation": () => (/* binding */ useDeviceOrientation),
/* harmony export */   "useDevicePixelRatio": () => (/* binding */ useDevicePixelRatio),
/* harmony export */   "useDevicesList": () => (/* binding */ useDevicesList),
/* harmony export */   "useDisplayMedia": () => (/* binding */ useDisplayMedia),
/* harmony export */   "useDocumentVisibility": () => (/* binding */ useDocumentVisibility),
/* harmony export */   "useDraggable": () => (/* binding */ useDraggable),
/* harmony export */   "useElementBounding": () => (/* binding */ useElementBounding),
/* harmony export */   "useElementByPoint": () => (/* binding */ useElementByPoint),
/* harmony export */   "useElementHover": () => (/* binding */ useElementHover),
/* harmony export */   "useElementSize": () => (/* binding */ useElementSize),
/* harmony export */   "useElementVisibility": () => (/* binding */ useElementVisibility),
/* harmony export */   "useEventBus": () => (/* binding */ useEventBus),
/* harmony export */   "useEventListener": () => (/* binding */ useEventListener),
/* harmony export */   "useEventSource": () => (/* binding */ useEventSource),
/* harmony export */   "useEyeDropper": () => (/* binding */ useEyeDropper),
/* harmony export */   "useFavicon": () => (/* binding */ useFavicon),
/* harmony export */   "useFetch": () => (/* binding */ useFetch),
/* harmony export */   "useFocus": () => (/* binding */ useFocus),
/* harmony export */   "useFocusWithin": () => (/* binding */ useFocusWithin),
/* harmony export */   "useFps": () => (/* binding */ useFps),
/* harmony export */   "useFullscreen": () => (/* binding */ useFullscreen),
/* harmony export */   "useGeolocation": () => (/* binding */ useGeolocation),
/* harmony export */   "useIdle": () => (/* binding */ useIdle),
/* harmony export */   "useIntersectionObserver": () => (/* binding */ useIntersectionObserver),
/* harmony export */   "useKeyModifier": () => (/* binding */ useKeyModifier),
/* harmony export */   "useLocalStorage": () => (/* binding */ useLocalStorage),
/* harmony export */   "useMagicKeys": () => (/* binding */ useMagicKeys),
/* harmony export */   "useManualRefHistory": () => (/* binding */ useManualRefHistory),
/* harmony export */   "useMediaControls": () => (/* binding */ useMediaControls),
/* harmony export */   "useMediaQuery": () => (/* binding */ useMediaQuery),
/* harmony export */   "useMemoize": () => (/* binding */ useMemoize),
/* harmony export */   "useMemory": () => (/* binding */ useMemory),
/* harmony export */   "useMounted": () => (/* binding */ useMounted),
/* harmony export */   "useMouse": () => (/* binding */ useMouse),
/* harmony export */   "useMouseInElement": () => (/* binding */ useMouseInElement),
/* harmony export */   "useMousePressed": () => (/* binding */ useMousePressed),
/* harmony export */   "useMutationObserver": () => (/* binding */ useMutationObserver),
/* harmony export */   "useNavigatorLanguage": () => (/* binding */ useNavigatorLanguage),
/* harmony export */   "useNetwork": () => (/* binding */ useNetwork),
/* harmony export */   "useNow": () => (/* binding */ useNow),
/* harmony export */   "useOnline": () => (/* binding */ useOnline),
/* harmony export */   "usePageLeave": () => (/* binding */ usePageLeave),
/* harmony export */   "useParallax": () => (/* binding */ useParallax),
/* harmony export */   "usePermission": () => (/* binding */ usePermission),
/* harmony export */   "usePointer": () => (/* binding */ usePointer),
/* harmony export */   "usePointerSwipe": () => (/* binding */ usePointerSwipe),
/* harmony export */   "usePreferredColorScheme": () => (/* binding */ usePreferredColorScheme),
/* harmony export */   "usePreferredDark": () => (/* binding */ usePreferredDark),
/* harmony export */   "usePreferredLanguages": () => (/* binding */ usePreferredLanguages),
/* harmony export */   "useRafFn": () => (/* binding */ useRafFn),
/* harmony export */   "useRefHistory": () => (/* binding */ useRefHistory),
/* harmony export */   "useResizeObserver": () => (/* binding */ useResizeObserver),
/* harmony export */   "useScreenSafeArea": () => (/* binding */ useScreenSafeArea),
/* harmony export */   "useScriptTag": () => (/* binding */ useScriptTag),
/* harmony export */   "useScroll": () => (/* binding */ useScroll),
/* harmony export */   "useScrollLock": () => (/* binding */ useScrollLock),
/* harmony export */   "useSessionStorage": () => (/* binding */ useSessionStorage),
/* harmony export */   "useShare": () => (/* binding */ useShare),
/* harmony export */   "useSpeechRecognition": () => (/* binding */ useSpeechRecognition),
/* harmony export */   "useSpeechSynthesis": () => (/* binding */ useSpeechSynthesis),
/* harmony export */   "useStorage": () => (/* binding */ useStorage),
/* harmony export */   "useStorageAsync": () => (/* binding */ useStorageAsync),
/* harmony export */   "useStyleTag": () => (/* binding */ useStyleTag),
/* harmony export */   "useSwipe": () => (/* binding */ useSwipe),
/* harmony export */   "useTemplateRefsList": () => (/* binding */ useTemplateRefsList),
/* harmony export */   "useTextSelection": () => (/* binding */ useTextSelection),
/* harmony export */   "useThrottledRefHistory": () => (/* binding */ useThrottledRefHistory),
/* harmony export */   "useTimeAgo": () => (/* binding */ useTimeAgo),
/* harmony export */   "useTimestamp": () => (/* binding */ useTimestamp),
/* harmony export */   "useTitle": () => (/* binding */ useTitle),
/* harmony export */   "useTransition": () => (/* binding */ useTransition),
/* harmony export */   "useUrlSearchParams": () => (/* binding */ useUrlSearchParams),
/* harmony export */   "useUserMedia": () => (/* binding */ useUserMedia),
/* harmony export */   "useVModel": () => (/* binding */ useVModel),
/* harmony export */   "useVModels": () => (/* binding */ useVModels),
/* harmony export */   "useVibrate": () => (/* binding */ useVibrate),
/* harmony export */   "useVirtualList": () => (/* binding */ useVirtualList),
/* harmony export */   "useWakeLock": () => (/* binding */ useWakeLock),
/* harmony export */   "useWebNotification": () => (/* binding */ useWebNotification),
/* harmony export */   "useWebSocket": () => (/* binding */ useWebSocket),
/* harmony export */   "useWebWorker": () => (/* binding */ useWebWorker),
/* harmony export */   "useWebWorkerFn": () => (/* binding */ useWebWorkerFn),
/* harmony export */   "useWindowFocus": () => (/* binding */ useWindowFocus),
/* harmony export */   "useWindowScroll": () => (/* binding */ useWindowScroll),
/* harmony export */   "useWindowSize": () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueuse/shared */ "./node_modules/@vueuse/core/node_modules/@vueuse/shared/index.mjs");
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-demi */ "./node_modules/@vueuse/core/node_modules/vue-demi/lib/index.mjs");




function asyncComputed(evaluationCallback, initialState, optionsOrRef) {
  let options;
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isRef)(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef
    };
  } else {
    options = optionsOrRef || {};
  }
  const {
    lazy = false,
    evaluating = void 0,
    onError = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop
  } = options;
  const started = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(!lazy);
  const current = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialState);
  let counter = 0;
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watchEffect)(async (onInvalidate) => {
    if (!started.value)
      return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    if (evaluating) {
      Promise.resolve().then(() => {
        evaluating.value = true;
      });
    }
    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating)
            evaluating.value = false;
          if (!hasFinished)
            cancelCallback();
        });
      });
      if (counterAtBeginning === counter)
        current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating)
        evaluating.value = false;
      hasFinished = true;
    }
  });
  if (lazy) {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      started.value = true;
      return current.value;
    });
  } else {
    return current;
  }
}

function autoResetRef(defaultValue, afterMs = 1e4) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.customRef)((track, trigger) => {
    let value = defaultValue;
    let timer;
    const resetAfter = () => setTimeout(() => {
      value = defaultValue;
      trigger();
    }, (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(afterMs));
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
        clearTimeout(timer);
        timer = resetAfter();
      }
    };
  });
}

function computedInject(key, options, defaultSource, treatDefaultAsFactory) {
  let source = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.inject)(key);
  if (defaultSource)
    source = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.inject)(key, defaultSource);
  if (treatDefaultAsFactory)
    source = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.inject)(key, defaultSource, treatDefaultAsFactory);
  if (typeof options === "function") {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)((ctx) => options(source, ctx));
  } else {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
      get: (ctx) => options.get(source, ctx),
      set: options.set
    });
  }
}

const createUnrefFn = (fn) => {
  return function(...args) {
    return fn.apply(this, args.map((i) => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(i)));
  };
};

function unrefElement(elRef) {
  var _a;
  const plain = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

const defaultWindow = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient ? window : void 0;
const defaultDocument = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient ? window.document : void 0;
const defaultNavigator = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient ? window.navigator : void 0;
const defaultLocation = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient ? window.location : void 0;

function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
  let cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(stop);
  return stop;
}

function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow } = options;
  if (!window)
    return;
  const shouldListen = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(true);
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el) || !shouldListen.value)
      return;
    handler(event);
  };
  const cleanup = [
    useEventListener(window, "click", listener, { passive: true, capture: true }),
    useEventListener(window, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e.composedPath().includes(el);
    }, { passive: true })
  ];
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}

var __defProp$g = Object.defineProperty;
var __defProps$8 = Object.defineProperties;
var __getOwnPropDescs$8 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$i = Object.getOwnPropertySymbols;
var __hasOwnProp$i = Object.prototype.hasOwnProperty;
var __propIsEnum$i = Object.prototype.propertyIsEnumerable;
var __defNormalProp$g = (obj, key, value) => key in obj ? __defProp$g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$g = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$i.call(b, prop))
      __defNormalProp$g(a, prop, b[prop]);
  if (__getOwnPropSymbols$i)
    for (var prop of __getOwnPropSymbols$i(b)) {
      if (__propIsEnum$i.call(b, prop))
        __defNormalProp$g(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$8 = (a, b) => __defProps$8(a, __getOwnPropDescs$8(b));
const createKeyPredicate = (keyFilter) => {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  else if (keyFilter)
    return () => true;
  else
    return () => false;
};
function onKeyStroke(key, handler, options = {}) {
  const { target = defaultWindow, eventName = "keydown", passive = false } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function onKeyDown(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$8(__spreadValues$g({}, options), { eventName: "keydown" }));
}
function onKeyPressed(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$8(__spreadValues$g({}, options), { eventName: "keypress" }));
}
function onKeyUp(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$8(__spreadValues$g({}, options), { eventName: "keyup" }));
}

const isFocusedElementEditable = () => {
  const { activeElement, body } = document;
  if (!activeElement)
    return false;
  if (activeElement === body)
    return false;
  switch (activeElement.tagName) {
    case "INPUT":
    case "TEXTAREA":
      return true;
  }
  return activeElement.hasAttribute("contenteditable");
};
const isTypedCharValid = ({
  keyCode,
  metaKey,
  ctrlKey,
  altKey
}) => {
  if (metaKey || ctrlKey || altKey)
    return false;
  if (keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105)
    return true;
  if (keyCode >= 65 && keyCode <= 90)
    return true;
  return false;
};
function onStartTyping(callback, options = {}) {
  const { document: document2 = defaultDocument } = options;
  const keydown = (event) => {
    !isFocusedElementEditable() && isTypedCharValid(event) && callback(event);
  };
  if (document2)
    useEventListener(document2, "keydown", keydown, { passive: true });
}

function templateRef(key, initialValue = null) {
  const instance = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance)();
  let _trigger = () => {
  };
  const element = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.customRef)((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        var _a, _b;
        track();
        return (_b = (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$refs[key]) != null ? _b : initialValue;
      },
      set() {
      }
    };
  });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(_trigger);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.onUpdated)(_trigger);
  return element;
}

function useActiveElement(options = {}) {
  const { window = defaultWindow } = options;
  const counter = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  if (window) {
    useEventListener(window, "blur", () => counter.value += 1, true);
    useEventListener(window, "focus", () => counter.value += 1, true);
  }
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    counter.value;
    return window == null ? void 0 : window.document.activeElement;
  });
}

function useAsyncQueue(tasks, options = {}) {
  const {
    interrupt = true,
    onError = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    onFinished = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop
  } = options;
  const promiseState = {
    pending: "pending",
    rejected: "rejected",
    fulfilled: "fulfilled"
  };
  const initialResult = Array.from(new Array(tasks.length), () => ({ state: promiseState.pending, data: null }));
  const result = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(initialResult);
  const activeIndex = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(-1);
  if (!tasks || tasks.length === 0) {
    onFinished();
    return {
      activeIndex,
      result
    };
  }
  function updateResult(state, res) {
    activeIndex.value++;
    result[activeIndex.value].data = res;
    result[activeIndex.value].state = state;
  }
  tasks.reduce((prev, curr) => {
    return prev.then((prevRes) => {
      var _a;
      if (((_a = result[activeIndex.value]) == null ? void 0 : _a.state) === promiseState.rejected && interrupt) {
        onFinished();
        return;
      }
      return curr(prevRes).then((currentRes) => {
        updateResult(promiseState.fulfilled, currentRes);
        activeIndex.value === tasks.length - 1 && onFinished();
        return currentRes;
      });
    }).catch((e) => {
      updateResult(promiseState.rejected, e);
      onError();
      return e;
    });
  }, Promise.resolve());
  return {
    activeIndex,
    result
  };
}

function useAsyncState(promise, initialState, options) {
  const {
    immediate = true,
    delay = 0,
    onError = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    resetOnExecute = true,
    shallow = true
  } = options != null ? options : {};
  const state = shallow ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(initialState) : (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialState);
  const isReady = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const isLoading = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  async function execute(delay2 = 0, ...args) {
    if (resetOnExecute)
      state.value = initialState;
    error.value = void 0;
    isReady.value = false;
    isLoading.value = true;
    if (delay2 > 0)
      await (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.promiseTimeout)(delay2);
    const _promise = typeof promise === "function" ? promise(...args) : promise;
    try {
      const data = await _promise;
      state.value = data;
      isReady.value = true;
    } catch (e) {
      error.value = e;
      onError(e);
    }
    isLoading.value = false;
    return state.value;
  }
  if (immediate)
    execute(delay);
  return {
    state,
    isReady,
    isLoading,
    error,
    execute
  };
}

function useBase64(target, options) {
  const base64 = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const promise = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  function execute() {
    if (!_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient)
      return;
    promise.value = new Promise((resolve, reject) => {
      try {
        const _target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
        if (_target === void 0 || _target === null) {
          resolve("");
        } else if (typeof _target === "string") {
          resolve(blobToBase64(new Blob([_target], { type: "text/plain" })));
        } else if (_target instanceof Blob) {
          resolve(blobToBase64(_target));
        } else if (_target instanceof ArrayBuffer) {
          resolve(window.btoa(String.fromCharCode(...new Uint8Array(_target))));
        } else if (_target instanceof HTMLCanvasElement) {
          resolve(_target.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
        } else if (_target instanceof HTMLImageElement) {
          const img = _target.cloneNode(false);
          img.crossOrigin = "Anonymous";
          imgLoaded(img).then(() => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
          }).catch(reject);
        } else {
          reject(new Error("target is unsupported types"));
        }
      } catch (error) {
        reject(error);
      }
    });
    promise.value.then((res) => base64.value = res);
    return promise.value;
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(target, execute, { immediate: true });
  return {
    base64,
    promise,
    execute
  };
}
function imgLoaded(img) {
  return new Promise((resolve, reject) => {
    if (!img.complete) {
      img.onload = () => {
        resolve();
      };
      img.onerror = reject;
    } else {
      resolve();
    }
  });
}
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = (e) => {
      resolve(e.target.result);
    };
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

function useBattery({ navigator = defaultNavigator } = {}) {
  const events = ["chargingchange", "chargingtimechange", "dischargingtimechange", "levelchange"];
  const isSupported = navigator && "getBattery" in navigator;
  const charging = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const chargingTime = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const dischargingTime = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const level = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(1);
  let battery;
  function updateBatteryInfo() {
    charging.value = this.charging;
    chargingTime.value = this.chargingTime || 0;
    dischargingTime.value = this.dischargingTime || 0;
    level.value = this.level;
  }
  if (isSupported) {
    navigator.getBattery().then((_battery) => {
      battery = _battery;
      updateBatteryInfo.call(battery);
      for (const event of events)
        useEventListener(battery, event, updateBatteryInfo, { passive: true });
    });
  }
  return {
    isSupported,
    charging,
    chargingTime,
    dischargingTime,
    level
  };
}

function useMediaQuery(query, options = {}) {
  const { window = defaultWindow } = options;
  let mediaQuery;
  const matches = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const update = () => {
    if (!window)
      return;
    if (!mediaQuery)
      mediaQuery = window.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
      if ("removeEventListener" in update)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches;
}

const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
const breakpointsBootstrapV5 = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
const breakpointsVuetify = {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904
};
const breakpointsAntDesign = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
const breakpointsQuasar = {
  xs: 600,
  sm: 1024,
  md: 1440,
  lg: 1920
};
const breakpointsSematic = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop4K: 2560
};

var __defProp$f = Object.defineProperty;
var __getOwnPropSymbols$h = Object.getOwnPropertySymbols;
var __hasOwnProp$h = Object.prototype.hasOwnProperty;
var __propIsEnum$h = Object.prototype.propertyIsEnumerable;
var __defNormalProp$f = (obj, key, value) => key in obj ? __defProp$f(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$f = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$h.call(b, prop))
      __defNormalProp$f(a, prop, b[prop]);
  if (__getOwnPropSymbols$h)
    for (var prop of __getOwnPropSymbols$h(b)) {
      if (__propIsEnum$h.call(b, prop))
        __defNormalProp$f(a, prop, b[prop]);
    }
  return a;
};
function useBreakpoints(breakpoints, options = {}) {
  function getValue(k, delta) {
    let v = breakpoints[k];
    if (delta != null)
      v = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.increaseWithUnit)(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window = defaultWindow } = options;
  function match(query) {
    if (!window)
      return false;
    return window.matchMedia(query).matches;
  }
  const greater = (k) => {
    return useMediaQuery(`(min-width: ${getValue(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => greater(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  return __spreadValues$f({
    greater,
    smaller(k) {
      return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options);
    },
    between(a, b) {
      return useMediaQuery(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`, options);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue(k, -0.1)})`);
    },
    isInBetween(a, b) {
      return match(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
    }
  }, shortcutMethods);
}

const useBroadcastChannel = (options) => {
  const {
    name,
    window = defaultWindow
  } = options;
  const isSupported = window && "BroadcastChannel" in window;
  const isClosed = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const channel = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const post = (data2) => {
    if (channel.value)
      channel.value.postMessage(data2);
  };
  const close = () => {
    if (channel.value)
      channel.value.close();
    isClosed.value = true;
  };
  if (isSupported) {
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => {
      error.value = null;
      channel.value = new BroadcastChannel(name);
      channel.value.addEventListener("message", (e) => {
        data.value = e.data;
      }, { passive: true });
      channel.value.addEventListener("messageerror", (e) => {
        error.value = e;
      }, { passive: true });
      channel.value.addEventListener("close", () => {
        isClosed.value = true;
      });
    });
  }
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    close();
  });
  return {
    isSupported,
    channel,
    data,
    post,
    close,
    error,
    isClosed
  };
};

function useBrowserLocation({ window = defaultWindow } = {}) {
  const buildState = (trigger) => {
    const { state: state2, length } = (window == null ? void 0 : window.history) || {};
    const { hash, host, hostname, href, origin, pathname, port, protocol, search } = (window == null ? void 0 : window.location) || {};
    return {
      trigger,
      state: state2,
      length,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    };
  };
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(buildState("load"));
  if (window) {
    useEventListener(window, "popstate", () => state.value = buildState("popstate"), { passive: true });
    useEventListener(window, "hashchange", () => state.value = buildState("hashchange"), { passive: true });
  }
  return state;
}

function useClamp(value, min, max) {
  const _value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(value);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.clamp)(_value.value, (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(min), (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(max));
    },
    set(value2) {
      _value.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.clamp)(value2, (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(min), (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(max));
    }
  });
}

function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500
  } = options;
  const events = ["copy", "cut"];
  const isSupported = Boolean(navigator && "clipboard" in navigator);
  const text = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const copied = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const timeout = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeoutFn)(() => copied.value = false, copiedDuring);
  function updateText() {
    navigator.clipboard.readText().then((value) => {
      text.value = value;
    });
  }
  if (isSupported && read) {
    for (const event of events)
      useEventListener(event, updateText);
  }
  async function copy(value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(source)) {
    if (isSupported && value != null) {
      await navigator.clipboard.writeText(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}

const _global = typeof globalThis === "undefined" ? undefined : globalThis;
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function setSSRHandler(key, fn) {
  handlers[key] = fn;
}

function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : Array.isArray(rawInit) ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}

const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  }
};
function useStorage(key, initialValue, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const rawInit = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(initialValue);
  const type = guessSerializerType(rawInit);
  const data = (shallow ? vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef : vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    if (!storage || event && event.key !== key)
      return;
    try {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        data.value = rawInit;
        if (writeDefaults && rawInit !== null)
          storage.setItem(key, serializer.write(rawInit));
      } else if (typeof rawValue !== "string") {
        data.value = rawValue;
      } else {
        data.value = serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    }
  }
  read();
  if (window && listenToStorageChanges)
    useEventListener(window, "storage", (e) => setTimeout(() => read(e), 0));
  if (storage) {
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchWithFilter)(data, () => {
      try {
        if (data.value == null)
          storage.removeItem(key);
        else
          storage.setItem(key, serializer.write(data.value));
      } catch (e) {
        onError(e);
      }
    }, {
      flush,
      deep,
      eventFilter
    });
  }
  return data;
}

function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}

var __defProp$e = Object.defineProperty;
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __defNormalProp$e = (obj, key, value) => key in obj ? __defProp$e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$e = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$g.call(b, prop))
      __defNormalProp$e(a, prop, b[prop]);
  if (__getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(b)) {
      if (__propIsEnum$g.call(b, prop))
        __defNormalProp$e(a, prop, b[prop]);
    }
  return a;
};
function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    window = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef
  } = options;
  const modes = __spreadValues$e({
    auto: "",
    light: "light",
    dark: "dark"
  }, options.modes || {});
  const preferredDark = usePreferredDark({ window });
  const preferredMode = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("auto") : useStorage(storageKey, "auto", storage, { window, listenToStorageChanges }));
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return store.value === "auto" ? preferredMode.value : store.value;
    },
    set(v) {
      store.value = v;
    }
  });
  const updateHTMLAttrs = getSSRHandler("updateHTMLAttrs", (selector2, attribute2, value) => {
    const el = window == null ? void 0 : window.document.querySelector(selector2);
    if (!el)
      return;
    if (attribute2 === "class") {
      const current = value.split(/\s/g);
      Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
        if (current.includes(v))
          el.classList.add(v);
        else
          el.classList.remove(v);
      });
    } else {
      el.setAttribute(attribute2, value);
    }
  });
  function defaultOnChanged(mode) {
    var _a;
    updateHTMLAttrs(selector, attribute, (_a = modes[mode]) != null ? _a : mode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(state, onChanged, { flush: "post", immediate: true });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => onChanged(state.value));
  return state;
}

function useConfirmDialog(revealed = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false)) {
  const confirmHook = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const cancelHook = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const revealHook = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  let _resolve = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
  const reveal = (data) => {
    revealHook.trigger(data);
    revealed.value = true;
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  };
  const confirm = (data) => {
    revealed.value = false;
    confirmHook.trigger(data);
    _resolve({ data, isCanceled: false });
  };
  const cancel = (data) => {
    revealed.value = false;
    cancelHook.trigger(data);
    _resolve({ data, isCanceled: true });
  };
  return {
    isRevealed: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => revealed.value),
    reveal,
    confirm,
    cancel,
    onReveal: revealHook.on,
    onConfirm: confirmHook.on,
    onCancel: cancelHook.on
  };
}

function useCssVar(prop, target, { window = defaultWindow } = {}) {
  const variable = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const elRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    var _a;
    return unrefElement(target) || ((_a = window == null ? void 0 : window.document) == null ? void 0 : _a.documentElement);
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(elRef, (el) => {
    if (el && window)
      variable.value = window.getComputedStyle(el).getPropertyValue(prop);
  }, { immediate: true });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(variable, (val) => {
    var _a;
    if ((_a = elRef.value) == null ? void 0 : _a.style)
      elRef.value.style.setProperty(prop, val);
  });
  return variable;
}

function useCycleList(list, options) {
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)((options == null ? void 0 : options.initialValue) || list[0]);
  const index = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      var _a;
      let index2 = (options == null ? void 0 : options.getIndexOf) ? options.getIndexOf(state.value, list) : list.indexOf(state.value);
      if (index2 < 0)
        index2 = (_a = options == null ? void 0 : options.fallbackIndex) != null ? _a : 0;
      return index2;
    },
    set(v) {
      set(v);
    }
  });
  function set(i) {
    const length = list.length;
    const index2 = (i % length + length) % length;
    const value = list[index2];
    state.value = value;
    return value;
  }
  function shift(delta = 1) {
    return set(index.value + delta);
  }
  function next(n = 1) {
    return shift(n);
  }
  function prev(n = 1) {
    return shift(-n);
  }
  return {
    state,
    index,
    next,
    prev
  };
}

var __defProp$d = Object.defineProperty;
var __defProps$7 = Object.defineProperties;
var __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$f = Object.getOwnPropertySymbols;
var __hasOwnProp$f = Object.prototype.hasOwnProperty;
var __propIsEnum$f = Object.prototype.propertyIsEnumerable;
var __defNormalProp$d = (obj, key, value) => key in obj ? __defProp$d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$d = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$f.call(b, prop))
      __defNormalProp$d(a, prop, b[prop]);
  if (__getOwnPropSymbols$f)
    for (var prop of __getOwnPropSymbols$f(b)) {
      if (__propIsEnum$f.call(b, prop))
        __defNormalProp$d(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$7 = (a, b) => __defProps$7(a, __getOwnPropDescs$7(b));
function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = "",
    window = defaultWindow
  } = options;
  const mode = useColorMode(__spreadProps$7(__spreadValues$d({}, options), {
    onChanged: (mode2, defaultHandler) => {
      var _a;
      if (options.onChanged)
        (_a = options.onChanged) == null ? void 0 : _a.call(options, mode2 === "dark");
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  }));
  const preferredDark = usePreferredDark({ window });
  const isDark = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      if (v === preferredDark.value)
        mode.value = "auto";
      else
        mode.value = v ? "dark" : "light";
    }
  });
  return isDark;
}

const fnClone = (v) => JSON.parse(JSON.stringify(v));
const fnBypass = (v) => v;
const fnSetSource = (source, value) => source.value = value;
function defaultDump(clone) {
  return clone ? (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(clone) ? clone : fnClone : fnBypass;
}
function defaultParse(clone) {
  return clone ? (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(clone) ? clone : fnClone : fnBypass;
}
function useManualRefHistory(source, options = {}) {
  const {
    clone = false,
    dump = defaultDump(clone),
    parse = defaultParse(clone),
    setSource = fnSetSource
  } = options;
  function _createHistoryRecord() {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.markRaw)({
      snapshot: dump(source.value),
      timestamp: (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp)()
    });
  }
  const last = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(_createHistoryRecord());
  const undoStack = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const redoStack = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const _setSource = (record) => {
    setSource(source, parse(record.snapshot));
    last.value = record;
  };
  const commit = () => {
    undoStack.value.unshift(last.value);
    last.value = _createHistoryRecord();
    if (options.capacity && undoStack.value.length > options.capacity)
      undoStack.value.splice(options.capacity, Infinity);
    if (redoStack.value.length)
      redoStack.value.splice(0, redoStack.value.length);
  };
  const clear = () => {
    undoStack.value.splice(0, undoStack.value.length);
    redoStack.value.splice(0, redoStack.value.length);
  };
  const undo = () => {
    const state = undoStack.value.shift();
    if (state) {
      redoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const redo = () => {
    const state = redoStack.value.shift();
    if (state) {
      undoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const reset = () => {
    _setSource(last.value);
  };
  const history = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => [last.value, ...undoStack.value]);
  const canUndo = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => undoStack.value.length > 0);
  const canRedo = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => redoStack.value.length > 0);
  return {
    source,
    undoStack,
    redoStack,
    last,
    history,
    canUndo,
    canRedo,
    clear,
    commit,
    reset,
    undo,
    redo
  };
}

var __defProp$c = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
var __hasOwnProp$e = Object.prototype.hasOwnProperty;
var __propIsEnum$e = Object.prototype.propertyIsEnumerable;
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$e.call(b, prop))
      __defNormalProp$c(a, prop, b[prop]);
  if (__getOwnPropSymbols$e)
    for (var prop of __getOwnPropSymbols$e(b)) {
      if (__propIsEnum$e.call(b, prop))
        __defNormalProp$c(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
function useRefHistory(source, options = {}) {
  const {
    deep = false,
    flush = "pre",
    eventFilter
  } = options;
  const {
    eventFilter: composedFilter,
    pause,
    resume: resumeTracking,
    isActive: isTracking
  } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.pausableFilter)(eventFilter);
  const {
    ignoreUpdates,
    ignorePrevAsyncUpdates,
    stop
  } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.ignorableWatch)(source, commit, { deep, flush, eventFilter: composedFilter });
  function setSource(source2, value) {
    ignorePrevAsyncUpdates();
    ignoreUpdates(() => {
      source2.value = value;
    });
  }
  const manualHistory = useManualRefHistory(source, __spreadProps$6(__spreadValues$c({}, options), { clone: options.clone || deep, setSource }));
  const { clear, commit: manualCommit } = manualHistory;
  function commit() {
    ignorePrevAsyncUpdates();
    manualCommit();
  }
  function resume(commitNow) {
    resumeTracking();
    if (commitNow)
      commit();
  }
  function batch(fn) {
    let canceled = false;
    const cancel = () => canceled = true;
    ignoreUpdates(() => {
      fn(cancel);
    });
    if (!canceled)
      commit();
  }
  function dispose() {
    stop();
    clear();
  }
  return __spreadProps$6(__spreadValues$c({}, manualHistory), {
    isTracking,
    pause,
    resume,
    commit,
    batch,
    dispose
  });
}

var __defProp$b = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$d = Object.getOwnPropertySymbols;
var __hasOwnProp$d = Object.prototype.hasOwnProperty;
var __propIsEnum$d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$d.call(b, prop))
      __defNormalProp$b(a, prop, b[prop]);
  if (__getOwnPropSymbols$d)
    for (var prop of __getOwnPropSymbols$d(b)) {
      if (__propIsEnum$d.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
function useDebouncedRefHistory(source, options = {}) {
  const filter = options.debounce ? (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.debounceFilter)(options.debounce) : void 0;
  const history = useRefHistory(source, __spreadProps$5(__spreadValues$b({}, options), { eventFilter: filter }));
  return __spreadValues$b({}, history);
}

function useDeviceMotion(options = {}) {
  const {
    window = defaultWindow,
    eventFilter = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.bypassFilter
  } = options;
  const acceleration = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({ x: null, y: null, z: null });
  const rotationRate = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({ alpha: null, beta: null, gamma: null });
  const interval = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const accelerationIncludingGravity = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({
    x: null,
    y: null,
    z: null
  });
  if (window) {
    const onDeviceMotion = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createFilterWrapper)(eventFilter, (event) => {
      acceleration.value = event.acceleration;
      accelerationIncludingGravity.value = event.accelerationIncludingGravity;
      rotationRate.value = event.rotationRate;
      interval.value = event.interval;
    });
    useEventListener(window, "devicemotion", onDeviceMotion);
  }
  return {
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    interval
  };
}

function useDeviceOrientation(options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = Boolean(window && "DeviceOrientationEvent" in window);
  const isAbsolute = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const alpha = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const beta = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const gamma = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  if (window && isSupported) {
    useEventListener(window, "deviceorientation", (event) => {
      isAbsolute.value = event.absolute;
      alpha.value = event.alpha;
      beta.value = event.beta;
      gamma.value = event.gamma;
    });
  }
  return {
    isSupported,
    isAbsolute,
    alpha,
    beta,
    gamma
  };
}

const DEVICE_PIXEL_RATIO_SCALES = [
  1,
  1.325,
  1.4,
  1.5,
  1.8,
  2,
  2.4,
  2.5,
  2.75,
  3,
  3.5,
  4
];
function useDevicePixelRatio({
  window = defaultWindow
} = {}) {
  if (!window) {
    return {
      pixelRatio: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(1)
    };
  }
  const pixelRatio = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(window.devicePixelRatio);
  const handleDevicePixelRatio = () => {
    pixelRatio.value = window.devicePixelRatio;
  };
  useEventListener(window, "resize", handleDevicePixelRatio, { passive: true });
  DEVICE_PIXEL_RATIO_SCALES.forEach((dppx) => {
    const mqlMin = useMediaQuery(`screen and (min-resolution: ${dppx}dppx)`);
    const mqlMax = useMediaQuery(`screen and (max-resolution: ${dppx}dppx)`);
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([mqlMin, mqlMax], handleDevicePixelRatio);
  });
  return { pixelRatio };
}

function usePermission(permissionDesc, options = {}) {
  const {
    controls = false,
    navigator = defaultNavigator
  } = options;
  const isSupported = Boolean(navigator && "permissions" in navigator);
  let permissionStatus;
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const onChange = () => {
    if (permissionStatus)
      state.value = permissionStatus.state;
  };
  const query = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createSingletonPromise)(async () => {
    if (!isSupported)
      return;
    if (!permissionStatus) {
      try {
        permissionStatus = await navigator.permissions.query(desc);
        useEventListener(permissionStatus, "change", onChange);
        onChange();
      } catch (e) {
        state.value = "prompt";
      }
    }
    return permissionStatus;
  });
  query();
  if (controls) {
    return {
      state,
      isSupported,
      query
    };
  } else {
    return state;
  }
}

function useDevicesList(options = {}) {
  const {
    navigator = defaultNavigator,
    requestPermissions = false,
    constraints = { audio: true, video: true },
    onUpdated
  } = options;
  const devices = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const videoInputs = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => devices.value.filter((i) => i.kind === "videoinput"));
  const audioInputs = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => devices.value.filter((i) => i.kind === "audioinput"));
  const audioOutputs = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => devices.value.filter((i) => i.kind === "audiooutput"));
  let isSupported = false;
  const permissionGranted = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  async function update() {
    if (!isSupported)
      return;
    devices.value = await navigator.mediaDevices.enumerateDevices();
    onUpdated == null ? void 0 : onUpdated(devices.value);
  }
  async function ensurePermissions() {
    if (!isSupported)
      return false;
    if (permissionGranted.value)
      return true;
    const { state, query } = usePermission("camera", { controls: true });
    await query();
    if (state.value !== "granted") {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      stream.getTracks().forEach((t) => t.stop());
      update();
      permissionGranted.value = true;
    } else {
      permissionGranted.value = true;
    }
    return permissionGranted.value;
  }
  if (navigator) {
    isSupported = Boolean(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
    if (isSupported) {
      if (requestPermissions)
        ensurePermissions();
      useEventListener(navigator.mediaDevices, "devicechange", update);
      update();
    }
  }
  return {
    devices,
    ensurePermissions,
    permissionGranted,
    videoInputs,
    audioInputs,
    audioOutputs,
    isSupported
  };
}

function useDisplayMedia(options = {}) {
  var _a, _b;
  const enabled = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((_a = options.enabled) != null ? _a : false);
  const video = options.video;
  const audio = options.audio;
  const { navigator = defaultNavigator } = options;
  const isSupported = Boolean((_b = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _b.getDisplayMedia);
  const constraint = { audio, video };
  const stream = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)();
  async function _start() {
    if (!isSupported || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getDisplayMedia(constraint);
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(enabled, (v) => {
    if (v)
      _start();
    else
      _stop();
  }, { immediate: true });
  return {
    isSupported,
    stream,
    start,
    stop,
    enabled
  };
}

function useDocumentVisibility({ document = defaultDocument } = {}) {
  if (!document)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("visible");
  const visibility = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(document.visibilityState);
  useEventListener(document, "visibilitychange", () => {
    visibility.value = document.visibilityState;
  });
  return visibility;
}

var __defProp$a = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$c.call(b, prop))
      __defNormalProp$a(a, prop, b[prop]);
  if (__getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(b)) {
      if (__propIsEnum$c.call(b, prop))
        __defNormalProp$a(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
function useDraggable(target, options = {}) {
  var _a, _b;
  const draggingElement = (_a = options.draggingElement) != null ? _a : defaultWindow;
  const position = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((_b = options.initialValue) != null ? _b : { x: 0, y: 0 });
  const pressedDelta = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const filterEvent = (e) => {
    if (options.pointerTypes)
      return options.pointerTypes.includes(e.pointerType);
    return true;
  };
  const preventDefault = (e) => {
    if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.preventDefault))
      e.preventDefault();
  };
  const start = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.exact) && e.target !== (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target))
      return;
    const rect = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target).getBoundingClientRect();
    const pos = {
      x: e.pageX - rect.left,
      y: e.pageY - rect.top
    };
    if (((_a2 = options.onStart) == null ? void 0 : _a2.call(options, pos, e)) === false)
      return;
    pressedDelta.value = pos;
    preventDefault(e);
  };
  const move = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    position.value = {
      x: e.pageX - pressedDelta.value.x,
      y: e.pageY - pressedDelta.value.y
    };
    (_a2 = options.onMove) == null ? void 0 : _a2.call(options, position.value, e);
    preventDefault(e);
  };
  const end = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    pressedDelta.value = void 0;
    (_a2 = options.onEnd) == null ? void 0 : _a2.call(options, position.value, e);
    preventDefault(e);
  };
  if (_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient) {
    useEventListener(target, "pointerdown", start, true);
    useEventListener(draggingElement, "pointermove", move, true);
    useEventListener(draggingElement, "pointerup", end, true);
  }
  return __spreadProps$4(__spreadValues$a({}, (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRefs)(position)), {
    position,
    isDragging: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => !!pressedDelta.value),
    style: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => `left:${position.value.x}px;top:${position.value.y}px;`)
  });
}

var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$b.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$b.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, observerOptions = __objRest$2(_a, ["window"]);
  let observer;
  const isSupported = window && "ResizeObserver" in window;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window && el) {
      observer = new window.ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(stop);
  return {
    isSupported,
    stop
  };
}

function useElementBounding(target) {
  const height = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const bottom = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const left = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const right = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const top = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const width = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const x = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const y = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  function update() {
    const el = unrefElement(target);
    if (!el) {
      height.value = 0;
      bottom.value = 0;
      left.value = 0;
      right.value = 0;
      top.value = 0;
      width.value = 0;
      x.value = 0;
      y.value = 0;
      return;
    }
    const rect = el.getBoundingClientRect();
    height.value = rect.height;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    width.value = rect.width;
    x.value = rect.x;
    y.value = rect.y;
  }
  useEventListener("scroll", update, true);
  useResizeObserver(target, update);
  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y,
    update
  };
}

function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    window = defaultWindow
  } = options;
  const isActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  function loop() {
    if (!isActive.value || !window)
      return;
    fn();
    window.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window) {
      isActive.value = true;
      loop();
    }
  }
  function pause() {
    isActive.value = false;
  }
  if (immediate)
    resume();
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp$9 = Object.defineProperty;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
function useElementByPoint(options) {
  const element = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const { x, y } = options;
  const controls = useRafFn(() => {
    element.value = document.elementFromPoint((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(x), (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(y));
  });
  return __spreadValues$9({
    element
  }, controls);
}

function useElementHover(el) {
  const isHovered = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  useEventListener(el, "mouseenter", () => isHovered.value = true);
  useEventListener(el, "mouseleave", () => isHovered.value = false);
  return isHovered;
}

function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const width = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialSize.width);
  const height = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialSize.height);
  useResizeObserver(target, ([entry]) => {
    width.value = entry.contentRect.width;
    height.value = entry.contentRect.height;
  }, options);
  return {
    width,
    height
  };
}

function useElementVisibility(element, { window = defaultWindow, scrollTarget } = {}) {
  const elementIsVisible = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const testBounding = () => {
    if (!window)
      return;
    const document = window.document;
    if (!element.value) {
      elementIsVisible.value = false;
    } else {
      const rect = element.value.getBoundingClientRect();
      elementIsVisible.value = rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth) && rect.bottom >= 0 && rect.right >= 0;
    }
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(testBounding);
  if (window)
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => useEventListener((scrollTarget == null ? void 0 : scrollTarget.value) || window, "scroll", testBounding, { capture: false, passive: true }));
  return elementIsVisible;
}

const events = /* @__PURE__ */ new Map();

function useEventBus(key) {
  const scope = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.getCurrentScope)();
  function on(listener) {
    const listeners = events.get(key) || [];
    listeners.push(listener);
    events.set(key, listeners);
    const _off = () => off(listener);
    scope == null ? void 0 : scope.cleanups.push(_off);
    return _off;
  }
  function once(listener) {
    function _listener(...args) {
      off(_listener);
      listener(...args);
    }
    return on(_listener);
  }
  function off(listener) {
    const listeners = events.get(key);
    if (!listeners)
      return;
    const index = listeners.indexOf(listener);
    if (index > -1)
      listeners.splice(index, 1);
    if (!listeners.length)
      events.delete(key);
  }
  function reset() {
    events.delete(key);
  }
  function emit(event) {
    var _a;
    (_a = events.get(key)) == null ? void 0 : _a.forEach((v) => v(event));
  }
  return { on, once, off, emit, reset };
}

function useEventSource(url, events = [], options = {}) {
  const event = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const status = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("CONNECTING");
  const eventSource = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const {
    withCredentials = false
  } = options;
  const close = () => {
    if (eventSource.value) {
      eventSource.value.close();
      eventSource.value = null;
      status.value = "CLOSED";
    }
  };
  const es = new EventSource(url, { withCredentials });
  eventSource.value = es;
  es.onopen = () => {
    status.value = "OPEN";
    error.value = null;
  };
  es.onerror = (e) => {
    status.value = "CLOSED";
    error.value = e;
  };
  es.onmessage = (e) => {
    event.value = null;
    data.value = e.data;
  };
  for (const event_name of events) {
    useEventListener(es, event_name, (e) => {
      event.value = event_name;
      data.value = e.data || null;
    });
  }
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    close();
  });
  return {
    eventSource,
    event,
    data,
    status,
    error,
    close
  };
}

function useEyeDropper(options = {}) {
  const { initialValue = "" } = options;
  const isSupported = Boolean(typeof window !== "undefined" && "EyeDropper" in window);
  const sRGBHex = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue);
  async function open(openOptions) {
    if (!isSupported)
      return;
    const eyeDropper = new window.EyeDropper();
    const result = await eyeDropper.open(openOptions);
    sRGBHex.value = result.sRGBHex;
    return result;
  }
  return { isSupported, sRGBHex, open };
}

function useFavicon(newIcon = null, options = {}) {
  const {
    baseUrl = "",
    rel = "icon",
    document = defaultDocument
  } = options;
  const favicon = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isRef)(newIcon) ? newIcon : (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(newIcon);
  const applyIcon = (icon) => {
    document == null ? void 0 : document.head.querySelectorAll(`link[rel*="${rel}"]`).forEach((el) => el.href = `${baseUrl}${icon}`);
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(favicon, (i, o) => {
    if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(i) && i !== o)
      applyIcon(i);
  }, { immediate: true });
  return favicon;
}

var __defProp$8 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
const payloadMapping = {
  json: "application/json",
  text: "text/plain",
  formData: "multipart/form-data"
};
function isFetchOptions(obj) {
  return (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.containsProp)(obj, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError");
}
function headersToObject(headers) {
  if (headers instanceof Headers)
    return Object.fromEntries([...headers.entries()]);
  return headers;
}
function createFetch(config = {}) {
  const _options = config.options || {};
  const _fetchOptions = config.fetchOptions || {};
  function useFactoryFetch(url, ...args) {
    const computedUrl = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => config.baseUrl ? joinPaths((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(config.baseUrl), (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(url)) : (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(url));
    let options = _options;
    let fetchOptions = _fetchOptions;
    if (args.length > 0) {
      if (isFetchOptions(args[0])) {
        options = __spreadValues$8(__spreadValues$8({}, options), args[0]);
      } else {
        fetchOptions = __spreadProps$3(__spreadValues$8(__spreadValues$8({}, fetchOptions), args[0]), {
          headers: __spreadValues$8(__spreadValues$8({}, headersToObject(fetchOptions.headers) || {}), headersToObject(args[0].headers) || {})
        });
      }
    }
    if (args.length > 1 && isFetchOptions(args[1]))
      options = __spreadValues$8(__spreadValues$8({}, options), args[1]);
    return useFetch(computedUrl, fetchOptions, options);
  }
  return useFactoryFetch;
}
function useFetch(url, ...args) {
  var _a;
  const supportsAbort = typeof AbortController === "function";
  let fetchOptions = {};
  let options = { immediate: true, refetch: false, timeout: 0 };
  const config = {
    method: "get",
    type: "text",
    payload: void 0
  };
  if (args.length > 0) {
    if (isFetchOptions(args[0]))
      options = __spreadValues$8(__spreadValues$8({}, options), args[0]);
    else
      fetchOptions = args[0];
  }
  if (args.length > 1) {
    if (isFetchOptions(args[1]))
      options = __spreadValues$8(__spreadValues$8({}, options), args[1]);
  }
  const {
    fetch = (_a = defaultWindow) == null ? void 0 : _a.fetch,
    initialData,
    timeout
  } = options;
  const responseEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const errorEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const finallyEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const isFinished = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const isFetching = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const aborted = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const statusCode = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const response = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(null);
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(initialData);
  const canAbort = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => supportsAbort && isFetching.value);
  let controller;
  let timer;
  const abort = () => {
    if (supportsAbort && controller)
      controller.abort();
  };
  const loading = (isLoading) => {
    isFetching.value = isLoading;
    isFinished.value = !isLoading;
  };
  if (timeout)
    timer = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeoutFn)(abort, timeout, { immediate: false });
  const execute = async (throwOnFailed = false) => {
    var _a2;
    loading(true);
    error.value = null;
    statusCode.value = null;
    aborted.value = false;
    controller = void 0;
    if (supportsAbort) {
      controller = new AbortController();
      controller.signal.onabort = () => aborted.value = true;
      fetchOptions = __spreadProps$3(__spreadValues$8({}, fetchOptions), {
        signal: controller.signal
      });
    }
    const defaultFetchOptions = {
      method: config.method,
      headers: {}
    };
    if (config.payload) {
      const headers = headersToObject(defaultFetchOptions.headers);
      if (config.payloadType)
        headers["Content-Type"] = (_a2 = payloadMapping[config.payloadType]) != null ? _a2 : config.payloadType;
      defaultFetchOptions.body = config.payloadType === "json" ? JSON.stringify((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(config.payload)) : (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(config.payload);
    }
    let isCanceled = false;
    const context = { url: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(url), options: fetchOptions, cancel: () => {
      isCanceled = true;
    } };
    if (options.beforeFetch)
      Object.assign(context, await options.beforeFetch(context));
    if (isCanceled || !fetch) {
      loading(false);
      return Promise.resolve(null);
    }
    let responseData = null;
    if (timer)
      timer.start();
    return new Promise((resolve, reject) => {
      var _a3;
      fetch(context.url, __spreadProps$3(__spreadValues$8(__spreadValues$8({}, defaultFetchOptions), context.options), {
        headers: __spreadValues$8(__spreadValues$8({}, headersToObject(defaultFetchOptions.headers)), headersToObject((_a3 = context.options) == null ? void 0 : _a3.headers))
      })).then(async (fetchResponse) => {
        response.value = fetchResponse;
        statusCode.value = fetchResponse.status;
        responseData = await fetchResponse[config.type]();
        if (options.afterFetch)
          ({ data: responseData } = await options.afterFetch({ data: responseData, response: fetchResponse }));
        data.value = responseData;
        if (!fetchResponse.ok)
          throw new Error(fetchResponse.statusText);
        responseEvent.trigger(fetchResponse);
        return resolve(fetchResponse);
      }).catch(async (fetchError) => {
        let errorData = fetchError.message || fetchError.name;
        if (options.onFetchError)
          ({ data: responseData, error: errorData } = await options.onFetchError({ data: responseData, error: fetchError }));
        data.value = responseData;
        error.value = errorData;
        errorEvent.trigger(fetchError);
        if (throwOnFailed)
          return reject(fetchError);
        return resolve(null);
      }).finally(() => {
        loading(false);
        if (timer)
          timer.stop();
        finallyEvent.trigger(null);
      });
    });
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => [
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(url),
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.refetch)
  ], () => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.refetch) && execute(), { deep: true });
  const shell = {
    isFinished,
    statusCode,
    response,
    error,
    data,
    isFetching,
    canAbort,
    aborted,
    abort,
    execute,
    onFetchResponse: responseEvent.on,
    onFetchError: errorEvent.on,
    onFetchFinally: finallyEvent.on,
    get: setMethod("get"),
    put: setMethod("put"),
    post: setMethod("post"),
    delete: setMethod("delete"),
    json: setType("json"),
    text: setType("text"),
    blob: setType("blob"),
    arrayBuffer: setType("arrayBuffer"),
    formData: setType("formData")
  };
  function setMethod(method) {
    return (payload, payloadType) => {
      if (!isFetching.value) {
        config.method = method;
        config.payload = payload;
        config.payloadType = payloadType;
        if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isRef)(config.payload)) {
          (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => [
            (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(config.payload),
            (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.refetch)
          ], () => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.refetch) && execute(), { deep: true });
        }
        if (!payloadType && (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(payload) && Object.getPrototypeOf((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(payload)) === Object.prototype)
          config.payloadType = "json";
        return shell;
      }
      return void 0;
    };
  }
  function waitUntilFinished() {
    return new Promise((resolve, reject) => {
      (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.until)(isFinished).toBe(true).then(() => resolve(shell)).catch((error2) => reject(error2));
    });
  }
  function setType(type) {
    return () => {
      if (!isFetching.value) {
        config.type = type;
        return __spreadProps$3(__spreadValues$8({}, shell), {
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        });
      }
      return void 0;
    };
  }
  if (options.immediate)
    setTimeout(execute, 0);
  return __spreadProps$3(__spreadValues$8({}, shell), {
    then(onFulfilled, onRejected) {
      return waitUntilFinished().then(onFulfilled, onRejected);
    }
  });
}
function joinPaths(start, end) {
  if (!start.endsWith("/") && !end.startsWith("/"))
    return `${start}/${end}`;
  return `${start}${end}`;
}

function useFocus(options = {}) {
  const {
    initialValue = false
  } = options;
  const activeElement = useActiveElement(options);
  const target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => unrefElement(options.target));
  const focused = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return activeElement.value === target.value;
    },
    set(value) {
      var _a, _b;
      if (!value && focused.value)
        (_a = target.value) == null ? void 0 : _a.blur();
      if (value && !focused.value)
        (_b = target.value) == null ? void 0 : _b.focus();
    }
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(target, () => {
    focused.value = initialValue;
  }, { immediate: true, flush: "post" });
  return { focused };
}

function useFocusWithin(target, options = {}) {
  const activeElement = useActiveElement(options);
  const targetElement = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => unrefElement(target));
  const focused = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => targetElement.value && activeElement.value ? targetElement.value.contains(activeElement.value) : false);
  return { focused };
}

function useFps(options) {
  var _a;
  const fps = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const every = (_a = options == null ? void 0 : options.every) != null ? _a : 10;
  let last = performance.now();
  let ticks = 0;
  useRafFn(() => {
    ticks += 1;
    if (ticks >= every) {
      const now = performance.now();
      const diff = now - last;
      fps.value = Math.round(1e3 / (diff / ticks));
      last = now;
      ticks = 0;
    }
  });
  return fps;
}

const functionsMap = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
function useFullscreen(target, options = {}) {
  const { document = defaultDocument } = options;
  const targetRef = target || (document == null ? void 0 : document.querySelector("html"));
  const isFullscreen = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  let isSupported = false;
  let map = functionsMap[0];
  if (!document) {
    isSupported = false;
  } else {
    for (const m of functionsMap) {
      if (m[1] in document) {
        map = m;
        isSupported = true;
        break;
      }
    }
  }
  const [REQUEST, EXIT, ELEMENT, , EVENT] = map;
  async function exit() {
    if (!isSupported)
      return;
    if (document == null ? void 0 : document[ELEMENT])
      await document[EXIT]();
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported)
      return;
    await exit();
    const target2 = unrefElement(targetRef);
    if (target2) {
      await target2[REQUEST]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    if (isFullscreen.value)
      await exit();
    else
      await enter();
  }
  if (document) {
    useEventListener(document, EVENT, () => {
      isFullscreen.value = !!(document == null ? void 0 : document[ELEMENT]);
    }, false);
  }
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}

function useGeolocation(options = {}) {
  const {
    enableHighAccuracy = true,
    maximumAge = 3e4,
    timeout = 27e3,
    navigator = defaultNavigator
  } = options;
  const isSupported = navigator && "geolocation" in navigator;
  const locatedAt = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const coords = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({
    accuracy: 0,
    latitude: Infinity,
    longitude: Infinity,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  });
  function updatePosition(position) {
    locatedAt.value = position.timestamp;
    coords.value = position.coords;
    error.value = null;
  }
  let watcher;
  if (isSupported) {
    watcher = navigator.geolocation.watchPosition(updatePosition, (err) => error.value = err, {
      enableHighAccuracy,
      maximumAge,
      timeout
    });
  }
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    if (watcher && navigator)
      navigator.geolocation.clearWatch(watcher);
  });
  return {
    isSupported,
    coords,
    locatedAt,
    error
  };
}

const defaultEvents$1 = ["mousemove", "mousedown", "resize", "keydown", "touchstart", "wheel"];
const oneMinute = 6e4;
function useIdle(timeout = oneMinute, options = {}) {
  const {
    initialState = false,
    listenForVisibilityChange = true,
    events = defaultEvents$1,
    window = defaultWindow,
    eventFilter = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.throttleFilter)(50)
  } = options;
  const idle = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialState);
  const lastActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp)());
  let timer;
  const onEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createFilterWrapper)(eventFilter, () => {
    idle.value = false;
    lastActive.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp)();
    clearTimeout(timer);
    timer = setTimeout(() => idle.value = true, timeout);
  });
  if (window) {
    const document = window.document;
    for (const event of events)
      useEventListener(window, event, onEvent, { passive: true });
    if (listenForVisibilityChange) {
      useEventListener(document, "visibilitychange", () => {
        if (!document.hidden)
          onEvent();
      });
    }
  }
  timer = setTimeout(() => idle.value = true, timeout);
  return { idle, lastActive };
}

function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window = defaultWindow
  } = options;
  const isSupported = window && "IntersectionObserver" in window;
  let cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
  const stopWatch = isSupported ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => ({
    el: unrefElement(target),
    root: unrefElement(root)
  }), ({ el, root: root2 }) => {
    cleanup();
    if (!el)
      return;
    const observer = new window.IntersectionObserver(callback, {
      root: root2,
      rootMargin,
      threshold
    });
    observer.observe(el);
    cleanup = () => {
      observer.disconnect();
      cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
    };
  }, { immediate: true, flush: "post" }) : _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
  const stop = () => {
    cleanup();
    stopWatch();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(stop);
  return {
    isSupported,
    stop
  };
}

const defaultEvents = ["mousedown", "mouseup", "keydown", "keyup"];
function useKeyModifier(modifier, options = {}) {
  const {
    events = defaultEvents,
    document = defaultDocument,
    initial = null
  } = options;
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initial);
  if (document) {
    events.forEach((listenerEvent) => {
      useEventListener(document, listenerEvent, (evt) => {
        state.value = evt.getModifierState(modifier);
      });
    });
  }
  return state;
}

function useLocalStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.localStorage, options);
}

const DefaultMagicKeysAliasMap = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};

function useMagicKeys(options = {}) {
  const {
    reactive: useReactive = false,
    target = defaultWindow,
    aliasMap = DefaultMagicKeysAliasMap,
    passive = true,
    onEventFired = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop
  } = options;
  const current = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(/* @__PURE__ */ new Set());
  const obj = { toJSON() {
    return {};
  }, current };
  const refs = useReactive ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(obj) : obj;
  function updateRefs(e, value) {
    const key = e.key.toLowerCase();
    const code = e.code.toLowerCase();
    const values = [code, key];
    if (value)
      current.add(e.code);
    else
      current.delete(e.code);
    for (const key2 of values) {
      if (key2 in refs) {
        if (useReactive)
          refs[key2] = value;
        else
          refs[key2].value = value;
      }
    }
  }
  if (target) {
    useEventListener(target, "keydown", (e) => {
      updateRefs(e, true);
      return onEventFired(e);
    }, { passive });
    useEventListener(target, "keyup", (e) => {
      updateRefs(e, false);
      return onEventFired(e);
    }, { passive });
  }
  const proxy = new Proxy(refs, {
    get(target2, prop, rec) {
      if (typeof prop !== "string")
        return Reflect.get(target2, prop, rec);
      prop = prop.toLowerCase();
      if (prop in aliasMap)
        prop = aliasMap[prop];
      if (!(prop in refs)) {
        if (/[+_-]/.test(prop)) {
          const keys = prop.split(/[+_-]/g).map((i) => i.trim());
          refs[prop] = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => keys.every((key) => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(proxy[key])));
        } else {
          refs[prop] = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
        }
      }
      const r = Reflect.get(target2, prop, rec);
      return useReactive ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(r) : r;
    }
  });
  return proxy;
}

var __defProp$7 = Object.defineProperty;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
function usingElRef(source, cb) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(source))
    cb((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(source));
}
function timeRangeToArray(timeRanges) {
  let ranges = [];
  for (let i = 0; i < timeRanges.length; ++i)
    ranges = [...ranges, [timeRanges.start(i), timeRanges.end(i)]];
  return ranges;
}
function tracksToArray(tracks) {
  return Array.from(tracks).map(({ label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }, id) => ({ id, label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }));
}
const defaultOptions = {
  src: "",
  tracks: []
};
function useMediaControls(target, options = {}) {
  options = __spreadValues$7(__spreadValues$7({}, defaultOptions), options);
  const {
    document = defaultDocument
  } = options;
  const currentTime = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const duration = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const seeking = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const volume = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(1);
  const waiting = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const ended = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const playing = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const rate = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(1);
  const stalled = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const buffered = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const tracks = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const selectedTrack = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(-1);
  const isPictureInPicture = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const muted = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const supportsPictureInPicture = document && "pictureInPictureEnabled" in document;
  const sourceErrorEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const disableTrack = (track) => {
    usingElRef(target, (el) => {
      if (track) {
        const id = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(track) ? track : track.id;
        el.textTracks[id].mode = "disabled";
      } else {
        for (let i = 0; i < el.textTracks.length; ++i)
          el.textTracks[i].mode = "disabled";
      }
      selectedTrack.value = -1;
    });
  };
  const enableTrack = (track, disableTracks = true) => {
    usingElRef(target, (el) => {
      const id = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(track) ? track : track.id;
      if (disableTracks)
        disableTrack();
      el.textTracks[id].mode = "showing";
      selectedTrack.value = id;
    });
  };
  const togglePictureInPicture = () => {
    return new Promise((resolve, reject) => {
      usingElRef(target, async (el) => {
        if (supportsPictureInPicture) {
          if (!isPictureInPicture.value) {
            el.requestPictureInPicture().then(resolve).catch(reject);
          } else {
            document.exitPictureInPicture().then(resolve).catch(reject);
          }
        }
      });
    });
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watchEffect)(() => {
    if (!document)
      return;
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    const src = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.src);
    let sources = [];
    if (!src)
      return;
    if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(src))
      sources = [{ src }];
    else if (Array.isArray(src))
      sources = src;
    else if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(src))
      sources = [src];
    el.querySelectorAll("source").forEach((e) => {
      e.removeEventListener("error", sourceErrorEvent.trigger);
      e.remove();
    });
    sources.forEach(({ src: src2, type }) => {
      const source = document.createElement("source");
      source.setAttribute("src", src2);
      source.setAttribute("type", type || "");
      source.addEventListener("error", sourceErrorEvent.trigger);
      el.appendChild(source);
    });
    el.load();
  });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    el.querySelectorAll("source").forEach((e) => e.removeEventListener("error", sourceErrorEvent.trigger));
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(volume, (vol) => {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    el.volume = vol;
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(muted, (mute) => {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    el.muted = mute;
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(rate, (rate2) => {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    el.playbackRate = rate2;
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watchEffect)(() => {
    if (!document)
      return;
    const textTracks = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.tracks);
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!textTracks || !textTracks.length || !el)
      return;
    el.querySelectorAll("track").forEach((e) => e.remove());
    textTracks.forEach(({ default: isDefault, kind, label, src, srcLang }, i) => {
      const track = document.createElement("track");
      track.default = isDefault || false;
      track.kind = kind;
      track.label = label;
      track.src = src;
      track.srclang = srcLang;
      if (track.default)
        selectedTrack.value = i;
      el.appendChild(track);
    });
  });
  const { ignoreUpdates: ignoreCurrentTimeUpdates } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.ignorableWatch)(currentTime, (time) => {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    el.currentTime = time;
  });
  const { ignoreUpdates: ignorePlayingUpdates } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.ignorableWatch)(playing, (isPlaying) => {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    isPlaying ? el.play() : el.pause();
  });
  useEventListener(target, "timeupdate", () => ignoreCurrentTimeUpdates(() => currentTime.value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target).currentTime));
  useEventListener(target, "durationchange", () => duration.value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target).duration);
  useEventListener(target, "progress", () => buffered.value = timeRangeToArray((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target).buffered));
  useEventListener(target, "seeking", () => seeking.value = true);
  useEventListener(target, "seeked", () => seeking.value = false);
  useEventListener(target, "waiting", () => waiting.value = true);
  useEventListener(target, "playing", () => waiting.value = false);
  useEventListener(target, "ratechange", () => rate.value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target).playbackRate);
  useEventListener(target, "stalled", () => stalled.value = true);
  useEventListener(target, "ended", () => ended.value = true);
  useEventListener(target, "pause", () => ignorePlayingUpdates(() => playing.value = false));
  useEventListener(target, "play", () => ignorePlayingUpdates(() => playing.value = true));
  useEventListener(target, "enterpictureinpicture", () => isPictureInPicture.value = true);
  useEventListener(target, "leavepictureinpicture", () => isPictureInPicture.value = false);
  useEventListener(target, "volumechange", () => {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    volume.value = el.volume;
    muted.value = el.muted;
  });
  const listeners = [];
  const stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([target], () => {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    stop();
    listeners[0] = useEventListener(el.textTracks, "addtrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[1] = useEventListener(el.textTracks, "removetrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[2] = useEventListener(el.textTracks, "change", () => tracks.value = tracksToArray(el.textTracks));
  });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => listeners.forEach((listener) => listener()));
  return {
    currentTime,
    duration,
    waiting,
    seeking,
    ended,
    stalled,
    buffered,
    playing,
    rate,
    volume,
    muted,
    tracks,
    selectedTrack,
    enableTrack,
    disableTrack,
    supportsPictureInPicture,
    togglePictureInPicture,
    isPictureInPicture,
    onSourceError: sourceErrorEvent.on
  };
}

const getMapVue2Compat = () => {
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({});
  return {
    get: (key) => data[key],
    set: (key, value) => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.set)(data, key, value),
    has: (key) => Object.prototype.hasOwnProperty.call(data, key),
    delete: (key) => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.del)(data, key),
    clear: () => {
      Object.keys(data).forEach((key) => {
        (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.del)(data, key);
      });
    }
  };
};
function useMemoize(resolver, options) {
  const initCache = () => {
    if (options == null ? void 0 : options.cache)
      return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(options.cache);
    if (vue_demi__WEBPACK_IMPORTED_MODULE_1__.isVue2)
      return getMapVue2Compat();
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(/* @__PURE__ */ new Map());
  };
  const cache = initCache();
  const generateKey = (...args) => (options == null ? void 0 : options.getKey) ? options.getKey(...args) : JSON.stringify(args);
  const _loadData = (key, ...args) => {
    cache.set(key, resolver(...args));
    return cache.get(key);
  };
  const loadData = (...args) => _loadData(generateKey(...args), ...args);
  const deleteData = (...args) => {
    cache.delete(generateKey(...args));
  };
  const clearData = () => {
    cache.clear();
  };
  const memoized = (...args) => {
    const key = generateKey(...args);
    if (cache.has(key))
      return cache.get(key);
    return _loadData(key, ...args);
  };
  memoized.load = loadData;
  memoized.delete = deleteData;
  memoized.clear = clearData;
  memoized.generateKey = generateKey;
  memoized.cache = cache;
  return memoized;
}

function useMemory(options = {}) {
  const memory = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const isSupported = performance && "memory" in performance;
  if (isSupported) {
    const { interval = 1e3 } = options;
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn)(() => {
      memory.value = performance.memory;
    }, interval, { immediate: options.immediate, immediateCallback: options.immediateCallback });
  }
  return { isSupported, memory };
}

function useMounted() {
  const isMounted = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.onMounted)(() => {
    isMounted.value = true;
  });
  return isMounted;
}

function useMouse(options = {}) {
  const {
    type = "page",
    touch = true,
    resetOnTouchEnds = false,
    initialValue = { x: 0, y: 0 },
    window = defaultWindow
  } = options;
  const x = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue.x);
  const y = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue.y);
  const sourceType = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const mouseHandler = (event) => {
    if (type === "page") {
      x.value = event.pageX;
      y.value = event.pageY;
    } else if (type === "client") {
      x.value = event.clientX;
      y.value = event.clientY;
    }
    sourceType.value = "mouse";
  };
  const reset = () => {
    x.value = initialValue.x;
    y.value = initialValue.y;
  };
  const touchHandler = (event) => {
    if (event.touches.length > 0) {
      const touch2 = event.touches[0];
      if (type === "page") {
        x.value = touch2.pageX;
        y.value = touch2.pageY;
      } else if (type === "client") {
        x.value = touch2.clientX;
        y.value = touch2.clientY;
      }
      sourceType.value = "touch";
    }
  };
  if (window) {
    useEventListener(window, "mousemove", mouseHandler, { passive: true });
    useEventListener(window, "dragover", mouseHandler, { passive: true });
    if (touch) {
      useEventListener(window, "touchstart", touchHandler, { passive: true });
      useEventListener(window, "touchmove", touchHandler, { passive: true });
      if (resetOnTouchEnds)
        useEventListener(window, "touchend", reset, { passive: true });
    }
  }
  return {
    x,
    y,
    sourceType
  };
}

function useMouseInElement(target, options = {}) {
  const {
    handleOutside = true,
    window = defaultWindow
  } = options;
  const { x, y, sourceType } = useMouse(options);
  const targetRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(target != null ? target : window == null ? void 0 : window.document.body);
  const elementX = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const elementY = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const elementPositionX = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const elementPositionY = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const elementHeight = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const elementWidth = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const isOutside = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  let stop = () => {
  };
  if (window) {
    stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([targetRef, x, y], () => {
      const el = unrefElement(targetRef);
      if (!el)
        return;
      const {
        left,
        top,
        width,
        height
      } = el.getBoundingClientRect();
      elementPositionX.value = left + window.pageXOffset;
      elementPositionY.value = top + window.pageYOffset;
      elementHeight.value = height;
      elementWidth.value = width;
      const elX = x.value - elementPositionX.value;
      const elY = y.value - elementPositionY.value;
      isOutside.value = elX < 0 || elY < 0 || elX > elementWidth.value || elY > elementHeight.value;
      if (handleOutside || !isOutside.value) {
        elementX.value = elX;
        elementY.value = elY;
      }
    }, { immediate: true });
  }
  return {
    x,
    y,
    sourceType,
    elementX,
    elementY,
    elementPositionX,
    elementPositionY,
    elementHeight,
    elementWidth,
    isOutside,
    stop
  };
}

function useMousePressed(options = {}) {
  const {
    touch = true,
    drag = true,
    initialValue = false,
    window = defaultWindow
  } = options;
  const pressed = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue);
  const sourceType = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  if (!window) {
    return {
      pressed,
      sourceType
    };
  }
  const onPressed = (srcType) => () => {
    pressed.value = true;
    sourceType.value = srcType;
  };
  const onReleased = () => {
    pressed.value = false;
    sourceType.value = null;
  };
  const target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => unrefElement(options.target) || window);
  useEventListener(target, "mousedown", onPressed("mouse"), { passive: true });
  useEventListener(window, "mouseleave", onReleased, { passive: true });
  useEventListener(window, "mouseup", onReleased, { passive: true });
  if (drag) {
    useEventListener(target, "dragstart", onPressed("mouse"), { passive: true });
    useEventListener(window, "drop", onReleased, { passive: true });
    useEventListener(window, "dragend", onReleased, { passive: true });
  }
  if (touch) {
    useEventListener(target, "touchstart", onPressed("touch"), { passive: true });
    useEventListener(window, "touchend", onReleased, { passive: true });
    useEventListener(window, "touchcancel", onReleased, { passive: true });
  }
  return {
    pressed,
    sourceType
  };
}

var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$7.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$7.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useMutationObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, mutationOptions = __objRest$1(_a, ["window"]);
  let observer;
  const isSupported = window && "IntersectionObserver" in window;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window && el) {
      observer = new window.MutationObserver(callback);
      observer.observe(el, mutationOptions);
    }
  }, { immediate: true });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(stop);
  return {
    isSupported,
    stop
  };
}

const useNavigatorLanguage = (options = {}) => {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = Boolean(navigator && "language" in navigator);
  const language = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(navigator == null ? void 0 : navigator.language);
  useEventListener(window, "languagechange", () => {
    if (navigator)
      language.value = navigator.language;
  });
  return {
    isSupported,
    language
  };
};

function useNetwork(options = {}) {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = Boolean(navigator && "connection" in navigator);
  const isOnline = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(true);
  const saveData = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const offlineAt = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const downlink = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const downlinkMax = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const rtt = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const effectiveType = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const type = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("unknown");
  const connection = isSupported && navigator.connection;
  function updateNetworkInformation() {
    if (!navigator)
      return;
    isOnline.value = navigator.onLine;
    offlineAt.value = isOnline.value ? void 0 : Date.now();
    if (connection) {
      downlink.value = connection.downlink;
      downlinkMax.value = connection.downlinkMax;
      effectiveType.value = connection.effectiveType;
      rtt.value = connection.rtt;
      saveData.value = connection.saveData;
      type.value = connection.type;
    }
  }
  if (window) {
    useEventListener(window, "offline", () => {
      isOnline.value = false;
      offlineAt.value = Date.now();
    });
    useEventListener(window, "online", () => {
      isOnline.value = true;
    });
  }
  if (connection)
    useEventListener(connection, "change", updateNetworkInformation, false);
  updateNetworkInformation();
  return {
    isSupported,
    isOnline,
    saveData,
    offlineAt,
    downlink,
    downlinkMax,
    effectiveType,
    rtt,
    type
  };
}

var __defProp$6 = Object.defineProperty;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame"
  } = options;
  const now = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(new Date());
  const update = () => now.value = new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate: true }) : (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn)(update, interval, { immediate: true });
  if (exposeControls) {
    return __spreadValues$6({
      now
    }, controls);
  } else {
    return now;
  }
}

function useOnline(options = {}) {
  const { isOnline } = useNetwork(options);
  return isOnline;
}

function usePageLeave(options = {}) {
  const { window = defaultWindow } = options;
  const isLeft = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const handler = (event) => {
    if (!window)
      return;
    event = event || window.event;
    const from = event.relatedTarget || event.toElement;
    isLeft.value = !from;
  };
  if (window) {
    useEventListener(window, "mouseout", handler, { passive: true });
    useEventListener(window.document, "mouseleave", handler, { passive: true });
    useEventListener(window.document, "mouseenter", handler, { passive: true });
  }
  return isLeft;
}

function useParallax(target, options = {}) {
  const {
    deviceOrientationTiltAdjust = (i) => i,
    deviceOrientationRollAdjust = (i) => i,
    mouseTiltAdjust = (i) => i,
    mouseRollAdjust = (i) => i,
    window = defaultWindow
  } = options;
  const orientation = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(useDeviceOrientation({ window }));
  const {
    elementX: x,
    elementY: y,
    elementWidth: width,
    elementHeight: height
  } = useMouseInElement(target, { handleOutside: false, window });
  const source = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (orientation.isSupported && (orientation.alpha != null && orientation.alpha !== 0 || orientation.gamma != null && orientation.gamma !== 0))
      return "deviceOrientation";
    return "mouse";
  });
  const roll = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (source.value === "deviceOrientation") {
      const value = -orientation.beta / 90;
      return deviceOrientationRollAdjust(value);
    } else {
      const value = -(y.value - height.value / 2) / height.value;
      return mouseRollAdjust(value);
    }
  });
  const tilt = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (source.value === "deviceOrientation") {
      const value = orientation.gamma / 90;
      return deviceOrientationTiltAdjust(value);
    } else {
      const value = (x.value - width.value / 2) / width.value;
      return mouseTiltAdjust(value);
    }
  });
  return { roll, tilt, source };
}

var __defProp$5 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
const defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
const keys = /* @__PURE__ */ Object.keys(defaultState);
function usePointer(options = {}) {
  const {
    target = defaultWindow
  } = options;
  const isInside = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(options.initialValue || {});
  Object.assign(state.value, defaultState, state.value);
  const handler = (event) => {
    isInside.value = true;
    if (options.pointerTypes && !options.pointerTypes.includes(event.pointerType))
      return;
    state.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.objectPick)(event, keys, false);
  };
  if (target) {
    useEventListener(target, "pointerdown", handler, { passive: true });
    useEventListener(target, "pointermove", handler, { passive: true });
    useEventListener(target, "pointerleave", () => isInside.value = false, { passive: true });
  }
  return __spreadProps$2(__spreadValues$5({}, (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRefs)(state)), {
    isInside
  });
}

var SwipeDirection = /* @__PURE__ */ ((SwipeDirection2) => {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
  return SwipeDirection2;
})(SwipeDirection || {});
function useSwipe(target, options = {}) {
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart,
    passive = true,
    window = defaultWindow
  } = options;
  const coordsStart = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({ x: 0, y: 0 });
  const coordsEnd = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({ x: 0, y: 0 });
  const diffX = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => coordsStart.x - coordsEnd.x);
  const diffY = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => coordsStart.y - coordsEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => max(abs(diffX.value), abs(diffY.value)) >= threshold);
  const isSwiping = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const direction = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (!isThresholdExceeded.value)
      return "NONE" /* NONE */;
    if (abs(diffX.value) > abs(diffY.value)) {
      return diffX.value > 0 ? "LEFT" /* LEFT */ : "RIGHT" /* RIGHT */;
    } else {
      return diffY.value > 0 ? "UP" /* UP */ : "DOWN" /* DOWN */;
    }
  });
  const getTouchEventCoords = (e) => [e.touches[0].clientX, e.touches[0].clientY];
  const updateCoordsStart = (x, y) => {
    coordsStart.x = x;
    coordsStart.y = y;
  };
  const updateCoordsEnd = (x, y) => {
    coordsEnd.x = x;
    coordsEnd.y = y;
  };
  let listenerOptions;
  const isPassiveEventSupported = checkPassiveEventSupport(window == null ? void 0 : window.document);
  if (!passive)
    listenerOptions = isPassiveEventSupported ? { passive: false, capture: true } : { capture: true };
  else
    listenerOptions = isPassiveEventSupported ? { passive: true } : { capture: false };
  const onTouchEnd = (e) => {
    if (isSwiping.value)
      onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
    isSwiping.value = false;
  };
  const stops = [
    useEventListener(target, "touchstart", (e) => {
      if (listenerOptions.capture && !listenerOptions.passive)
        e.preventDefault();
      const [x, y] = getTouchEventCoords(e);
      updateCoordsStart(x, y);
      updateCoordsEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }, listenerOptions),
    useEventListener(target, "touchmove", (e) => {
      const [x, y] = getTouchEventCoords(e);
      updateCoordsEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }, listenerOptions),
    useEventListener(target, "touchend", onTouchEnd, listenerOptions),
    useEventListener(target, "touchcancel", onTouchEnd, listenerOptions)
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isPassiveEventSupported,
    isSwiping,
    direction,
    coordsStart,
    coordsEnd,
    lengthX: diffX,
    lengthY: diffY,
    stop
  };
}
function checkPassiveEventSupport(document) {
  if (!document)
    return false;
  let supportsPassive = false;
  const optionsBlock = {
    get passive() {
      supportsPassive = true;
      return false;
    }
  };
  document.addEventListener("x", _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop, optionsBlock);
  document.removeEventListener("x", _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop);
  return supportsPassive;
}

function usePointerSwipe(target, options = {}) {
  const targetRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(target);
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart
  } = options;
  const posStart = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({ x: 0, y: 0 });
  const updatePosStart = (x, y) => {
    posStart.x = x;
    posStart.y = y;
  };
  const posEnd = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({ x: 0, y: 0 });
  const updatePosEnd = (x, y) => {
    posEnd.x = x;
    posEnd.y = y;
  };
  const distanceX = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => posStart.x - posEnd.x);
  const distanceY = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => posStart.y - posEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => max(abs(distanceX.value), abs(distanceY.value)) >= threshold);
  const isSwiping = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const isPointerDown = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const direction = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (!isThresholdExceeded.value)
      return SwipeDirection.NONE;
    if (abs(distanceX.value) > abs(distanceY.value)) {
      return distanceX.value > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT;
    } else {
      return distanceY.value > 0 ? SwipeDirection.UP : SwipeDirection.DOWN;
    }
  });
  const filterEvent = (e) => {
    if (options.pointerTypes)
      return options.pointerTypes.includes(e.pointerType);
    return true;
  };
  const stops = [
    useEventListener(target, "pointerdown", (e) => {
      var _a, _b;
      if (!filterEvent(e))
        return;
      isPointerDown.value = true;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "none");
      const eventTarget = e.target;
      eventTarget == null ? void 0 : eventTarget.setPointerCapture(e.pointerId);
      const { clientX: x, clientY: y } = e;
      updatePosStart(x, y);
      updatePosEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }),
    useEventListener(target, "pointermove", (e) => {
      if (!filterEvent(e))
        return;
      if (!isPointerDown.value)
        return;
      const { clientX: x, clientY: y } = e;
      updatePosEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }),
    useEventListener(target, "pointerup", (e) => {
      var _a, _b;
      if (!filterEvent(e))
        return;
      if (isSwiping.value)
        onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
      isPointerDown.value = false;
      isSwiping.value = false;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "initial");
    })
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isSwiping: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(isSwiping),
    direction: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(direction),
    posStart: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(posStart),
    posEnd: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(posEnd),
    distanceX,
    distanceY,
    stop
  };
}

function usePreferredColorScheme(options) {
  const isLight = useMediaQuery("(prefers-color-scheme: light)", options);
  const isDark = useMediaQuery("(prefers-color-scheme: dark)", options);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (isDark.value)
      return "dark";
    if (isLight.value)
      return "light";
    return "no-preference";
  });
}

function usePreferredLanguages(options = {}) {
  const { window = defaultWindow } = options;
  if (!window)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(["en"]);
  const navigator = window.navigator;
  const value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(navigator.languages);
  useEventListener(window, "languagechange", () => {
    value.value = navigator.languages;
  });
  return value;
}

const topVarName = "--vueuse-safe-area-top";
const rightVarName = "--vueuse-safe-area-right";
const bottomVarName = "--vueuse-safe-area-bottom";
const leftVarName = "--vueuse-safe-area-left";
function useScreenSafeArea() {
  const top = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const right = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const bottom = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const left = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  if (_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient) {
    const topCssVar = useCssVar(topVarName);
    const rightCssVar = useCssVar(rightVarName);
    const bottomCssVar = useCssVar(bottomVarName);
    const leftCssVar = useCssVar(leftVarName);
    topCssVar.value = "env(safe-area-inset-top, 0px)";
    rightCssVar.value = "env(safe-area-inset-right, 0px)";
    bottomCssVar.value = "env(safe-area-inset-bottom, 0px)";
    leftCssVar.value = "env(safe-area-inset-left, 0px)";
    update();
    useEventListener("resize", (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useDebounceFn)(update));
  }
  function update() {
    top.value = getValue(topVarName);
    right.value = getValue(rightVarName);
    bottom.value = getValue(bottomVarName);
    left.value = getValue(leftVarName);
  }
  return {
    top,
    right,
    bottom,
    left,
    update
  };
}
function getValue(position) {
  return getComputedStyle(document.documentElement).getPropertyValue(position);
}

function useScriptTag(src, onLoaded = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document = defaultDocument
  } = options;
  const scriptTag = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el2) => {
      scriptTag.value = el2;
      resolve(el2);
      return el2;
    };
    if (!document) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document.querySelector(`script[src="${src}"]`);
    if (!el) {
      el = document.createElement("script");
      el.type = type;
      el.async = async;
      el.src = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(src);
      if (defer)
        el.defer = defer;
      if (crossOrigin)
        el.crossOrigin = crossOrigin;
      if (noModule)
        el.noModule = noModule;
      if (referrerPolicy)
        el.referrerPolicy = referrerPolicy;
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) {
      resolveWithElement(el);
    }
    el.addEventListener("error", (event) => reject(event));
    el.addEventListener("abort", (event) => reject(event));
    el.addEventListener("load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    });
    if (shouldAppend)
      el = document.head.appendChild(el);
    if (!waitForScriptLoad)
      resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document)
      return;
    _promise = null;
    if (scriptTag.value)
      scriptTag.value = null;
    const el = document.querySelector(`script[src="${src}"]`);
    if (el)
      document.head.removeChild(el);
  };
  if (immediate && !manual)
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(load);
  if (!manual)
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnUnmounted)(unload);
  return { scriptTag, load, unload };
}

function useScroll(element, options = {}) {
  const {
    throttle = 0,
    idle = 200,
    onStop = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    onScroll = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    offset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions = {
      capture: false,
      passive: true
    }
  } = options;
  const x = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const y = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const isScrolling = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const arrivedState = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  const directions = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  if (element) {
    const onScrollEnd = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useDebounceFn)((e) => {
      isScrolling.value = false;
      directions.left = false;
      directions.right = false;
      directions.top = false;
      directions.bottom = false;
      onStop(e);
    }, throttle + idle);
    const onScrollHandler = (e) => {
      const eventTarget = e.target === document ? e.target.documentElement : e.target;
      const scrollLeft = eventTarget.scrollLeft;
      directions.left = scrollLeft < x.value;
      directions.right = scrollLeft > x.value;
      arrivedState.left = scrollLeft <= 0 + (offset.left || 0);
      arrivedState.right = scrollLeft + eventTarget.clientWidth >= eventTarget.scrollWidth - (offset.right || 0);
      x.value = scrollLeft;
      const scrollTop = eventTarget.scrollTop;
      directions.top = scrollTop < y.value;
      directions.bottom = scrollTop > y.value;
      arrivedState.top = scrollTop <= 0 + (offset.top || 0);
      arrivedState.bottom = scrollTop + eventTarget.clientHeight >= eventTarget.scrollHeight - (offset.bottom || 0);
      y.value = scrollTop;
      isScrolling.value = true;
      onScrollEnd(e);
      onScroll(e);
    };
    useEventListener(element, "scroll", throttle ? (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useThrottleFn)(onScrollHandler, throttle) : onScrollHandler, eventListenerOptions);
  }
  return {
    x,
    y,
    isScrolling,
    arrivedState,
    directions
  };
}

var _a, _b;
function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
}
const isIOS = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient && (window == null ? void 0 : window.navigator) && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.platform) && /iP(ad|hone|od)/.test((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.platform);
function useScrollLock(element, initialState = false) {
  const isLocked = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialState);
  let touchMoveListener = null;
  let initialOverflow;
  const lock = () => {
    const ele = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(element);
    if (!ele || isLocked.value)
      return;
    initialOverflow = ele.style.overflow;
    if (isIOS) {
      touchMoveListener = useEventListener(document, "touchmove", preventDefault, { passive: false });
    }
    ele.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const ele = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(element);
    if (!ele || !isLocked.value)
      return;
    isIOS && (touchMoveListener == null ? void 0 : touchMoveListener());
    ele.style.overflow = initialOverflow;
    isLocked.value = false;
  };
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else
        unlock();
    }
  });
}

function useSessionStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.sessionStorage, options);
}

var __defProp$4 = Object.defineProperty;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
function useShare(shareOptions = {}, options = {}) {
  const { navigator = defaultNavigator } = options;
  const _navigator = navigator;
  const isSupported = _navigator && "canShare" in _navigator;
  const share = async (overrideOptions = {}) => {
    if (isSupported) {
      const data = __spreadValues$4(__spreadValues$4({}, (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(shareOptions)), (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(overrideOptions));
      let granted = true;
      if (data.files && _navigator.canShare)
        granted = _navigator.canShare({ files: data.files });
      if (granted)
        return _navigator.share(data);
    }
  };
  return {
    isSupported,
    share
  };
}

function useSpeechRecognition(options = {}) {
  const {
    interimResults = true,
    continuous = true,
    window = defaultWindow
  } = options;
  const lang = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(options.lang || "en-US");
  const isListening = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const isFinal = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const result = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(void 0);
  const toggle = (value = !isListening.value) => {
    isListening.value = value;
  };
  const start = () => {
    isListening.value = true;
  };
  const stop = () => {
    isListening.value = false;
  };
  const SpeechRecognition = window && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const isSupported = Boolean(SpeechRecognition);
  let recognition;
  if (isSupported) {
    recognition = new SpeechRecognition();
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.lang = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(lang);
    recognition.onstart = () => {
      isFinal.value = false;
    };
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(lang, (lang2) => {
      if (recognition && !isListening.value)
        recognition.lang = lang2;
    });
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results).map((result2) => {
        isFinal.value = result2.isFinal;
        return result2[0];
      }).map((result2) => result2.transcript).join("");
      result.value = transcript;
      error.value = void 0;
    };
    recognition.onerror = (event) => {
      error.value = event;
    };
    recognition.onend = () => {
      isListening.value = false;
      recognition.lang = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(lang);
    };
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(isListening, () => {
      if (isListening.value)
        recognition.start();
      else
        recognition.stop();
    });
  }
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    isListening.value = false;
  });
  return {
    isSupported,
    isListening,
    isFinal,
    recognition,
    result,
    error,
    toggle,
    start,
    stop
  };
}

function useSpeechSynthesis(text, options = {}) {
  var _a, _b;
  const {
    pitch = 1,
    rate = 1,
    volume = 1,
    window = defaultWindow
  } = options;
  const synth = window && window.speechSynthesis;
  const isSupported = Boolean(synth);
  const isPlaying = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const status = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("init");
  const voiceInfo = {
    lang: ((_a = options.voice) == null ? void 0 : _a.lang) || "default",
    name: ((_b = options.voice) == null ? void 0 : _b.name) || ""
  };
  const spokenText = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(text || "");
  const lang = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(options.lang || "en-US");
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(void 0);
  const toggle = (value = !isPlaying.value) => {
    isPlaying.value = value;
  };
  const bindEventsForUtterance = (utterance2) => {
    utterance2.lang = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(lang);
    options.voice && (utterance2.voice = options.voice);
    utterance2.pitch = pitch;
    utterance2.rate = rate;
    utterance2.volume = volume;
    utterance2.onstart = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onpause = () => {
      isPlaying.value = false;
      status.value = "pause";
    };
    utterance2.onresume = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onend = () => {
      isPlaying.value = false;
      status.value = "end";
    };
    utterance2.onerror = (event) => {
      error.value = event;
    };
    utterance2.onend = () => {
      isPlaying.value = false;
      utterance2.lang = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(lang);
    };
  };
  const utterance = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    isPlaying.value = false;
    status.value = "init";
    const newUtterance = new SpeechSynthesisUtterance(spokenText.value);
    bindEventsForUtterance(newUtterance);
    return newUtterance;
  });
  const speak = () => {
    synth.cancel();
    utterance && synth.speak(utterance.value);
  };
  if (isSupported) {
    bindEventsForUtterance(utterance.value);
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(lang, (lang2) => {
      if (utterance.value && !isPlaying.value)
        utterance.value.lang = lang2;
    });
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(isPlaying, () => {
      if (isPlaying.value)
        synth.resume();
      else
        synth.pause();
    });
  }
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    isPlaying.value = false;
  });
  return {
    isSupported,
    isPlaying,
    status,
    voiceInfo,
    utterance,
    error,
    toggle,
    speak
  };
}

function useStorageAsync(key, initialValue, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const rawInit = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(initialValue);
  const type = guessSerializerType(rawInit);
  const data = (shallow ? vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef : vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  async function read(event) {
    if (!storage || event && event.key !== key)
      return;
    try {
      const rawValue = event ? event.newValue : await storage.getItem(key);
      if (rawValue == null) {
        data.value = rawInit;
        if (writeDefaults && rawInit !== null)
          await storage.setItem(key, await serializer.write(rawInit));
      } else {
        data.value = await serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    }
  }
  read();
  if (window && listenToStorageChanges)
    useEventListener(window, "storage", (e) => setTimeout(() => read(e), 0));
  if (storage) {
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchWithFilter)(data, async () => {
      try {
        if (data.value == null)
          await storage.removeItem(key);
        else
          await storage.setItem(key, await serializer.write(data.value));
      } catch (e) {
        onError(e);
      }
    }, {
      flush,
      deep,
      eventFilter
    });
  }
  return data;
}

let _id = 0;
function useStyleTag(css, options = {}) {
  const isLoaded = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const {
    document = defaultDocument,
    immediate = true,
    manual = false,
    id = `vueuse_styletag_${++_id}`
  } = options;
  const cssRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(css);
  let stop = () => {
  };
  const load = () => {
    if (!document)
      return;
    const el = document.getElementById(id) || document.createElement("style");
    el.type = "text/css";
    el.id = id;
    if (options.media)
      el.media = options.media;
    document.head.appendChild(el);
    if (isLoaded.value)
      return;
    stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(cssRef, (value) => {
      el.innerText = value;
    }, { immediate: true });
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document || !isLoaded.value)
      return;
    stop();
    document.head.removeChild(document.getElementById(id));
    isLoaded.value = false;
  };
  if (immediate && !manual)
    load();
  if (!manual)
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(unload);
  return {
    id,
    css: cssRef,
    unload,
    load,
    isLoaded: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(isLoaded)
  };
}

function useTemplateRefsList() {
  const refs = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  refs.value.set = (el) => {
    if (el)
      refs.value.push(el);
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.onBeforeUpdate)(() => {
    refs.value.length = 0;
  });
  return refs;
}

var __defProp$3 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const initialRect = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: 0,
  width: 0
};
const initialState = __spreadValues$3({
  text: ""
}, initialRect);
function getRectFromSelection(selection) {
  if (!selection || selection.rangeCount < 1)
    return initialRect;
  const range = selection.getRangeAt(0);
  const { height, width, top, left, right, bottom } = range.getBoundingClientRect();
  return {
    height,
    width,
    top,
    left,
    right,
    bottom
  };
}
function useTextSelection(element) {
  var _a;
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialState);
  if (!((_a = defaultWindow) == null ? void 0 : _a.getSelection))
    return state;
  const onMouseup = () => {
    var _a2;
    const text = (_a2 = window.getSelection()) == null ? void 0 : _a2.toString();
    if (text) {
      const rect = getRectFromSelection(window.getSelection());
      state.value = __spreadProps$1(__spreadValues$3(__spreadValues$3({}, state.value), rect), {
        text
      });
    }
  };
  const onMousedown = () => {
    var _a2;
    state.value.text && (state.value = initialState);
    (_a2 = window.getSelection()) == null ? void 0 : _a2.removeAllRanges();
  };
  useEventListener(element != null ? element : document, "mouseup", onMouseup);
  useEventListener(document, "mousedown", onMousedown);
  return state;
}

var __defProp$2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function useThrottledRefHistory(source, options = {}) {
  const { throttle = 200, trailing = true } = options;
  const filter = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.throttleFilter)(throttle, trailing);
  const history = useRefHistory(source, __spreadProps(__spreadValues$2({}, options), { eventFilter: filter }));
  return __spreadValues$2({}, history);
}

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Infinity, value: 31536e6, name: "year" }
];
const DEFAULT_MESSAGES = {
  justNow: "just now",
  past: (n) => n.match(/\d/) ? `${n} ago` : n,
  future: (n) => n.match(/\d/) ? `in ${n}` : n,
  month: (n, past) => n === 1 ? past ? "last month" : "next month" : `${n} month${n > 1 ? "s" : ""}`,
  year: (n, past) => n === 1 ? past ? "last year" : "next year" : `${n} year${n > 1 ? "s" : ""}`,
  day: (n, past) => n === 1 ? past ? "yesterday" : "tomorrow" : `${n} day${n > 1 ? "s" : ""}`,
  week: (n, past) => n === 1 ? past ? "last week" : "next week" : `${n} week${n > 1 ? "s" : ""}`,
  hour: (n) => `${n} hour${n > 1 ? "s" : ""}`,
  minute: (n) => `${n} minute${n > 1 ? "s" : ""}`,
  second: (n) => `${n} second${n > 1 ? "s" : ""}`
};
const DEFAULT_FORMATTER = (date) => date.toISOString().slice(0, 10);
function useTimeAgo(time, options = {}) {
  const {
    controls: exposeControls = false,
    max,
    updateInterval = 3e4,
    messages = DEFAULT_MESSAGES,
    fullDateFormatter = DEFAULT_FORMATTER
  } = options;
  const { abs, round } = Math;
  const _a = useNow({ interval: updateInterval, controls: true }), { now } = _a, controls = __objRest(_a, ["now"]);
  function getTimeago(from, now2) {
    var _a2;
    const diff = +now2 - +from;
    const absDiff = abs(diff);
    if (absDiff < 6e4)
      return messages.justNow;
    if (typeof max === "number" && absDiff > max)
      return fullDateFormatter(new Date(from));
    if (typeof max === "string") {
      const unitMax = (_a2 = UNITS.find((i) => i.name === max)) == null ? void 0 : _a2.max;
      if (unitMax && absDiff > unitMax)
        return fullDateFormatter(new Date(from));
    }
    for (const unit of UNITS) {
      if (absDiff < unit.max)
        return format(diff, unit);
    }
  }
  function applyFormat(name, val, isPast) {
    const formatter = messages[name];
    if (typeof formatter === "function")
      return formatter(val, isPast);
    return formatter.replace("{0}", val.toString());
  }
  function format(diff, unit) {
    const val = round(abs(diff) / unit.value);
    const past = diff > 0;
    const str = applyFormat(unit.name, val, past);
    return applyFormat(past ? "past" : "future", str, past);
  }
  const timeAgo = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => getTimeago(new Date((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(time)), (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(now.value)));
  if (exposeControls) {
    return __spreadValues$1({
      timeAgo
    }, controls);
  } else {
    return timeAgo;
  }
}

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function useTimestamp(options = {}) {
  const {
    controls: exposeControls = false,
    offset = 0,
    immediate = true,
    interval = "requestAnimationFrame"
  } = options;
  const ts = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp)() + offset);
  const update = () => ts.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp)() + offset;
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate }) : (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn)(update, interval, { immediate });
  if (exposeControls) {
    return __spreadValues({
      timestamp: ts
    }, controls);
  } else {
    return ts;
  }
}

function useTitle(newTitle = null, options = {}) {
  var _a, _b;
  const {
    document = defaultDocument,
    observe = false,
    titleTemplate = "%s"
  } = options;
  const title = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((_a = newTitle != null ? newTitle : document == null ? void 0 : document.title) != null ? _a : null);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(title, (t, o) => {
    if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(t) && t !== o && document)
      document.title = titleTemplate.replace("%s", t);
  }, { immediate: true });
  if (observe && document) {
    useMutationObserver((_b = document.head) == null ? void 0 : _b.querySelector("title"), () => {
      if (document && document.title !== title.value)
        title.value = titleTemplate.replace("%s", document.title);
    }, { childList: true });
  }
  return title;
}

const TransitionPresets = {
  linear: _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.identity,
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
function createEasingFunction([p0, p1, p2, p3]) {
  const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
  const b = (a1, a2) => 3 * a2 - 6 * a1;
  const c = (a1) => 3 * a1;
  const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
  const getTforX = (x) => {
    let aGuessT = x;
    for (let i = 0; i < 4; ++i) {
      const currentSlope = getSlope(aGuessT, p0, p2);
      if (currentSlope === 0)
        return aGuessT;
      const currentX = calcBezier(aGuessT, p0, p2) - x;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  };
  return (x) => p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}
function useTransition(source, options = {}) {
  const {
    delay = 0,
    disabled = false,
    duration = 1e3,
    onFinished = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    onStarted = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    transition = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.identity
  } = options;
  const currentTransition = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    const t = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(transition);
    return (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(t) ? t : createEasingFunction(t);
  });
  const sourceValue = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    const s = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(source);
    return (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(s) ? s : s.map(vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref);
  });
  const sourceVector = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(sourceValue.value) ? [sourceValue.value] : sourceValue.value);
  const outputVector = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(sourceVector.value.slice(0));
  let currentDuration;
  let diffVector;
  let endAt;
  let startAt;
  let startVector;
  const { resume, pause } = useRafFn(() => {
    const now = Date.now();
    const progress = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.clamp)(1 - (endAt - now) / currentDuration, 0, 1);
    outputVector.value = startVector.map((val, i) => {
      var _a;
      return val + ((_a = diffVector[i]) != null ? _a : 0) * currentTransition.value(progress);
    });
    if (progress >= 1) {
      pause();
      onFinished();
    }
  }, { immediate: false });
  const start = () => {
    pause();
    currentDuration = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(duration);
    diffVector = outputVector.value.map((n, i) => {
      var _a, _b;
      return ((_a = sourceVector.value[i]) != null ? _a : 0) - ((_b = outputVector.value[i]) != null ? _b : 0);
    });
    startVector = outputVector.value.slice(0);
    startAt = Date.now();
    endAt = startAt + currentDuration;
    resume();
    onStarted();
  };
  const timeout = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeoutFn)(start, delay, { immediate: false });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(sourceVector, () => {
    if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(disabled)) {
      outputVector.value = sourceVector.value.slice(0);
    } else {
      if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(delay) <= 0)
        start();
      else
        timeout.start();
    }
  }, { deep: true });
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    const targetVector = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(disabled) ? sourceVector : outputVector;
    return (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(sourceValue.value) ? targetVector.value[0] : targetVector.value;
  });
}

function useUrlSearchParams(mode = "history", options = {}) {
  const {
    initialValue = {},
    removeNullishValues = true,
    removeFalsyValues = false,
    window = defaultWindow
  } = options;
  if (!window)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(initialValue);
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(initialValue);
  function getRawParams() {
    if (mode === "history") {
      return window.location.search || "";
    } else if (mode === "hash") {
      const hash = window.location.hash || "";
      const index = hash.indexOf("?");
      return index > 0 ? hash.slice(index) : "";
    } else {
      return (window.location.hash || "").replace(/^#/, "");
    }
  }
  function constructQuery(params) {
    const stringified = params.toString();
    if (mode === "history")
      return `${stringified ? `?${stringified}` : ""}${location.hash || ""}`;
    if (mode === "hash-params")
      return `${location.search || ""}${stringified ? `#${stringified}` : ""}`;
    const hash = window.location.hash || "#";
    const index = hash.indexOf("?");
    if (index > 0)
      return `${hash.slice(0, index)}${stringified ? `?${stringified}` : ""}`;
    return `${hash}${stringified ? `?${stringified}` : ""}`;
  }
  function read() {
    return new URLSearchParams(getRawParams());
  }
  function updateState(params) {
    const unusedKeys = new Set(Object.keys(state));
    for (const key of params.keys()) {
      const paramsForKey = params.getAll(key);
      state[key] = paramsForKey.length > 1 ? paramsForKey : params.get(key) || "";
      unusedKeys.delete(key);
    }
    Array.from(unusedKeys).forEach((key) => delete state[key]);
  }
  const { pause, resume } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.pausableWatch)(state, () => {
    const params = new URLSearchParams("");
    Object.keys(state).forEach((key) => {
      const mapEntry = state[key];
      if (Array.isArray(mapEntry))
        mapEntry.forEach((value) => params.append(key, value));
      else if (removeNullishValues && mapEntry == null)
        params.delete(key);
      else if (removeFalsyValues && !mapEntry)
        params.delete(key);
      else
        params.set(key, mapEntry);
    });
    write(params);
  }, { deep: true });
  function write(params, shouldUpdate) {
    pause();
    if (shouldUpdate)
      updateState(params);
    window.history.replaceState({}, "", window.location.pathname + constructQuery(params));
    resume();
  }
  function onChanged() {
    write(read(), true);
  }
  useEventListener(window, "popstate", onChanged, false);
  if (mode !== "history")
    useEventListener(window, "hashchange", onChanged, false);
  updateState(read());
  return state;
}

function useUserMedia(options = {}) {
  var _a, _b, _c;
  const enabled = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((_a = options.enabled) != null ? _a : false);
  const autoSwitch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((_b = options.autoSwitch) != null ? _b : true);
  const videoDeviceId = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(options.videoDeviceId);
  const audioDeviceId = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(options.audioDeviceId);
  const { navigator = defaultNavigator } = options;
  const isSupported = Boolean((_c = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _c.getUserMedia);
  const stream = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)();
  function getDeviceOptions(device) {
    if (device.value === "none" || device.value === false)
      return false;
    if (device.value == null)
      return true;
    return {
      deviceId: device.value
    };
  }
  async function _start() {
    if (!isSupported || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getUserMedia({
      video: getDeviceOptions(videoDeviceId),
      audio: getDeviceOptions(audioDeviceId)
    });
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  async function restart() {
    _stop();
    return await start();
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(enabled, (v) => {
    if (v)
      _start();
    else
      _stop();
  }, { immediate: true });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([videoDeviceId, audioDeviceId], () => {
    if (autoSwitch.value && stream.value)
      restart();
  }, { immediate: true });
  return {
    isSupported,
    stream,
    start,
    stop,
    restart,
    videoDeviceId,
    audioDeviceId,
    enabled,
    autoSwitch
  };
}

function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c;
  const {
    passive = false,
    eventName,
    deep = false
  } = options;
  const vm = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance)();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm));
  let event = eventName;
  if (!key) {
    if (vue_demi__WEBPACK_IMPORTED_MODULE_1__.isVue2) {
      const modelOptions = (_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$options) == null ? void 0 : _c.model;
      key = (modelOptions == null ? void 0 : modelOptions.value) || "value";
      if (!eventName)
        event = (modelOptions == null ? void 0 : modelOptions.event) || "input";
    } else {
      key = "modelValue";
    }
  }
  event = eventName || event || `update:${key}`;
  if (passive) {
    const proxy = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(props[key]);
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => props[key], (v) => proxy.value = v);
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(proxy, (v) => {
      if (v !== props[key] || deep)
        _emit(event, v);
    }, {
      deep
    });
    return proxy;
  } else {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
      get() {
        return props[key];
      },
      set(value) {
        _emit(event, value);
      }
    });
  }
}

function useVModels(props, emit, options = {}) {
  const ret = {};
  for (const key in props)
    ret[key] = useVModel(props, key, emit, options);
  return ret;
}

function useVibrate(options) {
  const {
    pattern = [],
    interval = 0,
    navigator = defaultNavigator
  } = options || {};
  const isSupported = typeof navigator !== "undefined" && "vibrate" in navigator;
  const patternRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(pattern);
  let intervalControls;
  const vibrate = (pattern2 = patternRef.value) => {
    if (isSupported)
      navigator.vibrate(pattern2);
  };
  const stop = () => {
    if (isSupported)
      navigator.vibrate(0);
    intervalControls == null ? void 0 : intervalControls.pause();
  };
  if (interval > 0) {
    intervalControls = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn)(vibrate, interval, {
      immediate: false,
      immediateCallback: false
    });
  }
  return {
    isSupported,
    pattern,
    intervalControls,
    vibrate,
    stop
  };
}

function useVirtualList(list, options) {
  const containerRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const size = useElementSize(containerRef);
  const currentList = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const source = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(list);
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({ start: 0, end: 10 });
  const { itemHeight, overscan = 5 } = options;
  const getViewCapacity = (containerHeight) => {
    if (typeof itemHeight === "number")
      return Math.ceil(containerHeight / itemHeight);
    const { start = 0 } = state.value;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= containerHeight) {
        capacity = i;
        break;
      }
    }
    return capacity - start;
  };
  const getOffset = (scrollTop) => {
    if (typeof itemHeight === "number")
      return Math.floor(scrollTop / itemHeight) + 1;
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= scrollTop) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };
  const calculateRange = () => {
    const element = containerRef.value;
    if (element) {
      const offset = getOffset(element.scrollTop);
      const viewCapacity = getViewCapacity(element.clientHeight);
      const from = offset - overscan;
      const to = offset + viewCapacity + overscan;
      state.value = {
        start: from < 0 ? 0 : from,
        end: to > source.value.length ? source.value.length : to
      };
      currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => ({
        data: ele,
        index: index + state.value.start
      }));
    }
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([size.width, size.height, list], () => {
    calculateRange();
  });
  const totalHeight = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (typeof itemHeight === "number")
      return source.value.length * itemHeight;
    return source.value.reduce((sum, _, index) => sum + itemHeight(index), 0);
  });
  const getDistanceTop = (index) => {
    if (typeof itemHeight === "number") {
      const height2 = index * itemHeight;
      return height2;
    }
    const height = source.value.slice(0, index).reduce((sum, _, i) => sum + itemHeight(i), 0);
    return height;
  };
  const scrollTo = (index) => {
    if (containerRef.value) {
      containerRef.value.scrollTop = getDistanceTop(index);
      calculateRange();
    }
  };
  const offsetTop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => getDistanceTop(state.value.start));
  const wrapperProps = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    return {
      style: {
        width: "100%",
        height: `${totalHeight.value - offsetTop.value}px`,
        marginTop: `${offsetTop.value}px`
      }
    };
  });
  const containerStyle = { overflowY: "auto" };
  return {
    list: currentList,
    scrollTo,
    containerProps: {
      ref: containerRef,
      onScroll: () => {
        calculateRange();
      },
      style: containerStyle
    },
    wrapperProps
  };
}

const useWakeLock = (options = {}) => {
  const {
    navigator = defaultNavigator,
    document = defaultDocument
  } = options;
  let wakeLock;
  const isSupported = navigator && "wakeLock" in navigator;
  const isActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  async function onVisibilityChange() {
    if (!isSupported || !wakeLock)
      return;
    if (document && document.visibilityState === "visible")
      wakeLock = await navigator.wakeLock.request("screen");
    isActive.value = !wakeLock.released;
  }
  if (document)
    useEventListener(document, "visibilitychange", onVisibilityChange, { passive: true });
  async function request(type) {
    if (!isSupported)
      return;
    wakeLock = await navigator.wakeLock.request(type);
    isActive.value = !wakeLock.released;
  }
  async function release() {
    if (!isSupported || !wakeLock)
      return;
    await wakeLock.release();
    isActive.value = !wakeLock.released;
    wakeLock = null;
  }
  return {
    isSupported,
    isActive,
    request,
    release
  };
};

const useWebNotification = (defaultOptions = {}) => {
  const {
    window = defaultWindow
  } = defaultOptions;
  const isSupported = !!window && "Notification" in window;
  const notification = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const requestPermission = async () => {
    if (!isSupported)
      return;
    if ("permission" in Notification && Notification.permission !== "denied")
      await Notification.requestPermission();
  };
  const onClick = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const onShow = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const onError = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const onClose = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const show = async (overrides) => {
    if (!isSupported)
      return;
    await requestPermission();
    const options = Object.assign({}, defaultOptions, overrides);
    notification.value = new Notification(options.title || "", options);
    notification.value.onclick = (event) => onClick.trigger(event);
    notification.value.onshow = (event) => onShow.trigger(event);
    notification.value.onerror = (event) => onError.trigger(event);
    notification.value.onclose = (event) => onClose.trigger(event);
    return notification.value;
  };
  const close = () => {
    if (notification.value)
      notification.value.close();
    notification.value = null;
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(async () => {
    if (isSupported)
      await requestPermission();
  });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(close);
  if (isSupported && window) {
    const document = window.document;
    useEventListener(document, "visibilitychange", (e) => {
      e.preventDefault();
      if (document.visibilityState === "visible") {
        close();
      }
    });
  }
  return {
    isSupported,
    notification,
    show,
    close,
    onClick,
    onShow,
    onError,
    onClose
  };
};

function resolveNestedOptions(options) {
  if (options === true)
    return {};
  return options;
}
function useWebSocket(url, options = {}) {
  const {
    onConnected,
    onDisconnected,
    onError,
    onMessage,
    immediate = true,
    autoClose = true,
    protocols = []
  } = options;
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const status = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("CONNECTING");
  const wsRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  let heartbeatPause;
  let heartbeatResume;
  let explicitlyClosed = false;
  let retried = 0;
  let bufferedData = [];
  const close = (code = 1e3, reason) => {
    if (!wsRef.value)
      return;
    explicitlyClosed = true;
    heartbeatPause == null ? void 0 : heartbeatPause();
    wsRef.value.close(code, reason);
  };
  const _sendBuffer = () => {
    if (bufferedData.length && wsRef.value && status.value === "OPEN") {
      for (const buffer of bufferedData)
        wsRef.value.send(buffer);
      bufferedData = [];
    }
  };
  const send = (data2, useBuffer = true) => {
    if (!wsRef.value || status.value !== "OPEN") {
      if (useBuffer)
        bufferedData.push(data2);
      return false;
    }
    _sendBuffer();
    wsRef.value.send(data2);
    return true;
  };
  const _init = () => {
    const ws = new WebSocket(url, protocols);
    wsRef.value = ws;
    status.value = "CONNECTING";
    explicitlyClosed = false;
    ws.onopen = () => {
      status.value = "OPEN";
      onConnected == null ? void 0 : onConnected(ws);
      heartbeatResume == null ? void 0 : heartbeatResume();
      _sendBuffer();
    };
    ws.onclose = (ev) => {
      status.value = "CLOSED";
      wsRef.value = void 0;
      onDisconnected == null ? void 0 : onDisconnected(ws, ev);
      if (!explicitlyClosed && options.autoReconnect) {
        const {
          retries = -1,
          delay = 1e3,
          onFailed
        } = resolveNestedOptions(options.autoReconnect);
        retried += 1;
        if (retries < 0 || retried < retries)
          setTimeout(_init, delay);
        else
          onFailed == null ? void 0 : onFailed();
      }
    };
    ws.onerror = (e) => {
      onError == null ? void 0 : onError(ws, e);
    };
    ws.onmessage = (e) => {
      data.value = e.data;
      onMessage == null ? void 0 : onMessage(ws, e);
    };
  };
  if (options.heartbeat) {
    const {
      message = "ping",
      interval = 1e3
    } = resolveNestedOptions(options.heartbeat);
    const { pause, resume } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn)(() => send(message, false), interval, { immediate: false });
    heartbeatPause = pause;
    heartbeatResume = resume;
  }
  if (immediate)
    _init();
  if (autoClose) {
    useEventListener(window, "beforeunload", () => close());
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(close);
  }
  const open = () => {
    close();
    retried = 0;
    _init();
  };
  return {
    data,
    status,
    close,
    send,
    open,
    ws: wsRef
  };
}

function useWebWorker(url, workerOptions, options = {}) {
  const {
    window = defaultWindow
  } = options;
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const worker = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)();
  const post = function post2(val) {
    if (!worker.value)
      return;
    worker.value.postMessage(val);
  };
  const terminate = function terminate2() {
    if (!worker.value)
      return;
    worker.value.terminate();
  };
  if (window) {
    worker.value = new window.Worker(url, workerOptions);
    worker.value.onmessage = (e) => {
      data.value = e.data;
    };
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
      if (worker.value)
        worker.value.terminate();
    });
  }
  return {
    data,
    post,
    terminate,
    worker
  };
}

const jobRunner = (userFunc) => (e) => {
  const userFuncArgs = e.data[0];
  return Promise.resolve(userFunc.apply(void 0, userFuncArgs)).then((result) => {
    postMessage(["SUCCESS", result]);
  }).catch((error) => {
    postMessage(["ERROR", error]);
  });
};

const depsParser = (deps) => {
  if (deps.length === 0)
    return "";
  const depsString = deps.map((dep) => `'${dep}'`).toString();
  return `importScripts(${depsString})`;
};

const createWorkerBlobUrl = (fn, deps) => {
  const blobCode = `${depsParser(deps)}; onmessage=(${jobRunner})(${fn})`;
  const blob = new Blob([blobCode], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  return url;
};

const useWebWorkerFn = (fn, options = {}) => {
  const {
    dependencies = [],
    timeout,
    window = defaultWindow
  } = options;
  const worker = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const workerStatus = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("PENDING");
  const promise = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({});
  const timeoutId = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const workerTerminate = (status = "PENDING") => {
    if (worker.value && worker.value._url && window) {
      worker.value.terminate();
      URL.revokeObjectURL(worker.value._url);
      promise.value = {};
      worker.value = void 0;
      window.clearTimeout(timeoutId.value);
      workerStatus.value = status;
    }
  };
  workerTerminate();
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(workerTerminate);
  const generateWorker = () => {
    const blobUrl = createWorkerBlobUrl(fn, dependencies);
    const newWorker = new Worker(blobUrl);
    newWorker._url = blobUrl;
    newWorker.onmessage = (e) => {
      const { resolve = () => {
      }, reject = () => {
      } } = promise.value;
      const [status, result] = e.data;
      switch (status) {
        case "SUCCESS":
          resolve(result);
          workerTerminate(status);
          break;
        default:
          reject(result);
          workerTerminate("ERROR");
          break;
      }
    };
    newWorker.onerror = (e) => {
      const { reject = () => {
      } } = promise.value;
      reject(e);
      workerTerminate("ERROR");
    };
    if (timeout) {
      timeoutId.value = setTimeout(() => workerTerminate("TIMEOUT_EXPIRED"), timeout);
    }
    return newWorker;
  };
  const callWorker = (...fnArgs) => new Promise((resolve, reject) => {
    promise.value = {
      resolve,
      reject
    };
    worker.value && worker.value.postMessage([[...fnArgs]]);
    workerStatus.value = "RUNNING";
  });
  const workerFn = (...fnArgs) => {
    if (workerStatus.value === "RUNNING") {
      console.error("[useWebWorkerFn] You can only run one instance of the worker at a time.");
      return Promise.reject();
    }
    worker.value = generateWorker();
    return callWorker(...fnArgs);
  };
  return {
    workerFn,
    workerStatus,
    workerTerminate
  };
};

function useWindowFocus({ window = defaultWindow } = {}) {
  if (!window)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const focused = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(window.document.hasFocus());
  useEventListener(window, "blur", () => {
    focused.value = false;
  });
  useEventListener(window, "focus", () => {
    focused.value = true;
  });
  return focused;
}

function useWindowScroll({ window = defaultWindow } = {}) {
  if (!window) {
    return {
      x: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0),
      y: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0)
    };
  }
  const x = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(window.pageXOffset);
  const y = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(window.pageYOffset);
  useEventListener("scroll", () => {
    x.value = window.pageXOffset;
    y.value = window.pageYOffset;
  }, {
    capture: false,
    passive: true
  });
  return { x, y };
}

function useWindowSize({ window = defaultWindow, initialWidth = Infinity, initialHeight = Infinity } = {}) {
  const width = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialWidth);
  const height = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialHeight);
  const update = () => {
    if (window) {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    }
  };
  update();
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(update);
  useEventListener("resize", update, { passive: true });
  return { width, height };
}




/***/ }),

/***/ "./node_modules/@vueuse/core/node_modules/@vueuse/shared/index.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@vueuse/core/node_modules/@vueuse/shared/index.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "and": () => (/* binding */ and),
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "biSyncRef": () => (/* binding */ biSyncRef),
/* harmony export */   "bypassFilter": () => (/* binding */ bypassFilter),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "containsProp": () => (/* binding */ containsProp),
/* harmony export */   "controlledComputed": () => (/* binding */ controlledComputed),
/* harmony export */   "controlledRef": () => (/* binding */ controlledRef),
/* harmony export */   "createEventHook": () => (/* binding */ createEventHook),
/* harmony export */   "createFilterWrapper": () => (/* binding */ createFilterWrapper),
/* harmony export */   "createGlobalState": () => (/* binding */ createGlobalState),
/* harmony export */   "createReactiveFn": () => (/* binding */ reactify),
/* harmony export */   "createSharedComposable": () => (/* binding */ createSharedComposable),
/* harmony export */   "createSingletonPromise": () => (/* binding */ createSingletonPromise),
/* harmony export */   "debounceFilter": () => (/* binding */ debounceFilter),
/* harmony export */   "debouncedRef": () => (/* binding */ useDebounce),
/* harmony export */   "debouncedWatch": () => (/* binding */ debouncedWatch),
/* harmony export */   "eagerComputed": () => (/* binding */ eagerComputed),
/* harmony export */   "extendRef": () => (/* binding */ extendRef),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "ignorableWatch": () => (/* binding */ ignorableWatch),
/* harmony export */   "increaseWithUnit": () => (/* binding */ increaseWithUnit),
/* harmony export */   "invoke": () => (/* binding */ invoke),
/* harmony export */   "isBoolean": () => (/* binding */ isBoolean),
/* harmony export */   "isClient": () => (/* binding */ isClient),
/* harmony export */   "isDef": () => (/* binding */ isDef),
/* harmony export */   "isDefined": () => (/* binding */ isDefined),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isWindow": () => (/* binding */ isWindow),
/* harmony export */   "makeDestructurable": () => (/* binding */ makeDestructurable),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "not": () => (/* binding */ not),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "objectPick": () => (/* binding */ objectPick),
/* harmony export */   "or": () => (/* binding */ or),
/* harmony export */   "pausableFilter": () => (/* binding */ pausableFilter),
/* harmony export */   "pausableWatch": () => (/* binding */ pausableWatch),
/* harmony export */   "promiseTimeout": () => (/* binding */ promiseTimeout),
/* harmony export */   "rand": () => (/* binding */ rand),
/* harmony export */   "reactify": () => (/* binding */ reactify),
/* harmony export */   "reactifyObject": () => (/* binding */ reactifyObject),
/* harmony export */   "reactivePick": () => (/* binding */ reactivePick),
/* harmony export */   "refDefault": () => (/* binding */ refDefault),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "syncRef": () => (/* binding */ syncRef),
/* harmony export */   "throttleFilter": () => (/* binding */ throttleFilter),
/* harmony export */   "throttledRef": () => (/* binding */ useThrottle),
/* harmony export */   "throttledWatch": () => (/* binding */ throttledWatch),
/* harmony export */   "timestamp": () => (/* binding */ timestamp),
/* harmony export */   "toReactive": () => (/* binding */ toReactive),
/* harmony export */   "toRefs": () => (/* binding */ toRefs),
/* harmony export */   "tryOnBeforeUnmount": () => (/* binding */ tryOnBeforeUnmount),
/* harmony export */   "tryOnMounted": () => (/* binding */ tryOnMounted),
/* harmony export */   "tryOnScopeDispose": () => (/* binding */ tryOnScopeDispose),
/* harmony export */   "tryOnUnmounted": () => (/* binding */ tryOnUnmounted),
/* harmony export */   "until": () => (/* binding */ until),
/* harmony export */   "useCounter": () => (/* binding */ useCounter),
/* harmony export */   "useDebounce": () => (/* binding */ useDebounce),
/* harmony export */   "useDebounceFn": () => (/* binding */ useDebounceFn),
/* harmony export */   "useInterval": () => (/* binding */ useInterval),
/* harmony export */   "useIntervalFn": () => (/* binding */ useIntervalFn),
/* harmony export */   "useLastChanged": () => (/* binding */ useLastChanged),
/* harmony export */   "useThrottle": () => (/* binding */ useThrottle),
/* harmony export */   "useThrottleFn": () => (/* binding */ useThrottleFn),
/* harmony export */   "useTimeout": () => (/* binding */ useTimeout),
/* harmony export */   "useTimeoutFn": () => (/* binding */ useTimeoutFn),
/* harmony export */   "useToggle": () => (/* binding */ useToggle),
/* harmony export */   "watchAtMost": () => (/* binding */ watchAtMost),
/* harmony export */   "watchOnce": () => (/* binding */ watchOnce),
/* harmony export */   "watchWithFilter": () => (/* binding */ watchWithFilter),
/* harmony export */   "whenever": () => (/* binding */ whenever)
/* harmony export */ });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "./node_modules/@vueuse/core/node_modules/vue-demi/lib/index.mjs");


function and(...args) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => args.every((i) => (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(i)));
}

function biSyncRef(a, b) {
  const flush = "sync";
  const stop1 = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(a, (newValue) => {
    b.value = newValue;
  }, {
    flush,
    immediate: true
  });
  const stop2 = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(b, (newValue) => {
    a.value = newValue;
  }, {
    flush,
    immediate: true
  });
  return () => {
    stop1();
    stop2();
  };
}

function controlledComputed(source, fn) {
  let v = void 0;
  let track;
  let trigger;
  const dirty = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, () => {
    dirty.value = true;
    trigger();
  }, { flush: "sync" });
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.customRef)((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        if (dirty.value) {
          v = fn();
          dirty.value = false;
        }
        track();
        return v;
      },
      set() {
      }
    };
  });
}

function __onlyVue3(name = "this function") {
  if (vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue3)
    return;
  throw new Error(`[VueUse] ${name} is only works on Vue 3.`);
}

function extendRef(ref, extend, { enumerable = false, unwrap = true } = {}) {
  __onlyVue3();
  for (const [key, value] of Object.entries(extend)) {
    if (key === "value")
      continue;
    if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(value) && unwrap) {
      Object.defineProperty(ref, key, {
        get() {
          return value.value;
        },
        set(v) {
          value.value = v;
        },
        enumerable
      });
    } else {
      Object.defineProperty(ref, key, { value, enumerable });
    }
  }
  return ref;
}

function controlledRef(initial, options = {}) {
  let source = initial;
  let track;
  let trigger;
  const ref = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.customRef)((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        return get();
      },
      set(v) {
        set(v);
      }
    };
  });
  function get(tracking = true) {
    if (tracking)
      track();
    return source;
  }
  function set(value, triggering = true) {
    var _a, _b;
    if (value === source)
      return;
    const old = source;
    if (((_a = options.onBeforeChange) == null ? void 0 : _a.call(options, value, old)) === false)
      return;
    source = value;
    (_b = options.onChanged) == null ? void 0 : _b.call(options, value, old);
    if (triggering)
      trigger();
  }
  const untrackedGet = () => get(false);
  const silentSet = (v) => set(v, false);
  const peek = () => get(false);
  const lay = (v) => set(v, false);
  return extendRef(ref, {
    get,
    set,
    untrackedGet,
    silentSet,
    peek,
    lay
  }, { enumerable: true });
}

function createEventHook() {
  const fns = [];
  const off = (fn) => {
    const index = fns.indexOf(fn);
    if (index !== -1)
      fns.splice(index, 1);
  };
  const on = (fn) => {
    fns.push(fn);
    return {
      off: () => off(fn)
    };
  };
  const trigger = (param) => {
    fns.forEach((fn) => fn(param));
  };
  return {
    on,
    off,
    trigger
  };
}

function createGlobalState(stateFactory) {
  let initialized = false;
  let state;
  const scope = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.effectScope)(true);
  return () => {
    if (!initialized) {
      state = scope.run(stateFactory);
      initialized = true;
    }
    return state;
  };
}

function reactify(fn) {
  return function(...args) {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => fn.apply(this, args.map((i) => (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(i))));
  };
}

function tryOnScopeDispose(fn) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope)()) {
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose)(fn);
    return true;
  }
  return false;
}

function createSharedComposable(composable) {
  let subscribers = 0;
  let state;
  let scope;
  const dispose = () => {
    subscribers -= 1;
    if (scope && subscribers <= 0) {
      scope.stop();
      state = void 0;
      scope = void 0;
    }
  };
  return (...args) => {
    subscribers += 1;
    if (!state) {
      scope = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.effectScope)(true);
      state = scope.run(() => composable(...args));
    }
    tryOnScopeDispose(dispose);
    return state;
  };
}

const isClient = typeof window !== "undefined";
const isDef = (val) => typeof val !== "undefined";
const assert = (condition, ...infos) => {
  if (!condition)
    console.warn(...infos);
};
const toString = Object.prototype.toString;
const isBoolean = (val) => typeof val === "boolean";
const isFunction = (val) => typeof val === "function";
const isNumber = (val) => typeof val === "number";
const isString = (val) => typeof val === "string";
const isObject = (val) => toString.call(val) === "[object Object]";
const isWindow = (val) => typeof window !== "undefined" && toString.call(val) === "[object Window]";
const now = () => Date.now();
const timestamp = () => +Date.now();
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const noop = () => {
};
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  const filter = (invoke) => {
    const duration = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(ms);
    const maxDuration = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(options.maxWait);
    if (timer)
      clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        clearTimeout(maxTimer);
        maxTimer = null;
      }
      return invoke();
    }
    if (maxDuration && !maxTimer) {
      maxTimer = setTimeout(() => {
        if (timer)
          clearTimeout(timer);
        maxTimer = null;
        invoke();
      }, maxDuration);
    }
    timer = setTimeout(() => {
      if (maxTimer)
        clearTimeout(maxTimer);
      maxTimer = null;
      invoke();
    }, duration);
  };
  return filter;
}
function throttleFilter(ms, trailing = true, leading = true) {
  let lastExec = 0;
  let timer;
  let preventLeading = !leading;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  };
  const filter = (invoke) => {
    const duration = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(ms);
    const elapsed = Date.now() - lastExec;
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration) {
      lastExec = Date.now();
      if (preventLeading)
        preventLeading = false;
      else
        invoke();
    }
    if (trailing) {
      timer = setTimeout(() => {
        lastExec = Date.now();
        if (!leading)
          preventLeading = true;
        clear();
        invoke();
      }, duration);
    }
    if (!leading && !timer)
      timer = setTimeout(() => preventLeading = true, duration);
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive, pause, resume, eventFilter };
}

function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
function identity(arg) {
  return arg;
}
function createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function invoke(fn) {
  return fn();
}
function containsProp(obj, ...props) {
  return props.some((k) => k in obj);
}
function increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function objectPick(obj, keys, omitUndefined = false) {
  return keys.reduce((n, k) => {
    if (k in obj) {
      if (!omitUndefined || !obj[k] === void 0)
        n[k] = obj[k];
    }
    return n;
  }, {});
}

function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}

function useDebounce(value, ms = 200, options = {}) {
  if (ms <= 0)
    return value;
  const debounced = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(value.value);
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(value, () => updater());
  return debounced;
}

var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$9.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$9.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a = options, {
    eventFilter = bypassFilter
  } = _a, watchOptions = __objRest$5(_a, [
    "eventFilter"
  ]);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, createFilterWrapper(eventFilter, cb), watchOptions);
}

var __defProp$7 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
var __objRest$4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$8.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function debouncedWatch(source, cb, options = {}) {
  const _a = options, {
    debounce = 0
  } = _a, watchOptions = __objRest$4(_a, [
    "debounce"
  ]);
  return watchWithFilter(source, cb, __spreadProps$4(__spreadValues$7({}, watchOptions), {
    eventFilter: debounceFilter(debounce)
  }));
}

function eagerComputed(fn) {
  const result = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.shallowRef)();
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect)(() => {
    result.value = fn();
  });
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.readonly)(result);
}

function get(obj, key) {
  if (key == null)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(obj);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(obj)[key];
}

var __defProp$6 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
var __objRest$3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$7.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$7.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function ignorableWatch(source, cb, options = {}) {
  const _a = options, {
    eventFilter = bypassFilter
  } = _a, watchOptions = __objRest$3(_a, [
    "eventFilter"
  ]);
  const filteredCb = createFilterWrapper(eventFilter, cb);
  let ignoreUpdates;
  let ignorePrevAsyncUpdates;
  let stop;
  if (watchOptions.flush === "sync") {
    const ignore = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    ignorePrevAsyncUpdates = () => {
    };
    ignoreUpdates = (updater) => {
      ignore.value = true;
      updater();
      ignore.value = false;
    };
    stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, (...args) => {
      if (!ignore.value)
        filteredCb(...args);
    }, watchOptions);
  } else {
    const disposables = [];
    const ignoreCounter = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    const syncCounter = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    ignorePrevAsyncUpdates = () => {
      ignoreCounter.value = syncCounter.value;
    };
    disposables.push((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, () => {
      syncCounter.value++;
    }, __spreadProps$3(__spreadValues$6({}, watchOptions), { flush: "sync" })));
    ignoreUpdates = (updater) => {
      const syncCounterPrev = syncCounter.value;
      updater();
      ignoreCounter.value += syncCounter.value - syncCounterPrev;
    };
    disposables.push((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, (...args) => {
      const ignore = ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value;
      ignoreCounter.value = 0;
      syncCounter.value = 0;
      if (ignore)
        return;
      filteredCb(...args);
    }, watchOptions));
    stop = () => {
      disposables.forEach((fn) => fn());
    };
  }
  return { stop, ignoreUpdates, ignorePrevAsyncUpdates };
}

function isDefined(v) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(v) != null;
}

var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
function makeDestructurable(obj, arr) {
  if (typeof Symbol !== "undefined") {
    const clone = __spreadValues$5({}, obj);
    Object.defineProperty(clone, Symbol.iterator, {
      enumerable: false,
      value() {
        let index = 0;
        return {
          next: () => ({
            value: arr[index++],
            done: index > arr.length
          })
        };
      }
    });
    return clone;
  } else {
    return Object.assign([...arr], obj);
  }
}

function not(v) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(v));
}

function or(...args) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => args.some((i) => (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(i)));
}

var __defProp$4 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function pausableWatch(source, cb, options = {}) {
  const _a = options, {
    eventFilter: filter
  } = _a, watchOptions = __objRest$2(_a, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(source, cb, __spreadProps$2(__spreadValues$4({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}

function reactifyObject(obj, optionsOrKeys = {}) {
  let keys = [];
  if (Array.isArray(optionsOrKeys)) {
    keys = optionsOrKeys;
  } else {
    const { includeOwnProperties = true } = optionsOrKeys;
    keys.push(...Object.keys(obj));
    if (includeOwnProperties)
      keys.push(...Object.getOwnPropertyNames(obj));
  }
  return Object.fromEntries(keys.map((key) => {
    const value = obj[key];
    return [
      key,
      typeof value === "function" ? reactify(value.bind(obj)) : value
    ];
  }));
}

function reactivePick(obj, ...keys) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)(Object.fromEntries(keys.map((k) => [k, (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.toRef)(obj, k)])));
}

function refDefault(source, defaultValue) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)({
    get() {
      var _a;
      return (_a = source.value) != null ? _a : defaultValue;
    },
    set(value) {
      source.value = value;
    }
  });
}

function set(...args) {
  if (args.length === 2) {
    const [ref, value] = args;
    ref.value = value;
  }
  if (args.length === 3) {
    if (vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue2) {
      (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.set)(...args);
    } else {
      const [target, key, value] = args;
      target[key] = value;
    }
  }
}

function syncRef(source, targets, {
  flush = "sync",
  deep = false,
  immediate = true
} = {}) {
  if (!Array.isArray(targets))
    targets = [targets];
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, (newValue) => targets.forEach((target) => target.value = newValue), { flush, deep, immediate });
}

function useThrottleFn(fn, ms = 200, trailing = true, leading = true) {
  return createFilterWrapper(throttleFilter(ms, trailing, leading), fn);
}

function useThrottle(value, delay = 200, trailing = true, leading = true) {
  if (delay <= 0)
    return value;
  const throttled = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(value.value);
  const updater = useThrottleFn(() => {
    throttled.value = value.value;
  }, delay, trailing, leading);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(value, () => updater());
  return throttled;
}

var __defProp$3 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function throttledWatch(source, cb, options = {}) {
  const _a = options, {
    throttle = 0,
    trailing = true,
    leading = true
  } = _a, watchOptions = __objRest$1(_a, [
    "throttle",
    "trailing",
    "leading"
  ]);
  return watchWithFilter(source, cb, __spreadProps$1(__spreadValues$3({}, watchOptions), {
    eventFilter: throttleFilter(throttle, trailing, leading)
  }));
}

function toReactive(objectRef) {
  if (!(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(objectRef))
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return Reflect.get(objectRef.value, p, receiver);
    },
    set(_, p, value) {
      objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)(proxy);
}

var __defProp$2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function toRefs(objectRef) {
  if (!(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(objectRef))
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.toRefs)(objectRef);
  const result = Array.isArray(objectRef.value) ? new Array(objectRef.value.length) : {};
  for (const key in objectRef.value) {
    result[key] = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.customRef)(() => ({
      get() {
        return objectRef.value[key];
      },
      set(v) {
        if (Array.isArray(objectRef.value)) {
          const copy = [...objectRef.value];
          copy[key] = v;
          objectRef.value = copy;
        } else {
          objectRef.value = __spreadProps(__spreadValues$2({}, objectRef.value), { [key]: v });
        }
      }
    }));
  }
  return result;
}

function tryOnBeforeUnmount(fn) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)())
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(fn);
}

function tryOnMounted(fn, sync = true) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)())
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onMounted)(fn);
  else if (sync)
    fn();
  else
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)(fn);
}

function tryOnUnmounted(fn) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)())
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(fn);
}

function until(r) {
  let isNot = false;
  function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(r, (v) => {
        if (condition(v) === !isNot) {
          stop == null ? void 0 : stop();
          resolve();
        }
      }, {
        flush,
        deep,
        immediate: true
      });
    });
    const promises = [watcher];
    if (timeout) {
      promises.push(promiseTimeout(timeout, throwOnTimeout).finally(() => {
        stop == null ? void 0 : stop();
      }));
    }
    return Promise.race(promises);
  }
  function toBe(value, options) {
    return toMatch((v) => v === (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(value), options);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array = Array.from(v);
      return array.includes(value) || array.includes((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(value));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count = -1;
    return toMatch(() => {
      count += 1;
      return count >= n;
    }, options);
  }
  if (Array.isArray((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot;
        return this;
      }
    };
    return instance;
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot;
        return this;
      }
    };
    return instance;
  }
}

function useCounter(initialValue = 0, options = {}) {
  const count = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(initialValue);
  const {
    max = Infinity,
    min = -Infinity
  } = options;
  const inc = (delta = 1) => count.value = Math.min(max, count.value + delta);
  const dec = (delta = 1) => count.value = Math.max(min, count.value - delta);
  const get = () => count.value;
  const set = (val) => count.value = val;
  const reset = (val = initialValue) => {
    initialValue = val;
    return set(val);
  };
  return { count, inc, dec, get, set, reset };
}

function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    if (interval <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    timer = setInterval(cb, interval);
  }
  if (immediate && isClient)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
function useInterval(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false,
    immediate = true
  } = options;
  const counter = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
  const controls = useIntervalFn(() => counter.value += 1, interval, { immediate });
  if (exposeControls) {
    return __spreadValues$1({
      counter
    }, controls);
  } else {
    return counter;
  }
}

function useLastChanged(source, options = {}) {
  var _a;
  const ms = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)((_a = options.initialValue) != null ? _a : null);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, () => ms.value = timestamp(), options);
  return ms;
}

function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}

var __defProp = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function useTimeout(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false
  } = options;
  const controls = useTimeoutFn(noop, interval, options);
  const ready = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !controls.isPending.value);
  if (exposeControls) {
    return __spreadValues({
      ready
    }, controls);
  } else {
    return ready;
  }
}

function useToggle(initialValue = false) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(initialValue)) {
    return (value) => {
      initialValue.value = typeof value === "boolean" ? value : !initialValue.value;
    };
  } else {
    const boolean = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(initialValue);
    const toggle = (value) => {
      boolean.value = typeof value === "boolean" ? value : !boolean.value;
    };
    return [boolean, toggle];
  }
}

var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchAtMost(source, cb, options) {
  const _a = options, {
    count
  } = _a, watchOptions = __objRest(_a, [
    "count"
  ]);
  const current = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
  const stop = watchWithFilter(source, (...args) => {
    current.value += 1;
    if (current.value >= (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(count))
      (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => stop());
    cb(...args);
  }, watchOptions);
  return { count: current, stop };
}

function watchOnce(source, cb, options) {
  const stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, (...args) => {
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => stop());
    return cb(...args);
  }, options);
}

function whenever(source, cb, options) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, (v, ov, onInvalidate) => {
    if (v)
      cb(v, ov, onInvalidate);
  }, options);
}




/***/ }),

/***/ "./node_modules/@vueuse/core/node_modules/vue-demi/lib/index.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@vueuse/core/node_modules/vue-demi/lib/index.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "del": () => (/* binding */ del),
/* harmony export */   "BaseTransition": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   "Comment": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   "EffectScope": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   "Fragment": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "KeepAlive": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   "ReactiveEffect": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect),
/* harmony export */   "Static": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   "Suspense": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "Teleport": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   "Text": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "Transition": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.Transition),
/* harmony export */   "TransitionGroup": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup),
/* harmony export */   "VueElement": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.VueElement),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   "camelize": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   "cloneVNode": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   "compatUtils": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   "compile": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.compile),
/* harmony export */   "computed": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "createApp": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createApp),
/* harmony export */   "createBlock": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   "createCommentVNode": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   "createElementBlock": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock),
/* harmony export */   "createElementVNode": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode),
/* harmony export */   "createHydrationRenderer": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   "createPropsRestProxy": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createPropsRestProxy),
/* harmony export */   "createRenderer": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   "createSSRApp": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createSSRApp),
/* harmony export */   "createSlots": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   "createStaticVNode": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   "createVNode": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   "customRef": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   "defineCustomElement": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineCustomElement),
/* harmony export */   "defineEmits": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineEmits),
/* harmony export */   "defineExpose": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineExpose),
/* harmony export */   "defineProps": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   "defineSSRCustomElement": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineSSRCustomElement),
/* harmony export */   "devtools": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   "effect": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.effect),
/* harmony export */   "effectScope": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   "getCurrentScope": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   "getTransitionRawChildren": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   "guardReactiveProps": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps),
/* harmony export */   "h": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "handleError": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   "hydrate": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.hydrate),
/* harmony export */   "initCustomFormatter": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   "initDirectivesForSSR": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.initDirectivesForSSR),
/* harmony export */   "inject": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   "isMemoSame": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isMemoSame),
/* harmony export */   "isProxy": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isRuntimeOnly": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   "isShallow": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   "isVNode": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   "markRaw": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "mergeDefaults": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   "mergeProps": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "nextTick": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   "normalizeClass": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass),
/* harmony export */   "normalizeProps": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps),
/* harmony export */   "normalizeStyle": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle),
/* harmony export */   "onActivated": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onRenderTracked": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   "onScopeDispose": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   "openBlock": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   "popScopeId": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   "provide": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "pushScopeId": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   "reactive": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "registerRuntimeCompiler": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   "render": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "renderList": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   "renderSlot": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   "resolveComponent": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   "resolveDirective": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "ssrContextKey": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   "stop": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.stop),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   "toHandlers": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   "toRaw": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "transformVNodeArgs": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "useAttrs": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   "useCssModule": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useCssModule),
/* harmony export */   "useCssVars": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useCssVars),
/* harmony export */   "useSSRContext": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   "useSlots": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   "useTransitionState": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   "vModelCheckbox": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox),
/* harmony export */   "vModelDynamic": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic),
/* harmony export */   "vModelRadio": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio),
/* harmony export */   "vModelSelect": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect),
/* harmony export */   "vModelText": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.vModelText),
/* harmony export */   "vShow": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.vShow),
/* harmony export */   "version": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   "warn": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   "watchPostEffect": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect),
/* harmony export */   "withAsyncContext": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext),
/* harmony export */   "withCtx": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   "withDefaults": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withDefaults),
/* harmony export */   "withDirectives": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   "withKeys": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withKeys),
/* harmony export */   "withMemo": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withMemo),
/* harmony export */   "withModifiers": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers),
/* harmony export */   "withScopeId": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId),
/* harmony export */   "Vue": () => (/* reexport module object */ vue__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "Vue2": () => (/* binding */ Vue2),
/* harmony export */   "isVue2": () => (/* binding */ isVue2),
/* harmony export */   "isVue3": () => (/* binding */ isVue3),
/* harmony export */   "install": () => (/* binding */ install)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var isVue2 = false
var isVue3 = true
var Vue2 = undefined

function install() {}

function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  target[key] = val
  return val
}

function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1)
    return
  }
  delete target[key]
}





/***/ })

}]);