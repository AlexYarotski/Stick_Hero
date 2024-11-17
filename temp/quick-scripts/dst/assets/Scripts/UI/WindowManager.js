
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/WindowManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1def7mJc7dJAI5DfR1iuFdb', 'WindowManager');
// Scripts/UI/WindowManager.ts

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
var WindowSwitcher_1 = require("./WindowSwitcher");
var MainWindow_1 = require("./MainWindow");
var GameWindow_1 = require("./GameWindow");
var LoseWindow_1 = require("./LoseWindow");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WindowManager = /** @class */ (function (_super) {
    __extends(WindowManager, _super);
    function WindowManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.START_GAME = 'startGame';
        _this.PLAYER_FALL = 'playerFall';
        _this.MAIN_CLICKED = 'mainClicked';
        _this.RESTART_CLICKED = 'restartClicked';
        _this.windowSwitcher = null;
        return _this;
    }
    WindowManager.prototype.onLoad = function () {
        var _this = this;
        cc.systemEvent.on(this.START_GAME, function () { return _this.windowSwitcher.show(GameWindow_1.default); }, this);
        cc.systemEvent.on(this.PLAYER_FALL, function () { return _this.windowSwitcher.show(LoseWindow_1.default); }, this);
        cc.systemEvent.on(this.MAIN_CLICKED, function () { return _this.windowSwitcher.show(MainWindow_1.default); }, this);
        cc.systemEvent.on(this.RESTART_CLICKED, function () { return _this.windowSwitcher.show(GameWindow_1.default); }, this);
    };
    WindowManager.prototype.onDestroy = function () {
        var _this = this;
        cc.systemEvent.off(this.START_GAME, function () { return _this.windowSwitcher.show(GameWindow_1.default); }, this);
        cc.systemEvent.off(this.PLAYER_FALL, function () { return _this.windowSwitcher.show(LoseWindow_1.default); }, this);
        cc.systemEvent.off(this.MAIN_CLICKED, function () { return _this.windowSwitcher.show(MainWindow_1.default); }, this);
        cc.systemEvent.off(this.RESTART_CLICKED, function () { return _this.windowSwitcher.show(GameWindow_1.default); }, this);
    };
    WindowManager.prototype.start = function () {
        this.windowSwitcher.show(MainWindow_1.default);
    };
    __decorate([
        property(WindowSwitcher_1.default)
    ], WindowManager.prototype, "windowSwitcher", void 0);
    WindowManager = __decorate([
        ccclass
    ], WindowManager);
    return WindowManager;
}(cc.Component));
exports.default = WindowManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFdpbmRvd01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLDJDQUFzQztBQUN0QywyQ0FBc0M7QUFDdEMsMkNBQXNDO0FBRWhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBMEJDO1FBekJvQixnQkFBVSxHQUFXLFdBQVcsQ0FBQztRQUNqQyxpQkFBVyxHQUFXLFlBQVksQ0FBQztRQUNuQyxrQkFBWSxHQUFXLGFBQWEsQ0FBQztRQUNyQyxxQkFBZSxHQUFXLGdCQUFnQixDQUFDO1FBR3BELG9CQUFjLEdBQW1CLElBQUksQ0FBQzs7SUFtQmxELENBQUM7SUFqQmEsOEJBQU0sR0FBaEI7UUFBQSxpQkFLQztRQUpHLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsRUFBcEMsQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLEVBQXBDLENBQW9DLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEYsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxFQUFwQyxDQUFvQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZGLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsRUFBcEMsQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRVMsaUNBQVMsR0FBbkI7UUFBQSxpQkFLQztRQUpHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsRUFBcEMsQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RixFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLEVBQXBDLENBQW9DLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkYsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxFQUFwQyxDQUFvQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hGLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsRUFBcEMsQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRVMsNkJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBbEJEO1FBREMsUUFBUSxDQUFDLHdCQUFjLENBQUM7eURBQ3FCO0lBUDdCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0EwQmpDO0lBQUQsb0JBQUM7Q0ExQkQsQUEwQkMsQ0ExQjBDLEVBQUUsQ0FBQyxTQUFTLEdBMEJ0RDtrQkExQm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2luZG93U3dpdGNoZXIgZnJvbSBcIi4vV2luZG93U3dpdGNoZXJcIjtcbmltcG9ydCBNYWluV2luZG93IGZyb20gXCIuL01haW5XaW5kb3dcIjtcbmltcG9ydCBHYW1lV2luZG93IGZyb20gXCIuL0dhbWVXaW5kb3dcIjtcbmltcG9ydCBMb3NlV2luZG93IGZyb20gXCIuL0xvc2VXaW5kb3dcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3dNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IFNUQVJUX0dBTUU6IHN0cmluZyA9ICdzdGFydEdhbWUnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgUExBWUVSX0ZBTEw6IHN0cmluZyA9ICdwbGF5ZXJGYWxsJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IE1BSU5fQ0xJQ0tFRDogc3RyaW5nID0gJ21haW5DbGlja2VkJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IFJFU1RBUlRfQ0xJQ0tFRDogc3RyaW5nID0gJ3Jlc3RhcnRDbGlja2VkJztcblxuICAgIEBwcm9wZXJ0eShXaW5kb3dTd2l0Y2hlcilcbiAgICBwcml2YXRlIHdpbmRvd1N3aXRjaGVyOiBXaW5kb3dTd2l0Y2hlciA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlNUQVJUX0dBTUUsICgpID0+IHRoaXMud2luZG93U3dpdGNoZXIuc2hvdyhHYW1lV2luZG93KSwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuUExBWUVSX0ZBTEwsICgpID0+IHRoaXMud2luZG93U3dpdGNoZXIuc2hvdyhMb3NlV2luZG93KSwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuTUFJTl9DTElDS0VELCAoKSA9PiB0aGlzLndpbmRvd1N3aXRjaGVyLnNob3coTWFpbldpbmRvdyksIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlJFU1RBUlRfQ0xJQ0tFRCwgKCkgPT4gdGhpcy53aW5kb3dTd2l0Y2hlci5zaG93KEdhbWVXaW5kb3cpLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5TVEFSVF9HQU1FLCAoKSA9PiB0aGlzLndpbmRvd1N3aXRjaGVyLnNob3coR2FtZVdpbmRvdyksIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5QTEFZRVJfRkFMTCwgKCkgPT4gdGhpcy53aW5kb3dTd2l0Y2hlci5zaG93KExvc2VXaW5kb3cpLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuTUFJTl9DTElDS0VELCAoKSA9PiB0aGlzLndpbmRvd1N3aXRjaGVyLnNob3coTWFpbldpbmRvdyksIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5SRVNUQVJUX0NMSUNLRUQsICgpID0+IHRoaXMud2luZG93U3dpdGNoZXIuc2hvdyhHYW1lV2luZG93KSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCl7XG4gICAgICAgIHRoaXMud2luZG93U3dpdGNoZXIuc2hvdyhNYWluV2luZG93KTtcbiAgICB9XG59XG4iXX0=