
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Double.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '663e27QFitMR6IsAcl5mfYd', 'Double');
// Scripts/Double.ts

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
var PlayerController_1 = require("./PlayerController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Double = /** @class */ (function (_super) {
    __extends(Double, _super);
    function Double() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLLISION_ENTER = 'collision-enter';
        _this.MOVEMENT_COMPLETE = 'movementComplete';
        _this.DOUBLE = 'double';
        _this.boxCollider = null;
        return _this;
    }
    Double.prototype.onLoad = function () {
        this.boxCollider = this.getComponent(cc.BoxCollider);
        this.boxCollider.node.on(this.COLLISION_ENTER, this.onCollisionEnter, this);
        cc.systemEvent.on(this.MOVEMENT_COMPLETE, this.onMovementComplete, this);
    };
    Double.prototype.onDestroy = function () {
        cc.systemEvent.off(this.MOVEMENT_COMPLETE, this.onMovementComplete, this);
    };
    Double.prototype.onCollisionEnter = function (other) {
        if (other.node.getComponent(PlayerController_1.default)) {
            this.node.active = false;
            cc.systemEvent.emit(this.DOUBLE);
        }
    };
    Double.prototype.onMovementComplete = function () {
        this.node.active = false;
    };
    Double = __decorate([
        ccclass
    ], Double);
    return Double;
}(cc.Component));
exports.default = Double;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRG91YmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTZCQztRQTVCb0IscUJBQWUsR0FBVyxpQkFBaUIsQ0FBQztRQUM1Qyx1QkFBaUIsR0FBVyxrQkFBa0IsQ0FBQztRQUMvQyxZQUFNLEdBQVcsUUFBUSxDQUFDO1FBRW5DLGlCQUFXLEdBQW1CLElBQUksQ0FBQzs7SUF3Qi9DLENBQUM7SUF0QmEsdUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU1RSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFUywwQkFBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVPLGlDQUFnQixHQUF4QixVQUF5QixLQUFrQjtRQUN2QyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLDBCQUFnQixDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFFTyxtQ0FBa0IsR0FBMUI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQTVCZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTZCMUI7SUFBRCxhQUFDO0NBN0JELEFBNkJDLENBN0JtQyxFQUFFLENBQUMsU0FBUyxHQTZCL0M7a0JBN0JvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSBcIi4vUGxheWVyQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvdWJsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IENPTExJU0lPTl9FTlRFUjogc3RyaW5nID0gJ2NvbGxpc2lvbi1lbnRlcic7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE1PVkVNRU5UX0NPTVBMRVRFOiBzdHJpbmcgPSAnbW92ZW1lbnRDb21wbGV0ZSc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IERPVUJMRTogc3RyaW5nID0gJ2RvdWJsZSc7XHJcblxyXG4gICAgcHJpdmF0ZSBib3hDb2xsaWRlcjogY2MuQm94Q29sbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlci5ub2RlLm9uKHRoaXMuQ09MTElTSU9OX0VOVEVSLCB0aGlzLm9uQ29sbGlzaW9uRW50ZXIsIHRoaXMpO1xyXG5cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLk1PVkVNRU5UX0NPTVBMRVRFLCB0aGlzLm9uTW92ZW1lbnRDb21wbGV0ZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5NT1ZFTUVOVF9DT01QTEVURSwgdGhpcy5vbk1vdmVtZW50Q29tcGxldGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAob3RoZXIubm9kZS5nZXRDb21wb25lbnQoUGxheWVyQ29udHJvbGxlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KHRoaXMuRE9VQkxFKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk1vdmVtZW50Q29tcGxldGUoKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl19