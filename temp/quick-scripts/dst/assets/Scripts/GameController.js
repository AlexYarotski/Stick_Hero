
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFnREM7UUE5Q0csWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUUxQixrQkFBWSxHQUFZLEtBQUssQ0FBQzs7SUFzQzFDLENBQUM7SUFwQ0csOEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0wsQ0FBQztJQUVELGdDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUFFLE9BQU87UUFFL0IsNEJBQTRCO0lBQ2hDLENBQUM7SUE3Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkRBQ2dCO0lBUmpCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FnRGxDO0lBQUQscUJBQUM7Q0FoREQsQUFnREMsQ0FoRDJDLEVBQUUsQ0FBQyxTQUFTLEdBZ0R2RDtrQkFoRG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzdGljazogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwbGF0Zm9ybUNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGlzR2FtZUFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEdhbWUoKTtcbiAgICB9XG5cbiAgICBpbml0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5pc0dhbWVBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlc2V0R2FtZSgpO1xuICAgIH1cblxuICAgIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UG9zaXRpb24oY2MudjIoLTIwMCwgMCkpO1xuICAgICAgICB0aGlzLnN0aWNrLnNldFNjYWxlKDEsIDApO1xuICAgICAgICB0aGlzLnNwYXduUGxhdGZvcm1zKCk7XG4gICAgfVxuXG4gICAgc3Bhd25QbGF0Zm9ybXMoKSB7XG4gICAgICAgIC8vINCf0YDQuNC80LXRgNC90YvQuSDRgdC/0LDQstC9INC/0LvQsNGC0YTQvtGA0LxcbiAgICAgICAgdGhpcy5wbGF0Zm9ybUNvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmV3UGxhdGZvcm0gPSBuZXcgY2MuTm9kZShcIlBsYXRmb3JtXCIpO1xuICAgICAgICAgICAgbmV3UGxhdGZvcm0uYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBuZXdQbGF0Zm9ybS5zZXRQb3NpdGlvbihjYy52MigyMDAgKiBpLCAtMjAwKSk7XG4gICAgICAgICAgICB0aGlzLnBsYXRmb3JtQ29udGFpbmVyLmFkZENoaWxkKG5ld1BsYXRmb3JtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuZEdhbWUoKSB7XG4gICAgICAgIHRoaXMuaXNHYW1lQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNjLmxvZygnR2FtZSBPdmVyJyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzR2FtZUFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgICAgIC8vINCY0LPRgNC+0LLQsNGPINC70L7Qs9C40LrQsCDQvtCx0L3QvtCy0LvQtdC90LjQuVxuICAgIH1cbn1cbiJdfQ==