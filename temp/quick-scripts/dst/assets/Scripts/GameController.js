
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
        cc.log(this.node.x);
        cc.log(this.player.node.x);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELDZEQUF3RDtBQUV4RCx5REFBb0Q7QUFJOUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUEyRkM7UUExRm9CLGtCQUFZLEdBQVcsYUFBYSxDQUFDO1FBQ3JDLHVCQUFpQixHQUFXLGtCQUFrQixDQUFDO1FBQy9DLGtCQUFZLEdBQVcsYUFBYSxDQUFDO1FBQ3JDLHFCQUFlLEdBQVcsZ0JBQWdCLENBQUM7UUFFM0Msb0JBQWMsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxzQkFBZ0IsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUc5RCxZQUFNLEdBQXFCLElBQUksQ0FBQztRQUdoQyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFHeEMsbUJBQWEsR0FBa0IsSUFBSSxDQUFDO1FBRXBDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLHNCQUFnQixHQUFZLElBQUksQ0FBQzs7SUF1RTdDLENBQUM7SUFwRWEsK0JBQU0sR0FBaEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJ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Q0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzNHLENBQUM7SUFoRkQ7UUFEQyxRQUFRLENBQUMsMEJBQWdCLENBQUM7a0RBQ2E7SUFHeEM7UUFEQyxRQUFRLENBQUMseUJBQWUsQ0FBQzsyREFDc0I7SUFHaEQ7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQzt5REFDb0I7SUFoQjNCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EyRmxDO0lBQUQscUJBQUM7Q0EzRkQsQUEyRkMsQ0EzRjJDLEVBQUUsQ0FBQyxTQUFTLEdBMkZ2RDtrQkEzRm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyQ29udHJvbGxlciBmcm9tIFwiLi9QbGF5ZXJDb250cm9sbGVyXCI7XG5pbXBvcnQgUGxhdGZvcm1TcGF3bmVyIGZyb20gXCIuL1NwYXduZXIvUGxhdGZvcm1TcGF3bmVyXCI7XG5pbXBvcnQgU3RpY2tTcGF3bmVyIGZyb20gXCIuL1NwYXduZXIvU3RpY2tTcGF3bmVyXCI7XG5pbXBvcnQgRG91YmxlU3Bhd25lciBmcm9tIFwiLi9TcGF3bmVyL0RvdWJsZVNwYXduZXJcIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi9QbGF0Zm9ybVwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBTdGlja19GYWxsZW46IHN0cmluZyA9ICdzdGlja0ZhbGxlbic7XG4gICAgcHJpdmF0ZSByZWFkb25seSBNT1ZFTUVOVF9DT01QTEVURTogc3RyaW5nID0gJ21vdmVtZW50Q29tcGxldGUnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgTUFJTl9DTElDS0VEOiBzdHJpbmcgPSAnbWFpbkNsaWNrZWQnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgUkVTVEFSVF9DTElDS0VEOiBzdHJpbmcgPSAncmVzdGFydENsaWNrZWQnO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdGFydFBsYXllclBvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKC01MTAsIC0zMTApO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RhcnRQbGF0Zm9ybVBvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKC0xMDUsIC0xMTAwKTtcblxuICAgIEBwcm9wZXJ0eShQbGF5ZXJDb250cm9sbGVyKVxuICAgIHByaXZhdGUgcGxheWVyOiBQbGF5ZXJDb250cm9sbGVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShQbGF0Zm9ybVNwYXduZXIpXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybVNwYXduZXI6IFBsYXRmb3JtU3Bhd25lciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoRG91YmxlU3Bhd25lcilcbiAgICBwcml2YXRlIGRvdWJsZVNwYXduZXI6IERvdWJsZVNwYXduZXIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50U3RpY2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudFBsYXRmb3JtOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHByZXZpb3VzUGxhdGZvcm06IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgcGxheWVyUG9zOiBjYy5WZWMyO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5TdGlja19GYWxsZW4sIHRoaXMub25TdGlja0ZhbGxlbiwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuTU9WRU1FTlRfQ09NUExFVEUsIHRoaXMub25Nb3ZlbWVudENvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5NQUlOX0NMSUNLRUQsIHRoaXMucmVzZXRQbGF5ZXIsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlJFU1RBUlRfQ0xJQ0tFRCwgdGhpcy5yZXNldFBsYXllciwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuU3RpY2tfRmFsbGVuLCB0aGlzLm9uU3RpY2tGYWxsZW4sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5NT1ZFTUVOVF9DT01QTEVURSwgdGhpcy5vbk1vdmVtZW50Q29tcGxldGUsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5NQUlOX0NMSUNLRUQsIHRoaXMucmVzZXRQbGF5ZXIsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5SRVNUQVJUX0NMSUNLRUQsIHRoaXMucmVzZXRQbGF5ZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5wcmV2aW91c1BsYXRmb3JtID0gdGhpcy5wbGF0Zm9ybVNwYXduZXIuc3Bhd25Ob2RlKGNjLnYyKHRoaXMuc3RhcnRQbGF0Zm9ybVBvcykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRQbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucGxheWVyLm5vZGUuc2V0UG9zaXRpb24odGhpcy5wbGF5ZXJQb3MpO1xuXG4gICAgICAgIGNjLmxvZyh0aGlzLm5vZGUueCk7XG4gICAgICAgIGNjLmxvZyh0aGlzLnBsYXllci5ub2RlLngpO1xuXG4gICAgICAgIHRoaXMucGxheWVyLnJlc2V0KCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIG9uU3RpY2tGYWxsZW4oc3RpY2s6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RpY2sgPSBzdGljaztcbiAgICAgICAgdGhpcy5wbGF5ZXJQb3MgPSBjYy52Mih0aGlzLnBsYXllci5ub2RlLnBvc2l0aW9uLngsIHRoaXMucGxheWVyLm5vZGUucG9zaXRpb24ueSk7XG5cbiAgICAgICAgY29uc3Qgc3RpY2tFbmRQb3NYID0gdGhpcy5jdXJyZW50U3RpY2sueCArIHRoaXMuY3VycmVudFN0aWNrLmhlaWdodCAtIHRoaXMucGxheWVyLm5vZGUud2lkdGggLyAyO1xuICAgICAgICBjb25zdCBzdGlja1dvcmxkRW5kUG9zID0gdGhpcy5jdXJyZW50U3RpY2sucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihcbiAgICAgICAgICAgIGNjLnYyKHRoaXMuY3VycmVudFN0aWNrLnggKyB0aGlzLmN1cnJlbnRTdGljay5oZWlnaHQsIHRoaXMuY3VycmVudFN0aWNrLnkpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcGxhdGZvcm1Xb3JsZFBvcyA9IHRoaXMuY3VycmVudFBsYXRmb3JtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5jdXJyZW50UGxhdGZvcm0uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtU3RhcnRYID0gcGxhdGZvcm1Xb3JsZFBvcy54O1xuICAgICAgICBjb25zdCBwbGF0Zm9ybUVuZFggPSBwbGF0Zm9ybVdvcmxkUG9zLnggKyB0aGlzLmN1cnJlbnRQbGF0Zm9ybS53aWR0aDtcblxuICAgICAgICBpZiAoc3RpY2tXb3JsZEVuZFBvcy54ID49IHBsYXRmb3JtU3RhcnRYICYmIHN0aWNrV29ybGRFbmRQb3MueCA8PSBwbGF0Zm9ybUVuZFgpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVUb0VuZE9mUGxhdGZvcm0ocGxhdGZvcm1FbmRYKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVUb0VuZE9mU3RpY2soc3RpY2tFbmRQb3NYKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Nb3ZlbWVudENvbXBsZXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxhdGZvcm0gPSB0aGlzLnBsYXRmb3JtU3Bhd25lci5zcGF3bk5vZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzUGxhdGZvcm0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRmb3JtU3Bhd25lci5kZWFjdGl2YXRlTm9kZSh0aGlzLnByZXZpb3VzUGxhdGZvcm0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGxhdGZvcm0gPSB0aGlzLmN1cnJlbnRQbGF0Zm9ybTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXRmb3JtID0gdGhpcy5wbGF0Zm9ybVNwYXduZXIuc3Bhd25Ob2RlKCk7XG5cbiAgICAgICAgICAgIHRoaXMucGxheWVyLnJlc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2aW91c1dvcmxkUG9zID0gdGhpcy5wcmV2aW91c1BsYXRmb3JtPy5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucHJldmlvdXNQbGF0Zm9ybS5wb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXb3JsZFBvcyA9IHRoaXMuY3VycmVudFBsYXRmb3JtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5jdXJyZW50UGxhdGZvcm0ucG9zaXRpb24pO1xuXG4gICAgICAgIHRoaXMuZG91YmxlU3Bhd25lci5zcGF3bk5vZGUoY2MudjMocHJldmlvdXNXb3JsZFBvcy54ICsgdGhpcy5wcmV2aW91c1BsYXRmb3JtLndpZHRoKSwgY3VycmVudFdvcmxkUG9zKTtcbiAgICB9XG59XG4iXX0=