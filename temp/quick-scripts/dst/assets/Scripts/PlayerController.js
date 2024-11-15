
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e355XdrLVNvZtw0ohF1eL6', 'PlayerController');
// Scripts/PlayerController.ts

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
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.offsetPlatformX = -40;
        _this.offsetEndPlatformX = 12;
        _this.offsetStick = cc.v2(90, 10);
        _this.stickPrefab = null;
        _this.moveDuration = 1;
        _this.fallDuration = 0.2;
        _this.stick = null;
        return _this;
    }
    PlayerController_1 = PlayerController;
    PlayerController.prototype.reset = function () {
        this.startCreatingStick();
    };
    PlayerController.prototype.startCreatingStick = function () {
        var position = cc.v2(this.node.position.x + this.offsetStick.x, this.node.position.y
            + this.offsetStick.y);
        this.stick = cc.instantiate(this.stickPrefab);
        this.stick.parent = this.node.parent;
        this.stick.setPosition(position);
    };
    PlayerController.prototype.moveToEndOfStick = function (xPos) {
        var _this = this;
        var targetPosition = cc.v3(xPos, this.node.position.y);
        this.moveTowards(targetPosition, function () {
            _this.initiateFall();
        });
    };
    PlayerController.prototype.moveToEndOfPlatform = function (xPos) {
        var worldTargetPosition = cc.v3(xPos + this.offsetPlatformX, this.node.position.y);
        var localTargetPosition = this.node.parent.convertToNodeSpaceAR(worldTargetPosition);
        var endPlatformPos = cc.v3(localTargetPosition.x + this.offsetPlatformX, this.node.position.y);
        var distanceTravelled = Math.abs(this.node.position.x - endPlatformPos.x); // Расчет пройденного расстояния
        this.moveTowards(endPlatformPos, function () {
            cc.systemEvent.emit(PlayerController_1.PLAYER_REACHED_EVENT, distanceTravelled); // Передаем расстояние как параметр
        });
    };
    PlayerController.prototype.moveTowards = function (targetPosition, onComplete) {
        cc.tween(this.node)
            .to(this.moveDuration, { position: targetPosition }, { easing: 'sineInOut' })
            .call(function () {
            if (onComplete)
                onComplete();
        })
            .start();
    };
    PlayerController.prototype.initiateFall = function () {
        cc.tween(this.node)
            .to(this.fallDuration, { position: cc.v3(this.node.x, -1080) })
            .start();
    };
    var PlayerController_1;
    PlayerController.PLAYER_REACHED_EVENT = 'playerReached';
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "stickPrefab", void 0);
    __decorate([
        property(cc.Float)
    ], PlayerController.prototype, "moveDuration", void 0);
    __decorate([
        property(cc.Float)
    ], PlayerController.prototype, "fallDuration", void 0);
    PlayerController = PlayerController_1 = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQWtFQztRQS9Eb0IscUJBQWUsR0FBVyxDQUFDLEVBQUUsQ0FBQztRQUM5Qix3QkFBa0IsR0FBVyxFQUFFLENBQUM7UUFFaEMsaUJBQVcsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUd0RCxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUd6QixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUVuQixXQUFLLEdBQVksSUFBSSxDQUFDOztJQWlEbEMsQ0FBQzt5QkFsRW9CLGdCQUFnQjtJQW1CMUIsZ0NBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyw2Q0FBa0IsR0FBMUI7UUFDSSxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2NBQ2hGLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sMkNBQWdCLEdBQXZCLFVBQXdCLElBQVk7UUFBcEMsaUJBS0M7UUFKRyxJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTtZQUM3QixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sOENBQW1CLEdBQTFCLFVBQTJCLElBQVk7UUFDbkMsSUFBTSxtQkFBbUIsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN2RixJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpHLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0NBQWdDO1FBRTdHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO1lBQzdCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFnQixDQUFDLG9CQUFvQixFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxtQ0FBbUM7UUFDdEgsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR08sc0NBQVcsR0FBbkIsVUFBb0IsY0FBdUIsRUFBRSxVQUFvQjtRQUM3RCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUM1RSxJQUFJLENBQUM7WUFDRixJQUFJLFVBQVU7Z0JBQUUsVUFBVSxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLHVDQUFZLEdBQXBCO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDOUQsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7SUFoRXVCLHFDQUFvQixHQUFHLGVBQWUsQ0FBQztJQVEvRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNVO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDUTtJQWZWLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBa0VwQztJQUFELHVCQUFDO0NBbEVELEFBa0VDLENBbEU2QyxFQUFFLENBQUMsU0FBUyxHQWtFekQ7a0JBbEVvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBQTEFZRVJfUkVBQ0hFRF9FVkVOVCA9ICdwbGF5ZXJSZWFjaGVkJztcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9mZnNldFBsYXRmb3JtWDogbnVtYmVyID0gLTQwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvZmZzZXRFbmRQbGF0Zm9ybVg6IG51bWJlciA9IDEyO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgb2Zmc2V0U3RpY2s6IGNjLlZlYzIgPSBjYy52Mig5MCwgMTApO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzdGlja1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBtb3ZlRHVyYXRpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgZmFsbER1cmF0aW9uOiBudW1iZXIgPSAwLjI7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGljazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRDcmVhdGluZ1N0aWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydENyZWF0aW5nU3RpY2soKSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjYy52Mih0aGlzLm5vZGUucG9zaXRpb24ueCArIHRoaXMub2Zmc2V0U3RpY2sueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnlcclxuICAgICAgICAgICAgKyB0aGlzLm9mZnNldFN0aWNrLnkpO1xyXG5cclxuICAgICAgICB0aGlzLnN0aWNrID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGlja1ByZWZhYik7XHJcbiAgICAgICAgdGhpcy5zdGljay5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIHRoaXMuc3RpY2suc2V0UG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlVG9FbmRPZlN0aWNrKHhQb3M6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gY2MudjMoeFBvcywgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMubW92ZVRvd2FyZHModGFyZ2V0UG9zaXRpb24sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZUZhbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZVRvRW5kT2ZQbGF0Zm9ybSh4UG9zOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCB3b3JsZFRhcmdldFBvc2l0aW9uID0gY2MudjMoeFBvcyArIHRoaXMub2Zmc2V0UGxhdGZvcm1YLCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgY29uc3QgbG9jYWxUYXJnZXRQb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRUYXJnZXRQb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgZW5kUGxhdGZvcm1Qb3MgPSBjYy52Myhsb2NhbFRhcmdldFBvc2l0aW9uLnggKyB0aGlzLm9mZnNldFBsYXRmb3JtWCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0YW5jZVRyYXZlbGxlZCA9IE1hdGguYWJzKHRoaXMubm9kZS5wb3NpdGlvbi54IC0gZW5kUGxhdGZvcm1Qb3MueCk7IC8vINCg0LDRgdGH0LXRgiDQv9GA0L7QudC00LXQvdC90L7Qs9C+INGA0LDRgdGB0YLQvtGP0L3QuNGPXHJcblxyXG4gICAgICAgIHRoaXMubW92ZVRvd2FyZHMoZW5kUGxhdGZvcm1Qb3MsICgpID0+IHtcclxuICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChQbGF5ZXJDb250cm9sbGVyLlBMQVlFUl9SRUFDSEVEX0VWRU5ULCBkaXN0YW5jZVRyYXZlbGxlZCk7IC8vINCf0LXRgNC10LTQsNC10Lwg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0LrQsNC6INC/0LDRgNCw0LzQtdGC0YBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlVG93YXJkcyh0YXJnZXRQb3NpdGlvbjogY2MuVmVjMywgb25Db21wbGV0ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50byh0aGlzLm1vdmVEdXJhdGlvbiwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zaXRpb24gfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhdGVGYWxsKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKHRoaXMuZmFsbER1cmF0aW9uLCB7IHBvc2l0aW9uOiBjYy52Myh0aGlzLm5vZGUueCwgLTEwODApIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==