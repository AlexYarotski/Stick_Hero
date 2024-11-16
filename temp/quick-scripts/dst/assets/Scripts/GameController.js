
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
    GameController.prototype.start = function () {
        this.previousPlatform = this.platformSpawner.spawnNode(cc.v2(this.startPlatformPos));
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
        if (!this.currentPlatform) {
            this.player.reset();
            this.currentPlatform = this.platformSpawner.spawnNode();
        }
        else {
            this.platformSpawner.deactivateNode(this.previousPlatform);
            this.previousPlatform = this.currentPlatform;
            this.currentPlatform = this.platformSpawner.spawnNode();
            this.player.reset();
        }
        var previousWorldPos = this.previousPlatform.parent.convertToWorldSpaceAR(this.previousPlatform.position);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELDZEQUF3RDtBQUV4RCx5REFBb0Q7QUFJOUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUF5RkM7UUF4Rm9CLGtCQUFZLEdBQVcsYUFBYSxDQUFDO1FBQ3JDLHVCQUFpQixHQUFXLGtCQUFrQixDQUFDO1FBQy9DLGdCQUFVLEdBQVcsV0FBVyxDQUFDO1FBR2pDLG9CQUFjLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEQsc0JBQWdCLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHOUQsWUFBTSxHQUFxQixJQUFJLENBQUM7UUFHaEMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBR3hDLG1CQUFhLEdBQWtCLElBQUksQ0FBQztRQUVwQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7O0lBcUU3QyxDQUFDO0lBbkVhLCtCQUFNLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVT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LElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUcsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDM0csQ0FBQztJQUVPLGdDQUFPLEdBQWY7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUE5RUQ7UUFEQyxRQUFRLENBQUMsMEJBQWdCLENBQUM7a0RBQ2E7SUFHeEM7UUFEQyxRQUFRLENBQUMseUJBQWUsQ0FBQzsyREFDc0I7SUFHaEQ7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQzt5REFDb0I7SUFoQjNCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0F5RmxDO0lBQUQscUJBQUM7Q0F6RkQsQUF5RkMsQ0F6RjJDLEVBQUUsQ0FBQyxTQUFTLEdBeUZ2RDtrQkF6Rm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyQ29udHJvbGxlciBmcm9tIFwiLi9QbGF5ZXJDb250cm9sbGVyXCI7XG5pbXBvcnQgUGxhdGZvcm1TcGF3bmVyIGZyb20gXCIuL1NwYXduZXIvUGxhdGZvcm1TcGF3bmVyXCI7XG5pbXBvcnQgU3RpY2tTcGF3bmVyIGZyb20gXCIuL1NwYXduZXIvU3RpY2tTcGF3bmVyXCI7XG5pbXBvcnQgRG91YmxlU3Bhd25lciBmcm9tIFwiLi9TcGF3bmVyL0RvdWJsZVNwYXduZXJcIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi9QbGF0Zm9ybVwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBTdGlja19GYWxsZW46IHN0cmluZyA9ICdzdGlja0ZhbGxlbic7XG4gICAgcHJpdmF0ZSByZWFkb25seSBNT1ZFTUVOVF9DT01QTEVURTogc3RyaW5nID0gJ21vdmVtZW50Q29tcGxldGUnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgU1RBUlRfR0FNRTogc3RyaW5nID0gJ3N0YXJ0R2FtZSc7XG5cblxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RhcnRQbGF5ZXJQb3M6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigtNTEwLCAtMzEwKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0YXJ0UGxhdGZvcm1Qb3M6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigtMTA1LCAtMTEwMCk7XG5cbiAgICBAcHJvcGVydHkoUGxheWVyQ29udHJvbGxlcilcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyQ29udHJvbGxlciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoUGxhdGZvcm1TcGF3bmVyKVxuICAgIHByaXZhdGUgcGxhdGZvcm1TcGF3bmVyOiBQbGF0Zm9ybVNwYXduZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KERvdWJsZVNwYXduZXIpXG4gICAgcHJpdmF0ZSBkb3VibGVTcGF3bmVyOiBEb3VibGVTcGF3bmVyID0gbnVsbDtcblxuICAgIHByaXZhdGUgY3VycmVudFN0aWNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGN1cnJlbnRQbGF0Zm9ybTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBwcmV2aW91c1BsYXRmb3JtOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuU3RpY2tfRmFsbGVuLCB0aGlzLm9uU3RpY2tGYWxsZW4sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLk1PVkVNRU5UX0NPTVBMRVRFLCB0aGlzLm9uTW92ZW1lbnRDb21wbGV0ZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnByZXZpb3VzUGxhdGZvcm0gPSB0aGlzLnBsYXRmb3JtU3Bhd25lci5zcGF3bk5vZGUoY2MudjIodGhpcy5zdGFydFBsYXRmb3JtUG9zKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuU3RpY2tfRmFsbGVuLCB0aGlzLm9uU3RpY2tGYWxsZW4sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5NT1ZFTUVOVF9DT01QTEVURSwgdGhpcy5vbk1vdmVtZW50Q29tcGxldGUsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEdhbWUoKSB7XG4gICAgICAgIHRoaXMucmVzZXRHYW1lKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEdhbWUoKSB7XG4gICAgICAgIHRoaXMucGxheWVyLm5vZGUuc2V0UG9zaXRpb24odGhpcy5zdGFydFBsYXllclBvcyk7XG4gICAgICAgIHRoaXMucGxheWVyLnJlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UGxhdGZvcm0gPSB0aGlzLnBsYXRmb3JtU3Bhd25lci5zcGF3bk5vZGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU3RpY2tGYWxsZW4oc3RpY2s6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RpY2sgPSBzdGljaztcblxuICAgICAgICBjb25zdCBzdGlja0VuZFBvc1ggPSB0aGlzLmN1cnJlbnRTdGljay54ICsgdGhpcy5jdXJyZW50U3RpY2suaGVpZ2h0IC0gdGhpcy5wbGF5ZXIubm9kZS53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IHN0aWNrV29ybGRFbmRQb3MgPSB0aGlzLmN1cnJlbnRTdGljay5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKFxuICAgICAgICAgICAgY2MudjIodGhpcy5jdXJyZW50U3RpY2sueCArIHRoaXMuY3VycmVudFN0aWNrLmhlaWdodCwgdGhpcy5jdXJyZW50U3RpY2sueSlcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwbGF0Zm9ybVdvcmxkUG9zID0gdGhpcy5jdXJyZW50UGxhdGZvcm0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmN1cnJlbnRQbGF0Zm9ybS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgY29uc3QgcGxhdGZvcm1TdGFydFggPSBwbGF0Zm9ybVdvcmxkUG9zLng7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtRW5kWCA9IHBsYXRmb3JtV29ybGRQb3MueCArIHRoaXMuY3VycmVudFBsYXRmb3JtLndpZHRoO1xuXG4gICAgICAgIGlmIChzdGlja1dvcmxkRW5kUG9zLnggPj0gcGxhdGZvcm1TdGFydFggJiYgc3RpY2tXb3JsZEVuZFBvcy54IDw9IHBsYXRmb3JtRW5kWCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZVRvRW5kT2ZQbGF0Zm9ybShwbGF0Zm9ybUVuZFgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZVRvRW5kT2ZTdGljayhzdGlja0VuZFBvc1gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk1vdmVtZW50Q29tcGxldGUoKSB7XG4gICAgICAgIGlmKCF0aGlzLmN1cnJlbnRQbGF0Zm9ybSl7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5yZXNldCgpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1TcGF3bmVyLnNwYXduTm9kZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF0Zm9ybVNwYXduZXIuZGVhY3RpdmF0ZU5vZGUodGhpcy5wcmV2aW91c1BsYXRmb3JtKTtcblxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1BsYXRmb3JtID0gdGhpcy5jdXJyZW50UGxhdGZvcm07XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1TcGF3bmVyLnNwYXduTm9kZSgpO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllci5yZXNldCgpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBwcmV2aW91c1dvcmxkUG9zID0gdGhpcy5wcmV2aW91c1BsYXRmb3JtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wcmV2aW91c1BsYXRmb3JtLnBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgY3VycmVudFdvcmxkUG9zID0gdGhpcy5jdXJyZW50UGxhdGZvcm0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmN1cnJlbnRQbGF0Zm9ybS5wb3NpdGlvbik7XG4gICAgICAgIHRoaXMuZG91YmxlU3Bhd25lci5zcGF3bk5vZGUoY2MudjMocHJldmlvdXNXb3JsZFBvcy54ICsgdGhpcy5wcmV2aW91c1BsYXRmb3JtLndpZHRoKSwgY3VycmVudFdvcmxkUG9zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVuZEdhbWUoKSB7XG4gICAgICAgIGNjLmxvZygnR2FtZSBPdmVyJyk7XG4gICAgfVxufVxuIl19