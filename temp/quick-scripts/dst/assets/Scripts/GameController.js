
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
var PlatformSpawner_1 = require("./PlatformSpawner");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.platformSpawner = null;
        _this.isGameActive = false;
        _this.currentStick = null;
        _this.platforms = [];
        return _this;
    }
    GameController.prototype.start = function () {
        this.initGame();
    };
    GameController.prototype.initGame = function () {
        this.isGameActive = true;
        this.resetGame();
    };
    GameController.prototype.resetGame = function () {
        this.player.node.setPosition(cc.v2(-600, -233));
        this.clearPlatforms();
        var initialPlatform = this.platformSpawner.spawnPlatform(cc.v2(-495, -708));
        this.platforms.push(initialPlatform);
        var nextPlatform = this.platformSpawner.spawnPlatform();
        this.platforms.push(nextPlatform);
        this.player.enableStickCreation();
    };
    GameController.prototype.clearPlatforms = function () {
        this.platforms.forEach(function (platform) { return platform.destroy(); });
        this.platforms = [];
    };
    GameController.prototype.onStickFallen = function (stickNode) {
        this.currentStick = stickNode;
        this.player.moveToEndOfStick(stickNode, this.onPlayerReachedEnd.bind(this));
    };
    GameController.prototype.onPlayerReachedEnd = function () {
        var newPlatform = this.platformSpawner.spawnPlatform(this.currentStick.getPosition());
        this.platforms.push(newPlatform);
        this.player.enableStickCreation();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELHFEQUFnRDtBQUUxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXFEQztRQW5ERyxZQUFNLEdBQXFCLElBQUksQ0FBQztRQUdoQyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFaEMsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsZUFBUyxHQUFjLEVBQUUsQ0FBQzs7SUE0Q3RDLENBQUM7SUExQ0csOEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFckMsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELHVDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsU0FBa0I7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEI7UUFDSSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxnQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBbEREO1FBREMsUUFBUSxDQUFDLDBCQUFnQixDQUFDO2tEQUNLO0lBR2hDO1FBREMsUUFBUSxDQUFDLHlCQUFlLENBQUM7MkRBQ2M7SUFMdkIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXFEbEM7SUFBRCxxQkFBQztDQXJERCxBQXFEQyxDQXJEMkMsRUFBRSxDQUFDLFNBQVMsR0FxRHZEO2tCQXJEb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gXCIuL1BsYXllckNvbnRyb2xsZXJcIjtcbmltcG9ydCBQbGF0Zm9ybVNwYXduZXIgZnJvbSBcIi4vUGxhdGZvcm1TcGF3bmVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KFBsYXllckNvbnRyb2xsZXIpXG4gICAgcGxheWVyOiBQbGF5ZXJDb250cm9sbGVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShQbGF0Zm9ybVNwYXduZXIpXG4gICAgcGxhdGZvcm1TcGF3bmVyOiBQbGF0Zm9ybVNwYXduZXIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBpc0dhbWVBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGN1cnJlbnRTdGljazogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBwbGF0Zm9ybXM6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEdhbWUoKTtcbiAgICB9XG5cbiAgICBpbml0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5pc0dhbWVBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlc2V0R2FtZSgpO1xuICAgIH1cblxuICAgIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5zZXRQb3NpdGlvbihjYy52MigtNjAwLCAtMjMzKSk7XG4gICAgICAgIHRoaXMuY2xlYXJQbGF0Zm9ybXMoKTtcblxuICAgICAgICBjb25zdCBpbml0aWFsUGxhdGZvcm0gPSB0aGlzLnBsYXRmb3JtU3Bhd25lci5zcGF3blBsYXRmb3JtKGNjLnYyKC00OTUsIC03MDgpKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMucHVzaChpbml0aWFsUGxhdGZvcm0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1TcGF3bmVyLnNwYXduUGxhdGZvcm0oKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMucHVzaChuZXh0UGxhdGZvcm0pO1xuXG4gICAgICAgIHRoaXMucGxheWVyLmVuYWJsZVN0aWNrQ3JlYXRpb24oKTtcbiAgICB9XG5cbiAgICBjbGVhclBsYXRmb3JtcygpIHtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMuZm9yRWFjaChwbGF0Zm9ybSA9PiBwbGF0Zm9ybS5kZXN0cm95KCkpO1xuICAgICAgICB0aGlzLnBsYXRmb3JtcyA9IFtdO1xuICAgIH1cblxuICAgIG9uU3RpY2tGYWxsZW4oc3RpY2tOb2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0aWNrID0gc3RpY2tOb2RlO1xuICAgICAgICB0aGlzLnBsYXllci5tb3ZlVG9FbmRPZlN0aWNrKHN0aWNrTm9kZSwgdGhpcy5vblBsYXllclJlYWNoZWRFbmQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFjaGVkRW5kKCkge1xuICAgICAgICBjb25zdCBuZXdQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1TcGF3bmVyLnNwYXduUGxhdGZvcm0odGhpcy5jdXJyZW50U3RpY2suZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIHRoaXMucGxhdGZvcm1zLnB1c2gobmV3UGxhdGZvcm0pO1xuICAgICAgICB0aGlzLnBsYXllci5lbmFibGVTdGlja0NyZWF0aW9uKCk7XG4gICAgfVxuXG4gICAgZW5kR2FtZSgpIHtcbiAgICAgICAgdGhpcy5pc0dhbWVBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2MubG9nKCdHYW1lIE92ZXInKTtcbiAgICB9XG59XG4iXX0=