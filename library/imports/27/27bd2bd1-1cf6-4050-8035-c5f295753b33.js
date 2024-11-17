"use strict";
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