
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
        _this.counter = null;
        _this.bestScore = null;
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
    };
    GameWindow.prototype.onDisable = function () {
        cc.systemEvent.off(this.PLAYER_REACHED, this.onPlayerReached, this);
        cc.systemEvent.off(this.DOUBLE, this.onDouble, this);
    };
    GameWindow.prototype.start = function () {
        this.originalScale = this.counter.node.scale;
    };
    GameWindow.prototype.show = function () {
        _super.prototype.show.call(this);
        this.resetCounter();
        this.bestScore.string = DataCounter_1.default.getBestScore().toString();
    };
    GameWindow.prototype.hide = function () {
        DataCounter_1.default.setScore(this.count);
        if (DataCounter_1.default.getBestScore() < this.count) {
            DataCounter_1.default.setBestScore(this.count);
        }
        _super.prototype.hide.call(this);
    };
    GameWindow.prototype.resetCounter = function () {
        this.count = 0;
        this.updateCounterDisplay();
    };
    GameWindow.prototype.onDouble = function () {
        this.point++;
    };
    GameWindow.prototype.onPlayerReached = function () {
        this.point++;
        if (this.point > 1) {
            DataCounter_1.default.setDoubleCount(DataCounter_1.default.getDoubleCount() + 1);
        }
        this.count += this.point;
        this.updateCounterDisplay();
        this.animateCounter();
        this.point = 0;
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
        property(Label)
    ], GameWindow.prototype, "bestScore", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEdhbWVXaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLElBQU8sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFDeEIsOENBQXlDO0FBRW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBMEZDO1FBekZvQixZQUFNLEdBQVcsUUFBUSxDQUFDO1FBQzFCLG9CQUFjLEdBQVcsZUFBZSxDQUFDO1FBR2xELGFBQU8sR0FBVSxJQUFJLENBQUM7UUFHdEIsZUFBUyxHQUFVLElBQUksQ0FBQztRQUd4QixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUc1QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBRXZCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUF3RTlCLENBQUM7SUF0RUcsc0JBQUksK0JBQU87YUFBWDtZQUNJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBRVMsNkJBQVEsR0FBbEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFUyw4QkFBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGVBQWUs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bXBvcnQgV2luZG93IGZyb20gXCIuL1dpbmRvd1wiO1xyXG5pbXBvcnQgTGFiZWwgPSBjYy5MYWJlbDtcclxuaW1wb3J0IERhdGFDb3VudGVyIGZyb20gXCIuLi9EYXRhQ291bnRlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBET1VCTEU6IHN0cmluZyA9ICdkb3VibGUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBQTEFZRVJfUkVBQ0hFRDogc3RyaW5nID0gJ3BsYXllclJlYWNoZWQnO1xyXG5cclxuICAgIEBwcm9wZXJ0eShMYWJlbClcclxuICAgIHByaXZhdGUgY291bnRlcjogTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShMYWJlbClcclxuICAgIHByaXZhdGUgYmVzdFNjb3JlOiBMYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIHByaXZhdGUgc2NhbGVEdXJhdGlvbjogbnVtYmVyID0gMC41O1xyXG5cclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICBwcml2YXRlIGluY3JlYXNlOiBudW1iZXIgPSAxLjU7XHJcblxyXG4gICAgcHJpdmF0ZSBvcmlnaW5hbFNjYWxlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjb3VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcG9pbnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZ2V0IGlzUG9wVXAoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlBMQVlFUl9SRUFDSEVELCB0aGlzLm9uUGxheWVyUmVhY2hlZCwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5ET1VCTEUsIHRoaXMub25Eb3VibGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuUExBWUVSX1JFQUNIRUQsIHRoaXMub25QbGF5ZXJSZWFjaGVkLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5ET1VCTEUsIHRoaXMub25Eb3VibGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsU2NhbGUgPSB0aGlzLmNvdW50ZXIubm9kZS5zY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdygpIHtcclxuICAgICAgICBzdXBlci5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5yZXNldENvdW50ZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5iZXN0U2NvcmUuc3RyaW5nID0gRGF0YUNvdW50ZXIuZ2V0QmVzdFNjb3JlKCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZSgpe1xyXG4gICAgICAgIERhdGFDb3VudGVyLnNldFNjb3JlKHRoaXMuY291bnQpO1xyXG5cclxuICAgICAgICBpZiAoRGF0YUNvdW50ZXIuZ2V0QmVzdFNjb3JlKCkgPCB0aGlzLmNvdW50KSB7XHJcbiAgICAgICAgICAgIERhdGFDb3VudGVyLnNldEJlc3RTY29yZSh0aGlzLmNvdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1cGVyLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0Q291bnRlcigpIHtcclxuICAgICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvdW50ZXJEaXNwbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRvdWJsZSgpIHtcclxuICAgICAgICB0aGlzLnBvaW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblBsYXllclJlYWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludCsrO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wb2ludCA+IDEpe1xyXG4gICAgICAgICAgICBEYXRhQ291bnRlci5zZXREb3VibGVDb3VudChEYXRhQ291bnRlci5nZXREb3VibGVDb3VudCgpICsgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvdW50ICs9IHRoaXMucG9pbnQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyRGlzcGxheSgpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZUNvdW50ZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb2ludCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVDb3VudGVyRGlzcGxheSgpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIuc3RyaW5nID0gdGhpcy5jb3VudC50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYW5pbWF0ZUNvdW50ZXIoKSB7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuY291bnRlci5ub2RlKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jb3VudGVyLm5vZGUpXHJcbiAgICAgICAgICAgIC50byh0aGlzLnNjYWxlRHVyYXRpb24sIHsgc2NhbGU6IHRoaXMub3JpZ2luYWxTY2FsZSAqIHRoaXMuaW5jcmVhc2UgfSlcclxuICAgICAgICAgICAgLnRvKHRoaXMuc2NhbGVEdXJhdGlvbiwgeyBzY2FsZTogdGhpcy5vcmlnaW5hbFNjYWxlIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==