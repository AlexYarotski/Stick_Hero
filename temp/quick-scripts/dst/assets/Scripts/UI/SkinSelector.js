
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/SkinSelector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFNraW5TZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQWlCQztRQWZXLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLGlCQUFXLEdBQWMsSUFBSSxDQUFDOztJQVkxQyxDQUFDO3FCQWpCb0IsWUFBWTtJQVNuQiw2QkFBTSxHQUFoQjtRQUFBLGlCQUdDO1FBRkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUF0QixDQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTyxxQ0FBYyxHQUF0QixVQUF1QixNQUFjO1FBQ2pDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQVksQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDOztJQVR1QixnQ0FBbUIsR0FBVyxjQUFjLENBQUM7SUFMckU7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDa0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDa0I7SUFMckIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWlCaEM7SUFBRCxtQkFBQztDQWpCRCxBQWlCQyxDQWpCeUMsRUFBRSxDQUFDLFNBQVMsR0FpQnJEO2tCQWpCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTa2luU2VsZWN0b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgcHJpdmF0ZSBza2luQnV0dG9uMTogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgcHJpdmF0ZSBza2luQnV0dG9uMjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNLSU5fU0VMRUNURURfRVZFTlQ6IHN0cmluZyA9ICdza2luU2VsZWN0ZWQnO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5za2luQnV0dG9uMS5ub2RlLm9uKCdjbGljaycsICgpID0+IHRoaXMub25Ta2luU2VsZWN0ZWQoMSksIHRoaXMpO1xuICAgICAgICB0aGlzLnNraW5CdXR0b24yLm5vZGUub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vblNraW5TZWxlY3RlZCgyKSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNraW5TZWxlY3RlZChza2luSWQ6IG51bWJlcikge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KFNraW5TZWxlY3Rvci5TS0lOX1NFTEVDVEVEX0VWRU5ULCBza2luSWQpO1xuICAgIH1cbn1cbiJdfQ==