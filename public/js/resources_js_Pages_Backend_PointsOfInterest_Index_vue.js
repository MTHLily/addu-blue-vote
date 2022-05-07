(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Backend_PointsOfInterest_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/BlueVoteTable.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/BlueVoteTable.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  props: {
    title: {
      type: String
    },
    columns: {
      type: Array,
      "default": []
    },
    items: {
      type: Array,
      "default": []
    },
    pagination: {
      type: Object
    },
    draggableRows: {
      type: Boolean,
      "default": false
    },
    onDragDrop: {
      type: Function,
      "default": function _default(item1, item2) {
        console.log("Dragged: ", item1, " To:", item2);
      }
    }
  },
  setup: function setup(props) {
    var tableItems = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
      if (props.pagination === undefined) return props.items;
      return props.pagination.data;
    });
    var pages = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
      if (props.pagination === undefined) return;
      var pivot = props.pagination.current_page;
      if (pivot <= 3) return lodash__WEBPACK_IMPORTED_MODULE_0___default().range(1, Math.min(props.pagination.last_page + 1, 6));
      if (pivot >= props.pagination.last_page - 3) return lodash__WEBPACK_IMPORTED_MODULE_0___default().range(props.pagination.last_page - 4, props.pagination.last_page + 1);
      return lodash__WEBPACK_IMPORTED_MODULE_0___default().range(pivot - 2, pivot + 3);
    });

    var changePage = function changePage(page) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.visit(route(route().current(), {
        page: page,
        itemsPerPage: props.pagination.per_page
      }));
    };

    var changePerPage = function changePerPage(event) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.visit(route(route().current(), {
        itemsPerPage: event.target.value
      }));
    };

    var onDragStart = function onDragStart(event, ind) {
      event.dataTransfer.setData("item1", ind);
    };

    var onDragLeave = function onDragLeave(event) {
      event.target.parentElement.classList.remove("bg-light");
    };

    var onDragEnter = function onDragEnter(event) {
      event.target.parentElement.classList.add("bg-light"); // console.log(event);
    };

    var onDrop = function onDrop(event, item2Ind) {
      event.target.parentElement.classList.remove("bg-light");
      var item1Ind = event.dataTransfer.getData("item1");
      if (item1Ind == item2Ind) return;
      var item1 = tableItems.value[item1Ind];
      var item2 = tableItems.value[item2Ind];
      props.onDragDrop(item1, item2);
    };

    return {
      pages: pages,
      tableItems: tableItems,
      changePage: changePage,
      changePerPage: changePerPage,
      onDrop: onDrop,
      onDragStart: onDragStart,
      onDragLeave: onDragLeave,
      onDragEnter: onDragEnter
    };
  }
});

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");



function traverseObject(item) {
  var _this = this;

  console.log(" Looking at ", item.title, item.route, this.active);
  if (this.active == true) return;

  if (item.route === route().current()) {
    this.active = true;
    console.log("Active!", this.active);
  }

  if (item.items) item.items.forEach(function (child) {
    return traverseObject(child, _this.active);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  name: "DashboardSiderItem",
  props: {
    item: {
      type: Object,
      "default": function _default() {
        return {
          title: "Default Title",
          route: "/"
        };
      }
    },
    head: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      collapse: null,
      active: false,
      expanded: false
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    this.expanded = this.active = this.item.active;

    var traverseObject = function traverseObject(item) {
      var _item$route;

      if (_this2.active == true) return;
      if (item.route === route().current()) _this2.active = true;
      if (((_item$route = item.route) === null || _item$route === void 0 ? void 0 : _item$route.split(".")[0]) === route().current().split(".")[0]) _this2.active = true;
      if (item.items) item.items.forEach(function (child) {
        return traverseObject(child, _this2.active);
      });
    };

    traverseObject(this.item);

    if (this.$refs.collapse) {
      this.collapse = new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Collapse(this.$refs.collapse, {
        toggle: this.active
      });
    }
  },
  methods: {
    toggle: function toggle() {
      this.expanded = !this.expanded;
      if (this.collapse) this.collapse.toggle(this.expanded);
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    site: Object
  },
  emits: ["marker-clicked"],
  setup: function setup(props) {
    var marker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return {
        position: {
          lat: parseFloat(props.site.latitude),
          lng: parseFloat(props.site.longitude)
        },
        icon: {
          url: "/svg/map_marker.svg?color=" + props.site.location_color.slice(1)
        }
      };
    });
    return {
      marker: marker
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _PoICard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PoICard.vue */ "./resources/js/Components/PointsOfInterest/PoICard.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "PoIMapStackSection",
  components: {
    PoICard: _PoICard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  emits: ["location-clicked", "site-clicked"],
  props: {
    location: {
      type: Object,
      required: true
    },
    heading: {
      type: Number,
      "default": 1
    },
    depth: {
      type: Number,
      "default": 0
    },
    depthNames: {
      type: Array,
      "default": ["Regions", "Provinces", "Districts", "Cities/Municipalities"]
    },
    siteLabel: {
      type: String,
      "default": "Sites"
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoICard.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoICard.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_assets_blue_vote_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/assets/blue vote logo.png */ "./resources/js/Components/assets/blue vote logo.png");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      image: _Components_assets_blue_vote_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  },
  emits: ["site-clicked", "location-clicked"],
  props: {
    site: {
      type: Object,
      "default": function _default() {
        return {
          id: 64,
          name: "Kapalong",
          description: "Municipal Hall Building, Quezon Boulevard, Maniki, Kapalong, Davao Del Norte",
          point_of_interest_type_id: 1,
          longitude: "125.608962600000000",
          latitude: "7.605844931000000",
          created_at: "2021-12-04T09:28:14.000000Z",
          updated_at: "2021-12-04T09:28:14.000000Z",
          location_id: 107,
          location_name: "Davao del Norte - 1st District",
          location_color: "#ffffff",
          image_preview_url: null
        };
      }
    },
    location: Object
  },
  setup: function setup(props) {
    var description = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {
      return marked__WEBPACK_IMPORTED_MODULE_0___default()(props.site.description);
    });
    return {
      description: description
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoIMap.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoIMap.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! naive-ui */ "./node_modules/naive-ui/es/tree-select/src/TreeSelect.js");
/* harmony import */ var _Partials_PoIMapStackSection_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Partials/PoIMapStackSection.vue */ "./resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue");
/* harmony import */ var _Partials_PoIMapMarker_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Partials/PoIMapMarker.vue */ "./resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PoIModal_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PoIModal.vue */ "./resources/js/Components/PointsOfInterest/PoIModal.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    PoIMapMarker: _Partials_PoIMapMarker_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    PoIMapStackSection: _Partials_PoIMapStackSection_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    NTreeSelect: naive_ui__WEBPACK_IMPORTED_MODULE_5__["default"],
    PoIModal: _PoIModal_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    locations: {
      type: Object,
      required: true
    },
    startingHeading: {
      type: Number,
      "default": 1
    },
    startingDepth: {
      type: Number,
      "default": 1
    },
    siteLabel: {
      type: String,
      "default": "Sites"
    },
    noStack: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props) {
    /*
      Maps
    */
    var mapOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      center: {
        lat: 7.071250196247246,
        lng: 125.61315274255003
      },
      zoom: 16,
      opts: {
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: true
      }
    });
    /*
      Filters
     */

    var filterLocationOptionsMap = function filterLocationOptionsMap(location) {
      return {
        key: location.id,
        label: location.name,
        children: location.children.map(filterLocationOptionsMap)
      };
    };

    var filteredLocationIds = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var filterOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.locations.map(filterLocationOptionsMap);
    });

    var locationChildrenIdsReduce = function locationChildrenIdsReduce() {
      var carry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var curr = arguments.length > 1 ? arguments[1] : undefined;
      carry.push(curr.id);
      if (curr.children.length) carry.push.apply(carry, _toConsumableArray(curr.children.reduce(locationChildrenIdsReduce, [])));
      return carry;
    };

    var filterLocationMap = function filterLocationMap(location) {
      if (filteredLocationIds.value.includes(location.id)) {
        return location;
      }

      if (filteredLocationIds.value.some(function (num) {
        return location.children.reduce(locationChildrenIdsReduce, []).includes(num);
      })) {
        return _objectSpread(_objectSpread({}, location), {}, {
          children: location.children.map(filterLocationMap).filter(function (loc) {
            return loc !== null;
          })
        });
      }

      return null;
    };

    var filteredLocations = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return filteredLocationIds.value.length > 0 ? props.locations.map(filterLocationMap).filter(function (loc) {
        return loc !== null;
      }) : props.locations;
    });

    var flattenLocations = function flattenLocations(carry, curr) {
      carry.push(curr);
      if (curr.children.length) carry.push.apply(carry, _toConsumableArray(curr.children.reduce(flattenLocations, [])));
      return carry;
    };

    var flatLocations = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return filteredLocations.value.reduce(flattenLocations, []);
    });
    /* 
    Map elements
     */

    var gMapRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var mapTopRight = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      gMapRef.value.$mapPromise.then(function (gmap) {
        // gmap.controls[google.maps.ControlPosition.LEFT_TOP].push(
        //   this.$refs.mapTopLeft
        // );
        gmap.controls[google.maps.ControlPosition.RIGHT_TOP].push(mapTopRight.value); // gmap.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
        //   this.$refs.mapBottomRight
        // );
      });
    });
    /**
     * Modal
     */

    var currentSite = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var showModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    /**
    Pan Functions
     */

    var pan = function pan(_ref, zoom) {
      var lat = _ref.lat,
          lng = _ref.lng;
      document.getElementById("map").scrollIntoView();
      gMapRef.value.$mapPromise.then(function (gmap) {
        gmap.panTo({
          lat: parseFloat(lat),
          lng: parseFloat(lng)
        });
        mapOptions.value.zoom = zoom;
      });
    };

    var panToSite = function panToSite(site) {
      pan({
        lat: site.latitude,
        lng: site.longitude
      }, 16);
      showModal.value = true;
      currentSite.value = site;
    };

    var panToLocation = function panToLocation(location_id) {
      var location = flatLocations.value.find(function (loc) {
        return loc.id === location_id;
      });
      console.log(location);
      pan({
        lat: location.latitude,
        lng: location.longitude
      }, 10);
    };

    return {
      mapOptions: mapOptions,
      filteredLocationIds: filteredLocationIds,
      filteredLocations: filteredLocations,
      filterOptions: filterOptions,
      flatLocations: flatLocations,
      refs: {
        gMapRef: gMapRef,
        mapTopRight: mapTopRight
      },
      pan: {
        panToLocation: panToLocation,
        panToSite: panToSite
      },
      currentSite: currentSite,
      showModal: showModal
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoIModal.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoIModal.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! naive-ui */ "./node_modules/naive-ui/es/modal/src/Modal.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    site: {
      type: Object,
      "default": undefined
    },
    show: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    NModal: naive_ui__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/DashboardLayout.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/DashboardLayout.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _Components_Layout_ARISEnFooter_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Layout/ARISEnFooter.vue */ "./resources/js/Components/Layout/ARISEnFooter.vue");
/* harmony import */ var _Partials_Header_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Partials/Header.vue */ "./resources/js/Layouts/Partials/Header.vue");
/* harmony import */ var _Partials_DashboardSider_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Partials/DashboardSider.vue */ "./resources/js/Layouts/Partials/DashboardSider.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Head,
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link,
    ArisenFooter: _Components_Layout_ARISEnFooter_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ArisenHeader: _Partials_Header_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ArisenDashboardSider: _Partials_DashboardSider_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      toast: null
    };
  },
  computed: {
    toastMessage: function toastMessage() {
      return {
        icon: this.$page.props.flash.success ? "bi-check-circle text-success" : "bi-exclamation-circle text-warning",
        title: this.$page.props.flash.success ? "Success" : "Warning",
        message: this.$page.props.flash.success || this.$page.props.flash.message || this.$page.props.flash.error
      };
    },
    menuOptions: function menuOptions() {
      return [{
        title: "Locations",
        icon: "bi-geo-alt-fill",
        route: "locations.index"
      }, {
        title: "Points of Interest",
        icon: "bi-geo-fill",
        route: "poi.index"
      }, {
        title: "Voter's Registration",
        icon: "bi-pen-fill",
        items: [{
          title: "Information",
          route: "information.index"
        }, {
          title: "FAQs",
          route: "faqs.index"
        }]
      }, {
        title: "Political Education",
        icon: "bi-info-circle-fill",
        items: [{
          title: "News",
          route: "news.index"
        }, {
          title: "News Sources",
          route: "news-sources.index"
        }, {
          title: "Video Resources",
          route: "video-resources.index"
        }]
      }, {
        title: "Candidate Profiles",
        icon: "bi-people-fill",
        items: [{
          title: "Candidate Profiles",
          route: "candidates.index"
        }, {
          title: "Issues",
          route: "issues.index"
        }, {
          title: "Political Parties",
          route: "political-parties.index"
        }, {
          title: "Video Resources",
          route: "video-resources.index"
        }, {
          title: "Information Modules",
          route: "information-modules.index"
        }]
      }, {
        title: "About Us",
        icon: "bi-people-fill",
        items: [{
          title: "About US",
          route: "about-us.index"
        }, {
          title: "Partner Offices",
          route: "partner-offices.index"
        }, {
          title: "Volunteer Process",
          route: "volunteer-process.index"
        }, {
          title: "Video Resources",
          route: "video-resources.index"
        }, {
          title: "Information Modules",
          route: "information-modules.index"
        }]
      }];
    }
  },
  mounted: function mounted() {
    var message = new bootstrap__WEBPACK_IMPORTED_MODULE_1__.Toast(this.$refs.messageToast);
    if (this.$page.props.flash.success || this.$page.props.flash.message) message.show();
    this.toast = message;
  },
  watch: {
    "$page.props.flash": function $pagePropsFlash() {
      this.toast.show();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/DashboardSider.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/DashboardSider.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Components_assets_blue_vote_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/assets/blue vote logo.png */ "./resources/js/Components/assets/blue vote logo.png");
/* harmony import */ var _Components_Layout_DashboardSiderItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Layout/DashboardSiderItem.vue */ "./resources/js/Components/Layout/DashboardSiderItem.vue");
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! naive-ui */ "./node_modules/naive-ui/es/menu/src/Menu.js");
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! naive-ui */ "./node_modules/naive-ui/es/icon/src/Icon.js");
/* harmony import */ var _Composables_useMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Composables/useMenu */ "./resources/js/Composables/useMenu.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__.defineComponent)({
  props: {
    menuOptions: {
      type: Array,
      "default": []
    }
  },
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link,
    DashboardSiderItem: _Components_Layout_DashboardSiderItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    NMenu: naive_ui__WEBPACK_IMPORTED_MODULE_5__["default"],
    NIcon: naive_ui__WEBPACK_IMPORTED_MODULE_6__.NIcon
  },
  setup: function setup() {
    var _useMenu = (0,_Composables_useMenu__WEBPACK_IMPORTED_MODULE_3__["default"])(),
        siderOptions = _useMenu.siderOptions,
        currentSiderKey = _useMenu.currentSiderKey;

    return {
      logo: _Components_assets_blue_vote_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"],
      siderOptions: siderOptions,
      currentSiderKey: currentSiderKey
    };
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Backend/PointsOfInterest/Index.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Backend/PointsOfInterest/Index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _Layouts_DashboardLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/DashboardLayout.vue */ "./resources/js/Layouts/DashboardLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Components_BlueVoteTable_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/BlueVoteTable.vue */ "./resources/js/Components/BlueVoteTable.vue");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_PointsOfInterest_PoIMap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/PointsOfInterest/PoIMap.vue */ "./resources/js/Components/PointsOfInterest/PoIMap.vue");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PoIMap: _Components_PointsOfInterest_PoIMap_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    DashboardLayout: _Layouts_DashboardLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BlueVoteTable: _Components_BlueVoteTable_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link,
    Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  props: {
    districts: {
      type: Array,
      "default": []
    },
    poi_types: {
      type: Array,
      "default": []
    },
    pois: {
      type: Array,
      "default": []
    }
  },
  setup: function setup(props, context) {
    var center = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__.ref)({
      lat: 7.071250196247246,
      lng: 125.61315274255003
    });
    var gMapRef = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__.ref)();
    var gMapOptions = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__.ref)({
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: true,
      fullscreenControl: true,
      scrollwheel: true
    });
    var markerFilter = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__.ref)(0);
    var markers = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__.computed)(function () {
      if (props.pois) return props.pois.map(function (poi) {
        return {
          position: {
            lat: parseFloat(poi.latitude),
            lng: parseFloat(poi.longitude)
          },
          icon: {
            url: "/svg/map_marker.svg?color=" + poi.location.color.slice(1)
          }
        };
      });else return [];
    });

    var clickHandler = function clickHandler(event) {
      if (!event.placeId) markers.value.push({
        position: {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        }
      });
    };

    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_6__.watch)(gMapRef, function (googleMap) {
      if (googleMap) {
        googleMap.$mapPromise.then(function (map) {
          map.addListener("click", clickHandler);
        });
      }
    });
    var filteredMarkers = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__.computed)(function () {
      if (markers.length != 0) {
        if (markerFilter.value == 0) return markers;
        if (markerFilter.value == 1) return markers.slice(0, 2);else return markers.slice(3);
      } else return [];
    });

    var setCenter = function setCenter(lng, lat) {
      gMapRef.value.$mapPromise.then(function (gmap) {
        gmap.panTo({
          lat: parseFloat(lat),
          lng: parseFloat(lng)
        });
      });
    };

    var convertMarkdown = function convertMarkdown(markedown) {
      return marked__WEBPACK_IMPORTED_MODULE_3___default()(markedown);
    };

    var tableColumns = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__.ref)([{
      label: "Name",
      value: "name"
    }, {
      label: "Description",
      value: "description"
    }, {
      label: "Type",
      value: "type",
      slotName: "type"
    }, {
      label: "Location",
      value: "id",
      slotName: "location"
    }, {
      label: "Image",
      value: "image_url",
      slotName: "image"
    }]);
    return {
      center: center,
      gMapRef: gMapRef,
      gMapOptions: gMapOptions,
      markers: markers,
      markerFilter: markerFilter,
      filteredMarkers: filteredMarkers,
      setCenter: setCenter,
      convertMarkdown: convertMarkdown,
      tableColumns: tableColumns
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/BlueVoteTable.vue?vue&type=template&id=5e732a8f":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/BlueVoteTable.vue?vue&type=template&id=5e732a8f ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "table-responsive"
};
var _hoisted_2 = {
  "class": "table rounded m-0",
  style: {
    "table-layout": "fixed"
  }
};
var _hoisted_3 = {
  "class": "bg-primary text-white"
};
var _hoisted_4 = ["colspan"];
var _hoisted_5 = {
  "class": "d-flex justify-content-between"
};
var _hoisted_6 = {
  "class": "bg-info text-black text-center"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions", -1
/* HOISTED */
);

var _hoisted_8 = {
  key: 0
};
var _hoisted_9 = ["colspan"];

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-archive fs-4 text-danger"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "No Data")], -1
/* HOISTED */
);

var _hoisted_11 = [_hoisted_10];
var _hoisted_12 = ["draggable", "onDragstart", "onDrop"];
var _hoisted_13 = {
  key: 1
};
var _hoisted_14 = {
  "class": "bg-light"
};
var _hoisted_15 = ["colspan"];
var _hoisted_16 = ["colspan"];
var _hoisted_17 = {
  "class": "d-flex justify-content-end"
};
var _hoisted_18 = {
  "class": "w-25"
};
var _hoisted_19 = ["value"];

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"10\">10 per page</option><option value=\"15\">15 per page</option><option value=\"25\">25 per page</option><option value=\"50\">50 per page</option><option value=\"100\">100 per page</option>", 5);

var _hoisted_25 = [_hoisted_20];
var _hoisted_26 = {
  "class": "pagination"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true"
}, "«", -1
/* HOISTED */
);

var _hoisted_28 = [_hoisted_27];

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true"
}, "»", -1
/* HOISTED */
);

var _hoisted_30 = [_hoisted_29];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: $props.columns.length + 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <template v-if=\"$slots['header-extra']\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "header-extra"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </template> ")])], 8
  /* PROPS */
  , _hoisted_4)], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.title]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.columns, function (column) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
      key: column.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(column.label), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), _hoisted_7])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [$setup.tableItems.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "text-center",
    colspan: $props.columns.length + 1
  }, _hoisted_11, 8
  /* PROPS */
  , _hoisted_9)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.tableItems, function (item, ind) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: ind,
      draggable: $props.draggableRows,
      onDragstart: function onDragstart($event) {
        return $setup.onDragStart($event, ind);
      },
      onDrop: function onDrop($event) {
        return $setup.onDrop($event, ind);
      },
      onDragover: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"])),
      onDragenter: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
        return $setup.onDragEnter && $setup.onDragEnter.apply($setup, arguments);
      }, ["prevent"])),
      onDragleave: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
        return $setup.onDragLeave && $setup.onDragLeave.apply($setup, arguments);
      }, ["prevent"]))
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.columns, function (column) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: column.value
      }, [!column.slotName ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
        key: 0,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(column["class"])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item[column.value]), 3
      /* TEXT, CLASS */
      )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, column.slotName, {
        item: item
      })]))], 64
      /* STABLE_FRAGMENT */
      );
    }), 128
    /* KEYED_FRAGMENT */
    )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "actions", {
      item: item
    })])], 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_12);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tfoot", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: this.pagination ? 1 : $props.columns.length + 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "footer")], 8
  /* PROPS */
  , _hoisted_15), this.pagination ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
    key: 0,
    colspan: $props.columns.length
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    value: $props.pagination.per_page,
    onChange: _cache[3] || (_cache[3] = function () {
      return $setup.changePerPage && $setup.changePerPage.apply($setup, arguments);
    })
  }, _hoisted_25, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_19)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", {
    "aria-label": "Page navigation",
    key: $props.pagination.per_page
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
      disabled: $props.pagination.current_page == 1
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "page-link",
    href: "#",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.changePage(1);
    }),
    "aria-label": "First"
  }, _hoisted_28)], 2
  /* CLASS */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.pages, function (pageNo) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: pageNo,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
        active: $props.pagination.current_page == pageNo
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "page-link",
      href: "#",
      onClick: function onClick($event) {
        return $setup.changePage(pageNo);
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pageNo), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["onClick"])], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
      disabled: $props.pagination.current_page == $props.pagination.last_page
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "page-link",
    href: "#",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.changePage($props.pagination.last_page);
    }),
    "aria-label": "Next"
  }, _hoisted_30)], 2
  /* CLASS */
  )])]))])], 8
  /* PROPS */
  , _hoisted_16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=template&id=547ae138&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=template&id=547ae138&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-547ae138"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = ["href", "attrs"];
var _hoisted_2 = {
  "class": "d-flex gap-2 align-items-center"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  key: 0,
  "class": "collapse",
  ref: "collapse"
};
var _hoisted_5 = {
  "class": "card card-body mr-1 p-2 pe-0"
};
var _hoisted_6 = {
  "class": "nav nav-pills flex-column"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DashboardSiderItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DashboardSiderItem", true);

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: _ctx.item.route ? _ctx.route(_ctx.item.route) : '#',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      active: _ctx.item.active || _ctx.active || _ctx.expanded
    }]),
    attrs: _ctx.$attrs,
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.toggle && _ctx.toggle.apply(_ctx, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_ctx.item.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("bi ".concat(_ctx.item.icon, " fs-4"))
  }, null, 2
  /* CLASS */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.item.title), 1
  /* TEXT */
  )])], 10
  /* CLASS, PROPS */
  , _hoisted_1), _ctx.item.items ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.item.items, function (child) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DashboardSiderItem, {
      key: child.title,
      item: child
    }, null, 8
    /* PROPS */
    , ["item"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])], 512
  /* NEED_PATCH */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue?vue&type=template&id=0a14efae":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue?vue&type=template&id=0a14efae ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_GMapMarker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GMapMarker");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_GMapMarker, {
    key: _ctx.marker.position.lat,
    position: _ctx.marker.position,
    icon: _ctx.marker.icon,
    clickable: true,
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('marker-clicked', _ctx.site);
    })
  }, null, 8
  /* PROPS */
  , ["position", "icon"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue?vue&type=template&id=48e2486c":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue?vue&type=template&id=48e2486c ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mb-4"
};
var _hoisted_2 = {
  key: 1
};
var _hoisted_3 = {
  "class": "row row-cols-1 row-cols-sm-2 row-cols-lg-3"
};
var _hoisted_4 = {
  key: 2
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PoICard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PoICard");

  var _component_PoIMapStackSection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PoIMapStackSection", true);

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_ctx.location.sites.length || _ctx.location.children.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)("h".concat(_ctx.heading)), {
    key: 0
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        href: "#map",
        style: {
          "cursor": "pointer"
        },
        onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return _ctx.$emit('location-clicked', _ctx.location.id);
        }, ["stop"]))
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.location.name), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.location.sites.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)("h".concat(_ctx.heading + 1)), null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.siteLabel), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.location.sites, function (site) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: site.id,
      "class": "col mb-4"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PoICard, {
      onLocationClicked: _cache[1] || (_cache[1] = function ($event) {
        return _ctx.$emit('location-clicked', $event);
      }),
      onSiteClicked: _cache[2] || (_cache[2] = function ($event) {
        return _ctx.$emit('site-clicked', $event);
      }),
      site: site
    }, null, 8
    /* PROPS */
    , ["site"])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.location.children.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.location.children, function (child) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PoIMapStackSection, {
      key: child.id,
      onLocationClicked: _cache[3] || (_cache[3] = function ($event) {
        return _ctx.$emit('location-clicked', $event);
      }),
      onSiteClicked: _cache[4] || (_cache[4] = function ($event) {
        return _ctx.$emit('site-clicked', $event);
      }),
      location: child,
      depth: _ctx.depth + 1,
      heading: _ctx.heading + 1,
      "site-label": _ctx.siteLabel
    }, null, 8
    /* PROPS */
    , ["location", "depth", "heading", "site-label"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoICard.vue?vue&type=template&id=8ee3ff4c":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoICard.vue?vue&type=template&id=8ee3ff4c ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card d-flex align-items-center",
  style: {
    "max-width": "540px"
  }
};
var _hoisted_2 = {
  "class": "row g-0 mh-15"
};
var _hoisted_3 = {
  "class": "col-md-3 d-flex align-items-center"
};
var _hoisted_4 = ["src", "alt"];
var _hoisted_5 = ["src"];
var _hoisted_6 = {
  "class": "col-8 align-items-start"
};
var _hoisted_7 = {
  "class": "p-3 text-start"
};
var _hoisted_8 = {
  "aria-label": "breadcrumb"
};
var _hoisted_9 = {
  "class": "breadcrumb"
};
var _hoisted_10 = {
  "class": "breadcrumb-item"
};
var _hoisted_11 = {
  "class": "breadcrumb-item",
  "aria-current": "page"
};
var _hoisted_12 = {
  "class": "card-text"
};
var _hoisted_13 = {
  "class": "card-text"
};
var _hoisted_14 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn h-100",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('site-clicked', $props.site);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$props.site.image_url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    src: $props.site.image_preview_url,
    "class": "img-fluid rounded-start",
    alt: "Logo of ".concat($props.site.location_name),
    style: {
      "object-fit": "cover"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_4)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 1,
    src: _ctx.image,
    "class": "img-fluid rounded-start",
    style: {
      "object-fit": "cover"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_5))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.site.location_type), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#map",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.$emit('location-clicked', $props.site.location_id);
    }, ["stop"]))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.site.location_name), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.site.name), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
    "class": "text-muted",
    innerHTML: $setup.description
  }, null, 8
  /* PROPS */
  , _hoisted_14)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-md-1 row-2 text-white",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background-color: ".concat($props.site.location_color))
  }, null, 4
  /* STYLE */
  )])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoIMap.vue?vue&type=template&id=359b5dfc":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoIMap.vue?vue&type=template&id=359b5dfc ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "d-flex flex-column",
  id: "map"
};
var _hoisted_2 = {
  "class": "flex-grow-1"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  ref: "mapTopLeft"
};
var _hoisted_5 = {
  "class": "vw-100 me-2",
  style: {
    "max-width": "300px"
  }
};
var _hoisted_6 = {
  ref: "mapBottomRight"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PoIMapMarker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PoIMapMarker");

  var _component_GMapMap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GMapMap");

  var _component_PoIMapStackSection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PoIMapStackSection");

  var _component_PoIModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PoIModal");

  var _component_n_tree_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("n-tree-select");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GMapMap, {
    "class": "poi-map",
    ref: function ref(_ref) {
      _ctx.refs.gMapRef.value = _ref;
    },
    zoom: _ctx.mapOptions.zoom,
    center: _ctx.mapOptions.center,
    options: _ctx.mapOptions.opts,
    "map-type-id": "satellite"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.flatLocations, function (location) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: location.id
        }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(location.sites, function (site) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PoIMapMarker, {
            onMarkerClicked: _ctx.pan.panToSite,
            key: site.id,
            site: site
          }, null, 8
          /* PROPS */
          , ["onMarkerClicked", "site"]);
        }), 128
        /* KEYED_FRAGMENT */
        ))], 64
        /* STABLE_FRAGMENT */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["zoom", "center", "options"])]), !_ctx.noStack ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.filteredLocations, function (location) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PoIMapStackSection, {
      key: location.id,
      onSiteClicked: _ctx.pan.panToSite,
      onLocationClicked: _ctx.pan.panToLocation,
      "site-label": _ctx.siteLabel,
      location: location,
      depth: _ctx.startingDepth,
      heading: _ctx.startingHeading
    }, null, 8
    /* PROPS */
    , ["onSiteClicked", "onLocationClicked", "site-label", "location", "depth", "heading"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PoIModal, {
    show: _ctx.showModal,
    "onUpdate:show": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.showModal = $event;
    }),
    site: _ctx.currentSite
  }, null, 8
  /* PROPS */
  , ["show", "site"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, null, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    ref: function ref(_ref2) {
      return _ctx.refs.mapTopRight.value = _ref2;
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_n_tree_select, {
    multiple: "",
    cascade: "",
    checkable: "",
    filterable: "",
    placeholder: "Filter locations...",
    value: _ctx.filteredLocationIds,
    "onUpdate:value": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.filteredLocationIds = $event;
    }),
    options: _ctx.filterOptions,
    "check-strategy": "parent"
  }, null, 8
  /* PROPS */
  , ["value", "options"])])], 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, null, 512
  /* NEED_PATCH */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoIModal.vue?vue&type=template&id=287beb5a":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoIModal.vue?vue&type=template&id=287beb5a ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card site-card p-4"
};
var _hoisted_2 = {
  "class": "card-title"
};
var _hoisted_3 = {
  "class": "card-subititle mb-2 text-muted"
};
var _hoisted_4 = {
  "class": "card-text h-100"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_n_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("n-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_n_modal, {
    show: _ctx.show,
    "on-update:show": function onUpdateShow(value) {
      return _ctx.$emit('update:show', value);
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.site.name), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.site.location_name) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.site.site_type), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.site.description), 1
      /* TEXT */
      )])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["show", "on-update:show"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/DashboardLayout.vue?vue&type=template&id=a8e025ec&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/DashboardLayout.vue?vue&type=template&id=a8e025ec&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-a8e025ec"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "position-fixed start-50 translate-middle",
  style: {
    "z-index": "1100",
    "top": "4rem"
  }
};
var _hoisted_2 = {
  "class": "toast mt-4",
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true",
  ref: "messageToast"
};
var _hoisted_3 = {
  "class": "toast-header"
};
var _hoisted_4 = {
  "class": "me-auto"
};

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-close",
    "data-bs-dismiss": "toast",
    "aria-label": "Close"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_6 = {
  "class": "toast-body"
};
var _hoisted_7 = {
  "class": "min-vh-100 d-flex flex-column"
};

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "nav-header px-4"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "data-bs-toggle": "offcanvas",
    href: "#mainMenu",
    role: "button",
    "aria-controls": "main-menu"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-list text-white fs-1"
  })])], -1
  /* HOISTED */
  );
});

var _hoisted_9 = {
  "class": "mt-4 flex-grow-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ArisenHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ArisenHeader");

  var _component_ArisenFooter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ArisenFooter");

  var _component_ArisenDashboardSider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ArisenDashboardSider");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["me-1", $options.toastMessage.icon])
  }, null, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.toastMessage.title), 1
  /* TEXT */
  ), _hoisted_5]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.toastMessage.message), 1
  /* TEXT */
  )], 512
  /* NEED_PATCH */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ArisenHeader, null, {
    "before-logo": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    "collapse-content": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Content "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Footer "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ArisenFooter), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sidebar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ArisenDashboardSider, {
    "menu-options": $options.menuOptions
  }, null, 8
  /* PROPS */
  , ["menu-options"])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/DashboardSider.vue?vue&type=template&id=e06b58a0":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/DashboardSider.vue?vue&type=template&id=e06b58a0 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "main-menu offcanvas offcanvas-start",
  "data-bs-scroll": "true",
  tabindex: "-1",
  id: "mainMenu"
};
var _hoisted_2 = {
  "class": "d-flex flex-column h-100"
};
var _hoisted_3 = {
  "class": "bg-white mx-auto mt-3 w-full align-middle text-center p-3 d-flex rounded align-items-center"
};
var _hoisted_4 = ["src"];

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-primary align-middle fw-bolder ps-sm-3"
}, " AdDU Blue Vote ", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "flex-grow-1"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-person-circle fs-4"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fs-4"
}, " Logout ", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_n_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("n-menu");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('dashboard'),
    "class": "text-decoration-none"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        "class": "img w-1/2",
        src: _ctx.logo,
        height: "30"
      }, null, 8
      /* PROPS */
      , _hoisted_4), _hoisted_5])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_n_menu, {
    options: _ctx.siderOptions,
    value: _ctx.currentSiderKey,
    "icon-size": 25
  }, null, 8
  /* PROPS */
  , ["options", "value"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <ul class=\"nav nav-pills flex-column mx-4 mt-4 gap-2 flex-grow-1\">\n        <template v-for=\"h1 in menuOptions\" :key=\"h1.title\">\n          <div>\n            <DashboardSiderItem :item=\"h1\" head></DashboardSiderItem>\n          </div>\n        </template>\n      </ul> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    as: "button",
    "class": "btn btn-outline-primary m-4",
    method: "post",
    href: _ctx.route('logout')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7, _hoisted_8];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Backend/PointsOfInterest/Index.vue?vue&type=template&id=17d2d9aa":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Backend/PointsOfInterest/Index.vue?vue&type=template&id=17d2d9aa ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "d-flex flex-column h-100 w-75 mx-auto"
};
var _hoisted_2 = ["href"];

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-image"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_3];
var _hoisted_5 = {
  "class": "btn-group",
  role: "group"
};
var _hoisted_6 = ["onClick"];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-zoom-in"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = [_hoisted_7];

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-pencil-square"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-trash"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_GMapMarker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GMapMarker");

  var _component_GMapMap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GMapMap");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_BlueVoteTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BlueVoteTable");

  var _component_DashboardLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DashboardLayout");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Points of Interest"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DashboardLayout, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GMapMap, {
        "class": "poi-map",
        zoom: 16,
        center: $setup.center,
        options: $setup.gMapOptions,
        ref: "gMapRef",
        "map-type-id": "hybrid"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.markers, function (m) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_GMapMarker, {
              key: m.position.lat,
              icon: m.icon,
              position: m.position
            }, null, 8
            /* PROPS */
            , ["icon", "position"]);
          }), 128
          /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["center", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BlueVoteTable, {
        title: "Points of Interest",
        columns: $setup.tableColumns,
        items: $props.pois
      }, {
        location: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
          var item = _ref.item;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.location.name), 1
          /* TEXT */
          )];
        }),
        type: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
          var item = _ref2.item;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.type.type), 1
          /* TEXT */
          )];
        }),
        image: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref3) {
          var item = _ref3.item;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
            href: "/".concat(item.image_preview_url)
          }, _hoisted_4, 8
          /* PROPS */
          , _hoisted_2), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, item.image_preview_url]])])];
        }),
        actions: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref4) {
          var item = _ref4.item;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            type: "button",
            "class": "btn btn-secondary",
            onClick: function onClick($event) {
              return $setup.setCenter(item.longitude, item.latitude);
            }
          }, _hoisted_8, 8
          /* PROPS */
          , _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
            href: _ctx.route('poi.edit', item.id),
            "class": "btn btn-info"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_9];
            }),
            _: 2
            /* DYNAMIC */

          }, 1032
          /* PROPS, DYNAMIC_SLOTS */
          , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
            as: "button",
            method: "delete",
            href: _ctx.route('poi.destroy', item.id),
            type: "button",
            "class": "btn btn-danger"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_10];
            }),
            _: 2
            /* DYNAMIC */

          }, 1032
          /* PROPS, DYNAMIC_SLOTS */
          , ["href"])])])];
        }),
        footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
            href: _ctx.route('poi.create'),
            "class": "btn btn-primary"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_11];
            }),
            _: 1
            /* STABLE */

          }, 8
          /* PROPS */
          , ["href"])])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["columns", "items"])])];
    }),
    _: 1
    /* STABLE */

  })], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Composables/useMenu.js":
/*!*********************************************!*\
  !*** ./resources/js/Composables/useMenu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! naive-ui */ "./node_modules/naive-ui/es/icon/src/Icon.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var renderIcon = function renderIcon(icon) {
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(naive_ui__WEBPACK_IMPORTED_MODULE_2__.NIcon, null, function () {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("i", {
          "class": "bi ".concat(icon)
        });
      });
    };
  };

  var renderLabel = function renderLabel(label) {
    var labelOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      href: "/dashboard"
    };
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link, labelOptions, function () {
        return label;
      });
    };
  };

  var siderOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
    label: renderLabel("Locations", {
      href: route("locations.index")
    }),
    icon: renderIcon("bi-geo-alt-fill"),
    key: "locations"
  }, {
    label: renderLabel("Points of Interest", {
      href: route("poi.index")
    }),
    icon: renderIcon("bi-geo-fill"),
    key: "poi"
  }, {
    label: "Political Education",
    icon: renderIcon("bi-megaphone-fill"),
    key: "political-education",
    children: [{
      label: renderLabel("Information Modules", {
        href: route("information-modules.index")
      }),
      key: "information-modules"
    }, {
      label: renderLabel("Video Resources", {
        href: route("video-resources.index")
      }),
      key: "video-resources"
    }]
  }, {
    label: "Voter's Registration",
    icon: renderIcon("bi-pen-fill"),
    key: "voters-registration",
    children: [{
      label: renderLabel("Information", {
        href: route("information.index")
      }),
      key: "information-snippets"
    }, {
      label: renderLabel("FAQs", {
        href: route("faqs.index")
      }),
      key: "faqs"
    }]
  }, {
    label: "Voter's Education",
    icon: renderIcon("bi-info-circle-fill"),
    key: "voters-education",
    children: [{
      label: renderLabel("Election Process", {
        href: route("election-process-steps.index")
      }),
      key: "election-process-steps"
    }, {
      label: renderLabel("News", {
        href: route("news.index")
      }),
      key: "news-articles"
    }, {
      label: renderLabel("News Sources", {
        href: route("news-sources.index")
      }),
      key: "news-sources"
    }]
  }, {
    label: "Candidate Profiles",
    icon: renderIcon("bi-people-fill"),
    key: "candidate-profiles",
    children: [{
      label: renderLabel("Candidate Profiles", {
        href: route("candidates.index")
      }),
      key: "candidates"
    }, {
      label: renderLabel("Issues", {
        href: route("issues.index")
      }),
      key: "issues"
    }, {
      label: renderLabel("Political Parties", {
        href: route("political-parties.index")
      }),
      key: "political-parties"
    }]
  }, {
    label: renderLabel("About Us", {
      href: route("about-us.config")
    }),
    icon: renderIcon("bi-people-fill"),
    key: "about-us" //label: renderLabel("About Us", {
    // href: route("about-us.config"),
    // children: [
    //   {
    //     label: renderLabel("About Us", {
    //       href: route("about-us.config"),
    //     }),
    //     key: "about-us",
    //   },
    //   {
    //     label: renderLabel("Partner Offices", {
    //       href: route("partner-offices.index"),
    //     }),
    //     key: "partner-offices",
    //   },
    //   {
    //     label: renderLabel("Volunteer Process", {
    //       href: route("volunteer-process-steps.index"),
    //     }),
    //     key: "volunteer-process-steps",
    //   },
    // ],

  } //),
  //},
  ]);
  var currentSiderKey = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
    var currentRoute = route().current();
    var routeMap = {
      locations: ["locations.index", "locations.create", "locations.edit"],
      poi: ["poi.index", "poi.create", "poi.edit"],
      "information-snippets": ["information.index", "information.create", "information.edit"],
      "election-process-steps": ["election-process-steps.index", "election-process-steps.create", "election-process-steps.edit"],
      "information-modules": ["information-modules.index", "information-modules.create", "information-modules.edit"],
      faqs: ["faqs.index", "faqs.create", "faqs.edit"],
      "news-articles": ["news.index", "news.edit"],
      "news-sources": ["news-sources.index", "news-sources.edit"],
      "video-resources": ["video-resources.index", "video-resources.create", "video-resources.edit"],
      candidates: ["candidates.index", "candidates.create", "candidates.edit"],
      "political-parties": ["political-parties.index", "political-parties.create", "political-parties.edit"],
      issues: ["issues.index", "issues.create", "issues.edit"],
      "about-us": ["about-us.config", "previous-projects.create", "previous-projects.edit", "bluevote-people.create", "bluevote-people.edit"]
    };

    for (var _i = 0, _Object$entries = Object.entries(routeMap); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      if (value.includes(currentRoute)) return key;
    }

    return "locations";
  });
  return {
    renderLabel: renderLabel,
    siderOptions: siderOptions,
    currentSiderKey: currentSiderKey
  };
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=style&index=0&id=547ae138&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=style&index=0&id=547ae138&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.nav-link[data-v-547ae138]:hover,\n.nav-link[data-v-547ae138]:focus {\n  color: #dee2e6;\n  background-color: #061b71;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/DashboardLayout.vue?vue&type=style&index=0&id=a8e025ec&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/DashboardLayout.vue?vue&type=style&index=0&id=a8e025ec&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Header Navbar */\n/* .dropdown-item:hover,\n.dropdown-item:focus {\n  color: #dee2e6;\n  background-color: #061b71;\n}\n.nav-link:hover {\n  color: #dee2e6;\n}\n/* Sidebar */\n/* .bi {\n  display: table-cell;\n  width: 60px;\n  height: 45px;\n}  */\n/* Header */\n/* .main-menu .header {\n  font-size: 18px;\n} */\n/* Main Menu */\n/* .main-menu {\n  background: #ececec;\n  width: 300px;\n}\n.main-menu li {\n  display: block;\n  width: 260px;\n}\n.main-menu li > a {\n  position: relative;\n  display: table;\n  border-collapse: collapse;\n  text-decoration: none;\n  transition: all 0.1s linear;\n}\n.main-menu .nav-text {\n  display: table-cell;\n  width: 190px;\n}\n.main-menu li:hover > a,\n.main-menu li:active > a {\n  color: #fff;\n  background-color: #d6d6d6;\n  border-radius: 10px;\n} */\n/* Sub Menu */\n/* .sub-menu {\n  width: 250px;\n  border-radius: 10px;\n}\n.main-menu .sub-menu a {\n  display: table-cell;\n  width: 190px;\n}\n.main-menu .sub-menu li:hover > a,\n.main-menu .sub-menu li:active > a {\n  color: #fff;\n  background-color: #1e419b;\n  border-radius: 5px;\n} */\n/* More Menu\n.sub-menu .more-menu a { */\n/* display: table-cell;\n  font-size: 14px;\n  width: 165px;\n}\n.sub-menu .more-menu li:hover > a,\n.main-menu .sub-menu li:active > a {\n  color: #fff;\n  background-color: #061b71;\n  border-radius: 6px;\n} */\n/* Log Out */\n/* .main-menu > ul.logout {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n} */\n/* General CSS */\n/* a:hover,\na:focus {\n  text-decoration: none;\n}\n\nnav ul,\nnav li {\n  outline: 0;\n  margin: 0;\n  padding: 0;\n} */\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./resources/js/Components/assets/blue vote logo.png":
/*!***********************************************************!*\
  !*** ./resources/js/Components/assets/blue vote logo.png ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/blue vote logo.png?e7864f5c80c2f28799318d3264251aab");

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

/***/ "./node_modules/naive-ui/es/_internal/focus-detector/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/naive-ui/es/_internal/focus-detector/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./node_modules/naive-ui/es/_internal/icons/ChevronDownFilled.js":
/*!***********************************************************************!*\
  !*** ./node_modules/naive-ui/es/_internal/icons/ChevronDownFilled.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'ChevronDownFilled',
    render() {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z", fill: "currentColor" })));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/_internal/icons/Switcher.js":
/*!**************************************************************!*\
  !*** ./node_modules/naive-ui/es/_internal/icons/Switcher.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/naive-ui/es/_utils/composable/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/naive-ui/es/_utils/composable/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInjectionInstanceCollection": () => (/* binding */ useInjectionInstanceCollection),
/* harmony export */   "useInjectionCollection": () => (/* binding */ useInjectionCollection),
/* harmony export */   "useInjectionElementCollection": () => (/* binding */ useInjectionElementCollection),
/* harmony export */   "useDeferredTrue": () => (/* binding */ useDeferredTrue),
/* harmony export */   "useAdjustedTo": () => (/* reexport safe */ _use_adjusted_to__WEBPACK_IMPORTED_MODULE_1__.useAdjustedTo),
/* harmony export */   "useHoudini": () => (/* reexport safe */ _use_houdini__WEBPACK_IMPORTED_MODULE_2__.useHoudini)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _use_adjusted_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-adjusted-to */ "./node_modules/naive-ui/es/_utils/composable/use-adjusted-to.js");
/* harmony import */ var _use_houdini__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-houdini */ "./node_modules/naive-ui/es/_utils/composable/use-houdini.js");

// injection.collection {
//   key1: [insta, instb]
//   key2: [instc]
// }
function useInjectionInstanceCollection(injectionName, collectionKey, registerKeyRef) {
    var _a;
    const injection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(injectionName, null);
    if (injection === null)
        return;
    const vm = (_a = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)()) === null || _a === void 0 ? void 0 : _a.proxy;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(registerKeyRef, registerInstance);
    registerInstance(registerKeyRef.value);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
        registerInstance(undefined, registerKeyRef.value);
    });
    function registerInstance(key, oldKey) {
        const collection = injection[collectionKey];
        if (oldKey !== undefined)
            removeInstance(collection, oldKey);
        if (key !== undefined)
            addInstance(collection, key);
    }
    function removeInstance(collection, key) {
        if (!collection[key])
            collection[key] = [];
        collection[key].splice(collection[key].findIndex((instance) => instance === vm), 1);
    }
    function addInstance(collection, key) {
        if (!collection[key])
            collection[key] = [];
        if (!~collection[key].findIndex((instance) => instance === vm)) {
            collection[key].push(vm);
        }
    }
}
// injection.collection {
//   key1: [insta.value, instb.value]
//   key2: [instc.value]
// }
function useInjectionCollection(injectionName, collectionKey, valueRef) {
    const injection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(injectionName, null);
    if (injection === null)
        return;
    if (!(collectionKey in injection)) {
        injection[collectionKey] = [];
    }
    injection[collectionKey].push(valueRef.value);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(valueRef, (value, prevValue) => {
        const collectionArray = injection[collectionKey];
        const index = collectionArray.findIndex((collectionValue) => collectionValue === prevValue);
        if (~index)
            collectionArray.splice(index, 1);
        collectionArray.push(value);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
        const collectionArray = injection[collectionKey];
        const index = collectionArray.findIndex((collectionValue) => collectionValue === valueRef.value);
        if (~index)
            collectionArray.splice(index, 1);
    });
}
// injection.collection {
//   key1: [insta.$el, instb.$el]
//   key2: [instc.$el]
// }
function useInjectionElementCollection(injectionName, collectionKey, getElement) {
    const injection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(injectionName, null);
    if (injection === null)
        return;
    if (!(collectionKey in injection)) {
        injection[collectionKey] = [];
    }
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        const el = getElement();
        if (!el)
            return;
        injection[collectionKey].push(el);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
        const collectionArray = injection[collectionKey];
        const element = getElement();
        const index = collectionArray.findIndex((collectionElement) => collectionElement === element);
        if (~index)
            collectionArray.splice(index, 1);
    });
}
function useDeferredTrue(valueRef, delay, shouldDelayRef) {
    if (!delay)
        return valueRef;
    const delayedRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(valueRef.value);
    let timerId = null;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(valueRef, (value) => {
        if (timerId !== null)
            window.clearTimeout(timerId);
        if (value === true) {
            if (shouldDelayRef && !shouldDelayRef.value) {
                delayedRef.value = true;
            }
            else {
                timerId = window.setTimeout(() => {
                    delayedRef.value = true;
                }, delay);
            }
        }
        else {
            delayedRef.value = false;
        }
    });
    return delayedRef;
}




/***/ }),

/***/ "./node_modules/naive-ui/es/_utils/composable/use-houdini.js":
/*!*******************************************************************!*\
  !*** ./node_modules/naive-ui/es/_utils/composable/use-houdini.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHoudini": () => (/* binding */ useHoudini)
/* harmony export */ });
let houdiniRegistered = false;
function useHoudini() {
    if (typeof window === 'undefined')
        return;
    if (!window.CSS)
        return;
    if (!houdiniRegistered) {
        houdiniRegistered = true;
        if ('registerProperty' in (window === null || window === void 0 ? void 0 : window.CSS)) {
            try {
                ;
                CSS.registerProperty({
                    name: '--n-color-start',
                    syntax: '<color>',
                    inherits: false,
                    initialValue: '#0000'
                });
                CSS.registerProperty({
                    name: '--n-color-end',
                    syntax: '<color>',
                    inherits: false,
                    initialValue: '#0000'
                });
            }
            catch (e) { }
        }
    }
}


/***/ }),

/***/ "./node_modules/naive-ui/es/_utils/naive/attribute.js":
/*!************************************************************!*\
  !*** ./node_modules/naive-ui/es/_utils/naive/attribute.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDataKey": () => (/* binding */ createDataKey)
/* harmony export */ });
function createDataKey(key) {
    return typeof key === 'string' ? `s-${key}` : `n-${key}`;
}


/***/ }),

/***/ "./node_modules/naive-ui/es/_utils/vue/create-ref-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/naive-ui/es/_utils/vue/create-ref-setter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRefSetter": () => (/* binding */ createRefSetter)
/* harmony export */ });
function createRefSetter(ref) {
    return (inst) => {
        if (inst) {
            ref.value = inst.$el;
        }
        else {
            ref.value = null;
        }
    };
}


/***/ }),

/***/ "./node_modules/naive-ui/es/checkbox/src/CheckMark.js":
/*!************************************************************!*\
  !*** ./node_modules/naive-ui/es/checkbox/src/CheckMark.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/naive-ui/es/dropdown/src/Dropdown.js":
/*!***********************************************************!*\
  !*** ./node_modules/naive-ui/es/dropdown/src/Dropdown.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var treemate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! treemate */ "./node_modules/treemate/es/create.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/use-merged-state.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/use-memo.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/use-keyboard.js");
/* harmony import */ var _popover_src_Popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../popover */ "./node_modules/naive-ui/es/popover/src/Popover.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-theme.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/call.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/cssr/create-key.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/create-ref-setter.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/keep.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles */ "./node_modules/naive-ui/es/dropdown/styles/light.js");
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DropdownMenu */ "./node_modules/naive-ui/es/dropdown/src/DropdownMenu.js");
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/index.cssr */ "./node_modules/naive-ui/es/dropdown/src/styles/index.cssr.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./context */ "./node_modules/naive-ui/es/dropdown/src/context.js");











const dropdownBaseProps = {
    animated: {
        type: Boolean,
        default: true
    },
    keyboard: {
        type: Boolean,
        default: true
    },
    size: {
        type: String,
        default: 'medium'
    },
    inverted: Boolean,
    placement: {
        type: String,
        default: 'bottom'
    },
    onSelect: [Function, Array],
    options: {
        type: Array,
        default: () => []
    },
    showArrow: Boolean,
    renderLabel: Function,
    renderIcon: Function,
    labelField: {
        type: String,
        default: 'label'
    },
    keyField: {
        type: String,
        default: 'key'
    },
    childrenField: {
        type: String,
        default: 'children'
    },
    // for menu, not documented
    value: [String, Number]
};
const popoverPropKeys = Object.keys(_popover_src_Popover__WEBPACK_IMPORTED_MODULE_1__.popoverBaseProps);
const dropdownProps = Object.assign(Object.assign(Object.assign({}, _popover_src_Popover__WEBPACK_IMPORTED_MODULE_1__.popoverBaseProps), dropdownBaseProps), _mixins__WEBPACK_IMPORTED_MODULE_2__["default"].props);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Dropdown',
    inheritAttrs: false,
    props: dropdownProps,
    setup(props) {
        const uncontrolledShowRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const mergedShowRef = (0,vooks__WEBPACK_IMPORTED_MODULE_3__["default"])((0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'show'), uncontrolledShowRef);
        const treemateRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { keyField, childrenField } = props;
            return (0,treemate__WEBPACK_IMPORTED_MODULE_4__.createTreeMate)(props.options, {
                getKey(node) {
                    return node[keyField];
                },
                getDisabled(node) {
                    return node.disabled === true;
                },
                getIgnored(node) {
                    return node.type === 'divider' || node.type === 'render';
                },
                getChildren(node) {
                    return node[childrenField];
                }
            });
        });
        const tmNodesRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return treemateRef.value.treeNodes;
        });
        const hoverKeyRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const keyboardKeyRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const lastToggledSubmenuKeyRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const pendingKeyRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            var _a, _b, _c;
            return ((_c = (_b = (_a = hoverKeyRef.value) !== null && _a !== void 0 ? _a : keyboardKeyRef.value) !== null && _b !== void 0 ? _b : lastToggledSubmenuKeyRef.value) !== null && _c !== void 0 ? _c : null);
        });
        const pendingKeyPathRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => treemateRef.value.getPath(pendingKeyRef.value).keyPath);
        const activeKeyPathRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => treemateRef.value.getPath(props.value).keyPath);
        const keyboardEnabledRef = (0,vooks__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
            return props.keyboard && mergedShowRef.value;
        });
        (0,vooks__WEBPACK_IMPORTED_MODULE_6__["default"])({
            keydown: {
                ArrowUp: {
                    prevent: true,
                    handler: handleKeyDownUp
                },
                ArrowRight: {
                    prevent: true,
                    handler: handleKeyDownRight
                },
                ArrowDown: {
                    prevent: true,
                    handler: handleKeyDownDown
                },
                ArrowLeft: {
                    prevent: true,
                    handler: handleKeyDownLeft
                },
                Escape: handleKeyDownEsc
            },
            keyup: {
                Enter: handleKeyUpEnter
            }
        }, keyboardEnabledRef);
        const { mergedClsPrefixRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_7__["default"])(props);
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])('Dropdown', '-dropdown', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_8__["default"], _styles__WEBPACK_IMPORTED_MODULE_9__["default"], props, mergedClsPrefixRef);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_context__WEBPACK_IMPORTED_MODULE_10__.dropdownInjectionKey, {
            labelFieldRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'labelField'),
            childrenFieldRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'childrenField'),
            renderLabelRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'renderLabel'),
            renderIconRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'renderIcon'),
            hoverKeyRef: hoverKeyRef,
            keyboardKeyRef: keyboardKeyRef,
            lastToggledSubmenuKeyRef: lastToggledSubmenuKeyRef,
            pendingKeyPathRef: pendingKeyPathRef,
            activeKeyPathRef: activeKeyPathRef,
            animatedRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'animated'),
            mergedShowRef: mergedShowRef,
            doSelect,
            doUpdateShow
        });
        // watch
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(mergedShowRef, (value) => {
            if (!value)
                clearPendingState();
        });
        // methods
        function doSelect(key, node) {
            const { onSelect } = props;
            if (onSelect)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onSelect, key, node);
        }
        function doUpdateShow(value) {
            const { 'onUpdate:show': onUpdateShow } = props;
            if (onUpdateShow)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onUpdateShow, value);
            uncontrolledShowRef.value = value;
        }
        function clearPendingState() {
            hoverKeyRef.value = null;
            keyboardKeyRef.value = null;
            lastToggledSubmenuKeyRef.value = null;
        }
        function handleKeyDownEsc() {
            doUpdateShow(false);
        }
        function handleKeyDownLeft() {
            handleKeyDown('left');
        }
        function handleKeyDownRight() {
            handleKeyDown('right');
        }
        function handleKeyDownUp() {
            handleKeyDown('up');
        }
        function handleKeyDownDown() {
            handleKeyDown('down');
        }
        function handleKeyUpEnter() {
            const pendingNode = getPendingNode();
            if (pendingNode === null || pendingNode === void 0 ? void 0 : pendingNode.isLeaf) {
                doSelect(pendingNode.key, pendingNode.rawNode);
                doUpdateShow(false);
            }
        }
        function getPendingNode() {
            var _a;
            const { value: treeMate } = treemateRef;
            const { value: pendingKey } = pendingKeyRef;
            if (!treeMate || pendingKey === null)
                return null;
            return (_a = treeMate.getNode(pendingKey)) !== null && _a !== void 0 ? _a : null;
        }
        function handleKeyDown(direction) {
            const { value: pendingKey } = pendingKeyRef;
            const { value: { getFirstAvailableNode } } = treemateRef;
            let nextKeyboardKey = null;
            if (pendingKey === null) {
                const firstNode = getFirstAvailableNode();
                if (firstNode !== null) {
                    nextKeyboardKey = firstNode.key;
                }
            }
            else {
                const currentNode = getPendingNode();
                if (currentNode) {
                    let nextNode;
                    switch (direction) {
                        case 'down':
                            nextNode = currentNode.getNext();
                            break;
                        case 'up':
                            nextNode = currentNode.getPrev();
                            break;
                        case 'right':
                            nextNode = currentNode.getChild();
                            break;
                        case 'left':
                            nextNode = currentNode.getParent();
                            break;
                    }
                    if (nextNode)
                        nextKeyboardKey = nextNode.key;
                }
            }
            if (nextKeyboardKey !== null) {
                hoverKeyRef.value = null;
                keyboardKeyRef.value = nextKeyboardKey;
            }
        }
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            mergedTheme: themeRef,
            // data
            tmNodes: tmNodesRef,
            // show
            mergedShow: mergedShowRef,
            // methods
            doUpdateShow,
            cssVars: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                const { size, inverted } = props;
                const { common: { cubicBezierEaseInOut }, self } = themeRef.value;
                const { padding, dividerColor, borderRadius, optionOpacityDisabled, [(0,_utils__WEBPACK_IMPORTED_MODULE_12__.createKey)('optionIconSuffixWidth', size)]: optionIconSuffixWidth, [(0,_utils__WEBPACK_IMPORTED_MODULE_12__.createKey)('optionSuffixWidth', size)]: optionSuffixWidth, [(0,_utils__WEBPACK_IMPORTED_MODULE_12__.createKey)('optionIconPrefixWidth', size)]: optionIconPrefixWidth, [(0,_utils__WEBPACK_IMPORTED_MODULE_12__.createKey)('optionPrefixWidth', size)]: optionPrefixWidth, [(0,_utils__WEBPACK_IMPORTED_MODULE_12__.createKey)('fontSize', size)]: fontSize, [(0,_utils__WEBPACK_IMPORTED_MODULE_12__.createKey)('optionHeight', size)]: optionHeight, [(0,_utils__WEBPACK_IMPORTED_MODULE_12__.createKey)('optionIconSize', size)]: optionIconSize } = self;
                const vars = {
                    '--n-bezier': cubicBezierEaseInOut,
                    '--n-font-size': fontSize,
                    '--n-padding': padding,
                    '--n-border-radius': borderRadius,
                    '--n-option-height': optionHeight,
                    '--n-option-prefix-width': optionPrefixWidth,
                    '--n-option-icon-prefix-width': optionIconPrefixWidth,
                    '--n-option-suffix-width': optionSuffixWidth,
                    '--n-option-icon-suffix-width': optionIconSuffixWidth,
                    '--n-option-icon-size': optionIconSize,
                    '--n-divider-color': dividerColor,
                    '--n-option-opacity-disabled': optionOpacityDisabled
                };
                // writing like this is the fastest method
                if (inverted) {
                    vars['--n-color'] = self.colorInverted;
                    vars['--n-option-color-hover'] = self.optionColorHoverInverted;
                    vars['--n-option-color-active'] = self.optionColorActiveInverted;
                    vars['--n-option-text-color'] = self.optionTextColorInverted;
                    vars['--n-option-text-color-hover'] =
                        self.optionTextColorHoverInverted;
                    vars['--n-option-text-color-active'] =
                        self.optionTextColorActiveInverted;
                    vars['--n-option-text-color-child-active'] =
                        self.optionTextColorChildActiveInverted;
                    vars['--n-prefix-color'] = self.prefixColorInverted;
                    vars['--n-suffix-color'] = self.suffixColorInverted;
                    vars['--n-group-header-text-color'] =
                        self.groupHeaderTextColorInverted;
                }
                else {
                    vars['--n-color'] = self.color;
                    vars['--n-option-color-hover'] = self.optionColorHover;
                    vars['--n-option-color-active'] = self.optionColorActive;
                    vars['--n-option-text-color'] = self.optionTextColor;
                    vars['--n-option-text-color-hover'] = self.optionTextColorHover;
                    vars['--n-option-text-color-active'] = self.optionTextColorActive;
                    vars['--n-option-text-color-child-active'] =
                        self.optionTextColorChildActive;
                    vars['--n-prefix-color'] = self.prefixColor;
                    vars['--n-suffix-color'] = self.suffixColor;
                    vars['--n-group-header-text-color'] = self.groupHeaderTextColor;
                }
                return vars;
            })
        };
    },
    render() {
        const renderPopoverBody = (className, ref, style, onMouseenter, onMouseleave) => {
            const { mergedClsPrefix } = this;
            const dropdownProps = {
                ref: (0,_utils__WEBPACK_IMPORTED_MODULE_13__.createRefSetter)(ref),
                class: [
                    className,
                    `${mergedClsPrefix}-dropdown`,
                    this.trigger === 'manual' &&
                        `${mergedClsPrefix}-popover--manual-trigger`,
                    this.showArrow && `${mergedClsPrefix}-popover--show-arrow`
                ],
                clsPrefix: mergedClsPrefix,
                tmNodes: this.tmNodes,
                style: [style, this.cssVars],
                showArrow: this.showArrow,
                arrowStyle: this.arrowStyle,
                onMouseenter,
                onMouseleave
            };
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_DropdownMenu__WEBPACK_IMPORTED_MODULE_14__["default"], (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(this.$attrs, dropdownProps));
        };
        const { mergedTheme } = this;
        const popoverProps = {
            show: this.mergedShow,
            theme: mergedTheme.peers.Popover,
            themeOverrides: mergedTheme.peerOverrides.Popover,
            internalRenderBody: renderPopoverBody,
            onUpdateShow: this.doUpdateShow
        };
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_popover_src_Popover__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, (0,_utils__WEBPACK_IMPORTED_MODULE_15__.keep)(this.$props, popoverPropKeys), popoverProps), {
            trigger: () => { var _a, _b; return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a); }
        }));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/dropdown/src/DropdownDivider.js":
/*!******************************************************************!*\
  !*** ./node_modules/naive-ui/es/dropdown/src/DropdownDivider.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'DropdownDivider',
    props: {
        clsPrefix: {
            type: String,
            required: true
        }
    },
    render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${this.clsPrefix}-dropdown-divider` });
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/dropdown/src/DropdownGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/naive-ui/es/dropdown/src/DropdownGroup.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/naive/warn.js");
/* harmony import */ var _DropdownOption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropdownOption */ "./node_modules/naive-ui/es/dropdown/src/DropdownOption.js");
/* harmony import */ var _DropdownDivider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropdownDivider */ "./node_modules/naive-ui/es/dropdown/src/DropdownDivider.js");
/* harmony import */ var _DropdownGroupHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownGroupHeader */ "./node_modules/naive-ui/es/dropdown/src/DropdownGroupHeader.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/naive-ui/es/dropdown/src/utils.js");


// eslint-disable-next-line import/no-cycle




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'NDropdownGroup',
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        tmNode: {
            type: Object,
            required: true
        },
        parentKey: {
            type: [String, Number],
            default: null
        }
    },
    render() {
        const { tmNode, parentKey, clsPrefix } = this;
        const { children } = tmNode;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_DropdownGroupHeader__WEBPACK_IMPORTED_MODULE_1__["default"], { clsPrefix: clsPrefix, tmNode: tmNode, key: tmNode.key }), children === null || children === void 0 ? void 0 :
            children.map((child) => {
                if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isDividerNode)(child.rawNode)) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_DropdownDivider__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        clsPrefix,
                        key: child.key
                    });
                }
                if (child.isGroup) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warn)('dropdown', '`group` node is not allowed to be put in `group` node.');
                    return null;
                }
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_DropdownOption__WEBPACK_IMPORTED_MODULE_5__["default"], { clsPrefix: clsPrefix, tmNode: child, parentKey: parentKey, key: child.key }));
            })));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/dropdown/src/DropdownGroupHeader.js":
/*!**********************************************************************!*\
  !*** ./node_modules/naive-ui/es/dropdown/src/DropdownGroupHeader.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/render.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./node_modules/naive-ui/es/dropdown/src/context.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'DropdownGroupHeader',
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
    setup() {
        const { showIconRef, hasSubmenuRef
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
         } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_1__.dropdownMenuInjectionKey);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const { renderLabelRef, labelFieldRef } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_1__.dropdownInjectionKey);
        return {
            labelField: labelFieldRef,
            showIcon: showIconRef,
            hasSubmenu: hasSubmenuRef,
            renderLabel: renderLabelRef
        };
    },
    render() {
        var _a;
        const { clsPrefix, hasSubmenu, showIcon, renderLabel } = this;
        const { rawNode } = this.tmNode;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-dropdown-option` },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-dropdown-option-body ${clsPrefix}-dropdown-option-body--group` },
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "data-dropdown-option": true, class: [
                        `${clsPrefix}-dropdown-option-body__prefix`,
                        showIcon && `${clsPrefix}-dropdown-option-body__prefix--show-icon`
                    ] }, (0,_utils__WEBPACK_IMPORTED_MODULE_2__.render)(rawNode.icon)),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-dropdown-option-body__label`, "data-dropdown-option": true }, renderLabel
                    ? renderLabel(rawNode)
                    : (0,_utils__WEBPACK_IMPORTED_MODULE_2__.render)((_a = rawNode.title) !== null && _a !== void 0 ? _a : rawNode[this.labelField])),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: [
                        `${clsPrefix}-dropdown-option-body__suffix`,
                        hasSubmenu &&
                            `${clsPrefix}-dropdown-option-body__suffix--has-submenu`
                    ], "data-dropdown-option": true }))));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/dropdown/src/DropdownMenu.js":
/*!***************************************************************!*\
  !*** ./node_modules/naive-ui/es/dropdown/src/DropdownMenu.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _popover_src_PopoverBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../popover/src/PopoverBody */ "./node_modules/naive-ui/es/popover/src/PopoverBody.js");
/* harmony import */ var _DropdownDivider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropdownDivider */ "./node_modules/naive-ui/es/dropdown/src/DropdownDivider.js");
/* harmony import */ var _DropdownGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropdownGroup */ "./node_modules/naive-ui/es/dropdown/src/DropdownGroup.js");
/* harmony import */ var _DropdownOption__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DropdownOption */ "./node_modules/naive-ui/es/dropdown/src/DropdownOption.js");
/* harmony import */ var _DropdownRenderOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropdownRenderOption */ "./node_modules/naive-ui/es/dropdown/src/DropdownRenderOption.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/naive-ui/es/dropdown/src/utils.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./node_modules/naive-ui/es/dropdown/src/context.js");



// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/no-cycle




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'DropdownMenu',
    props: {
        showArrow: Boolean,
        arrowStyle: [String, Object],
        clsPrefix: {
            type: String,
            required: true
        },
        tmNodes: {
            type: Array,
            default: () => []
        },
        parentKey: {
            type: [String, Number],
            default: null
        }
    },
    setup(props) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const { renderIconRef, childrenFieldRef } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_1__.dropdownInjectionKey);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_context__WEBPACK_IMPORTED_MODULE_1__.dropdownMenuInjectionKey, {
            showIconRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                const renderIcon = renderIconRef.value;
                return props.tmNodes.some((tmNode) => {
                    var _a;
                    if (tmNode.isGroup) {
                        return (_a = tmNode.children) === null || _a === void 0 ? void 0 : _a.some(({ rawNode: rawChild }) => renderIcon ? renderIcon(rawChild) : rawChild.icon);
                    }
                    const { rawNode } = tmNode;
                    return renderIcon ? renderIcon(rawNode) : rawNode.icon;
                });
            }),
            hasSubmenuRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                const { value: childrenField } = childrenFieldRef;
                return props.tmNodes.some((tmNode) => {
                    var _a;
                    if (tmNode.isGroup) {
                        return (_a = tmNode.children) === null || _a === void 0 ? void 0 : _a.some(({ rawNode: rawChild }) => (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isSubmenuNode)(rawChild, childrenField));
                    }
                    const { rawNode } = tmNode;
                    return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isSubmenuNode)(rawNode, childrenField);
                });
            })
        });
    },
    render() {
        const { parentKey, clsPrefix } = this;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-dropdown-menu` },
            this.tmNodes.map((tmNode) => {
                const { rawNode } = tmNode;
                if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isRenderNode)(rawNode)) {
                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_DropdownRenderOption__WEBPACK_IMPORTED_MODULE_3__["default"], { tmNode: tmNode, key: tmNode.key }));
                }
                if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isDividerNode)(rawNode)) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_DropdownDivider__WEBPACK_IMPORTED_MODULE_4__["default"], { clsPrefix: clsPrefix, key: tmNode.key });
                }
                if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isGroupNode)(rawNode)) {
                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_DropdownGroup__WEBPACK_IMPORTED_MODULE_5__["default"], { clsPrefix: clsPrefix, tmNode: tmNode, parentKey: parentKey, key: tmNode.key }));
                }
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_DropdownOption__WEBPACK_IMPORTED_MODULE_6__["default"], { clsPrefix: clsPrefix, tmNode: tmNode, parentKey: parentKey, key: tmNode.key, props: rawNode.props }));
            }),
            this.showArrow
                ? (0,_popover_src_PopoverBody__WEBPACK_IMPORTED_MODULE_7__.renderArrow)({
                    clsPrefix,
                    arrowStyle: this.arrowStyle
                })
                : null));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/dropdown/src/DropdownOption.js":
/*!*****************************************************************!*\
  !*** ./node_modules/naive-ui/es/dropdown/src/DropdownOption.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vueuc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vueuc */ "./node_modules/vueuc/es/binder/src/Binder.js");
/* harmony import */ var vueuc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vueuc */ "./node_modules/vueuc/es/binder/src/Target.js");
/* harmony import */ var vueuc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vueuc */ "./node_modules/vueuc/es/binder/src/Follower.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/use-memo.js");
/* harmony import */ var _internal_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_internal/icons */ "./node_modules/naive-ui/es/_internal/icons/ChevronRight.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/composable/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/render.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../icon */ "./node_modules/naive-ui/es/icon/src/Icon.js");
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DropdownMenu */ "./node_modules/naive-ui/es/dropdown/src/DropdownMenu.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./node_modules/naive-ui/es/dropdown/src/context.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/naive-ui/es/dropdown/src/utils.js");
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! seemly */ "./node_modules/seemly/es/dom/happens-in.js");






// eslint-disable-next-line import/no-cycle




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'DropdownOption',
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        tmNode: {
            type: Object,
            required: true
        },
        parentKey: {
            type: [String, Number],
            default: null
        },
        placement: {
            type: String,
            default: 'right-start'
        },
        props: Object
    },
    setup(props) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const NDropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_1__.dropdownInjectionKey);
        const { hoverKeyRef, keyboardKeyRef, lastToggledSubmenuKeyRef, pendingKeyPathRef, activeKeyPathRef, animatedRef, mergedShowRef, renderLabelRef, renderIconRef, labelFieldRef, childrenFieldRef } = NDropdown;
        const NDropdownOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_1__.dropdownOptionInjectionKey, null);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const NDropdownMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_1__.dropdownMenuInjectionKey);
        const rawNodeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.tmNode.rawNode);
        const hasSubmenuRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: childrenField } = childrenFieldRef;
            return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isSubmenuNode)(props.tmNode.rawNode, childrenField);
        });
        const mergedDisabledRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { disabled } = props.tmNode;
            return disabled;
        });
        const showSubmenuRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            if (!hasSubmenuRef.value)
                return false;
            const { key, disabled } = props.tmNode;
            if (disabled)
                return false;
            const { value: hoverKey } = hoverKeyRef;
            const { value: keyboardKey } = keyboardKeyRef;
            const { value: lastToggledSubmenuKey } = lastToggledSubmenuKeyRef;
            const { value: pendingKeyPath } = pendingKeyPathRef;
            if (hoverKey !== null)
                return pendingKeyPath.includes(key);
            if (keyboardKey !== null) {
                return (pendingKeyPath.includes(key) &&
                    pendingKeyPath[pendingKeyPath.length - 1] !== key);
            }
            if (lastToggledSubmenuKey !== null)
                return pendingKeyPath.includes(key);
            return false;
        });
        const shouldDelayRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return keyboardKeyRef.value === null && !animatedRef.value;
        });
        const deferredShowSubmenuRef = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.useDeferredTrue)(showSubmenuRef, 300, shouldDelayRef);
        const parentEnteringSubmenuRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return !!(NDropdownOption === null || NDropdownOption === void 0 ? void 0 : NDropdownOption.enteringSubmenuRef.value);
        });
        const enteringSubmenuRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_context__WEBPACK_IMPORTED_MODULE_1__.dropdownOptionInjectionKey, {
            enteringSubmenuRef
        });
        // methods
        function handleSubmenuBeforeEnter() {
            enteringSubmenuRef.value = true;
        }
        function handleSubmenuAfterEnter() {
            enteringSubmenuRef.value = false;
        }
        function handleMouseEnter() {
            const { parentKey, tmNode } = props;
            if (!mergedShowRef.value)
                return;
            lastToggledSubmenuKeyRef.value = parentKey;
            keyboardKeyRef.value = null;
            hoverKeyRef.value = tmNode.key;
        }
        function handleMouseMove() {
            const { tmNode } = props;
            if (!mergedShowRef.value)
                return;
            if (hoverKeyRef.value === tmNode.key)
                return;
            handleMouseEnter();
        }
        function handleMouseLeave(e) {
            if (!mergedShowRef.value)
                return;
            const { relatedTarget } = e;
            if (relatedTarget &&
                !(0,seemly__WEBPACK_IMPORTED_MODULE_4__.happensIn)({ target: relatedTarget }, 'dropdownOption')) {
                hoverKeyRef.value = null;
            }
        }
        function handleClick() {
            const { value: hasSubmenu } = hasSubmenuRef;
            const { tmNode } = props;
            if (!mergedShowRef.value)
                return;
            if (!hasSubmenu && !tmNode.disabled) {
                NDropdown.doSelect(tmNode.key, tmNode.rawNode);
                NDropdown.doUpdateShow(false);
            }
        }
        return {
            labelField: labelFieldRef,
            renderLabel: renderLabelRef,
            renderIcon: renderIconRef,
            siblingHasIcon: NDropdownMenu.showIconRef,
            siblingHasSubmenu: NDropdownMenu.hasSubmenuRef,
            animated: animatedRef,
            mergedShowSubmenu: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                return deferredShowSubmenuRef.value && !parentEnteringSubmenuRef.value;
            }),
            rawNode: rawNodeRef,
            hasSubmenu: hasSubmenuRef,
            pending: (0,vooks__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
                const { value: pendingKeyPath } = pendingKeyPathRef;
                const { key } = props.tmNode;
                return pendingKeyPath.includes(key);
            }),
            childActive: (0,vooks__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
                const { value: activeKeyPath } = activeKeyPathRef;
                const { key } = props.tmNode;
                const index = activeKeyPath.findIndex((k) => key === k);
                if (index === -1)
                    return false;
                return index < activeKeyPath.length - 1;
            }),
            active: (0,vooks__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
                const { value: activeKeyPath } = activeKeyPathRef;
                const { key } = props.tmNode;
                const index = activeKeyPath.findIndex((k) => key === k);
                if (index === -1)
                    return false;
                return index === activeKeyPath.length - 1;
            }),
            mergedDisabled: mergedDisabledRef,
            handleClick,
            handleMouseMove,
            handleMouseEnter,
            handleMouseLeave,
            handleSubmenuBeforeEnter,
            handleSubmenuAfterEnter
        };
    },
    render() {
        var _a;
        const { animated, rawNode, mergedShowSubmenu, clsPrefix, siblingHasIcon, siblingHasSubmenu, renderLabel, renderIcon, props } = this;
        const submenuVNode = mergedShowSubmenu ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__["default"], { clsPrefix: clsPrefix, tmNodes: this.tmNode.children, parentKey: this.tmNode.key })) : null;
        const builtinProps = {
            class: [
                `${clsPrefix}-dropdown-option-body`,
                this.pending && `${clsPrefix}-dropdown-option-body--pending`,
                this.active && `${clsPrefix}-dropdown-option-body--active`,
                this.childActive && `${clsPrefix}-dropdown-option-body--child-active`,
                this.mergedDisabled && `${clsPrefix}-dropdown-option-body--disabled`
            ],
            onMousemove: this.handleMouseMove,
            onMouseenter: this.handleMouseEnter,
            onMouseleave: this.handleMouseLeave,
            onClick: this.handleClick
        };
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-dropdown-option` },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(builtinProps, props), [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "data-dropdown-option": true, class: [
                        `${clsPrefix}-dropdown-option-body__prefix`,
                        siblingHasIcon &&
                            `${clsPrefix}-dropdown-option-body__prefix--show-icon`
                    ] }, [renderIcon ? renderIcon(rawNode) : (0,_utils__WEBPACK_IMPORTED_MODULE_7__.render)(rawNode.icon)]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "data-dropdown-option": true, class: `${clsPrefix}-dropdown-option-body__label` }, renderLabel
                    ? renderLabel(rawNode)
                    : (0,_utils__WEBPACK_IMPORTED_MODULE_7__.render)((_a = rawNode[this.labelField]) !== null && _a !== void 0 ? _a : rawNode.title)),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "data-dropdown-option": true, class: [
                        `${clsPrefix}-dropdown-option-body__suffix`,
                        siblingHasSubmenu &&
                            `${clsPrefix}-dropdown-option-body__suffix--has-submenu`
                    ] }, this.hasSubmenu ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_icon__WEBPACK_IMPORTED_MODULE_8__.NIcon, null, {
                    default: () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal_icons__WEBPACK_IMPORTED_MODULE_9__["default"], null)
                })) : null)
            ]),
            this.hasSubmenu ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_10__["default"], null, {
                default: () => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_11__["default"], null, {
                        default: () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-dropdown-offset-container` },
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_12__["default"], { show: this.mergedShowSubmenu, placement: this.placement, teleportDisabled: true }, {
                                default: () => {
                                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-dropdown-menu-wrapper` }, animated ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, { onBeforeEnter: this.handleSubmenuBeforeEnter, onAfterEnter: this.handleSubmenuAfterEnter, name: "fade-in-scale-up-transition", appear: true }, {
                                        default: () => submenuVNode
                                    })) : (submenuVNode)));
                                }
                            })))
                    })
                ]
            })) : null));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/dropdown/src/DropdownRenderOption.js":
/*!***********************************************************************!*\
  !*** ./node_modules/naive-ui/es/dropdown/src/DropdownRenderOption.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'DropdownRenderOption',
    props: {
        tmNode: {
            type: Object,
            required: true
        }
    },
    render() {
        const { rawNode: { render, props } } = this.tmNode;
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', props, [render === null || render === void 0 ? void 0 : render()]);
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/dropdown/src/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/naive-ui/es/dropdown/src/context.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dropdownMenuInjectionKey": () => (/* binding */ dropdownMenuInjectionKey),
/* harmony export */   "dropdownInjectionKey": () => (/* binding */ dropdownInjectionKey),
/* harmony export */   "dropdownOptionInjectionKey": () => (/* binding */ dropdownOptionInjectionKey)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/create-injection-key.js");

const dropdownMenuInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-dropdown-menu');
const dropdownInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-dropdown');
const dropdownOptionInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-dropdown-option');


/***/ }),

/***/ "./node_modules/naive-ui/es/dropdown/src/styles/index.cssr.js":
/*!********************************************************************!*\
  !*** ./node_modules/naive-ui/es/dropdown/src/styles/index.cssr.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_utils/cssr */ "./node_modules/naive-ui/es/_utils/cssr/index.js");
/* harmony import */ var _styles_transitions_fade_in_scale_up_cssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_styles/transitions/fade-in-scale-up.cssr */ "./node_modules/naive-ui/es/_styles/transitions/fade-in-scale-up.cssr.js");

 // vars:
// --n-bezier
// --n-font-size
// --n-padding
// --n-border-radius
// --n-option-height
// --n-option-prefix-width
// --n-option-icon-prefix-width
// --n-option-suffix-width
// --n-option-icon-suffix-width
// --n-color
// --n-option-color-hover
// --n-option-color-active
// --n-divider-color
// --n-option-text-color
// --n-option-text-color-hover
// --n-option-text-color-active
// --n-option-text-color-child-active
// --n-prefix-color
// --n-suffix-color
// --n-option-icon-size
// --n-option-opacity-disabled
// shared with popover
// --n-box-shadow

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('dropdown-menu', `
 transform-origin: inherit;
 padding: var(--n-padding);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [(0,_styles_transitions_fade_in_scale_up_cssr__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('dropdown-option', `
 position: relative;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('a', `
 text-decoration: none;
 color: inherit;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&::before', `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('dropdown-option-body', `
 display: flex;
 cursor: pointer;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('pending', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', {
  color: 'var(--n-option-text-color-hover)',
  backgroundColor: 'var(--n-option-color-hover)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('prefix, suffix', {
  color: 'var(--n-option-text-color-hover)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('active', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', {
  color: 'var(--n-option-text-color-active)',
  backgroundColor: 'var(--n-option-color-active)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('prefix, suffix', {
  color: 'var(--n-option-text-color-active)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', {
  cursor: 'not-allowed',
  opacity: 'var(--n-option-opacity-disabled)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('child-active', {
  color: 'var(--n-option-text-color-child-active)'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('prefix, suffix', {
  color: 'var(--n-option-text-color-child-active)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('group', {
  fontSize: 'calc(var(--n-font-size) - 1px)',
  color: 'var(--n-group-header-text-color)'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('prefix', {
  width: 'calc(var(--n-option-prefix-width) / 2)'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('show-icon', {
  width: 'calc(var(--n-option-icon-prefix-width) / 2)'
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('prefix', `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('show-icon', {
  width: 'var(--n-option-icon-prefix-width)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('icon', {
  fontSize: 'var(--n-option-icon-size)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('label', {
  whiteSpace: 'nowrap',
  flex: 1
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('suffix', `
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('has-submenu', {
  width: 'var(--n-option-icon-suffix-width)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('icon', {
  fontSize: 'var(--n-option-icon-size)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('dropdown-menu', {
  pointerEvents: 'all'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('dropdown-offset-container', `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('dropdown-divider', `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('dropdown-menu-wrapper', `
 transform-origin: inherit;
 width: fit-content;
 `)]));

/***/ }),

/***/ "./node_modules/naive-ui/es/dropdown/src/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/naive-ui/es/dropdown/src/utils.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSubmenuNode": () => (/* binding */ isSubmenuNode),
/* harmony export */   "isGroupNode": () => (/* binding */ isGroupNode),
/* harmony export */   "isDividerNode": () => (/* binding */ isDividerNode),
/* harmony export */   "isRenderNode": () => (/* binding */ isRenderNode)
/* harmony export */ });
function isSubmenuNode(rawNode, childrenField) {
    return (rawNode.type === 'submenu' ||
        (rawNode.type === undefined && rawNode[childrenField] !== undefined));
}
function isGroupNode(rawNode) {
    return rawNode.type === 'group';
}
function isDividerNode(rawNode) {
    return rawNode.type === 'divider';
}
function isRenderNode(rawNode) {
    return rawNode.type === 'render';
}


/***/ }),

/***/ "./node_modules/naive-ui/es/icon/src/Icon.js":
/*!***************************************************!*\
  !*** ./node_modules/naive-ui/es/icon/src/Icon.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NIcon": () => (/* binding */ NIcon)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-theme.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/css/format-length.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/naive/warn.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ "./node_modules/naive-ui/es/icon/styles/light.js");
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/index.cssr */ "./node_modules/naive-ui/es/icon/src/styles/index.cssr.js");





const NIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    _n_icon__: true,
    name: 'Icon',
    inheritAttrs: false,
    props: Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), { depth: [String, Number], size: [Number, String], color: String, component: Object }),
    setup(props) {
        const { mergedClsPrefixRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])(props);
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('Icon', '-icon', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_3__["default"], _styles__WEBPACK_IMPORTED_MODULE_4__["default"], props, mergedClsPrefixRef);
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            mergedStyle: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                const { size, color } = props;
                return {
                    fontSize: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.formatLength)(size),
                    color
                };
            }),
            cssVars: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                const { depth } = props;
                const { common: { cubicBezierEaseInOut }, self } = themeRef.value;
                if (depth !== undefined) {
                    const { color, [`opacity${depth}Depth`]: opacity } = self;
                    return {
                        '--n-bezier': cubicBezierEaseInOut,
                        '--n-color': color,
                        '--n-opacity': opacity
                    };
                }
                return {
                    '--n-bezier': cubicBezierEaseInOut
                };
            })
        };
    },
    render() {
        var _a;
        const { $parent, depth, mergedClsPrefix, component } = this;
        if ((_a = $parent === null || $parent === void 0 ? void 0 : $parent.$options) === null || _a === void 0 ? void 0 : _a._n_icon__) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_6__.warn)('icon', "don't wrap `n-icon` inside `n-icon`");
        }
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('i', (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(this.$attrs, {
            role: 'img',
            class: [
                `${mergedClsPrefix}-icon`,
                {
                    [`${mergedClsPrefix}-icon--depth`]: depth,
                    [`${mergedClsPrefix}-icon--color-transition`]: depth !== undefined
                }
            ],
            style: Object.assign(this.cssVars, this.mergedStyle)
        }), component ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(component) : this.$slots);
    }
});


/***/ }),

/***/ "./node_modules/naive-ui/es/icon/src/styles/index.cssr.js":
/*!****************************************************************!*\
  !*** ./node_modules/naive-ui/es/icon/src/styles/index.cssr.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_utils/cssr */ "./node_modules/naive-ui/es/_utils/cssr/index.js");
 // vars:
// --n-bezier
// --n-color
// --n-opacity

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('icon', `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('color-transition', {
  transition: 'color .3s var(--n-bezier)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('depth', {
  color: 'var(--n-color)'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('svg', {
  opacity: 'var(--n-opacity)',
  transition: 'opacity .3s var(--n-bezier)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('svg', {
  height: '1em',
  width: '1em'
})]));

/***/ }),

/***/ "./node_modules/naive-ui/es/layout/src/interface.js":
/*!**********************************************************!*\
  !*** ./node_modules/naive-ui/es/layout/src/interface.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "layoutSiderInjectionKey": () => (/* binding */ layoutSiderInjectionKey),
/* harmony export */   "positionProp": () => (/* binding */ positionProp)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/create-injection-key.js");

const layoutSiderInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-layout-sider');
const positionProp = {
    type: String,
    default: 'static'
};


/***/ }),

/***/ "./node_modules/naive-ui/es/menu/src/Menu.js":
/*!***************************************************!*\
  !*** ./node_modules/naive-ui/es/menu/src/Menu.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var treemate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! treemate */ "./node_modules/treemate/es/create.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/use-merged-state.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/use-compitable.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-theme.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-config.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-css-vars-class.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/call.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./node_modules/naive-ui/es/menu/src/utils.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles */ "./node_modules/naive-ui/es/menu/styles/light.js");
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/index.cssr */ "./node_modules/naive-ui/es/menu/src/styles/index.cssr.js");
/* harmony import */ var _layout_src_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/src/interface */ "./node_modules/naive-ui/es/layout/src/interface.js");
/* harmony import */ var _useCheckDeprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useCheckDeprecated */ "./node_modules/naive-ui/es/menu/src/useCheckDeprecated.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./context */ "./node_modules/naive-ui/es/menu/src/context.js");











const menuProps = Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), { options: {
        type: Array,
        default: () => []
    }, collapsed: {
        type: Boolean,
        default: undefined
    }, collapsedWidth: {
        type: Number,
        default: 48
    }, iconSize: {
        type: Number,
        default: 20
    }, collapsedIconSize: {
        type: Number,
        default: 24
    }, rootIndent: Number, indent: {
        type: Number,
        default: 32
    }, labelField: {
        type: String,
        default: 'label'
    }, keyField: {
        type: String,
        default: 'key'
    }, childrenField: {
        type: String,
        default: 'children'
    }, defaultExpandAll: Boolean, defaultExpandedKeys: Array, expandedKeys: Array, value: [String, Number], defaultValue: {
        type: [String, Number],
        default: null
    }, mode: {
        type: String,
        default: 'vertical'
    }, watchProps: {
        type: Array,
        default: undefined
    }, disabled: Boolean, inverted: Boolean, 'onUpdate:expandedKeys': [Function, Array], onUpdateExpandedKeys: [Function, Array], onUpdateValue: [Function, Array], 'onUpdate:value': [Function, Array], expandIcon: Function, renderIcon: Function, renderLabel: Function, renderExtra: Function, 
    /** TODO: deprecate it */
    dropdownPlacement: {
        type: String,
        default: 'bottom'
    }, dropdownProps: Object, accordion: Boolean, 
    // deprecated
    items: Array, onOpenNamesChange: [Function, Array], onSelect: [Function, Array], onExpandedNamesChange: [Function, Array], expandedNames: Array, defaultExpandedNames: Array });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Menu',
    props: menuProps,
    setup(props) {
        if (true) {
            (0,_useCheckDeprecated__WEBPACK_IMPORTED_MODULE_2__.useCheckDeprecated)(props);
        }
        const { mergedClsPrefixRef, inlineThemeDisabled } = (0,_mixins__WEBPACK_IMPORTED_MODULE_3__["default"])(props);
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('Menu', '-menu', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_4__["default"], _styles__WEBPACK_IMPORTED_MODULE_5__["default"], props, mergedClsPrefixRef);
        const layoutSider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_layout_src_interface__WEBPACK_IMPORTED_MODULE_6__.layoutSiderInjectionKey, null);
        const mergedCollapsedRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            var _a;
            const { collapsed } = props;
            if (collapsed !== undefined)
                return collapsed;
            if (layoutSider) {
                const { collapseModeRef, collapsedRef } = layoutSider;
                if (collapseModeRef.value === 'width') {
                    return (_a = collapsedRef.value) !== null && _a !== void 0 ? _a : false;
                }
            }
            return false;
        });
        const treeMateRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { keyField, childrenField } = props;
            return (0,treemate__WEBPACK_IMPORTED_MODULE_7__.createTreeMate)(props.items || props.options, {
                getChildren(node) {
                    return node[childrenField];
                },
                getKey(node) {
                    var _a;
                    return (_a = node[keyField]) !== null && _a !== void 0 ? _a : node.name;
                }
            });
        });
        const treeKeysLevelOneRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => new Set(treeMateRef.value.treeNodes.map((e) => e.key)));
        const { watchProps } = props;
        const uncontrolledValueRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes('defaultValue')) {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
                uncontrolledValueRef.value = props.defaultValue;
            });
        }
        else {
            uncontrolledValueRef.value = props.defaultValue;
        }
        const controlledValueRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'value');
        const mergedValueRef = (0,vooks__WEBPACK_IMPORTED_MODULE_8__["default"])(controlledValueRef, uncontrolledValueRef);
        const uncontrolledExpandedKeysRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const initUncontrolledExpandedKeys = () => {
            uncontrolledExpandedKeysRef.value = props.defaultExpandAll
                ? treeMateRef.value.getNonLeafKeys()
                : props.defaultExpandedNames ||
                    props.defaultExpandedKeys ||
                    treeMateRef.value.getPath(mergedValueRef.value, {
                        includeSelf: false
                    }).keyPath;
        };
        if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes('defaultExpandedKeys')) {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(initUncontrolledExpandedKeys);
        }
        else {
            initUncontrolledExpandedKeys();
        }
        const controlledExpandedKeysRef = (0,vooks__WEBPACK_IMPORTED_MODULE_9__["default"])(props, [
            'expandedNames',
            'expandedKeys'
        ]);
        const mergedExpandedKeysRef = (0,vooks__WEBPACK_IMPORTED_MODULE_8__["default"])(controlledExpandedKeysRef, uncontrolledExpandedKeysRef);
        const tmNodesRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => treeMateRef.value.treeNodes);
        const activePathRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return treeMateRef.value.getPath(mergedValueRef.value).keyPath;
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_context__WEBPACK_IMPORTED_MODULE_10__.menuInjectionKey, {
            props,
            mergedCollapsedRef,
            mergedThemeRef: themeRef,
            mergedValueRef,
            mergedExpandedKeysRef,
            activePathRef,
            mergedClsPrefixRef,
            isHorizontalRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.mode === 'horizontal'),
            invertedRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'inverted'),
            doSelect,
            toggleExpand
        });
        function doSelect(value, item) {
            const { 'onUpdate:value': _onUpdateValue, onUpdateValue, onSelect } = props;
            if (onUpdateValue) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onUpdateValue, value, item);
            }
            if (_onUpdateValue) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(_onUpdateValue, value, item);
            }
            if (onSelect) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onSelect, value, item);
            }
            uncontrolledValueRef.value = value;
        }
        function doUpdateExpandedKeys(value) {
            const { 'onUpdate:expandedKeys': _onUpdateExpandedKeys, onUpdateExpandedKeys, onExpandedNamesChange, onOpenNamesChange } = props;
            if (_onUpdateExpandedKeys) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(_onUpdateExpandedKeys, value);
            }
            if (onUpdateExpandedKeys) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onUpdateExpandedKeys, value);
            }
            // deprecated
            if (onExpandedNamesChange) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onExpandedNamesChange, value);
            }
            if (onOpenNamesChange) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onOpenNamesChange, value);
            }
            uncontrolledExpandedKeysRef.value = value;
        }
        function toggleExpand(key) {
            const currentExpandedKeys = Array.from(mergedExpandedKeysRef.value);
            const index = currentExpandedKeys.findIndex((expanededKey) => expanededKey === key);
            if (~index) {
                currentExpandedKeys.splice(index, 1);
            }
            else {
                if (props.accordion) {
                    if (treeKeysLevelOneRef.value.has(key)) {
                        const closeKeyIndex = currentExpandedKeys.findIndex((e) => treeKeysLevelOneRef.value.has(e));
                        if (closeKeyIndex > -1) {
                            currentExpandedKeys.splice(closeKeyIndex, 1);
                        }
                    }
                }
                currentExpandedKeys.push(key);
            }
            doUpdateExpandedKeys(currentExpandedKeys);
        }
        const cssVarsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { inverted } = props;
            const { common: { cubicBezierEaseInOut }, self } = themeRef.value;
            const { borderRadius, borderColorHorizontal, fontSize, itemHeight, dividerColor } = self;
            const vars = {
                '--n-divider-color': dividerColor,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-font-size': fontSize,
                '--n-border-color-horizontal': borderColorHorizontal,
                '--n-border-radius': borderRadius,
                '--n-item-height': itemHeight
            };
            if (inverted) {
                vars['--n-group-text-color'] = self.groupTextColorInverted;
                vars['--n-color'] = self.colorInverted;
                vars['--n-item-text-color'] = self.itemTextColorInverted;
                vars['--n-arrow-color'] = self.arrowColorInverted;
                vars['--n-arrow-color-hover'] = self.arrowColorHoverInverted;
                vars['--n-arrow-color-active'] = self.arrowColorActiveInverted;
                vars['--n-arrow-color-child-active'] =
                    self.arrowColorChildActiveInverted;
                vars['--n-item-icon-color'] = self.itemIconColorInverted;
                vars['--n-item-text-color-hover'] = self.itemTextColorHoverInverted;
                vars['--n-item-icon-color-hover'] = self.itemIconColorHoverInverted;
                vars['--n-item-text-color-active'] = self.itemTextColorActiveInverted;
                vars['--n-item-icon-color-active'] = self.itemIconColorActiveInverted;
                vars['--n-item-icon-color-collapsed'] =
                    self.itemIconColorCollapsedInverted;
                vars['--n-item-color-active'] = self.itemColorActiveInverted;
                vars['--n-item-color-active-collapsed'] =
                    self.itemColorActiveCollapsedInverted;
                vars['--n-item-text-color-child-active'] =
                    self.itemTextColorChildActiveInverted;
                vars['--n-item-icon-color-child-active'] =
                    self.itemIconColorChildActiveInverted;
            }
            else {
                vars['--n-group-text-color'] = self.groupTextColor;
                vars['--n-color'] = self.color;
                vars['--n-item-text-color'] = self.itemTextColor;
                vars['--n-arrow-color'] = self.arrowColor;
                vars['--n-arrow-color-hover'] = self.arrowColorHover;
                vars['--n-arrow-color-active'] = self.arrowColorActive;
                vars['--n-arrow-color-child-active'] = self.arrowColorChildActive;
                vars['--n-item-icon-color'] = self.itemIconColor;
                vars['--n-item-text-color-hover'] = self.itemTextColorHover;
                vars['--n-item-icon-color-hover'] = self.itemIconColorHover;
                vars['--n-item-text-color-active'] = self.itemTextColorActive;
                vars['--n-item-icon-color-active'] = self.itemIconColorActive;
                vars['--n-item-icon-color-collapsed'] = self.itemIconColorCollapsed;
                vars['--n-item-color-active'] = self.itemColorActive;
                vars['--n-item-color-active-collapsed'] = self.itemColorActiveCollapsed;
                vars['--n-item-text-color-child-active'] = self.itemTextColorChildActive;
                vars['--n-item-icon-color-child-active'] = self.itemIconColorChildActive;
            }
            return vars;
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0,_mixins__WEBPACK_IMPORTED_MODULE_12__.useThemeClass)('menu', (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (props.inverted ? 'a' : 'b')), cssVarsRef, props)
            : undefined;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            controlledExpandedKeys: controlledExpandedKeysRef,
            uncontrolledExpanededKeys: uncontrolledExpandedKeysRef,
            mergedExpandedKeys: mergedExpandedKeysRef,
            uncontrolledValue: uncontrolledValueRef,
            mergedValue: mergedValueRef,
            activePath: activePathRef,
            tmNodes: tmNodesRef,
            mergedTheme: themeRef,
            mergedCollapsed: mergedCollapsedRef,
            cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
            themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
        };
    },
    render() {
        const { mergedClsPrefix, mode, themeClass, onRender } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { role: mode === 'horizontal' ? 'menubar' : 'menu', class: [
                `${mergedClsPrefix}-menu`,
                themeClass,
                `${mergedClsPrefix}-menu--${mode}`,
                this.mergedCollapsed && `${mergedClsPrefix}-menu--collapsed`
            ], style: this.cssVars }, this.tmNodes.map((tmNode) => (0,_utils__WEBPACK_IMPORTED_MODULE_13__.itemRenderer)(tmNode, this.$props))));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/menu/src/MenuDivider.js":
/*!**********************************************************!*\
  !*** ./node_modules/naive-ui/es/menu/src/MenuDivider.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./node_modules/naive-ui/es/menu/src/context.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'MenuDivider',
    setup() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const NMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_1__.menuInjectionKey);
        const { mergedClsPrefixRef, isHorizontalRef } = NMenu;
        return () => isHorizontalRef.value ? null : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefixRef.value}-menu-divider` }));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/menu/src/MenuOption.js":
/*!*********************************************************!*\
  !*** ./node_modules/naive-ui/es/menu/src/MenuOption.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItemProps": () => (/* binding */ menuItemProps),
/* harmony export */   "NMenuOption": () => (/* binding */ NMenuOption)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/use-memo.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/render.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tooltip */ "./node_modules/naive-ui/es/tooltip/src/Tooltip.js");
/* harmony import */ var _MenuOptionContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuOptionContent */ "./node_modules/naive-ui/es/menu/src/MenuOptionContent.js");
/* harmony import */ var _use_menu_child__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-menu-child */ "./node_modules/naive-ui/es/menu/src/use-menu-child.js");
/* harmony import */ var _use_menu_child_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-menu-child-props */ "./node_modules/naive-ui/es/menu/src/use-menu-child-props.js");







const menuItemProps = Object.assign(Object.assign({}, _use_menu_child_props__WEBPACK_IMPORTED_MODULE_1__.useMenuChildProps), { tmNode: {
        type: Object,
        required: true
    }, disabled: Boolean, icon: Function, onClick: Function });
const NMenuOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'MenuOption',
    props: menuItemProps,
    setup(props) {
        const MenuChild = (0,_use_menu_child__WEBPACK_IMPORTED_MODULE_2__.useMenuChild)(props);
        const { NSubmenu, NMenu } = MenuChild;
        const { props: menuProps, mergedClsPrefixRef, mergedCollapsedRef } = NMenu;
        const submenuDisabledRef = NSubmenu
            ? NSubmenu.mergedDisabledRef
            : { value: false };
        const mergedDisabledRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return submenuDisabledRef.value || props.disabled;
        });
        function doClick(e) {
            const { onClick } = props;
            if (onClick)
                onClick(e);
        }
        function handleClick(e) {
            if (!mergedDisabledRef.value) {
                NMenu.doSelect(props.internalKey, props.tmNode.rawNode);
                doClick(e);
            }
        }
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            dropdownPlacement: MenuChild.dropdownPlacement,
            paddingLeft: MenuChild.paddingLeft,
            iconMarginRight: MenuChild.iconMarginRight,
            maxIconSize: MenuChild.maxIconSize,
            activeIconSize: MenuChild.activeIconSize,
            mergedTheme: NMenu.mergedThemeRef,
            menuProps,
            dropdownEnabled: (0,vooks__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
                return (props.root &&
                    mergedCollapsedRef.value &&
                    menuProps.mode !== 'horizontal' &&
                    !mergedDisabledRef.value);
            }),
            // Vue has bug when using vooks.useMemo
            // menu item state won't be updated...
            // a minimal reproduction is needed
            selected: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                if (NMenu.mergedValueRef.value === props.internalKey)
                    return true;
                return false;
            }),
            mergedDisabled: mergedDisabledRef,
            handleClick
        };
    },
    render() {
        const { mergedClsPrefix, mergedTheme, tmNode, menuProps: { renderLabel } } = this;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { role: "menuitem", class: [
                `${mergedClsPrefix}-menu-item`,
                this.selected && `${mergedClsPrefix}-menu-item--selected`,
                this.mergedDisabled && `${mergedClsPrefix}-menu-item--disabled`
            ] },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], { theme: mergedTheme.peers.Tooltip, themeOverrides: mergedTheme.peerOverrides.Tooltip, trigger: "hover", placement: this.dropdownPlacement, disabled: !this.dropdownEnabled || this.title === undefined, internalExtraClass: ['menu-tooltip'] }, {
                default: () => renderLabel ? renderLabel(tmNode.rawNode) : (0,_utils__WEBPACK_IMPORTED_MODULE_5__.render)(this.title),
                trigger: () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_MenuOptionContent__WEBPACK_IMPORTED_MODULE_6__["default"], { tmNode: tmNode, clsPrefix: mergedClsPrefix, paddingLeft: this.paddingLeft, iconMarginRight: this.iconMarginRight, maxIconSize: this.maxIconSize, activeIconSize: this.activeIconSize, title: this.title, extra: this.extra, disabled: this.mergedDisabled, icon: this.icon, onClick: this.handleClick }))
            })));
    }
});


/***/ }),

/***/ "./node_modules/naive-ui/es/menu/src/MenuOptionContent.js":
/*!****************************************************************!*\
  !*** ./node_modules/naive-ui/es/menu/src/MenuOptionContent.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _internal_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_internal/icons */ "./node_modules/naive-ui/es/_internal/icons/ChevronDownFilled.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/render.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_internal */ "./node_modules/naive-ui/es/_internal/icon/src/Icon.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./node_modules/naive-ui/es/menu/src/context.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'MenuOptionContent',
    props: {
        collapsed: Boolean,
        disabled: Boolean,
        title: [String, Function],
        icon: Function,
        extra: [String, Function],
        showArrow: Boolean,
        childActive: Boolean,
        hover: Boolean,
        paddingLeft: Number,
        maxIconSize: {
            type: Number,
            required: true
        },
        activeIconSize: {
            type: Number,
            required: true
        },
        iconMarginRight: {
            type: Number,
            required: true
        },
        clsPrefix: {
            type: String,
            required: true
        },
        onClick: Function,
        tmNode: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const { props: menuProps } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_1__.menuInjectionKey);
        return {
            menuProps,
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                const { paddingLeft } = props;
                return { paddingLeft: paddingLeft && `${paddingLeft}px` };
            }),
            iconStyle: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                const { maxIconSize, activeIconSize, iconMarginRight } = props;
                return {
                    width: `${maxIconSize}px`,
                    height: `${maxIconSize}px`,
                    fontSize: `${activeIconSize}px`,
                    marginRight: `${iconMarginRight}px`
                };
            })
        };
    },
    render() {
        const { clsPrefix, tmNode, menuProps: { renderIcon, renderLabel, renderExtra, expandIcon } } = this;
        const icon = renderIcon ? renderIcon(tmNode.rawNode) : (0,_utils__WEBPACK_IMPORTED_MODULE_2__.render)(this.icon);
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { onClick: this.onClick, role: "none", class: [
                `${clsPrefix}-menu-item-content`,
                {
                    [`${clsPrefix}-menu-item-content--collapsed`]: this.collapsed,
                    [`${clsPrefix}-menu-item-content--child-active`]: this.childActive,
                    [`${clsPrefix}-menu-item-content--disabled`]: this.disabled,
                    [`${clsPrefix}-menu-item-content--hover`]: this.hover
                }
            ], style: this.style },
            icon && ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-menu-item-content__icon`, style: this.iconStyle, role: "none" }, [icon])),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-menu-item-content-header`, role: "none" },
                renderLabel ? renderLabel(tmNode.rawNode) : (0,_utils__WEBPACK_IMPORTED_MODULE_2__.render)(this.title),
                this.extra || renderExtra ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: `${clsPrefix}-menu-item-content-header__extra` },
                    ' ',
                    renderExtra ? renderExtra(tmNode.rawNode) : (0,_utils__WEBPACK_IMPORTED_MODULE_2__.render)(this.extra))) : null),
            this.showArrow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_3__["default"], { ariaHidden: true, class: `${clsPrefix}-menu-item-content__arrow`, clsPrefix: clsPrefix }, {
                default: () => expandIcon ? (expandIcon(tmNode.rawNode)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal_icons__WEBPACK_IMPORTED_MODULE_4__["default"], null))
            })) : null));
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/menu/src/MenuOptionGroup.js":
/*!**************************************************************!*\
  !*** ./node_modules/naive-ui/es/menu/src/MenuOptionGroup.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItemGroupProps": () => (/* binding */ menuItemGroupProps),
/* harmony export */   "NMenuOptionGroup": () => (/* binding */ NMenuOptionGroup)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/render.js");
/* harmony import */ var _use_menu_child__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-menu-child */ "./node_modules/naive-ui/es/menu/src/use-menu-child.js");
/* harmony import */ var _use_menu_child_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-menu-child-props */ "./node_modules/naive-ui/es/menu/src/use-menu-child-props.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/naive-ui/es/menu/src/utils.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/naive-ui/es/menu/src/context.js");




// eslint-disable-next-line import/no-cycle


const menuItemGroupProps = Object.assign(Object.assign({}, _use_menu_child_props__WEBPACK_IMPORTED_MODULE_1__.useMenuChildProps), { tmNodes: {
        type: Array,
        required: true
    } });
const NMenuOptionGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'MenuOptionGroup',
    props: menuItemGroupProps,
    setup(props) {
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_context__WEBPACK_IMPORTED_MODULE_2__.submenuInjectionKey, null);
        const MenuChild = (0,_use_menu_child__WEBPACK_IMPORTED_MODULE_3__.useMenuChild)(props);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_context__WEBPACK_IMPORTED_MODULE_2__.menuItemGroupInjectionKey, {
            paddingLeftRef: MenuChild.paddingLeft
        });
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const { mergedClsPrefixRef, props: menuProps } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_2__.menuInjectionKey);
        return function () {
            const { value: mergedClsPrefix } = mergedClsPrefixRef;
            const paddingLeft = MenuChild.paddingLeft.value;
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-menu-item-group`, role: "group" },
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: `${mergedClsPrefix}-menu-item-group-title`, style: paddingLeft !== undefined
                        ? `padding-left: ${paddingLeft}px;`
                        : undefined },
                    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.render)(props.title),
                    props.extra ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                        " ",
                        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.render)(props.extra)) : null),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, props.tmNodes.map((tmNode) => (0,_utils__WEBPACK_IMPORTED_MODULE_5__.itemRenderer)(tmNode, menuProps)))));
        };
    }
});


/***/ }),

/***/ "./node_modules/naive-ui/es/menu/src/Submenu.js":
/*!******************************************************!*\
  !*** ./node_modules/naive-ui/es/menu/src/Submenu.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submenuProps": () => (/* binding */ submenuProps),
/* harmony export */   "NSubmenu": () => (/* binding */ NSubmenu)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vooks */ "./node_modules/vooks/es/use-memo.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_internal */ "./node_modules/naive-ui/es/_internal/fade-in-expand-transition/src/FadeInExpandTransition.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dropdown */ "./node_modules/naive-ui/es/dropdown/src/Dropdown.js");
/* harmony import */ var _MenuOptionContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MenuOptionContent */ "./node_modules/naive-ui/es/menu/src/MenuOptionContent.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/naive-ui/es/menu/src/utils.js");
/* harmony import */ var _use_menu_child__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-menu-child */ "./node_modules/naive-ui/es/menu/src/use-menu-child.js");
/* harmony import */ var _use_menu_child_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-menu-child-props */ "./node_modules/naive-ui/es/menu/src/use-menu-child-props.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/naive-ui/es/menu/src/context.js");





// eslint-disable-next-line import/no-cycle




const submenuProps = Object.assign(Object.assign({}, _use_menu_child_props__WEBPACK_IMPORTED_MODULE_1__.useMenuChildProps), { rawNodes: {
        type: Array,
        default: () => []
    }, tmNodes: {
        type: Array,
        default: () => []
    }, tmNode: {
        type: Object,
        required: true
    }, disabled: {
        type: Boolean,
        default: false
    }, icon: Function, onClick: Function });
const NSubmenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Submenu',
    props: submenuProps,
    setup(props) {
        const MenuChild = (0,_use_menu_child__WEBPACK_IMPORTED_MODULE_2__.useMenuChild)(props);
        const { NMenu, NSubmenu } = MenuChild;
        const { props: menuProps, mergedCollapsedRef } = NMenu;
        const mergedDisabledRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { disabled } = props;
            if (NSubmenu === null || NSubmenu === void 0 ? void 0 : NSubmenu.mergedDisabledRef.value)
                return true;
            if (menuProps.disabled)
                return true;
            return disabled;
        });
        const dropdownShowRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_context__WEBPACK_IMPORTED_MODULE_3__.submenuInjectionKey, {
            paddingLeftRef: MenuChild.paddingLeft,
            mergedDisabledRef
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_context__WEBPACK_IMPORTED_MODULE_3__.menuItemGroupInjectionKey, null);
        function doClick() {
            const { onClick } = props;
            if (onClick)
                onClick();
        }
        function handleClick() {
            if (!mergedDisabledRef.value) {
                if (!mergedCollapsedRef.value) {
                    NMenu.toggleExpand(props.internalKey);
                }
                doClick();
            }
        }
        function handlePopoverShowChange(value) {
            dropdownShowRef.value = value;
        }
        return {
            menuProps,
            doSelect: NMenu.doSelect,
            inverted: NMenu.invertedRef,
            isHorizontal: NMenu.isHorizontalRef,
            mergedClsPrefix: NMenu.mergedClsPrefixRef,
            maxIconSize: MenuChild.maxIconSize,
            activeIconSize: MenuChild.activeIconSize,
            iconMarginRight: MenuChild.iconMarginRight,
            dropdownPlacement: MenuChild.dropdownPlacement,
            dropdownShow: dropdownShowRef,
            paddingLeft: MenuChild.paddingLeft,
            mergedDisabled: mergedDisabledRef,
            mergedValue: NMenu.mergedValueRef,
            childActive: (0,vooks__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
                return NMenu.activePathRef.value.includes(props.internalKey);
            }),
            collapsed: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                if (menuProps.mode === 'horizontal')
                    return false;
                if (mergedCollapsedRef.value) {
                    return true;
                }
                return !NMenu.mergedExpandedKeysRef.value.includes(props.internalKey);
            }),
            dropdownEnabled: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                return (!mergedDisabledRef.value &&
                    (menuProps.mode === 'horizontal' || mergedCollapsedRef.value));
            }),
            handlePopoverShowChange,
            handleClick
        };
    },
    render() {
        var _a;
        const { mergedClsPrefix, menuProps: { renderIcon, renderLabel } } = this;
        const createSubmenuItem = () => {
            const { isHorizontal, paddingLeft, collapsed, mergedDisabled, maxIconSize, activeIconSize, title, childActive, icon, handleClick, dropdownShow, iconMarginRight, tmNode } = this;
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_MenuOptionContent__WEBPACK_IMPORTED_MODULE_5__["default"], { tmNode: tmNode, paddingLeft: paddingLeft, collapsed: collapsed, disabled: mergedDisabled, iconMarginRight: iconMarginRight, maxIconSize: maxIconSize, activeIconSize: activeIconSize, title: title, showArrow: !isHorizontal, childActive: childActive, clsPrefix: mergedClsPrefix, icon: icon, hover: dropdownShow, onClick: handleClick }));
        };
        const createSubmenuChildren = () => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_6__["default"], null, {
                default: () => {
                    const { tmNodes, collapsed } = this;
                    return !collapsed ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-submenu-children`, role: "menu" }, tmNodes.map((item) => (0,_utils__WEBPACK_IMPORTED_MODULE_7__.itemRenderer)(item, this.menuProps)))) : null;
                }
            }));
        };
        return this.root ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_dropdown__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, (_a = this.menuProps) === null || _a === void 0 ? void 0 : _a.dropdownProps, { builtinThemeOverrides: {
                fontSizeLarge: '14px',
                optionIconSizeLarge: '18px'
            }, value: this.mergedValue, size: "large", trigger: "hover", disabled: !this.dropdownEnabled, placement: this.dropdownPlacement, keyField: this.menuProps.keyField, labelField: this.menuProps.labelField, childrenField: this.menuProps.childrenField, onUpdateShow: this.handlePopoverShowChange, options: this.rawNodes, onSelect: this.doSelect, inverted: this.inverted, renderIcon: renderIcon, renderLabel: renderLabel }), {
            default: () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-submenu`, role: "menuitem", "aria-expanded": !this.collapsed },
                createSubmenuItem(),
                this.isHorizontal ? null : createSubmenuChildren()))
        })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-submenu`, role: "menuitem", "aria-expanded": !this.collapsed },
            createSubmenuItem(),
            createSubmenuChildren()));
    }
});


/***/ }),

/***/ "./node_modules/naive-ui/es/menu/src/context.js":
/*!******************************************************!*\
  !*** ./node_modules/naive-ui/es/menu/src/context.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuInjectionKey": () => (/* binding */ menuInjectionKey),
/* harmony export */   "submenuInjectionKey": () => (/* binding */ submenuInjectionKey),
/* harmony export */   "menuItemGroupInjectionKey": () => (/* binding */ menuItemGroupInjectionKey)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/create-injection-key.js");

const menuInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-menu');
const submenuInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-submenu');
const menuItemGroupInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-menu-item-group');


/***/ }),

/***/ "./node_modules/naive-ui/es/menu/src/styles/index.cssr.js":
/*!****************************************************************!*\
  !*** ./node_modules/naive-ui/es/menu/src/styles/index.cssr.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_utils/cssr */ "./node_modules/naive-ui/es/_utils/cssr/index.js");
/* harmony import */ var _styles_transitions_fade_in_height_expand_cssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_styles/transitions/fade-in-height-expand.cssr */ "./node_modules/naive-ui/es/_styles/transitions/fade-in-height-expand.cssr.js");

 // vars:
// --n-color
// --n-group-text-color
// --n-bezier
// --n-font-size
// --n-border-color-horizontal
// --n-border-radius
// --n-item-color-active
// --n-item-color-active-collapsed
// --n-arrow-color
// --n-arrow-color-hover
// --n-arrow-color-active
// --n-arrow-color-child-active
// --n-item-text-color
// --n-item-text-color-hover
// --n-item-text-color-active
// --n-item-text-color-child-active
// --n-item-icon-color
// --n-item-icon-color-hover
// --n-item-icon-color-active
// --n-item-icon-color-collapsed
// --n-item-icon-color-child-active
// --n-item-height

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)([(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu', `
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('horizontal', {
  display: 'inline-flex',
  paddingBottom: 0
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('submenu', {
  margin: 0
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item', {
  margin: 0
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&::before', {
  backgroundColor: '#0000 !important'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('selected', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item-content', {
  borderBottom: '2px solid var(--n-border-color-horizontal)'
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item-content', {
  padding: '0 20px',
  borderBottom: '2px solid #0000'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('child-active', {
  borderBottom: '2px solid var(--n-border-color-horizontal)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', [hoverStyle({
  borderBottom: '2px solid var(--n-border-color-horizontal)'
}, null)])])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('collapsed', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('selected', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&::before', {
  backgroundColor: 'var(--n-item-color-active-collapsed) !important'
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item-content', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item-content-header', {
  opacity: 0
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('arrow', {
  opacity: 0
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('icon', {
  color: 'var(--n-item-icon-color-collapsed)'
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item', `
 transition: background-color .3s var(--n-bezier);
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&::before', `
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:active::before', {
  backgroundColor: 'var(--n-item-color-active)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('selected', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&::before', {
  backgroundColor: 'var(--n-item-color-active)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item-content', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('arrow', {
  color: 'var(--n-arrow-color-active)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('icon', {
  color: 'var(--n-item-icon-color-active)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item-content-header', {
  color: 'var(--n-item-text-color-active)'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('extra', {
  color: 'var(--n-item-text-color-active)'
})])])])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item-content', `
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 z-index: auto;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', {
  opacity: '.45',
  cursor: 'not-allowed'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('collapsed', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('arrow', {
  transform: 'rotate(0)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('child-active', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item-content-header', {
  color: 'var(--n-item-text-color-child-active)'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('extra', {
  color: 'var(--n-item-text-color-child-active)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('arrow', {
  color: 'var(--n-arrow-color-child-active)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('icon', {
  color: 'var(--n-item-icon-color-child-active)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', [hoverStyle(null, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('arrow', {
  color: 'var(--n-arrow-color-hover)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('icon', {
  color: 'var(--n-item-icon-color-hover)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item-content-header', {
  color: 'var(--n-item-text-color-hover)'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('extra', {
  color: 'var(--n-item-text-color-hover)'
})])])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('icon', `
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('arrow', `
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item-content-header', `
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('a', `
 text-decoration: none;
 color: inherit;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&::before', `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('extra', `
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('submenu', {
  cursor: 'pointer',
  position: 'relative',
  marginTop: '6px'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item-content', `
 height: var(--n-item-height);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('submenu-children', {
  overflow: 'hidden',
  padding: 0
}, [(0,_styles_transitions_fade_in_height_expand_cssr__WEBPACK_IMPORTED_MODULE_1__["default"])({
  duration: '.2s'
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item-group', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-item-group-title', `
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-tooltip', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('a', `
 color: inherit;
 text-decoration: none;
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('menu-divider', `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]));

function hoverStyle(props, children) {
  return [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('hover', props, children), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', props, children)];
}

/***/ }),

/***/ "./node_modules/naive-ui/es/menu/src/use-menu-child-props.js":
/*!*******************************************************************!*\
  !*** ./node_modules/naive-ui/es/menu/src/use-menu-child-props.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMenuChildProps": () => (/* binding */ useMenuChildProps)
/* harmony export */ });
const useMenuChildProps = {
    internalKey: {
        type: [String, Number],
        required: true
    },
    root: Boolean,
    isGroup: Boolean,
    level: {
        type: Number,
        required: true
    },
    title: [String, Function],
    extra: [String, Function]
};


/***/ }),

/***/ "./node_modules/naive-ui/es/menu/src/use-menu-child.js":
/*!*************************************************************!*\
  !*** ./node_modules/naive-ui/es/menu/src/use-menu-child.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMenuChild": () => (/* binding */ useMenuChild)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./node_modules/naive-ui/es/menu/src/context.js");


const ICON_MARGIN_RIGHT = 8;
function useMenuChild(props) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const NMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_1__.menuInjectionKey);
    const { props: menuProps, mergedCollapsedRef } = NMenu;
    const NSubmenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_1__.submenuInjectionKey, null);
    const NMenuOptionGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_1__.menuItemGroupInjectionKey, null);
    const horizontalRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return menuProps.mode === 'horizontal';
    });
    const dropdownPlacementRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (horizontalRef.value) {
            return menuProps.dropdownPlacement;
        }
        if ('tmNodes' in props)
            return 'right-start';
        return 'right';
    });
    const maxIconSizeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return Math.max((_a = menuProps.collapsedIconSize) !== null && _a !== void 0 ? _a : menuProps.iconSize, menuProps.iconSize);
    });
    const activeIconSizeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        if (!horizontalRef.value && props.root && mergedCollapsedRef.value) {
            return (_a = menuProps.collapsedIconSize) !== null && _a !== void 0 ? _a : menuProps.iconSize;
        }
        else {
            return menuProps.iconSize;
        }
    });
    const paddingLeftRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (horizontalRef.value)
            return undefined;
        const { collapsedWidth, indent, rootIndent } = menuProps;
        const { root, isGroup } = props;
        const mergedRootIndent = rootIndent === undefined ? indent : rootIndent;
        if (root) {
            if (mergedCollapsedRef.value) {
                return collapsedWidth / 2 - maxIconSizeRef.value / 2;
            }
            return mergedRootIndent;
        }
        if (NMenuOptionGroup) {
            return indent / 2 + NMenuOptionGroup.paddingLeftRef.value;
        }
        if (NSubmenu) {
            return ((isGroup ? indent / 2 : indent) +
                NSubmenu.paddingLeftRef.value);
        }
        return undefined;
    });
    const iconMarginRightRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const { collapsedWidth, indent, rootIndent } = menuProps;
        const { value: maxIconSize } = maxIconSizeRef;
        const { root } = props;
        if (horizontalRef.value)
            return ICON_MARGIN_RIGHT;
        if (!root)
            return ICON_MARGIN_RIGHT;
        if (!mergedCollapsedRef.value)
            return ICON_MARGIN_RIGHT;
        const mergedRootIndent = rootIndent === undefined ? indent : rootIndent;
        return (mergedRootIndent +
            maxIconSize +
            ICON_MARGIN_RIGHT -
            (collapsedWidth + maxIconSize) / 2);
    });
    return {
        dropdownPlacement: dropdownPlacementRef,
        activeIconSize: activeIconSizeRef,
        maxIconSize: maxIconSizeRef,
        paddingLeft: paddingLeftRef,
        iconMarginRight: iconMarginRightRef,
        NMenu,
        NSubmenu
    };
}


/***/ }),

/***/ "./node_modules/naive-ui/es/menu/src/useCheckDeprecated.js":
/*!*****************************************************************!*\
  !*** ./node_modules/naive-ui/es/menu/src/useCheckDeprecated.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCheckDeprecated": () => (/* binding */ useCheckDeprecated)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/naive/warn.js");


function useCheckDeprecated(props) {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
        if (props.items) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.warnOnce)('menu', '`items` is deprecated, please use `options` instead.');
        }
        if (props.onOpenNamesChange) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.warnOnce)('menu', '`on-open-names-change` is deprecated, please use `on-update:expanded-keys` instead.');
        }
        if (props.onSelect) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.warnOnce)('menu', '`on-select` is deprecated, please use `on-update:value` instead.');
        }
        if (props.onExpandedNamesChange) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.warnOnce)('menu', '`on-expanded-names-change` is deprecated, please use `on-update:expanded-keys` instead.');
        }
        if (props.expandedNames) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.warnOnce)('menu', '`expanded-names` is deprecated, please use `expanded-keys` instead.');
        }
        if (props.defaultExpandedNames) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.warnOnce)('menu', '`default-expanded-names` is deprecated, please use `default-expanded-keys` instead.');
        }
    });
}


/***/ }),

/***/ "./node_modules/naive-ui/es/menu/src/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/naive-ui/es/menu/src/utils.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isIgnoredNode": () => (/* binding */ isIgnoredNode),
/* harmony export */   "isDividerNode": () => (/* binding */ isDividerNode),
/* harmony export */   "itemRenderer": () => (/* binding */ itemRenderer)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/keysOf.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_utils */ "./node_modules/naive-ui/es/_utils/vue/keep.js");
/* harmony import */ var _MenuOptionGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuOptionGroup */ "./node_modules/naive-ui/es/menu/src/MenuOptionGroup.js");
/* harmony import */ var _Submenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Submenu */ "./node_modules/naive-ui/es/menu/src/Submenu.js");
/* harmony import */ var _MenuOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuOption */ "./node_modules/naive-ui/es/menu/src/MenuOption.js");
/* harmony import */ var _MenuDivider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MenuDivider */ "./node_modules/naive-ui/es/menu/src/MenuDivider.js");


// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/no-cycle



const groupPropKeys = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.keysOf)(_MenuOptionGroup__WEBPACK_IMPORTED_MODULE_2__.menuItemGroupProps);
const itemPropKeys = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.keysOf)(_MenuOption__WEBPACK_IMPORTED_MODULE_3__.menuItemProps);
const submenuPropKeys = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.keysOf)(_Submenu__WEBPACK_IMPORTED_MODULE_4__.submenuProps);
function isIgnoredNode(rawNode) {
    return rawNode.type === 'divider' || rawNode.type === 'render';
}
function isDividerNode(rawNode) {
    return rawNode.type === 'divider';
}
function itemRenderer(tmNode, menuProps) {
    const { rawNode } = tmNode;
    if (isIgnoredNode(rawNode)) {
        if (isDividerNode(rawNode)) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_MenuDivider__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({ key: tmNode.key }, rawNode.props));
        }
        return undefined;
    }
    const { labelField } = menuProps;
    const { key, level, isGroup } = tmNode;
    const props = Object.assign(Object.assign({}, rawNode), { title: (rawNode.title || rawNode[labelField]), extra: rawNode.titleExtra || rawNode.extra, key, internalKey: key, // since key can't be used as a prop
        level, root: level === 0, isGroup });
    if (tmNode.children) {
        if (tmNode.isGroup) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_MenuOptionGroup__WEBPACK_IMPORTED_MODULE_2__.NMenuOptionGroup, (0,_utils__WEBPACK_IMPORTED_MODULE_6__.keep)(props, groupPropKeys, { tmNodes: tmNode.children, key }));
        }
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_Submenu__WEBPACK_IMPORTED_MODULE_4__.NSubmenu, (0,_utils__WEBPACK_IMPORTED_MODULE_6__.keep)(props, submenuPropKeys, {
            key,
            rawNodes: rawNode[menuProps.childrenField],
            tmNodes: tmNode.children,
            tmNode
        }));
    }
    else {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_MenuOption__WEBPACK_IMPORTED_MODULE_3__.NMenuOption, (0,_utils__WEBPACK_IMPORTED_MODULE_6__.keep)(props, itemPropKeys, {
            key,
            tmNode
        }));
    }
}


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

/***/ "./node_modules/naive-ui/es/tooltip/src/Tooltip.js":
/*!*********************************************************!*\
  !*** ./node_modules/naive-ui/es/tooltip/src/Tooltip.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _popover_src_Popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../popover/src/Popover */ "./node_modules/naive-ui/es/popover/src/Popover.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_mixins */ "./node_modules/naive-ui/es/_mixins/use-theme.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles */ "./node_modules/naive-ui/es/tooltip/styles/light.js");
// Tooltip: popover wearing waistcoat





const tooltipProps = Object.assign(Object.assign({}, _popover_src_Popover__WEBPACK_IMPORTED_MODULE_1__.popoverBaseProps), _mixins__WEBPACK_IMPORTED_MODULE_2__["default"].props);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Tooltip',
    props: tooltipProps,
    __popover__: true,
    setup(props) {
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])('Tooltip', '-tooltip', undefined, _styles__WEBPACK_IMPORTED_MODULE_3__["default"], props);
        const popoverRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const tooltipExposedMethod = {
            syncPosition() {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                popoverRef.value.syncPosition();
            },
            setShow(show) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                popoverRef.value.setShow(show);
            }
        };
        return Object.assign(Object.assign({}, tooltipExposedMethod), { popoverRef, mergedTheme: themeRef, popoverThemeOverrides: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                return themeRef.value.self;
            }) });
    },
    render() {
        const { mergedTheme, internalExtraClass } = this;
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_popover_src_Popover__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign(Object.assign({}, this.$props), { theme: mergedTheme.peers.Popover, themeOverrides: mergedTheme.peerOverrides.Popover, builtinThemeOverrides: this.popoverThemeOverrides, internalExtraClass: internalExtraClass.concat('tooltip'), ref: 'popoverRef' }), this.$slots);
    }
}));


/***/ }),

/***/ "./node_modules/naive-ui/es/tree-select/src/TreeSelect.js":
/*!****************************************************************!*\
  !*** ./node_modules/naive-ui/es/tree-select/src/TreeSelect.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=style&index=0&id=547ae138&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=style&index=0&id=547ae138&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardSiderItem_vue_vue_type_style_index_0_id_547ae138_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardSiderItem.vue?vue&type=style&index=0&id=547ae138&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=style&index=0&id=547ae138&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardSiderItem_vue_vue_type_style_index_0_id_547ae138_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardSiderItem_vue_vue_type_style_index_0_id_547ae138_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/DashboardLayout.vue?vue&type=style&index=0&id=a8e025ec&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/DashboardLayout.vue?vue&type=style&index=0&id=a8e025ec&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardLayout_vue_vue_type_style_index_0_id_a8e025ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardLayout.vue?vue&type=style&index=0&id=a8e025ec&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/DashboardLayout.vue?vue&type=style&index=0&id=a8e025ec&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardLayout_vue_vue_type_style_index_0_id_a8e025ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardLayout_vue_vue_type_style_index_0_id_a8e025ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/treemate/es/check.js":
/*!*******************************************!*\
  !*** ./node_modules/treemate/es/check.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/vooks/es/use-keyboard.js":
/*!***********************************************!*\
  !*** ./node_modules/vooks/es/use-keyboard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useKeyboard)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var evtd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! evtd */ "./node_modules/evtd/es/delegate.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/vooks/es/utils.js");



function useKeyboard(options = {}, enabledRef) {
    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
        ctrl: false,
        command: false,
        win: false,
        shift: false,
        tab: false
    });
    const { keydown, keyup } = options;
    const keydownHandler = (e) => {
        switch (e.key) {
            case 'Control':
                state.ctrl = true;
                break;
            case 'Meta':
                state.command = true;
                state.win = true;
                break;
            case 'Shift':
                state.shift = true;
                break;
            case 'Tab':
                state.tab = true;
                break;
        }
        if (keydown !== undefined) {
            Object.keys(keydown).forEach(key => {
                if (key !== e.key)
                    return;
                const handler = keydown[key];
                if (typeof handler === 'function') {
                    handler(e);
                }
                else {
                    const { stop = false, prevent = false } = handler;
                    if (stop)
                        e.stopPropagation();
                    if (prevent)
                        e.preventDefault();
                    handler.handler(e);
                }
            });
        }
    };
    const keyupHandler = (e) => {
        switch (e.key) {
            case 'Control':
                state.ctrl = false;
                break;
            case 'Meta':
                state.command = false;
                state.win = false;
                break;
            case 'Shift':
                state.shift = false;
                break;
            case 'Tab':
                state.tab = false;
                break;
        }
        if (keyup !== undefined) {
            Object.keys(keyup).forEach(key => {
                if (key !== e.key)
                    return;
                const handler = keyup[key];
                if (typeof handler === 'function') {
                    handler(e);
                }
                else {
                    const { stop = false, prevent = false } = handler;
                    if (stop)
                        e.stopPropagation();
                    if (prevent)
                        e.preventDefault();
                    handler.handler(e);
                }
            });
        }
    };
    const setup = () => {
        if (enabledRef === undefined || enabledRef.value) {
            (0,evtd__WEBPACK_IMPORTED_MODULE_1__.on)('keydown', document, keydownHandler);
            (0,evtd__WEBPACK_IMPORTED_MODULE_1__.on)('keyup', document, keyupHandler);
        }
        if (enabledRef !== undefined) {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(enabledRef, value => {
                if (value) {
                    (0,evtd__WEBPACK_IMPORTED_MODULE_1__.on)('keydown', document, keydownHandler);
                    (0,evtd__WEBPACK_IMPORTED_MODULE_1__.on)('keyup', document, keyupHandler);
                }
                else {
                    (0,evtd__WEBPACK_IMPORTED_MODULE_1__.off)('keydown', document, keydownHandler);
                    (0,evtd__WEBPACK_IMPORTED_MODULE_1__.off)('keyup', document, keyupHandler);
                }
            });
        }
    };
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.hasInstance)()) {
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(setup);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
            if (enabledRef === undefined || enabledRef.value) {
                (0,evtd__WEBPACK_IMPORTED_MODULE_1__.off)('keydown', document, keydownHandler);
                (0,evtd__WEBPACK_IMPORTED_MODULE_1__.off)('keyup', document, keyupHandler);
            }
        });
    }
    else {
        setup();
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.readonly)(state);
}


/***/ }),

/***/ "./resources/js/Components/BlueVoteTable.vue":
/*!***************************************************!*\
  !*** ./resources/js/Components/BlueVoteTable.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlueVoteTable_vue_vue_type_template_id_5e732a8f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlueVoteTable.vue?vue&type=template&id=5e732a8f */ "./resources/js/Components/BlueVoteTable.vue?vue&type=template&id=5e732a8f");
/* harmony import */ var _BlueVoteTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlueVoteTable.vue?vue&type=script&lang=js */ "./resources/js/Components/BlueVoteTable.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BlueVoteTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BlueVoteTable_vue_vue_type_template_id_5e732a8f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/BlueVoteTable.vue"]])
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

/***/ "./resources/js/Components/Layout/DashboardSiderItem.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Components/Layout/DashboardSiderItem.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashboardSiderItem_vue_vue_type_template_id_547ae138_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardSiderItem.vue?vue&type=template&id=547ae138&scoped=true */ "./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=template&id=547ae138&scoped=true");
/* harmony import */ var _DashboardSiderItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardSiderItem.vue?vue&type=script&lang=js */ "./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=script&lang=js");
/* harmony import */ var _DashboardSiderItem_vue_vue_type_style_index_0_id_547ae138_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardSiderItem.vue?vue&type=style&index=0&id=547ae138&scoped=true&lang=css */ "./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=style&index=0&id=547ae138&scoped=true&lang=css");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_DashboardSiderItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DashboardSiderItem_vue_vue_type_template_id_547ae138_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-547ae138"],['__file',"resources/js/Components/Layout/DashboardSiderItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PoIMapMarker_vue_vue_type_template_id_0a14efae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PoIMapMarker.vue?vue&type=template&id=0a14efae */ "./resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue?vue&type=template&id=0a14efae");
/* harmony import */ var _PoIMapMarker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PoIMapMarker.vue?vue&type=script&lang=js */ "./resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PoIMapMarker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PoIMapMarker_vue_vue_type_template_id_0a14efae__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PoIMapStackSection_vue_vue_type_template_id_48e2486c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PoIMapStackSection.vue?vue&type=template&id=48e2486c */ "./resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue?vue&type=template&id=48e2486c");
/* harmony import */ var _PoIMapStackSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PoIMapStackSection.vue?vue&type=script&lang=js */ "./resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PoIMapStackSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PoIMapStackSection_vue_vue_type_template_id_48e2486c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/PointsOfInterest/PoICard.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Components/PointsOfInterest/PoICard.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PoICard_vue_vue_type_template_id_8ee3ff4c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PoICard.vue?vue&type=template&id=8ee3ff4c */ "./resources/js/Components/PointsOfInterest/PoICard.vue?vue&type=template&id=8ee3ff4c");
/* harmony import */ var _PoICard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PoICard.vue?vue&type=script&lang=js */ "./resources/js/Components/PointsOfInterest/PoICard.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PoICard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PoICard_vue_vue_type_template_id_8ee3ff4c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/PointsOfInterest/PoICard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/PointsOfInterest/PoIMap.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Components/PointsOfInterest/PoIMap.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PoIMap_vue_vue_type_template_id_359b5dfc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PoIMap.vue?vue&type=template&id=359b5dfc */ "./resources/js/Components/PointsOfInterest/PoIMap.vue?vue&type=template&id=359b5dfc");
/* harmony import */ var _PoIMap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PoIMap.vue?vue&type=script&lang=js */ "./resources/js/Components/PointsOfInterest/PoIMap.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PoIMap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PoIMap_vue_vue_type_template_id_359b5dfc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/PointsOfInterest/PoIMap.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/PointsOfInterest/PoIModal.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Components/PointsOfInterest/PoIModal.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PoIModal_vue_vue_type_template_id_287beb5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PoIModal.vue?vue&type=template&id=287beb5a */ "./resources/js/Components/PointsOfInterest/PoIModal.vue?vue&type=template&id=287beb5a");
/* harmony import */ var _PoIModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PoIModal.vue?vue&type=script&lang=js */ "./resources/js/Components/PointsOfInterest/PoIModal.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PoIModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PoIModal_vue_vue_type_template_id_287beb5a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/PointsOfInterest/PoIModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/DashboardLayout.vue":
/*!**************************************************!*\
  !*** ./resources/js/Layouts/DashboardLayout.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashboardLayout_vue_vue_type_template_id_a8e025ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=template&id=a8e025ec&scoped=true */ "./resources/js/Layouts/DashboardLayout.vue?vue&type=template&id=a8e025ec&scoped=true");
/* harmony import */ var _DashboardLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=script&lang=js */ "./resources/js/Layouts/DashboardLayout.vue?vue&type=script&lang=js");
/* harmony import */ var _DashboardLayout_vue_vue_type_style_index_0_id_a8e025ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=style&index=0&id=a8e025ec&scoped=true&lang=css */ "./resources/js/Layouts/DashboardLayout.vue?vue&type=style&index=0&id=a8e025ec&scoped=true&lang=css");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_DashboardLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DashboardLayout_vue_vue_type_template_id_a8e025ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-a8e025ec"],['__file',"resources/js/Layouts/DashboardLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/Partials/DashboardSider.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Layouts/Partials/DashboardSider.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashboardSider_vue_vue_type_template_id_e06b58a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardSider.vue?vue&type=template&id=e06b58a0 */ "./resources/js/Layouts/Partials/DashboardSider.vue?vue&type=template&id=e06b58a0");
/* harmony import */ var _DashboardSider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardSider.vue?vue&type=script&lang=js */ "./resources/js/Layouts/Partials/DashboardSider.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DashboardSider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DashboardSider_vue_vue_type_template_id_e06b58a0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Layouts/Partials/DashboardSider.vue"]])
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

/***/ "./resources/js/Pages/Backend/PointsOfInterest/Index.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Backend/PointsOfInterest/Index.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_17d2d9aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=17d2d9aa */ "./resources/js/Pages/Backend/PointsOfInterest/Index.vue?vue&type=template&id=17d2d9aa");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Backend/PointsOfInterest/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_mth_lily_Workspace_AdDU_ARISEn_addu_blue_vote_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_17d2d9aa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Backend/PointsOfInterest/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/BlueVoteTable.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/BlueVoteTable.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BlueVoteTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BlueVoteTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BlueVoteTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/BlueVoteTable.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardSiderItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardSiderItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardSiderItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIMapMarker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIMapMarker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PoIMapMarker.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIMapStackSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIMapStackSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PoIMapStackSection.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/PointsOfInterest/PoICard.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/PointsOfInterest/PoICard.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoICard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoICard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PoICard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoICard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/PointsOfInterest/PoIMap.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Components/PointsOfInterest/PoIMap.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIMap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIMap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PoIMap.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoIMap.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/PointsOfInterest/PoIModal.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Components/PointsOfInterest/PoIModal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PoIModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoIModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/DashboardLayout.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Layouts/DashboardLayout.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/DashboardLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/Partials/DashboardSider.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Layouts/Partials/DashboardSider.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardSider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardSider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardSider.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/DashboardSider.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/Backend/PointsOfInterest/Index.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Backend/PointsOfInterest/Index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Backend/PointsOfInterest/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/BlueVoteTable.vue?vue&type=template&id=5e732a8f":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/BlueVoteTable.vue?vue&type=template&id=5e732a8f ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BlueVoteTable_vue_vue_type_template_id_5e732a8f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BlueVoteTable_vue_vue_type_template_id_5e732a8f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BlueVoteTable.vue?vue&type=template&id=5e732a8f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/BlueVoteTable.vue?vue&type=template&id=5e732a8f");


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

/***/ "./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=template&id=547ae138&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=template&id=547ae138&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardSiderItem_vue_vue_type_template_id_547ae138_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardSiderItem_vue_vue_type_template_id_547ae138_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardSiderItem.vue?vue&type=template&id=547ae138&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=template&id=547ae138&scoped=true");


/***/ }),

/***/ "./resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue?vue&type=template&id=0a14efae":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue?vue&type=template&id=0a14efae ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIMapMarker_vue_vue_type_template_id_0a14efae__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIMapMarker_vue_vue_type_template_id_0a14efae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PoIMapMarker.vue?vue&type=template&id=0a14efae */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/Partials/PoIMapMarker.vue?vue&type=template&id=0a14efae");


/***/ }),

/***/ "./resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue?vue&type=template&id=48e2486c":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue?vue&type=template&id=48e2486c ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIMapStackSection_vue_vue_type_template_id_48e2486c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIMapStackSection_vue_vue_type_template_id_48e2486c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PoIMapStackSection.vue?vue&type=template&id=48e2486c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/Partials/PoIMapStackSection.vue?vue&type=template&id=48e2486c");


/***/ }),

/***/ "./resources/js/Components/PointsOfInterest/PoICard.vue?vue&type=template&id=8ee3ff4c":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/PointsOfInterest/PoICard.vue?vue&type=template&id=8ee3ff4c ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoICard_vue_vue_type_template_id_8ee3ff4c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoICard_vue_vue_type_template_id_8ee3ff4c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PoICard.vue?vue&type=template&id=8ee3ff4c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoICard.vue?vue&type=template&id=8ee3ff4c");


/***/ }),

/***/ "./resources/js/Components/PointsOfInterest/PoIMap.vue?vue&type=template&id=359b5dfc":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Components/PointsOfInterest/PoIMap.vue?vue&type=template&id=359b5dfc ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIMap_vue_vue_type_template_id_359b5dfc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIMap_vue_vue_type_template_id_359b5dfc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PoIMap.vue?vue&type=template&id=359b5dfc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoIMap.vue?vue&type=template&id=359b5dfc");


/***/ }),

/***/ "./resources/js/Components/PointsOfInterest/PoIModal.vue?vue&type=template&id=287beb5a":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Components/PointsOfInterest/PoIModal.vue?vue&type=template&id=287beb5a ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIModal_vue_vue_type_template_id_287beb5a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PoIModal_vue_vue_type_template_id_287beb5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PoIModal.vue?vue&type=template&id=287beb5a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PointsOfInterest/PoIModal.vue?vue&type=template&id=287beb5a");


/***/ }),

/***/ "./resources/js/Layouts/DashboardLayout.vue?vue&type=template&id=a8e025ec&scoped=true":
/*!********************************************************************************************!*\
  !*** ./resources/js/Layouts/DashboardLayout.vue?vue&type=template&id=a8e025ec&scoped=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardLayout_vue_vue_type_template_id_a8e025ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardLayout_vue_vue_type_template_id_a8e025ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardLayout.vue?vue&type=template&id=a8e025ec&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/DashboardLayout.vue?vue&type=template&id=a8e025ec&scoped=true");


/***/ }),

/***/ "./resources/js/Layouts/Partials/DashboardSider.vue?vue&type=template&id=e06b58a0":
/*!****************************************************************************************!*\
  !*** ./resources/js/Layouts/Partials/DashboardSider.vue?vue&type=template&id=e06b58a0 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardSider_vue_vue_type_template_id_e06b58a0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardSider_vue_vue_type_template_id_e06b58a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardSider.vue?vue&type=template&id=e06b58a0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/DashboardSider.vue?vue&type=template&id=e06b58a0");


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

/***/ "./resources/js/Pages/Backend/PointsOfInterest/Index.vue?vue&type=template&id=17d2d9aa":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Backend/PointsOfInterest/Index.vue?vue&type=template&id=17d2d9aa ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_17d2d9aa__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_17d2d9aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=17d2d9aa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Backend/PointsOfInterest/Index.vue?vue&type=template&id=17d2d9aa");


/***/ }),

/***/ "./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=style&index=0&id=547ae138&scoped=true&lang=css":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=style&index=0&id=547ae138&scoped=true&lang=css ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardSiderItem_vue_vue_type_style_index_0_id_547ae138_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardSiderItem.vue?vue&type=style&index=0&id=547ae138&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Layout/DashboardSiderItem.vue?vue&type=style&index=0&id=547ae138&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Layouts/DashboardLayout.vue?vue&type=style&index=0&id=a8e025ec&scoped=true&lang=css":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Layouts/DashboardLayout.vue?vue&type=style&index=0&id=a8e025ec&scoped=true&lang=css ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardLayout_vue_vue_type_style_index_0_id_a8e025ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardLayout.vue?vue&type=style&index=0&id=a8e025ec&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/DashboardLayout.vue?vue&type=style&index=0&id=a8e025ec&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_fbd95714_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=style&index=0&id=fbd95714&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Partials/Header.vue?vue&type=style&index=0&id=fbd95714&lang=css");


/***/ }),

/***/ "./node_modules/vueuc/es/overflow/src/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vueuc/es/overflow/src/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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