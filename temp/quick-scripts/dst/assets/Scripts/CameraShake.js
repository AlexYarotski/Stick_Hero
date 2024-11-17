
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/CameraShake.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ2FtZXJhU2hha2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFrQ0M7UUFqQ3FCLGlCQUFXLEdBQVcsWUFBWSxDQUFDO1FBRzdDLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBRzVCLG9CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRzVCLFlBQU0sR0FBVyxDQUFDLENBQUM7O0lBd0IvQixDQUFDO0lBdEJhLDRCQUFNLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFUywrQkFBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU8sMkJBQUssR0FBYjtRQUNJLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQ0FBZ0M7UUFFN0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ2YsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUN2RSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDNUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUMzRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUNoRjthQUNBLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQzthQUNyQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBN0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ2lCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ2lCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1E7SUFWVixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBa0MvQjtJQUFELGtCQUFDO0NBbENELEFBa0NDLENBbEN3QyxFQUFFLENBQUMsU0FBUyxHQWtDcEQ7a0JBbENvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYVNoYWtlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5ICBQTEFZRVJfRkFMTDogc3RyaW5nID0gJ3BsYXllckZhbGwnO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHByaXZhdGUgc2hha2VEdXJhdGlvbjogbnVtYmVyID0gMC41O1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHByaXZhdGUgc2hha2VNYWduaXR1ZGU6IG51bWJlciA9IDIwO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHByaXZhdGUgcmVwZWF0OiBudW1iZXIgPSAyO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5QTEFZRVJfRkFMTCwgdGhpcy5zaGFrZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuUExBWUVSX0ZBTEwsIHRoaXMuc2hha2UsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hha2UoKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247IC8vINCh0L7RhdGA0LDQvdGP0LXQvCDQuNC30L3QsNGH0LDQu9GM0L3Rg9GOINC/0L7Qt9C40YbQuNGOXG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnJlcGVhdCh0aGlzLnJlcGVhdCxcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpXG4gICAgICAgICAgICAgICAgICAgIC5ieSh0aGlzLnNoYWtlRHVyYXRpb24gLyA0LCB7IHBvc2l0aW9uOiBjYy52Myh0aGlzLnNoYWtlTWFnbml0dWRlLCAwKSB9KVxuICAgICAgICAgICAgICAgICAgICAuYnkodGhpcy5zaGFrZUR1cmF0aW9uIC8gNCwgeyBwb3NpdGlvbjogY2MudjMoLXRoaXMuc2hha2VNYWduaXR1ZGUgKiAyLCAwKSB9KVxuICAgICAgICAgICAgICAgICAgICAuYnkodGhpcy5zaGFrZUR1cmF0aW9uIC8gNCwgeyBwb3NpdGlvbjogY2MudjModGhpcy5zaGFrZU1hZ25pdHVkZSAqIDIsIDApIH0pXG4gICAgICAgICAgICAgICAgICAgIC5ieSh0aGlzLnNoYWtlRHVyYXRpb24gLyA0LCB7IHBvc2l0aW9uOiBjYy52MygtdGhpcy5zaGFrZU1hZ25pdHVkZSwgMCkgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50bygwLCB7IHBvc2l0aW9uOiBvcmlnaW5hbFBvc2l0aW9uIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG59XG4iXX0=