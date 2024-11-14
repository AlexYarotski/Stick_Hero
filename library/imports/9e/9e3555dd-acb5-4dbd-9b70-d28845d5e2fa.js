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