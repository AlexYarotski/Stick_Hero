
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/GameController');
require('./assets/Scripts/Platform');
require('./assets/Scripts/PlatformSpawner');
require('./assets/Scripts/PlayerController');
require('./assets/Scripts/StickManager ');
require('./assets/Scripts/TouchController');
require('./assets/Scripts/UIManager');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stick = null;
        _this.isMoving = false;
        return _this;
    }
    PlayerController.prototype.enableStickCreation = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.startCreatingStick, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.stopCreatingStick, this);
    };
    PlayerController.prototype.startCreatingStick = function () {
        this.stick = new cc.Node("Stick");
        this.stick.addComponent(cc.Sprite);
        this.stick.setPosition(this.node.position.add(cc.v3(0, this.node.height / 2, 0)));
        this.stick.parent = this.node.parent;
        this.stick.height = 0;
        this.schedule(this.growStick, 0.02);
    };
    PlayerController.prototype.growStick = function () {
        this.stick.height += 10; // Примерная скорость роста
    };
    PlayerController.prototype.stopCreatingStick = function () {
        this.unschedule(this.growStick);
        this.rotateStick();
    };
    PlayerController.prototype.rotateStick = function () {
        var _this = this;
        cc.tween(this.stick)
            .to(0.5, { angle: -90 }, { easing: 'cubicOut' })
            .call(function () {
            // Уведомляем GameController, что палка упала
            cc.systemEvent.emit('stick-fallen', _this.stick);
        })
            .start();
    };
    PlayerController.prototype.moveToEndOfStick = function (stickNode, onComplete) {
        var _this = this;
        this.isMoving = true;
        var targetPosition = stickNode.position.add(cc.v3(stickNode.width, 0, 0));
        var targetPosition3D = new cc.Vec3(targetPosition.x, targetPosition.y, 0);
        cc.tween(this.node)
            .to(1, { position: targetPosition3D }, { easing: 'sineInOut' })
            .call(function () {
            _this.isMoving = false;
            if (onComplete)
                onComplete();
        })
            .start();
    };
    PlayerController = __decorate([
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQW1EQztRQWxEVyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGNBQVEsR0FBWSxLQUFLLENBQUM7O0lBaUR0QyxDQUFDO0lBL0NHLDhDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsNkNBQWtCLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQywyQkFBMkI7SUFDeEQsQ0FBQztJQUVELDRDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUFBLGlCQVFDO1FBUEcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2YsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQy9DLElBQUksQ0FBQztZQUNGLDZDQUE2QztZQUM3QyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCwyQ0FBZ0IsR0FBaEIsVUFBaUIsU0FBa0IsRUFBRSxVQUFvQjtRQUF6RCxpQkFZQztRQVhHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFNLGdCQUFnQixHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQzlELElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksVUFBVTtnQkFBRSxVQUFVLEVBQUUsQ0FBQztRQUNqQyxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBbERnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQW1EcEM7SUFBRCx1QkFBQztDQW5ERCxBQW1EQyxDQW5ENkMsRUFBRSxDQUFDLFNBQVMsR0FtRHpEO2tCQW5Eb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdGljazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGlzTW92aW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgZW5hYmxlU3RpY2tDcmVhdGlvbigpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuc3RhcnRDcmVhdGluZ1N0aWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnN0b3BDcmVhdGluZ1N0aWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydENyZWF0aW5nU3RpY2soKSB7XHJcbiAgICAgICAgdGhpcy5zdGljayA9IG5ldyBjYy5Ob2RlKFwiU3RpY2tcIik7XHJcbiAgICAgICAgdGhpcy5zdGljay5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLnN0aWNrLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoY2MudjMoMCwgdGhpcy5ub2RlLmhlaWdodCAvIDIsIDApKSk7XHJcbiAgICAgICAgdGhpcy5zdGljay5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIHRoaXMuc3RpY2suaGVpZ2h0ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdyb3dTdGljaywgMC4wMik7XHJcbiAgICB9XHJcblxyXG4gICAgZ3Jvd1N0aWNrKCkge1xyXG4gICAgICAgIHRoaXMuc3RpY2suaGVpZ2h0ICs9IDEwOyAvLyDQn9GA0LjQvNC10YDQvdCw0Y8g0YHQutC+0YDQvtGB0YLRjCDRgNC+0YHRgtCwXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcENyZWF0aW5nU3RpY2soKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ3Jvd1N0aWNrKTtcclxuICAgICAgICB0aGlzLnJvdGF0ZVN0aWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRlU3RpY2soKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zdGljaylcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBhbmdsZTogLTkwIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vINCj0LLQtdC00L7QvNC70Y/QtdC8IEdhbWVDb250cm9sbGVyLCDRh9GC0L4g0L/QsNC70LrQsCDRg9C/0LDQu9CwXHJcbiAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KCdzdGljay1mYWxsZW4nLCB0aGlzLnN0aWNrKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvRW5kT2ZTdGljayhzdGlja05vZGU6IGNjLk5vZGUsIG9uQ29tcGxldGU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSBzdGlja05vZGUucG9zaXRpb24uYWRkKGNjLnYzKHN0aWNrTm9kZS53aWR0aCwgMCwgMCkpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uM0QgPSBuZXcgY2MuVmVjMyh0YXJnZXRQb3NpdGlvbi54LCB0YXJnZXRQb3NpdGlvbi55LCAwKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zaXRpb24zRCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/StickManager .js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd33a7e6fpJCoY8QwJ2r8rLQ', 'StickManager ');
// Scripts/StickManager .ts

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
var StickManager = /** @class */ (function (_super) {
    __extends(StickManager, _super);
    function StickManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TOUCHED_START = 'touchStart';
        _this.TOUCHED_END = 'touchEnd';
        _this.isGrowing = false;
        _this.isStickPlaced = false;
        _this.growSpeed = 100;
        return _this;
    }
    StickManager.prototype.onEnable = function () {
        cc.systemEvent.on(this.TOUCHED_START, this.onTouchStart, this);
        cc.systemEvent.on(this.TOUCHED_END, this.onTouchEnd, this);
    };
    StickManager.prototype.onDisable = function () {
        cc.systemEvent.off(this.TOUCHED_START, this.onTouchStart, this);
        cc.systemEvent.off(this.TOUCHED_END, this.onTouchEnd, this);
    };
    StickManager.prototype.onTouchStart = function () {
        if (this.isStickPlaced)
            return;
        this.startGrowing();
    };
    StickManager.prototype.onTouchEnd = function () {
        if (this.isStickPlaced)
            return;
        this.stopGrowing();
    };
    StickManager.prototype.startGrowing = function () {
        this.isGrowing = true;
        this.schedule(this.growStick, 0.02);
    };
    StickManager.prototype.stopGrowing = function () {
        this.isGrowing = false;
        this.unschedule(this.growStick);
        this.rotateStick();
        this.isStickPlaced = true;
    };
    StickManager.prototype.growStick = function () {
        if (!this.isGrowing)
            return;
        this.node.height += this.growSpeed * 0.02;
    };
    StickManager.prototype.rotateStick = function () {
        cc.tween(this.node)
            .to(0.5, { angle: -90 }, { easing: 'cubicOut' })
            // .call(() => {
            //     this.isStickPlaced = false;
            // })
            .start();
    };
    StickManager = __decorate([
        ccclass
    ], StickManager);
    return StickManager;
}(cc.Component));
exports.default = StickManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3RpY2tNYW5hZ2VyIC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXFEQztRQXBEb0IsbUJBQWEsR0FBVyxZQUFZLENBQUM7UUFDckMsaUJBQVcsR0FBVyxVQUFVLENBQUM7UUFFMUMsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixlQUFTLEdBQVcsR0FBRyxDQUFDOztJQStDcEMsQ0FBQztJQTdDYSwrQkFBUSxHQUFsQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRCxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVTLGdDQUFTLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU8sbUNBQVksR0FBcEI7UUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsT0FBTztRQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLGlDQUFVLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLE9BQU87UUFDL0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFUyxtQ0FBWSxHQUF0QjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRVMsa0NBQVcsR0FBckI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVPLGdDQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUM5QyxDQUFDO0lBRU8sa0NBQVcsR0FBbkI7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7WUFDaEQsZ0JBQWdCO1lBQ2hCLGtDQUFrQztZQUNsQyxLQUFLO2FBQ0osS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQXBEZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXFEaEM7SUFBRCxtQkFBQztDQXJERCxBQXFEQyxDQXJEeUMsRUFBRSxDQUFDLFNBQVMsR0FxRHJEO2tCQXJEb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGlja01hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgVE9VQ0hFRF9TVEFSVDogc3RyaW5nID0gJ3RvdWNoU3RhcnQnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgVE9VQ0hFRF9FTkQ6IHN0cmluZyA9ICd0b3VjaEVuZCc7XG5cbiAgICBwcml2YXRlIGlzR3Jvd2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNTdGlja1BsYWNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgZ3Jvd1NwZWVkOiBudW1iZXIgPSAxMDA7XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuVE9VQ0hFRF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlRPVUNIRURfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLlRPVUNIRURfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuVE9VQ0hFRF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RpY2tQbGFjZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGFydEdyb3dpbmcoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RpY2tQbGFjZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdG9wR3Jvd2luZygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdGFydEdyb3dpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNHcm93aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdyb3dTdGljaywgMC4wMik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0b3BHcm93aW5nKCkge1xuICAgICAgICB0aGlzLmlzR3Jvd2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5ncm93U3RpY2spO1xuICAgICAgICB0aGlzLnJvdGF0ZVN0aWNrKCk7XG4gICAgICAgIHRoaXMuaXNTdGlja1BsYWNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBncm93U3RpY2soKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0dyb3dpbmcpIHJldHVybjtcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCArPSB0aGlzLmdyb3dTcGVlZCAqIDAuMDI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb3RhdGVTdGljaygpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuNSwgeyBhbmdsZTogLTkwIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pXG4gICAgICAgICAgICAvLyAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5pc1N0aWNrUGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0a464v+zr1PrYVHVkUCohnC', 'UIManager');
// Scripts/UIManager.ts

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
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.score = 0;
        return _this;
    }
    UIManager.prototype.updateScore = function (value) {
        this.score += value;
        this.scoreLabel.string = "Score: " + this.score;
    };
    UIManager.prototype.resetScore = function () {
        this.score = 0;
        this.updateScore(0);
    };
    __decorate([
        property(cc.Label)
    ], UIManager.prototype, "scoreLabel", void 0);
    UIManager = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.default = UIManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBZUM7UUFiRyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUVwQixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQVc5QixDQUFDO0lBVEcsK0JBQVcsR0FBWCxVQUFZLEtBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsWUFBVSxJQUFJLENBQUMsS0FBTyxDQUFDO0lBQ3BELENBQUM7SUFFRCw4QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFaRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNTO0lBRlgsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWU3QjtJQUFELGdCQUFDO0NBZkQsQUFlQyxDQWZzQyxFQUFFLENBQUMsU0FBUyxHQWVsRDtrQkFmb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xuXG4gICAgdXBkYXRlU2NvcmUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNjb3JlICs9IHZhbHVlO1xuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gYFNjb3JlOiAke3RoaXMuc2NvcmV9YDtcbiAgICB9XG5cbiAgICByZXNldFNjb3JlKCkge1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZSgwKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PlatformSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbcd75L1a9BBLSrHghUc+6U', 'PlatformSpawner');
// Scripts/PlatformSpawner.ts

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
var PlatformSpawner = /** @class */ (function (_super) {
    __extends(PlatformSpawner, _super);
    function PlatformSpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.platformPrefab = null;
        _this.minWidth = 50;
        _this.maxWidth = 200;
        _this.minXOffset = 100;
        _this.maxXOffset = 400;
        _this.platformAppearTime = 0.5; // Время появления платформы снизу вверх
        return _this;
    }
    PlatformSpawner.prototype.spawnPlatform = function (previousPlatformPosition) {
        var newPlatform = cc.instantiate(this.platformPrefab);
        var platformWidth = this.minWidth + Math.random() * (this.maxWidth - this.minWidth);
        newPlatform.width = platformWidth;
        if (previousPlatformPosition) {
            newPlatform.setPosition(cc.v2(previousPlatformPosition.x, -708)); // Появляется сразу
        }
        else {
            // Если позиция не передана, используем случайное значение
            var newPositionX = -240 + Math.random() * (400 - (-240)); // Случайное значение в промежутке [-240, 400]
            newPlatform.setPosition(cc.v2(newPositionX, -1080)); // Начальная позиция снизу экрана
            // Анимация появления снизу вверх
            cc.tween(newPlatform)
                .to(this.platformAppearTime, { position: cc.v3(newPositionX, -708) }, { easing: 'cubicOut' })
                .start();
        }
        this.node.addChild(newPlatform);
        return newPlatform;
    };
    __decorate([
        property(cc.Prefab)
    ], PlatformSpawner.prototype, "platformPrefab", void 0);
    __decorate([
        property
    ], PlatformSpawner.prototype, "minWidth", void 0);
    __decorate([
        property
    ], PlatformSpawner.prototype, "maxWidth", void 0);
    __decorate([
        property
    ], PlatformSpawner.prototype, "minXOffset", void 0);
    __decorate([
        property
    ], PlatformSpawner.prototype, "maxXOffset", void 0);
    __decorate([
        property
    ], PlatformSpawner.prototype, "platformAppearTime", void 0);
    PlatformSpawner = __decorate([
        ccclass
    ], PlatformSpawner);
    return PlatformSpawner;
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhdGZvcm1TcGF3bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBd0NDO1FBdENHLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBR2pDLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFHdEIsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUd2QixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUd6QixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUd6Qix3QkFBa0IsR0FBVyxHQUFHLENBQUMsQ0FBQyx3Q0FBd0M7O0lBdUI5RSxDQUFDO0lBckJHLHVDQUFhLEdBQWIsVUFBYyx3QkFBa0M7UUFDNUMsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEQsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RixXQUFXLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztRQUVsQyxJQUFJLHdCQUF3QixFQUFFO1lBQzFCLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CO1NBQ3hGO2FBQU07WUFDSCwwREFBMEQ7WUFDekQsSUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsOENBQThDO1lBQzNHLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsaUNBQWlDO1lBRXRGLGlDQUFpQztZQUNqQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztpQkFDaEIsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7aUJBQzVGLEtBQUssRUFBRSxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQXJDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJEQUNhO0lBR2pDO1FBREMsUUFBUTtxREFDYTtJQUd0QjtRQURDLFFBQVE7cURBQ2M7SUFHdkI7UUFEQyxRQUFRO3VEQUNnQjtJQUd6QjtRQURDLFFBQVE7dURBQ2dCO0lBR3pCO1FBREMsUUFBUTsrREFDd0I7SUFqQmhCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0F3Q25DO0lBQUQsc0JBQUM7Q0F4Q0QsQUF3Q0MsQ0F4QzRDLEVBQUUsQ0FBQyxTQUFTLEdBd0N4RDtrQkF4Q29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1TcGF3bmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBsYXRmb3JtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgbWluV2lkdGg6IG51bWJlciA9IDUwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgbWF4V2lkdGg6IG51bWJlciA9IDIwMDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIG1pblhPZmZzZXQ6IG51bWJlciA9IDEwMDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIG1heFhPZmZzZXQ6IG51bWJlciA9IDQwMDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHBsYXRmb3JtQXBwZWFyVGltZTogbnVtYmVyID0gMC41OyAvLyDQktGA0LXQvNGPINC/0L7Rj9Cy0LvQtdC90LjRjyDQv9C70LDRgtGE0L7RgNC80Ysg0YHQvdC40LfRgyDQstCy0LXRgNGFXG5cbiAgICBzcGF3blBsYXRmb3JtKHByZXZpb3VzUGxhdGZvcm1Qb3NpdGlvbj86IGNjLlZlYzIpOiBjYy5Ob2RlIHtcbiAgICAgICAgY29uc3QgbmV3UGxhdGZvcm0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYXRmb3JtUHJlZmFiKTtcbiAgICAgICAgY29uc3QgcGxhdGZvcm1XaWR0aCA9IHRoaXMubWluV2lkdGggKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4V2lkdGggLSB0aGlzLm1pbldpZHRoKTtcbiAgICAgICAgbmV3UGxhdGZvcm0ud2lkdGggPSBwbGF0Zm9ybVdpZHRoO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1BsYXRmb3JtUG9zaXRpb24pIHtcbiAgICAgICAgICAgIG5ld1BsYXRmb3JtLnNldFBvc2l0aW9uKGNjLnYyKHByZXZpb3VzUGxhdGZvcm1Qb3NpdGlvbi54LCAtNzA4KSk7IC8vINCf0L7Rj9Cy0LvRj9C10YLRgdGPINGB0YDQsNC30YNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC/0L7Qt9C40YbQuNGPINC90LUg0L/QtdGA0LXQtNCw0L3QsCwg0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0YHQu9GD0YfQsNC50L3QvtC1INC30L3QsNGH0LXQvdC40LVcbiAgICAgICAgICAgICBjb25zdCBuZXdQb3NpdGlvblggPSAtMjQwICsgTWF0aC5yYW5kb20oKSAqICg0MDAgLSAoLTI0MCkpOyAvLyDQodC70YPRh9Cw0LnQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQsiDQv9GA0L7QvNC10LbRg9GC0LrQtSBbLTI0MCwgNDAwXVxuICAgICAgICAgICAgbmV3UGxhdGZvcm0uc2V0UG9zaXRpb24oY2MudjIobmV3UG9zaXRpb25YLCAtMTA4MCkpOyAvLyDQndCw0YfQsNC70YzQvdCw0Y8g0L/QvtC30LjRhtC40Y8g0YHQvdC40LfRgyDRjdC60YDQsNC90LBcblxuICAgICAgICAgICAgLy8g0JDQvdC40LzQsNGG0LjRjyDQv9C+0Y/QstC70LXQvdC40Y8g0YHQvdC40LfRgyDQstCy0LXRgNGFXG4gICAgICAgICAgICBjYy50d2VlbihuZXdQbGF0Zm9ybSlcbiAgICAgICAgICAgICAgICAudG8odGhpcy5wbGF0Zm9ybUFwcGVhclRpbWUsIHsgcG9zaXRpb246IGNjLnYzKG5ld1Bvc2l0aW9uWCwgLTcwOCkgfSwgeyBlYXNpbmc6ICdjdWJpY091dCcgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdQbGF0Zm9ybSk7XG4gICAgICAgIHJldHVybiBuZXdQbGF0Zm9ybTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TouchController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '511f5toDcJMopSnsiyZGWcd', 'TouchController');
// Scripts/TouchController.ts

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
var TouchController = /** @class */ (function (_super) {
    __extends(TouchController, _super);
    function TouchController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TOUCHED_START = 'touchStart';
        _this.TOUCHED_END = 'touchEnd';
        return _this;
    }
    TouchController.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    TouchController.prototype.onTouchStart = function () {
        if (this.checkTime())
            cc.systemEvent.emit(this.TOUCHED_START);
    };
    TouchController.prototype.onTouchEnd = function () {
        if (this.checkTime())
            cc.systemEvent.emit(this.TOUCHED_END);
    };
    TouchController.prototype.checkTime = function () {
        return cc.director.getScheduler().getTimeScale() !== 0;
    };
    TouchController = __decorate([
        ccclass
    ], TouchController);
    return TouchController;
}(cc.Component));
exports.default = TouchController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG91Y2hDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBb0JDO1FBbkJvQixtQkFBYSxHQUFZLFlBQVksQ0FBQztRQUN0QyxpQkFBVyxHQUFZLFVBQVUsQ0FBQzs7SUFrQnZELENBQUM7SUFoQmEsZ0NBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU8sc0NBQVksR0FBcEI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVPLG9DQUFVLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTyxtQ0FBUyxHQUFqQjtRQUNJLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQW5CZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQW9CbkM7SUFBRCxzQkFBQztDQXBCRCxBQW9CQyxDQXBCNEMsRUFBRSxDQUFDLFNBQVMsR0FvQnhEO2tCQXBCb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBUT1VDSEVEX1NUQVJUIDogc3RyaW5nID0gJ3RvdWNoU3RhcnQnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgVE9VQ0hFRF9FTkQgOiBzdHJpbmcgPSAndG91Y2hFbmQnO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrVGltZSgpKSBjYy5zeXN0ZW1FdmVudC5lbWl0KHRoaXMuVE9VQ0hFRF9TVEFSVCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja1RpbWUoKSkgY2Muc3lzdGVtRXZlbnQuZW1pdCh0aGlzLlRPVUNIRURfRU5EKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrVGltZSgpOiBib29sZWFue1xuICAgICAgICByZXR1cm4gY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuZ2V0VGltZVNjYWxlKCkgIT09IDBcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Platform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c5bbgIKeBD4KclH1Q0faJr', 'Platform');
// Scripts/Platform.ts

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
var Platform = /** @class */ (function (_super) {
    __extends(Platform, _super);
    function Platform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Platform = __decorate([
        ccclass
    ], Platform);
    return Platform;
}(cc.Component));
exports.default = Platform;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhdGZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBQ0EsQ0FBQztJQURvQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBQzVCO0lBQUQsZUFBQztDQURELEFBQ0MsQ0FEcUMsRUFBRSxDQUFDLFNBQVMsR0FDakQ7a0JBRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
