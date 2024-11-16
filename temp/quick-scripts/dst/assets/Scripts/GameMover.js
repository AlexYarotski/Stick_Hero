
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
        this.startMoving(this.startDistance);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZU1vdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBc0NDO1FBckNvQixvQkFBYyxHQUFXLGVBQWUsQ0FBQztRQUN6Qyx1QkFBaUIsR0FBVyxrQkFBa0IsQ0FBQztRQUMvQyxnQkFBVSxHQUFXLFdBQVcsQ0FBQztRQUVqQyxtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUc3QyxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUVqQixjQUFRLEdBQVksS0FBSyxDQUFDOztJQTRCdEMsQ0FBQztJQTFCYSwwQkFBTSxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRCxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVTLDZCQUFTLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU8sK0JBQVcsR0FBbkIsVUFBb0IsUUFBZ0I7UUFBcEMsaUJBV0M7UUFWRyxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDakYsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLCtCQUFXLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQTdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNNO0lBUlIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXNDN0I7SUFBRCxnQkFBQztDQXRDRCxBQXNDQyxDQXRDc0MsRUFBRSxDQUFDLFNBQVMsR0FzQ2xEO2tCQXRDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTW92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgUExBWUVSX1JFQUNIRUQ6IHN0cmluZyA9ICdwbGF5ZXJSZWFjaGVkJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IE1PVkVNRU5UX0NPTVBMRVRFOiBzdHJpbmcgPSAnbW92ZW1lbnRDb21wbGV0ZSc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBTVEFSVF9HQU1FOiBzdHJpbmcgPSAnc3RhcnRHYW1lJztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RhcnREaXN0YW5jZTogbnVtYmVyID0gNDYwO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIG1vdmVEdXJhdGlvbjogbnVtYmVyID0gMTtcblxuICAgIHByaXZhdGUgaXNNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuUExBWUVSX1JFQUNIRUQsIHRoaXMuc3RhcnRNb3ZpbmcsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlNUQVJUX0dBTUUsIHRoaXMub25TdGFydEdhbWUsIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLlBMQVlFUl9SRUFDSEVELCB0aGlzLnN0YXJ0TW92aW5nLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuU1RBUlRfR0FNRSwgdGhpcy5vblN0YXJ0R2FtZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydE1vdmluZyhkaXN0YW5jZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC5ieSh0aGlzLm1vdmVEdXJhdGlvbiwgeyBwb3NpdGlvbjogY2MudjMoLWRpc3RhbmNlLCAwKSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdCh0aGlzLk1PVkVNRU5UX0NPTVBMRVRFKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU3RhcnRHYW1lKCl7XG4gICAgICAgIHRoaXMuc3RhcnRNb3ZpbmcodGhpcy5zdGFydERpc3RhbmNlKTtcbiAgICB9XG59XG4iXX0=