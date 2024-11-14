
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PlatformSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbcd75L1a9BBLSrHghUc+6U', 'PlatformSpawner');
// Scripts/PlatformSpawner.ts

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
var PlatformSpawner = /** @class */ (function (_super) {
    __extends(PlatformSpawner, _super);
    function PlatformSpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.platformPrefab = null;
        _this.minWidth = 50;
        _this.maxWidth = 200;
        _this.minXOffset = 100;
        _this.maxXOffset = 400;
        _this.platformAppearTime = 0.5; // Время появления платформы снизу вверх
        return _this;
    }
    PlatformSpawner.prototype.spawnPlatform = function (previousPlatformPosition) {
        var newPlatform = cc.instantiate(this.platformPrefab);
        var platformWidth = this.minWidth + Math.random() * (this.maxWidth - this.minWidth);
        newPlatform.width = platformWidth;
        if (previousPlatformPosition) {
            newPlatform.setPosition(cc.v2(previousPlatformPosition.x, -708)); // Появляется сразу
        }
        else {
            // Если позиция не передана, используем случайное значение
            var newPositionX = -240 + Math.random() * (400 - (-240)); // Случайное значение в промежутке [-240, 400]
            newPlatform.setPosition(cc.v2(newPositionX, -1080)); // Начальная позиция снизу экрана
            // Анимация появления снизу вверх
            cc.tween(newPlatform)
                .to(this.platformAppearTime, { position: cc.v3(newPositionX, -708) }, { easing: 'cubicOut' })
                .start();
        }
        this.node.addChild(newPlatform);
        return newPlatform;
    };
    __decorate([
        property(cc.Prefab)
    ], PlatformSpawner.prototype, "platformPrefab", void 0);
    __decorate([
        property
    ], PlatformSpawner.prototype, "minWidth", void 0);
    __decorate([
        property
    ], PlatformSpawner.prototype, "maxWidth", void 0);
    __decorate([
        property
    ], PlatformSpawner.prototype, "minXOffset", void 0);
    __decorate([
        property
    ], PlatformSpawner.prototype, "maxXOffset", void 0);
    __decorate([
        property
    ], PlatformSpawner.prototype, "platformAppearTime", void 0);
    PlatformSpawner = __decorate([
        ccclass
    ], PlatformSpawner);
    return PlatformSpawner;
}(cc.Component));
exports.default = PlatformSpawner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhdGZvcm1TcGF3bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBd0NDO1FBdENHLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBR2pDLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFHdEIsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUd2QixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUd6QixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUd6Qix3QkFBa0IsR0FBVyxHQUFHLENBQUMsQ0FBQyx3Q0FBd0M7O0lBdUI5RSxDQUFDO0lBckJVLHVDQUFhLEdBQXBCLFVBQXFCLHdCQUFrQztRQUNuRCxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4RCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RGLFdBQVcsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1FBRWxDLElBQUksd0JBQXdCLEVBQUU7WUFDMUIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7U0FDeEY7YUFBTTtZQUNILDBEQUEwRDtZQUN6RCxJQUFNLFlBQVksR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyw4Q0FBOEM7WUFDM0csV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQ0FBaUM7WUFFdEYsaUNBQWlDO1lBQ2pDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2lCQUNoQixFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQztpQkFDNUYsS0FBSyxFQUFFLENBQUM7U0FDaEI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBckNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkRBQ2E7SUFHakM7UUFEQyxRQUFRO3FEQUNhO0lBR3RCO1FBREMsUUFBUTtxREFDYztJQUd2QjtRQURDLFFBQVE7dURBQ2dCO0lBR3pCO1FBREMsUUFBUTt1REFDZ0I7SUFHekI7UUFEQyxRQUFROytEQUN3QjtJQWpCaEIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXdDbkM7SUFBRCxzQkFBQztDQXhDRCxBQXdDQyxDQXhDNEMsRUFBRSxDQUFDLFNBQVMsR0F3Q3hEO2tCQXhDb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybVNwYXduZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcGxhdGZvcm1QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICBtaW5XaWR0aDogbnVtYmVyID0gNTA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBtYXhXaWR0aDogbnVtYmVyID0gMjAwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgbWluWE9mZnNldDogbnVtYmVyID0gMTAwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgbWF4WE9mZnNldDogbnVtYmVyID0gNDAwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgcGxhdGZvcm1BcHBlYXJUaW1lOiBudW1iZXIgPSAwLjU7IC8vINCS0YDQtdC80Y8g0L/QvtGP0LLQu9C10L3QuNGPINC/0LvQsNGC0YTQvtGA0LzRiyDRgdC90LjQt9GDINCy0LLQtdGA0YVcblxuICAgIHB1YmxpYyBzcGF3blBsYXRmb3JtKHByZXZpb3VzUGxhdGZvcm1Qb3NpdGlvbj86IGNjLlZlYzIpOiBjYy5Ob2RlIHtcbiAgICAgICAgY29uc3QgbmV3UGxhdGZvcm0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYXRmb3JtUHJlZmFiKTtcbiAgICAgICAgY29uc3QgcGxhdGZvcm1XaWR0aCA9IHRoaXMubWluV2lkdGggKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4V2lkdGggLSB0aGlzLm1pbldpZHRoKTtcbiAgICAgICAgbmV3UGxhdGZvcm0ud2lkdGggPSBwbGF0Zm9ybVdpZHRoO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1BsYXRmb3JtUG9zaXRpb24pIHtcbiAgICAgICAgICAgIG5ld1BsYXRmb3JtLnNldFBvc2l0aW9uKGNjLnYyKHByZXZpb3VzUGxhdGZvcm1Qb3NpdGlvbi54LCAtNzA4KSk7IC8vINCf0L7Rj9Cy0LvRj9C10YLRgdGPINGB0YDQsNC30YNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC/0L7Qt9C40YbQuNGPINC90LUg0L/QtdGA0LXQtNCw0L3QsCwg0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0YHQu9GD0YfQsNC50L3QvtC1INC30L3QsNGH0LXQvdC40LVcbiAgICAgICAgICAgICBjb25zdCBuZXdQb3NpdGlvblggPSAtMjQwICsgTWF0aC5yYW5kb20oKSAqICg0MDAgLSAoLTI0MCkpOyAvLyDQodC70YPRh9Cw0LnQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQsiDQv9GA0L7QvNC10LbRg9GC0LrQtSBbLTI0MCwgNDAwXVxuICAgICAgICAgICAgbmV3UGxhdGZvcm0uc2V0UG9zaXRpb24oY2MudjIobmV3UG9zaXRpb25YLCAtMTA4MCkpOyAvLyDQndCw0YfQsNC70YzQvdCw0Y8g0L/QvtC30LjRhtC40Y8g0YHQvdC40LfRgyDRjdC60YDQsNC90LBcblxuICAgICAgICAgICAgLy8g0JDQvdC40LzQsNGG0LjRjyDQv9C+0Y/QstC70LXQvdC40Y8g0YHQvdC40LfRgyDQstCy0LXRgNGFXG4gICAgICAgICAgICBjYy50d2VlbihuZXdQbGF0Zm9ybSlcbiAgICAgICAgICAgICAgICAudG8odGhpcy5wbGF0Zm9ybUFwcGVhclRpbWUsIHsgcG9zaXRpb246IGNjLnYzKG5ld1Bvc2l0aW9uWCwgLTcwOCkgfSwgeyBlYXNpbmc6ICdjdWJpY091dCcgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdQbGF0Zm9ybSk7XG4gICAgICAgIHJldHVybiBuZXdQbGF0Zm9ybTtcbiAgICB9XG59XG4iXX0=