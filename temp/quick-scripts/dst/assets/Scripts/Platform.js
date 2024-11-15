
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Platform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c5bbgIKeBD4KclH1Q0faJr', 'Platform');
// Scripts/Platform.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Platform = /** @class */ (function (_super) {
    __extends(Platform, _super);
    function Platform() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boxCollider = null;
        return _this;
    }
    Platform.prototype.onLoad = function () {
        if (!this.boxCollider) {
            this.boxCollider = this.getComponent(cc.BoxCollider);
            if (!this.boxCollider) {
                cc.error('BoxCollider отсутствует на ноде платформы.');
                return;
            }
        }
        this.updateColliderSize();
    };
    Platform.prototype.updatePlatformSize = function () {
        this.updateColliderSize();
    };
    Platform.prototype.updateColliderSize = function () {
        if (this.boxCollider) {
            this.boxCollider.size.width = this.node.width;
            this.boxCollider.size.height = this.node.height;
            this.boxCollider.offset = cc.v2(this.node.width / 2, this.node.height / 2);
        }
    };
    __decorate([
        property(cc.BoxCollider)
    ], Platform.prototype, "boxCollider", void 0);
    Platform = __decorate([
        ccclass
    ], Platform);
    return Platform;
}(cc.Component));
exports.default = Platform;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhdGZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE0QkM7UUExQlcsaUJBQVcsR0FBbUIsSUFBSSxDQUFDOztJQTBCL0MsQ0FBQztJQXhCYSx5QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ25CLEVBQUUsQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztnQkFDdkQsT0FBTzthQUNWO1NBQ0o7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0scUNBQWtCLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVTLHFDQUFrQixHQUE1QjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRWhELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlFO0lBQ0wsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNrQjtJQUYxQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNEI1QjtJQUFELGVBQUM7Q0E1QkQsQUE0QkMsQ0E1QnFDLEVBQUUsQ0FBQyxTQUFTLEdBNEJqRDtrQkE1Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Cb3hDb2xsaWRlcilcbiAgICBwcml2YXRlIGJveENvbGxpZGVyOiBjYy5Cb3hDb2xsaWRlciA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xuICAgICAgICBpZiAoIXRoaXMuYm94Q29sbGlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYm94Q29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYm94Q29sbGlkZXIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcignQm94Q29sbGlkZXIg0L7RgtGB0YPRgtGB0YLQstGD0LXRgiDQvdCwINC90L7QtNC1INC/0LvQsNGC0YTQvtGA0LzRiy4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUNvbGxpZGVyU2l6ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVQbGF0Zm9ybVNpemUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29sbGlkZXJTaXplKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUNvbGxpZGVyU2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYm94Q29sbGlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYm94Q29sbGlkZXIuc2l6ZS53aWR0aCA9IHRoaXMubm9kZS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuYm94Q29sbGlkZXIuc2l6ZS5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xuXG4gICAgICAgICAgICB0aGlzLmJveENvbGxpZGVyLm9mZnNldCA9IGNjLnYyKHRoaXMubm9kZS53aWR0aCAvIDIsIHRoaXMubm9kZS5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==