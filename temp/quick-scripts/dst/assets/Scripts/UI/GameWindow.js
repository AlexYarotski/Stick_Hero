
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
        DataCounter_1.default.setDoubleCount(DataCounter_1.default.getDoubleCount() + 1);
    };
    GameWindow.prototype.onPlayerReached = function () {
        this.point++;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEdhbWVXaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLElBQU8sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFDeEIsOENBQXlDO0FBRW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBd0ZDO1FBdkZvQixZQUFNLEdBQVcsUUFBUSxDQUFDO1FBQzFCLG9CQUFjLEdBQVcsZUFBZSxDQUFDO1FBR2xELGFBQU8sR0FBVSxJQUFJLENBQUM7UUFHdEIsZUFBUyxHQUFVLElBQUksQ0FBQztRQUd4QixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUc1QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBRXZCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUFzRTlCLENBQUM7SUFwRUcsc0JBQUksK0JBQU87YUFBWDtZQUNJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBRVMsNkJBQVEsR0FBbEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFUyw4QkFBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVTLDBCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNqRCxDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLHFCQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEUsQ0FBQztJQUVNLHlCQUFJLEdBQVg7UUFDSSxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakMsSUFBSSxxQkFBVyxDQUFDLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDekMscUJBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLGlDQUFZLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU8sNkJBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFYixxQkFBVyxDQUFDLGNBQWMsQ0FBQyxxQkFBVyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTyxvQ0FBZSxHQUF2QjtRQUNJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVPLHlDQUFvQixHQUE1QjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVPLG1DQUFjLEdBQXRCO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ3RCLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNyRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBbEZEO1FBREMsUUFBUSxDQUFDLEtBQUssQ0FBQzsrQ0FDYztJQUc5QjtRQURDLFFBQVEsQ0FBQyxLQUFLLENBQUM7aURBQ2dCO0lBR2hDO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQztxREFDbUI7SUFHcEM7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dEQUNjO0lBZGQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXdGOUI7SUFBRCxpQkFBQztDQXhGRCxBQXdGQyxDQXhGdUMsZ0JBQU0sR0F3RjdDO2tCQXhGb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXaW5kb3cgZnJvbSBcIi4vV2luZG93XCI7XHJcbmltcG9ydCBMYWJlbCA9IGNjLkxhYmVsO1xyXG5pbXBvcnQgRGF0YUNvdW50ZXIgZnJvbSBcIi4uL0RhdGFDb3VudGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IERPVUJMRTogc3RyaW5nID0gJ2RvdWJsZSc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IFBMQVlFUl9SRUFDSEVEOiBzdHJpbmcgPSAncGxheWVyUmVhY2hlZCc7XHJcblxyXG4gICAgQHByb3BlcnR5KExhYmVsKVxyXG4gICAgcHJpdmF0ZSBjb3VudGVyOiBMYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KExhYmVsKVxyXG4gICAgcHJpdmF0ZSBiZXN0U2NvcmU6IExhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gICAgcHJpdmF0ZSBzY2FsZUR1cmF0aW9uOiBudW1iZXIgPSAwLjU7XHJcblxyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIHByaXZhdGUgaW5jcmVhc2U6IG51bWJlciA9IDEuNTtcclxuXHJcbiAgICBwcml2YXRlIG9yaWdpbmFsU2NhbGU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBwb2ludDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBnZXQgaXNQb3BVcCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuUExBWUVSX1JFQUNIRUQsIHRoaXMub25QbGF5ZXJSZWFjaGVkLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLkRPVUJMRSwgdGhpcy5vbkRvdWJsZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5QTEFZRVJfUkVBQ0hFRCwgdGhpcy5vblBsYXllclJlYWNoZWQsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLkRPVUJMRSwgdGhpcy5vbkRvdWJsZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxTY2FsZSA9IHRoaXMuY291bnRlci5ub2RlLnNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KCkge1xyXG4gICAgICAgIHN1cGVyLnNob3coKTtcclxuICAgICAgICB0aGlzLnJlc2V0Q291bnRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmJlc3RTY29yZS5zdHJpbmcgPSBEYXRhQ291bnRlci5nZXRCZXN0U2NvcmUoKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlKCl7XHJcbiAgICAgICAgRGF0YUNvdW50ZXIuc2V0U2NvcmUodGhpcy5jb3VudCk7XHJcblxyXG4gICAgICAgIGlmIChEYXRhQ291bnRlci5nZXRCZXN0U2NvcmUoKSA8IHRoaXMuY291bnQpIHtcclxuICAgICAgICAgICAgRGF0YUNvdW50ZXIuc2V0QmVzdFNjb3JlKHRoaXMuY291bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VwZXIuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRDb3VudGVyKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ291bnRlckRpc3BsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRG91YmxlKCkge1xyXG4gICAgICAgIHRoaXMucG9pbnQrKztcclxuXHJcbiAgICAgICAgRGF0YUNvdW50ZXIuc2V0RG91YmxlQ291bnQoRGF0YUNvdW50ZXIuZ2V0RG91YmxlQ291bnQoKSArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25QbGF5ZXJSZWFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMucG9pbnQrKztcclxuXHJcbiAgICAgICAgdGhpcy5jb3VudCArPSB0aGlzLnBvaW50O1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ291bnRlckRpc3BsYXkoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGVDb3VudGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9pbnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlQ291bnRlckRpc3BsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyLnN0cmluZyA9IHRoaXMuY291bnQudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFuaW1hdGVDb3VudGVyKCkge1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmNvdW50ZXIubm9kZSk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY291bnRlci5ub2RlKVxyXG4gICAgICAgICAgICAudG8odGhpcy5zY2FsZUR1cmF0aW9uLCB7IHNjYWxlOiB0aGlzLm9yaWdpbmFsU2NhbGUgKiB0aGlzLmluY3JlYXNlIH0pXHJcbiAgICAgICAgICAgIC50byh0aGlzLnNjYWxlRHVyYXRpb24sIHsgc2NhbGU6IHRoaXMub3JpZ2luYWxTY2FsZSB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=