"use strict";
cc._RF.push(module, '3ade6F0krtPaIsKQmcVPr/I', 'LoseWindow');
// Scripts/UI/LoseWindow.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Window_1 = require("./Window");
var Button = cc.Button;
var DataCounter_1 = require("../DataCounter");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoseWindow = /** @class */ (function (_super) {
    __extends(LoseWindow, _super);
    function LoseWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MAIN_CLICKED = 'mainClicked';
        _this.RESTART_CLICKED = 'restartClicked';
        _this.main = null;
        _this.restart = null;
        _this.score = null;
        _this.bestScore = null;
        _this.doubleCount = null;
        return _this;
    }
    Object.defineProperty(LoseWindow.prototype, "isPopUp", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    LoseWindow.prototype.onLoad = function () {
        var _this = this;
        this.main.node.on(cc.Node.EventType.TOUCH_END, function () { return cc.systemEvent.emit(_this.MAIN_CLICKED); }, this);
        this.restart.node.on(cc.Node.EventType.TOUCH_END, function () { return cc.systemEvent.emit(_this.RESTART_CLICKED); }, this);
    };
    LoseWindow.prototype.onDestroy = function () {
        var _this = this;
        this.main.node.off(cc.Node.EventType.TOUCH_END, function () { return cc.systemEvent.emit(_this.MAIN_CLICKED); }, this);
        this.restart.node.off(cc.Node.EventType.TOUCH_END, function () { return cc.systemEvent.emit(_this.RESTART_CLICKED); }, this);
    };
    LoseWindow.prototype.show = function () {
        _super.prototype.show.call(this);
        this.score.string = DataCounter_1.default.getScore().toString();
        this.bestScore.string = DataCounter_1.default.getBestScore().toString();
        this.doubleCount.string = DataCounter_1.default.getDoubleCount().toString();
    };
    __decorate([
        property(Button)
    ], LoseWindow.prototype, "main", void 0);
    __decorate([
        property(Button)
    ], LoseWindow.prototype, "restart", void 0);
    __decorate([
        property(cc.Label)
    ], LoseWindow.prototype, "score", void 0);
    __decorate([
        property(cc.Label)
    ], LoseWindow.prototype, "bestScore", void 0);
    __decorate([
        property(cc.Label)
    ], LoseWindow.prototype, "doubleCount", void 0);
    LoseWindow = __decorate([
        ccclass
    ], LoseWindow);
    return LoseWindow;
}(Window_1.default));
exports.default = LoseWindow;

cc._RF.pop();