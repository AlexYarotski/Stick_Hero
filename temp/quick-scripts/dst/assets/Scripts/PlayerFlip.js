
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PlayerFlip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    PlayerFlip.prototype.flipPlayer = function () {
        if (this.canFlip) {
            cc.tween(this.node)
                .to(this.flipDuration, { scaleY: -this.node.scaleY })
                .start();
        }
    };
    PlayerFlip.prototype.enableFlip = function () {
        this.canFlip = false;
    };
    PlayerFlip.prototype.disableFlip = function () {
        this.canFlip = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyRmxpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQStCQztRQTlCb0IsbUJBQWEsR0FBVyxZQUFZLENBQUM7UUFHOUMsa0JBQVksR0FBVyxHQUFHLENBQUM7UUFFM0IsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUF5QnJDLENBQUM7SUF2QmEsMkJBQU0sR0FBaEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVTLDhCQUFTLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTywrQkFBVSxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDZCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ3BELEtBQUssRUFBRSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVNLCtCQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVNLGdDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQTFCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNnQjtJQUpsQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBK0I5QjtJQUFELGlCQUFDO0NBL0JELEFBK0JDLENBL0J1QyxFQUFFLENBQUMsU0FBUyxHQStCbkQ7a0JBL0JvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckZsaXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgVE9VQ0hFRF9TVEFSVDogc3RyaW5nID0gJ3RvdWNoU3RhcnQnO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHByaXZhdGUgZmxpcER1cmF0aW9uOiBudW1iZXIgPSAwLjE7XG5cbiAgICBwcml2YXRlIGNhbkZsaXA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuVE9VQ0hFRF9TVEFSVCwgdGhpcy5mbGlwUGxheWVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5UT1VDSEVEX1NUQVJULCB0aGlzLmZsaXBQbGF5ZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmxpcFBsYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuRmxpcCkge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgICAgIC50byh0aGlzLmZsaXBEdXJhdGlvbiwgeyBzY2FsZVk6IC10aGlzLm5vZGUuc2NhbGVZIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlRmxpcCgpIHtcbiAgICAgICAgdGhpcy5jYW5GbGlwID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc2FibGVGbGlwKCkge1xuICAgICAgICB0aGlzLmNhbkZsaXAgPSB0cnVlO1xuICAgIH1cbn1cbiJdfQ==