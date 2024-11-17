
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Spawner/PlatformSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbcd75L1a9BBLSrHghUc+6U', 'PlatformSpawner');
// Scripts/Spawner/PlatformSpawner.ts

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
var Platform_1 = require("../Platform");
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
        property(cc.Float)
    ], PlatformSpawner.prototype, "minWidth", void 0);
    __decorate([
        property(cc.Float)
    ], PlatformSpawner.prototype, "maxWidth", void 0);
    __decorate([
        property(cc.Float)
    ], PlatformSpawner.prototype, "minXOffset", void 0);
    __decorate([
        property(cc.Float)
    ], PlatformSpawner.prototype, "maxXOffset", void 0);
    __decorate([
        property(cc.Float)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3Bhd25lclxcUGxhdGZvcm1TcGF3bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFvQztBQUNwQyx3Q0FBbUM7QUFFN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQU87SUFBcEQ7UUFBQSxxRUFpREM7UUFoRG9CLFVBQUksR0FBVyxDQUFDLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3RCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFHekIsZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFHekIsd0JBQWtCLEdBQVcsR0FBRyxDQUFDO1FBRWpDLGtCQUFZLEdBQWEsSUFBSSxDQUFDOztJQStCMUMsQ0FBQztJQTdCVSxtQ0FBUyxHQUFoQixVQUFpQixRQUFrQjtRQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQztRQUNsRSxJQUFJLFFBQVEsRUFBRTtZQUNWLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzRCxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbEM7YUFBTTtZQUNILElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNqRDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBRWhDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRU8scURBQTJCLEdBQW5DLFVBQW9DLFFBQWtCO1FBQ2xELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEYsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1FBRXBDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEYsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvRyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUQsUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFOUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQzdGLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDVztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNZO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ2M7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDYztJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytEQUNzQjtJQWhCeEIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQWlEbkM7SUFBRCxzQkFBQztDQWpERCxBQWlEQyxDQWpENEMsaUJBQU8sR0FpRG5EO2tCQWpEb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwYXduZXIgfSBmcm9tIFwiLi9TcGF3bmVyXCI7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4uL1BsYXRmb3JtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybVNwYXduZXIgZXh0ZW5kcyBTcGF3bmVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBvc1k6IG51bWJlciA9IC0xMTAwO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHByaXZhdGUgbWluV2lkdGg6IG51bWJlciA9IDUwO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHByaXZhdGUgbWF4V2lkdGg6IG51bWJlciA9IDIwMDtcblxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBwcml2YXRlIG1pblhPZmZzZXQ6IG51bWJlciA9IDEwMDtcblxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBwcml2YXRlIG1heFhPZmZzZXQ6IG51bWJlciA9IDQwMDtcblxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBwcml2YXRlIHBsYXRmb3JtQXBwZWFyVGltZTogbnVtYmVyID0gMC41O1xuXG4gICAgcHJpdmF0ZSBsYXN0UGxhdGZvcm06IFBsYXRmb3JtID0gbnVsbDtcblxuICAgIHB1YmxpYyBzcGF3bk5vZGUocG9zaXRpb24/OiBjYy5WZWMyKTogY2MuTm9kZSB7XG4gICAgICAgIGNvbnN0IG5ld1BsYXRmb3JtID0gdGhpcy5nZXRPckNyZWF0ZU5vZGUoKS5nZXRDb21wb25lbnQoUGxhdGZvcm0pO1xuICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIG5ld1BsYXRmb3JtLm5vZGUuc2V0UG9zaXRpb24oY2MudjIocG9zaXRpb24ueCwgdGhpcy5wb3NZKSk7XG4gICAgICAgICAgICBuZXdQbGF0Zm9ybS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFJhbmRvbVBsYXRmb3JtQXR0cmlidXRlcyhuZXdQbGF0Zm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhc3RQbGF0Zm9ybSA9IG5ld1BsYXRmb3JtO1xuXG4gICAgICAgIHJldHVybiBuZXdQbGF0Zm9ybS5ub2RlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0UmFuZG9tUGxhdGZvcm1BdHRyaWJ1dGVzKHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICAgICAgICBjb25zdCBwbGF0Zm9ybVdpZHRoID0gdGhpcy5taW5XaWR0aCArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhXaWR0aCAtIHRoaXMubWluV2lkdGgpO1xuICAgICAgICBwbGF0Zm9ybS5ub2RlLndpZHRoID0gcGxhdGZvcm1XaWR0aDtcblxuICAgICAgICBjb25zdCBvZmZzZXRYID0gdGhpcy5taW5YT2Zmc2V0ICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFhPZmZzZXQgLSB0aGlzLm1pblhPZmZzZXQpO1xuICAgICAgICBjb25zdCBuZXdQb3NpdGlvblggPSB0aGlzLmxhc3RQbGF0Zm9ybSA/IHRoaXMubGFzdFBsYXRmb3JtLm5vZGUueCArIHRoaXMubGFzdFBsYXRmb3JtLm5vZGUud2lkdGggKyBvZmZzZXRYIDogMDtcblxuICAgICAgICBwbGF0Zm9ybS5ub2RlLnNldFBvc2l0aW9uKGNjLnYyKG5ld1Bvc2l0aW9uWCwgdGhpcy5wb3NZICogMikpO1xuXG4gICAgICAgIHBsYXRmb3JtLnVwZGF0ZVBsYXRmb3JtU2l6ZSgpO1xuXG4gICAgICAgIGNjLnR3ZWVuKHBsYXRmb3JtLm5vZGUpXG4gICAgICAgICAgICAudG8odGhpcy5wbGF0Zm9ybUFwcGVhclRpbWUsIHsgcG9zaXRpb246IGNjLnYzKG5ld1Bvc2l0aW9uWCwgLTExMDApIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG59XG4iXX0=