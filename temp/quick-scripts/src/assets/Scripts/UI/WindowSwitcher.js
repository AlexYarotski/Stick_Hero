"use strict";
cc._RF.push(module, '030f9eKWHlDf5tkP7JOpbhf', 'WindowSwitcher');
// Scripts/UI/WindowSwitcher.ts

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
var MainWindow_1 = require("./MainWindow");
//import GameWindow from "./GameWindow";
//import LoseWindow from "./LoseWindow";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WindowSwitcher = /** @class */ (function (_super) {
    __extends(WindowSwitcher, _super);
    function WindowSwitcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainWindow = null;
        // @property(GameWindow)
        // private gameWindow: GameWindow = null;
        // @property(LoseWindow)
        // private loseWindow: LoseWindow = null;
        _this.currentWindow = null;
        _this.windowMap = new Map();
        return _this;
    }
    WindowSwitcher.prototype.onLoad = function () {
        this.hideWindowsInChild();
    };
    WindowSwitcher.prototype.show = function (windowType) {
        var windowToShow = this.GetWindow(windowType);
        if (this.currentWindow && !windowToShow.isPopUp) {
            this.currentWindow.hide();
        }
        if (!windowToShow.isPopUp) {
            this.currentWindow = windowToShow;
        }
        windowToShow.show();
    };
    WindowSwitcher.prototype.GetWindow = function (windowType) {
        var window = this.node.getComponentInChildren(windowType);
        if (window) {
            return window;
        }
        throw new Error("Window of type " + windowType.name + " not found.");
    };
    WindowSwitcher.prototype.hideWindowsInChild = function () {
        this.windowMap.set(MainWindow_1.default, this.mainWindow);
        //this.windowMap.set(GameWindow, this.gameWindow);
        //this.windowMap.set(LoseWindow, this.loseWindow);
        this.windowMap.forEach(function (window) {
            if (window) {
                window.node.active = false;
            }
        });
    };
    __decorate([
        property(MainWindow_1.default)
    ], WindowSwitcher.prototype, "mainWindow", void 0);
    WindowSwitcher = __decorate([
        ccclass
    ], WindowSwitcher);
    return WindowSwitcher;
}(cc.Component));
exports.default = WindowSwitcher;

cc._RF.pop();