webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#calculator {\n  width: 30%;\n  margin-left: 35%;\n  margin-top: 2%;\n  height: 80%;\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='calculator'>\n\n  <display></display>\n  <keyboard></keyboard>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_actions_service__ = __webpack_require__("./src/services/actions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(actions) {
        this.actions = actions;
    }
    AppComponent.prototype.openEars = function (event) {
        this.actions.hear(event.key);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "openEars", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_actions_service__["a" /* ActionsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__display_display_component__ = __webpack_require__("./src/app/display/display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__keyboard_keyboard_component__ = __webpack_require__("./src/app/keyboard/keyboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_actions_service__ = __webpack_require__("./src/services/actions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__display_display_component__["a" /* DisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_4__keyboard_keyboard_component__["a" /* KeyboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_actions_service__["a" /* ActionsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/display/display.component.css":
/***/ (function(module, exports) {

module.exports = "#display {\n  width: 90%;\n  display: inline-block;\n  height: 20%;\n  background-color: #81ecec;\n  position: relative;\n  margin-top: 2%;\n  margin-left: 5%;\n  padding: 2% 5%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: sans-serif; }\n\n#display span {\n  font-size: 25px; }\n\n#display p {\n  font-size: 35px;\n  text-align: right;\n  width: 100%;\n  display: inline-block;\n  position: absolute;\n  bottom: 12%;\n  right: 5%; }\n"

/***/ }),

/***/ "./src/app/display/display.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"display\">\n\t<span>\n{{actions.getFirstTerm()}}\n</span>\n<span>\n{{actions.getOperator()}}\n</span>\n<span>\n{{actions.getSecondTerm()}} \n</span>\n<br>\n<p>\n\t{{actions.getResult()}}\n</p>\n</div>"

/***/ }),

/***/ "./src/app/display/display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_actions_service__ = __webpack_require__("./src/services/actions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayComponent = /** @class */ (function () {
    function DisplayComponent(actions) {
        this.actions = actions;
    }
    DisplayComponent.prototype.ngOnInit = function () {
    };
    DisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'display',
            template: __webpack_require__("./src/app/display/display.component.html"),
            styles: [__webpack_require__("./src/app/display/display.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_actions_service__["a" /* ActionsService */]])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/keyboard/keyboard.component.css":
/***/ (function(module, exports) {

module.exports = "#keyboard {\n  width: 90%;\n  margin-left: 5%;\n  background: #dedede;\n  margin-top: 2%;\n  height: 74%; }\n\n#digits {\n  float: left;\n  width: 60%;\n  height: 100%; }\n\n#operators {\n  float: left;\n  width: 38%;\n  margin-left: 2%;\n  height: 100%; }\n\n.key {\n  overflow: hidden;\n  height: 25%;\n  float: left; }\n\n.innerkey {\n  height: 96.25%;\n  width: 100%;\n  background: #34495e;\n  text-align: center;\n  color: white;\n  display: table;\n  font-size: 45px;\n  font-weight: bold;\n  font-family: sans-serif;\n  cursor: pointer;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.innerkey:hover {\n  background-color: #16a085; }\n\n/* JUST FOR DIGITS*/\n\n.key.digit {\n  width: 32%;\n  margin-left: 1%;\n  margin-right: 1%; }\n\n.key.digit:nth-child(1), .key.digit:nth-child(4), .key.digit:nth-child(7), .key.digit:nth-child(10) {\n  margin-left: 0; }\n\n.key.digit:nth-child(3), .key.digit:nth-child(6), .key.digit:nth-child(9), .key.digit:nth-child(11) {\n  margin-right: 0; }\n\n.key.digit:nth-child(10) {\n  width: 66%; }\n\n.key.digit:nth-child(1) .innerkey, .key.digit:nth-child(2) .innerkey, .key.digit:nth-child(3) .innerkey {\n  margin-top: 0;\n  margin-bottom: 3.75%; }\n\n.key.digit:nth-child(4) .innerkey, .key.digit:nth-child(5) .innerkey, .key.digit:nth-child(6) .innerkey {\n  margin-top: 1.25%;\n  margin-bottom: 2.5%; }\n\n.key.digit:nth-child(7) .innerkey, .key.digit:nth-child(8) .innerkey, .key.digit:nth-child(9) .innerkey {\n  margin-top: 2.5%;\n  margin-bottom: 1.25%; }\n\n.key.digit:nth-child(10) .innerkey {\n  margin-bottom: 0;\n  margin-top: 1.81818%; }\n\n.key.digit:nth-child(11) .innerkey {\n  margin-bottom: 0;\n  margin-top: 3.75%; }\n\n.key.operator {\n  overflow: hidden;\n  width: 49%;\n  height: 25%;\n  float: left;\n  margin-left: 0;\n  margin-right: 2%; }\n\n.key.operator:nth-child(2), .key.operator:nth-child(4), .key.operator:nth-child(6), .key.operator:nth-child(8) {\n  margin-right: 0; }\n\n.key.operator:nth-child(1) .innerkey, .key.operator:nth-child(2) .innerkey {\n  background-color: #95a5a6; }\n\n.key.operator:nth-child(1) .innerkey:hover, .key.operator:nth-child(2) .innerkey:hover {\n  background-color: #7f8c8d; }\n\n.key.operator:nth-child(8) .innerkey {\n  background-color: #e74c3c; }\n\n.key.operator:nth-child(8) .innerkey:hover {\n  background-color: #c0392b; }\n\n.key.operator:nth-child(1) .innerkey, .key.operator:nth-child(2) .innerkey {\n  margin-top: 0;\n  margin-bottom: 3.75%; }\n\n.key.operator:nth-child(3) .innerkey, .key.operator:nth-child(4) .innerkey {\n  margin-top: 1.25%;\n  margin-bottom: 2.5%; }\n\n.key.operator:nth-child(5) .innerkey, .key.operator:nth-child(6) .innerkey {\n  margin-top: 2.5%;\n  margin-bottom: 1.25%; }\n\n.key.operator:nth-child(7) .innerkey, .key.operator:nth-child(8) .innerkey {\n  margin-bottom: 0;\n  margin-top: 3.75%; }\n\n.innerkey span {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/keyboard/keyboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"keyboard\">\n\t<div id='digits'>\n\t\t<div *ngFor=\"let key of this.digits\" class='key digit'>\n\t\t\t<p class='innerkey' (click)='pushKey(key)'>\n\t\t\t\t<span>{{key.view}}</span>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t<div id=\"operators\">\n\t\t<div *ngFor=\"let key of this.operators\" class='key operator'>\n\t\t\t<p class='innerkey' (click)='pushKey(key)'>\n\t\t\t\t<span>{{key.view}}</span>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/keyboard/keyboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_actions_service__ = __webpack_require__("./src/services/actions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Key = /** @class */ (function () {
    function Key(_view, _type) {
        this.view = _view;
        this.type = _type;
    }
    return Key;
}());
var DIGITSSTRUCTURE = [["7", "digit"], ["8", "digit"], ["9", "digit"],
    ["4", "digit"], ["5", "digit"], ["6", "digit"],
    ["1", "digit"], ["2", "digit"], ["3", "digit"],
    ["0", "digit"], [".", "digit"]
];
var OPERATORSSTRUCTURE = [["CE", "CE"], ["C", "C"],
    ["+", "operator"], ["-", "operator"],
    ["x", "operator"], ["÷", "operator"],
    ['Ans', "Ans"], ["=", "equal"]
];
var KeyboardComponent = /** @class */ (function () {
    function KeyboardComponent(actions) {
        this.actions = actions;
        this.digits = [];
        for (var i = 0; i < DIGITSSTRUCTURE.length; i++) {
            this.digits[i] = new Key(DIGITSSTRUCTURE[i][0], DIGITSSTRUCTURE[i][1]);
        }
        this.operators = [];
        for (var i = 0; i < OPERATORSSTRUCTURE.length; i++) {
            this.operators[i] = new Key(OPERATORSSTRUCTURE[i][0], OPERATORSSTRUCTURE[i][1]);
        }
    }
    KeyboardComponent.prototype.pushKey = function (_key) {
        if (_key.type == 'digit') {
            this.actions.setDigit(_key.view);
        }
        else if (_key.type == 'CE') {
            this.actions.clearLastEntry();
        }
        else if (_key.type == 'operator') {
            this.actions.setOperator(_key.view);
        }
        else if (_key.type == 'equal') {
            this.actions.solve();
        }
        else if (_key.type == "C") {
            this.actions.clearAll();
        }
        else if (_key.type == 'Ans') {
            this.actions.Ans();
        }
    };
    KeyboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'keyboard',
            template: __webpack_require__("./src/app/keyboard/keyboard.component.html"),
            styles: [__webpack_require__("./src/app/keyboard/keyboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_actions_service__["a" /* ActionsService */]])
    ], KeyboardComponent);
    return KeyboardComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/actions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActionsService = /** @class */ (function () {
    function ActionsService() {
    }
    ;
    ActionsService.prototype.hear = function (view) {
        for (var i = 0; i < 10; i++) {
            if (view == "" + i || view == ".") {
                this.setDigit(view);
                break;
            }
        }
        if (view == 'Backspace') {
            this.clearLastEntry();
        }
        else if (view == 'Delete' || view == 'Escape') {
            this.clearAll();
        }
        else if (view == "+" || view == "-" || view == "*" || view == "/" || view == "x") {
            if (view == "*") {
                view = "x";
            }
            if (view == "/") {
                view = "÷";
            }
            this.setOperator(view);
        }
        else if (view == "Enter") {
            this.solve();
        }
    };
    ActionsService.prototype.setDigit = function (view) {
        if (this.isFirstTerm()) {
            if (this.isFirstDigit(1)) {
                this.first_term = +view;
            }
            else {
                var str = "" + this.first_term;
                this.first_term += view;
            }
        }
        else {
            if (this.isFirstDigit(2)) {
                this.second_term = +view;
            }
            else {
                var str = "" + this.first_term;
                this.second_term += view;
            }
        }
    };
    ActionsService.prototype.setOperator = function (view) {
        if (!this.isFirstDigit(1) && !this.isFirstDigit(2) && this.isOperatorSet()) {
            this.solve();
            this.first_term = this.ans;
            delete this.operator;
            delete this.second_term;
            this.setOperator(view);
        }
        else {
            /*if(this.isAnsSet() && this.isFirstDigit(1) ){
                console.log('kk');
                this.first_term=this.ans;
                delete this.operator;
                delete this.second_term;
            }*/
            if (view == "-") {
                if (this.isFirstDigit(1)) {
                    this.first_term = "-";
                }
                else if (this.isOperatorSet() && this.isFirstDigit(2)) {
                    this.second_term = "-";
                }
                else {
                    this.operator = view;
                }
            }
            else {
                this.operator = view;
            }
        }
    };
    ActionsService.prototype.solve = function () {
        if (this.isFirstDigit(2)) {
            this.result = this.first_term;
        }
        else {
            if (this.operator == "+") {
                this.first_term = 1 * (+this.first_term) + 0;
                this.second_term = 1 * (+this.second_term) + 0;
                this.result = +this.first_term + this.second_term;
            }
            else if (this.operator == '-') {
                this.result = this.first_term - this.second_term;
            }
            else if (this.operator == 'x') {
                this.result = this.first_term * this.second_term;
            }
            else {
                this.result = this.first_term / this.second_term;
            }
        }
        this.ans = this.result;
    };
    ActionsService.prototype.clearLastEntry = function () {
        if (!this.isFirstDigit(2)) {
            var str = "" + this.second_term;
            var n = str.length - 1;
            if (n == 0) {
                delete this.second_term;
            }
            else {
                this.second_term = +str.substr(0, n);
            }
        }
        else if (this.isOperatorSet()) {
            delete this.operator;
        }
        else if (!this.isFirstDigit(1)) {
            var str = "" + this.first_term;
            var n = str.length - 1;
            if (n == 0) {
                delete this.first_term;
            }
            else {
                this.first_term = +str.substr(0, n);
            }
        }
    };
    ActionsService.prototype.clearAll = function () {
        this.resetDisplay();
        delete this.result;
    };
    ActionsService.prototype.resetDisplay = function () {
        delete this.first_term;
        delete this.second_term;
        delete this.operator;
    };
    ActionsService.prototype.Ans = function () {
        if (this.isFirstDigit(2) && this.isOperatorSet() && !this.isFirstDigit(1)) {
            this.second_term = this.ans;
        }
        else if (this.isFirstDigit(1)) {
            this.first_term = this.ans;
        }
        else if (typeof this.result != 'undefined') {
            this.resetDisplay();
            this.first_term = this.ans;
        }
    };
    ActionsService.prototype.isFirstTerm = function () {
        return (typeof this.operator == 'undefined');
    };
    ActionsService.prototype.isOperatorSet = function () {
        return !this.isFirstTerm();
    };
    ActionsService.prototype.isAnsSet = function () {
        return (typeof this.ans != 'undefined');
    };
    ActionsService.prototype.isFirstDigit = function (term) {
        if (term == 1) {
            return (typeof this.first_term == 'undefined');
        }
        else {
            return (typeof this.second_term == 'undefined');
        }
    };
    ActionsService.prototype.getFirstTerm = function () {
        return this.first_term;
    };
    ActionsService.prototype.getOperator = function () {
        return this.operator;
    };
    ActionsService.prototype.getSecondTerm = function () {
        return this.second_term;
    };
    ActionsService.prototype.getResult = function () {
        return this.result;
    };
    ActionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ActionsService);
    return ActionsService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map