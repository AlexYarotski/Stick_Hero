
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
var Platform_1 = require("./Platform");
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
        var newPlatform = this.getOrCreateNode().getComponent(Platform_1.default);
        if (position) {
            newPlatform.node.setPosition(cc.v2(position.x, this.posY));
            newPlatform.node.active = true;
        }
        else {
            this.setRandomPlatformAttributes(newPlatform);
        }
        this.lastPlatform = newPlatform;
        return newPlatform.node;
    };
    PlatformSpawner.prototype.setRandomPlatformAttributes = function (platform) {
        var platformWidth = this.minWidth + Math.random() * (this.maxWidth - this.minWidth);
        platform.node.width = platformWidth;
        var offsetX = this.minXOffset + Math.random() * (this.maxXOffset - this.minXOffset);
        var newPositionX = this.lastPlatform ? this.lastPlatform.node.x + this.lastPlatform.node.width + offsetX : 0;
        platform.node.setPosition(cc.v2(newPositionX, this.posY * 2));
        platform.updatePlatformSize();
        cc.tween(platform.node)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhdGZvcm1TcGF3bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFvQztBQUNwQyx1Q0FBa0M7QUFFNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQU87SUFBcEQ7UUFBQSxxRUFrREM7UUFqRG9CLFVBQUksR0FBVyxDQUFDLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3RCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFHekIsZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFHekIsd0JBQWtCLEdBQVcsR0FBRyxDQUFDO1FBRWpDLGtCQUFZLEdBQWEsSUFBSSxDQUFDOztJQWdDMUMsQ0FBQztJQTlCVSxtQ0FBUyxHQUFoQixVQUFpQixRQUFrQjtRQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQztRQUNsRSxJQUFJLFFBQVEsRUFBRTtZQUNWLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzRCxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbEM7YUFBTTtZQUNILElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNqRDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBRWhDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztJQUM1QixDQUFDO0lBR08scURBQTJCLEdBQW5DLFVBQW9DLFFBQWtCO1FBQ2xELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEYsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1FBRXBDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEYsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvRyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUQsUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFOUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQzdGLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUE3Q0Q7UUFEQyxRQUFRO3FEQUNxQjtJQUc5QjtRQURDLFFBQVE7cURBQ3NCO0lBRy9CO1FBREMsUUFBUTt1REFDd0I7SUFHakM7UUFEQyxRQUFRO3VEQUN3QjtJQUdqQztRQURDLFFBQVE7K0RBQ2dDO0lBaEJ4QixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBa0RuQztJQUFELHNCQUFDO0NBbERELEFBa0RDLENBbEQ0QyxpQkFBTyxHQWtEbkQ7a0JBbERvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Bhd25lciB9IGZyb20gXCIuL1NwYXduZXJcIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi9QbGF0Zm9ybVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1TcGF3bmVyIGV4dGVuZHMgU3Bhd25lciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwb3NZOiBudW1iZXIgPSAtMTEwMDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgbWluV2lkdGg6IG51bWJlciA9IDUwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBtYXhXaWR0aDogbnVtYmVyID0gMjAwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBtaW5YT2Zmc2V0OiBudW1iZXIgPSAxMDA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIG1heFhPZmZzZXQ6IG51bWJlciA9IDQwMDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgcGxhdGZvcm1BcHBlYXJUaW1lOiBudW1iZXIgPSAwLjU7XG5cbiAgICBwcml2YXRlIGxhc3RQbGF0Zm9ybTogUGxhdGZvcm0gPSBudWxsO1xuXG4gICAgcHVibGljIHNwYXduTm9kZShwb3NpdGlvbj86IGNjLlZlYzIpOiBjYy5Ob2RlIHtcbiAgICAgICAgY29uc3QgbmV3UGxhdGZvcm0gPSB0aGlzLmdldE9yQ3JlYXRlTm9kZSgpLmdldENvbXBvbmVudChQbGF0Zm9ybSk7XG4gICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgICAgbmV3UGxhdGZvcm0ubm9kZS5zZXRQb3NpdGlvbihjYy52Mihwb3NpdGlvbi54LCB0aGlzLnBvc1kpKTtcbiAgICAgICAgICAgIG5ld1BsYXRmb3JtLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UmFuZG9tUGxhdGZvcm1BdHRyaWJ1dGVzKG5ld1BsYXRmb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdFBsYXRmb3JtID0gbmV3UGxhdGZvcm07XG5cbiAgICAgICAgcmV0dXJuIG5ld1BsYXRmb3JtLm5vZGU7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHNldFJhbmRvbVBsYXRmb3JtQXR0cmlidXRlcyhwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICAgICAgY29uc3QgcGxhdGZvcm1XaWR0aCA9IHRoaXMubWluV2lkdGggKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4V2lkdGggLSB0aGlzLm1pbldpZHRoKTtcbiAgICAgICAgcGxhdGZvcm0ubm9kZS53aWR0aCA9IHBsYXRmb3JtV2lkdGg7XG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IHRoaXMubWluWE9mZnNldCArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhYT2Zmc2V0IC0gdGhpcy5taW5YT2Zmc2V0KTtcbiAgICAgICAgY29uc3QgbmV3UG9zaXRpb25YID0gdGhpcy5sYXN0UGxhdGZvcm0gPyB0aGlzLmxhc3RQbGF0Zm9ybS5ub2RlLnggKyB0aGlzLmxhc3RQbGF0Zm9ybS5ub2RlLndpZHRoICsgb2Zmc2V0WCA6IDA7XG5cbiAgICAgICAgcGxhdGZvcm0ubm9kZS5zZXRQb3NpdGlvbihjYy52MihuZXdQb3NpdGlvblgsIHRoaXMucG9zWSAqIDIpKTtcblxuICAgICAgICBwbGF0Zm9ybS51cGRhdGVQbGF0Zm9ybVNpemUoKTtcblxuICAgICAgICBjYy50d2VlbihwbGF0Zm9ybS5ub2RlKVxuICAgICAgICAgICAgLnRvKHRoaXMucGxhdGZvcm1BcHBlYXJUaW1lLCB7IHBvc2l0aW9uOiBjYy52MyhuZXdQb3NpdGlvblgsIC0xMTAwKSB9LCB7IGVhc2luZzogJ2N1YmljT3V0JyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxufVxuIl19