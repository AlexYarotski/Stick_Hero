
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/StickManager .js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd33a7e6fpJCoY8QwJ2r8rLQ', 'StickManager ');
// Scripts/StickManager .ts

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
        _this.isGrowing = false;
        _this.isStickPlaced = false;
        _this.growSpeed = 100;
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
        this.node.height += this.growSpeed * 0.02;
    };
    StickManager.prototype.rotateStick = function () {
        cc.tween(this.node)
            .to(0.5, { angle: -90 }, { easing: 'cubicOut' })
            // .call(() => {
            //     this.isStickPlaced = false;
            // })
            .start();
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3RpY2tNYW5hZ2VyIC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXFEQztRQXBEb0IsbUJBQWEsR0FBVyxZQUFZLENBQUM7UUFDckMsaUJBQVcsR0FBVyxVQUFVLENBQUM7UUFFMUMsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixlQUFTLEdBQVcsR0FBRyxDQUFDOztJQStDcEMsQ0FBQztJQTdDYSwrQkFBUSxHQUFsQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRCxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVTLGdDQUFTLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU8sbUNBQVksR0FBcEI7UUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsT0FBTztRQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLGlDQUFVLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLE9BQU87UUFDL0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFUyxtQ0FBWSxHQUF0QjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRVMsa0NBQVcsR0FBckI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVPLGdDQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUM5QyxDQUFDO0lBRU8sa0NBQVcsR0FBbkI7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7WUFDaEQsZ0JBQWdCO1lBQ2hCLGtDQUFrQztZQUNsQyxLQUFLO2FBQ0osS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQXBEZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXFEaEM7SUFBRCxtQkFBQztDQXJERCxBQXFEQyxDQXJEeUMsRUFBRSxDQUFDLFNBQVMsR0FxRHJEO2tCQXJEb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGlja01hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgVE9VQ0hFRF9TVEFSVDogc3RyaW5nID0gJ3RvdWNoU3RhcnQnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgVE9VQ0hFRF9FTkQ6IHN0cmluZyA9ICd0b3VjaEVuZCc7XG5cbiAgICBwcml2YXRlIGlzR3Jvd2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNTdGlja1BsYWNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgZ3Jvd1NwZWVkOiBudW1iZXIgPSAxMDA7XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuVE9VQ0hFRF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0aGlzLlRPVUNIRURfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLlRPVUNIRURfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuVE9VQ0hFRF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RpY2tQbGFjZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGFydEdyb3dpbmcoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RpY2tQbGFjZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdG9wR3Jvd2luZygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdGFydEdyb3dpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNHcm93aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdyb3dTdGljaywgMC4wMik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0b3BHcm93aW5nKCkge1xuICAgICAgICB0aGlzLmlzR3Jvd2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5ncm93U3RpY2spO1xuICAgICAgICB0aGlzLnJvdGF0ZVN0aWNrKCk7XG4gICAgICAgIHRoaXMuaXNTdGlja1BsYWNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBncm93U3RpY2soKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0dyb3dpbmcpIHJldHVybjtcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCArPSB0aGlzLmdyb3dTcGVlZCAqIDAuMDI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb3RhdGVTdGljaygpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuNSwgeyBhbmdsZTogLTkwIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pXG4gICAgICAgICAgICAvLyAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5pc1N0aWNrUGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxufVxuIl19