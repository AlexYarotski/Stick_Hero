
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameMover.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91713lXbTdHAY3QVX6jcp+b', 'GameMover');
// Scripts/GameMover.ts

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
var GameMover = /** @class */ (function (_super) {
    __extends(GameMover, _super);
    function GameMover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PLAYER_REACHED = 'playerReached';
        _this.MOVEMENT_COMPLETE = 'movementComplete';
        _this.START_GAME = 'startGame';
        _this.startDistance = 460;
        _this.moveDuration = 1;
        _this.isMoving = false;
        _this.isStart = false;
        return _this;
    }
    GameMover.prototype.onLoad = function () {
        cc.systemEvent.on(this.PLAYER_REACHED, this.startMoving, this);
        cc.systemEvent.on(this.START_GAME, this.onStartGame, this);
    };
    GameMover.prototype.onDestroy = function () {
        cc.systemEvent.off(this.PLAYER_REACHED, this.startMoving, this);
        cc.systemEvent.off(this.START_GAME, this.onStartGame, this);
    };
    GameMover.prototype.startMoving = function (distance) {
        var _this = this;
        if (this.isMoving)
            return;
        this.isMoving = true;
        cc.tween(this.node)
            .by(this.moveDuration, { position: cc.v3(-distance, 0) }, { easing: 'sineInOut' })
            .call(function () {
            _this.isMoving = false;
            cc.systemEvent.emit(_this.MOVEMENT_COMPLETE);
        })
            .start();
    };
    GameMover.prototype.onStartGame = function () {
        if (!this.isStart) {
            this.startMoving(this.startDistance);
            this.isStart = true;
        }
    };
    __decorate([
        property(cc.Float)
    ], GameMover.prototype, "moveDuration", void 0);
    GameMover = __decorate([
        ccclass
    ], GameMover);
    return GameMover;
}(cc.Component));
exports.default = GameMover;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZU1vdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBMENDO1FBekNvQixvQkFBYyxHQUFXLGVBQWUsQ0FBQztRQUN6Qyx1QkFBaUIsR0FBVyxrQkFBa0IsQ0FBQztRQUMvQyxnQkFBVSxHQUFXLFdBQVcsQ0FBQztRQUVqQyxtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUc3QyxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUVqQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBK0JyQyxDQUFDO0lBN0JhLDBCQUFNLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRVMsNkJBQVMsR0FBbkI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTywrQkFBVyxHQUFuQixVQUFvQixRQUFnQjtRQUFwQyxpQkFXQztRQVZHLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUNqRixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU8sK0JBQVcsR0FBbkI7UUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQWpDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNNO0lBUlIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBDN0I7SUFBRCxnQkFBQztDQTFDRCxBQTBDQyxDQTFDc0MsRUFBRSxDQUFDLFNBQVMsR0EwQ2xEO2tCQTFDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTW92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBQTEFZRVJfUkVBQ0hFRDogc3RyaW5nID0gJ3BsYXllclJlYWNoZWQnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBNT1ZFTUVOVF9DT01QTEVURTogc3RyaW5nID0gJ21vdmVtZW50Q29tcGxldGUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBTVEFSVF9HQU1FOiBzdHJpbmcgPSAnc3RhcnRHYW1lJztcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0YXJ0RGlzdGFuY2U6IG51bWJlciA9IDQ2MDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBtb3ZlRHVyYXRpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSBpc01vdmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1N0YXJ0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlBMQVlFUl9SRUFDSEVELCB0aGlzLnN0YXJ0TW92aW5nLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlNUQVJUX0dBTUUsIHRoaXMub25TdGFydEdhbWUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuUExBWUVSX1JFQUNIRUQsIHRoaXMuc3RhcnRNb3ZpbmcsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLlNUQVJUX0dBTUUsIHRoaXMub25TdGFydEdhbWUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRNb3ZpbmcoZGlzdGFuY2U6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLmJ5KHRoaXMubW92ZUR1cmF0aW9uLCB7IHBvc2l0aW9uOiBjYy52MygtZGlzdGFuY2UsIDApIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KHRoaXMuTU9WRU1FTlRfQ09NUExFVEUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU3RhcnRHYW1lKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNTdGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TW92aW5nKHRoaXMuc3RhcnREaXN0YW5jZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==