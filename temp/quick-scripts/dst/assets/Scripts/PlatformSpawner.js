
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
        _this.lastPlatform = null;
        _this.platformPool = [];
        return _this;
    }
    PlatformSpawner.prototype.spawnPlatform = function (previousPlatformPosition) {
        var newPlatform = this.getOrCreatePlatform();
        if (previousPlatformPosition) {
            newPlatform.setPosition(cc.v2(previousPlatformPosition.x, this.posY));
            newPlatform.active = true;
        }
        else {
            this.setRandomPlatformAttributes(newPlatform);
        }
        this.lastPlatform = newPlatform;
        return newPlatform;
    };
    PlatformSpawner.prototype.deactivatePlatform = function (platform) {
        platform.setPosition(cc.v2(platform.x, this.posY * 2));
        platform.active = false;
        this.platformPool.push(platform);
    };
    PlatformSpawner.prototype.getOrCreatePlatform = function () {
        if (this.platformPool.length > 0) {
            var reusedPlatform = this.platformPool.pop();
            return reusedPlatform;
        }
        var newPlatform = cc.instantiate(this.platformPrefab);
        this.node.addChild(newPlatform);
        return newPlatform;
    };
    PlatformSpawner.prototype.setRandomPlatformAttributes = function (platform) {
        var platformWidth = this.minWidth + Math.random() * (this.maxWidth - this.minWidth);
        platform.width = platformWidth;
        var offsetX = this.minXOffset + Math.random() * (this.maxXOffset - this.minXOffset);
        var newPositionX = this.lastPlatform ? this.lastPlatform.x + this.lastPlatform.width + offsetX : 0;
        platform.setPosition(cc.v2(newPositionX, this.posY * 2));
        platform.active = true;
        cc.tween(platform)
            .to(this.platformAppearTime, { position: cc.v3(newPositionX, this.posY) }, { easing: 'cubicOut' })
            .start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhdGZvcm1TcGF3bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBeUVDO1FBeEVvQixVQUFJLEdBQVcsQ0FBQyxJQUFJLENBQUM7UUFHdEMsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFHakMsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUd0QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBR3ZCLGdCQUFVLEdBQVcsR0FBRyxDQUFDO1FBR3pCLGdCQUFVLEdBQVcsR0FBRyxDQUFDO1FBR3pCLHdCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUV6QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFjLEVBQUUsQ0FBQzs7SUFrRHpDLENBQUM7SUFoRFUsdUNBQWEsR0FBcEIsVUFBcUIsd0JBQWtDO1FBQ25ELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRS9DLElBQUksd0JBQXdCLEVBQUU7WUFDMUIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUV0RSxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUM3QjthQUFNO1lBRUgsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFFaEMsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVNLDRDQUFrQixHQUF6QixVQUEwQixRQUFpQjtRQUN2QyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVPLDZDQUFtQixHQUEzQjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDL0MsT0FBTyxjQUFjLENBQUM7U0FDekI7UUFDRCxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRU8scURBQTJCLEdBQW5DLFVBQW9DLFFBQWlCO1FBQ2pELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEYsUUFBUSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7UUFFL0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0RixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyRyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV6RCxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV2QixFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNiLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDakcsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQXBFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJEQUNhO0lBR2pDO1FBREMsUUFBUTtxREFDYTtJQUd0QjtRQURDLFFBQVE7cURBQ2M7SUFHdkI7UUFEQyxRQUFRO3VEQUNnQjtJQUd6QjtRQURDLFFBQVE7dURBQ2dCO0lBR3pCO1FBREMsUUFBUTsrREFDd0I7SUFuQmhCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0F5RW5DO0lBQUQsc0JBQUM7Q0F6RUQsQUF5RUMsQ0F6RTRDLEVBQUUsQ0FBQyxTQUFTLEdBeUV4RDtrQkF6RW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1TcGF3bmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBvc1k6IG51bWJlciA9IC0xMTAwO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwbGF0Zm9ybVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIG1pbldpZHRoOiBudW1iZXIgPSA1MDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIG1heFdpZHRoOiBudW1iZXIgPSAyMDA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBtaW5YT2Zmc2V0OiBudW1iZXIgPSAxMDA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBtYXhYT2Zmc2V0OiBudW1iZXIgPSA0MDA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBwbGF0Zm9ybUFwcGVhclRpbWU6IG51bWJlciA9IDAuNTtcblxuICAgIHByaXZhdGUgbGFzdFBsYXRmb3JtOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgcGxhdGZvcm1Qb29sOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIHB1YmxpYyBzcGF3blBsYXRmb3JtKHByZXZpb3VzUGxhdGZvcm1Qb3NpdGlvbj86IGNjLlZlYzIpOiBjYy5Ob2RlIHtcbiAgICAgICAgY29uc3QgbmV3UGxhdGZvcm0gPSB0aGlzLmdldE9yQ3JlYXRlUGxhdGZvcm0oKTtcblxuICAgICAgICBpZiAocHJldmlvdXNQbGF0Zm9ybVBvc2l0aW9uKSB7XG4gICAgICAgICAgICBuZXdQbGF0Zm9ybS5zZXRQb3NpdGlvbihjYy52MihwcmV2aW91c1BsYXRmb3JtUG9zaXRpb24ueCwgdGhpcy5wb3NZKSk7XG5cbiAgICAgICAgICAgIG5ld1BsYXRmb3JtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0UmFuZG9tUGxhdGZvcm1BdHRyaWJ1dGVzKG5ld1BsYXRmb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdFBsYXRmb3JtID0gbmV3UGxhdGZvcm07XG5cbiAgICAgICAgcmV0dXJuIG5ld1BsYXRmb3JtO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWFjdGl2YXRlUGxhdGZvcm0ocGxhdGZvcm06IGNjLk5vZGUpIHtcbiAgICAgICAgcGxhdGZvcm0uc2V0UG9zaXRpb24oY2MudjIocGxhdGZvcm0ueCwgdGhpcy5wb3NZICogMikpO1xuICAgICAgICBwbGF0Zm9ybS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybVBvb2wucHVzaChwbGF0Zm9ybSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRPckNyZWF0ZVBsYXRmb3JtKCk6IGNjLk5vZGUge1xuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybVBvb2wubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgcmV1c2VkUGxhdGZvcm0gPSB0aGlzLnBsYXRmb3JtUG9vbC5wb3AoKTtcbiAgICAgICAgICAgIHJldHVybiByZXVzZWRQbGF0Zm9ybTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdQbGF0Zm9ybSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGxhdGZvcm1QcmVmYWIpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3UGxhdGZvcm0pO1xuICAgICAgICByZXR1cm4gbmV3UGxhdGZvcm07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRSYW5kb21QbGF0Zm9ybUF0dHJpYnV0ZXMocGxhdGZvcm06IGNjLk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGxhdGZvcm1XaWR0aCA9IHRoaXMubWluV2lkdGggKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4V2lkdGggLSB0aGlzLm1pbldpZHRoKTtcbiAgICAgICAgcGxhdGZvcm0ud2lkdGggPSBwbGF0Zm9ybVdpZHRoO1xuXG4gICAgICAgIGNvbnN0IG9mZnNldFggPSB0aGlzLm1pblhPZmZzZXQgKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4WE9mZnNldCAtIHRoaXMubWluWE9mZnNldCk7XG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uWCA9IHRoaXMubGFzdFBsYXRmb3JtID8gdGhpcy5sYXN0UGxhdGZvcm0ueCArIHRoaXMubGFzdFBsYXRmb3JtLndpZHRoICsgb2Zmc2V0WCA6IDA7XG5cbiAgICAgICAgcGxhdGZvcm0uc2V0UG9zaXRpb24oY2MudjIobmV3UG9zaXRpb25YLCB0aGlzLnBvc1kgKiAyKSk7XG5cbiAgICAgICAgcGxhdGZvcm0uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBjYy50d2VlbihwbGF0Zm9ybSlcbiAgICAgICAgICAgIC50byh0aGlzLnBsYXRmb3JtQXBwZWFyVGltZSwgeyBwb3NpdGlvbjogY2MudjMobmV3UG9zaXRpb25YLCB0aGlzLnBvc1kpIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG59Il19