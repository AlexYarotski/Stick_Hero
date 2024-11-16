
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
        _this.offsetPlatformX = -50;
        _this.offsetStick = cc.v2(80, 10);
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
            .to(this.fallDuration, { position: cc.v3(this.node.x, 2000) })
            .start();
        this.stick.initiateFall(this.fallDuration);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBNEI7QUFDNUIsMkNBQXNDO0FBQ3RDLHVDQUFrQztBQUNsQyx1REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFxR0M7UUFsR3FCLGlCQUFXLEdBQVcsWUFBWSxDQUFDO1FBQ3BDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7UUFFNUMscUJBQWUsR0FBVyxDQUFDLEVBQUUsQ0FBQztRQUM5QixpQkFBVyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBR3RELGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBR25CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBQ3BCLG1CQUFhLEdBQVUsSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQW1CLElBQUksQ0FBQzs7SUEyRS9DLENBQUM7eUJBckdvQixnQkFBZ0I7SUE0QnZCLGlDQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVNLGdDQUFLLEdBQVo7UUFDSSxJ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QUQsdUJBQUM7Q0FyR0QsQUFxR0MsQ0FyRzZDLEVBQUUsQ0FBQyxTQUFTLEdBcUd6RDtrQkFyR29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGljayBmcm9tIFwiLi9TdGlja1wiO1xyXG5pbXBvcnQgUGxheWVyRmxpcCBmcm9tIFwiLi9QbGF5ZXJGbGlwXCI7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi9QbGF0Zm9ybVwiO1xyXG5pbXBvcnQgU3RpY2tTcGF3bmVyIGZyb20gXCIuL1NwYXduZXIvU3RpY2tTcGF3bmVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBQTEFZRVJfUkVBQ0hFRDogc3RyaW5nID0gJ3BsYXllclJlYWNoZWQnO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgIFBMQVlFUl9GQUxMOiBzdHJpbmcgPSAncGxheWVyRmFsbCc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IENPTExJU0lPTl9FTlRFUjogc3RyaW5nID0gJ2NvbGxpc2lvbi1lbnRlcic7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvZmZzZXRQbGF0Zm9ybVg6IG51bWJlciA9IC01MDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgb2Zmc2V0U3RpY2s6IGNjLlZlYzIgPSBjYy52Mig4MCwgMTApO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzdGlja1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBtb3ZlRHVyYXRpb246IG51bWJlciA9IDE7XHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBmYWxsRHVyYXRpb246IG51bWJlciA9IDAuMjtcclxuXHJcbiAgICBAcHJvcGVydHkoU3RpY2tTcGF3bmVyKVxyXG4gICAgcHJpdmF0ZSBzdGlja1NwYXduZXI6IFN0aWNrU3Bhd25lciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFBsYXllckZsaXApXHJcbiAgICBwcml2YXRlIHBsYXllckZsaXA6IFBsYXllckZsaXAgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgc3RpY2s6IFN0aWNrID0gbnVsbDtcclxuICAgIHByaXZhdGUgcHJldmlvdXNTdGljazogU3RpY2sgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYm94Q29sbGlkZXI6IGNjLkJveENvbGxpZGVyID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlci5ub2RlLm9uKHRoaXMuQ09MTElTSU9OX0VOVEVSLCB0aGlzLm9uQ29sbGlzaW9uRW50ZXIsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnNwYXduU3RpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KFBsYXRmb3JtKSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlRmFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNwYXduU3RpY2soKSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjYy52Mih0aGlzLm5vZGUucG9zaXRpb24ueCArIHRoaXMub2Zmc2V0U3RpY2sueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyB0aGlzLm9mZnNldFN0aWNrLnkpO1xyXG4gICAgICAgIHRoaXMuc3RpY2sgPSB0aGlzLnN0aWNrU3Bhd25lci5zcGF3bk5vZGUocG9zaXRpb24pLmdldENvbXBvbmVudChTdGljayk7XHJcbiAgICAgICAgdGhpcy5zdGljay5ub2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5zdGljay5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlVG9FbmRPZlN0aWNrKHhQb3M6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gY2MudjMoeFBvcywgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMubW92ZVRvd2FyZHModGFyZ2V0UG9zaXRpb24sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZUZhbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZVRvRW5kT2ZQbGF0Zm9ybSh4UG9zOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCB3b3JsZFRhcmdldFBvc2l0aW9uID0gY2MudjMoeFBvcyArIHRoaXMub2Zmc2V0UGxhdGZvcm1YLCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgY29uc3QgbG9jYWxUYXJnZXRQb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRUYXJnZXRQb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgZW5kUGxhdGZvcm1Qb3MgPSBjYy52Myhsb2NhbFRhcmdldFBvc2l0aW9uLnggKyB0aGlzLm9mZnNldFBsYXRmb3JtWCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0YW5jZVRyYXZlbGxlZCA9IE1hdGguYWJzKHRoaXMubm9kZS5wb3NpdGlvbi54IC0gZW5kUGxhdGZvcm1Qb3MueCk7XHJcblxyXG4gICAgICAgIHRoaXMubW92ZVRvd2FyZHMoZW5kUGxhdGZvcm1Qb3MsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vblJlYWNoRW5kT2ZQbGF0Zm9ybShkaXN0YW5jZVRyYXZlbGxlZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJlYWNoRW5kT2ZQbGF0Zm9ybShkaXN0YW5jZVRyYXZlbGxlZDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNTdGljaykge1xyXG4gICAgICAgICAgICB0aGlzLnN0aWNrU3Bhd25lci5kZWFjdGl2YXRlTm9kZSh0aGlzLnByZXZpb3VzU3RpY2subm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByZXZpb3VzU3RpY2sgPSB0aGlzLnN0aWNrO1xyXG5cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KFBsYXllckNvbnRyb2xsZXIuUExBWUVSX1JFQUNIRUQsIGRpc3RhbmNlVHJhdmVsbGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVUb3dhcmRzKHRhcmdldFBvc2l0aW9uOiBjYy5WZWMzLCBvbkNvbXBsZXRlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMucGxheWVyRmxpcC5kaXNhYmxlRmxpcCgpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50byh0aGlzLm1vdmVEdXJhdGlvbiwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zaXRpb24gfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckZsaXAuZW5hYmxlRmxpcCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYXRlRmFsbCgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KHRoaXMuUExBWUVSX0ZBTEwpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50byh0aGlzLmZhbGxEdXJhdGlvbiwgeyBwb3NpdGlvbjogY2MudjModGhpcy5ub2RlLngsIDIwMDApIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0aWNrLmluaXRpYXRlRmFsbCh0aGlzLmZhbGxEdXJhdGlvbik7XHJcbiAgICB9XHJcbn1cclxuIl19