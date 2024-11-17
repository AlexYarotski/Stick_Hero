
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
        _this.speed = 100;
        _this.stick = null;
        _this.previousStick = null;
        _this.boxCollider = null;
        _this.canMove = true;
        _this.targetPosition = null;
        _this.moveCompleteCallback = null;
        return _this;
    }
    PlayerController_1 = PlayerController;
    PlayerController.prototype.onLoad = function () {
        this.boxCollider = this.getComponent(cc.BoxCollider);
        this.boxCollider.node.on(this.COLLISION_ENTER, this.onCollisionEnter, this);
    };
    PlayerController.prototype.update = function (dt) {
        if (this.targetPosition && this.canMove) {
            this.handleMovement(dt);
        }
    };
    PlayerController.prototype.handleMovement = function (dt) {
        this.playerFlip.enableFlip();
        var direction = this.calculateDirectionToTarget();
        var step = this.calculateStep(direction, dt);
        var distanceToTarget = this.calculateDistanceToTarget();
        if (this.isTargetReached(step, distanceToTarget)) {
            this.finalizeMovement();
        }
        else {
            this.moveTowardsTarget(step);
        }
    };
    PlayerController.prototype.reset = function () {
        this.spawnStick();
        this.playerFlip.reset();
        this.node.active = true;
        this.canMove = true;
        this.targetPosition = null;
    };
    PlayerController.prototype.moveToEndOfStick = function (xPos) {
        var _this = this;
        var targetPosition = cc.v3(xPos, this.node.position.y);
        this.setMovement(targetPosition, function () {
            _this.initiateFall();
        });
    };
    PlayerController.prototype.moveToEndOfPlatform = function (xPos) {
        var _this = this;
        var worldTargetPosition = cc.v3(xPos + this.offsetPlatformX, this.node.position.y);
        var localTargetPosition = this.node.parent.convertToNodeSpaceAR(worldTargetPosition);
        var endPlatformPos = cc.v3(localTargetPosition.x + this.offsetPlatformX, this.node.position.y);
        var distanceTravelled = Math.abs(this.node.position.x - endPlatformPos.x);
        this.setMovement(endPlatformPos, function () {
            _this.onReachEndOfPlatform(distanceTravelled);
            _this.playerFlip.disableFlip();
        });
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
    PlayerController.prototype.onReachEndOfPlatform = function (distanceTravelled) {
        if (!this.canMove)
            return;
        if (this.previousStick) {
            this.stickSpawner.deactivateNode(this.previousStick.node);
        }
        this.previousStick = this.stick;
        cc.systemEvent.emit(PlayerController_1.PLAYER_REACHED, distanceTravelled);
    };
    PlayerController.prototype.setMovement = function (targetPosition, onComplete) {
        this.targetPosition = targetPosition;
        this.moveCompleteCallback = onComplete;
    };
    PlayerController.prototype.initiateFall = function () {
        cc.systemEvent.emit(this.PLAYER_FALL);
        this.playerFlip.disableFlip();
        this.canMove = false;
        cc.tween(this.node)
            .to(this.fallDuration, { position: cc.v3(this.node.x, -2000) })
            .start();
        this.stick.initiateFall();
    };
    PlayerController.prototype.calculateDirectionToTarget = function () {
        return this.targetPosition.sub(this.node.position).normalize();
    };
    PlayerController.prototype.calculateStep = function (direction, dt) {
        return direction.mul(this.speed * dt);
    };
    PlayerController.prototype.calculateDistanceToTarget = function () {
        return this.node.position.sub(this.targetPosition).mag();
    };
    PlayerController.prototype.isTargetReached = function (step, distanceToTarget) {
        return step.mag() >= distanceToTarget;
    };
    PlayerController.prototype.finalizeMovement = function () {
        this.node.setPosition(this.targetPosition);
        this.targetPosition = null;
        if (this.moveCompleteCallback) {
            this.moveCompleteCallback();
        }
    };
    PlayerController.prototype.moveTowardsTarget = function (step) {
        this.node.setPosition(this.node.position.add(step));
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
    __decorate([
        property(cc.Float)
    ], PlayerController.prototype, "speed", void 0);
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