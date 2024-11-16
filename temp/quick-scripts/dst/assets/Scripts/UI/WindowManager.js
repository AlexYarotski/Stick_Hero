
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WindowManager = /** @class */ (function (_super) {
    __extends(WindowManager, _super);
    function WindowManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.START_GAME = 'startGame';
        _this.windowSwitcher = null;
        return _this;
    }
    WindowManager.prototype.onLoad = function () {
        var _this = this;
        cc.systemEvent.on(this.START_GAME, function () { return _this.windowSwitcher.show(GameWindow_1.default); }, this);
    };
    WindowManager.prototype.onDestroy = function () {
        var _this = this;
        cc.systemEvent.off(this.START_GAME, function () { return _this.windowSwitcher.show(GameWindow_1.default); }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFdpbmRvd01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLDJDQUFzQztBQUN0QywyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFpQkM7UUFoQm9CLGdCQUFVLEdBQVcsV0FBVyxDQUFDO1FBRzFDLG9CQUFjLEdBQW1CLElBQUksQ0FBQzs7SUFhbEQsQ0FBQztJQVhhLDhCQUFNLEdBQWhCO1FBQUEsaUJBRUM7UUFERyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLEVBQXBDLENBQW9DLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVTLGlDQUFTLEdBQW5CO1FBQUEsaUJBRUM7UUFERyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLEVBQXBDLENBQW9DLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVTLDZCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQVpEO1FBREMsUUFBUSxDQUFDLHdCQUFjLENBQUM7eURBQ3FCO0lBSjdCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FpQmpDO0lBQUQsb0JBQUM7Q0FqQkQsQUFpQkMsQ0FqQjBDLEVBQUUsQ0FBQyxTQUFTLEdBaUJ0RDtrQkFqQm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2luZG93U3dpdGNoZXIgZnJvbSBcIi4vV2luZG93U3dpdGNoZXJcIjtcbmltcG9ydCBNYWluV2luZG93IGZyb20gXCIuL01haW5XaW5kb3dcIjtcbmltcG9ydCBHYW1lV2luZG93IGZyb20gXCIuL0dhbWVXaW5kb3dcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3dNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IFNUQVJUX0dBTUU6IHN0cmluZyA9ICdzdGFydEdhbWUnO1xuXG4gICAgQHByb3BlcnR5KFdpbmRvd1N3aXRjaGVyKVxuICAgIHByaXZhdGUgd2luZG93U3dpdGNoZXI6IFdpbmRvd1N3aXRjaGVyID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuU1RBUlRfR0FNRSwgKCkgPT4gdGhpcy53aW5kb3dTd2l0Y2hlci5zaG93KEdhbWVXaW5kb3cpLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5TVEFSVF9HQU1FLCAoKSA9PiB0aGlzLndpbmRvd1N3aXRjaGVyLnNob3coR2FtZVdpbmRvdyksIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdGFydCgpe1xuICAgICAgICB0aGlzLndpbmRvd1N3aXRjaGVyLnNob3coTWFpbldpbmRvdyk7XG4gICAgfVxufVxuIl19