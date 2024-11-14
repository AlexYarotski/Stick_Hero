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