
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/WindowSwitcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFdpbmRvd1N3aXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QiwyQ0FBc0M7QUFDcEUsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUVsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWdEQztRQTlDVyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUN0Qyx3QkFBd0I7UUFDeEIseUNBQXlDO1FBQ3pDLHdCQUF3QjtRQUN4Qix5Q0FBeUM7UUFFakMsbUJBQWEsR0FBVyxJQUFJLENBQUM7UUFDN0IsZUFBUyxHQUEwQixJQUFJLEdBQUcsRUFBRSxDQUFDOztJQXVDekQsQ0FBQztJQXJDYSwrQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSw2QkFBSSxHQUFYLFVBQThCLFVBQXVCO1FBQ2pELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFaEQsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7U0FDckM7UUFFRCxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLGtDQUFTLEdBQWpCLFVBQW9DLFVBQXVCO1FBQ3ZELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUQsSUFBSSxNQUFNLEVBQUU7WUFDUixPQUFPLE1BQVcsQ0FBQztTQUN0QjtRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQWtCLFVBQVUsQ0FBQyxJQUFJLGdCQUFhLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU8sMkNBQWtCLEdBQTFCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0JBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsa0RBQWtEO1FBQ2xELGtEQUFrRDtRQUVsRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDMUIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQzlCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBN0NEO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7c0RBQ2lCO0lBRnJCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FnRGxDO0lBQUQscUJBQUM7Q0FoREQsQUFnREMsQ0FoRDJDLEVBQUUsQ0FBQyxTQUFTLEdBZ0R2RDtrQkFoRG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2luZG93IGZyb20gXCIuL1dpbmRvd1wiO2ltcG9ydCBNYWluV2luZG93IGZyb20gXCIuL01haW5XaW5kb3dcIjtcclxuLy9pbXBvcnQgR2FtZVdpbmRvdyBmcm9tIFwiLi9HYW1lV2luZG93XCI7XHJcbi8vaW1wb3J0IExvc2VXaW5kb3cgZnJvbSBcIi4vTG9zZVdpbmRvd1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvd1N3aXRjaGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShNYWluV2luZG93KVxyXG4gICAgcHJpdmF0ZSBtYWluV2luZG93OiBNYWluV2luZG93ID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShHYW1lV2luZG93KVxyXG4gICAgLy8gcHJpdmF0ZSBnYW1lV2luZG93OiBHYW1lV2luZG93ID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShMb3NlV2luZG93KVxyXG4gICAgLy8gcHJpdmF0ZSBsb3NlV2luZG93OiBMb3NlV2luZG93ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRXaW5kb3c6IFdpbmRvdyA9IG51bGw7XHJcbiAgICBwcml2YXRlIHdpbmRvd01hcDogTWFwPEZ1bmN0aW9uLCBXaW5kb3c+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlV2luZG93c0luQ2hpbGQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdzxUIGV4dGVuZHMgV2luZG93Pih3aW5kb3dUeXBlOiBuZXcgKCkgPT4gVCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHdpbmRvd1RvU2hvdyA9IHRoaXMuR2V0V2luZG93KHdpbmRvd1R5cGUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50V2luZG93ICYmICF3aW5kb3dUb1Nob3cuaXNQb3BVcCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRXaW5kb3cuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF3aW5kb3dUb1Nob3cuaXNQb3BVcCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRXaW5kb3cgPSB3aW5kb3dUb1Nob3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3dUb1Nob3cuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgR2V0V2luZG93PFQgZXh0ZW5kcyBXaW5kb3c+KHdpbmRvd1R5cGU6IG5ldyAoKSA9PiBUKTogVCB7XHJcbiAgICAgICAgY29uc3Qgd2luZG93ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4od2luZG93VHlwZSk7XHJcbiAgICAgICAgaWYgKHdpbmRvdykge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93IGFzIFQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgV2luZG93IG9mIHR5cGUgJHt3aW5kb3dUeXBlLm5hbWV9IG5vdCBmb3VuZC5gKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZGVXaW5kb3dzSW5DaGlsZCgpIHtcclxuICAgICAgICB0aGlzLndpbmRvd01hcC5zZXQoTWFpbldpbmRvdywgdGhpcy5tYWluV2luZG93KTtcclxuICAgICAgICAvL3RoaXMud2luZG93TWFwLnNldChHYW1lV2luZG93LCB0aGlzLmdhbWVXaW5kb3cpO1xyXG4gICAgICAgIC8vdGhpcy53aW5kb3dNYXAuc2V0KExvc2VXaW5kb3csIHRoaXMubG9zZVdpbmRvdyk7XHJcblxyXG4gICAgICAgIHRoaXMud2luZG93TWFwLmZvckVhY2goKHdpbmRvdykgPT4ge1xyXG4gICAgICAgICAgICBpZiAod2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==