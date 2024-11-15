
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
        _this.PLAYER_REACHED_EVENT = 'playerReached';
        _this.MOVEMENT_COMPLETE_EVENT = 'movementComplete';
        _this.moveDuration = 1;
        _this.isMoving = false;
        return _this;
    }
    GameMover.prototype.onLoad = function () {
        cc.systemEvent.on(this.PLAYER_REACHED_EVENT, this.startMoving, this);
    };
    GameMover.prototype.onDestroy = function () {
        cc.systemEvent.off(this.PLAYER_REACHED_EVENT, this.startMoving, this);
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
            cc.systemEvent.emit(_this.MOVEMENT_COMPLETE_EVENT);
        })
            .start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZU1vdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBNkJDO1FBNUJvQiwwQkFBb0IsR0FBVyxlQUFlLENBQUM7UUFDL0MsNkJBQXVCLEdBQVcsa0JBQWtCLENBQUM7UUFHdEUsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFakIsY0FBUSxHQUFZLEtBQUssQ0FBQzs7SUFzQnRDLENBQUM7SUFwQmEsMEJBQU0sR0FBaEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRVMsNkJBQVMsR0FBbkI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU8sK0JBQVcsR0FBbkIsVUFBb0IsUUFBZ0I7UUFBcEMsaUJBV0M7UUFWRyxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDakYsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQXZCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNNO0lBTFIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTZCN0I7SUFBRCxnQkFBQztDQTdCRCxBQTZCQyxDQTdCc0MsRUFBRSxDQUFDLFNBQVMsR0E2QmxEO2tCQTdCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTW92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgUExBWUVSX1JFQUNIRURfRVZFTlQ6IHN0cmluZyA9ICdwbGF5ZXJSZWFjaGVkJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IE1PVkVNRU5UX0NPTVBMRVRFX0VWRU5UOiBzdHJpbmcgPSAnbW92ZW1lbnRDb21wbGV0ZSc7XG5cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgbW92ZUR1cmF0aW9uOiBudW1iZXIgPSAxO1xuXG4gICAgcHJpdmF0ZSBpc01vdmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5QTEFZRVJfUkVBQ0hFRF9FVkVOVCwgdGhpcy5zdGFydE1vdmluZywgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuUExBWUVSX1JFQUNIRURfRVZFTlQsIHRoaXMuc3RhcnRNb3ZpbmcsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRNb3ZpbmcoZGlzdGFuY2U6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5pc01vdmluZykgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAuYnkodGhpcy5tb3ZlRHVyYXRpb24sIHsgcG9zaXRpb246IGNjLnYzKC1kaXN0YW5jZSwgMCkgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQodGhpcy5NT1ZFTUVOVF9DT01QTEVURV9FVkVOVCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxufVxuIl19