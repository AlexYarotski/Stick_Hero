
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
        _this.offsetStick = new cc.Vec2(40, -76);
        _this.stickPrefab = null;
        _this.stick = null;
        return _this;
    }
    PlayerController.prototype.reset = function () {
        this.startCreatingStick();
    };
    PlayerController.prototype.startCreatingStick = function () {
        var position = cc.v2(this.node.position.x + this.offsetStick.x, this.node.position.y + this.offsetStick.y);
        this.stick = cc.instantiate(this.stickPrefab);
        this.stick.parent = this.node.parent;
        this.stick.setPosition(position);
    };
    PlayerController.prototype.moveToEndOfStick = function (stickNode) {
        var _this = this;
        var targetPosition = stickNode.position.add(cc.v3(stickNode.width, 0, 0));
        this.moveTowards(targetPosition, function () {
            _this.initiateFall();
        });
    };
    PlayerController.prototype.moveToEndOfPlatform = function (platformNode) {
        var targetPosition = platformNode.position.add(cc.v3(platformNode.width / 2, 0, 0));
        this.moveTowards(targetPosition, function () {
        });
    };
    PlayerController.prototype.moveTowards = function (targetPosition, onComplete) {
        cc.tween(this.node)
            .to(1, { position: targetPosition }, { easing: 'sineInOut' })
            .start();
    };
    PlayerController.prototype.initiateFall = function () {
        cc.tween(this.node)
            .to(0.5, { position: cc.v3(this.node.x, -1080) })
            .start();
    };
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "stickPrefab", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQTZDQztRQTVDb0IsaUJBQVcsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFHN0QsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFdEIsV0FBSyxHQUFZLElBQUksQ0FBQzs7SUF1Q2xDLENBQUM7SUFyQ1UsZ0NBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyw2Q0FBa0IsR0FBMUI7UUFDSSxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sMkNBQWdCLEdBQXZCLFVBQXdCLFNBQWtCO1FBQTFDLGlCQUtDO1FBSkcsSUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO1lBQzdCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw4Q0FBbUIsR0FBMUIsVUFBMkIsWUFBcUI7UUFDNUMsSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTtRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxzQ0FBVyxHQUFuQixVQUFvQixjQUF1QixFQUFFLFVBQW9CO1FBQzdELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDNUQsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLHVDQUFZLEdBQXBCO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNoRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBeENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ1U7SUFKYixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQTZDcEM7SUFBRCx1QkFBQztDQTdDRCxBQTZDQyxDQTdDNkMsRUFBRSxDQUFDLFNBQVMsR0E2Q3pEO2tCQTdDb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvZmZzZXRTdGljazogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDQwLCAtNzYpO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzdGlja1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHN0aWNrOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydENyZWF0aW5nU3RpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0Q3JlYXRpbmdTdGljaygpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGNjLnYyKHRoaXMubm9kZS5wb3NpdGlvbi54ICsgdGhpcy5vZmZzZXRTdGljay54LFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24ueSArIHRoaXMub2Zmc2V0U3RpY2sueSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RpY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0aWNrUHJlZmFiKTtcclxuICAgICAgICB0aGlzLnN0aWNrLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5zdGljay5zZXRQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVUb0VuZE9mU3RpY2soc3RpY2tOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSBzdGlja05vZGUucG9zaXRpb24uYWRkKGNjLnYzKHN0aWNrTm9kZS53aWR0aCwgMCwgMCkpO1xyXG4gICAgICAgIHRoaXMubW92ZVRvd2FyZHModGFyZ2V0UG9zaXRpb24sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZUZhbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZVRvRW5kT2ZQbGF0Zm9ybShwbGF0Zm9ybU5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHBsYXRmb3JtTm9kZS5wb3NpdGlvbi5hZGQoY2MudjMocGxhdGZvcm1Ob2RlLndpZHRoIC8gMiwgMCwgMCkpO1xyXG4gICAgICAgIHRoaXMubW92ZVRvd2FyZHModGFyZ2V0UG9zaXRpb24sICgpID0+IHtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVUb3dhcmRzKHRhcmdldFBvc2l0aW9uOiBjYy5WZWMzLCBvbkNvbXBsZXRlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRhcmdldFBvc2l0aW9uIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYXRlRmFsbCgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKHRoaXMubm9kZS54LCAtMTA4MCkgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19
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
        this.node.height += this.growSpeed * 0.02;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3RpY2tNYW5hZ2VyIC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQTREQztRQTNEb0IsbUJBQWEsR0FBVyxZQUFZLENBQUM7UUFDckMsaUJBQVcsR0FBVyxVQUFVLENBQUM7UUFDakMsa0JBQVksR0FBVyxhQUFhLENBQUM7UUFHOUMsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUV4QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLG1CQUFhLEdBQVksS0FBSyxDQUFDOztJQW1EM0MsQ0FBQztJQWpEYSwrQkFBUSxHQUFsQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRCxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVTLGdDQUFTLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU8sbUNBQVksR0FBcEI7UUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsT0FBTztRQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLGlDQUFVLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLE9BQU87UUFDL0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxtQ0FBWSxHQUFwQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8sa0NBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVPLGdDQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUM5QyxDQUFDO0lBRU8sa0NBQVcsR0FBbkI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUMvQyxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU8sMkNBQW9CLEdBQTVCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQXJERDtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7bURBQ2U7SUFOZixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBNERoQztJQUFELG1CQUFDO0NBNURELEFBNERDLENBNUR5QyxFQUFFLENBQUMsU0FBUyxHQTREckQ7a0JBNURvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0aWNrTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBUT1VDSEVEX1NUQVJUOiBzdHJpbmcgPSAndG91Y2hTdGFydCc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBUT1VDSEVEX0VORDogc3RyaW5nID0gJ3RvdWNoRW5kJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IFNUSUNLX0ZBTExFTjogc3RyaW5nID0gJ3N0aWNrRmFsbGVuJztcblxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXG4gICAgcHJpdmF0ZSBncm93U3BlZWQ6IG51bWJlciA9IDEwMDtcblxuICAgIHByaXZhdGUgaXNHcm93aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc1N0aWNrUGxhY2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuVE9VQ0hFRF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlRPVUNIRURfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLlRPVUNIRURfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuVE9VQ0hFRF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RpY2tQbGFjZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGFydEdyb3dpbmcoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RpY2tQbGFjZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdG9wR3Jvd2luZygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRHcm93aW5nKCkge1xuICAgICAgICB0aGlzLmlzR3Jvd2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5ncm93U3RpY2ssIDAuMDIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RvcEdyb3dpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNHcm93aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdyb3dTdGljayk7XG4gICAgICAgIHRoaXMucm90YXRlU3RpY2soKTtcbiAgICAgICAgdGhpcy5pc1N0aWNrUGxhY2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdyb3dTdGljaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzR3Jvd2luZykgcmV0dXJuO1xuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ICs9IHRoaXMuZ3Jvd1NwZWVkICogMC4wMjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJvdGF0ZVN0aWNrKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAudG8oMC41LCB7IGFuZ2xlOiAtOTAgfSwgeyBlYXNpbmc6ICdjdWJpY091dCcgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRTdGlja0ZhbGxlbkV2ZW50KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbWl0U3RpY2tGYWxsZW5FdmVudCgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdCh0aGlzLlNUSUNLX0ZBTExFTiwgdGhpcy5ub2RlKTtcbiAgICB9XG59XG4iXX0=
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
