"use strict";
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