
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
var Spawner_1 = require("./Spawner");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlatformSpawner = /** @class */ (function (_super) {
    __extends(PlatformSpawner, _super);
    function PlatformSpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.posY = -1100;
        _this.minWidth = 50;
        _this.maxWidth = 200;
        _this.minXOffset = 100;
        _this.maxXOffset = 400;
        _this.platformAppearTime = 0.5;
        _this.lastPlatform = null;
        return _this;
    }
    PlatformSpawner.prototype.spawnNode = function (position) {
        var newPlatform = this.getOrCreateNode();
        if (position) {
            newPlatform.setPosition(cc.v2(position.x, this.posY));
            newPlatform.active = true;
        }
        else {
            this.setRandomPlatformAttributes(newPlatform);
        }
        this.lastPlatform = newPlatform;
        return newPlatform;
    };
    PlatformSpawner.prototype.setRandomPlatformAttributes = function (platform) {
        var platformWidth = this.minWidth + Math.random() * (this.maxWidth - this.minWidth);
        platform.width = platformWidth;
        var offsetX = this.minXOffset + Math.random() * (this.maxXOffset - this.minXOffset);
        var newPositionX = this.lastPlatform ? this.lastPlatform.x + this.lastPlatform.width + offsetX : 0;
        platform.setPosition(cc.v2(newPositionX, this.posY * 2));
        cc.tween(platform)
            .to(this.platformAppearTime, { position: cc.v3(newPositionX, -1100) }, { easing: 'cubicOut' })
            .start();
    };
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
}(Spawner_1.Spawner));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhdGZvcm1TcGF3bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBTztJQUFwRDtRQUFBLHFFQStDQztRQTlDb0IsVUFBSSxHQUFXLENBQUMsSUFBSSxDQUFDO1FBRzlCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFHdEIsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUd2QixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUd6QixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUd6Qix3QkFBa0IsR0FBVyxHQUFHLENBQUM7UUFFakMsa0JBQVksR0FBWSxJQUFJLENBQUM7O0lBNkJ6QyxDQUFDO0lBM0JVLG1DQUFTLEdBQWhCLFVBQWlCLFFBQWtCO1FBQy9CLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQyxJQUFJLFFBQVEsRUFBRTtZQUNWLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RELFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzdCO2FBQU07WUFDSCxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDakQ7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBR08scURBQTJCLEdBQW5DLFVBQW9DLFFBQWlCO1FBQ2pELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEYsUUFBUSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7UUFFL0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0RixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyRyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV6RCxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNiLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQzdGLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUExQ0Q7UUFEQyxRQUFRO3FEQUNxQjtJQUc5QjtRQURDLFFBQVE7cURBQ3NCO0lBRy9CO1FBREMsUUFBUTt1REFDd0I7SUFHakM7UUFEQyxRQUFRO3VEQUN3QjtJQUdqQztRQURDLFFBQVE7K0RBQ2dDO0lBaEJ4QixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBK0NuQztJQUFELHNCQUFDO0NBL0NELEFBK0NDLENBL0M0QyxpQkFBTyxHQStDbkQ7a0JBL0NvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Bhd25lciB9IGZyb20gXCIuL1NwYXduZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtU3Bhd25lciBleHRlbmRzIFNwYXduZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcG9zWTogbnVtYmVyID0gLTExMDA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIG1pbldpZHRoOiBudW1iZXIgPSA1MDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgbWF4V2lkdGg6IG51bWJlciA9IDIwMDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgbWluWE9mZnNldDogbnVtYmVyID0gMTAwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBtYXhYT2Zmc2V0OiBudW1iZXIgPSA0MDA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIHBsYXRmb3JtQXBwZWFyVGltZTogbnVtYmVyID0gMC41O1xuXG4gICAgcHJpdmF0ZSBsYXN0UGxhdGZvcm06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHVibGljIHNwYXduTm9kZShwb3NpdGlvbj86IGNjLlZlYzIpOiBjYy5Ob2RlIHtcbiAgICAgICAgY29uc3QgbmV3UGxhdGZvcm0gPSB0aGlzLmdldE9yQ3JlYXRlTm9kZSgpO1xuICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIG5ld1BsYXRmb3JtLnNldFBvc2l0aW9uKGNjLnYyKHBvc2l0aW9uLngsIHRoaXMucG9zWSkpO1xuICAgICAgICAgICAgbmV3UGxhdGZvcm0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UmFuZG9tUGxhdGZvcm1BdHRyaWJ1dGVzKG5ld1BsYXRmb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdFBsYXRmb3JtID0gbmV3UGxhdGZvcm07XG4gICAgICAgIHJldHVybiBuZXdQbGF0Zm9ybTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgc2V0UmFuZG9tUGxhdGZvcm1BdHRyaWJ1dGVzKHBsYXRmb3JtOiBjYy5Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtV2lkdGggPSB0aGlzLm1pbldpZHRoICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFdpZHRoIC0gdGhpcy5taW5XaWR0aCk7XG4gICAgICAgIHBsYXRmb3JtLndpZHRoID0gcGxhdGZvcm1XaWR0aDtcblxuICAgICAgICBjb25zdCBvZmZzZXRYID0gdGhpcy5taW5YT2Zmc2V0ICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFhPZmZzZXQgLSB0aGlzLm1pblhPZmZzZXQpO1xuICAgICAgICBjb25zdCBuZXdQb3NpdGlvblggPSB0aGlzLmxhc3RQbGF0Zm9ybSA/IHRoaXMubGFzdFBsYXRmb3JtLnggKyB0aGlzLmxhc3RQbGF0Zm9ybS53aWR0aCArIG9mZnNldFggOiAwO1xuXG4gICAgICAgIHBsYXRmb3JtLnNldFBvc2l0aW9uKGNjLnYyKG5ld1Bvc2l0aW9uWCwgdGhpcy5wb3NZICogMikpO1xuXG4gICAgICAgIGNjLnR3ZWVuKHBsYXRmb3JtKVxuICAgICAgICAgICAgLnRvKHRoaXMucGxhdGZvcm1BcHBlYXJUaW1lLCB7IHBvc2l0aW9uOiBjYy52MyhuZXdQb3NpdGlvblgsIC0xMTAwKSB9LCB7IGVhc2luZzogJ2N1YmljT3V0JyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxufVxuIl19