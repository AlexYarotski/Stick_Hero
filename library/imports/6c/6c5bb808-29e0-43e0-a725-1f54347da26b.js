"use strict";
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