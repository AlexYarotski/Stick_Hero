
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
        _this.START_GAME = 'startGame';
        _this.startPlayerPos = new cc.Vec2(-510, -310);
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
    };
    GameController.prototype.onDestroy = function () {
        cc.systemEvent.off(this.Stick_Fallen, this.onStickFallen, this);
        cc.systemEvent.off(this.MOVEMENT_COMPLETE, this.onMovementComplete, this);
    };
    GameController.prototype.start = function () {
        this.previousPlatform = this.platformSpawner.spawnNode(cc.v2(this.startPlatformPos));
    };
    GameController.prototype.initGame = function () {
        this.resetGame();
    };
    GameController.prototype.resetGame = function () {
        this.player.node.setPosition(this.startPlayerPos);
        this.player.reset();
        this.currentPlatform = this.platformSpawner.spawnNode();
    };
    GameController.prototype.onStickFallen = function (stick) {
        this.currentStick = stick;
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
    GameController.prototype.endGame = function () {
        cc.log('Game Over');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELDZEQUF3RDtBQUV4RCx5REFBb0Q7QUFJOUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUEyRkM7UUExRm9CLGtCQUFZLEdBQVcsYUFBYSxDQUFDO1FBQ3JDLHVCQUFpQixHQUFXLGtCQUFrQixDQUFDO1FBQy9DLGdCQUFVLEdBQVcsV0FBVyxDQUFDO1FBR2pDLG9CQUFjLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEQsc0JBQWdCLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHOUQsWUFBTSxHQUFxQixJQUFJLENBQUM7UUFHaEMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBR3hDLG1CQUFhLEdBQWtCLElBQUksQ0FBQztRQUVwQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7O0lBdUU3QyxDQUFDO0lBckVhLCtCQUFNLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVT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Q0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdkI7UUFFRCxJQUFNLGdCQUFnQixTQUFHLElBQUksQ0FBQyxnQkFBZ0IsMENBQUUsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RyxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMzRyxDQUFDO0lBR08sZ0NBQU8sR0FBZjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQWhGRDtRQURDLFFBQVEsQ0FBQywwQkFBZ0IsQ0FBQztrREFDYTtJQUd4QztRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDOzJEQUNzQjtJQUdoRDtRQURDLFFBQVEsQ0FBQyx1QkFBYSxDQUFDO3lEQUNvQjtJQWhCM0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTJGbEM7SUFBRCxxQkFBQztDQTNGRCxBQTJGQyxDQTNGMkMsRUFBRSxDQUFDLFNBQVMsR0EyRnZEO2tCQTNGb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gXCIuL1BsYXllckNvbnRyb2xsZXJcIjtcbmltcG9ydCBQbGF0Zm9ybVNwYXduZXIgZnJvbSBcIi4vU3Bhd25lci9QbGF0Zm9ybVNwYXduZXJcIjtcbmltcG9ydCBTdGlja1NwYXduZXIgZnJvbSBcIi4vU3Bhd25lci9TdGlja1NwYXduZXJcIjtcbmltcG9ydCBEb3VibGVTcGF3bmVyIGZyb20gXCIuL1NwYXduZXIvRG91YmxlU3Bhd25lclwiO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuL1BsYXRmb3JtXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IFN0aWNrX0ZhbGxlbjogc3RyaW5nID0gJ3N0aWNrRmFsbGVuJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IE1PVkVNRU5UX0NPTVBMRVRFOiBzdHJpbmcgPSAnbW92ZW1lbnRDb21wbGV0ZSc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBTVEFSVF9HQU1FOiBzdHJpbmcgPSAnc3RhcnRHYW1lJztcblxuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdGFydFBsYXllclBvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKC01MTAsIC0zMTApO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RhcnRQbGF0Zm9ybVBvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKC0xMDUsIC0xMTAwKTtcblxuICAgIEBwcm9wZXJ0eShQbGF5ZXJDb250cm9sbGVyKVxuICAgIHByaXZhdGUgcGxheWVyOiBQbGF5ZXJDb250cm9sbGVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShQbGF0Zm9ybVNwYXduZXIpXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybVNwYXduZXI6IFBsYXRmb3JtU3Bhd25lciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoRG91YmxlU3Bhd25lcilcbiAgICBwcml2YXRlIGRvdWJsZVNwYXduZXI6IERvdWJsZVNwYXduZXIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50U3RpY2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudFBsYXRmb3JtOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHByZXZpb3VzUGxhdGZvcm06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5TdGlja19GYWxsZW4sIHRoaXMub25TdGlja0ZhbGxlbiwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuTU9WRU1FTlRfQ09NUExFVEUsIHRoaXMub25Nb3ZlbWVudENvbXBsZXRlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5TdGlja19GYWxsZW4sIHRoaXMub25TdGlja0ZhbGxlbiwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLk1PVkVNRU5UX0NPTVBMRVRFLCB0aGlzLm9uTW92ZW1lbnRDb21wbGV0ZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnByZXZpb3VzUGxhdGZvcm0gPSB0aGlzLnBsYXRmb3JtU3Bhd25lci5zcGF3bk5vZGUoY2MudjIodGhpcy5zdGFydFBsYXRmb3JtUG9zKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5zZXRQb3NpdGlvbih0aGlzLnN0YXJ0UGxheWVyUG9zKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVzZXQoKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1TcGF3bmVyLnNwYXduTm9kZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdGlja0ZhbGxlbihzdGljazogY2MuTm9kZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGljayA9IHN0aWNrO1xuXG4gICAgICAgIGNvbnN0IHN0aWNrRW5kUG9zWCA9IHRoaXMuY3VycmVudFN0aWNrLnggKyB0aGlzLmN1cnJlbnRTdGljay5oZWlnaHQgLSB0aGlzLnBsYXllci5ub2RlLndpZHRoIC8gMjtcbiAgICAgICAgY29uc3Qgc3RpY2tXb3JsZEVuZFBvcyA9IHRoaXMuY3VycmVudFN0aWNrLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoXG4gICAgICAgICAgICBjYy52Mih0aGlzLmN1cnJlbnRTdGljay54ICsgdGhpcy5jdXJyZW50U3RpY2suaGVpZ2h0LCB0aGlzLmN1cnJlbnRTdGljay55KVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtV29ybGRQb3MgPSB0aGlzLmN1cnJlbnRQbGF0Zm9ybS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuY3VycmVudFBsYXRmb3JtLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICBjb25zdCBwbGF0Zm9ybVN0YXJ0WCA9IHBsYXRmb3JtV29ybGRQb3MueDtcbiAgICAgICAgY29uc3QgcGxhdGZvcm1FbmRYID0gcGxhdGZvcm1Xb3JsZFBvcy54ICsgdGhpcy5jdXJyZW50UGxhdGZvcm0ud2lkdGg7XG5cbiAgICAgICAgaWYgKHN0aWNrV29ybGRFbmRQb3MueCA+PSBwbGF0Zm9ybVN0YXJ0WCAmJiBzdGlja1dvcmxkRW5kUG9zLnggPD0gcGxhdGZvcm1FbmRYKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlVG9FbmRPZlBsYXRmb3JtKHBsYXRmb3JtRW5kWCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlVG9FbmRPZlN0aWNrKHN0aWNrRW5kUG9zWCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTW92ZW1lbnRDb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXRmb3JtID0gdGhpcy5wbGF0Zm9ybVNwYXduZXIuc3Bhd25Ob2RlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aW91c1BsYXRmb3JtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0Zm9ybVNwYXduZXIuZGVhY3RpdmF0ZU5vZGUodGhpcy5wcmV2aW91c1BsYXRmb3JtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1BsYXRmb3JtID0gdGhpcy5jdXJyZW50UGxhdGZvcm07XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1TcGF3bmVyLnNwYXduTm9kZSgpO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllci5yZXNldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldmlvdXNXb3JsZFBvcyA9IHRoaXMucHJldmlvdXNQbGF0Zm9ybT8ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnByZXZpb3VzUGxhdGZvcm0ucG9zaXRpb24pO1xuICAgICAgICBjb25zdCBjdXJyZW50V29ybGRQb3MgPSB0aGlzLmN1cnJlbnRQbGF0Zm9ybS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuY3VycmVudFBsYXRmb3JtLnBvc2l0aW9uKTtcblxuICAgICAgICB0aGlzLmRvdWJsZVNwYXduZXIuc3Bhd25Ob2RlKGNjLnYzKHByZXZpb3VzV29ybGRQb3MueCArIHRoaXMucHJldmlvdXNQbGF0Zm9ybS53aWR0aCksIGN1cnJlbnRXb3JsZFBvcyk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGVuZEdhbWUoKSB7XG4gICAgICAgIGNjLmxvZygnR2FtZSBPdmVyJyk7XG4gICAgfVxufVxuIl19