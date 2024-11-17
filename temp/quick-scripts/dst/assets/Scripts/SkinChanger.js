
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