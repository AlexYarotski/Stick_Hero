
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WindowManager = /** @class */ (function (_super) {
    __extends(WindowManager, _super);
    function WindowManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.windowSwitcher = null;
        return _this;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFdpbmRvd01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLDJDQUFzQztBQUVoQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQVFDO1FBTFcsb0JBQWMsR0FBbUIsSUFBSSxDQUFDOztJQUtsRCxDQUFDO0lBSGEsNkJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBSkQ7UUFEQyxRQUFRLENBQUMsd0JBQWMsQ0FBQzt5REFDcUI7SUFIN0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQVFqQztJQUFELG9CQUFDO0NBUkQsQUFRQyxDQVIwQyxFQUFFLENBQUMsU0FBUyxHQVF0RDtrQkFSb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXaW5kb3dTd2l0Y2hlciBmcm9tIFwiLi9XaW5kb3dTd2l0Y2hlclwiO1xuaW1wb3J0IE1haW5XaW5kb3cgZnJvbSBcIi4vTWFpbldpbmRvd1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvd01hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFdpbmRvd1N3aXRjaGVyKVxuICAgIHByaXZhdGUgd2luZG93U3dpdGNoZXI6IFdpbmRvd1N3aXRjaGVyID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBzdGFydCgpe1xuICAgICAgICB0aGlzLndpbmRvd1N3aXRjaGVyLnNob3coTWFpbldpbmRvdyk7XG4gICAgfVxufVxuIl19