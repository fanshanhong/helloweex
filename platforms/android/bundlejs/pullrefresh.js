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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pullrefresh = __webpack_require__(13);

var _pullrefresh2 = _interopRequireDefault(_pullrefresh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_pullrefresh2.default.el = '#root';
new Vue(_pullrefresh2.default);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(16)
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
__vue_options__.__file = "/Volumes/Mechanical/E/Note/study/weex/day01/src/pullrefresh.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-794f4aad"
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
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "borderWidth": "10",
    "borderColor": "#000000",
    "borderStyle": "solid"
  },
  "panel": {
    "width": "600",
    "height": "400",
    "marginTop": "35",
    "marginBottom": "35",
    "flexDirection": "column",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "text": {
    "fontSize": "88",
    "textAlign": "center",
    "color": "#41B883"
  },
  "loading": {
    "width": "600",
    "height": "120",
    "marginLeft": "75",
    "marginTop": "120",
    "marginBottom": "-120",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "column",
    "backgroundColor": "#808080"
  },
  "indicator": {
    "width": "100",
    "height": "100",
    "backgroundColor": "#7FFF00"
  },
  "indicator-refresh": {
    "height": "40",
    "width": "40",
    "backgroundColor": "#0000FF",
    "color": "#008000"
  },
  "refresh": {
    "width": "750",
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "refresh-div": {
    "backgroundColor": "#0088fb"
  },
  "cell": {
    "backgroundColor": "rgba(255,0,192,0.2)",
    "borderWidth": "2",
    "borderColor": "#000000",
    "borderStyle": "solid"
  }
}

/***/ }),
/* 15 */
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
//
//
//
//
//
//
//
//
//

var count = 0;
var modal = weex.requireModule('modal');
exports.default = {
  name: "pullrefresh",
  data: function data() {
    return {
      names: ["1111", "2", "7", "9"],
      isLoadMore: false,
      refreshing: false
    };
  },

  methods: {
    onrefresh: function onrefresh() {
      var _this = this;

      this.refreshing = true;

      setTimeout(function () {
        console.log("onrefresh调用了");
        _this.names = [];
        _this.names.push("21111", "22", "27", "29");
        _this.refreshing = false;
      }, 2000);
    },
    loadmore: function loadmore() {
      var _this2 = this;

      modal.toast({
        message: '触发 loadmore 事件'
      });
      this.isLoadMore = true;
      setTimeout(function () {
        if (count >= 4) {
          _this2.isLoadMore = false;
          return;
        }
        count++;

        _this2.names.push('11111');
        _this2.resetLoadMore();
        _this2.isLoadMore = false;
      }, 3000000);
    },
    scroll: function scroll(e) {
      // modal.toast({
      //   message: JSON.stringify(e.contentSize) + ' ' + JSON.stringify(e.contentOffset)
      // })
    },

    // 重置 loadmore
    resetLoadMore: function resetLoadMore() {
      this.$refs["list"].resetLoadmore();
    }
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    ref: "list",
    staticClass: ["list"],
    attrs: {
      "loadmoreoffset": "1",
      "offsetAccuracy": "10",
      "showScrollbar": "false"
    },
    on: {
      "loadmore": _vm.loadmore,
      "scroll": _vm.scroll
    }
  }, [_c('refresh', {
    staticClass: ["refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh
    }
  }, [_vm._m(0)]), _c('header', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_vm._v("这是header")]), _vm._l((_vm.names), function(num) {
    return _c('cell', {
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(num))])])])
  }), _c('loading', {
    staticClass: ["loading"],
    attrs: {
      "display": _vm.isLoadMore ? 'show' : 'hide'
    }
  }, [_vm._m(1)])], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["refresh-div"]
  }, [_c('text', [_vm._v("Refreshing")]), _c('loading-indicator', {
    staticClass: ["indicator-refresh"]
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["div"]
  }, [_c('text', {
    staticClass: ["loadingtext"]
  }, [_vm._v("这是footer:上拉加载更多1111")]), _c('loading-indicator', {
    staticClass: ["indicator"]
  })])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);