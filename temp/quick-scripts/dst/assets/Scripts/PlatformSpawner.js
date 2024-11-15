
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
        _this.posY = -1100;
        _this.platformPrefab = null;
        _this.minWidth = 50;
        _this.maxWidth = 200;
        _this.minXOffset = 100;
        _this.maxXOffset = 400;
        _this.platformAppearTime = 0.5;
        return _this;
    }
    PlatformSpawner.prototype.spawnPlatform = function (previousPlatformPosition) {
        var newPlatform = cc.instantiate(this.platformPrefab);
        if (previousPlatformPosition) {
            newPlatform.setPosition(cc.v2(previousPlatformPosition.x, this.posY));
        }
        else {
            var platformWidth = this.minWidth + Math.random() * (this.maxWidth - this.minWidth);
            newPlatform.width = platformWidth;
            var newPositionX = this.minXOffset + Math.random() * (this.maxXOffset - (this.minXOffset)); // Случайное значение в промежутке [-240, 400]
            newPlatform.setPosition(cc.v2(newPositionX, this.posY * 2)); // Начальная позиция снизу экрана
            // Анимация появления снизу вверх
            cc.tween(newPlatform)
                .to(this.platformAppearTime, { position: cc.v3(newPositionX, this.posY) }, { easing: 'cubicOut' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhdGZvcm1TcGF3bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBMENDO1FBekNvQixVQUFJLEdBQVcsQ0FBQyxJQUFJLENBQUM7UUFHdEMsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFHakMsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUd0QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBR3ZCLGdCQUFVLEdBQVcsR0FBRyxDQUFDO1FBR3pCLGdCQUFVLEdBQVcsR0FBRyxDQUFDO1FBR3pCLHdCQUFrQixHQUFXLEdBQUcsQ0FBQzs7SUF1QnJDLENBQUM7SUFyQlUsdUNBQWEsR0FBcEIsVUFBcUIsd0JBQWtDO1FBQ25ELElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXhELElBQUksd0JBQXdCLEVBQUU7WUFDMUIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN6RTthQUFNO1lBQ0gsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RixXQUFXLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztZQUVqQyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLDhDQUE4QztZQUM3SSxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztZQUU5RixpQ0FBaUM7WUFDakMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7aUJBQ2hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7aUJBQ2pHLEtBQUssRUFBRSxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQXJDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJEQUNhO0lBR2pDO1FBREMsUUFBUTtxREFDYTtJQUd0QjtRQURDLFFBQVE7cURBQ2M7SUFHdkI7UUFEQyxRQUFRO3VEQUNnQjtJQUd6QjtRQURDLFFBQVE7dURBQ2dCO0lBR3pCO1FBREMsUUFBUTsrREFDd0I7SUFuQmhCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0EwQ25DO0lBQUQsc0JBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQzRDLEVBQUUsQ0FBQyxTQUFTLEdBMEN4RDtrQkExQ29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1TcGF3bmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBvc1k6IG51bWJlciA9IC0xMTAwO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwbGF0Zm9ybVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIG1pbldpZHRoOiBudW1iZXIgPSA1MDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIG1heFdpZHRoOiBudW1iZXIgPSAyMDA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBtaW5YT2Zmc2V0OiBudW1iZXIgPSAxMDA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBtYXhYT2Zmc2V0OiBudW1iZXIgPSA0MDA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBwbGF0Zm9ybUFwcGVhclRpbWU6IG51bWJlciA9IDAuNTtcblxuICAgIHB1YmxpYyBzcGF3blBsYXRmb3JtKHByZXZpb3VzUGxhdGZvcm1Qb3NpdGlvbj86IGNjLlZlYzIpOiBjYy5Ob2RlIHtcbiAgICAgICAgY29uc3QgbmV3UGxhdGZvcm0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYXRmb3JtUHJlZmFiKTtcblxuICAgICAgICBpZiAocHJldmlvdXNQbGF0Zm9ybVBvc2l0aW9uKSB7XG4gICAgICAgICAgICBuZXdQbGF0Zm9ybS5zZXRQb3NpdGlvbihjYy52MihwcmV2aW91c1BsYXRmb3JtUG9zaXRpb24ueCwgdGhpcy5wb3NZKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwbGF0Zm9ybVdpZHRoID0gdGhpcy5taW5XaWR0aCArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhXaWR0aCAtIHRoaXMubWluV2lkdGgpO1xuICAgICAgICAgICAgbmV3UGxhdGZvcm0ud2lkdGggPSBwbGF0Zm9ybVdpZHRoO1xuXG4gICAgICAgICAgICAgY29uc3QgbmV3UG9zaXRpb25YID0gdGhpcy5taW5YT2Zmc2V0ICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFhPZmZzZXQgLSAodGhpcy5taW5YT2Zmc2V0KSk7IC8vINCh0LvRg9GH0LDQudC90L7QtSDQt9C90LDRh9C10L3QuNC1INCyINC/0YDQvtC80LXQttGD0YLQutC1IFstMjQwLCA0MDBdXG4gICAgICAgICAgICBuZXdQbGF0Zm9ybS5zZXRQb3NpdGlvbihjYy52MihuZXdQb3NpdGlvblgsIHRoaXMucG9zWSAqIDIpKTsgLy8g0J3QsNGH0LDQu9GM0L3QsNGPINC/0L7Qt9C40YbQuNGPINGB0L3QuNC30YMg0Y3QutGA0LDQvdCwXG5cbiAgICAgICAgICAgIC8vINCQ0L3QuNC80LDRhtC40Y8g0L/QvtGP0LLQu9C10L3QuNGPINGB0L3QuNC30YMg0LLQstC10YDRhVxuICAgICAgICAgICAgY2MudHdlZW4obmV3UGxhdGZvcm0pXG4gICAgICAgICAgICAgICAgLnRvKHRoaXMucGxhdGZvcm1BcHBlYXJUaW1lLCB7IHBvc2l0aW9uOiBjYy52MyhuZXdQb3NpdGlvblgsIHRoaXMucG9zWSkgfSwgeyBlYXNpbmc6ICdjdWJpY091dCcgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdQbGF0Zm9ybSk7XG4gICAgICAgIHJldHVybiBuZXdQbGF0Zm9ybTtcbiAgICB9XG59XG4iXX0=