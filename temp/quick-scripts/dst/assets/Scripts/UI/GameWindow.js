
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/GameWindow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6aa7fM+wE1F2aAkYsIrMWAD', 'GameWindow');
// Scripts/UI/GameWindow.ts

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
var Window_1 = require("./Window");
var Label = cc.Label;
var DataCounter_1 = require("../DataCounter");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameWindow = /** @class */ (function (_super) {
    __extends(GameWindow, _super);
    function GameWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DOUBLE = 'double';
        _this.PLAYER_REACHED = 'playerReached';
        _this.PLAYER_FALL = 'playerFall';
        _this.counter = null;
        _this.scaleDuration = 0.5;
        _this.increase = 1.5;
        _this.originalScale = 0;
        _this.count = 0;
        _this.point = 0;
        return _this;
    }
    Object.defineProperty(GameWindow.prototype, "isPopUp", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    GameWindow.prototype.onEnable = function () {
        cc.systemEvent.on(this.PLAYER_REACHED, this.onPlayerReached, this);
        cc.systemEvent.on(this.DOUBLE, this.onDouble, this);
        cc.systemEvent.on(this.PLAYER_FALL, this.onDouble, this);
    };
    GameWindow.prototype.onDisable = function () {
        cc.systemEvent.off(this.PLAYER_REACHED, this.onPlayerReached, this);
        cc.systemEvent.off(this.DOUBLE, this.onDouble, this);
        cc.systemEvent.off(this.PLAYER_FALL, this.onPlayerFall, this);
    };
    GameWindow.prototype.start = function () {
        this.originalScale = this.counter.node.scale;
    };
    GameWindow.prototype.show = function () {
        _super.prototype.show.call(this);
        this.resetCounter();
    };
    GameWindow.prototype.resetCounter = function () {
        this.count = 0;
        this.updateCounterDisplay();
    };
    GameWindow.prototype.onDouble = function () {
        this.point++;
        DataCounter_1.default.setDoubleCount(DataCounter_1.default.getDoubleCount() + 1);
    };
    GameWindow.prototype.onPlayerReached = function () {
        this.point++;
        this.count += this.point;
        this.updateCounterDisplay();
        this.animateCounter();
        this.point = 0;
    };
    GameWindow.prototype.onPlayerFall = function () {
        DataCounter_1.default.setScore(this.count);
        if (DataCounter_1.default.getBestScore() < this.count) {
            DataCounter_1.default.setBestScore(this.count);
        }
    };
    GameWindow.prototype.updateCounterDisplay = function () {
        this.counter.string = this.count.toString();
    };
    GameWindow.prototype.animateCounter = function () {
        cc.Tween.stopAllByTarget(this.counter.node);
        cc.tween(this.counter.node)
            .to(this.scaleDuration, { scale: this.originalScale * this.increase })
            .to(this.scaleDuration, { scale: this.originalScale })
            .start();
    };
    __decorate([
        property(Label)
    ], GameWindow.prototype, "counter", void 0);
    __decorate([
        property(Number)
    ], GameWindow.prototype, "scaleDuration", void 0);
    __decorate([
        property(Number)
    ], GameWindow.prototype, "increase", void 0);
    GameWindow = __decorate([
        ccclass
    ], GameWindow);
    return GameWindow;
}(Window_1.default));
exports.default = GameWindow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEdhbWVXaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLElBQU8sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFDeEIsOENBQXlDO0FBRW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBb0ZDO1FBbkZvQixZQUFNLEdBQVcsUUFBUSxDQUFDO1FBQzFCLG9CQUFjLEdBQVcsZUFBZSxDQUFDO1FBQ3pDLGlCQUFXLEdBQVcsWUFBWSxDQUFDO1FBRzVDLGFBQU8sR0FBVSxJQUFJLENBQUM7UUFHdEIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFHNUIsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUV2QixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUMxQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBb0U5QixDQUFDO0lBbEVHLHNCQUFJLCtCQUFPO2FBQVg7WUFDSSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUVTLDZCQUFRLEdBQWxCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRCxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0Qs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dCBXaW5kb3cgZnJvbSBcIi4vV2luZG93XCI7XHJcbmltcG9ydCBMYWJlbCA9IGNjLkxhYmVsO1xyXG5pbXBvcnQgRGF0YUNvdW50ZXIgZnJvbSBcIi4uL0RhdGFDb3VudGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IERPVUJMRTogc3RyaW5nID0gJ2RvdWJsZSc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IFBMQVlFUl9SRUFDSEVEOiBzdHJpbmcgPSAncGxheWVyUmVhY2hlZCc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IFBMQVlFUl9GQUxMOiBzdHJpbmcgPSAncGxheWVyRmFsbCc7XHJcblxyXG4gICAgQHByb3BlcnR5KExhYmVsKVxyXG4gICAgcHJpdmF0ZSBjb3VudGVyOiBMYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIHByaXZhdGUgc2NhbGVEdXJhdGlvbjogbnVtYmVyID0gMC41O1xyXG5cclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICBwcml2YXRlIGluY3JlYXNlOiBudW1iZXIgPSAxLjU7XHJcblxyXG4gICAgcHJpdmF0ZSBvcmlnaW5hbFNjYWxlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjb3VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcG9pbnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZ2V0IGlzUG9wVXAoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlBMQVlFUl9SRUFDSEVELCB0aGlzLm9uUGxheWVyUmVhY2hlZCwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5ET1VCTEUsIHRoaXMub25Eb3VibGUsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuUExBWUVSX0ZBTEwsIHRoaXMub25Eb3VibGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuUExBWUVSX1JFQUNIRUQsIHRoaXMub25QbGF5ZXJSZWFjaGVkLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5ET1VCTEUsIHRoaXMub25Eb3VibGUsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLlBMQVlFUl9GQUxMLCB0aGlzLm9uUGxheWVyRmFsbCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxTY2FsZSA9IHRoaXMuY291bnRlci5ub2RlLnNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KCkge1xyXG4gICAgICAgIHN1cGVyLnNob3coKTtcclxuICAgICAgICB0aGlzLnJlc2V0Q291bnRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRDb3VudGVyKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ291bnRlckRpc3BsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRG91YmxlKCkge1xyXG4gICAgICAgIHRoaXMucG9pbnQrKztcclxuXHJcbiAgICAgICAgRGF0YUNvdW50ZXIuc2V0RG91YmxlQ291bnQoRGF0YUNvdW50ZXIuZ2V0RG91YmxlQ291bnQoKSArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25QbGF5ZXJSZWFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMucG9pbnQrKztcclxuXHJcbiAgICAgICAgdGhpcy5jb3VudCArPSB0aGlzLnBvaW50O1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ291bnRlckRpc3BsYXkoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGVDb3VudGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9pbnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25QbGF5ZXJGYWxsKCl7XHJcbiAgICAgICAgRGF0YUNvdW50ZXIuc2V0U2NvcmUodGhpcy5jb3VudCk7XHJcblxyXG4gICAgICAgIGlmIChEYXRhQ291bnRlci5nZXRCZXN0U2NvcmUoKSA8IHRoaXMuY291bnQpIHtcclxuICAgICAgICAgICAgRGF0YUNvdW50ZXIuc2V0QmVzdFNjb3JlKHRoaXMuY291bnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNvdW50ZXJEaXNwbGF5KCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlci5zdHJpbmcgPSB0aGlzLmNvdW50LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhbmltYXRlQ291bnRlcigpIHtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5jb3VudGVyLm5vZGUpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNvdW50ZXIubm9kZSlcclxuICAgICAgICAgICAgLnRvKHRoaXMuc2NhbGVEdXJhdGlvbiwgeyBzY2FsZTogdGhpcy5vcmlnaW5hbFNjYWxlICogdGhpcy5pbmNyZWFzZSB9KVxyXG4gICAgICAgICAgICAudG8odGhpcy5zY2FsZUR1cmF0aW9uLCB7IHNjYWxlOiB0aGlzLm9yaWdpbmFsU2NhbGUgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19