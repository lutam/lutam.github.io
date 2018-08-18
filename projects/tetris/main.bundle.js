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

module.exports = "#app{ display: block; margin-left: auto; margin-right: auto; }\n\naside{ width: 100%; overflow:hidden; display: block; background-color: #212121; height: 100px;\npadding: 10px;\n-webkit-box-sizing: border-box;\n        box-sizing: border-box; }\n\n#dashboard{ float: left; width: 25%;  }\n\n#dashboard .ctrl{ float: left; color: white; display: inline-block; width: 50%; }\n\n#score{ float: right;  width: 50%; height: 100%; display: table; }\n\n#score * { text-align: center; }\n\n#score div{ width: 50%; float: left; }\n\n#score div h2{ color: white; font-family: sans-serif; font-size:20px; font-weight: bolder; }\n\n#score div p{ color: white; font-family: sans-serif; font-size: 16px; }\n\nh1.popupped{ display: inline-block !important; }\n\n#commands{ display:none;  width: 50vw; margin-left: auto; margin-right: auto; }\n\n#commands span{ cursor:pointer; width: 11vw; margin-top: 2vw; margin-right:2vw; height:11vw; background:rgba(255, 255, 255, 0.45); border-radius:5px;  text-align:center; display: table; float: left;  }\n\n#commands span:last-child{ margin-right: 0; }\n\n#commands span:hover{ color:white; background-color: #333; }\n\n#commands span i{ display: table-cell; vertical-align: middle; font-size: 27px; }\n\n@media only screen and (max-width:900px) and (min-width: 769px){\n\t#commands{ display: block; }\n}\n\n@media only screen and (max-width: 768px){\n\t#commands{ width: 90vw; display: block; }\n\t#commands span{ width: 20vw; margin-right: 3.333vw; height: 20vw;  }\n}\n\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 [class.popupped]=\"isGameOver\" style=\"position: absolute; z-index: 10; display: none; height:150px; top:50px; background-color: rgba(0.7,23,74,140); width: 50%; margin-left: 25%; color:yellow;\">\n\tGAME OVER <br>\n\t\t\t\t<button (click)='restart()'>RESTART</button>\n\n</h1>\n\n<div id='app' [style.width.px]='appWidth' >\n\t<aside >\n\t\t<div id='dashboard' style=\"float: left;\">\n\t\t\t<i class=\"ctrl fa fa-play\" (click)='pause()'></i>\n\t\t\t\n\t\t\t<i class=\"ctrl fa fa-pause\" (click)='restart()'></i>\n\t\t</div>\t\n\t\t<app-next style='float:left;' [nextId]='nextId'></app-next>\n\n\t\t<div id='score' >\n\t\t\t<div>\n\t\t\t<h2>SCORE</h2> \n\t\t\t<p>{{score}}</p>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t<h2>BEST</h2>\n\t\t\t<p>{{bestScore}}</p>\n\t\t\t</div>\n\t\t</div>\n\t</aside>\n\t<app-chessboard (changeNext)=\"nextId= $event\" (declareGameOver)='gameOver()' (updateScore)=\"updateScore($event)\" [gameId]='gameId'></app-chessboard>\n\t\n</div>\n\n<div id=\"commands\" >\n\t<span (click)=\"action.hearKey('ArrowLeft')\"> <i class=\"fas fa-long-arrow-alt-left\"></i> </span>\n\t<span (click)=\"action.hearKey('ArrowRight')\"> <i class=\"fas fa-long-arrow-alt-right\"></i> </span> \n\t<span (click)=\"action.hearKey('ArrowDown')\"> <i class=\"fas fa-long-arrow-alt-down\"></i> </span>\n\t<span (click)=\"action.hearKey('ArrowUp')\"> <i class=\"fas rotate fa-sync-alt\"></i> </span>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_action_service__ = __webpack_require__("./src/services/action.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__("./src/app/config/config.ts");
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
    function AppComponent(action) {
        this.action = action;
        this.gameId = 0;
        this.score = 0;
        this.bestScore = 0;
        this.isGameOver = false;
        action.start();
        this.appWidth = ((__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* CONFIG_HORIZONTAL_GRID */]) * (__WEBPACK_IMPORTED_MODULE_2__config_config__["b" /* CONFIG_SLOT_WIDTH */] + 2));
        this.asideWidth = 4 * (__WEBPACK_IMPORTED_MODULE_2__config_config__["b" /* CONFIG_SLOT_WIDTH */] + 2);
    }
    AppComponent.prototype.pause = function () {
        this.action.togglePause();
    };
    AppComponent.prototype.restart = function () {
        this.pause();
        this.isGameOver = false;
        this.score = 0;
        this.gameId++;
    };
    AppComponent.prototype.gameOver = function () {
        this.pause();
        this.isGameOver = true;
    };
    AppComponent.prototype.updateScore = function (add) {
        this.score += add;
        this.bestScore = Math.max(this.score, this.bestScore);
    };
    AppComponent.prototype.openEars = function (event) {
        this.action.hearKey(event.key);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chessboard_chessboard_component__ = __webpack_require__("./src/app/chessboard/chessboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__next_next_component__ = __webpack_require__("./src/app/next/next.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_action_service__ = __webpack_require__("./src/services/action.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_piece_service__ = __webpack_require__("./src/services/piece.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_3__chessboard_chessboard_component__["a" /* ChessboardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__next_next_component__["a" /* NextComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_action_service__["a" /* ActionService */], __WEBPACK_IMPORTED_MODULE_6__services_piece_service__["a" /* PieceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chessboard/chessboard.component.css":
/***/ (function(module, exports) {

module.exports = "#chessboard {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  float: left; }\n\n.slot {\n  float: left;\n  border: 1px solid #3db7cc;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: rgba(255, 255, 255, 0.45);\n  box-sizing: border-box; }\n\n.slot1 {\n  background: #1E88E5; }\n\n/*celeste*/\n\n.slot2 {\n  background: #69F0AE; }\n\n/*verde*/\n\n.slot3 {\n  background: #F4511E; }\n\n/* rossarancione */\n\n.slot4 {\n  background: #C2185B; }\n\n/* rosa */\n\n.slot5 {\n  background: #FDD835; }\n\n/*giallo */\n\n.slot6 {\n  background: #8E24AA; }\n\n/* viola */\n\n.slot7 {\n  background: #c62828; }\n\n/*arancione*/\n"

/***/ }),

/***/ "./src/app/chessboard/chessboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='chessboard'  [ngStyle]=\"{'width' : chessboardWidth, 'height': chessboardHeight}\">\n\t<div *ngFor=\"let slot_row of this.slots; let i= index\" >\n\t\t<div *ngFor=\"let slot of slot_row; let j= index\" class=\"slot slot{{slot.value}}\" [ngStyle]=\"{'width': slotWidth, 'height': slotWidth}\">\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/chessboard/chessboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChessboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config__ = __webpack_require__("./src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slot__ = __webpack_require__("./src/app/chessboard/slot.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_action_service__ = __webpack_require__("./src/services/action.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_piece_service__ = __webpack_require__("./src/services/piece.service.ts");
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
        this.changeNext = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.updateScore = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.declareGameOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.chessboardWidth = ((__WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* CONFIG_HORIZONTAL_GRID */]) * (__WEBPACK_IMPORTED_MODULE_1__config_config__["b" /* CONFIG_SLOT_WIDTH */] + 2)) + "px";
        this.chessboardHeight = ((__WEBPACK_IMPORTED_MODULE_1__config_config__["c" /* CONFIG_VERTICAL_GRID */]) * (__WEBPACK_IMPORTED_MODULE_1__config_config__["b" /* CONFIG_SLOT_WIDTH */] + 2)) + "px";
        this.slotWidth = __WEBPACK_IMPORTED_MODULE_1__config_config__["b" /* CONFIG_SLOT_WIDTH */] + 2 + "px";
        this.slots = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__config_config__["c" /* CONFIG_VERTICAL_GRID */]; i++) {
            this.slots[i] = [];
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* CONFIG_HORIZONTAL_GRID */]; j++) {
                this.slots[i][j] = new __WEBPACK_IMPORTED_MODULE_2__slot__["a" /* Slot */](i, j, 0);
            }
        }
        this.actions.frame$.subscribe(function (newFrame) {
            _this.movePiece([1, 0]);
        });
        this.actions.movement$.subscribe(function (newMovement) {
            _this.movePiece([0, newMovement]);
        });
        this.actions.rotate$.subscribe(function (newRotation) {
            _this.piece.slots = _this.piece.rotatePiece(newRotation);
            for (var i = 0; i < _this.piece.slots.length; i++) {
                var pieceI = _this.piece.slots[i].i;
                var pieceJ = _this.piece.slots[i].j;
                for (var gaugeI = -3; gaugeI < 3; gaugeI++) {
                    for (var gaugeJ = -3; gaugeJ < 3; gaugeJ++) {
                        var tmpI = pieceI + gaugeI;
                        var tmpJ = pieceJ + gaugeJ;
                        if (tmpI > 0 && tmpI < __WEBPACK_IMPORTED_MODULE_1__config_config__["c" /* CONFIG_VERTICAL_GRID */] && tmpJ > 0 && tmpJ < __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* CONFIG_HORIZONTAL_GRID */]) {
                            if (_this.slots[tmpI][tmpJ].value != 0 && !_this.slots[tmpI][tmpJ].stopped) {
                                _this.slots[tmpI][tmpJ].value = 0;
                            }
                        }
                    }
                }
            }
            _this.movePiece([0, 0]);
        });
    }
    ChessboardComponent.prototype.movePiece = function (d) {
        var justDeployed = false;
        if (typeof this.piece == 'undefined') {
            justDeployed = true;
            this.deploy();
        }
        for (var i = 0; i < this.piece.slots.length; i++) {
            var p = this.piece.slots[i];
            if (p.i < __WEBPACK_IMPORTED_MODULE_1__config_config__["c" /* CONFIG_VERTICAL_GRID */] && p.j < __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* CONFIG_HORIZONTAL_GRID */] && p.j >= 0) {
                if ((p.i + d[0] == __WEBPACK_IMPORTED_MODULE_1__config_config__["c" /* CONFIG_VERTICAL_GRID */] || this.slots[p.i + d[0]][p.j].stopped) && p.value != 0) {
                    this.stopAndEvaluatePoints();
                    return;
                }
                else if ((p.j + d[1] < 0 || p.j + d[1] == __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* CONFIG_HORIZONTAL_GRID */] || this.slots[p.i][p.j + d[1]].stopped) && p.value != 0) {
                    return;
                }
            }
        }
        if (!justDeployed) {
            if (d[1] == -1) {
                for (var i = 0; i < this.piece.slots.length; i++) {
                    this.executeNextStep(i, d);
                }
            }
            else {
                for (var i = this.piece.slots.length - 1; i >= 0; i--) {
                    this.executeNextStep(i, d);
                }
            }
        }
    };
    ChessboardComponent.prototype.deploy = function () {
        this.piece = new __WEBPACK_IMPORTED_MODULE_4__services_piece_service__["a" /* PieceService */]();
        this.changeNext.emit(this.piece.getQueueType());
        for (var i = 0; i < this.piece.slots.length; i++) {
            if (this.piece.slots[i].value != 0) {
                console.log(this.piece.slots[i].i, this.piece.slots[i].j, this.piece.slots[i].value);
                this.slots[this.piece.slots[i].i][this.piece.slots[i].j].value = this.piece.slots[i].value;
            }
        }
        this.checkIsNotGameOver();
    };
    ChessboardComponent.prototype.checkIsNotGameOver = function () {
        for (var i = 0; i < this.piece.slots.length; i++) {
            if (this.piece.slots[i].value != 0 && this.slots[this.piece.slots[i].i][this.piece.slots[i].j].stopped) {
                this.declareGameOver.emit(1);
                return;
            }
        }
    };
    ChessboardComponent.prototype.stopAndEvaluatePoints = function () {
        for (var i = this.piece.slots.length - 1; i >= 0; i--) {
            if (this.piece.slots[i].value != 0) {
                this.slots[this.piece.slots[i].i][this.piece.slots[i].j].stopped = true;
            }
        }
        var riga = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__config_config__["c" /* CONFIG_VERTICAL_GRID */]; i++) {
            riga[i] = 0;
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* CONFIG_HORIZONTAL_GRID */]; j++) {
                if (this.slots[i][j].value != 0) {
                    riga[i]++;
                }
            }
        }
        for (var k = 0; k < riga.length; k++) {
            if (riga[k] == __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* CONFIG_HORIZONTAL_GRID */]) {
                var quante = k;
                do {
                    k++;
                } while (riga[k] == __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* CONFIG_HORIZONTAL_GRID */]);
                for (var i = k - 1; i > k - quante; i--) {
                    for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* CONFIG_HORIZONTAL_GRID */]; j++) {
                        this.slots[i][j].value = this.slots[i - (k - quante)][j].value;
                        this.slots[i][j].stopped = this.slots[i - (k - quante)][j].stopped;
                    }
                }
                console.log('ELIMINO', k - quante, 'RIGHE');
                this.updateScore.emit((k - quante) * (k - quante));
            }
        }
        delete this.piece;
    };
    ChessboardComponent.prototype.executeNextStep = function (i, d) {
        if (this.piece.slots[i].i <= __WEBPACK_IMPORTED_MODULE_1__config_config__["c" /* CONFIG_VERTICAL_GRID */] && this.piece.slots[i].j < __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* CONFIG_HORIZONTAL_GRID */]) {
            if (this.piece.slots[i].value != 0) {
                this.slots[this.piece.slots[i].i][this.piece.slots[i].j].value = 0;
            }
            this.piece.slots[i].i += d[0];
            this.piece.slots[i].j += d[1];
            if (this.piece.slots[i].value != 0) {
                this.slots[this.piece.slots[i].i][this.piece.slots[i].j].value = this.piece.slots[i].value;
            }
        }
    };
    ChessboardComponent.prototype.clearChessboard = function () {
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__config_config__["c" /* CONFIG_VERTICAL_GRID */]; i++) {
            this.slots[i] = [];
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* CONFIG_HORIZONTAL_GRID */]; j++) {
                this.slots[i][j] = new __WEBPACK_IMPORTED_MODULE_2__slot__["a" /* Slot */](i, j, 0);
            }
        }
        delete this.piece;
    };
    ChessboardComponent.prototype.ngOnChanges = function (changes) {
        this.clearChessboard();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], ChessboardComponent.prototype, "changeNext", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], ChessboardComponent.prototype, "updateScore", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], ChessboardComponent.prototype, "declareGameOver", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Number)
    ], ChessboardComponent.prototype, "gameId", void 0);
    ChessboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-chessboard',
            template: __webpack_require__("./src/app/chessboard/chessboard.component.html"),
            styles: [__webpack_require__("./src/app/chessboard/chessboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_action_service__["a" /* ActionService */]])
    ], ChessboardComponent);
    return ChessboardComponent;
}());



/***/ }),

/***/ "./src/app/chessboard/slot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slot; });
var Slot = /** @class */ (function () {
    function Slot(_i, _j, _value) {
        //this.id = _i*CONFIG_HORIZONTAL_GRID + _j;
        this.value = _value;
        this.i = _i;
        this.j = _j;
        this.stopped = false;
    }
    return Slot;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG_HORIZONTAL_GRID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CONFIG_VERTICAL_GRID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CONFIG_SLOT_WIDTH; });
var CONFIG_HORIZONTAL_GRID = 10;
var CONFIG_VERTICAL_GRID = 15;
var wv = window.screen.width;
var wh = window.screen.height - 150;
if (wh <= 900 && wh > 768) {
    wh -= 0.13 * wv;
}
else if (wh <= 768) {
    wh -= 0.22 * wv;
}
console.log(wv);
console.log(wh);
var sw = 40 + 2;
if (wv < CONFIG_HORIZONTAL_GRID * sw && wh > CONFIG_VERTICAL_GRID * sw) {
    console.log(9);
    sw = wv / CONFIG_HORIZONTAL_GRID - 4;
}
else if (wv > CONFIG_HORIZONTAL_GRID * sw && wh < CONFIG_VERTICAL_GRID * sw) {
    console.log(12);
    sw = wh / CONFIG_VERTICAL_GRID - 4;
}
else if (wv < CONFIG_HORIZONTAL_GRID * sw && wh < CONFIG_VERTICAL_GRID * sw) {
    console.log(15);
    sw = wh / CONFIG_VERTICAL_GRID - 4;
}
else {
    console.log(22);
    sw = 40;
}
var CONFIG_SLOT_WIDTH = sw;


/***/ }),

/***/ "./src/app/next/next.component.css":
/***/ (function(module, exports) {

module.exports = "\n.slot1{ background:#1E88E5; } /*celeste*/ .slot2{ background: #4CAF50; } /*verde*/ .slot3{ background: #F4511E; } /* rossarancione */ .slot4{ background: #C2185B; } /* rosa */ .slot5{ background: #FDD835; } /*giallo */ .slot6{ background: #8E24AA; } /* viola */ .slot7{ background: #c62828;} /*arancione*/ @media only screen and (max-width: 900px){\n\t#nextpiece{ display: none; }\n}"

/***/ }),

/***/ "./src/app/next/next.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div [style.width.px]='rowsNumber' id='nextpiece' style='float:left; '>\n<div *ngFor='let slot of nextpiece.slots' style=\"float:left; width:20px; height:20px;\" class=\"slot{{slot.value}}\">\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/next/next.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_piece_service__ = __webpack_require__("./src/services/piece.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NextComponent = /** @class */ (function () {
    function NextComponent() {
    }
    NextComponent.prototype.ngOnChanges = function (changes) {
        this.nextpiece = new __WEBPACK_IMPORTED_MODULE_1__services_piece_service__["a" /* PieceService */](changes.nextId.currentValue);
        this.rowsNumber = Math.sqrt(this.nextpiece.slots.length) * 20;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Number)
    ], NextComponent.prototype, "nextId", void 0);
    NextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-next',
            template: __webpack_require__("./src/app/next/next.component.html"),
            styles: [__webpack_require__("./src/app/next/next.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NextComponent);
    return NextComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/action.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_interval__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
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
        this.isPause = false;
        this.frameSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.frame$ = this.frameSubject.asObservable();
        this.movementSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.movement$ = this.movementSubject.asObservable();
        this.rotateSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.rotate$ = this.rotateSubject.asObservable();
    }
    ActionService_1 = ActionService;
    ActionService.prototype.start = function () {
        var _this = this;
        this.intervalSource = Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_interval__["a" /* interval */])(600);
        this.intervalSource.subscribe(function (val) { return _this.nextFrame(); });
    };
    ActionService.prototype.togglePause = function () {
        this.isPause = this.isPause ? false : true;
    };
    ActionService.prototype.nextFrame = function () {
        if (!this.isPause) {
            ActionService_1.CURRENTFRAME++;
            this.frame = ActionService_1.CURRENTFRAME;
        }
    };
    Object.defineProperty(ActionService.prototype, "frame", {
        set: function (newValue) {
            this.frame$ = newValue;
            this.frameSubject.next(newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionService.prototype, "movement", {
        set: function (newValue) {
            this.movement$ = newValue;
            this.movementSubject.next(newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionService.prototype, "rotate", {
        set: function (newValue) {
            this.rotate$ = newValue;
            this.rotateSubject.next(newValue);
        },
        enumerable: true,
        configurable: true
    });
    ActionService.prototype.hearKey = function (key) {
        if (key == 'ArrowLeft') {
            this.movement = -1;
        }
        else if (key == 'ArrowRight') {
            this.movement = 1;
        }
        else if (key == 'ArrowDown') {
            this.nextFrame();
        }
        else if (key == 'ArrowUp') {
            this.rotate = 1;
        }
        //else if( key == 'z' || key=='Z'){ this.rotate= -1; }
    };
    ActionService.CURRENTFRAME = 0;
    ActionService = ActionService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ActionService);
    return ActionService;
    var ActionService_1;
}());



/***/ }),

/***/ "./src/services/piece.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_chessboard_slot__ = __webpack_require__("./src/app/chessboard/slot.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config_config__ = __webpack_require__("./src/app/config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ELLE = [];
var SQUARE = [];
var LONG = [];
var TI = [];
var ESSE = [];
var REVERSE_ESSE = [];
var REVERSE_ELLE = [];
ELLE['s'] = [[1, 1, 0], [1, 0, 0], [1, 0, 0]];
ELLE['l'] = 2;
ELLE['c'] = 1;
REVERSE_ELLE['s'] = [[0, 1, 1], [0, 0, 1], [0, 0, 1]];
REVERSE_ELLE['l'] = 2;
REVERSE_ELLE['c'] = 2;
SQUARE['s'] = [[1, 1], [1, 1]];
SQUARE['l'] = 1;
SQUARE['c'] = 3;
LONG['s'] = [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]];
LONG['l'] = 3;
LONG['c'] = 4;
TI['s'] = [[1, 1, 1], [0, 1, 0], [0, 0, 0]];
TI['l'] = 2;
TI['c'] = 5;
ESSE['s'] = [[1, 0, 0], [1, 1, 0], [0, 1, 0]];
ESSE['l'] = 2;
ESSE['c'] = 6;
REVERSE_ESSE['s'] = [[0, 0, 1], [0, 1, 1], [0, 1, 0]];
REVERSE_ESSE['l'] = 2;
REVERSE_ESSE['c'] = 7;
var TYPES = [ELLE, REVERSE_ELLE, SQUARE, LONG, TI, ESSE, REVERSE_ESSE];
var PieceService = /** @class */ (function () {
    function PieceService(specificType) {
        this.slots = [];
        var d = new Date();
        if (typeof specificType == 'undefined') {
            this.type = PieceService_1.queueType;
            PieceService_1.queueType = Math.round(Math.random() * 6);
        }
        else {
            this.type = specificType;
        }
        this.initPiece();
    }
    PieceService_1 = PieceService;
    PieceService.prototype.initPiece = function () {
        var p = TYPES[this.type]['s'];
        var l = p.length;
        var b = Math.floor(Math.random() * (__WEBPACK_IMPORTED_MODULE_2__app_config_config__["a" /* CONFIG_HORIZONTAL_GRID */] - l));
        for (var i = 0; i < l; i++) {
            for (var j = 0; j < l; j++) {
                var color = 0;
                if (p[i][j] == 1) {
                    color = TYPES[this.type]['c'];
                }
                this.slots.push(new __WEBPACK_IMPORTED_MODULE_1__app_chessboard_slot__["a" /* Slot */](i, j + b, color));
            }
        }
    };
    PieceService.prototype.getQueueType = function () {
        return PieceService_1.queueType;
    };
    PieceService.prototype.rotatePiece = function (direction) {
        var tmp = [];
        for (var i = 0; i < this.slots.length; i++) {
            var r = Math.floor(i / TYPES[this.type]['s'].length);
            var c = i - TYPES[this.type]['s'].length * r;
            tmp.push([r, c, this.slots[i].value]);
        }
        var pptmp = [];
        for (var i = 0; i < this.slots.length; i++) {
            var oldr = Math.floor(i / TYPES[this.type]['s'].length);
            var oldc = i - TYPES[this.type]['s'].length * oldr;
            var newr = TYPES[this.type]['s'].length - 1 - oldc;
            var newc = oldr;
            var newi = newr * TYPES[this.type]['s'].length + newc;
            pptmp[i] = [tmp[i][0], tmp[i][1], tmp[newi][2]];
        }
        var newTmp = [];
        for (var i = 0; i < this.slots.length; i++) {
            newTmp[i] = [this.slots[0].i + pptmp[i][0], this.slots[0].j + pptmp[i][1], pptmp[i][2]];
        }
        var toret = [];
        for (var i = 0; i < this.slots.length; i++) {
            toret.push(new __WEBPACK_IMPORTED_MODULE_1__app_chessboard_slot__["a" /* Slot */](newTmp[i][0], newTmp[i][1], newTmp[i][2]));
        }
        return toret;
    };
    PieceService.queueType = Math.round(Math.random() * 6);
    PieceService = PieceService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Optional */])()),
        __metadata("design:paramtypes", [Number])
    ], PieceService);
    return PieceService;
    var PieceService_1;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map