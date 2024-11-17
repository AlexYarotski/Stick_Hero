"use strict";
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
    PlayerFlip.prototype.disableFlip = function () {
        this.canFlip = false;
    };
    PlayerFlip.prototype.enableFlip = function () {
        this.canFlip = true;
    };
    PlayerFlip.prototype.reset = function () {
        this.node.scaleY = Math.abs(this.node.scaleY);
        this.disableFlip();
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