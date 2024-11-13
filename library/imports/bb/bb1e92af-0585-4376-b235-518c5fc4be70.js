"use strict";
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
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.stick = null;
        _this.platformContainer = null;
        _this.isGameActive = false;
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
        this.player.setPosition(cc.v2(-200, 0));
        this.stick.setScale(1, 0);
        this.spawnPlatforms();
    };
    GameController.prototype.spawnPlatforms = function () {
        // Примерный спавн платформ
        this.platformContainer.removeAllChildren();
        for (var i = 0; i < 5; i++) {
            var newPlatform = new cc.Node("Platform");
            newPlatform.addComponent(cc.Sprite);
            newPlatform.setPosition(cc.v2(200 * i, -200));
            this.platformContainer.addChild(newPlatform);
        }
    };
    GameController.prototype.endGame = function () {
        this.isGameActive = false;
        cc.log('Game Over');
    };
    GameController.prototype.update = function (dt) {
        if (!this.isGameActive)
            return;
        // Игровая логика обновлений
    };
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "stick", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "platformContainer", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.default = GameController;

cc._RF.pop();