
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
require('./assets/Scripts/StickManager');
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
        _this.offsetPlatformX = -40;
        _this.offsetStickX = 40;
        _this.stickPrefab = null;
        _this.moveDuration = 1;
        _this.fallDuration = 0.2;
        _this.stick = null;
        return _this;
    }
    PlayerController.prototype.reset = function () {
        this.startCreatingStick();
    };
    PlayerController.prototype.startCreatingStick = function () {
        var position = cc.v2(this.node.position.x + this.offsetStickX, this.node.position.y);
        this.stick = cc.instantiate(this.stickPrefab);
        this.stick.parent = this.node.parent;
        this.stick.setPosition(position);
    };
    PlayerController.prototype.moveToEndOfStick = function (xPos) {
        var _this = this;
        var targetPosition = cc.v3(xPos, this.node.position.y);
        this.moveTowards(targetPosition, function () {
            _this.initiateFall();
        });
    };
    PlayerController.prototype.moveToEndOfPlatform = function (xPos) {
        var targetPosition = cc.v3(xPos + this.offsetPlatformX, this.node.position.y);
        this.moveTowards(targetPosition, function () {
        });
    };
    PlayerController.prototype.moveTowards = function (targetPosition, onComplete) {
        cc.tween(this.node)
            .to(this.moveDuration, { position: targetPosition }, { easing: 'sineInOut' })
            .call(function () {
            if (onComplete)
                onComplete();
        })
            .start();
    };
    PlayerController.prototype.initiateFall = function () {
        cc.tween(this.node)
            .to(this.fallDuration, { position: cc.v3(this.node.x, -1080) })
            .start();
    };
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "stickPrefab", void 0);
    __decorate([
        property(Number)
    ], PlayerController.prototype, "moveDuration", void 0);
    __decorate([
        property(Number)
    ], PlayerController.prototype, "fallDuration", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQXNEQztRQXJEb0IscUJBQWUsR0FBVyxDQUFDLEVBQUUsQ0FBQztRQUM5QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUczQyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUd6QixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUVuQixXQUFLLEdBQVksSUFBSSxDQUFDOztJQXlDbEMsQ0FBQztJQXZDVSxnQ0FBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLDZDQUFrQixHQUExQjtRQUNJLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFFLENBQUM7UUFFeEYsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sMkNBQWdCLEdBQXZCLFVBQXdCLElBQVk7UUFBcEMsaUJBS0M7UUFKRyxJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTtZQUM3QixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sOENBQW1CLEdBQTFCLFVBQTJCLElBQVk7UUFDbkMsSUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTtRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxzQ0FBVyxHQUFuQixVQUFvQixjQUF1QixFQUFFLFVBQW9CO1FBQzdELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQzVFLElBQUksQ0FBQztZQUNGLElBQUksVUFBVTtnQkFBRSxVQUFVLEVBQUUsQ0FBQztRQUNqQyxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU8sdUNBQVksR0FBcEI7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUM5RCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBaEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDOzBEQUNRO0lBR3pCO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQzswREFDVTtJQVhWLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBc0RwQztJQUFELHVCQUFDO0NBdERELEFBc0RDLENBdEQ2QyxFQUFFLENBQUMsU0FBUyxHQXNEekQ7a0JBdERvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9mZnNldFBsYXRmb3JtWDogbnVtYmVyID0gLTQwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvZmZzZXRTdGlja1g6IG51bWJlciA9IDQwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzdGlja1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gICAgbW92ZUR1cmF0aW9uOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICBmYWxsRHVyYXRpb246IG51bWJlciA9IDAuMjtcclxuXHJcbiAgICBwcml2YXRlIHN0aWNrOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydENyZWF0aW5nU3RpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0Q3JlYXRpbmdTdGljaygpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGNjLnYyKHRoaXMubm9kZS5wb3NpdGlvbi54ICsgdGhpcy5vZmZzZXRTdGlja1gsIHRoaXMubm9kZS5wb3NpdGlvbi55ICk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RpY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0aWNrUHJlZmFiKTtcclxuICAgICAgICB0aGlzLnN0aWNrLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5zdGljay5zZXRQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVUb0VuZE9mU3RpY2soeFBvczogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSBjYy52Myh4UG9zLCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5tb3ZlVG93YXJkcyh0YXJnZXRQb3NpdGlvbiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlRmFsbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlVG9FbmRPZlBsYXRmb3JtKHhQb3M6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gY2MudjMoeFBvcyArIHRoaXMub2Zmc2V0UGxhdGZvcm1YLCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5tb3ZlVG93YXJkcyh0YXJnZXRQb3NpdGlvbiwgKCkgPT4ge1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZVRvd2FyZHModGFyZ2V0UG9zaXRpb246IGNjLlZlYzMsIG9uQ29tcGxldGU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8odGhpcy5tb3ZlRHVyYXRpb24sIHsgcG9zaXRpb246IHRhcmdldFBvc2l0aW9uIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYXRlRmFsbCgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50byh0aGlzLmZhbGxEdXJhdGlvbiwgeyBwb3NpdGlvbjogY2MudjModGhpcy5ub2RlLngsIC0xMDgwKSB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController_1 = require("./PlayerController");
var PlatformSpawner_1 = require("./PlatformSpawner");
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startPlayerPos = new cc.Vec2(-503, -309.376);
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
        cc.systemEvent.on('stickFallen', this.onStickFallen, this);
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
        var stickEndPosX = this.currentStick.x + this.currentStick.height - this.player.node.width / 2;
        var targetPlatform = this.getTargetPlatform(cc.v2(this.player.node.x, this.player.node.y));
        var platformStartX = targetPlatform.x - targetPlatform.width / 2;
        var platformEndX = targetPlatform.x + targetPlatform.width / 2;
        if (stickEndPosX >= platformStartX && stickEndPosX <= platformEndX) {
            this.player.moveToEndOfPlatform(platformEndX);
        }
        else {
            this.player.moveToEndOfStick(stickEndPosX);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsdURBQWtEO0FBQ2xELHFEQUFnRDtBQUdoRDtJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQStFQztRQTlFb0Isb0JBQWMsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxzQkFBZ0IsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUdyRSxZQUFNLEdBQXFCLElBQUksQ0FBQztRQUdoQyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFaEMsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsZUFBUyxHQUFjLEVBQUUsQ0FBQzs7SUFtRXRDLENBQUM7SUFqRWEsOEJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8saUNBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLGtDQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxFQUFF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QUFlLENBQUM7MkRBQ2M7SUFSdkIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQStFbEM7SUFBRCxxQkFBQztDQS9FRCxBQStFQyxDQS9FMkMsRUFBRSxDQUFDLFNBQVMsR0ErRXZEO2tCQS9Fb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gXCIuL1BsYXllckNvbnRyb2xsZXJcIjtcbmltcG9ydCBQbGF0Zm9ybVNwYXduZXIgZnJvbSBcIi4vUGxhdGZvcm1TcGF3bmVyXCI7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzdGFydFBsYXllclBvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKC01MDMsIC0zMDkuMzc2KTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0YXJ0UGxhdGZvcm1Qb3M6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigtNTAwLCAtNzA4KTtcblxuICAgIEBwcm9wZXJ0eShQbGF5ZXJDb250cm9sbGVyKVxuICAgIHBsYXllcjogUGxheWVyQ29udHJvbGxlciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoUGxhdGZvcm1TcGF3bmVyKVxuICAgIHBsYXRmb3JtU3Bhd25lcjogUGxhdGZvcm1TcGF3bmVyID0gbnVsbDtcblxuICAgIHByaXZhdGUgaXNHYW1lQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjdXJyZW50U3RpY2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgcGxhdGZvcm1zOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIHByb3RlY3RlZCBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pbml0R2FtZSgpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbignc3RpY2tGYWxsZW4nLCB0aGlzLm9uU3RpY2tGYWxsZW4sIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEdhbWUoKSB7XG4gICAgICAgIHRoaXMuaXNHYW1lQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5zZXRQb3NpdGlvbih0aGlzLnN0YXJ0UGxheWVyUG9zKTtcbiAgICAgICAgdGhpcy5jbGVhclBsYXRmb3JtcygpO1xuXG4gICAgICAgIGNvbnN0IGluaXRpYWxQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1TcGF3bmVyLnNwYXduUGxhdGZvcm0oY2MudjIodGhpcy5zdGFydFBsYXRmb3JtUG9zKSk7XG4gICAgICAgIHRoaXMucGxhdGZvcm1zLnB1c2goaW5pdGlhbFBsYXRmb3JtKTtcblxuICAgICAgICBjb25zdCBuZXh0UGxhdGZvcm0gPSB0aGlzLnBsYXRmb3JtU3Bhd25lci5zcGF3blBsYXRmb3JtKCk7XG4gICAgICAgIHRoaXMucGxhdGZvcm1zLnB1c2gobmV4dFBsYXRmb3JtKTtcblxuICAgICAgICB0aGlzLnBsYXllci5yZXNldCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xlYXJQbGF0Zm9ybXMoKSB7XG4gICAgICAgIHRoaXMucGxhdGZvcm1zLmZvckVhY2gocGxhdGZvcm0gPT4gcGxhdGZvcm0uZGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU3RpY2tGYWxsZW4oc3RpY2tOb2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0aWNrID0gc3RpY2tOb2RlO1xuXG4gICAgICAgIGNvbnN0IHN0aWNrRW5kUG9zWCA9IHRoaXMuY3VycmVudFN0aWNrLnggKyB0aGlzLmN1cnJlbnRTdGljay5oZWlnaHQgLSB0aGlzLnBsYXllci5ub2RlLndpZHRoIC8gMjtcblxuICAgICAgICBjb25zdCB0YXJnZXRQbGF0Zm9ybSA9IHRoaXMuZ2V0VGFyZ2V0UGxhdGZvcm0oY2MudjIodGhpcy5wbGF5ZXIubm9kZS54LCB0aGlzLnBsYXllci5ub2RlLnkpKTtcblxuICAgICAgICBjb25zdCBwbGF0Zm9ybVN0YXJ0WCA9IHRhcmdldFBsYXRmb3JtLnggLSB0YXJnZXRQbGF0Zm9ybS53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtRW5kWCA9IHRhcmdldFBsYXRmb3JtLnggKyB0YXJnZXRQbGF0Zm9ybS53aWR0aCAvIDI7XG5cbiAgICAgICAgaWYgKHN0aWNrRW5kUG9zWCA+PSBwbGF0Zm9ybVN0YXJ0WCAmJiBzdGlja0VuZFBvc1ggPD0gcGxhdGZvcm1FbmRYKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlVG9FbmRPZlBsYXRmb3JtKHBsYXRmb3JtRW5kWCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlVG9FbmRPZlN0aWNrKHN0aWNrRW5kUG9zWCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgZ2V0VGFyZ2V0UGxhdGZvcm0ocGxheWVyUG9zaXRpb246IGNjLlZlYzIpOiBjYy5Ob2RlIHtcbiAgICAgICAgZm9yIChjb25zdCBwbGF0Zm9ybSBvZiB0aGlzLnBsYXRmb3Jtcykge1xuICAgICAgICAgICAgaWYgKHBsYXRmb3JtLnggPiBwbGF5ZXJQb3NpdGlvbi54KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYXRmb3JtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Bhd25QbGF0Zm9ybXMoKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUGxhdGZvcm0gPSB0aGlzLnBsYXRmb3Jtc1t0aGlzLnBsYXRmb3Jtcy5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgbmV3UGxhdGZvcm0gPSB0aGlzLnBsYXRmb3JtU3Bhd25lci5zcGF3blBsYXRmb3JtKHByZXZpb3VzUGxhdGZvcm0uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIHRoaXMucGxhdGZvcm1zLnB1c2gobmV3UGxhdGZvcm0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW5kR2FtZSgpIHtcbiAgICAgICAgdGhpcy5pc0dhbWVBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2MubG9nKCdHYW1lIE92ZXInKTtcbiAgICB9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhdGZvcm1TcGF3bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBd0NDO1FBdENHLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBR2pDLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFHdEIsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUd2QixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUd6QixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUd6Qix3QkFBa0IsR0FBVyxHQUFHLENBQUMsQ0FBQyx3Q0FBd0M7O0lBdUI5RSxDQUFDO0lBckJVLHVDQUFhLEdBQXBCLFVBQXFCLHdCQUFrQztRQUNuRCxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4RCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RGLFdBQVcsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1FBRWxDLElBQUksd0JBQXdCLEVBQUU7WUFDMUIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7U0FDeEY7YUFBTTtZQUNILDBEQUEwRDtZQUN6RCxJQUFNLFlBQVksR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyw4Q0FBOEM7WUFDM0csV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQ0FBaUM7WUFFdEYsaUNBQWlDO1lBQ2pDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2lCQUNoQixFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQztpQkFDNUYsS0FBSyxFQUFFLENBQUM7U0FDaEI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBckNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkRBQ2E7SUFHakM7UUFEQyxRQUFRO3FEQUNhO0lBR3RCO1FBREMsUUFBUTtxREFDYztJQUd2QjtRQURDLFFBQVE7dURBQ2dCO0lBR3pCO1FBREMsUUFBUTt1REFDZ0I7SUFHekI7UUFEQyxRQUFROytEQUN3QjtJQWpCaEIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXdDbkM7SUFBRCxzQkFBQztDQXhDRCxBQXdDQyxDQXhDNEMsRUFBRSxDQUFDLFNBQVMsR0F3Q3hEO2tCQXhDb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybVNwYXduZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcGxhdGZvcm1QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICBtaW5XaWR0aDogbnVtYmVyID0gNTA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBtYXhXaWR0aDogbnVtYmVyID0gMjAwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgbWluWE9mZnNldDogbnVtYmVyID0gMTAwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgbWF4WE9mZnNldDogbnVtYmVyID0gNDAwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgcGxhdGZvcm1BcHBlYXJUaW1lOiBudW1iZXIgPSAwLjU7IC8vINCS0YDQtdC80Y8g0L/QvtGP0LLQu9C10L3QuNGPINC/0LvQsNGC0YTQvtGA0LzRiyDRgdC90LjQt9GDINCy0LLQtdGA0YVcblxuICAgIHB1YmxpYyBzcGF3blBsYXRmb3JtKHByZXZpb3VzUGxhdGZvcm1Qb3NpdGlvbj86IGNjLlZlYzIpOiBjYy5Ob2RlIHtcbiAgICAgICAgY29uc3QgbmV3UGxhdGZvcm0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYXRmb3JtUHJlZmFiKTtcbiAgICAgICAgY29uc3QgcGxhdGZvcm1XaWR0aCA9IHRoaXMubWluV2lkdGggKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4V2lkdGggLSB0aGlzLm1pbldpZHRoKTtcbiAgICAgICAgbmV3UGxhdGZvcm0ud2lkdGggPSBwbGF0Zm9ybVdpZHRoO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1BsYXRmb3JtUG9zaXRpb24pIHtcbiAgICAgICAgICAgIG5ld1BsYXRmb3JtLnNldFBvc2l0aW9uKGNjLnYyKHByZXZpb3VzUGxhdGZvcm1Qb3NpdGlvbi54LCAtNzA4KSk7IC8vINCf0L7Rj9Cy0LvRj9C10YLRgdGPINGB0YDQsNC30YNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC/0L7Qt9C40YbQuNGPINC90LUg0L/QtdGA0LXQtNCw0L3QsCwg0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0YHQu9GD0YfQsNC50L3QvtC1INC30L3QsNGH0LXQvdC40LVcbiAgICAgICAgICAgICBjb25zdCBuZXdQb3NpdGlvblggPSAtMjQwICsgTWF0aC5yYW5kb20oKSAqICg0MDAgLSAoLTI0MCkpOyAvLyDQodC70YPRh9Cw0LnQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQsiDQv9GA0L7QvNC10LbRg9GC0LrQtSBbLTI0MCwgNDAwXVxuICAgICAgICAgICAgbmV3UGxhdGZvcm0uc2V0UG9zaXRpb24oY2MudjIobmV3UG9zaXRpb25YLCAtMTA4MCkpOyAvLyDQndCw0YfQsNC70YzQvdCw0Y8g0L/QvtC30LjRhtC40Y8g0YHQvdC40LfRgyDRjdC60YDQsNC90LBcblxuICAgICAgICAgICAgLy8g0JDQvdC40LzQsNGG0LjRjyDQv9C+0Y/QstC70LXQvdC40Y8g0YHQvdC40LfRgyDQstCy0LXRgNGFXG4gICAgICAgICAgICBjYy50d2VlbihuZXdQbGF0Zm9ybSlcbiAgICAgICAgICAgICAgICAudG8odGhpcy5wbGF0Zm9ybUFwcGVhclRpbWUsIHsgcG9zaXRpb246IGNjLnYzKG5ld1Bvc2l0aW9uWCwgLTcwOCkgfSwgeyBlYXNpbmc6ICdjdWJpY091dCcgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdQbGF0Zm9ybSk7XG4gICAgICAgIHJldHVybiBuZXdQbGF0Zm9ybTtcbiAgICB9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBZUM7UUFiRyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUVwQixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQVc5QixDQUFDO0lBVFUsK0JBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxZQUFVLElBQUksQ0FBQyxLQUFPLENBQUM7SUFDcEQsQ0FBQztJQUVNLDhCQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFaRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNTO0lBRlgsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWU3QjtJQUFELGdCQUFDO0NBZkQsQUFlQyxDQWZzQyxFQUFFLENBQUMsU0FBUyxHQWVsRDtrQkFmb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xuXG4gICAgcHVibGljIHVwZGF0ZVNjb3JlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGBTY29yZTogJHt0aGlzLnNjb3JlfWA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0U2NvcmUoKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKDApO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/StickManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5dbd4rMfm5MgKFgI39UqgKV', 'StickManager');
// Scripts/StickManager.ts

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
        _this.STICK_FALLEN = 'stickFallen';
        _this.growSpeed = 100;
        _this.isGrowing = false;
        _this.isStickPlaced = false;
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
        this.node.height += this.growSpeed * 0.2;
    };
    StickManager.prototype.rotateStick = function () {
        var _this = this;
        cc.tween(this.node)
            .to(0.5, { angle: -90 }, { easing: 'cubicOut' })
            .call(function () {
            _this.emitStickFallenEvent();
        })
            .start();
    };
    StickManager.prototype.emitStickFallenEvent = function () {
        cc.systemEvent.emit(this.STICK_FALLEN, this.node);
    };
    __decorate([
        property(Number)
    ], StickManager.prototype, "growSpeed", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3RpY2tNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBNERDO1FBM0RvQixtQkFBYSxHQUFXLFlBQVksQ0FBQztRQUNyQyxpQkFBVyxHQUFXLFVBQVUsQ0FBQztRQUNqQyxrQkFBWSxHQUFXLGFBQWEsQ0FBQztRQUc5QyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBRXhCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsbUJBQWEsR0FBWSxLQUFLLENBQUM7O0lBbUQzQyxDQUFDO0lBakRhLCtCQUFRLEdBQWxCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRVMsZ0NBQVMsR0FBbkI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTyxtQ0FBWSxHQUFwQjtRQUNJLElBQUksSUFBSSxDQUFDLGFBQWE7WUFBRSxPQUFPO1FBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8saUNBQVUsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsT0FBTztRQUMvQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLG1DQUFZLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTyxrQ0FBVyxHQUFuQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRU8sZ0NBQVMsR0FBakI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQzdDLENBQUM7SUFFTyxrQ0FBVyxHQUFuQjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQy9DLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTywyQ0FBb0IsR0FBNUI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBckREO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQzttREFDZTtJQU5mLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E0RGhDO0lBQUQsbUJBQUM7Q0E1REQsQUE0REMsQ0E1RHlDLEVBQUUsQ0FBQyxTQUFTLEdBNERyRDtrQkE1RG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RpY2tNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IFRPVUNIRURfU1RBUlQ6IHN0cmluZyA9ICd0b3VjaFN0YXJ0JztcbiAgICBwcml2YXRlIHJlYWRvbmx5IFRPVUNIRURfRU5EOiBzdHJpbmcgPSAndG91Y2hFbmQnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgU1RJQ0tfRkFMTEVOOiBzdHJpbmcgPSAnc3RpY2tGYWxsZW4nO1xuXG4gICAgQHByb3BlcnR5KE51bWJlcilcbiAgICBwcml2YXRlIGdyb3dTcGVlZDogbnVtYmVyID0gMTAwO1xuXG4gICAgcHJpdmF0ZSBpc0dyb3dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzU3RpY2tQbGFjZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5UT1VDSEVEX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuVE9VQ0hFRF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuVE9VQ0hFRF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5UT1VDSEVEX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hTdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGlja1BsYWNlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0YXJ0R3Jvd2luZygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Ub3VjaEVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGlja1BsYWNlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0b3BHcm93aW5nKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEdyb3dpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNHcm93aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdyb3dTdGljaywgMC4wMik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wR3Jvd2luZygpIHtcbiAgICAgICAgdGhpcy5pc0dyb3dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ3Jvd1N0aWNrKTtcbiAgICAgICAgdGhpcy5yb3RhdGVTdGljaygpO1xuICAgICAgICB0aGlzLmlzU3RpY2tQbGFjZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ3Jvd1N0aWNrKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNHcm93aW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgKz0gdGhpcy5ncm93U3BlZWQgKiAwLjI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb3RhdGVTdGljaygpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuNSwgeyBhbmdsZTogLTkwIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0U3RpY2tGYWxsZW5FdmVudCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW1pdFN0aWNrRmFsbGVuRXZlbnQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQodGhpcy5TVElDS19GQUxMRU4sIHRoaXMubm9kZSk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------
