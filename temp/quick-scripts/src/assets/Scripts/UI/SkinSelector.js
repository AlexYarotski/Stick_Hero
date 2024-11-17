"use strict";
cc._RF.push(module, 'd41c3M3cltODZoRKqqAcF2g', 'SkinSelector');
// Scripts/UI/SkinSelector.ts

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
var SkinSelector = /** @class */ (function (_super) {
    __extends(SkinSelector, _super);
    function SkinSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skinButton1 = null;
        _this.skinButton2 = null;
        return _this;
    }
    SkinSelector_1 = SkinSelector;
    SkinSelector.prototype.onLoad = function () {
        var _this = this;
        this.skinButton1.node.on('click', function () { return _this.onSkinSelected(1); }, this);
        this.skinButton2.node.on('click', function () { return _this.onSkinSelected(2); }, this);
    };
    SkinSelector.prototype.onSkinSelected = function (skinId) {
        cc.systemEvent.emit(SkinSelector_1.SKIN_SELECTED_EVENT, skinId);
    };
    var SkinSelector_1;
    SkinSelector.SKIN_SELECTED_EVENT = 'skinSelected';
    __decorate([
        property(cc.Button)
    ], SkinSelector.prototype, "skinButton1", void 0);
    __decorate([
        property(cc.Button)
    ], SkinSelector.prototype, "skinButton2", void 0);
    SkinSelector = SkinSelector_1 = __decorate([
        ccclass
    ], SkinSelector);
    return SkinSelector;
}(cc.Component));
exports.default = SkinSelector;

cc._RF.pop();