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

module.exports = "\n#app{ max-width:542px; max-height: 650px; width:100%; -webkit-box-sizing: border-box; box-sizing: border-box;  height:90%; margin-top:1%;/* h=w*1.2 */ border:5px solid #2980b9; background-color: #3498db;  position: relative; margin-left:auto; margin-right: auto; }\n#commands{ display: none; }\n@media only screen and (max-width: 900px){\n#app{ height: 66%; }\n#commands{ margin-top: 4vh; height: 22vh; width: 22vh; display:block; margin-left: auto; margin-right: auto; position: relative;  }\n#commands i{ width: 7.333vh; height: 7.333vh; position: absolute; cursor: pointer; font-size: 7.33vh;\ntext-align: center; color:#1abc9c;}\n#commands i.left{ left: 0; top: 7.333vh; }\n#commands i.right{ left: 14.666vh; top: 7.333vh; }\n#commands i.up { left: 7.333vh; top: 0; }\n#commands i.down { left: 7.333vh; top: 14.666vh; }\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='app'>\n\n  <app-header></app-header>\n\n  <app-chessboard></app-chessboard>\n\n\n\n</div>\n\n<div id=\"commands\">\n  \t<i class=\"left fas fa-caret-square-left\" (click)=\"actions.ears('ArrowLeft')\"></i>\n  \t<i class=\"up fas fa-caret-square-up\" (click)=\"actions.ears('ArrowUp')\"></i>\n  \t<i class=\"down fas fa-caret-square-down\" (click)=\"actions.ears('ArrowDown')\"></i>\n  \t<i class=\"right fas fa-caret-square-right\" (click)=\"actions.ears('ArrowRight')\"></i>\n  </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_action_service__ = __webpack_require__("./src/app/services/action.service.ts");
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
        this.actions.ears(event.key);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_action_service__["a" /* ActionService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chessboard_chessboard_component__ = __webpack_require__("./src/app/chessboard/chessboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_action_service__ = __webpack_require__("./src/app/services/action.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__chessboard_chessboard_component__["a" /* ChessboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_action_service__["a" /* ActionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chessboard/chessboard.component.css":
/***/ (function(module, exports) {

module.exports = "#chessboard{\n\n\twidth:90%; height: 75%;\n\tmargin-left: 5%; margin-top: 5%;\n\tbackground-color: white;\n}\n\n.slot{ height: 10%; float: left; border:1px solid #ecf0f1; -webkit-box-sizing: border-box; box-sizing: border-box; }\n\n.slot1, .slot3{ background-color: #2ecc71; }\n\n.slot2{ background-color: #27ae60; }\n\n.slot4{ background-color: red;  }"

/***/ }),

/***/ "./src/app/chessboard/chessboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='chessboard'>\n\n\t<div *ngFor=\"let slot of this.slots\" class='slot slot{{slot.value}}' [ngStyle]=\"{'width': this.slotWidth, 'height': this.slotWidth}\">\n\t</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/chessboard/chessboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChessboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_action_service__ = __webpack_require__("./src/app/services/action.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("./src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slot__ = __webpack_require__("./src/app/chessboard/slot.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__snake__ = __webpack_require__("./src/app/chessboard/snake.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fly__ = __webpack_require__("./src/app/chessboard/fly.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChessboardComponent = /** @class */ (function () {
    function ChessboardComponent(actions) {
        var _this = this;
        this.actions = actions;
        this.slotWidth = 100 / __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* GRID */] + "%";
        this.slots = [];
        this.snake = new __WEBPACK_IMPORTED_MODULE_5__snake__["a" /* Snake */]();
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* GRID */] * __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* GRID */]; i++) {
            if (this.snake.isSnaked(i) == 2) {
                this.headSlot = i;
            }
            if (this.snake.isSnaked(i) == 3) {
                this.tailSlot = i;
            }
            this.slots[i] = new __WEBPACK_IMPORTED_MODULE_4__slot__["a" /* Slot */](i, this.snake.isSnaked(i));
        }
        this.fly = new __WEBPACK_IMPORTED_MODULE_6__fly__["a" /* Fly */](this.snake);
        this.slots[this.fly.position].value = 4;
        this.actions.headSlot$.subscribe(function (newHeadSlot) {
            _this.realGame(newHeadSlot);
        });
    }
    ChessboardComponent.prototype.realGame = function (newHeadSlot) {
        var GAMEOVER = false;
        if (this.snake.isSnaked(newHeadSlot) > 0) {
            GAMEOVER = true;
        }
        var Hit = false;
        if (newHeadSlot == this.fly.position) {
            Hit = true;
            __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */].SCORE += 100;
        }
        else {
            this.slots[this.tailSlot].value = 0;
            this.tailSlot = this.snake.almostTailSlot();
        }
        this.slots[newHeadSlot].value = 2;
        this.slots[this.headSlot].value = 1;
        this.headSlot = newHeadSlot;
        this.remakeSnake(newHeadSlot, Hit);
        if (Hit) {
            this.fly = new __WEBPACK_IMPORTED_MODULE_6__fly__["a" /* Fly */](this.snake);
            this.slots[this.fly.position].value = 4;
        }
        if (GAMEOVER) {
            console.log("GAME OVER");
            throw new Error("my error message");
        }
    };
    ChessboardComponent.prototype.remakeSnake = function (_n, _bigger) {
        if (_bigger) {
            this.snake.addPiece(_n);
        }
        else {
            for (var i = this.snake.tail.length - 1; i > 0; i--) {
                this.snake.tail[i].id = this.snake.tail[i - 1].id;
            }
            this.snake.tail[0].id = _n;
        }
    };
    ChessboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-chessboard',
            template: __webpack_require__("./src/app/chessboard/chessboard.component.html"),
            styles: [__webpack_require__("./src/app/chessboard/chessboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_action_service__["a" /* ActionService */]])
    ], ChessboardComponent);
    return ChessboardComponent;
}());



/***/ }),

/***/ "./src/app/chessboard/fly.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fly; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__("./src/app/config/config.ts");

var Fly = /** @class */ (function () {
    function Fly(pente) {
        this.pente = pente;
        var emergency = 0;
        do {
            this.position = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* GRID */] * __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* GRID */] - 1);
            emergency++;
        } while (pente.isSnaked(this.position) != 0 && emergency < 10000);
        this.timer = 9;
    }
    return Fly;
}());



/***/ }),

/***/ "./src/app/chessboard/slot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slot; });
var Slot = /** @class */ (function () {
    function Slot(idx, valuex) {
        this.id = idx;
        this.value = valuex;
    }
    return Slot;
}());



/***/ }),

/***/ "./src/app/chessboard/snake.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Snake; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slot__ = __webpack_require__("./src/app/chessboard/slot.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config__ = __webpack_require__("./src/app/config/config.ts");


var Snake = /** @class */ (function () {
    function Snake() {
        this.tail = [];
        this.tail[0] = new __WEBPACK_IMPORTED_MODULE_0__slot__["a" /* Slot */](__WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* GRID */] * __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* GRID */] / 2 + __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* GRID */] / 2 - 1, 2);
        this.tail[1] = new __WEBPACK_IMPORTED_MODULE_0__slot__["a" /* Slot */](__WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* GRID */] * __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* GRID */] / 2 + __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* GRID */] / 2, 1);
        this.tail[2] = new __WEBPACK_IMPORTED_MODULE_0__slot__["a" /* Slot */](__WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* GRID */] * __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* GRID */] / 2 + __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* GRID */] / 2 + 1, 3);
    }
    Snake.prototype.isSnaked = function (i) {
        for (var z = 0; z < this.tail.length; z++) {
            if (this.tail[z].id == i) {
                return this.tail[z].value;
            }
        }
        return 0;
    };
    Snake.prototype.almostTailSlot = function () {
        return this.tail[this.tail.length - 2].id;
    };
    Snake.prototype.addPiece = function (newPiece) {
        var tmp = [];
        tmp[0] = new __WEBPACK_IMPORTED_MODULE_0__slot__["a" /* Slot */](newPiece, 2);
        this.tail[0].value = 1;
        this.tail = tmp.concat(this.tail);
    };
    return Snake;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SPEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GRID; });
var SPEED = 8;
var GRID = 20;


/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "#header{ width:90%; margin:5%; height: 10%; background-color: #1abc9c; }\nh1{ color: white; float: left; width: 50%; font-family: sans-serif; padding: 10px; -webkit-box-sizing: border-box; box-sizing: border-box; }\n#header p { width:auto; padding:10px; -webkit-box-sizing:border-box; box-sizing:border-box; text-align:center; float: right; color: white; font-family: sans-serif; font-weight: bold;  }\n#header button{ background: white;\nborder: 0;\npadding: 4%;\nmargin-top: 0;\nfloat: right;\nmargin-left: 21px;\nheight: 100%; cursor: pointer;}\n#header button:hover{ background-color: #333; color: white; }\n@media only screen and (max-width:520px){\n\t#header p{ display: none; }\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='header'>\n\t<h1>Snake</h1>\n\t<button (click)=\"actions.start()\">START</button>\n\t<p>SCORE: <br> {{this.getScore()}}</p>\n\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_action_service__ = __webpack_require__("./src/app/services/action.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(actions) {
        this.actions = actions;
    }
    HeaderComponent_1 = HeaderComponent;
    HeaderComponent.prototype.getScore = function () {
        return HeaderComponent_1.SCORE;
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.SCORE = 0;
    HeaderComponent = HeaderComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_action_service__["a" /* ActionService */]])
    ], HeaderComponent);
    return HeaderComponent;
    var HeaderComponent_1;
}());



/***/ }),

/***/ "./src/app/services/action.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_interval__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("./src/app/config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActionService = /** @class */ (function () {
    function ActionService() {
        this.boolSubject2 = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.headSlot$ = this.boolSubject2.asObservable();
        this.directionsQueue = [];
    }
    ActionService_1 = ActionService;
    ActionService.prototype.start = function () {
        var _this = this;
        console.log("START!");
        ActionService_1.STARTED = true;
        var source = Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_interval__["a" /* interval */])(1000 - __WEBPACK_IMPORTED_MODULE_3__config_config__["b" /* SPEED */] * 100);
        source.subscribe(function (val) { return _this.walk(); });
    };
    ActionService.prototype.walk = function () {
        if (ActionService_1.STARTED) {
            if (this.directionsQueue.length > 0) {
                this.changeDirection(this.directionsQueue[0]);
                this.directionsQueue.shift();
            }
            var index = 0;
            var gauge = -1;
            if (ActionService_1.DIRECTION == 1 || ActionService_1.DIRECTION == 3) {
                index = 1;
            }
            if (ActionService_1.DIRECTION == 3 || ActionService_1.DIRECTION == 2) {
                gauge = 1;
            }
            var oldValue = ActionService_1.HEAD[index];
            var newValue = oldValue + gauge;
            if (newValue > __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* GRID */] - 1) {
                newValue = 0;
            }
            else if (newValue < 0) {
                newValue = __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* GRID */] - 1;
            }
            ActionService_1.HEAD[index] = newValue;
            this.headSlot = ActionService_1.HEAD[0] * __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* GRID */] + ActionService_1.HEAD[1];
        }
    };
    ActionService.prototype.ears = function (key) {
        if (!ActionService_1.STARTED && key == 'Enter') {
            this.start();
        }
        else {
            this.directionsQueue.push(key);
        }
    };
    ActionService.prototype.changeDirection = function (key) {
        if (key == 'ArrowLeft' && ActionService_1.DIRECTION % 2 == 0) {
            ActionService_1.DIRECTION = 1;
        }
        else if (key == 'ArrowRight' && ActionService_1.DIRECTION % 2 == 0) {
            ActionService_1.DIRECTION = 3;
        }
        else if (key == 'ArrowDown' && ActionService_1.DIRECTION % 2 != 0) {
            ActionService_1.DIRECTION = 2;
        }
        else if (key == 'ArrowUp' && ActionService_1.DIRECTION % 2 != 0) {
            ActionService_1.DIRECTION = 4;
        }
    };
    Object.defineProperty(ActionService.prototype, "headSlot", {
        set: function (newValue) {
            this.headSlot$ = newValue;
            this.boolSubject2.next(newValue);
        },
        enumerable: true,
        configurable: true
    });
    ActionService.DIRECTION = 1;
    ActionService.HEAD = [__WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* GRID */] / 2, __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* GRID */] / 2 - 1];
    ActionService.STARTED = false;
    ActionService = ActionService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ActionService);
    return ActionService;
    var ActionService_1;
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map