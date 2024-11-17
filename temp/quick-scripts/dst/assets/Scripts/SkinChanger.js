
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU2tpbkNoYW5nZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFxQkM7UUFwQm9CLG1CQUFhLEdBQVcsY0FBYyxDQUFDO1FBSWhELHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLG9CQUFjLEdBQXFCLEVBQUUsQ0FBQzs7SUFhbEQsQ0FBQztJQVhhLDRCQUFNLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFUywrQkFBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU8sa0NBQVksR0FBcEIsVUFBcUIsTUFBYztRQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBZkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDc0I7SUFHMUM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7dURBQ21CO0lBUjdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FxQi9CO0lBQUQsa0JBQUM7Q0FyQkQsQUFxQkMsQ0FyQndDLEVBQUUsQ0FBQyxTQUFTLEdBcUJwRDtrQkFyQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpbkNoYW5nZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgU0tJTl9TRUxFQ1RFRDogc3RyaW5nID0gJ3NraW5TZWxlY3RlZCc7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXJTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBwcml2YXRlIGF2YWlsYWJsZVNraW5zOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlNLSU5fU0VMRUNURUQsIHRoaXMub25Ta2luQ2hhbmdlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5TS0lOX1NFTEVDVEVELCB0aGlzLm9uU2tpbkNoYW5nZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNraW5DaGFuZ2Uoc2tpbklkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmF2YWlsYWJsZVNraW5zW3NraW5JZCAtIDFdO1xuICAgIH1cbn1cbiJdfQ==