"use strict";
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
        _this.offsetEndPlatformX = 12;
        _this.offsetStick = cc.v2(90, 10);
        _this.stickPrefab = null;
        _this.moveDuration = 1;
        _this.fallDuration = 0.2;
        _this.stick = null;
        return _this;
    }
    PlayerController_1 = PlayerController;
    PlayerController.prototype.reset = function () {
        this.startCreatingStick();
    };
    PlayerController.prototype.startCreatingStick = function () {
        var position = cc.v2(this.node.position.x + this.offsetStick.x, this.node.position.y
            + this.offsetStick.y);
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
        var worldTargetPosition = cc.v3(xPos + this.offsetPlatformX, this.node.position.y);
        var localTargetPosition = this.node.parent.convertToNodeSpaceAR(worldTargetPosition);
        var endPlatformPos = cc.v3(localTargetPosition.x + this.offsetPlatformX, this.node.position.y);
        var distanceTravelled = Math.abs(this.node.position.x - endPlatformPos.x); // Расчет пройденного расстояния
        this.moveTowards(endPlatformPos, function () {
            cc.systemEvent.emit(PlayerController_1.PLAYER_REACHED_EVENT, distanceTravelled); // Передаем расстояние как параметр
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
    var PlayerController_1;
    PlayerController.PLAYER_REACHED_EVENT = 'playerReached';
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "stickPrefab", void 0);
    __decorate([
        property(cc.Float)
    ], PlayerController.prototype, "moveDuration", void 0);
    __decorate([
        property(cc.Float)
    ], PlayerController.prototype, "fallDuration", void 0);
    PlayerController = PlayerController_1 = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

cc._RF.pop();