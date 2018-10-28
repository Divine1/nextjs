module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/body/index.js":
/*!**********************************!*\
  !*** ./components/body/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Body = function Body(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.body);
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./components/card/Card.js":
/*!*********************************!*\
  !*** ./components/card/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors/red */ "@material-ui/core/colors/red");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/PlayArrow */ "@material-ui/icons/PlayArrow");
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AccountBalance */ "@material-ui/icons/AccountBalance");
/* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var styles = function styles(theme) {
  return {
    card: {
      maxWidth: 400
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9

    },
    actions: {
      display: 'flex'
    },
    expand: _defineProperty({
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      }),
      marginLeft: 'auto'
    }, theme.breakpoints.up('sm'), {
      marginRight: -8
    }),
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_6___default.a[500]
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
      padding: "4px"
    }
  };
};

var RecipeReviewCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RecipeReviewCard, _React$Component);

  function RecipeReviewCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RecipeReviewCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RecipeReviewCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      expanded: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRedirection", function () {
      console.log("in handleRedirection() ");

      if (_this.state.expanded) {
        _this.setState(function (state) {
          return {
            expanded: !state.expanded
          };
        });
      } else {
        var accountid = "123432345";
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/viewaccount?accountid=' + accountid);
      }
    });

    return _this;
  }

  _createClass(RecipeReviewCard, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: classes.card
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3___default.a, {
        avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4___default.a, {
          className: classes.avatar
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_8___default.a, null)),
        title: "123456778",
        subheader: "divine",
        action: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          onClick: this.handleRedirection
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_7___default.a, {
          style: {
            fontSize: "34px"
          }
        })))
      }));
    }
  }]);

  return RecipeReviewCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(RecipeReviewCard));

/***/ }),

/***/ "./components/head/index.js":
/*!**********************************!*\
  !*** ./components/head/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

 // import "../../node_modules/roboto-fontface/css/roboto/roboto-fontface.css";  
// import "../../static/customfont/css/roboto/roboto-fontface.css";
// import "../../static/css/customStyle.css";

{
  /* <link rel="stylesheet" type="text/css" href="/static/customfont/css/roboto/roboto-fontface.css" /> */
}

var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/customStyle.css"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./layout/Frontoffice.js":
/*!*******************************!*\
  !*** ./layout/Frontoffice.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_head_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/head/index */ "./components/head/index.js");
/* harmony import */ var _components_body_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/body/index */ "./components/body/index.js");
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/NoSsr */ "@material-ui/core/NoSsr");
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_3__);


 // import 'typeface-roboto';



var Frontoffice = function Frontoffice(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_head_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.headTitle
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_body_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    body: props.children
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Frontoffice);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Frontoffice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Frontoffice */ "./layout/Frontoffice.js");
/* harmony import */ var _components_card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/card/Card */ "./components/card/Card.js");




var HomePage = function HomePage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_Frontoffice__WEBPACK_IMPORTED_MODULE_1__["default"], {
    headTitle: "HomePage"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "heading"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/NoSsr":
/*!******************************************!*\
  !*** external "@material-ui/core/NoSsr" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/NoSsr");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AccountBalance":
/*!****************************************************!*\
  !*** external "@material-ui/icons/AccountBalance" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBalance");

/***/ }),

/***/ "@material-ui/icons/PlayArrow":
/*!***********************************************!*\
  !*** external "@material-ui/icons/PlayArrow" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlayArrow");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map