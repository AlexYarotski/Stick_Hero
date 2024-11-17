
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
        property(cc.Float)
    ], GameWindow.prototype, "scaleDuration", void 0);
    __decorate([
        property(cc.Float)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEdhbWVXaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLElBQU8sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFDeEIsOENBQXlDO0FBRW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBMEZDO1FBekZvQixZQUFNLEdBQVcsUUFBUSxDQUFDO1FBQzFCLG9CQUFjLEdBQVcsZUFBZSxDQUFDO1FBR2xELGFBQU8sR0FBVSxJQUFJLENBQUM7UUFHdEIsZUFBUyxHQUFVLElBQUksQ0FBQztRQUd4QixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUc1QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBRXZCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUF3RTlCLENBQUM7SUF0RUcsc0JBQUksK0JBQU87YUFBWDtZQUNJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBRVMsNkJBQVEsR0FBbEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFUyw4QkFBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGVBQWUs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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXaW5kb3cgZnJvbSBcIi4vV2luZG93XCI7XHJcbmltcG9ydCBMYWJlbCA9IGNjLkxhYmVsO1xyXG5pbXBvcnQgRGF0YUNvdW50ZXIgZnJvbSBcIi4uL0RhdGFDb3VudGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IERPVUJMRTogc3RyaW5nID0gJ2RvdWJsZSc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IFBMQVlFUl9SRUFDSEVEOiBzdHJpbmcgPSAncGxheWVyUmVhY2hlZCc7XHJcblxyXG4gICAgQHByb3BlcnR5KExhYmVsKVxyXG4gICAgcHJpdmF0ZSBjb3VudGVyOiBMYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KExhYmVsKVxyXG4gICAgcHJpdmF0ZSBiZXN0U2NvcmU6IExhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwcml2YXRlIHNjYWxlRHVyYXRpb246IG51bWJlciA9IDAuNTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwcml2YXRlIGluY3JlYXNlOiBudW1iZXIgPSAxLjU7XHJcblxyXG4gICAgcHJpdmF0ZSBvcmlnaW5hbFNjYWxlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjb3VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcG9pbnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZ2V0IGlzUG9wVXAoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlBMQVlFUl9SRUFDSEVELCB0aGlzLm9uUGxheWVyUmVhY2hlZCwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5ET1VCTEUsIHRoaXMub25Eb3VibGUsIHRoaXMpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLlBMQVlFUl9SRUFDSEVELCB0aGlzLm9uUGxheWVyUmVhY2hlZCwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuRE9VQkxFLCB0aGlzLm9uRG91YmxlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbFNjYWxlID0gdGhpcy5jb3VudGVyLm5vZGUuc2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3coKSB7XHJcbiAgICAgICAgc3VwZXIuc2hvdygpO1xyXG4gICAgICAgIHRoaXMucmVzZXRDb3VudGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmVzdFNjb3JlLnN0cmluZyA9IERhdGFDb3VudGVyLmdldEJlc3RTY29yZSgpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGUoKXtcclxuICAgICAgICBEYXRhQ291bnRlci5zZXRTY29yZSh0aGlzLmNvdW50KTtcclxuXHJcbiAgICAgICAgaWYgKERhdGFDb3VudGVyLmdldEJlc3RTY29yZSgpIDwgdGhpcy5jb3VudCkge1xyXG4gICAgICAgICAgICBEYXRhQ291bnRlci5zZXRCZXN0U2NvcmUodGhpcy5jb3VudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdXBlci5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldENvdW50ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyRGlzcGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Eb3VibGUoKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25QbGF5ZXJSZWFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMucG9pbnQrKztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucG9pbnQgPiAxKXtcclxuICAgICAgICAgICAgRGF0YUNvdW50ZXIuc2V0RG91YmxlQ291bnQoRGF0YUNvdW50ZXIuZ2V0RG91YmxlQ291bnQoKSArIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb3VudCArPSB0aGlzLnBvaW50O1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ291bnRlckRpc3BsYXkoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGVDb3VudGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9pbnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlQ291bnRlckRpc3BsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyLnN0cmluZyA9IHRoaXMuY291bnQudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFuaW1hdGVDb3VudGVyKCkge1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmNvdW50ZXIubm9kZSk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY291bnRlci5ub2RlKVxyXG4gICAgICAgICAgICAudG8odGhpcy5zY2FsZUR1cmF0aW9uLCB7IHNjYWxlOiB0aGlzLm9yaWdpbmFsU2NhbGUgKiB0aGlzLmluY3JlYXNlIH0pXHJcbiAgICAgICAgICAgIC50byh0aGlzLnNjYWxlRHVyYXRpb24sIHsgc2NhbGU6IHRoaXMub3JpZ2luYWxTY2FsZSB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=