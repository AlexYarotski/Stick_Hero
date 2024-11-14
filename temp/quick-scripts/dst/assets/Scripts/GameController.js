
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
        _this.startPlayerPos = new cc.Vec2(-503, -233);
        _this.startPlatformPos = new cc.Vec2(-500, -708);
        _this.player = null;
        _this.platformSpawner = null;
        _this.isGameActive = false;
        _this.currentStick = null;
        _this.platforms = [];
        return _this;
    }
    GameController.prototype.start = function () {
        this.initGame();
        cc.systemEvent.on('stickFallen', this.onStickFallen, this); // Подписываемся на событие падения стика
    };
    GameController.prototype.initGame = function () {
        this.isGameActive = true;
        this.resetGame();
    };
    GameController.prototype.resetGame = function () {
        this.player.node.setPosition(this.startPlayerPos);
        this.clearPlatforms();
        var initialPlatform = this.platformSpawner.spawnPlatform(cc.v2(this.startPlatformPos));
        this.platforms.push(initialPlatform);
        var nextPlatform = this.platformSpawner.spawnPlatform();
        this.platforms.push(nextPlatform);
        this.player.reset();
    };
    GameController.prototype.clearPlatforms = function () {
        this.platforms.forEach(function (platform) { return platform.destroy(); });
        this.platforms = [];
    };
    GameController.prototype.onStickFallen = function (stickNode) {
        this.currentStick = stickNode;
        var playerPosition = this.player.node.getPosition();
        var targetPlatform = this.getTargetPlatform(playerPosition);
        var stickEndX = this.currentStick.x + this.currentStick.width;
        var platformStartX = targetPlatform.x - targetPlatform.width / 2;
        var platformEndX = targetPlatform.x + targetPlatform.width / 2;
        if (stickEndX >= platformStartX && stickEndX <= platformEndX) {
            this.player.moveToEndOfPlatform(targetPlatform);
        }
        else {
            this.player.moveToEndOfStick(this.currentStick);
        }
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
        this.isGameActive = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsdURBQWtEO0FBQ2xELHFEQUFnRDtBQUdoRDtJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQTZFQztRQTVFb0Isb0JBQWMsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxzQkFBZ0IsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUdyRSxZQUFNLEdBQXFCLElBQUksQ0FBQztRQUdoQyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFaEMsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsZUFBUyxHQUFjLEVBQUUsQ0FBQzs7SUFpRXRDLENBQUM7SUEvRGEsOEJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFFLHlDQUF5QztJQUMxRyxDQUFDO0lBRU8saUNBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLGtDQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsRCxJQUFJLENB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RCxxQkFBQztDQTdFRCxBQTZFQyxDQTdFMkMsRUFBRSxDQUFDLFNBQVMsR0E2RXZEO2tCQTdFb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gXCIuL1BsYXllckNvbnRyb2xsZXJcIjtcbmltcG9ydCBQbGF0Zm9ybVNwYXduZXIgZnJvbSBcIi4vUGxhdGZvcm1TcGF3bmVyXCI7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzdGFydFBsYXllclBvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKC01MDMsIC0yMzMpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RhcnRQbGF0Zm9ybVBvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKC01MDAsIC03MDgpO1xuXG4gICAgQHByb3BlcnR5KFBsYXllckNvbnRyb2xsZXIpXG4gICAgcGxheWVyOiBQbGF5ZXJDb250cm9sbGVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShQbGF0Zm9ybVNwYXduZXIpXG4gICAgcGxhdGZvcm1TcGF3bmVyOiBQbGF0Zm9ybVNwYXduZXIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBpc0dhbWVBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGN1cnJlbnRTdGljazogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBwbGF0Zm9ybXM6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmluaXRHYW1lKCk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdzdGlja0ZhbGxlbicsIHRoaXMub25TdGlja0ZhbGxlbiwgdGhpcyk7ICAvLyDQn9C+0LTQv9C40YHRi9Cy0LDQtdC80YHRjyDQvdCwINGB0L7QsdGL0YLQuNC1INC/0LDQtNC10L3QuNGPINGB0YLQuNC60LBcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRHYW1lKCkge1xuICAgICAgICB0aGlzLmlzR2FtZUFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVzZXRHYW1lKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEdhbWUoKSB7XG4gICAgICAgIHRoaXMucGxheWVyLm5vZGUuc2V0UG9zaXRpb24odGhpcy5zdGFydFBsYXllclBvcyk7XG4gICAgICAgIHRoaXMuY2xlYXJQbGF0Zm9ybXMoKTtcblxuICAgICAgICBjb25zdCBpbml0aWFsUGxhdGZvcm0gPSB0aGlzLnBsYXRmb3JtU3Bhd25lci5zcGF3blBsYXRmb3JtKGNjLnYyKHRoaXMuc3RhcnRQbGF0Zm9ybVBvcykpO1xuICAgICAgICB0aGlzLnBsYXRmb3Jtcy5wdXNoKGluaXRpYWxQbGF0Zm9ybSk7XG5cbiAgICAgICAgY29uc3QgbmV4dFBsYXRmb3JtID0gdGhpcy5wbGF0Zm9ybVNwYXduZXIuc3Bhd25QbGF0Zm9ybSgpO1xuICAgICAgICB0aGlzLnBsYXRmb3Jtcy5wdXNoKG5leHRQbGF0Zm9ybSk7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsZWFyUGxhdGZvcm1zKCkge1xuICAgICAgICB0aGlzLnBsYXRmb3Jtcy5mb3JFYWNoKHBsYXRmb3JtID0+IHBsYXRmb3JtLmRlc3Ryb3koKSk7XG4gICAgICAgIHRoaXMucGxhdGZvcm1zID0gW107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblN0aWNrRmFsbGVuKHN0aWNrTm9kZTogY2MuTm9kZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGljayA9IHN0aWNrTm9kZTtcbiAgICAgICAgY29uc3QgcGxheWVyUG9zaXRpb24gPSB0aGlzLnBsYXllci5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRhcmdldFBsYXRmb3JtID0gdGhpcy5nZXRUYXJnZXRQbGF0Zm9ybShwbGF5ZXJQb3NpdGlvbik7XG5cbiAgICAgICAgY29uc3Qgc3RpY2tFbmRYID0gdGhpcy5jdXJyZW50U3RpY2sueCArIHRoaXMuY3VycmVudFN0aWNrLndpZHRoO1xuICAgICAgICBjb25zdCBwbGF0Zm9ybVN0YXJ0WCA9IHRhcmdldFBsYXRmb3JtLnggLSB0YXJnZXRQbGF0Zm9ybS53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtRW5kWCA9IHRhcmdldFBsYXRmb3JtLnggKyB0YXJnZXRQbGF0Zm9ybS53aWR0aCAvIDI7XG5cbiAgICAgICAgaWYgKHN0aWNrRW5kWCA+PSBwbGF0Zm9ybVN0YXJ0WCAmJiBzdGlja0VuZFggPD0gcGxhdGZvcm1FbmRYKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlVG9FbmRPZlBsYXRmb3JtKHRhcmdldFBsYXRmb3JtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVUb0VuZE9mU3RpY2sodGhpcy5jdXJyZW50U3RpY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRUYXJnZXRQbGF0Zm9ybShwbGF5ZXJQb3NpdGlvbjogY2MuVmVjMik6IGNjLk5vZGUge1xuICAgICAgICBmb3IgKGNvbnN0IHBsYXRmb3JtIG9mIHRoaXMucGxhdGZvcm1zKSB7XG4gICAgICAgICAgICBpZiAocGxhdGZvcm0ueCA+IHBsYXllclBvc2l0aW9uLngpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxhdGZvcm07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGF3blBsYXRmb3JtcygpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1zW3RoaXMucGxhdGZvcm1zLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBuZXdQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1TcGF3bmVyLnNwYXduUGxhdGZvcm0ocHJldmlvdXNQbGF0Zm9ybS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMucHVzaChuZXdQbGF0Zm9ybSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbmRHYW1lKCkge1xuICAgICAgICB0aGlzLmlzR2FtZUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy5sb2coJ0dhbWUgT3ZlcicpO1xuICAgIH1cbn1cbiJdfQ==