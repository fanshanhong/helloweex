// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _RouterTest = __webpack_require__(14);

var _RouterTest2 = _interopRequireDefault(_RouterTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_RouterTest2.default.el = '#root';
new Vue(_RouterTest2.default);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(17)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Volumes/Mechanical/E/Note/study/weex/day01/src/components/RouterTest.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-50f92faa"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  "nav": {
    "position": "fixed",
    "bottom": "5",
    "display": "flex",
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "selected": {
    "fontSize": "40",
    "color": "#FF0000",
    "backgroundColor": "#00B4FF"
  },
  "unselected": {
    "fontSize": "20",
    "color": "#808080"
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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


exports.default = {
  name: "RouterTest",
  data: function data() {

    return {
      header: '????????????',
      select: 'index'
    };
  },

  methods: {
    jump: function jump(str) {
      console.log('===' + str);
      this.select = str;
      switch (str) {
        case 'index':
          this.header = '????????????';
          this.$router.push("/home"); //android????????????
          break;
        case 'cart':
          this.header = '?????????';
          this.$router.push("/cart");
          break;
        case 'me':
          this.header = '??????';
          this.$router.push("/me");
          break;
      }
    }
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('text', [_vm._v(_vm._s(_vm.header))])]), _c('div', {
    staticClass: ["nav"]
  }, [_c('text', {
    class: [_vm.select === 'index' ? 'selected' : 'unselected'],
    on: {
      "click": function($event) {
        _vm.jump('index')
      }
    }
  }, [_vm._v("??????")]), _c('text', {
    class: [_vm.select === 'cart' ? 'selected' : 'unselected'],
    on: {
      "click": function($event) {
        _vm.jump('cart')
      }
    }
  }, [_vm._v("?????????")]), _c('text', {
    class: [_vm.select === 'me' ? 'selected' : 'unselected'],
    on: {
      "click": function($event) {
        _vm.jump('me')
      }
    }
  }, [_vm._v("??????")])]), _c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);