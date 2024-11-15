
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController_1 = require("./PlayerController");
var PlatformSpawner_1 = require("./PlatformSpawner");
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Stick_Fallen = 'stickFallen';
        _this.MOVEMENT_COMPLETE = 'movementComplete';
        _this.startPlayerPos = new cc.Vec2(-510, -310);
        _this.startPlatformPos = new cc.Vec2(-553, -1100);
        _this.player = null;
        _this.platformSpawner = null;
        _this.currentStick = null;
        _this.platforms = [];
        return _this;
    }
    GameController.prototype.onLoad = function () {
        cc.systemEvent.on(this.Stick_Fallen, this.onStickFallen, this);
        cc.systemEvent.on(this.MOVEMENT_COMPLETE, this.onMovementComplete, this);
    };
    GameController.prototype.start = function () {
        this.initGame();
    };
    GameController.prototype.onDestroy = function () {
        cc.systemEvent.off(this.Stick_Fallen, this.onStickFallen, this);
        cc.systemEvent.off(this.MOVEMENT_COMPLETE, this.onMovementComplete, this);
    };
    GameController.prototype.initGame = function () {
        this.resetGame();
    };
    GameController.prototype.resetGame = function () {
        this.player.node.setPosition(this.startPlayerPos);
        this.player.reset();
        this.clearPlatforms();
        var initialPlatform = this.platformSpawner.spawnPlatform(cc.v2(this.startPlatformPos));
        this.platforms.push(initialPlatform);
        var nextPlatform = this.platformSpawner.spawnPlatform();
        this.platforms.push(nextPlatform);
    };
    GameController.prototype.clearPlatforms = function () {
        this.platforms.forEach(function (platform) { return platform.destroy(); });
        this.platforms = [];
    };
    GameController.prototype.onStickFallen = function (stick) {
        this.currentStick = stick;
        var stickEndPosX = this.currentStick.x + this.currentStick.height - this.player.node.width / 2;
        var stickWorldEndPos = this.currentStick.parent.convertToWorldSpaceAR(cc.v2(this.currentStick.x + this.currentStick.height, this.currentStick.y));
        var targetPlatform = this.getTargetPlatform(cc.v2(this.player.node.x, this.player.node.y));
        var platformWorldPos = targetPlatform.parent.convertToWorldSpaceAR(targetPlatform.getPosition());
        var platformStartX = platformWorldPos.x;
        var platformEndX = platformWorldPos.x + targetPlatform.width;
        if (stickWorldEndPos.x >= platformStartX && stickWorldEndPos.x <= platformEndX) {
            this.player.moveToEndOfPlatform(platformEndX);
        }
        else {
            this.player.moveToEndOfStick(stickEndPosX);
        }
    };
    GameController.prototype.onMovementComplete = function () {
        this.player.reset();
    };
    GameController.prototype.getTargetPlatform = function (playerPosition) {
        for (var _i = 0, _a = this.platforms; _i < _a.length; _i++) {
            var platform = _a[_i];
            if (platform.x > playerPosition.x) {
                return platform;
            }
        }
        return null;
    };
    GameController.prototype.spawnPlatforms = function () {
        var previousPlatform = this.platforms[this.platforms.length - 1];
        var newPlatform = this.platformSpawner.spawnPlatform(previousPlatform.getPosition());
        this.platforms.push(newPlatform);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsdURBQWtEO0FBQ2xELHFEQUFnRDtBQUdoRDtJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW1HQztRQWxHb0Isa0JBQVksR0FBVyxhQUFhLENBQUM7UUFDckMsdUJBQWlCLEdBQVcsa0JBQWtCLENBQUM7UUFHL0Msb0JBQWMsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxzQkFBZ0IsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUd0RSxZQUFNLEdBQXFCLElBQUksQ0FBQztRQUdoQyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFaEMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsZUFBUyxHQUFjLEVBQUUsQ0FBQzs7SUFvRnRDLENBQUM7SUFsRmEsK0JBQU0sR0FBaEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRVMsOEJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRVMsa0NBQVMsR0FBbkI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdB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QUFFLENBQUM7SUFDeEIsQ0FBQztJQUdPLDBDQUFpQixHQUF6QixVQUEwQixjQUF1QjtRQUM3QyxLQUF1QixVQUFjLEVBQWQsS0FBQSxJQUFJLENBQUMsU0FBUyxFQUFkLGNBQWMsRUFBZCxJQUFjLEVBQUU7WUFBbEMsSUFBTSxRQUFRLFNBQUE7WUFDZixJQUFJLFFBQVEsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUMsRUFBRTtnQkFDL0IsT0FBTyxRQUFRLENBQUM7YUFDbkI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTyx1Q0FBYyxHQUF0QjtRQUNJLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTyxnQ0FBTyxHQUFmO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBekZEO1FBREMsUUFBUSxDQUFDLDBCQUFnQixDQUFDO2tEQUNLO0lBR2hDO1FBREMsUUFBUSxDQUFDLHlCQUFlLENBQUM7MkRBQ2M7SUFadkIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQW1HbEM7SUFBRCxxQkFBQztDQW5HRCxBQW1HQyxDQW5HMkMsRUFBRSxDQUFDLFNBQVMsR0FtR3ZEO2tCQW5Hb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGlja01hbmFnZXIgZnJvbSBcIi4vU3RpY2tNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gXCIuL1BsYXllckNvbnRyb2xsZXJcIjtcbmltcG9ydCBQbGF0Zm9ybVNwYXduZXIgZnJvbSBcIi4vUGxhdGZvcm1TcGF3bmVyXCI7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBTdGlja19GYWxsZW46IHN0cmluZyA9ICdzdGlja0ZhbGxlbic7XG4gICAgcHJpdmF0ZSByZWFkb25seSBNT1ZFTUVOVF9DT01QTEVURTogc3RyaW5nID0gJ21vdmVtZW50Q29tcGxldGUnO1xuXG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0YXJ0UGxheWVyUG9zOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoLTUxMCwgLTMxMCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzdGFydFBsYXRmb3JtUG9zOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoLTU1MywgLTExMDApO1xuXG4gICAgQHByb3BlcnR5KFBsYXllckNvbnRyb2xsZXIpXG4gICAgcGxheWVyOiBQbGF5ZXJDb250cm9sbGVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShQbGF0Zm9ybVNwYXduZXIpXG4gICAgcGxhdGZvcm1TcGF3bmVyOiBQbGF0Zm9ybVNwYXduZXIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50U3RpY2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgcGxhdGZvcm1zOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKXtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5TdGlja19GYWxsZW4sIHRoaXMub25TdGlja0ZhbGxlbiwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuTU9WRU1FTlRfQ09NUExFVEUsIHRoaXMub25Nb3ZlbWVudENvbXBsZXRlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEdhbWUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5TdGlja19GYWxsZW4sIHRoaXMub25TdGlja0ZhbGxlbiwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLk1PVkVNRU5UX0NPTVBMRVRFLCB0aGlzLm9uTW92ZW1lbnRDb21wbGV0ZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5zZXRQb3NpdGlvbih0aGlzLnN0YXJ0UGxheWVyUG9zKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVzZXQoKTtcblxuICAgICAgICB0aGlzLmNsZWFyUGxhdGZvcm1zKCk7XG5cbiAgICAgICAgY29uc3QgaW5pdGlhbFBsYXRmb3JtID0gdGhpcy5wbGF0Zm9ybVNwYXduZXIuc3Bhd25QbGF0Zm9ybShjYy52Mih0aGlzLnN0YXJ0UGxhdGZvcm1Qb3MpKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMucHVzaChpbml0aWFsUGxhdGZvcm0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1TcGF3bmVyLnNwYXduUGxhdGZvcm0oKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMucHVzaChuZXh0UGxhdGZvcm0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xlYXJQbGF0Zm9ybXMoKSB7XG4gICAgICAgIHRoaXMucGxhdGZvcm1zLmZvckVhY2gocGxhdGZvcm0gPT4gcGxhdGZvcm0uZGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU3RpY2tGYWxsZW4oc3RpY2s6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RpY2sgPSBzdGljaztcblxuICAgICAgICBjb25zdCBzdGlja0VuZFBvc1ggPSB0aGlzLmN1cnJlbnRTdGljay54ICsgdGhpcy5jdXJyZW50U3RpY2suaGVpZ2h0IC0gdGhpcy5wbGF5ZXIubm9kZS53aWR0aCAvIDI7XG5cbiAgICAgICAgY29uc3Qgc3RpY2tXb3JsZEVuZFBvcyA9IHRoaXMuY3VycmVudFN0aWNrLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoXG4gICAgICAgICAgICBjYy52Mih0aGlzLmN1cnJlbnRTdGljay54ICsgdGhpcy5jdXJyZW50U3RpY2suaGVpZ2h0LCB0aGlzLmN1cnJlbnRTdGljay55KVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFBsYXRmb3JtID0gdGhpcy5nZXRUYXJnZXRQbGF0Zm9ybShjYy52Mih0aGlzLnBsYXllci5ub2RlLngsIHRoaXMucGxheWVyLm5vZGUueSkpO1xuXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtV29ybGRQb3MgPSB0YXJnZXRQbGF0Zm9ybS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldFBsYXRmb3JtLmdldFBvc2l0aW9uKCkpO1xuXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtU3RhcnRYID0gcGxhdGZvcm1Xb3JsZFBvcy54O1xuICAgICAgICBjb25zdCBwbGF0Zm9ybUVuZFggPSBwbGF0Zm9ybVdvcmxkUG9zLnggKyB0YXJnZXRQbGF0Zm9ybS53aWR0aDtcblxuICAgICAgICBpZiAoc3RpY2tXb3JsZEVuZFBvcy54ID49IHBsYXRmb3JtU3RhcnRYICYmIHN0aWNrV29ybGRFbmRQb3MueCA8PSBwbGF0Zm9ybUVuZFgpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVUb0VuZE9mUGxhdGZvcm0ocGxhdGZvcm1FbmRYKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVUb0VuZE9mU3RpY2soc3RpY2tFbmRQb3NYKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Nb3ZlbWVudENvbXBsZXRlKCl7XG4gICAgICAgIHRoaXMucGxheWVyLnJlc2V0KCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGdldFRhcmdldFBsYXRmb3JtKHBsYXllclBvc2l0aW9uOiBjYy5WZWMyKTogY2MuTm9kZSB7XG4gICAgICAgIGZvciAoY29uc3QgcGxhdGZvcm0gb2YgdGhpcy5wbGF0Zm9ybXMpIHtcbiAgICAgICAgICAgIGlmIChwbGF0Zm9ybS54ID4gcGxheWVyUG9zaXRpb24ueCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwbGF0Zm9ybTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNwYXduUGxhdGZvcm1zKCkge1xuICAgICAgICBjb25zdCBwcmV2aW91c1BsYXRmb3JtID0gdGhpcy5wbGF0Zm9ybXNbdGhpcy5wbGF0Zm9ybXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IG5ld1BsYXRmb3JtID0gdGhpcy5wbGF0Zm9ybVNwYXduZXIuc3Bhd25QbGF0Zm9ybShwcmV2aW91c1BsYXRmb3JtLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB0aGlzLnBsYXRmb3Jtcy5wdXNoKG5ld1BsYXRmb3JtKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVuZEdhbWUoKSB7XG4gICAgICAgIGNjLmxvZygnR2FtZSBPdmVyJyk7XG4gICAgfVxufVxuIl19