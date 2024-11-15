
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/StickManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5dbd4rMfm5MgKFgI39UqgKV', 'StickManager');
// Scripts/StickManager.ts

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
var StickManager = /** @class */ (function (_super) {
    __extends(StickManager, _super);
    function StickManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TOUCHED_START = 'touchStart';
        _this.TOUCHED_END = 'touchEnd';
        _this.STICK_FALLEN = 'stickFallen';
        _this.size = 10;
        _this.growSpeed = 100;
        _this.isGrowing = false;
        _this.isStickPlaced = false;
        return _this;
    }
    StickManager.prototype.onEnable = function () {
        cc.systemEvent.on(this.TOUCHED_START, this.onTouchStart, this);
        cc.systemEvent.on(this.TOUCHED_END, this.onTouchEnd, this);
    };
    StickManager.prototype.onDisable = function () {
        cc.systemEvent.off(this.TOUCHED_START, this.onTouchStart, this);
        cc.systemEvent.off(this.TOUCHED_END, this.onTouchEnd, this);
    };
    StickManager.prototype.reset = function () {
        this.node.height = this.size;
        this.node.width = this.size;
        this.node.setRotation(cc.quat());
        this.isGrowing = false;
        this.isStickPlaced = false;
    };
    StickManager.prototype.onTouchStart = function () {
        if (this.isStickPlaced)
            return;
        this.startGrowing();
    };
    StickManager.prototype.onTouchEnd = function () {
        if (this.isStickPlaced)
            return;
        this.stopGrowing();
    };
    StickManager.prototype.startGrowing = function () {
        this.isGrowing = true;
        this.schedule(this.growStick, 0.02);
    };
    StickManager.prototype.stopGrowing = function () {
        this.isGrowing = false;
        this.unschedule(this.growStick);
        this.rotateStick();
        this.isStickPlaced = true;
    };
    StickManager.prototype.growStick = function () {
        if (!this.isGrowing)
            return;
        this.node.height += this.growSpeed * 0.2;
    };
    StickManager.prototype.rotateStick = function () {
        var _this = this;
        cc.tween(this.node)
            .to(0.5, { angle: -90 }, { easing: 'cubicOut' })
            .call(function () {
            _this.emitStickFallenEvent();
        })
            .start();
    };
    StickManager.prototype.emitStickFallenEvent = function () {
        cc.systemEvent.emit(this.STICK_FALLEN, this.node);
    };
    __decorate([
        property(cc.Float)
    ], StickManager.prototype, "growSpeed", void 0);
    StickManager = __decorate([
        ccclass
    ], StickManager);
    return StickManager;
}(cc.Component));
exports.default = StickManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3RpY2tNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBdUVDO1FBdEVvQixtQkFBYSxHQUFXLFlBQVksQ0FBQztRQUNyQyxpQkFBVyxHQUFXLFVBQVUsQ0FBQztRQUNqQyxrQkFBWSxHQUFXLGFBQWEsQ0FBQztRQUVyQyxVQUFJLEdBQVcsRUFBRSxDQUFDO1FBRzNCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFFeEIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUE0RDNDLENBQUM7SUExRGEsK0JBQVEsR0FBbEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFUyxnQ0FBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLDRCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVPLG1DQUFZLEdBQXBCO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLE9BQU87UUFDL0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxpQ0FBVSxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLGFBQWE7WUFBRSxPQUFPO1FBQy9CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU8sbUNBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVPLGtDQUFXLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFTyxnQ0FBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDN0MsQ0FBQztJQUVPLGtDQUFXLEdBQW5CO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDL0MsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLDJDQUFvQixHQUE1QjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUE5REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDYTtJQVJmLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F1RWhDO0lBQUQsbUJBQUM7Q0F2RUQsQUF1RUMsQ0F2RXlDLEVBQUUsQ0FBQyxTQUFTLEdBdUVyRDtrQkF2RW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RpY2tNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IFRPVUNIRURfU1RBUlQ6IHN0cmluZyA9ICd0b3VjaFN0YXJ0JztcbiAgICBwcml2YXRlIHJlYWRvbmx5IFRPVUNIRURfRU5EOiBzdHJpbmcgPSAndG91Y2hFbmQnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgU1RJQ0tfRkFMTEVOOiBzdHJpbmcgPSAnc3RpY2tGYWxsZW4nO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzaXplOiBudW1iZXIgPSAxMDtcblxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBwcml2YXRlIGdyb3dTcGVlZDogbnVtYmVyID0gMTAwO1xuXG4gICAgcHJpdmF0ZSBpc0dyb3dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzU3RpY2tQbGFjZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5UT1VDSEVEX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuVE9VQ0hFRF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuVE9VQ0hFRF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5UT1VDSEVEX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKXtcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMuc2l6ZTtcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gdGhpcy5zaXplO1xuICAgICAgICB0aGlzLm5vZGUuc2V0Um90YXRpb24oY2MucXVhdCgpKTtcblxuICAgICAgICB0aGlzLmlzR3Jvd2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3RpY2tQbGFjZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hTdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGlja1BsYWNlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0YXJ0R3Jvd2luZygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Ub3VjaEVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGlja1BsYWNlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0b3BHcm93aW5nKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEdyb3dpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNHcm93aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdyb3dTdGljaywgMC4wMik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wR3Jvd2luZygpIHtcbiAgICAgICAgdGhpcy5pc0dyb3dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ3Jvd1N0aWNrKTtcbiAgICAgICAgdGhpcy5yb3RhdGVTdGljaygpO1xuICAgICAgICB0aGlzLmlzU3RpY2tQbGFjZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ3Jvd1N0aWNrKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNHcm93aW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgKz0gdGhpcy5ncm93U3BlZWQgKiAwLjI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb3RhdGVTdGljaygpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuNSwgeyBhbmdsZTogLTkwIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0U3RpY2tGYWxsZW5FdmVudCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW1pdFN0aWNrRmFsbGVuRXZlbnQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQodGhpcy5TVElDS19GQUxMRU4sIHRoaXMubm9kZSk7XG4gICAgfVxufVxuIl19