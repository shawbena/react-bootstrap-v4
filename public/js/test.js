(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test"],{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/carousel/carousel.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/components/carousel/carousel.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".carousel {\\n  position: relative;\\n  width: 300px;\\n  overflow: hidden; }\\n  .carousel__inner {\\n    width: 300%; }\\n  .carousel__item {\\n    width: 300px;\\n    float: left; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/carousel/carousel.scss?./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/components/carousel/carousel.jsx":
/*!**********************************************!*\
  !*** ./src/components/carousel/carousel.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _TransitionGroup = __webpack_require__(/*! react-transition-group/TransitionGroup */ \"./node_modules/react-transition-group/TransitionGroup.js\");\n\nvar _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);\n\nvar _CSSTransition = __webpack_require__(/*! react-transition-group/CSSTransition */ \"./node_modules/react-transition-group/CSSTransition.js\");\n\nvar _CSSTransition2 = _interopRequireDefault(_CSSTransition);\n\nvar _classnames = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\n__webpack_require__(/*! ./carousel.scss */ \"./src/components/carousel/carousel.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Img1 = \"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1656b11d6e2%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1656b11d6e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.45%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\";\nvar Img2 = \"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1656b11d6e5%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1656b11d6e5%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.45%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\";\nvar Img3 = \"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1656b11d6e6%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1656b11d6e6%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.45%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\";\n\nvar Carousel = function (_React$Component) {\n    (0, _inherits3.default)(Carousel, _React$Component);\n\n    function Carousel() {\n        (0, _classCallCheck3.default)(this, Carousel);\n        return (0, _possibleConstructorReturn3.default)(this, (Carousel.__proto__ || (0, _getPrototypeOf2.default)(Carousel)).apply(this, arguments));\n    }\n\n    (0, _createClass3.default)(Carousel, [{\n        key: \"render\",\n        value: function render() {\n            return _react2.default.createElement(\n                \"div\",\n                { className: \"carousel clearfix\" },\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"carousel__inner\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"carousel__item\" },\n                        _react2.default.createElement(\"img\", { src: Img1, className: \"w-100\", alt: \"\" })\n                    ),\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"carousel__item\" },\n                        _react2.default.createElement(\"img\", { src: Img2, className: \"w-100\", alt: \"\" })\n                    ),\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"carousel__item\" },\n                        _react2.default.createElement(\"img\", { src: Img3, className: \"w-100\", alt: \"\" })\n                    )\n                )\n            );\n        }\n    }]);\n    return Carousel;\n}(_react2.default.Component);\n\nexports.default = Carousel;\n\n//# sourceURL=webpack:///./src/components/carousel/carousel.jsx?");

/***/ }),

/***/ "./src/components/carousel/carousel.scss":
/*!***********************************************!*\
  !*** ./src/components/carousel/carousel.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/lib/loader.js!./carousel.scss */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/carousel/carousel.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/carousel/carousel.scss?");

/***/ }),

/***/ "./src/test.jsx":
/*!**********************!*\
  !*** ./src/test.jsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _carousel = __webpack_require__(/*! ./components/carousel/carousel */ \"./src/components/carousel/carousel.jsx\");\n\nvar _carousel2 = _interopRequireDefault(_carousel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_carousel2.default, null)\n  );\n};\n\n//# sourceURL=webpack:///./src/test.jsx?");

/***/ })

}]);