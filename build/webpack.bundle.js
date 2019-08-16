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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/components/signUp/index.tsx":
/*!**********************************************!*\
  !*** ./frontend/components/signUp/index.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const semantic_ui_react_1 = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = event => {
            const name = event.target.name;
            const value = event.target.value;
            this.setState(Object.assign({}, this.state, { [name]: value }));
        };
        this.handleSubmit = () => __awaiter(this, void 0, void 0, function* () {
            yield this.props.onSubmit({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            });
        });
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(semantic_ui_react_1.Header, { as: "h3", textAlign: "center" }, "Sign up for book store account"),
            React.createElement(semantic_ui_react_1.Form, { loading: this.props.loading, onSubmit: this.handleSubmit },
                React.createElement(semantic_ui_react_1.FormField, null,
                    React.createElement("label", null, "username"),
                    React.createElement(semantic_ui_react_1.Input, { name: "username", type: "text", value: this.state.username, onChange: this.handleInput })),
                React.createElement(semantic_ui_react_1.FormField, null,
                    React.createElement("label", null, "email"),
                    React.createElement(semantic_ui_react_1.Input, { name: "email", type: "text", value: this.state.email, onChange: this.handleInput })),
                React.createElement(semantic_ui_react_1.FormField, null,
                    React.createElement("label", null, "password"),
                    React.createElement(semantic_ui_react_1.Input, { name: "password", type: "password", value: this.state.password, onChange: this.handleInput })),
                React.createElement(semantic_ui_react_1.FormField, null,
                    React.createElement("label", null, "confirmPassword"),
                    React.createElement(semantic_ui_react_1.Input, { name: "confirmPassword", type: "password", value: this.state.confirmPassword, onChange: this.handleInput })),
                React.createElement(semantic_ui_react_1.Button, { type: "submit" }, "SignUp"))));
    }
}
exports.default = SignUp;


/***/ }),

/***/ "./frontend/index.tsx":
/*!****************************!*\
  !*** ./frontend/index.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
const index_1 = __webpack_require__(/*! ./components/signUp/index */ "./frontend/components/signUp/index.tsx");
ReactDom.render(React.createElement(index_1.default, null), document.getElementById("app"));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "semantic-ui-react":
/*!***************************************************************!*\
  !*** external ["Button","Form","Input","FormField","Header"] ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Button["Form"]["Input"]["FormField"]["Header"];

/***/ })

/******/ });
//# sourceMappingURL=webpack.bundle.js.map