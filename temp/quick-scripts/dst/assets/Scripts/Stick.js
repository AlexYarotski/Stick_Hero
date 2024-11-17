
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Stick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e8adRsEU9NoZ2ymCi4kgNR', 'Stick');
// Scripts/Stick.ts

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
var Stick = /** @class */ (function (_super) {
    __extends(Stick, _super);
    function Stick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TOUCHED_START = 'touchStart';
        _this.TOUCHED_END = 'touchEnd';
        _this.STICK_FALLEN = 'stickFallen';
        _this.size = 10;
        _this.growSpeed = 100;
        _this.duration = 0.5;
        _this.isGrowing = false;
        _this.isStickPlaced = false;
        return _this;
    }
    Stick.prototype.onEnable = function () {
        cc.systemEvent.on(this.TOUCHED_START, this.onTouchStart, this);
        cc.systemEvent.on(this.TOUCHED_END, this.onTouchEnd, this);
    };
    Stick.prototype.onDisable = function () {
        cc.systemEvent.off(this.TOUCHED_START, this.onTouchStart, this);
        cc.systemEvent.off(this.TOUCHED_END, this.onTouchEnd, this);
    };
    Stick.prototype.reset = function () {
        this.node.width = this.size;
        this.node.height = 0;
        this.node.angle = 0;
        this.node.stopAllActions();
        this.isGrowing = false;
        this.isStickPlaced = false;
    };
    Stick.prototype.initiateFall = function () {
        cc.tween(this.node)
            .to(this.duration, { angle: -180 }, { easing: 'cubicOut' })
            .start();
    };
    Stick.prototype.onTouchStart = function () {
        if (this.isStickPlaced)
            return;
        this.startGrowing();
    };
    Stick.prototype.onTouchEnd = function () {
        if (this.isStickPlaced)
            return;
        this.stopGrowing();
    };
    Stick.prototype.startGrowing = function () {
        this.isGrowing = true;
        this.schedule(this.growStick, 0.02);
    };
    Stick.prototype.stopGrowing = function () {
        this.isGrowing = false;
        this.unschedule(this.growStick);
        this.rotateStick();
        this.isStickPlaced = true;
    };
    Stick.prototype.growStick = function () {
        if (!this.isGrowing)
            return;
        this.node.height += this.growSpeed * 0.2;
    };
    Stick.prototype.rotateStick = function () {
        var _this = this;
        cc.tween(this.node)
            .to(this.duration, { angle: -90 }, { easing: 'cubicOut' })
            .call(function () {
            _this.emitStickFallenEvent();
        })
            .start();
    };
    Stick.prototype.emitStickFallenEvent = function () {
        cc.systemEvent.emit(this.STICK_FALLEN, this.node);
    };
    __decorate([
        property(cc.Float)
    ], Stick.prototype, "growSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], Stick.prototype, "duration", void 0);
    Stick = __decorate([
        ccclass
    ], Stick);
    return Stick;
}(cc.Component));
exports.default = Stick;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3RpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFpRkM7UUFoRm9CLG1CQUFhLEdBQVcsWUFBWSxDQUFDO1FBQ3JDLGlCQUFXLEdBQVcsVUFBVSxDQUFDO1FBQ2pDLGtCQUFZLEdBQVcsYUFBYSxDQUFDO1FBRXJDLFVBQUksR0FBVyxFQUFFLENBQUM7UUFHM0IsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUd4QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBRXZCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsbUJBQWEsR0FBWSxLQUFLLENBQUM7O0lBbUUzQyxDQUFDO0lBakVhLHdCQUFRLEdBQWxCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRVMseUJBQVMsR0FBbkI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxxQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVNLDRCQUFZLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUMxRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU8sNEJBQVksR0FBcEI7UUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsT0FBTztRQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLDBCQUFVLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLE9BQU87UUFDL0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyw0QkFBWSxHQUFwQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8sMkJBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVPLHlCQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUM3QyxDQUFDO0lBRU8sMkJBQVcsR0FBbkI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDekQsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLG9DQUFvQixHQUE1QjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUF4RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDYTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNZO0lBWGQsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWlGekI7SUFBRCxZQUFDO0NBakZELEFBaUZDLENBakZrQyxFQUFFLENBQUMsU0FBUyxHQWlGOUM7a0JBakZvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0aWNrIGV4dGVuZHMgY2MuQ29tcG9uZW50e1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBUT1VDSEVEX1NUQVJUOiBzdHJpbmcgPSAndG91Y2hTdGFydCc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IFRPVUNIRURfRU5EOiBzdHJpbmcgPSAndG91Y2hFbmQnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBTVElDS19GQUxMRU46IHN0cmluZyA9ICdzdGlja0ZhbGxlbic7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzaXplOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwcml2YXRlIGdyb3dTcGVlZDogbnVtYmVyID0gMTAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIHByaXZhdGUgZHVyYXRpb246IG51bWJlciA9IDAuNTtcclxuXHJcbiAgICBwcml2YXRlIGlzR3Jvd2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1N0aWNrUGxhY2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuVE9VQ0hFRF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuVE9VQ0hFRF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5UT1VDSEVEX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuVE9VQ0hFRF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHRoaXMuc2l6ZTtcclxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG5cclxuICAgICAgICB0aGlzLmlzR3Jvd2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNTdGlja1BsYWNlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0aWF0ZUZhbGwoKXtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50byh0aGlzLmR1cmF0aW9uLCB7IGFuZ2xlOiAtMTgwIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaFN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3RpY2tQbGFjZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXJ0R3Jvd2luZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaEVuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0aWNrUGxhY2VkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdG9wR3Jvd2luZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRHcm93aW5nKCkge1xyXG4gICAgICAgIHRoaXMuaXNHcm93aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZ3Jvd1N0aWNrLCAwLjAyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3BHcm93aW5nKCkge1xyXG4gICAgICAgIHRoaXMuaXNHcm93aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ3Jvd1N0aWNrKTtcclxuICAgICAgICB0aGlzLnJvdGF0ZVN0aWNrKCk7XHJcbiAgICAgICAgdGhpcy5pc1N0aWNrUGxhY2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdyb3dTdGljaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNHcm93aW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCArPSB0aGlzLmdyb3dTcGVlZCAqIDAuMjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJvdGF0ZVN0aWNrKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKHRoaXMuZHVyYXRpb24sIHsgYW5nbGU6IC05MCB9LCB7IGVhc2luZzogJ2N1YmljT3V0JyB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRTdGlja0ZhbGxlbkV2ZW50KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW1pdFN0aWNrRmFsbGVuRXZlbnQoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdCh0aGlzLlNUSUNLX0ZBTExFTiwgdGhpcy5ub2RlKTtcclxuICAgIH1cclxufVxyXG4iXX0=