
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e355XdrLVNvZtw0ohF1eL6', 'PlayerController');
// Scripts/PlayerController.ts

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
var Stick_1 = require("./Stick");
var PlayerFlip_1 = require("./PlayerFlip");
var Platform_1 = require("./Platform");
var StickSpawner_1 = require("./Spawner/StickSpawner");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PLAYER_FALL = 'playerFall';
        _this.COLLISION_ENTER = 'collision-enter';
        _this.offsetStick = cc.v2(80, 10);
        _this.offsetPlatformX = -50;
        _this.stickPrefab = null;
        _this.moveDuration = 1;
        _this.fallDuration = 0.2;
        _this.stickSpawner = null;
        _this.playerFlip = null;
        _this.stick = null;
        _this.previousStick = null;
        _this.boxCollider = null;
        return _this;
    }
    PlayerController_1 = PlayerController;
    PlayerController.prototype.onLoad = function () {
        this.boxCollider = this.getComponent(cc.BoxCollider);
        this.boxCollider.node.on(this.COLLISION_ENTER, this.onCollisionEnter, this);
    };
    PlayerController.prototype.reset = function () {
        this.spawnStick();
        this.node.active = true;
    };
    PlayerController.prototype.onCollisionEnter = function (other, self) {
        if (other.node.getComponent(Platform_1.default)) {
            this.initiateFall();
        }
    };
    PlayerController.prototype.spawnStick = function () {
        var position = cc.v2(this.node.position.x + this.offsetStick.x, this.node.position.y + this.offsetStick.y);
        this.stick = this.stickSpawner.spawnNode(position).getComponent(Stick_1.default);
        this.stick.node.parent = this.node.parent;
        this.stick.reset();
    };
    PlayerController.prototype.moveToEndOfStick = function (xPos) {
        var _this = this;
        var targetPosition = cc.v3(xPos, this.node.position.y);
        this.moveTowards(targetPosition, function () {
            _this.initiateFall();
        });
    };
    PlayerController.prototype.moveToEndOfPlatform = function (xPos) {
        var _this = this;
        var worldTargetPosition = cc.v3(xPos + this.offsetPlatformX, this.node.position.y);
        var localTargetPosition = this.node.parent.convertToNodeSpaceAR(worldTargetPosition);
        var endPlatformPos = cc.v3(localTargetPosition.x + this.offsetPlatformX, this.node.position.y);
        var distanceTravelled = Math.abs(this.node.position.x - endPlatformPos.x);
        this.moveTowards(endPlatformPos, function () {
            _this.onReachEndOfPlatform(distanceTravelled);
        });
    };
    PlayerController.prototype.onReachEndOfPlatform = function (distanceTravelled) {
        if (this.previousStick) {
            this.stickSpawner.deactivateNode(this.previousStick.node);
        }
        this.previousStick = this.stick;
        cc.systemEvent.emit(PlayerController_1.PLAYER_REACHED, distanceTravelled);
    };
    PlayerController.prototype.moveTowards = function (targetPosition, onComplete) {
        var _this = this;
        this.playerFlip.disableFlip();
        cc.tween(this.node)
            .to(this.moveDuration, { position: targetPosition }, { easing: 'sineInOut' })
            .call(function () {
            if (onComplete)
                onComplete();
            _this.playerFlip.enableFlip();
        })
            .start();
    };
    PlayerController.prototype.initiateFall = function () {
        cc.systemEvent.emit(this.PLAYER_FALL);
        cc.tween(this.node)
            .to(this.fallDuration, { position: cc.v3(this.node.x, -2000) })
            .start();
        this.stick.initiateFall();
    };
    var PlayerController_1;
    PlayerController.PLAYER_REACHED = 'playerReached';
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "stickPrefab", void 0);
    __decorate([
        property(cc.Float)
    ], PlayerController.prototype, "moveDuration", void 0);
    __decorate([
        property(cc.Float)
    ], PlayerController.prototype, "fallDuration", void 0);
    __decorate([
        property(StickSpawner_1.default)
    ], PlayerController.prototype, "stickSpawner", void 0);
    __decorate([
        property(PlayerFlip_1.default)
    ], PlayerController.prototype, "playerFlip", void 0);
    PlayerController = PlayerController_1 = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBNEI7QUFDNUIsMkNBQXNDO0FBQ3RDLHVDQUFrQztBQUNsQyx1REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUF3R0M7UUFyR3FCLGlCQUFXLEdBQVcsWUFBWSxDQUFDO1FBQ3BDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7UUFFNUMsaUJBQVcsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV0QyxxQkFBZSxHQUFXLENBQUMsRUFBRSxDQUFDO1FBRzlDLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBR25CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBQ3BCLG1CQUFhLEdBQVUsSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQW1CLElBQUksQ0FBQzs7SUE2RS9DLENBQUM7eUJBeEdvQixnQkFBZ0I7SUE2QnZCLGlDQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVNLGdDQUFLLEdBQVo7UUFDSSxJ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QURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBd0dwQztJQUFELHVCQUFDO0NBeEdELEFBd0dDLENBeEc2QyxFQUFFLENBQUMsU0FBUyxHQXdHekQ7a0JBeEdvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RpY2sgZnJvbSBcIi4vU3RpY2tcIjtcclxuaW1wb3J0IFBsYXllckZsaXAgZnJvbSBcIi4vUGxheWVyRmxpcFwiO1xyXG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4vUGxhdGZvcm1cIjtcclxuaW1wb3J0IFN0aWNrU3Bhd25lciBmcm9tIFwiLi9TcGF3bmVyL1N0aWNrU3Bhd25lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUExBWUVSX1JFQUNIRUQ6IHN0cmluZyA9ICdwbGF5ZXJSZWFjaGVkJztcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5ICBQTEFZRVJfRkFMTDogc3RyaW5nID0gJ3BsYXllckZhbGwnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBDT0xMSVNJT05fRU5URVI6IHN0cmluZyA9ICdjb2xsaXNpb24tZW50ZXInO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgb2Zmc2V0U3RpY2s6IGNjLlZlYzIgPSBjYy52Mig4MCwgMTApO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBvZmZzZXRQbGF0Zm9ybVg6IG51bWJlciA9IC01MDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc3RpY2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgbW92ZUR1cmF0aW9uOiBudW1iZXIgPSAxO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgZmFsbER1cmF0aW9uOiBudW1iZXIgPSAwLjI7XHJcblxyXG4gICAgQHByb3BlcnR5KFN0aWNrU3Bhd25lcilcclxuICAgIHByaXZhdGUgc3RpY2tTcGF3bmVyOiBTdGlja1NwYXduZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShQbGF5ZXJGbGlwKVxyXG4gICAgcHJpdmF0ZSBwbGF5ZXJGbGlwOiBQbGF5ZXJGbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHN0aWNrOiBTdGljayA9IG51bGw7XHJcbiAgICBwcml2YXRlIHByZXZpb3VzU3RpY2s6IFN0aWNrID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJveENvbGxpZGVyOiBjYy5Cb3hDb2xsaWRlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMuYm94Q29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XHJcblxyXG4gICAgICAgIHRoaXMuYm94Q29sbGlkZXIubm9kZS5vbih0aGlzLkNPTExJU0lPTl9FTlRFUiwgdGhpcy5vbkNvbGxpc2lvbkVudGVyLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zcGF3blN0aWNrKCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAob3RoZXIubm9kZS5nZXRDb21wb25lbnQoUGxhdGZvcm0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVGYWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3Bhd25TdGljaygpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGNjLnYyKHRoaXMubm9kZS5wb3NpdGlvbi54ICsgdGhpcy5vZmZzZXRTdGljay54LCB0aGlzLm5vZGUucG9zaXRpb24ueSArIHRoaXMub2Zmc2V0U3RpY2sueSk7XHJcbiAgICAgICAgdGhpcy5zdGljayA9IHRoaXMuc3RpY2tTcGF3bmVyLnNwYXduTm9kZShwb3NpdGlvbikuZ2V0Q29tcG9uZW50KFN0aWNrKTtcclxuICAgICAgICB0aGlzLnN0aWNrLm5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICB0aGlzLnN0aWNrLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVUb0VuZE9mU3RpY2soeFBvczogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSBjYy52Myh4UG9zLCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5tb3ZlVG93YXJkcyh0YXJnZXRQb3NpdGlvbiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlRmFsbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlVG9FbmRPZlBsYXRmb3JtKHhQb3M6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkVGFyZ2V0UG9zaXRpb24gPSBjYy52Myh4UG9zICsgdGhpcy5vZmZzZXRQbGF0Zm9ybVgsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICBjb25zdCBsb2NhbFRhcmdldFBvc2l0aW9uID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFRhcmdldFBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBlbmRQbGF0Zm9ybVBvcyA9IGNjLnYzKGxvY2FsVGFyZ2V0UG9zaXRpb24ueCArIHRoaXMub2Zmc2V0UGxhdGZvcm1YLCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlVHJhdmVsbGVkID0gTWF0aC5hYnModGhpcy5ub2RlLnBvc2l0aW9uLnggLSBlbmRQbGF0Zm9ybVBvcy54KTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlVG93YXJkcyhlbmRQbGF0Zm9ybVBvcywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uUmVhY2hFbmRPZlBsYXRmb3JtKGRpc3RhbmNlVHJhdmVsbGVkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUmVhY2hFbmRPZlBsYXRmb3JtKGRpc3RhbmNlVHJhdmVsbGVkOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5wcmV2aW91c1N0aWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RpY2tTcGF3bmVyLmRlYWN0aXZhdGVOb2RlKHRoaXMucHJldmlvdXNTdGljay5ub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJldmlvdXNTdGljayA9IHRoaXMuc3RpY2s7XHJcblxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoUGxheWVyQ29udHJvbGxlci5QTEFZRVJfUkVBQ0hFRCwgZGlzdGFuY2VUcmF2ZWxsZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZVRvd2FyZHModGFyZ2V0UG9zaXRpb246IGNjLlZlYzMsIG9uQ29tcGxldGU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJGbGlwLmRpc2FibGVGbGlwKCk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKHRoaXMubW92ZUR1cmF0aW9uLCB7IHBvc2l0aW9uOiB0YXJnZXRQb3NpdGlvbiB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyRmxpcC5lbmFibGVGbGlwKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhdGVGYWxsKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQodGhpcy5QTEFZRVJfRkFMTClcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8odGhpcy5mYWxsRHVyYXRpb24sIHsgcG9zaXRpb246IGNjLnYzKHRoaXMubm9kZS54LCAtMjAwMCkgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RpY2suaW5pdGlhdGVGYWxsKCk7XHJcbiAgICB9XHJcbn1cclxuIl19