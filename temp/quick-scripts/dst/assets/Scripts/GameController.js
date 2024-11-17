
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb1e9KvBYVDdrI1UYxfxL5w', 'GameController');
// Scripts/GameController.ts

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
var PlatformSpawner_1 = require("./Spawner/PlatformSpawner");
var DoubleSpawner_1 = require("./Spawner/DoubleSpawner");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Stick_Fallen = 'stickFallen';
        _this.MOVEMENT_COMPLETE = 'movementComplete';
        _this.MAIN_CLICKED = 'mainClicked';
        _this.RESTART_CLICKED = 'restartClicked';
        _this.startPlatformPos = new cc.Vec2(-105, -1100);
        _this.player = null;
        _this.platformSpawner = null;
        _this.doubleSpawner = null;
        _this.currentStick = null;
        _this.currentPlatform = null;
        _this.previousPlatform = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
        cc.systemEvent.on(this.Stick_Fallen, this.onStickFallen, this);
        cc.systemEvent.on(this.MOVEMENT_COMPLETE, this.onMovementComplete, this);
        cc.systemEvent.on(this.MAIN_CLICKED, this.resetPlayer, this);
        cc.systemEvent.on(this.RESTART_CLICKED, this.resetPlayer, this);
    };
    GameController.prototype.onDestroy = function () {
        cc.systemEvent.off(this.Stick_Fallen, this.onStickFallen, this);
        cc.systemEvent.off(this.MOVEMENT_COMPLETE, this.onMovementComplete, this);
        cc.systemEvent.off(this.MAIN_CLICKED, this.resetPlayer, this);
        cc.systemEvent.off(this.RESTART_CLICKED, this.resetPlayer, this);
    };
    GameController.prototype.start = function () {
        this.previousPlatform = this.platformSpawner.spawnNode(cc.v2(this.startPlatformPos));
    };
    GameController.prototype.resetPlayer = function () {
        this.player.node.setPosition(this.playerPos);
        this.player.reset();
    };
    GameController.prototype.onStickFallen = function (stick) {
        this.currentStick = stick;
        this.playerPos = cc.v2(this.player.node.position.x, this.player.node.position.y);
        var stickEndPosX = this.currentStick.x + this.currentStick.height - this.player.node.width / 2;
        var stickWorldEndPos = this.currentStick.parent.convertToWorldSpaceAR(cc.v2(this.currentStick.x + this.currentStick.height, this.currentStick.y));
        var platformWorldPos = this.currentPlatform.parent.convertToWorldSpaceAR(this.currentPlatform.getPosition());
        var platformStartX = platformWorldPos.x;
        var platformEndX = platformWorldPos.x + this.currentPlatform.width;
        if (stickWorldEndPos.x >= platformStartX && stickWorldEndPos.x <= platformEndX) {
            this.player.moveToEndOfPlatform(platformEndX);
        }
        else {
            this.player.moveToEndOfStick(stickEndPosX);
        }
    };
    GameController.prototype.onMovementComplete = function () {
        var _a;
        if (!this.currentPlatform) {
            this.player.reset();
            this.currentPlatform = this.platformSpawner.spawnNode();
        }
        else {
            if (this.previousPlatform) {
                this.platformSpawner.deactivateNode(this.previousPlatform);
            }
            this.previousPlatform = this.currentPlatform;
            this.currentPlatform = this.platformSpawner.spawnNode();
            this.player.reset();
        }
        var previousWorldPos = (_a = this.previousPlatform) === null || _a === void 0 ? void 0 : _a.parent.convertToWorldSpaceAR(this.previousPlatform.position);
        var currentWorldPos = this.currentPlatform.parent.convertToWorldSpaceAR(this.currentPlatform.position);
        this.doubleSpawner.spawnNode(cc.v3(previousWorldPos.x + this.previousPlatform.width), currentWorldPos);
    };
    __decorate([
        property(PlayerController_1.default)
    ], GameController.prototype, "player", void 0);
    __decorate([
        property(PlatformSpawner_1.default)
    ], GameController.prototype, "platformSpawner", void 0);
    __decorate([
        property(DoubleSpawner_1.default)
    ], GameController.prototype, "doubleSpawner", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.default = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELDZEQUF3RDtBQUV4RCx5REFBb0Q7QUFJOUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFzRkM7UUFyRm9CLGtCQUFZLEdBQVcsYUFBYSxDQUFDO1FBQ3JDLHVCQUFpQixHQUFXLGtCQUFrQixDQUFDO1FBQy9DLGtCQUFZLEdBQVcsYUFBYSxDQUFDO1FBQ3JDLHFCQUFlLEdBQVcsZ0JBQWdCLENBQUM7UUFFM0Msc0JBQWdCLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHOUQsWUFBTSxHQUFxQixJQUFJLENBQUM7UUFHaEMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBR3hDLG1CQUFhLEdBQWtCLElBQUksQ0FBQztRQUVwQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7O0lBbUU3QyxDQUFDO0lBaEVhLCtCQUFNLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENB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QUFzRkMsQ0F0RjJDLEVBQUUsQ0FBQyxTQUFTLEdBc0Z2RDtrQkF0Rm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyQ29udHJvbGxlciBmcm9tIFwiLi9QbGF5ZXJDb250cm9sbGVyXCI7XHJcbmltcG9ydCBQbGF0Zm9ybVNwYXduZXIgZnJvbSBcIi4vU3Bhd25lci9QbGF0Zm9ybVNwYXduZXJcIjtcclxuaW1wb3J0IFN0aWNrU3Bhd25lciBmcm9tIFwiLi9TcGF3bmVyL1N0aWNrU3Bhd25lclwiO1xyXG5pbXBvcnQgRG91YmxlU3Bhd25lciBmcm9tIFwiLi9TcGF3bmVyL0RvdWJsZVNwYXduZXJcIjtcclxuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuL1BsYXRmb3JtXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgU3RpY2tfRmFsbGVuOiBzdHJpbmcgPSAnc3RpY2tGYWxsZW4nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBNT1ZFTUVOVF9DT01QTEVURTogc3RyaW5nID0gJ21vdmVtZW50Q29tcGxldGUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBNQUlOX0NMSUNLRUQ6IHN0cmluZyA9ICdtYWluQ2xpY2tlZCc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IFJFU1RBUlRfQ0xJQ0tFRDogc3RyaW5nID0gJ3Jlc3RhcnRDbGlja2VkJztcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0YXJ0UGxhdGZvcm1Qb3M6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigtMTA1LCAtMTEwMCk7XHJcblxyXG4gICAgQHByb3BlcnR5KFBsYXllckNvbnRyb2xsZXIpXHJcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFBsYXRmb3JtU3Bhd25lcilcclxuICAgIHByaXZhdGUgcGxhdGZvcm1TcGF3bmVyOiBQbGF0Zm9ybVNwYXduZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShEb3VibGVTcGF3bmVyKVxyXG4gICAgcHJpdmF0ZSBkb3VibGVTcGF3bmVyOiBEb3VibGVTcGF3bmVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRTdGljazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRQbGF0Zm9ybTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHByZXZpb3VzUGxhdGZvcm06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXJQb3M6IGNjLlZlYzI7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlN0aWNrX0ZhbGxlbiwgdGhpcy5vblN0aWNrRmFsbGVuLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLk1PVkVNRU5UX0NPTVBMRVRFLCB0aGlzLm9uTW92ZW1lbnRDb21wbGV0ZSwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5NQUlOX0NMSUNLRUQsIHRoaXMucmVzZXRQbGF5ZXIsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuUkVTVEFSVF9DTElDS0VELCB0aGlzLnJlc2V0UGxheWVyLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLlN0aWNrX0ZhbGxlbiwgdGhpcy5vblN0aWNrRmFsbGVuLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5NT1ZFTUVOVF9DT01QTEVURSwgdGhpcy5vbk1vdmVtZW50Q29tcGxldGUsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLk1BSU5fQ0xJQ0tFRCwgdGhpcy5yZXNldFBsYXllciwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuUkVTVEFSVF9DTElDS0VELCB0aGlzLnJlc2V0UGxheWVyLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1BsYXRmb3JtID0gdGhpcy5wbGF0Zm9ybVNwYXduZXIuc3Bhd25Ob2RlKGNjLnYyKHRoaXMuc3RhcnRQbGF0Zm9ybVBvcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRQbGF5ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5zZXRQb3NpdGlvbih0aGlzLnBsYXllclBvcyk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblN0aWNrRmFsbGVuKHN0aWNrOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RpY2sgPSBzdGljaztcclxuICAgICAgICB0aGlzLnBsYXllclBvcyA9IGNjLnYyKHRoaXMucGxheWVyLm5vZGUucG9zaXRpb24ueCwgdGhpcy5wbGF5ZXIubm9kZS5wb3NpdGlvbi55KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RpY2tFbmRQb3NYID0gdGhpcy5jdXJyZW50U3RpY2sueCArIHRoaXMuY3VycmVudFN0aWNrLmhlaWdodCAtIHRoaXMucGxheWVyLm5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgIGNvbnN0IHN0aWNrV29ybGRFbmRQb3MgPSB0aGlzLmN1cnJlbnRTdGljay5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKFxyXG4gICAgICAgICAgICBjYy52Mih0aGlzLmN1cnJlbnRTdGljay54ICsgdGhpcy5jdXJyZW50U3RpY2suaGVpZ2h0LCB0aGlzLmN1cnJlbnRTdGljay55KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtV29ybGRQb3MgPSB0aGlzLmN1cnJlbnRQbGF0Zm9ybS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuY3VycmVudFBsYXRmb3JtLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtU3RhcnRYID0gcGxhdGZvcm1Xb3JsZFBvcy54O1xyXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtRW5kWCA9IHBsYXRmb3JtV29ybGRQb3MueCArIHRoaXMuY3VycmVudFBsYXRmb3JtLndpZHRoO1xyXG5cclxuICAgICAgICBpZiAoc3RpY2tXb3JsZEVuZFBvcy54ID49IHBsYXRmb3JtU3RhcnRYICYmIHN0aWNrV29ybGRFbmRQb3MueCA8PSBwbGF0Zm9ybUVuZFgpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZVRvRW5kT2ZQbGF0Zm9ybShwbGF0Zm9ybUVuZFgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVUb0VuZE9mU3RpY2soc3RpY2tFbmRQb3NYKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk1vdmVtZW50Q29tcGxldGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5yZXNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1TcGF3bmVyLnNwYXduTm9kZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzUGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhdGZvcm1TcGF3bmVyLmRlYWN0aXZhdGVOb2RlKHRoaXMucHJldmlvdXNQbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNQbGF0Zm9ybSA9IHRoaXMuY3VycmVudFBsYXRmb3JtO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1TcGF3bmVyLnNwYXduTm9kZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVzZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzV29ybGRQb3MgPSB0aGlzLnByZXZpb3VzUGxhdGZvcm0/LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wcmV2aW91c1BsYXRmb3JtLnBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50V29ybGRQb3MgPSB0aGlzLmN1cnJlbnRQbGF0Zm9ybS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuY3VycmVudFBsYXRmb3JtLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb3VibGVTcGF3bmVyLnNwYXduTm9kZShjYy52MyhwcmV2aW91c1dvcmxkUG9zLnggKyB0aGlzLnByZXZpb3VzUGxhdGZvcm0ud2lkdGgpLCBjdXJyZW50V29ybGRQb3MpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==