
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
require('./assets/Scripts/BackgroundManager');
require('./assets/Scripts/CameraShake');
require('./assets/Scripts/DataCounter');
require('./assets/Scripts/Double');
require('./assets/Scripts/GameController');
require('./assets/Scripts/GameMover');
require('./assets/Scripts/Platform');
require('./assets/Scripts/PlayerController');
require('./assets/Scripts/PlayerFlip');
require('./assets/Scripts/ScoreCounter');
require('./assets/Scripts/SkinChanger');
require('./assets/Scripts/Spawner/DoubleSpawner');
require('./assets/Scripts/Spawner/PlatformSpawner');
require('./assets/Scripts/Spawner/Spawner');
require('./assets/Scripts/Spawner/StickSpawner');
require('./assets/Scripts/Stick');
require('./assets/Scripts/SystemManager');
require('./assets/Scripts/TouchController');
require('./assets/Scripts/UIManager');
require('./assets/Scripts/UI/GameWindow');
require('./assets/Scripts/UI/LoseWindow');
require('./assets/Scripts/UI/MainWindow');
require('./assets/Scripts/UI/SkinSelector');
require('./assets/Scripts/UI/Window');
require('./assets/Scripts/UI/WindowManager');
require('./assets/Scripts/UI/WindowSwitcher');

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
                    var __filename = 'preview-scripts/assets/Scripts/Spawner/PlatformSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbcd75L1a9BBLSrHghUc+6U', 'PlatformSpawner');
// Scripts/Spawner/PlatformSpawner.ts

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
var Spawner_1 = require("./Spawner");
var Platform_1 = require("../Platform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlatformSpawner = /** @class */ (function (_super) {
    __extends(PlatformSpawner, _super);
    function PlatformSpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.posY = -1100;
        _this.minWidth = 50;
        _this.maxWidth = 200;
        _this.minXOffset = 100;
        _this.maxXOffset = 400;
        _this.platformAppearTime = 0.5;
        _this.lastPlatform = null;
        return _this;
    }
    PlatformSpawner.prototype.spawnNode = function (position) {
        var newPlatform = this.getOrCreateNode().getComponent(Platform_1.default);
        if (position) {
            newPlatform.node.setPosition(cc.v2(position.x, this.posY));
            newPlatform.node.active = true;
        }
        else {
            this.setRandomPlatformAttributes(newPlatform);
        }
        this.lastPlatform = newPlatform;
        return newPlatform.node;
    };
    PlatformSpawner.prototype.setRandomPlatformAttributes = function (platform) {
        var platformWidth = this.minWidth + Math.random() * (this.maxWidth - this.minWidth);
        platform.node.width = platformWidth;
        var offsetX = this.minXOffset + Math.random() * (this.maxXOffset - this.minXOffset);
        var newPositionX = this.lastPlatform ? this.lastPlatform.node.x + this.lastPlatform.node.width + offsetX : 0;
        platform.node.setPosition(cc.v2(newPositionX, this.posY * 2));
        platform.updatePlatformSize();
        cc.tween(platform.node)
            .to(this.platformAppearTime, { position: cc.v3(newPositionX, -1100) }, { easing: 'cubicOut' })
            .start();
    };
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
}(Spawner_1.Spawner));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3Bhd25lclxcUGxhdGZvcm1TcGF3bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFvQztBQUNwQyx3Q0FBbUM7QUFFN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQU87SUFBcEQ7UUFBQSxxRUFrREM7UUFqRG9CLFVBQUksR0FBVyxDQUFDLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3RCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFHekIsZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFHekIsd0JBQWtCLEdBQVcsR0FBRyxDQUFDO1FBRWpDLGtCQUFZLEdBQWEsSUFBSSxDQUFDOztJQWdDMUMsQ0FBQztJQTlCVSxtQ0FBUyxHQUFoQixVQUFpQixRQUFrQjtRQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQztRQUNsRSxJQUFJLFFBQVEsRUFBRTtZQUNWLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzRCxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbEM7YUFBTTtZQUNILElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNqRDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBRWhDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztJQUM1QixDQUFDO0lBR08scURBQTJCLEdBQW5DLFVBQW9DLFFBQWtCO1FBQ2xELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEYsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1FBRXBDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEYsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvRyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUQsUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFOUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQzdGLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUE3Q0Q7UUFEQyxRQUFRO3FEQUNxQjtJQUc5QjtRQURDLFFBQVE7cURBQ3NCO0lBRy9CO1FBREMsUUFBUTt1REFDd0I7SUFHakM7UUFEQyxRQUFRO3VEQUN3QjtJQUdqQztRQURDLFFBQVE7K0RBQ2dDO0lBaEJ4QixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBa0RuQztJQUFELHNCQUFDO0NBbERELEFBa0RDLENBbEQ0QyxpQkFBTyxHQWtEbkQ7a0JBbERvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Bhd25lciB9IGZyb20gXCIuL1NwYXduZXJcIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vUGxhdGZvcm1cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtU3Bhd25lciBleHRlbmRzIFNwYXduZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcG9zWTogbnVtYmVyID0gLTExMDA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIG1pbldpZHRoOiBudW1iZXIgPSA1MDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgbWF4V2lkdGg6IG51bWJlciA9IDIwMDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgbWluWE9mZnNldDogbnVtYmVyID0gMTAwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBtYXhYT2Zmc2V0OiBudW1iZXIgPSA0MDA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIHBsYXRmb3JtQXBwZWFyVGltZTogbnVtYmVyID0gMC41O1xuXG4gICAgcHJpdmF0ZSBsYXN0UGxhdGZvcm06IFBsYXRmb3JtID0gbnVsbDtcblxuICAgIHB1YmxpYyBzcGF3bk5vZGUocG9zaXRpb24/OiBjYy5WZWMyKTogY2MuTm9kZSB7XG4gICAgICAgIGNvbnN0IG5ld1BsYXRmb3JtID0gdGhpcy5nZXRPckNyZWF0ZU5vZGUoKS5nZXRDb21wb25lbnQoUGxhdGZvcm0pO1xuICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIG5ld1BsYXRmb3JtLm5vZGUuc2V0UG9zaXRpb24oY2MudjIocG9zaXRpb24ueCwgdGhpcy5wb3NZKSk7XG4gICAgICAgICAgICBuZXdQbGF0Zm9ybS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFJhbmRvbVBsYXRmb3JtQXR0cmlidXRlcyhuZXdQbGF0Zm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhc3RQbGF0Zm9ybSA9IG5ld1BsYXRmb3JtO1xuXG4gICAgICAgIHJldHVybiBuZXdQbGF0Zm9ybS5ub2RlO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBzZXRSYW5kb21QbGF0Zm9ybUF0dHJpYnV0ZXMocGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtV2lkdGggPSB0aGlzLm1pbldpZHRoICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFdpZHRoIC0gdGhpcy5taW5XaWR0aCk7XG4gICAgICAgIHBsYXRmb3JtLm5vZGUud2lkdGggPSBwbGF0Zm9ybVdpZHRoO1xuXG4gICAgICAgIGNvbnN0IG9mZnNldFggPSB0aGlzLm1pblhPZmZzZXQgKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4WE9mZnNldCAtIHRoaXMubWluWE9mZnNldCk7XG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uWCA9IHRoaXMubGFzdFBsYXRmb3JtID8gdGhpcy5sYXN0UGxhdGZvcm0ubm9kZS54ICsgdGhpcy5sYXN0UGxhdGZvcm0ubm9kZS53aWR0aCArIG9mZnNldFggOiAwO1xuXG4gICAgICAgIHBsYXRmb3JtLm5vZGUuc2V0UG9zaXRpb24oY2MudjIobmV3UG9zaXRpb25YLCB0aGlzLnBvc1kgKiAyKSk7XG5cbiAgICAgICAgcGxhdGZvcm0udXBkYXRlUGxhdGZvcm1TaXplKCk7XG5cbiAgICAgICAgY2MudHdlZW4ocGxhdGZvcm0ubm9kZSlcbiAgICAgICAgICAgIC50byh0aGlzLnBsYXRmb3JtQXBwZWFyVGltZSwgeyBwb3NpdGlvbjogY2MudjMobmV3UG9zaXRpb25YLCAtMTEwMCkgfSwgeyBlYXNpbmc6ICdjdWJpY091dCcgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cbn1cbiJdfQ==
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
var Stick_1 = require("./Stick");
var PlayerFlip_1 = require("./PlayerFlip");
var Platform_1 = require("./Platform");
var StickSpawner_1 = require("./Spawner/StickSpawner");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PLAYER_FALL = 'playerFall';
        _this.COLLISION_ENTER = 'collision-enter';
        _this.offsetStick = cc.v2(80, 10);
        _this.offsetPlatformX = -50;
        _this.stickPrefab = null;
        _this.moveDuration = 1;
        _this.fallDuration = 0.2;
        _this.stickSpawner = null;
        _this.playerFlip = null;
        _this.stick = null;
        _this.previousStick = null;
        _this.boxCollider = null;
        _this.canMove = null;
        return _this;
    }
    PlayerController_1 = PlayerController;
    PlayerController.prototype.onLoad = function () {
        this.boxCollider = this.getComponent(cc.BoxCollider);
        this.boxCollider.node.on(this.COLLISION_ENTER, this.onCollisionEnter, this);
    };
    PlayerController.prototype.reset = function () {
        this.spawnStick();
        this.playerFlip.reset();
        this.node.active = true;
        this.canMove = true;
    };
    PlayerController.prototype.onCollisionEnter = function (other, self) {
        if (other.node.getComponent(Platform_1.default)) {
            this.canMove = false;
            this.initiateFall();
        }
    };
    PlayerController.prototype.spawnStick = function () {
        var position = cc.v2(this.node.position.x + this.offsetStick.x, this.node.position.y + this.offsetStick.y);
        this.stick = this.stickSpawner.spawnNode(position).getComponent(Stick_1.default);
        this.stick.node.parent = this.node.parent;
        this.stick.reset();
    };
    PlayerController.prototype.moveToEndOfStick = function (xPos) {
        var _this = this;
        var targetPosition = cc.v3(xPos, this.node.position.y);
        this.moveTowards(targetPosition, function () {
            _this.initiateFall();
        });
    };
    PlayerController.prototype.moveToEndOfPlatform = function (xPos) {
        var _this = this;
        var worldTargetPosition = cc.v3(xPos + this.offsetPlatformX, this.node.position.y);
        var localTargetPosition = this.node.parent.convertToNodeSpaceAR(worldTargetPosition);
        var endPlatformPos = cc.v3(localTargetPosition.x + this.offsetPlatformX, this.node.position.y);
        var distanceTravelled = Math.abs(this.node.position.x - endPlatformPos.x);
        this.moveTowards(endPlatformPos, function () {
            _this.onReachEndOfPlatform(distanceTravelled);
        });
    };
    PlayerController.prototype.onReachEndOfPlatform = function (distanceTravelled) {
        if (!this.canMove)
            return;
        if (this.previousStick) {
            this.stickSpawner.deactivateNode(this.previousStick.node);
        }
        this.previousStick = this.stick;
        cc.systemEvent.emit(PlayerController_1.PLAYER_REACHED, distanceTravelled);
    };
    PlayerController.prototype.moveTowards = function (targetPosition, onComplete) {
        var _this = this;
        this.playerFlip.disableFlip();
        cc.tween(this.node)
            .to(this.moveDuration, { position: targetPosition }, { easing: 'sineInOut' })
            .call(function () {
            if (onComplete)
                onComplete();
            _this.playerFlip.enableFlip();
        })
            .start();
    };
    PlayerController.prototype.initiateFall = function () {
        cc.systemEvent.emit(this.PLAYER_FALL);
        this.canMove = false;
        cc.tween(this.node)
            .to(this.fallDuration, { position: cc.v3(this.node.x, -2000) })
            .start();
        this.stick.initiateFall();
    };
    var PlayerController_1;
    PlayerController.PLAYER_REACHED = 'playerReached';
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "stickPrefab", void 0);
    __decorate([
        property(cc.Float)
    ], PlayerController.prototype, "moveDuration", void 0);
    __decorate([
        property(cc.Float)
    ], PlayerController.prototype, "fallDuration", void 0);
    __decorate([
        property(StickSpawner_1.default)
    ], PlayerController.prototype, "stickSpawner", void 0);
    __decorate([
        property(PlayerFlip_1.default)
    ], PlayerController.prototype, "playerFlip", void 0);
    PlayerController = PlayerController_1 = __decorate([
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBNEI7QUFDNUIsMkNBQXNDO0FBQ3RDLHVDQUFrQztBQUNsQyx1REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFtSEM7UUFoSHFCLGlCQUFXLEdBQVcsWUFBWSxDQUFDO1FBQ3BDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7UUFFNUMsaUJBQVcsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV0QyxxQkFBZSxHQUFXLENBQUMsRUFBRSxDQUFDO1FBRzlDLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBR25CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBQ3BCLG1CQUFhLEdBQVUsSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUVuQyxhQUFPLEdBQVksSUFBSSxDQUFDOztJQXNGcEMsQ0FBQzt5QkFuSG9CLGdCQUFnQjtJQStCdkIsaUNBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRixD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QUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBEQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzswREFDbUI7SUFHMUM7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQzt3REFDaUI7SUF0QnJCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBbUhwQztJQUFELHVCQUFDO0NBbkhELEFBbUhDLENBbkg2QyxFQUFFLENBQUMsU0FBUyxHQW1IekQ7a0JBbkhvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RpY2sgZnJvbSBcIi4vU3RpY2tcIjtcclxuaW1wb3J0IFBsYXllckZsaXAgZnJvbSBcIi4vUGxheWVyRmxpcFwiO1xyXG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4vUGxhdGZvcm1cIjtcclxuaW1wb3J0IFN0aWNrU3Bhd25lciBmcm9tIFwiLi9TcGF3bmVyL1N0aWNrU3Bhd25lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUExBWUVSX1JFQUNIRUQ6IHN0cmluZyA9ICdwbGF5ZXJSZWFjaGVkJztcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5ICBQTEFZRVJfRkFMTDogc3RyaW5nID0gJ3BsYXllckZhbGwnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBDT0xMSVNJT05fRU5URVI6IHN0cmluZyA9ICdjb2xsaXNpb24tZW50ZXInO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgb2Zmc2V0U3RpY2s6IGNjLlZlYzIgPSBjYy52Mig4MCwgMTApO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBvZmZzZXRQbGF0Zm9ybVg6IG51bWJlciA9IC01MDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc3RpY2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgbW92ZUR1cmF0aW9uOiBudW1iZXIgPSAxO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgZmFsbER1cmF0aW9uOiBudW1iZXIgPSAwLjI7XHJcblxyXG4gICAgQHByb3BlcnR5KFN0aWNrU3Bhd25lcilcclxuICAgIHByaXZhdGUgc3RpY2tTcGF3bmVyOiBTdGlja1NwYXduZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShQbGF5ZXJGbGlwKVxyXG4gICAgcHJpdmF0ZSBwbGF5ZXJGbGlwOiBQbGF5ZXJGbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHN0aWNrOiBTdGljayA9IG51bGw7XHJcbiAgICBwcml2YXRlIHByZXZpb3VzU3RpY2s6IFN0aWNrID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJveENvbGxpZGVyOiBjYy5Cb3hDb2xsaWRlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5Nb3ZlOiBib29sZWFuID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlci5ub2RlLm9uKHRoaXMuQ09MTElTSU9OX0VOVEVSLCB0aGlzLm9uQ29sbGlzaW9uRW50ZXIsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnNwYXduU3RpY2soKTtcclxuICAgICAgICB0aGlzLnBsYXllckZsaXAucmVzZXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuY2FuTW92ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xyXG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdldENvbXBvbmVudChQbGF0Zm9ybSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Nb3ZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlRmFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNwYXduU3RpY2soKSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjYy52Mih0aGlzLm5vZGUucG9zaXRpb24ueCArIHRoaXMub2Zmc2V0U3RpY2sueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyB0aGlzLm9mZnNldFN0aWNrLnkpO1xyXG4gICAgICAgIHRoaXMuc3RpY2sgPSB0aGlzLnN0aWNrU3Bhd25lci5zcGF3bk5vZGUocG9zaXRpb24pLmdldENvbXBvbmVudChTdGljayk7XHJcbiAgICAgICAgdGhpcy5zdGljay5ub2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5zdGljay5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlVG9FbmRPZlN0aWNrKHhQb3M6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gY2MudjMoeFBvcywgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMubW92ZVRvd2FyZHModGFyZ2V0UG9zaXRpb24sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZUZhbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZVRvRW5kT2ZQbGF0Zm9ybSh4UG9zOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCB3b3JsZFRhcmdldFBvc2l0aW9uID0gY2MudjMoeFBvcyArIHRoaXMub2Zmc2V0UGxhdGZvcm1YLCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgY29uc3QgbG9jYWxUYXJnZXRQb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRUYXJnZXRQb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgZW5kUGxhdGZvcm1Qb3MgPSBjYy52Myhsb2NhbFRhcmdldFBvc2l0aW9uLnggKyB0aGlzLm9mZnNldFBsYXRmb3JtWCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0YW5jZVRyYXZlbGxlZCA9IE1hdGguYWJzKHRoaXMubm9kZS5wb3NpdGlvbi54IC0gZW5kUGxhdGZvcm1Qb3MueCk7XHJcblxyXG4gICAgICAgIHRoaXMubW92ZVRvd2FyZHMoZW5kUGxhdGZvcm1Qb3MsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vblJlYWNoRW5kT2ZQbGF0Zm9ybShkaXN0YW5jZVRyYXZlbGxlZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJlYWNoRW5kT2ZQbGF0Zm9ybShkaXN0YW5jZVRyYXZlbGxlZDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuY2FuTW92ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcmV2aW91c1N0aWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RpY2tTcGF3bmVyLmRlYWN0aXZhdGVOb2RlKHRoaXMucHJldmlvdXNTdGljay5ub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJldmlvdXNTdGljayA9IHRoaXMuc3RpY2s7XHJcblxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoUGxheWVyQ29udHJvbGxlci5QTEFZRVJfUkVBQ0hFRCwgZGlzdGFuY2VUcmF2ZWxsZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZVRvd2FyZHModGFyZ2V0UG9zaXRpb246IGNjLlZlYzMsIG9uQ29tcGxldGU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJGbGlwLmRpc2FibGVGbGlwKCk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKHRoaXMubW92ZUR1cmF0aW9uLCB7IHBvc2l0aW9uOiB0YXJnZXRQb3NpdGlvbiB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyRmxpcC5lbmFibGVGbGlwKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhdGVGYWxsKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQodGhpcy5QTEFZRVJfRkFMTClcclxuXHJcbiAgICAgICAgdGhpcy5jYW5Nb3ZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKHRoaXMuZmFsbER1cmF0aW9uLCB7IHBvc2l0aW9uOiBjYy52Myh0aGlzLm5vZGUueCwgLTIwMDApIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0aWNrLmluaXRpYXRlRmFsbCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/LoseWindow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ade6F0krtPaIsKQmcVPr/I', 'LoseWindow');
// Scripts/UI/LoseWindow.ts

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
var Window_1 = require("./Window");
var Button = cc.Button;
var DataCounter_1 = require("../DataCounter");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoseWindow = /** @class */ (function (_super) {
    __extends(LoseWindow, _super);
    function LoseWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MAIN_CLICKED = 'mainClicked';
        _this.RESTART_CLICKED = 'restartClicked';
        _this.main = null;
        _this.restart = null;
        _this.score = null;
        _this.bestScore = null;
        _this.doubleCount = null;
        return _this;
    }
    Object.defineProperty(LoseWindow.prototype, "isPopUp", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    LoseWindow.prototype.onLoad = function () {
        var _this = this;
        this.main.node.on(cc.Node.EventType.TOUCH_END, function () { return cc.systemEvent.emit(_this.MAIN_CLICKED); }, this);
        this.restart.node.on(cc.Node.EventType.TOUCH_END, function () { return cc.systemEvent.emit(_this.RESTART_CLICKED); }, this);
    };
    LoseWindow.prototype.onDestroy = function () {
        var _this = this;
        this.main.node.off(cc.Node.EventType.TOUCH_END, function () { return cc.systemEvent.emit(_this.MAIN_CLICKED); }, this);
        this.restart.node.off(cc.Node.EventType.TOUCH_END, function () { return cc.systemEvent.emit(_this.RESTART_CLICKED); }, this);
    };
    LoseWindow.prototype.show = function () {
        _super.prototype.show.call(this);
        this.score.string = DataCounter_1.default.getScore().toString();
        this.bestScore.string = DataCounter_1.default.getBestScore().toString();
        this.doubleCount.string = DataCounter_1.default.getDoubleCount().toString();
    };
    __decorate([
        property(Button)
    ], LoseWindow.prototype, "main", void 0);
    __decorate([
        property(Button)
    ], LoseWindow.prototype, "restart", void 0);
    __decorate([
        property(cc.Label)
    ], LoseWindow.prototype, "score", void 0);
    __decorate([
        property(cc.Label)
    ], LoseWindow.prototype, "bestScore", void 0);
    __decorate([
        property(cc.Label)
    ], LoseWindow.prototype, "doubleCount", void 0);
    LoseWindow = __decorate([
        ccclass
    ], LoseWindow);
    return LoseWindow;
}(Window_1.default));
exports.default = LoseWindow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXExvc2VXaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLElBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7QUFDMUIsOENBQXlDO0FBRW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBdUNDO1FBdENvQixrQkFBWSxHQUFXLGFBQWEsQ0FBQztRQUNyQyxxQkFBZSxHQUFXLGdCQUFnQixDQUFDO1FBR3BELFVBQUksR0FBVyxJQUFJLENBQUM7UUFFcEIsYUFBTyxHQUFXLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsaUJBQVcsR0FBYSxJQUFJLENBQUM7O0lBdUJ6QyxDQUFDO0lBckJHLHNCQUFJLCtCQUFPO2FBQVg7WUFDSSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUVTLDJCQUFNLEdBQWhCO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQXRDLENBQXNDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxFQUF6QyxDQUF5QyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFFUyw4QkFBUyxHQUFuQjtRQUFBLGlCQUdDO1FBRkcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUF0QyxDQUFzQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsRUFBekMsQ0FBeUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RyxDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcscUJBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxxQkFBVyxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLHFCQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEUsQ0FBQztJQWpDRDtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7NENBQ1c7SUFFNUI7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDOytDQUNjO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ1k7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDZ0I7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDa0I7SUFoQnBCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F1QzlCO0lBQUQsaUJBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q3VDLGdCQUFNLEdBdUM3QztrQkF2Q29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2luZG93IGZyb20gXCIuL1dpbmRvd1wiO1xyXG5pbXBvcnQgQnV0dG9uID0gY2MuQnV0dG9uO1xyXG5pbXBvcnQgRGF0YUNvdW50ZXIgZnJvbSBcIi4uL0RhdGFDb3VudGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9zZVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE1BSU5fQ0xJQ0tFRDogc3RyaW5nID0gJ21haW5DbGlja2VkJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgUkVTVEFSVF9DTElDS0VEOiBzdHJpbmcgPSAncmVzdGFydENsaWNrZWQnO1xyXG5cclxuICAgIEBwcm9wZXJ0eShCdXR0b24pXHJcbiAgICBwcml2YXRlIG1haW46IEJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQnV0dG9uKVxyXG4gICAgcHJpdmF0ZSByZXN0YXJ0OiBCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgc2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGJlc3RTY29yZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgZG91YmxlQ291bnQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBnZXQgaXNQb3BVcCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm1haW4ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IGNjLnN5c3RlbUV2ZW50LmVtaXQodGhpcy5NQUlOX0NMSUNLRUQpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnJlc3RhcnQubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IGNjLnN5c3RlbUV2ZW50LmVtaXQodGhpcy5SRVNUQVJUX0NMSUNLRUQpLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubWFpbi5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IGNjLnN5c3RlbUV2ZW50LmVtaXQodGhpcy5NQUlOX0NMSUNLRUQpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnJlc3RhcnQubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiBjYy5zeXN0ZW1FdmVudC5lbWl0KHRoaXMuUkVTVEFSVF9DTElDS0VEKSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3coKSB7XHJcbiAgICAgICAgc3VwZXIuc2hvdygpO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9IERhdGFDb3VudGVyLmdldFNjb3JlKCkudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmJlc3RTY29yZS5zdHJpbmcgPSBEYXRhQ291bnRlci5nZXRCZXN0U2NvcmUoKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuZG91YmxlQ291bnQuc3RyaW5nID0gRGF0YUNvdW50ZXIuZ2V0RG91YmxlQ291bnQoKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boxCollider = null;
        return _this;
    }
    Platform.prototype.onLoad = function () {
        if (!this.boxCollider) {
            this.boxCollider = this.getComponent(cc.BoxCollider);
            if (!this.boxCollider) {
                cc.error('BoxCollider отсутствует на ноде платформы.');
                return;
            }
        }
        this.updateColliderSize();
    };
    Platform.prototype.updatePlatformSize = function () {
        this.updateColliderSize();
    };
    Platform.prototype.updateColliderSize = function () {
        if (this.boxCollider) {
            this.boxCollider.size.width = this.node.width;
            this.boxCollider.size.height = this.node.height;
            this.boxCollider.offset = cc.v2(this.node.width / 2, this.node.height / 2);
        }
    };
    __decorate([
        property(cc.BoxCollider)
    ], Platform.prototype, "boxCollider", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhdGZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE0QkM7UUExQlcsaUJBQVcsR0FBbUIsSUFBSSxDQUFDOztJQTBCL0MsQ0FBQztJQXhCYSx5QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ25CLEVBQUUsQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztnQkFDdkQsT0FBTzthQUNWO1NBQ0o7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0scUNBQWtCLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVTLHFDQUFrQixHQUE1QjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRWhELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlFO0lBQ0wsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNrQjtJQUYxQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNEI1QjtJQUFELGVBQUM7Q0E1QkQsQUE0QkMsQ0E1QnFDLEVBQUUsQ0FBQyxTQUFTLEdBNEJqRDtrQkE1Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Cb3hDb2xsaWRlcilcbiAgICBwcml2YXRlIGJveENvbGxpZGVyOiBjYy5Cb3hDb2xsaWRlciA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xuICAgICAgICBpZiAoIXRoaXMuYm94Q29sbGlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYm94Q29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYm94Q29sbGlkZXIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcignQm94Q29sbGlkZXIg0L7RgtGB0YPRgtGB0YLQstGD0LXRgiDQvdCwINC90L7QtNC1INC/0LvQsNGC0YTQvtGA0LzRiy4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUNvbGxpZGVyU2l6ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVQbGF0Zm9ybVNpemUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29sbGlkZXJTaXplKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUNvbGxpZGVyU2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYm94Q29sbGlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYm94Q29sbGlkZXIuc2l6ZS53aWR0aCA9IHRoaXMubm9kZS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuYm94Q29sbGlkZXIuc2l6ZS5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xuXG4gICAgICAgICAgICB0aGlzLmJveENvbGxpZGVyLm9mZnNldCA9IGNjLnYyKHRoaXMubm9kZS53aWR0aCAvIDIsIHRoaXMubm9kZS5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
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
                    var __filename = 'preview-scripts/assets/Scripts/GameMover.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91713lXbTdHAY3QVX6jcp+b', 'GameMover');
// Scripts/GameMover.ts

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
var GameMover = /** @class */ (function (_super) {
    __extends(GameMover, _super);
    function GameMover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PLAYER_REACHED = 'playerReached';
        _this.MOVEMENT_COMPLETE = 'movementComplete';
        _this.START_GAME = 'startGame';
        _this.startDistance = 460;
        _this.moveDuration = 1;
        _this.isMoving = false;
        _this.isStart = false;
        return _this;
    }
    GameMover.prototype.onLoad = function () {
        cc.systemEvent.on(this.PLAYER_REACHED, this.startMoving, this);
        cc.systemEvent.on(this.START_GAME, this.onStartGame, this);
    };
    GameMover.prototype.onDestroy = function () {
        cc.systemEvent.off(this.PLAYER_REACHED, this.startMoving, this);
        cc.systemEvent.off(this.START_GAME, this.onStartGame, this);
    };
    GameMover.prototype.startMoving = function (distance) {
        var _this = this;
        if (this.isMoving)
            return;
        this.isMoving = true;
        cc.tween(this.node)
            .by(this.moveDuration, { position: cc.v3(-distance, 0) }, { easing: 'sineInOut' })
            .call(function () {
            _this.isMoving = false;
            cc.systemEvent.emit(_this.MOVEMENT_COMPLETE);
        })
            .start();
    };
    GameMover.prototype.onStartGame = function () {
        if (!this.isStart) {
            this.startMoving(this.startDistance);
            this.isStart = true;
        }
    };
    __decorate([
        property(cc.Float)
    ], GameMover.prototype, "moveDuration", void 0);
    GameMover = __decorate([
        ccclass
    ], GameMover);
    return GameMover;
}(cc.Component));
exports.default = GameMover;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZU1vdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBMENDO1FBekNvQixvQkFBYyxHQUFXLGVBQWUsQ0FBQztRQUN6Qyx1QkFBaUIsR0FBVyxrQkFBa0IsQ0FBQztRQUMvQyxnQkFBVSxHQUFXLFdBQVcsQ0FBQztRQUVqQyxtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUc3QyxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUVqQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBK0JyQyxDQUFDO0lBN0JhLDBCQUFNLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRVMsNkJBQVMsR0FBbkI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTywrQkFBVyxHQUFuQixVQUFvQixRQUFnQjtRQUFwQyxpQkFXQztRQVZHLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUNqRixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU8sK0JBQVcsR0FBbkI7UUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQWpDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNNO0lBUlIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBDN0I7SUFBRCxnQkFBQztDQTFDRCxBQTBDQyxDQTFDc0MsRUFBRSxDQUFDLFNBQVMsR0EwQ2xEO2tCQTFDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTW92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBQTEFZRVJfUkVBQ0hFRDogc3RyaW5nID0gJ3BsYXllclJlYWNoZWQnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBNT1ZFTUVOVF9DT01QTEVURTogc3RyaW5nID0gJ21vdmVtZW50Q29tcGxldGUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBTVEFSVF9HQU1FOiBzdHJpbmcgPSAnc3RhcnRHYW1lJztcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0YXJ0RGlzdGFuY2U6IG51bWJlciA9IDQ2MDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBtb3ZlRHVyYXRpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSBpc01vdmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1N0YXJ0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlBMQVlFUl9SRUFDSEVELCB0aGlzLnN0YXJ0TW92aW5nLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlNUQVJUX0dBTUUsIHRoaXMub25TdGFydEdhbWUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuUExBWUVSX1JFQUNIRUQsIHRoaXMuc3RhcnRNb3ZpbmcsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLlNUQVJUX0dBTUUsIHRoaXMub25TdGFydEdhbWUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRNb3ZpbmcoZGlzdGFuY2U6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLmJ5KHRoaXMubW92ZUR1cmF0aW9uLCB7IHBvc2l0aW9uOiBjYy52MygtZGlzdGFuY2UsIDApIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KHRoaXMuTU9WRU1FTlRfQ09NUExFVEUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU3RhcnRHYW1lKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNTdGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TW92aW5nKHRoaXMuc3RhcnREaXN0YW5jZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/SystemManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a5496sykNJn6V91LxpMakl', 'SystemManager');
// Scripts/SystemManager.ts

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
var SystemManager = /** @class */ (function (_super) {
    __extends(SystemManager, _super);
    function SystemManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SystemManager.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        this.onBoxManager();
    };
    SystemManager.prototype.onBoxManager = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
    };
    SystemManager = __decorate([
        ccclass
    ], SystemManager);
    return SystemManager;
}(cc.Component));
exports.default = SystemManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3lzdGVtTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDs7SUFjQSxDQUFDO0lBWmEsOEJBQU0sR0FBaEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUUvQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLG9DQUFZLEdBQXBCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDaEMsT0FBTyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztJQUMxQyxDQUFDO0lBYmdCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FjakM7SUFBRCxvQkFBQztDQWRELEFBY0MsQ0FkMEMsRUFBRSxDQUFDLFNBQVMsR0FjdEQ7a0JBZG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5c3RlbU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCAoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5vbkJveE1hbmFnZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQm94TWFuYWdlcigpe1xuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataCounter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9a567aUvxMya5kS//W/Qom', 'DataCounter');
// Scripts/DataCounter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataCounter = /** @class */ (function () {
    function DataCounter() {
    }
    DataCounter.getScore = function () {
        var scoreString = cc.sys.localStorage.getItem(this.SCORE_KEY);
        return scoreString ? parseInt(scoreString) : 0;
    };
    DataCounter.setScore = function (score) {
        cc.sys.localStorage.setItem(this.SCORE_KEY, score.toString());
    };
    DataCounter.getBestScore = function () {
        var scoreString = cc.sys.localStorage.getItem(this.BEST_SCORE_KEY);
        return scoreString ? parseInt(scoreString) : 0;
    };
    DataCounter.setBestScore = function (score) {
        cc.sys.localStorage.setItem(this.BEST_SCORE_KEY, score.toString());
    };
    DataCounter.getDoubleCount = function () {
        var doubleString = cc.sys.localStorage.getItem(this.DOUBLE_KEY);
        return doubleString ? parseInt(doubleString) : 0;
    };
    DataCounter.setDoubleCount = function (double) {
        cc.sys.localStorage.setItem(this.DOUBLE_KEY, double.toString());
    };
    DataCounter.SCORE_KEY = 'score';
    DataCounter.BEST_SCORE_KEY = 'best_score';
    DataCounter.DOUBLE_KEY = 'double';
    return DataCounter;
}());
exports.default = DataCounter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YUNvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBOEJBLENBQUM7SUF6QmlCLG9CQUFRLEdBQXRCO1FBQ0ksSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRSxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVhLG9CQUFRLEdBQXRCLFVBQXVCLEtBQWE7UUFDaEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVhLHdCQUFZLEdBQTFCO1FBQ0ksSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRSxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVhLHdCQUFZLEdBQTFCLFVBQTJCLEtBQWE7UUFDcEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVhLDBCQUFjLEdBQTVCO1FBQ0ksSUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVhLDBCQUFjLEdBQTVCLFVBQTZCLE1BQWM7UUFDM0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBNUJ6QyxxQkFBUyxHQUFXLE9BQU8sQ0FBQztJQUM1QiwwQkFBYyxHQUFXLFlBQVksQ0FBQztJQUN0QyxzQkFBVSxHQUFXLFFBQVEsQ0FBQztJQTJCMUQsa0JBQUM7Q0E5QkQsQUE4QkMsSUFBQTtrQkE5Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhQ291bnRlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTQ09SRV9LRVk6IHN0cmluZyA9ICdzY29yZSc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBCRVNUX1NDT1JFX0tFWTogc3RyaW5nID0gJ2Jlc3Rfc2NvcmUnO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRE9VQkxFX0tFWTogc3RyaW5nID0gJ2RvdWJsZSc7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRTY29yZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHNjb3JlU3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuU0NPUkVfS0VZKTtcclxuICAgICAgICByZXR1cm4gc2NvcmVTdHJpbmcgPyBwYXJzZUludChzY29yZVN0cmluZykgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U2NvcmUoc2NvcmU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLlNDT1JFX0tFWSwgc2NvcmUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRCZXN0U2NvcmUoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBzY29yZVN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLkJFU1RfU0NPUkVfS0VZKTtcclxuICAgICAgICByZXR1cm4gc2NvcmVTdHJpbmcgPyBwYXJzZUludChzY29yZVN0cmluZykgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0QmVzdFNjb3JlKHNjb3JlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5CRVNUX1NDT1JFX0tFWSwgc2NvcmUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXREb3VibGVDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGRvdWJsZVN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLkRPVUJMRV9LRVkpO1xyXG4gICAgICAgIHJldHVybiBkb3VibGVTdHJpbmcgPyBwYXJzZUludChkb3VibGVTdHJpbmcpIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldERvdWJsZUNvdW50KGRvdWJsZTogbnVtYmVyKXtcclxuICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLkRPVUJMRV9LRVksIGRvdWJsZS50b1N0cmluZygpKTt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Spawner/Spawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3b0cixdF5MVabBaRW6D38O', 'Spawner');
// Scripts/Spawner/Spawner.ts

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
exports.Spawner = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Spawner = /** @class */ (function (_super) {
    __extends(Spawner, _super);
    function Spawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefab = null;
        _this.pool = [];
        return _this;
    }
    Spawner.prototype.getOrCreateNode = function () {
        if (this.pool.length > 0) {
            var reusedNode = this.pool.pop();
            reusedNode.active = true;
            return reusedNode;
        }
        var newNode = cc.instantiate(this.prefab);
        this.node.addChild(newNode);
        return newNode;
    };
    Spawner.prototype.deactivateNode = function (node) {
        node.active = false;
        this.pool.push(node);
    };
    __decorate([
        property(cc.Prefab)
    ], Spawner.prototype, "prefab", void 0);
    Spawner = __decorate([
        ccclass
    ], Spawner);
    return Spawner;
}(cc.Component));
exports.Spawner = Spawner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3Bhd25lclxcU3Bhd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsMkJBQVk7SUFBbEQ7UUFBQSxxRUEwQkM7UUF4QmEsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQWMsRUFBRSxDQUFDOztJQXNCbkMsQ0FBQztJQXBCYSxpQ0FBZSxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFekIsT0FBTyxVQUFVLENBQUM7U0FDckI7UUFFRCxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1QixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU0sZ0NBQWMsR0FBckIsVUFBc0IsSUFBYTtRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBckJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ2U7SUFGakIsT0FBTztRQUQ1QixPQUFPO09BQ2MsT0FBTyxDQTBCNUI7SUFBRCxjQUFDO0NBMUJELEFBMEJDLENBMUJxQyxFQUFFLENBQUMsU0FBUyxHQTBCakQ7QUExQnFCLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvdWJsZSBmcm9tIFwiLi4vRG91YmxlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3Bhd25lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcm90ZWN0ZWQgcHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIHBvb2w6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgcHJvdGVjdGVkIGdldE9yQ3JlYXRlTm9kZSgpOiBjYy5Ob2RlIHtcbiAgICAgICAgaWYgKHRoaXMucG9vbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCByZXVzZWROb2RlID0gdGhpcy5wb29sLnBvcCgpO1xuICAgICAgICAgICAgcmV1c2VkTm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gcmV1c2VkTm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdOb2RlKTtcblxuICAgICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVhY3RpdmF0ZU5vZGUobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvb2wucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3Qgc3Bhd25Ob2RlKC4uLnBvc2l0aW9uczogYW55W10pOiBjYy5Ob2RlO1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PlayerFlip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3be937gYBFDozwDodDxJNQ', 'PlayerFlip');
// Scripts/PlayerFlip.ts

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
var PlayerFlip = /** @class */ (function (_super) {
    __extends(PlayerFlip, _super);
    function PlayerFlip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TOUCHED_START = 'touchStart';
        _this.flipDuration = 0.1;
        _this.canFlip = false;
        return _this;
    }
    PlayerFlip.prototype.onLoad = function () {
        cc.systemEvent.on(this.TOUCHED_START, this.flipPlayer, this);
    };
    PlayerFlip.prototype.onDestroy = function () {
        cc.systemEvent.off(this.TOUCHED_START, this.flipPlayer, this);
    };
    PlayerFlip.prototype.enableFlip = function () {
        this.canFlip = false;
    };
    PlayerFlip.prototype.disableFlip = function () {
        this.canFlip = true;
    };
    PlayerFlip.prototype.reset = function () {
        this.node.scaleY = Math.abs(this.node.scaleY);
    };
    PlayerFlip.prototype.flipPlayer = function () {
        if (this.canFlip) {
            cc.tween(this.node)
                .to(this.flipDuration, { scaleY: -this.node.scaleY })
                .start();
        }
    };
    __decorate([
        property(cc.Float)
    ], PlayerFlip.prototype, "flipDuration", void 0);
    PlayerFlip = __decorate([
        ccclass
    ], PlayerFlip);
    return PlayerFlip;
}(cc.Component));
exports.default = PlayerFlip;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyRmxpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQW1DQztRQWxDb0IsbUJBQWEsR0FBVyxZQUFZLENBQUM7UUFHOUMsa0JBQVksR0FBVyxHQUFHLENBQUM7UUFFM0IsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUE2QnJDLENBQUM7SUEzQmEsMkJBQU0sR0FBaEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVTLDhCQUFTLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSwrQkFBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxnQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSwwQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTywrQkFBVSxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDZCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ3BELEtBQUssRUFBRSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQTlCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNnQjtJQUpsQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBbUM5QjtJQUFELGlCQUFDO0NBbkNELEFBbUNDLENBbkN1QyxFQUFFLENBQUMsU0FBUyxHQW1DbkQ7a0JBbkNvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckZsaXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBUT1VDSEVEX1NUQVJUOiBzdHJpbmcgPSAndG91Y2hTdGFydCc7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHJpdmF0ZSBmbGlwRHVyYXRpb246IG51bWJlciA9IDAuMTtcclxuXHJcbiAgICBwcml2YXRlIGNhbkZsaXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuVE9VQ0hFRF9TVEFSVCwgdGhpcy5mbGlwUGxheWVyLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLlRPVUNIRURfU1RBUlQsIHRoaXMuZmxpcFBsYXllciwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuYWJsZUZsaXAoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5GbGlwID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc2FibGVGbGlwKCkge1xyXG4gICAgICAgIHRoaXMuY2FuRmxpcCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWSA9IE1hdGguYWJzKHRoaXMubm9kZS5zY2FsZVkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmxpcFBsYXllcigpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW5GbGlwKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLmZsaXBEdXJhdGlvbiwgeyBzY2FsZVk6IC10aGlzLm5vZGUuc2NhbGVZIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Spawner/DoubleSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4abenG0CRNlbbL04jUVv03', 'DoubleSpawner');
// Scripts/Spawner/DoubleSpawner.ts

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
var Spawner_1 = require("./Spawner");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DoubleSpawner = /** @class */ (function (_super) {
    __extends(DoubleSpawner, _super);
    function DoubleSpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.posY = -350;
        _this.appearanceFrequency = 3;
        _this.counter = 0;
        return _this;
    }
    DoubleSpawner.prototype.spawnNode = function (startPos, endPos) {
        this.counter++;
        if (this.counter >= this.appearanceFrequency) {
            this.counter = 0;
            var doubleNode = this.getOrCreateNode();
            var localStartPos = this.node.convertToNodeSpaceAR(startPos);
            var localEndPos = this.node.convertToNodeSpaceAR(endPos);
            var startX = localStartPos.x + doubleNode.width;
            var endX = localEndPos.x - doubleNode.width;
            var randomX = startX + Math.random() * (endX - startX);
            doubleNode.setPosition(randomX, this.posY);
            doubleNode.active = true;
            doubleNode.parent = this.node;
            return doubleNode;
        }
        return null;
    };
    __decorate([
        property
    ], DoubleSpawner.prototype, "appearanceFrequency", void 0);
    DoubleSpawner = __decorate([
        ccclass
    ], DoubleSpawner);
    return DoubleSpawner;
}(Spawner_1.Spawner));
exports.default = DoubleSpawner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3Bhd25lclxcRG91YmxlU3Bhd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBb0M7QUFFOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQU87SUFBbEQ7UUFBQSxxRUFnQ0M7UUEvQm9CLFVBQUksR0FBVyxDQUFDLEdBQUcsQ0FBQztRQUc3Qix5QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFFaEMsYUFBTyxHQUFXLENBQUMsQ0FBQzs7SUEwQmhDLENBQUM7SUF4QlUsaUNBQVMsR0FBaEIsVUFBaUIsUUFBaUIsRUFBRSxNQUFlO1FBQy9DLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFFakIsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRTFDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUUzRCxJQUFNLE1BQU0sR0FBRyxhQUFhLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDbEQsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQzlDLElBQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFFekQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTNDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUU5QixPQUFPLFVBQVUsQ0FBQztTQUNyQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUEzQkQ7UUFEQyxRQUFROzhEQUMrQjtJQUp2QixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBZ0NqQztJQUFELG9CQUFDO0NBaENELEFBZ0NDLENBaEMwQyxpQkFBTyxHQWdDakQ7a0JBaENvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Bhd25lciB9IGZyb20gXCIuL1NwYXduZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb3VibGVTcGF3bmVyIGV4dGVuZHMgU3Bhd25lciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBvc1k6IG51bWJlciA9IC0zNTA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIGFwcGVhcmFuY2VGcmVxdWVuY3k6IG51bWJlciA9IDM7XHJcblxyXG4gICAgcHJpdmF0ZSBjb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBzcGF3bk5vZGUoc3RhcnRQb3M6IGNjLlZlYzMsIGVuZFBvczogY2MuVmVjMyk6IGNjLk5vZGUge1xyXG4gICAgICAgIHRoaXMuY291bnRlcisrO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gdGhpcy5hcHBlYXJhbmNlRnJlcXVlbmN5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkb3VibGVOb2RlID0gdGhpcy5nZXRPckNyZWF0ZU5vZGUoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsU3RhcnRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoc3RhcnRQb3MpO1xyXG4gICAgICAgICAgICBjb25zdCBsb2NhbEVuZFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlbmRQb3MpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRYID0gbG9jYWxTdGFydFBvcy54ICsgZG91YmxlTm9kZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgZW5kWCA9IGxvY2FsRW5kUG9zLnggLSBkb3VibGVOb2RlLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21YID0gc3RhcnRYICsgTWF0aC5yYW5kb20oKSAqIChlbmRYIC0gc3RhcnRYKTtcclxuXHJcbiAgICAgICAgICAgIGRvdWJsZU5vZGUuc2V0UG9zaXRpb24ocmFuZG9tWCwgdGhpcy5wb3NZKTtcclxuXHJcbiAgICAgICAgICAgIGRvdWJsZU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZG91YmxlTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZG91YmxlTm9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
                    var __filename = 'preview-scripts/assets/Scripts/UI/Window.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd328a7VQRPbq8kAfhlxyrY', 'Window');
// Scripts/UI/Window.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Window = /** @class */ (function (_super) {
    __extends(Window, _super);
    function Window() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Window.prototype.show = function () {
        this.node.active = true;
    };
    Window.prototype.hide = function () {
        this.node.active = false;
    };
    return Window;
}(cc.Component));
exports.default = Window;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFdpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE2QywwQkFBWTtJQUF6RDs7SUFVQSxDQUFDO0lBUFUscUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRU0scUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0wsYUFBQztBQUFELENBVkEsQUFVQyxDQVY0QyxFQUFFLENBQUMsU0FBUyxHQVV4RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBXaW5kb3cgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHVibGljIGFic3RyYWN0IGdldCBpc1BvcFVwKCk6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIHNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ScoreCounter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a25bbAaAA9M0pJ3w7d1x/zo', 'ScoreCounter');
// Scripts/ScoreCounter.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU2NvcmVDb3VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/GameWindow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6aa7fM+wE1F2aAkYsIrMWAD', 'GameWindow');
// Scripts/UI/GameWindow.ts

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
var Window_1 = require("./Window");
var Label = cc.Label;
var DataCounter_1 = require("../DataCounter");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameWindow = /** @class */ (function (_super) {
    __extends(GameWindow, _super);
    function GameWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DOUBLE = 'double';
        _this.PLAYER_REACHED = 'playerReached';
        _this.counter = null;
        _this.bestScore = null;
        _this.scaleDuration = 0.5;
        _this.increase = 1.5;
        _this.originalScale = 0;
        _this.count = 0;
        _this.point = 0;
        return _this;
    }
    Object.defineProperty(GameWindow.prototype, "isPopUp", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    GameWindow.prototype.onEnable = function () {
        cc.systemEvent.on(this.PLAYER_REACHED, this.onPlayerReached, this);
        cc.systemEvent.on(this.DOUBLE, this.onDouble, this);
    };
    GameWindow.prototype.onDisable = function () {
        cc.systemEvent.off(this.PLAYER_REACHED, this.onPlayerReached, this);
        cc.systemEvent.off(this.DOUBLE, this.onDouble, this);
    };
    GameWindow.prototype.start = function () {
        this.originalScale = this.counter.node.scale;
    };
    GameWindow.prototype.show = function () {
        _super.prototype.show.call(this);
        this.resetCounter();
        this.bestScore.string = DataCounter_1.default.getBestScore().toString();
    };
    GameWindow.prototype.hide = function () {
        DataCounter_1.default.setScore(this.count);
        if (DataCounter_1.default.getBestScore() < this.count) {
            DataCounter_1.default.setBestScore(this.count);
        }
        _super.prototype.hide.call(this);
    };
    GameWindow.prototype.resetCounter = function () {
        this.count = 0;
        this.updateCounterDisplay();
    };
    GameWindow.prototype.onDouble = function () {
        this.point++;
    };
    GameWindow.prototype.onPlayerReached = function () {
        this.point++;
        if (this.point > 1) {
            DataCounter_1.default.setDoubleCount(DataCounter_1.default.getDoubleCount() + 1);
        }
        this.count += this.point;
        this.updateCounterDisplay();
        this.animateCounter();
        this.point = 0;
    };
    GameWindow.prototype.updateCounterDisplay = function () {
        this.counter.string = this.count.toString();
    };
    GameWindow.prototype.animateCounter = function () {
        cc.Tween.stopAllByTarget(this.counter.node);
        cc.tween(this.counter.node)
            .to(this.scaleDuration, { scale: this.originalScale * this.increase })
            .to(this.scaleDuration, { scale: this.originalScale })
            .start();
    };
    __decorate([
        property(Label)
    ], GameWindow.prototype, "counter", void 0);
    __decorate([
        property(Label)
    ], GameWindow.prototype, "bestScore", void 0);
    __decorate([
        property(Number)
    ], GameWindow.prototype, "scaleDuration", void 0);
    __decorate([
        property(Number)
    ], GameWindow.prototype, "increase", void 0);
    GameWindow = __decorate([
        ccclass
    ], GameWindow);
    return GameWindow;
}(Window_1.default));
exports.default = GameWindow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEdhbWVXaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLElBQU8sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFDeEIsOENBQXlDO0FBRW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBMEZDO1FBekZvQixZQUFNLEdBQVcsUUFBUSxDQUFDO1FBQzFCLG9CQUFjLEdBQVcsZUFBZSxDQUFDO1FBR2xELGFBQU8sR0FBVSxJQUFJLENBQUM7UUFHdEIsZUFBUyxHQUFVLElBQUksQ0FBQztRQUd4QixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUc1QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBRXZCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUF3RTlCLENBQUM7SUF0RUcsc0JBQUksK0JBQU87YUFBWDtZQUNJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBRVMsNkJBQVEsR0FBbEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFUyw4QkFBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGVBQWUs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bXBvcnQgV2luZG93IGZyb20gXCIuL1dpbmRvd1wiO1xyXG5pbXBvcnQgTGFiZWwgPSBjYy5MYWJlbDtcclxuaW1wb3J0IERhdGFDb3VudGVyIGZyb20gXCIuLi9EYXRhQ291bnRlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBET1VCTEU6IHN0cmluZyA9ICdkb3VibGUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBQTEFZRVJfUkVBQ0hFRDogc3RyaW5nID0gJ3BsYXllclJlYWNoZWQnO1xyXG5cclxuICAgIEBwcm9wZXJ0eShMYWJlbClcclxuICAgIHByaXZhdGUgY291bnRlcjogTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShMYWJlbClcclxuICAgIHByaXZhdGUgYmVzdFNjb3JlOiBMYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIHByaXZhdGUgc2NhbGVEdXJhdGlvbjogbnVtYmVyID0gMC41O1xyXG5cclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICBwcml2YXRlIGluY3JlYXNlOiBudW1iZXIgPSAxLjU7XHJcblxyXG4gICAgcHJpdmF0ZSBvcmlnaW5hbFNjYWxlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjb3VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcG9pbnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZ2V0IGlzUG9wVXAoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlBMQVlFUl9SRUFDSEVELCB0aGlzLm9uUGxheWVyUmVhY2hlZCwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5ET1VCTEUsIHRoaXMub25Eb3VibGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuUExBWUVSX1JFQUNIRUQsIHRoaXMub25QbGF5ZXJSZWFjaGVkLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5ET1VCTEUsIHRoaXMub25Eb3VibGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsU2NhbGUgPSB0aGlzLmNvdW50ZXIubm9kZS5zY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdygpIHtcclxuICAgICAgICBzdXBlci5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5yZXNldENvdW50ZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5iZXN0U2NvcmUuc3RyaW5nID0gRGF0YUNvdW50ZXIuZ2V0QmVzdFNjb3JlKCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZSgpe1xyXG4gICAgICAgIERhdGFDb3VudGVyLnNldFNjb3JlKHRoaXMuY291bnQpO1xyXG5cclxuICAgICAgICBpZiAoRGF0YUNvdW50ZXIuZ2V0QmVzdFNjb3JlKCkgPCB0aGlzLmNvdW50KSB7XHJcbiAgICAgICAgICAgIERhdGFDb3VudGVyLnNldEJlc3RTY29yZSh0aGlzLmNvdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1cGVyLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0Q291bnRlcigpIHtcclxuICAgICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvdW50ZXJEaXNwbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRvdWJsZSgpIHtcclxuICAgICAgICB0aGlzLnBvaW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblBsYXllclJlYWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludCsrO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wb2ludCA+IDEpe1xyXG4gICAgICAgICAgICBEYXRhQ291bnRlci5zZXREb3VibGVDb3VudChEYXRhQ291bnRlci5nZXREb3VibGVDb3VudCgpICsgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvdW50ICs9IHRoaXMucG9pbnQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyRGlzcGxheSgpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZUNvdW50ZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb2ludCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVDb3VudGVyRGlzcGxheSgpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIuc3RyaW5nID0gdGhpcy5jb3VudC50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYW5pbWF0ZUNvdW50ZXIoKSB7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuY291bnRlci5ub2RlKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jb3VudGVyLm5vZGUpXHJcbiAgICAgICAgICAgIC50byh0aGlzLnNjYWxlRHVyYXRpb24sIHsgc2NhbGU6IHRoaXMub3JpZ2luYWxTY2FsZSAqIHRoaXMuaW5jcmVhc2UgfSlcclxuICAgICAgICAgICAgLnRvKHRoaXMuc2NhbGVEdXJhdGlvbiwgeyBzY2FsZTogdGhpcy5vcmlnaW5hbFNjYWxlIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Stick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e8adRsEU9NoZ2ymCi4kgNR', 'Stick');
// Scripts/Stick.ts

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
var Stick = /** @class */ (function (_super) {
    __extends(Stick, _super);
    function Stick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TOUCHED_START = 'touchStart';
        _this.TOUCHED_END = 'touchEnd';
        _this.STICK_FALLEN = 'stickFallen';
        _this.size = 10;
        _this.growSpeed = 100;
        _this.duration = 0.5;
        _this.isGrowing = false;
        _this.isStickPlaced = false;
        return _this;
    }
    Stick.prototype.onEnable = function () {
        cc.systemEvent.on(this.TOUCHED_START, this.onTouchStart, this);
        cc.systemEvent.on(this.TOUCHED_END, this.onTouchEnd, this);
    };
    Stick.prototype.onDisable = function () {
        cc.systemEvent.off(this.TOUCHED_START, this.onTouchStart, this);
        cc.systemEvent.off(this.TOUCHED_END, this.onTouchEnd, this);
    };
    Stick.prototype.reset = function () {
        this.node.width = this.size;
        this.node.height = 0;
        this.node.angle = 0;
        this.node.stopAllActions();
        this.isGrowing = false;
        this.isStickPlaced = false;
    };
    Stick.prototype.initiateFall = function () {
        cc.tween(this.node)
            .to(this.duration, { angle: -180 }, { easing: 'cubicOut' })
            .start();
    };
    Stick.prototype.onTouchStart = function () {
        if (this.isStickPlaced)
            return;
        this.startGrowing();
    };
    Stick.prototype.onTouchEnd = function () {
        if (this.isStickPlaced)
            return;
        this.stopGrowing();
    };
    Stick.prototype.startGrowing = function () {
        this.isGrowing = true;
        this.schedule(this.growStick, 0.02);
    };
    Stick.prototype.stopGrowing = function () {
        this.isGrowing = false;
        this.unschedule(this.growStick);
        this.rotateStick();
        this.isStickPlaced = true;
    };
    Stick.prototype.growStick = function () {
        if (!this.isGrowing)
            return;
        this.node.height += this.growSpeed * 0.2;
    };
    Stick.prototype.rotateStick = function () {
        var _this = this;
        cc.tween(this.node)
            .to(this.duration, { angle: -90 }, { easing: 'cubicOut' })
            .call(function () {
            _this.emitStickFallenEvent();
        })
            .start();
    };
    Stick.prototype.emitStickFallenEvent = function () {
        cc.systemEvent.emit(this.STICK_FALLEN, this.node);
    };
    __decorate([
        property(cc.Float)
    ], Stick.prototype, "growSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], Stick.prototype, "duration", void 0);
    Stick = __decorate([
        ccclass
    ], Stick);
    return Stick;
}(cc.Component));
exports.default = Stick;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3RpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFpRkM7UUFoRm9CLG1CQUFhLEdBQVcsWUFBWSxDQUFDO1FBQ3JDLGlCQUFXLEdBQVcsVUFBVSxDQUFDO1FBQ2pDLGtCQUFZLEdBQVcsYUFBYSxDQUFDO1FBRXJDLFVBQUksR0FBVyxFQUFFLENBQUM7UUFHM0IsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUd4QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBRXZCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsbUJBQWEsR0FBWSxLQUFLLENBQUM7O0lBbUUzQyxDQUFDO0lBakVhLHdCQUFRLEdBQWxCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRVMseUJBQVMsR0FBbkI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxxQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVNLDRCQUFZLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUMxRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU8sNEJBQVksR0FBcEI7UUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsT0FBTztRQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLDBCQUFVLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLE9BQU87UUFDL0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyw0QkFBWSxHQUFwQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8sMkJBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVPLHlCQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUM3QyxDQUFDO0lBRU8sMkJBQVcsR0FBbkI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDekQsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLG9DQUFvQixHQUE1QjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUF4RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDYTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNZO0lBWGQsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWlGekI7SUFBRCxZQUFDO0NBakZELEFBaUZDLENBakZrQyxFQUFFLENBQUMsU0FBUyxHQWlGOUM7a0JBakZvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0aWNrIGV4dGVuZHMgY2MuQ29tcG9uZW50e1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBUT1VDSEVEX1NUQVJUOiBzdHJpbmcgPSAndG91Y2hTdGFydCc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IFRPVUNIRURfRU5EOiBzdHJpbmcgPSAndG91Y2hFbmQnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBTVElDS19GQUxMRU46IHN0cmluZyA9ICdzdGlja0ZhbGxlbic7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzaXplOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwcml2YXRlIGdyb3dTcGVlZDogbnVtYmVyID0gMTAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIHByaXZhdGUgZHVyYXRpb246IG51bWJlciA9IDAuNTtcclxuXHJcbiAgICBwcml2YXRlIGlzR3Jvd2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1N0aWNrUGxhY2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuVE9VQ0hFRF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuVE9VQ0hFRF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5UT1VDSEVEX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuVE9VQ0hFRF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHRoaXMuc2l6ZTtcclxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG5cclxuICAgICAgICB0aGlzLmlzR3Jvd2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNTdGlja1BsYWNlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0aWF0ZUZhbGwoKXtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50byh0aGlzLmR1cmF0aW9uLCB7IGFuZ2xlOiAtMTgwIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaFN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3RpY2tQbGFjZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXJ0R3Jvd2luZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaEVuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0aWNrUGxhY2VkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdG9wR3Jvd2luZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRHcm93aW5nKCkge1xyXG4gICAgICAgIHRoaXMuaXNHcm93aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZ3Jvd1N0aWNrLCAwLjAyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3BHcm93aW5nKCkge1xyXG4gICAgICAgIHRoaXMuaXNHcm93aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ3Jvd1N0aWNrKTtcclxuICAgICAgICB0aGlzLnJvdGF0ZVN0aWNrKCk7XHJcbiAgICAgICAgdGhpcy5pc1N0aWNrUGxhY2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdyb3dTdGljaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNHcm93aW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCArPSB0aGlzLmdyb3dTcGVlZCAqIDAuMjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJvdGF0ZVN0aWNrKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKHRoaXMuZHVyYXRpb24sIHsgYW5nbGU6IC05MCB9LCB7IGVhc2luZzogJ2N1YmljT3V0JyB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRTdGlja0ZhbGxlbkV2ZW50KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW1pdFN0aWNrRmFsbGVuRXZlbnQoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdCh0aGlzLlNUSUNLX0ZBTExFTiwgdGhpcy5ub2RlKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Double.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '663e27QFitMR6IsAcl5mfYd', 'Double');
// Scripts/Double.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Double = /** @class */ (function (_super) {
    __extends(Double, _super);
    function Double() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLLISION_ENTER = 'collision-enter';
        _this.MOVEMENT_COMPLETE = 'movementComplete';
        _this.DOUBLE = 'double';
        _this.boxCollider = null;
        return _this;
    }
    Double.prototype.onLoad = function () {
        this.boxCollider = this.getComponent(cc.BoxCollider);
        this.boxCollider.node.on(this.COLLISION_ENTER, this.onCollisionEnter, this);
        cc.systemEvent.on(this.MOVEMENT_COMPLETE, this.onMovementComplete, this);
    };
    Double.prototype.onDestroy = function () {
        cc.systemEvent.off(this.MOVEMENT_COMPLETE, this.onMovementComplete, this);
    };
    Double.prototype.onCollisionEnter = function (other) {
        if (other.node.getComponent(PlayerController_1.default)) {
            this.node.active = false;
            cc.systemEvent.emit(this.DOUBLE);
        }
    };
    Double.prototype.onMovementComplete = function () {
        this.node.active = false;
    };
    Double = __decorate([
        ccclass
    ], Double);
    return Double;
}(cc.Component));
exports.default = Double;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRG91YmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTZCQztRQTVCb0IscUJBQWUsR0FBVyxpQkFBaUIsQ0FBQztRQUM1Qyx1QkFBaUIsR0FBVyxrQkFBa0IsQ0FBQztRQUMvQyxZQUFNLEdBQVcsUUFBUSxDQUFDO1FBRW5DLGlCQUFXLEdBQW1CLElBQUksQ0FBQzs7SUF3Qi9DLENBQUM7SUF0QmEsdUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU1RSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFUywwQkFBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVPLGlDQUFnQixHQUF4QixVQUF5QixLQUFrQjtRQUN2QyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLDBCQUFnQixDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFFTyxtQ0FBa0IsR0FBMUI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQTVCZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTZCMUI7SUFBRCxhQUFDO0NBN0JELEFBNkJDLENBN0JtQyxFQUFFLENBQUMsU0FBUyxHQTZCL0M7a0JBN0JvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSBcIi4vUGxheWVyQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvdWJsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IENPTExJU0lPTl9FTlRFUjogc3RyaW5nID0gJ2NvbGxpc2lvbi1lbnRlcic7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE1PVkVNRU5UX0NPTVBMRVRFOiBzdHJpbmcgPSAnbW92ZW1lbnRDb21wbGV0ZSc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IERPVUJMRTogc3RyaW5nID0gJ2RvdWJsZSc7XHJcblxyXG4gICAgcHJpdmF0ZSBib3hDb2xsaWRlcjogY2MuQm94Q29sbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlci5ub2RlLm9uKHRoaXMuQ09MTElTSU9OX0VOVEVSLCB0aGlzLm9uQ29sbGlzaW9uRW50ZXIsIHRoaXMpO1xyXG5cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLk1PVkVNRU5UX0NPTVBMRVRFLCB0aGlzLm9uTW92ZW1lbnRDb21wbGV0ZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5NT1ZFTUVOVF9DT01QTEVURSwgdGhpcy5vbk1vdmVtZW50Q29tcGxldGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAob3RoZXIubm9kZS5nZXRDb21wb25lbnQoUGxheWVyQ29udHJvbGxlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KHRoaXMuRE9VQkxFKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk1vdmVtZW50Q29tcGxldGUoKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Spawner/StickSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef9a2MKDChEVrXz4bQWP6gp', 'StickSpawner');
// Scripts/Spawner/StickSpawner.ts

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
var Spawner_1 = require("./Spawner");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StickSpawner = /** @class */ (function (_super) {
    __extends(StickSpawner, _super);
    function StickSpawner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StickSpawner.prototype.spawnNode = function (position) {
        var newStick = this.getOrCreateNode();
        newStick.setPosition(position);
        return newStick;
    };
    StickSpawner = __decorate([
        ccclass
    ], StickSpawner);
    return StickSpawner;
}(Spawner_1.Spawner));
exports.default = StickSpawner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3Bhd25lclxcU3RpY2tTcGF3bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBTztJQUFqRDs7SUFPQSxDQUFDO0lBTlUsZ0NBQVMsR0FBaEIsVUFBaUIsUUFBaUI7UUFDOUIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFL0IsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQU5nQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBT2hDO0lBQUQsbUJBQUM7Q0FQRCxBQU9DLENBUHlDLGlCQUFPLEdBT2hEO2tCQVBvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Bhd25lciB9IGZyb20gXCIuL1NwYXduZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0aWNrU3Bhd25lciBleHRlbmRzIFNwYXduZXIge1xuICAgIHB1YmxpYyBzcGF3bk5vZGUocG9zaXRpb246IGNjLlZlYzIpOiBjYy5Ob2RlIHtcbiAgICAgICAgY29uc3QgbmV3U3RpY2sgPSB0aGlzLmdldE9yQ3JlYXRlTm9kZSgpO1xuICAgICAgICBuZXdTdGljay5zZXRQb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIG5ld1N0aWNrO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/MainWindow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15d42JDXLpAFZTvEYZSYIPp', 'MainWindow');
// Scripts/UI/MainWindow.ts

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
var Window_1 = require("./Window");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainWindow = /** @class */ (function (_super) {
    __extends(MainWindow, _super);
    function MainWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.START_GAME = 'startGame';
        _this.startButton = null;
        return _this;
    }
    Object.defineProperty(MainWindow.prototype, "isPopUp", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    MainWindow.prototype.onLoad = function () {
        this.startButton.node.on(cc.Node.EventType.TOUCH_END, this.handleClick, this);
    };
    MainWindow.prototype.handleClick = function () {
        cc.systemEvent.emit(this.START_GAME);
        this.hide();
    };
    __decorate([
        property(cc.Button)
    ], MainWindow.prototype, "startButton", void 0);
    MainWindow = __decorate([
        ccclass
    ], MainWindow);
    return MainWindow;
}(Window_1.default));
exports.default = MainWindow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXE1haW5XaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBRXhCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBbUJDO1FBbEJvQixnQkFBVSxHQUFXLFdBQVcsQ0FBQztRQUcxQyxpQkFBVyxHQUFjLElBQUksQ0FBQzs7SUFlMUMsQ0FBQztJQWJHLHNCQUFJLCtCQUFPO2FBQVg7WUFDSSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUVTLDJCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFTyxnQ0FBVyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQWREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ2tCO0lBSnJCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FtQjlCO0lBQUQsaUJBQUM7Q0FuQkQsQUFtQkMsQ0FuQnVDLGdCQUFNLEdBbUI3QztrQkFuQm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2luZG93IGZyb20gXCIuL1dpbmRvd1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluV2luZG93IGV4dGVuZHMgV2luZG93IHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgU1RBUlRfR0FNRTogc3RyaW5nID0gJ3N0YXJ0R2FtZSc7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByaXZhdGUgc3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgZ2V0IGlzUG9wVXAoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5oYW5kbGVDbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KHRoaXMuU1RBUlRfR0FNRSk7XHJcblxyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/WindowSwitcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '030f9eKWHlDf5tkP7JOpbhf', 'WindowSwitcher');
// Scripts/UI/WindowSwitcher.ts

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
var MainWindow_1 = require("./MainWindow");
var GameWindow_1 = require("./GameWindow");
var LoseWindow_1 = require("./LoseWindow");
//import GameWindow from "./GameWindow";
//import LoseWindow from "./LoseWindow";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WindowSwitcher = /** @class */ (function (_super) {
    __extends(WindowSwitcher, _super);
    function WindowSwitcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainWindow = null;
        _this.gameWindow = null;
        _this.loseWindow = null;
        _this.currentWindow = null;
        _this.windowMap = new Map();
        return _this;
    }
    WindowSwitcher.prototype.onLoad = function () {
        this.hideWindowsInChild();
    };
    WindowSwitcher.prototype.show = function (windowType) {
        var windowToShow = this.GetWindow(windowType);
        if (this.currentWindow && !windowToShow.isPopUp) {
            this.currentWindow.hide();
        }
        if (!windowToShow.isPopUp) {
            this.currentWindow = windowToShow;
        }
        windowToShow.show();
    };
    WindowSwitcher.prototype.GetWindow = function (windowType) {
        var window = this.node.getComponentInChildren(windowType);
        if (window) {
            return window;
        }
        throw new Error("Window of type " + windowType.name + " not found.");
    };
    WindowSwitcher.prototype.hideWindowsInChild = function () {
        this.windowMap.set(MainWindow_1.default, this.mainWindow);
        this.windowMap.set(GameWindow_1.default, this.gameWindow);
        this.windowMap.set(LoseWindow_1.default, this.loseWindow);
        this.windowMap.forEach(function (window) {
            if (window) {
                window.node.active = false;
            }
        });
    };
    __decorate([
        property(MainWindow_1.default)
    ], WindowSwitcher.prototype, "mainWindow", void 0);
    __decorate([
        property(GameWindow_1.default)
    ], WindowSwitcher.prototype, "gameWindow", void 0);
    __decorate([
        property(LoseWindow_1.default)
    ], WindowSwitcher.prototype, "loseWindow", void 0);
    WindowSwitcher = __decorate([
        ccclass
    ], WindowSwitcher);
    return WindowSwitcher;
}(cc.Component));
exports.default = WindowSwitcher;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFdpbmRvd1N3aXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QiwyQ0FBc0M7QUFDcEUsMkNBQXNDO0FBQ3RDLDJDQUFzQztBQUN0Qyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBZ0RDO1FBOUNXLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzdCLGVBQVMsR0FBMEIsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7SUF1Q3pELENBQUM7SUFyQ2EsK0JBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sNkJBQUksR0FBWCxVQUE4QixVQUF1QjtRQUNqRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWhELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM3QjtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1NBQ3JDO1FBRUQsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxrQ0FBUyxHQUFqQixVQUFvQyxVQUF1QjtRQUN2RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksTUFBTSxFQUFFO1lBQ1IsT0FBTyxNQUFXLENBQUM7U0FDdEI7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFrQixVQUFVLENBQUMsSUFBSSxnQkFBYSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVPLDJDQUFrQixHQUExQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUMxQixJQUFJLE1BQU0sRUFBRTtnQkFDUixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDOUI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUE3Q0Q7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQztzREFDaUI7SUFFdEM7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQztzREFDaUI7SUFFdEM7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQztzREFDaUI7SUFOckIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWdEbEM7SUFBRCxxQkFBQztDQWhERCxBQWdEQyxDQWhEMkMsRUFBRSxDQUFDLFNBQVMsR0FnRHZEO2tCQWhEb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXaW5kb3cgZnJvbSBcIi4vV2luZG93XCI7aW1wb3J0IE1haW5XaW5kb3cgZnJvbSBcIi4vTWFpbldpbmRvd1wiO1xyXG5pbXBvcnQgR2FtZVdpbmRvdyBmcm9tIFwiLi9HYW1lV2luZG93XCI7XHJcbmltcG9ydCBMb3NlV2luZG93IGZyb20gXCIuL0xvc2VXaW5kb3dcIjtcclxuLy9pbXBvcnQgR2FtZVdpbmRvdyBmcm9tIFwiLi9HYW1lV2luZG93XCI7XHJcbi8vaW1wb3J0IExvc2VXaW5kb3cgZnJvbSBcIi4vTG9zZVdpbmRvd1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvd1N3aXRjaGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShNYWluV2luZG93KVxyXG4gICAgcHJpdmF0ZSBtYWluV2luZG93OiBNYWluV2luZG93ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShHYW1lV2luZG93KVxyXG4gICAgcHJpdmF0ZSBnYW1lV2luZG93OiBHYW1lV2luZG93ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShMb3NlV2luZG93KVxyXG4gICAgcHJpdmF0ZSBsb3NlV2luZG93OiBMb3NlV2luZG93ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRXaW5kb3c6IFdpbmRvdyA9IG51bGw7XHJcbiAgICBwcml2YXRlIHdpbmRvd01hcDogTWFwPEZ1bmN0aW9uLCBXaW5kb3c+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlV2luZG93c0luQ2hpbGQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdzxUIGV4dGVuZHMgV2luZG93Pih3aW5kb3dUeXBlOiBuZXcgKCkgPT4gVCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHdpbmRvd1RvU2hvdyA9IHRoaXMuR2V0V2luZG93KHdpbmRvd1R5cGUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50V2luZG93ICYmICF3aW5kb3dUb1Nob3cuaXNQb3BVcCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRXaW5kb3cuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF3aW5kb3dUb1Nob3cuaXNQb3BVcCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRXaW5kb3cgPSB3aW5kb3dUb1Nob3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3dUb1Nob3cuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgR2V0V2luZG93PFQgZXh0ZW5kcyBXaW5kb3c+KHdpbmRvd1R5cGU6IG5ldyAoKSA9PiBUKTogVCB7XHJcbiAgICAgICAgY29uc3Qgd2luZG93ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4od2luZG93VHlwZSk7XHJcbiAgICAgICAgaWYgKHdpbmRvdykge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93IGFzIFQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgV2luZG93IG9mIHR5cGUgJHt3aW5kb3dUeXBlLm5hbWV9IG5vdCBmb3VuZC5gKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZGVXaW5kb3dzSW5DaGlsZCgpIHtcclxuICAgICAgICB0aGlzLndpbmRvd01hcC5zZXQoTWFpbldpbmRvdywgdGhpcy5tYWluV2luZG93KTtcclxuICAgICAgICB0aGlzLndpbmRvd01hcC5zZXQoR2FtZVdpbmRvdywgdGhpcy5nYW1lV2luZG93KTtcclxuICAgICAgICB0aGlzLndpbmRvd01hcC5zZXQoTG9zZVdpbmRvdywgdGhpcy5sb3NlV2luZG93KTtcclxuXHJcbiAgICAgICAgdGhpcy53aW5kb3dNYXAuZm9yRWFjaCgod2luZG93KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/WindowManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1def7mJc7dJAI5DfR1iuFdb', 'WindowManager');
// Scripts/UI/WindowManager.ts

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
var WindowSwitcher_1 = require("./WindowSwitcher");
var MainWindow_1 = require("./MainWindow");
var GameWindow_1 = require("./GameWindow");
var LoseWindow_1 = require("./LoseWindow");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WindowManager = /** @class */ (function (_super) {
    __extends(WindowManager, _super);
    function WindowManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.START_GAME = 'startGame';
        _this.PLAYER_FALL = 'playerFall';
        _this.MAIN_CLICKED = 'mainClicked';
        _this.RESTART_CLICKED = 'restartClicked';
        _this.windowSwitcher = null;
        return _this;
    }
    WindowManager.prototype.onLoad = function () {
        var _this = this;
        cc.systemEvent.on(this.START_GAME, function () { return _this.windowSwitcher.show(GameWindow_1.default); }, this);
        cc.systemEvent.on(this.PLAYER_FALL, function () { return _this.windowSwitcher.show(LoseWindow_1.default); }, this);
        cc.systemEvent.on(this.MAIN_CLICKED, function () { return _this.windowSwitcher.show(MainWindow_1.default); }, this);
        cc.systemEvent.on(this.RESTART_CLICKED, function () { return _this.windowSwitcher.show(GameWindow_1.default); }, this);
    };
    WindowManager.prototype.onDestroy = function () {
        var _this = this;
        cc.systemEvent.off(this.START_GAME, function () { return _this.windowSwitcher.show(GameWindow_1.default); }, this);
        cc.systemEvent.off(this.PLAYER_FALL, function () { return _this.windowSwitcher.show(LoseWindow_1.default); }, this);
        cc.systemEvent.off(this.MAIN_CLICKED, function () { return _this.windowSwitcher.show(MainWindow_1.default); }, this);
        cc.systemEvent.off(this.RESTART_CLICKED, function () { return _this.windowSwitcher.show(GameWindow_1.default); }, this);
    };
    WindowManager.prototype.start = function () {
        this.windowSwitcher.show(MainWindow_1.default);
    };
    __decorate([
        property(WindowSwitcher_1.default)
    ], WindowManager.prototype, "windowSwitcher", void 0);
    WindowManager = __decorate([
        ccclass
    ], WindowManager);
    return WindowManager;
}(cc.Component));
exports.default = WindowManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFdpbmRvd01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLDJDQUFzQztBQUN0QywyQ0FBc0M7QUFDdEMsMkNBQXNDO0FBRWhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBMEJDO1FBekJvQixnQkFBVSxHQUFXLFdBQVcsQ0FBQztRQUNqQyxpQkFBVyxHQUFXLFlBQVksQ0FBQztRQUNuQyxrQkFBWSxHQUFXLGFBQWEsQ0FBQztRQUNyQyxxQkFBZSxHQUFXLGdCQUFnQixDQUFDO1FBR3BELG9CQUFjLEdBQW1CLElBQUksQ0FBQzs7SUFtQmxELENBQUM7SUFqQmEsOEJBQU0sR0FBaEI7UUFBQSxpQkFLQztRQUpHLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsRUFBcEMsQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLEVBQXBDLENBQW9DLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEYsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxFQUFwQyxDQUFvQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZGLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsRUFBcEMsQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRVMsaUNBQVMsR0FBbkI7UUFBQSxpQkFLQztRQUpHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsRUFBcEMsQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RixFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLEVBQXBDLENBQW9DLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkYsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxFQUFwQyxDQUFvQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hGLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsRUFBcEMsQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRVMsNkJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBbEJEO1FBREMsUUFBUSxDQUFDLHdCQUFjLENBQUM7eURBQ3FCO0lBUDdCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0EwQmpDO0lBQUQsb0JBQUM7Q0ExQkQsQUEwQkMsQ0ExQjBDLEVBQUUsQ0FBQyxTQUFTLEdBMEJ0RDtrQkExQm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2luZG93U3dpdGNoZXIgZnJvbSBcIi4vV2luZG93U3dpdGNoZXJcIjtcclxuaW1wb3J0IE1haW5XaW5kb3cgZnJvbSBcIi4vTWFpbldpbmRvd1wiO1xyXG5pbXBvcnQgR2FtZVdpbmRvdyBmcm9tIFwiLi9HYW1lV2luZG93XCI7XHJcbmltcG9ydCBMb3NlV2luZG93IGZyb20gXCIuL0xvc2VXaW5kb3dcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IFNUQVJUX0dBTUU6IHN0cmluZyA9ICdzdGFydEdhbWUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBQTEFZRVJfRkFMTDogc3RyaW5nID0gJ3BsYXllckZhbGwnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBNQUlOX0NMSUNLRUQ6IHN0cmluZyA9ICdtYWluQ2xpY2tlZCc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IFJFU1RBUlRfQ0xJQ0tFRDogc3RyaW5nID0gJ3Jlc3RhcnRDbGlja2VkJztcclxuXHJcbiAgICBAcHJvcGVydHkoV2luZG93U3dpdGNoZXIpXHJcbiAgICBwcml2YXRlIHdpbmRvd1N3aXRjaGVyOiBXaW5kb3dTd2l0Y2hlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlNUQVJUX0dBTUUsICgpID0+IHRoaXMud2luZG93U3dpdGNoZXIuc2hvdyhHYW1lV2luZG93KSwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5QTEFZRVJfRkFMTCwgKCkgPT4gdGhpcy53aW5kb3dTd2l0Y2hlci5zaG93KExvc2VXaW5kb3cpLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLk1BSU5fQ0xJQ0tFRCwgKCkgPT4gdGhpcy53aW5kb3dTd2l0Y2hlci5zaG93KE1haW5XaW5kb3cpLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlJFU1RBUlRfQ0xJQ0tFRCwgKCkgPT4gdGhpcy53aW5kb3dTd2l0Y2hlci5zaG93KEdhbWVXaW5kb3cpLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLlNUQVJUX0dBTUUsICgpID0+IHRoaXMud2luZG93U3dpdGNoZXIuc2hvdyhHYW1lV2luZG93KSwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuUExBWUVSX0ZBTEwsICgpID0+IHRoaXMud2luZG93U3dpdGNoZXIuc2hvdyhMb3NlV2luZG93KSwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuTUFJTl9DTElDS0VELCAoKSA9PiB0aGlzLndpbmRvd1N3aXRjaGVyLnNob3coTWFpbldpbmRvdyksIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLlJFU1RBUlRfQ0xJQ0tFRCwgKCkgPT4gdGhpcy53aW5kb3dTd2l0Y2hlci5zaG93KEdhbWVXaW5kb3cpLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLndpbmRvd1N3aXRjaGVyLnNob3coTWFpbldpbmRvdyk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BackgroundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27bd2vRHPZAUIA1xfKVdTsz', 'BackgroundManager');
// Scripts/BackgroundManager.ts

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
var BackgroundManager = /** @class */ (function (_super) {
    __extends(BackgroundManager, _super);
    function BackgroundManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PLAYER_REACHED = 'playerReached';
        _this.firstBack = null;
        _this.endBack = null;
        _this.moveDuration = 1;
        _this.parallaxFactor = 0.5;
        return _this;
    }
    BackgroundManager.prototype.onLoad = function () {
        cc.systemEvent.on(this.PLAYER_REACHED, this.onPlayerReached, this);
    };
    BackgroundManager.prototype.onDestroy = function () {
        cc.systemEvent.off(this.PLAYER_REACHED, this.onPlayerReached, this);
    };
    BackgroundManager.prototype.onPlayerReached = function (distance) {
        var moveDistance = -distance * this.parallaxFactor;
        cc.tween(this.firstBack)
            .by(this.moveDuration, { position: cc.v3(moveDistance, 0) }, { easing: 'sineInOut' })
            .start();
        cc.tween(this.endBack)
            .by(this.moveDuration, { position: cc.v3(moveDistance, 0) }, { easing: 'sineInOut' })
            .start();
        this.checkAndResetPosition(this.firstBack, this.endBack);
    };
    BackgroundManager.prototype.checkAndResetPosition = function (first, end) {
        if (first.x <= -first.width) {
            first.x = end.x + end.width;
        }
        if (end.x <= -end.width) {
            end.x = first.x + first.width;
        }
    };
    __decorate([
        property(cc.Node)
    ], BackgroundManager.prototype, "firstBack", void 0);
    __decorate([
        property(cc.Node)
    ], BackgroundManager.prototype, "endBack", void 0);
    __decorate([
        property(cc.Float)
    ], BackgroundManager.prototype, "moveDuration", void 0);
    __decorate([
        property(cc.Float)
    ], BackgroundManager.prototype, "parallaxFactor", void 0);
    BackgroundManager = __decorate([
        ccclass
    ], BackgroundManager);
    return BackgroundManager;
}(cc.Component));
exports.default = BackgroundManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQmFja2dyb3VuZE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUErQ0M7UUE5Q29CLG9CQUFjLEdBQVcsZUFBZSxDQUFDO1FBR2xELGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUd6QixvQkFBYyxHQUFXLEdBQUcsQ0FBQzs7SUFrQ3pDLENBQUM7SUFoQ2Esa0NBQU0sR0FBaEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVTLHFDQUFTLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSwyQ0FBZSxHQUF0QixVQUF1QixRQUFnQjtRQUNuQyxJQUFNLFlBQVksR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRXJELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNuQixFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ3BGLEtBQUssRUFBRSxDQUFDO1FBRWIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ2pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDcEYsS0FBSyxFQUFFLENBQUM7UUFHYixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVPLGlEQUFxQixHQUE3QixVQUE4QixLQUFjLEVBQUUsR0FBWTtRQUN0RCxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ3pCLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtZQUNyQixHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUNqQztJQUNMLENBQUM7SUExQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDZ0I7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDYztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJEQUNjO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkRBQ2tCO0lBYnBCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBK0NyQztJQUFELHdCQUFDO0NBL0NELEFBK0NDLENBL0M4QyxFQUFFLENBQUMsU0FBUyxHQStDMUQ7a0JBL0NvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmRNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgUExBWUVSX1JFQUNIRUQ6IHN0cmluZyA9ICdwbGF5ZXJSZWFjaGVkJztcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZmlyc3RCYWNrOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZW5kQmFjazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHJpdmF0ZSBtb3ZlRHVyYXRpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHJpdmF0ZSBwYXJhbGxheEZhY3RvcjogbnVtYmVyID0gMC41O1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5QTEFZRVJfUkVBQ0hFRCwgdGhpcy5vblBsYXllclJlYWNoZWQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuUExBWUVSX1JFQUNIRUQsIHRoaXMub25QbGF5ZXJSZWFjaGVkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25QbGF5ZXJSZWFjaGVkKGRpc3RhbmNlOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBtb3ZlRGlzdGFuY2UgPSAtZGlzdGFuY2UgKiB0aGlzLnBhcmFsbGF4RmFjdG9yO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmZpcnN0QmFjaylcclxuICAgICAgICAgICAgLmJ5KHRoaXMubW92ZUR1cmF0aW9uLCB7IHBvc2l0aW9uOiBjYy52Myhtb3ZlRGlzdGFuY2UsIDApIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5lbmRCYWNrKVxyXG4gICAgICAgICAgICAuYnkodGhpcy5tb3ZlRHVyYXRpb24sIHsgcG9zaXRpb246IGNjLnYzKG1vdmVEaXN0YW5jZSwgMCkgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0FuZFJlc2V0UG9zaXRpb24odGhpcy5maXJzdEJhY2ssIHRoaXMuZW5kQmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0FuZFJlc2V0UG9zaXRpb24oZmlyc3Q6IGNjLk5vZGUsIGVuZDogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmIChmaXJzdC54IDw9IC1maXJzdC53aWR0aCkge1xyXG4gICAgICAgICAgICBmaXJzdC54ID0gZW5kLnggKyBlbmQud2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW5kLnggPD0gLWVuZC53aWR0aCkge1xyXG4gICAgICAgICAgICBlbmQueCA9IGZpcnN0LnggKyBmaXJzdC53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/CameraShake.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f60a03AcBGhbQutWRTy5hK', 'CameraShake');
// Scripts/CameraShake.ts

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
var CameraShake = /** @class */ (function (_super) {
    __extends(CameraShake, _super);
    function CameraShake() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PLAYER_FALL = 'playerFall';
        _this.shakeDuration = 0.5;
        _this.shakeMagnitude = 20;
        _this.repeat = 2;
        return _this;
    }
    CameraShake.prototype.onLoad = function () {
        cc.systemEvent.on(this.PLAYER_FALL, this.shake, this);
    };
    CameraShake.prototype.onDestroy = function () {
        cc.systemEvent.off(this.PLAYER_FALL, this.shake, this);
    };
    CameraShake.prototype.shake = function () {
        var originalPosition = this.node.position; // Сохраняем изначальную позицию
        cc.tween(this.node)
            .repeat(this.repeat, cc.tween()
            .by(this.shakeDuration / 4, { position: cc.v3(this.shakeMagnitude, 0) })
            .by(this.shakeDuration / 4, { position: cc.v3(-this.shakeMagnitude * 2, 0) })
            .by(this.shakeDuration / 4, { position: cc.v3(this.shakeMagnitude * 2, 0) })
            .by(this.shakeDuration / 4, { position: cc.v3(-this.shakeMagnitude, 0) }))
            .to(0, { position: originalPosition })
            .start();
    };
    __decorate([
        property(cc.Float)
    ], CameraShake.prototype, "shakeDuration", void 0);
    __decorate([
        property(cc.Float)
    ], CameraShake.prototype, "shakeMagnitude", void 0);
    __decorate([
        property(cc.Float)
    ], CameraShake.prototype, "repeat", void 0);
    CameraShake = __decorate([
        ccclass
    ], CameraShake);
    return CameraShake;
}(cc.Component));
exports.default = CameraShake;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ2FtZXJhU2hha2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFrQ0M7UUFqQ3FCLGlCQUFXLEdBQVcsWUFBWSxDQUFDO1FBRzdDLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBRzVCLG9CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRzVCLFlBQU0sR0FBVyxDQUFDLENBQUM7O0lBd0IvQixDQUFDO0lBdEJhLDRCQUFNLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFUywrQkFBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU8sMkJBQUssR0FBYjtRQUNJLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQ0FBZ0M7UUFFN0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ2YsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUN2RSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDNUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUMzRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUNoRjthQUNBLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQzthQUNyQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBN0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ2lCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ2lCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1E7SUFWVixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBa0MvQjtJQUFELGtCQUFDO0NBbENELEFBa0NDLENBbEN3QyxFQUFFLENBQUMsU0FBUyxHQWtDcEQ7a0JBbENvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYVNoYWtlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5ICBQTEFZRVJfRkFMTDogc3RyaW5nID0gJ3BsYXllckZhbGwnO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHByaXZhdGUgc2hha2VEdXJhdGlvbjogbnVtYmVyID0gMC41O1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHByaXZhdGUgc2hha2VNYWduaXR1ZGU6IG51bWJlciA9IDIwO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHByaXZhdGUgcmVwZWF0OiBudW1iZXIgPSAyO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5QTEFZRVJfRkFMTCwgdGhpcy5zaGFrZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuUExBWUVSX0ZBTEwsIHRoaXMuc2hha2UsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hha2UoKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247IC8vINCh0L7RhdGA0LDQvdGP0LXQvCDQuNC30L3QsNGH0LDQu9GM0L3Rg9GOINC/0L7Qt9C40YbQuNGOXG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnJlcGVhdCh0aGlzLnJlcGVhdCxcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpXG4gICAgICAgICAgICAgICAgICAgIC5ieSh0aGlzLnNoYWtlRHVyYXRpb24gLyA0LCB7IHBvc2l0aW9uOiBjYy52Myh0aGlzLnNoYWtlTWFnbml0dWRlLCAwKSB9KVxuICAgICAgICAgICAgICAgICAgICAuYnkodGhpcy5zaGFrZUR1cmF0aW9uIC8gNCwgeyBwb3NpdGlvbjogY2MudjMoLXRoaXMuc2hha2VNYWduaXR1ZGUgKiAyLCAwKSB9KVxuICAgICAgICAgICAgICAgICAgICAuYnkodGhpcy5zaGFrZUR1cmF0aW9uIC8gNCwgeyBwb3NpdGlvbjogY2MudjModGhpcy5zaGFrZU1hZ25pdHVkZSAqIDIsIDApIH0pXG4gICAgICAgICAgICAgICAgICAgIC5ieSh0aGlzLnNoYWtlRHVyYXRpb24gLyA0LCB7IHBvc2l0aW9uOiBjYy52MygtdGhpcy5zaGFrZU1hZ25pdHVkZSwgMCkgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50bygwLCB7IHBvc2l0aW9uOiBvcmlnaW5hbFBvc2l0aW9uIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/SkinSelector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd41c3M3cltODZoRKqqAcF2g', 'SkinSelector');
// Scripts/UI/SkinSelector.ts

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
var SkinSelector = /** @class */ (function (_super) {
    __extends(SkinSelector, _super);
    function SkinSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skinButton1 = null;
        _this.skinButton2 = null;
        return _this;
    }
    SkinSelector_1 = SkinSelector;
    SkinSelector.prototype.onLoad = function () {
        var _this = this;
        this.skinButton1.node.on('click', function () { return _this.onSkinSelected(1); }, this);
        this.skinButton2.node.on('click', function () { return _this.onSkinSelected(2); }, this);
    };
    SkinSelector.prototype.onSkinSelected = function (skinId) {
        cc.systemEvent.emit(SkinSelector_1.SKIN_SELECTED_EVENT, skinId);
    };
    var SkinSelector_1;
    SkinSelector.SKIN_SELECTED_EVENT = 'skinSelected';
    __decorate([
        property(cc.Button)
    ], SkinSelector.prototype, "skinButton1", void 0);
    __decorate([
        property(cc.Button)
    ], SkinSelector.prototype, "skinButton2", void 0);
    SkinSelector = SkinSelector_1 = __decorate([
        ccclass
    ], SkinSelector);
    return SkinSelector;
}(cc.Component));
exports.default = SkinSelector;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFNraW5TZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQWlCQztRQWZXLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLGlCQUFXLEdBQWMsSUFBSSxDQUFDOztJQVkxQyxDQUFDO3FCQWpCb0IsWUFBWTtJQVNuQiw2QkFBTSxHQUFoQjtRQUFBLGlCQUdDO1FBRkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUF0QixDQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTyxxQ0FBYyxHQUF0QixVQUF1QixNQUFjO1FBQ2pDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQVksQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDOztJQVR1QixnQ0FBbUIsR0FBVyxjQUFjLENBQUM7SUFMckU7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDa0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDa0I7SUFMckIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWlCaEM7SUFBRCxtQkFBQztDQWpCRCxBQWlCQyxDQWpCeUMsRUFBRSxDQUFDLFNBQVMsR0FpQnJEO2tCQWpCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTa2luU2VsZWN0b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgcHJpdmF0ZSBza2luQnV0dG9uMTogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgcHJpdmF0ZSBza2luQnV0dG9uMjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNLSU5fU0VMRUNURURfRVZFTlQ6IHN0cmluZyA9ICdza2luU2VsZWN0ZWQnO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5za2luQnV0dG9uMS5ub2RlLm9uKCdjbGljaycsICgpID0+IHRoaXMub25Ta2luU2VsZWN0ZWQoMSksIHRoaXMpO1xuICAgICAgICB0aGlzLnNraW5CdXR0b24yLm5vZGUub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vblNraW5TZWxlY3RlZCgyKSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNraW5TZWxlY3RlZChza2luSWQ6IG51bWJlcikge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KFNraW5TZWxlY3Rvci5TS0lOX1NFTEVDVEVEX0VWRU5ULCBza2luSWQpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/SkinChanger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18a4fZZsuROuplcizPty4fr', 'SkinChanger');
// Scripts/SkinChanger.ts

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
var SkinChanger = /** @class */ (function (_super) {
    __extends(SkinChanger, _super);
    function SkinChanger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SKIN_SELECTED = 'skinSelected';
        _this.characterSprite = null;
        _this.availableSkins = [];
        return _this;
    }
    SkinChanger.prototype.onLoad = function () {
        cc.systemEvent.on(this.SKIN_SELECTED, this.onSkinChange, this);
    };
    SkinChanger.prototype.onDestroy = function () {
        cc.systemEvent.off(this.SKIN_SELECTED, this.onSkinChange, this);
    };
    SkinChanger.prototype.onSkinChange = function (skinId) {
        this.characterSprite.spriteFrame = this.availableSkins[skinId - 1];
    };
    __decorate([
        property(cc.Sprite)
    ], SkinChanger.prototype, "characterSprite", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], SkinChanger.prototype, "availableSkins", void 0);
    SkinChanger = __decorate([
        ccclass
    ], SkinChanger);
    return SkinChanger;
}(cc.Component));
exports.default = SkinChanger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU2tpbkNoYW5nZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFxQkM7UUFwQm9CLG1CQUFhLEdBQVcsY0FBYyxDQUFDO1FBSWhELHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLG9CQUFjLEdBQXFCLEVBQUUsQ0FBQzs7SUFhbEQsQ0FBQztJQVhhLDRCQUFNLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFUywrQkFBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU8sa0NBQVksR0FBcEIsVUFBcUIsTUFBYztRQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBZkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDc0I7SUFHMUM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7dURBQ21CO0lBUjdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FxQi9CO0lBQUQsa0JBQUM7Q0FyQkQsQUFxQkMsQ0FyQndDLEVBQUUsQ0FBQyxTQUFTLEdBcUJwRDtrQkFyQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpbkNoYW5nZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgU0tJTl9TRUxFQ1RFRDogc3RyaW5nID0gJ3NraW5TZWxlY3RlZCc7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXJTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBwcml2YXRlIGF2YWlsYWJsZVNraW5zOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlNLSU5fU0VMRUNURUQsIHRoaXMub25Ta2luQ2hhbmdlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5TS0lOX1NFTEVDVEVELCB0aGlzLm9uU2tpbkNoYW5nZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNraW5DaGFuZ2Uoc2tpbklkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmF2YWlsYWJsZVNraW5zW3NraW5JZCAtIDFdO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
