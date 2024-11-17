
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BackgroundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27bd2vRHPZAUIA1xfKVdTsz', 'BackgroundManager');
// Scripts/BackgroundManager.ts

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
var BackgroundManager = /** @class */ (function (_super) {
    __extends(BackgroundManager, _super);
    function BackgroundManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PLAYER_REACHED = 'playerReached';
        _this.firstBack = null;
        _this.endBack = null;
        _this.moveDuration = 1;
        _this.parallaxFactor = 0.5;
        return _this;
    }
    BackgroundManager.prototype.onLoad = function () {
        cc.systemEvent.on(this.PLAYER_REACHED, this.onPlayerReached, this);
    };
    BackgroundManager.prototype.onDestroy = function () {
        cc.systemEvent.off(this.PLAYER_REACHED, this.onPlayerReached, this);
    };
    BackgroundManager.prototype.onPlayerReached = function (distance) {
        var moveDistance = -distance * this.parallaxFactor;
        cc.tween(this.firstBack)
            .by(this.moveDuration, { position: cc.v3(moveDistance, 0) }, { easing: 'sineInOut' })
            .start();
        cc.tween(this.endBack)
            .by(this.moveDuration, { position: cc.v3(moveDistance, 0) }, { easing: 'sineInOut' })
            .start();
        // this.scheduleOnce(() => {
        //     this.checkAndResetPosition(this.firstBack, this.endBack);
        // }, this.moveDuration);
        this.checkAndResetPosition(this.firstBack, this.endBack);
    };
    BackgroundManager.prototype.checkAndResetPosition = function (first, end) {
        if (first.x <= -first.width) {
            first.x = end.x + end.width;
        }
        if (end.x <= -end.width) {
            end.x = first.x + first.width;
        }
    };
    __decorate([
        property(cc.Node)
    ], BackgroundManager.prototype, "firstBack", void 0);
    __decorate([
        property(cc.Node)
    ], BackgroundManager.prototype, "endBack", void 0);
    __decorate([
        property(cc.Float)
    ], BackgroundManager.prototype, "moveDuration", void 0);
    __decorate([
        property(cc.Float)
    ], BackgroundManager.prototype, "parallaxFactor", void 0);
    BackgroundManager = __decorate([
        ccclass
    ], BackgroundManager);
    return BackgroundManager;
}(cc.Component));
exports.default = BackgroundManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQmFja2dyb3VuZE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFrREM7UUFqRG9CLG9CQUFjLEdBQVcsZUFBZSxDQUFDO1FBR2xELGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUd6QixvQkFBYyxHQUFXLEdBQUcsQ0FBQzs7SUFxQ3pDLENBQUM7SUFuQ2Esa0NBQU0sR0FBaEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVTLHFDQUFTLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSwyQ0FBZSxHQUF0QixVQUF1QixRQUFnQjtRQUNuQyxJQUFNLFlBQVksR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRXJELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNuQixFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ3BGLEtBQUssRUFBRSxDQUFDO1FBRWIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ2pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDcEYsS0FBSyxFQUFFLENBQUM7UUFFYiw0QkFBNEI7UUFDNUIsZ0VBQWdFO1FBQ2hFLHlCQUF5QjtRQUV6QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVPLGlEQUFxQixHQUE3QixVQUE4QixLQUFjLEVBQUUsR0FBWTtRQUN0RCxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ3pCLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtZQUNyQixHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUNqQztJQUNMLENBQUM7SUE3Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDZ0I7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDYztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJEQUNjO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkRBQ2tCO0lBYnBCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBa0RyQztJQUFELHdCQUFDO0NBbERELEFBa0RDLENBbEQ4QyxFQUFFLENBQUMsU0FBUyxHQWtEMUQ7a0JBbERvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmRNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IFBMQVlFUl9SRUFDSEVEOiBzdHJpbmcgPSAncGxheWVyUmVhY2hlZCc7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGZpcnN0QmFjazogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGVuZEJhY2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHByaXZhdGUgbW92ZUR1cmF0aW9uOiBudW1iZXIgPSAxO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHByaXZhdGUgcGFyYWxsYXhGYWN0b3I6IG51bWJlciA9IDAuNTtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuUExBWUVSX1JFQUNIRUQsIHRoaXMub25QbGF5ZXJSZWFjaGVkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5QTEFZRVJfUkVBQ0hFRCwgdGhpcy5vblBsYXllclJlYWNoZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblBsYXllclJlYWNoZWQoZGlzdGFuY2U6IG51bWJlcikge1xuICAgICAgICBjb25zdCBtb3ZlRGlzdGFuY2UgPSAtZGlzdGFuY2UgKiB0aGlzLnBhcmFsbGF4RmFjdG9yO1xuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlyc3RCYWNrKVxuICAgICAgICAgICAgLmJ5KHRoaXMubW92ZUR1cmF0aW9uLCB7IHBvc2l0aW9uOiBjYy52Myhtb3ZlRGlzdGFuY2UsIDApIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5lbmRCYWNrKVxuICAgICAgICAgICAgLmJ5KHRoaXMubW92ZUR1cmF0aW9uLCB7IHBvc2l0aW9uOiBjYy52Myhtb3ZlRGlzdGFuY2UsIDApIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5jaGVja0FuZFJlc2V0UG9zaXRpb24odGhpcy5maXJzdEJhY2ssIHRoaXMuZW5kQmFjayk7XG4gICAgICAgIC8vIH0sIHRoaXMubW92ZUR1cmF0aW9uKTtcblxuICAgICAgICB0aGlzLmNoZWNrQW5kUmVzZXRQb3NpdGlvbih0aGlzLmZpcnN0QmFjaywgdGhpcy5lbmRCYWNrKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrQW5kUmVzZXRQb3NpdGlvbihmaXJzdDogY2MuTm9kZSwgZW5kOiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmIChmaXJzdC54IDw9IC1maXJzdC53aWR0aCkge1xuICAgICAgICAgICAgZmlyc3QueCA9IGVuZC54ICsgZW5kLndpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZC54IDw9IC1lbmQud2lkdGgpIHtcbiAgICAgICAgICAgIGVuZC54ID0gZmlyc3QueCArIGZpcnN0LndpZHRoO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19