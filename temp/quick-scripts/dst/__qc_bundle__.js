
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/GameController');
require('./assets/Scripts/GameMover');
require('./assets/Scripts/Platform');
require('./assets/Scripts/PlatformSpawner');
require('./assets/Scripts/PlayerController');
require('./assets/Scripts/StickManager');
require('./assets/Scripts/TouchController');
require('./assets/Scripts/UIManager');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb1e9KvBYVDdrI1UYxfxL5w', 'GameController');
// Scripts/GameController.ts

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
var PlayerController_1 = require("./PlayerController");
var PlatformSpawner_1 = require("./PlatformSpawner");
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Stick_Fallen = 'stickFallen';
        _this.startPlayerPos = new cc.Vec2(-510, -310);
        _this.startPlatformPos = new cc.Vec2(-553, -1100);
        _this.player = null;
        _this.platformSpawner = null;
        _this.currentStick = null;
        _this.platforms = [];
        return _this;
    }
    GameController.prototype.start = function () {
        this.initGame();
        cc.systemEvent.on(this.Stick_Fallen, this.onStickFallen, this);
    };
    GameController.prototype.initGame = function () {
        this.resetGame();
    };
    GameController.prototype.resetGame = function () {
        this.player.node.setPosition(this.startPlayerPos);
        this.player.reset();
        this.clearPlatforms();
        var initialPlatform = this.platformSpawner.spawnPlatform(cc.v2(this.startPlatformPos));
        this.platforms.push(initialPlatform);
        var nextPlatform = this.platformSpawner.spawnPlatform();
        this.platforms.push(nextPlatform);
    };
    GameController.prototype.clearPlatforms = function () {
        this.platforms.forEach(function (platform) { return platform.destroy(); });
        this.platforms = [];
    };
    GameController.prototype.onStickFallen = function (stick) {
        this.currentStick = stick;
        var stickEndPosX = this.currentStick.x + this.currentStick.height - this.player.node.width / 2;
        var stickWorldEndPos = this.currentStick.parent.convertToWorldSpaceAR(cc.v2(this.currentStick.x + this.currentStick.height, this.currentStick.y));
        var targetPlatform = this.getTargetPlatform(cc.v2(this.player.node.x, this.player.node.y));
        var platformWorldPos = targetPlatform.parent.convertToWorldSpaceAR(targetPlatform.getPosition());
        var platformStartX = platformWorldPos.x;
        var platformEndX = platformWorldPos.x + targetPlatform.width;
        if (stickWorldEndPos.x >= platformStartX && stickWorldEndPos.x <= platformEndX) {
            this.player.moveToEndOfPlatform(platformEndX);
        }
        else {
            this.player.moveToEndOfStick(stickEndPosX);
        }
    };
    GameController.prototype.getTargetPlatform = function (playerPosition) {
        for (var _i = 0, _a = this.platforms; _i < _a.length; _i++) {
            var platform = _a[_i];
            if (platform.x > playerPosition.x) {
                return platform;
            }
        }
        return null;
    };
    GameController.prototype.spawnPlatforms = function () {
        var previousPlatform = this.platforms[this.platforms.length - 1];
        var newPlatform = this.platformSpawner.spawnPlatform(previousPlatform.getPosition());
        this.platforms.push(newPlatform);
    };
    GameController.prototype.endGame = function () {
        cc.log('Game Over');
    };
    __decorate([
        property(PlayerController_1.default)
    ], GameController.prototype, "player", void 0);
    __decorate([
        property(PlatformSpawner_1.default)
    ], GameController.prototype, "platformSpawner", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.default = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsdURBQWtEO0FBQ2xELHFEQUFnRDtBQUdoRDtJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW9GQztRQW5Gb0Isa0JBQVksR0FBVyxhQUFhLENBQUM7UUFFckMsb0JBQWMsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxzQkFBZ0IsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUd0RSxZQUFNLEdBQXFCLElBQUksQ0FBQztRQUdoQyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFaEMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsZUFBUyxHQUFjLEVBQUUsQ0FBQzs7SUF1RXRDLENBQUM7SUFyRWEsOEJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVPLGlDQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxrQ0FBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXJDLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVPLHVDQUFjLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sc0NBQWEsR0FBckIsVUFBc0IsS0FBYztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUUxQixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRWpHLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQ25FLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FDN0UsQ0FBQztRQUVGLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdGLElBQU0sZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUVuRyxJQUFNLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBTSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFFL0QsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksY0FBYyxJQUFJLGdCQUFnQixDQUFDLENBQUMsSUFBSSxZQUFZLEVBQUU7WUFDNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFHTywwQ0FBaUIsR0FBekIsVUFBMEIsY0FBdUI7UUFDN0MsS0FBdUIsVUFBYyxFQUFkLEtBQUEsSUFBSSxDQUFDLFNBQVMsRUFBZCxjQUFjLEVBQWQsSUFBYyxFQUFFO1lBQWxDLElBQU0sUUFBUSxTQUFBO1lBQ2YsSUFBSSxRQUFRLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sUUFBUSxDQUFDO2FBQ25CO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU8sdUNBQWMsR0FBdEI7UUFDSSxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU8sZ0NBQU8sR0FBZjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQTVFRDtRQURDLFFBQVEsQ0FBQywwQkFBZ0IsQ0FBQztrREFDSztJQUdoQztRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDOzJEQUNjO0lBVnZCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FvRmxDO0lBQUQscUJBQUM7Q0FwRkQsQUFvRkMsQ0FwRjJDLEVBQUUsQ0FBQyxTQUFTLEdBb0Z2RDtrQkFwRm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RpY2tNYW5hZ2VyIGZyb20gXCIuL1N0aWNrTWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5pbXBvcnQgUGxheWVyQ29udHJvbGxlciBmcm9tIFwiLi9QbGF5ZXJDb250cm9sbGVyXCI7XG5pbXBvcnQgUGxhdGZvcm1TcGF3bmVyIGZyb20gXCIuL1BsYXRmb3JtU3Bhd25lclwiO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgU3RpY2tfRmFsbGVuOiBzdHJpbmcgPSAnc3RpY2tGYWxsZW4nO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdGFydFBsYXllclBvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKC01MTAsIC0zMTApO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RhcnRQbGF0Zm9ybVBvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKC01NTMsIC0xMTAwKTtcblxuICAgIEBwcm9wZXJ0eShQbGF5ZXJDb250cm9sbGVyKVxuICAgIHBsYXllcjogUGxheWVyQ29udHJvbGxlciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoUGxhdGZvcm1TcGF3bmVyKVxuICAgIHBsYXRmb3JtU3Bhd25lcjogUGxhdGZvcm1TcGF3bmVyID0gbnVsbDtcblxuICAgIHByaXZhdGUgY3VycmVudFN0aWNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHBsYXRmb3JtczogY2MuTm9kZVtdID0gW107XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEdhbWUoKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5TdGlja19GYWxsZW4sIHRoaXMub25TdGlja0ZhbGxlbiwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5zZXRQb3NpdGlvbih0aGlzLnN0YXJ0UGxheWVyUG9zKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVzZXQoKTtcblxuICAgICAgICB0aGlzLmNsZWFyUGxhdGZvcm1zKCk7XG5cbiAgICAgICAgY29uc3QgaW5pdGlhbFBsYXRmb3JtID0gdGhpcy5wbGF0Zm9ybVNwYXduZXIuc3Bhd25QbGF0Zm9ybShjYy52Mih0aGlzLnN0YXJ0UGxhdGZvcm1Qb3MpKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMucHVzaChpbml0aWFsUGxhdGZvcm0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1TcGF3bmVyLnNwYXduUGxhdGZvcm0oKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMucHVzaChuZXh0UGxhdGZvcm0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xlYXJQbGF0Zm9ybXMoKSB7XG4gICAgICAgIHRoaXMucGxhdGZvcm1zLmZvckVhY2gocGxhdGZvcm0gPT4gcGxhdGZvcm0uZGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU3RpY2tGYWxsZW4oc3RpY2s6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RpY2sgPSBzdGljaztcblxuICAgICAgICBjb25zdCBzdGlja0VuZFBvc1ggPSB0aGlzLmN1cnJlbnRTdGljay54ICsgdGhpcy5jdXJyZW50U3RpY2suaGVpZ2h0IC0gdGhpcy5wbGF5ZXIubm9kZS53aWR0aCAvIDI7XG5cbiAgICAgICAgY29uc3Qgc3RpY2tXb3JsZEVuZFBvcyA9IHRoaXMuY3VycmVudFN0aWNrLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoXG4gICAgICAgICAgICBjYy52Mih0aGlzLmN1cnJlbnRTdGljay54ICsgdGhpcy5jdXJyZW50U3RpY2suaGVpZ2h0LCB0aGlzLmN1cnJlbnRTdGljay55KVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFBsYXRmb3JtID0gdGhpcy5nZXRUYXJnZXRQbGF0Zm9ybShjYy52Mih0aGlzLnBsYXllci5ub2RlLngsIHRoaXMucGxheWVyLm5vZGUueSkpO1xuXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtV29ybGRQb3MgPSB0YXJnZXRQbGF0Zm9ybS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldFBsYXRmb3JtLmdldFBvc2l0aW9uKCkpO1xuXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtU3RhcnRYID0gcGxhdGZvcm1Xb3JsZFBvcy54O1xuICAgICAgICBjb25zdCBwbGF0Zm9ybUVuZFggPSBwbGF0Zm9ybVdvcmxkUG9zLnggKyB0YXJnZXRQbGF0Zm9ybS53aWR0aDtcblxuICAgICAgICBpZiAoc3RpY2tXb3JsZEVuZFBvcy54ID49IHBsYXRmb3JtU3RhcnRYICYmIHN0aWNrV29ybGRFbmRQb3MueCA8PSBwbGF0Zm9ybUVuZFgpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVUb0VuZE9mUGxhdGZvcm0ocGxhdGZvcm1FbmRYKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVUb0VuZE9mU3RpY2soc3RpY2tFbmRQb3NYKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBnZXRUYXJnZXRQbGF0Zm9ybShwbGF5ZXJQb3NpdGlvbjogY2MuVmVjMik6IGNjLk5vZGUge1xuICAgICAgICBmb3IgKGNvbnN0IHBsYXRmb3JtIG9mIHRoaXMucGxhdGZvcm1zKSB7XG4gICAgICAgICAgICBpZiAocGxhdGZvcm0ueCA+IHBsYXllclBvc2l0aW9uLngpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxhdGZvcm07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGF3blBsYXRmb3JtcygpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1zW3RoaXMucGxhdGZvcm1zLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBuZXdQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm1TcGF3bmVyLnNwYXduUGxhdGZvcm0ocHJldmlvdXNQbGF0Zm9ybS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMucHVzaChuZXdQbGF0Zm9ybSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbmRHYW1lKCkge1xuICAgICAgICBjYy5sb2coJ0dhbWUgT3ZlcicpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PlatformSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbcd75L1a9BBLSrHghUc+6U', 'PlatformSpawner');
// Scripts/PlatformSpawner.ts

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
var PlatformSpawner = /** @class */ (function (_super) {
    __extends(PlatformSpawner, _super);
    function PlatformSpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.posY = -1100;
        _this.platformPrefab = null;
        _this.minWidth = 50;
        _this.maxWidth = 200;
        _this.minXOffset = 100;
        _this.maxXOffset = 400;
        _this.platformAppearTime = 0.5;
        return _this;
    }
    PlatformSpawner.prototype.spawnPlatform = function (previousPlatformPosition) {
        var newPlatform = cc.instantiate(this.platformPrefab);
        if (previousPlatformPosition) {
            newPlatform.setPosition(cc.v2(previousPlatformPosition.x, this.posY));
        }
        else {
            var platformWidth = this.minWidth + Math.random() * (this.maxWidth - this.minWidth);
            newPlatform.width = platformWidth;
            var newPositionX = this.minXOffset + Math.random() * (this.maxXOffset - (this.minXOffset)); // Случайное значение в промежутке [-240, 400]
            newPlatform.setPosition(cc.v2(newPositionX, this.posY * 2)); // Начальная позиция снизу экрана
            // Анимация появления снизу вверх
            cc.tween(newPlatform)
                .to(this.platformAppearTime, { position: cc.v3(newPositionX, this.posY) }, { easing: 'cubicOut' })
                .start();
        }
        this.node.addChild(newPlatform);
        return newPlatform;
    };
    __decorate([
        property(cc.Prefab)
    ], PlatformSpawner.prototype, "platformPrefab", void 0);
    __decorate([
        property
    ], PlatformSpawner.prototype, "minWidth", void 0);
    __decorate([
        property
    ], PlatformSpawner.prototype, "maxWidth", void 0);
    __decorate([
        property
    ], PlatformSpawner.prototype, "minXOffset", void 0);
    __decorate([
        property
    ], PlatformSpawner.prototype, "maxXOffset", void 0);
    __decorate([
        property
    ], PlatformSpawner.prototype, "platformAppearTime", void 0);
    PlatformSpawner = __decorate([
        ccclass
    ], PlatformSpawner);
    return PlatformSpawner;
}(cc.Component));
exports.default = PlatformSpawner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhdGZvcm1TcGF3bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBMENDO1FBekNvQixVQUFJLEdBQVcsQ0FBQyxJQUFJLENBQUM7UUFHdEMsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFHakMsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUd0QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBR3ZCLGdCQUFVLEdBQVcsR0FBRyxDQUFDO1FBR3pCLGdCQUFVLEdBQVcsR0FBRyxDQUFDO1FBR3pCLHdCQUFrQixHQUFXLEdBQUcsQ0FBQzs7SUF1QnJDLENBQUM7SUFyQlUsdUNBQWEsR0FBcEIsVUFBcUIsd0JBQWtDO1FBQ25ELElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXhELElBQUksd0JBQXdCLEVBQUU7WUFDMUIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN6RTthQUFNO1lBQ0gsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RixXQUFXLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztZQUVqQyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLDhDQUE4QztZQUM3SSxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztZQUU5RixpQ0FBaUM7WUFDakMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7aUJBQ2hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7aUJBQ2pHLEtBQUssRUFBRSxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQXJDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJEQUNhO0lBR2pDO1FBREMsUUFBUTtxREFDYTtJQUd0QjtRQURDLFFBQVE7cURBQ2M7SUFHdkI7UUFEQyxRQUFRO3VEQUNnQjtJQUd6QjtRQURDLFFBQVE7dURBQ2dCO0lBR3pCO1FBREMsUUFBUTsrREFDd0I7SUFuQmhCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0EwQ25DO0lBQUQsc0JBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQzRDLEVBQUUsQ0FBQyxTQUFTLEdBMEN4RDtrQkExQ29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1TcGF3bmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBvc1k6IG51bWJlciA9IC0xMTAwO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwbGF0Zm9ybVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIG1pbldpZHRoOiBudW1iZXIgPSA1MDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIG1heFdpZHRoOiBudW1iZXIgPSAyMDA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBtaW5YT2Zmc2V0OiBudW1iZXIgPSAxMDA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBtYXhYT2Zmc2V0OiBudW1iZXIgPSA0MDA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBwbGF0Zm9ybUFwcGVhclRpbWU6IG51bWJlciA9IDAuNTtcblxuICAgIHB1YmxpYyBzcGF3blBsYXRmb3JtKHByZXZpb3VzUGxhdGZvcm1Qb3NpdGlvbj86IGNjLlZlYzIpOiBjYy5Ob2RlIHtcbiAgICAgICAgY29uc3QgbmV3UGxhdGZvcm0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYXRmb3JtUHJlZmFiKTtcblxuICAgICAgICBpZiAocHJldmlvdXNQbGF0Zm9ybVBvc2l0aW9uKSB7XG4gICAgICAgICAgICBuZXdQbGF0Zm9ybS5zZXRQb3NpdGlvbihjYy52MihwcmV2aW91c1BsYXRmb3JtUG9zaXRpb24ueCwgdGhpcy5wb3NZKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwbGF0Zm9ybVdpZHRoID0gdGhpcy5taW5XaWR0aCArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhXaWR0aCAtIHRoaXMubWluV2lkdGgpO1xuICAgICAgICAgICAgbmV3UGxhdGZvcm0ud2lkdGggPSBwbGF0Zm9ybVdpZHRoO1xuXG4gICAgICAgICAgICAgY29uc3QgbmV3UG9zaXRpb25YID0gdGhpcy5taW5YT2Zmc2V0ICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFhPZmZzZXQgLSAodGhpcy5taW5YT2Zmc2V0KSk7IC8vINCh0LvRg9GH0LDQudC90L7QtSDQt9C90LDRh9C10L3QuNC1INCyINC/0YDQvtC80LXQttGD0YLQutC1IFstMjQwLCA0MDBdXG4gICAgICAgICAgICBuZXdQbGF0Zm9ybS5zZXRQb3NpdGlvbihjYy52MihuZXdQb3NpdGlvblgsIHRoaXMucG9zWSAqIDIpKTsgLy8g0J3QsNGH0LDQu9GM0L3QsNGPINC/0L7Qt9C40YbQuNGPINGB0L3QuNC30YMg0Y3QutGA0LDQvdCwXG5cbiAgICAgICAgICAgIC8vINCQ0L3QuNC80LDRhtC40Y8g0L/QvtGP0LLQu9C10L3QuNGPINGB0L3QuNC30YMg0LLQstC10YDRhVxuICAgICAgICAgICAgY2MudHdlZW4obmV3UGxhdGZvcm0pXG4gICAgICAgICAgICAgICAgLnRvKHRoaXMucGxhdGZvcm1BcHBlYXJUaW1lLCB7IHBvc2l0aW9uOiBjYy52MyhuZXdQb3NpdGlvblgsIHRoaXMucG9zWSkgfSwgeyBlYXNpbmc6ICdjdWJpY091dCcgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdQbGF0Zm9ybSk7XG4gICAgICAgIHJldHVybiBuZXdQbGF0Zm9ybTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Platform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c5bbgIKeBD4KclH1Q0faJr', 'Platform');
// Scripts/Platform.ts

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
var Platform = /** @class */ (function (_super) {
    __extends(Platform, _super);
    function Platform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Platform = __decorate([
        ccclass
    ], Platform);
    return Platform;
}(cc.Component));
exports.default = Platform;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhdGZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBQ0EsQ0FBQztJQURvQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBQzVCO0lBQUQsZUFBQztDQURELEFBQ0MsQ0FEcUMsRUFBRSxDQUFDLFNBQVMsR0FDakQ7a0JBRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0a464v+zr1PrYVHVkUCohnC', 'UIManager');
// Scripts/UIManager.ts

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
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.score = 0;
        return _this;
    }
    UIManager.prototype.updateScore = function (value) {
        this.score += value;
        this.scoreLabel.string = "Score: " + this.score;
    };
    UIManager.prototype.resetScore = function () {
        this.score = 0;
        this.updateScore(0);
    };
    __decorate([
        property(cc.Label)
    ], UIManager.prototype, "scoreLabel", void 0);
    UIManager = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.default = UIManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBZUM7UUFiRyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUVwQixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQVc5QixDQUFDO0lBVFUsK0JBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxZQUFVLElBQUksQ0FBQyxLQUFPLENBQUM7SUFDcEQsQ0FBQztJQUVNLDhCQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFaRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNTO0lBRlgsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWU3QjtJQUFELGdCQUFDO0NBZkQsQUFlQyxDQWZzQyxFQUFFLENBQUMsU0FBUyxHQWVsRDtrQkFmb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xuXG4gICAgcHVibGljIHVwZGF0ZVNjb3JlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGBTY29yZTogJHt0aGlzLnNjb3JlfWA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0U2NvcmUoKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKDApO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TouchController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '511f5toDcJMopSnsiyZGWcd', 'TouchController');
// Scripts/TouchController.ts

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
var TouchController = /** @class */ (function (_super) {
    __extends(TouchController, _super);
    function TouchController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TOUCHED_START = 'touchStart';
        _this.TOUCHED_END = 'touchEnd';
        return _this;
    }
    TouchController.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    TouchController.prototype.onTouchStart = function () {
        if (this.checkTime())
            cc.systemEvent.emit(this.TOUCHED_START);
    };
    TouchController.prototype.onTouchEnd = function () {
        if (this.checkTime())
            cc.systemEvent.emit(this.TOUCHED_END);
    };
    TouchController.prototype.checkTime = function () {
        return cc.director.getScheduler().getTimeScale() !== 0;
    };
    TouchController = __decorate([
        ccclass
    ], TouchController);
    return TouchController;
}(cc.Component));
exports.default = TouchController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG91Y2hDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBb0JDO1FBbkJvQixtQkFBYSxHQUFZLFlBQVksQ0FBQztRQUN0QyxpQkFBVyxHQUFZLFVBQVUsQ0FBQzs7SUFrQnZELENBQUM7SUFoQmEsZ0NBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU8sc0NBQVksR0FBcEI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVPLG9DQUFVLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTyxtQ0FBUyxHQUFqQjtRQUNJLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQW5CZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQW9CbkM7SUFBRCxzQkFBQztDQXBCRCxBQW9CQyxDQXBCNEMsRUFBRSxDQUFDLFNBQVMsR0FvQnhEO2tCQXBCb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBUT1VDSEVEX1NUQVJUIDogc3RyaW5nID0gJ3RvdWNoU3RhcnQnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgVE9VQ0hFRF9FTkQgOiBzdHJpbmcgPSAndG91Y2hFbmQnO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrVGltZSgpKSBjYy5zeXN0ZW1FdmVudC5lbWl0KHRoaXMuVE9VQ0hFRF9TVEFSVCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja1RpbWUoKSkgY2Muc3lzdGVtRXZlbnQuZW1pdCh0aGlzLlRPVUNIRURfRU5EKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrVGltZSgpOiBib29sZWFue1xuICAgICAgICByZXR1cm4gY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuZ2V0VGltZVNjYWxlKCkgIT09IDBcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/StickManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5dbd4rMfm5MgKFgI39UqgKV', 'StickManager');
// Scripts/StickManager.ts

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
        _this.STICK_FALLEN = 'stickFallen';
        _this.growSpeed = 100;
        _this.isGrowing = false;
        _this.isStickPlaced = false;
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
        this.node.height += this.growSpeed * 0.2;
    };
    StickManager.prototype.rotateStick = function () {
        var _this = this;
        cc.tween(this.node)
            .to(0.5, { angle: -90 }, { easing: 'cubicOut' })
            .call(function () {
            _this.emitStickFallenEvent();
        })
            .start();
    };
    StickManager.prototype.emitStickFallenEvent = function () {
        cc.systemEvent.emit(this.STICK_FALLEN, this.node);
    };
    __decorate([
        property(cc.Float)
    ], StickManager.prototype, "growSpeed", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3RpY2tNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBNERDO1FBM0RvQixtQkFBYSxHQUFXLFlBQVksQ0FBQztRQUNyQyxpQkFBVyxHQUFXLFVBQVUsQ0FBQztRQUNqQyxrQkFBWSxHQUFXLGFBQWEsQ0FBQztRQUc5QyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBRXhCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsbUJBQWEsR0FBWSxLQUFLLENBQUM7O0lBbUQzQyxDQUFDO0lBakRhLCtCQUFRLEdBQWxCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRVMsZ0NBQVMsR0FBbkI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTyxtQ0FBWSxHQUFwQjtRQUNJLElBQUksSUFBSSxDQUFDLGFBQWE7WUFBRSxPQUFPO1FBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8saUNBQVUsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsT0FBTztRQUMvQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLG1DQUFZLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTyxrQ0FBVyxHQUFuQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRU8sZ0NBQVMsR0FBakI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQzdDLENBQUM7SUFFTyxrQ0FBVyxHQUFuQjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQy9DLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTywyQ0FBb0IsR0FBNUI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBckREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ2E7SUFOZixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBNERoQztJQUFELG1CQUFDO0NBNURELEFBNERDLENBNUR5QyxFQUFFLENBQUMsU0FBUyxHQTREckQ7a0JBNURvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0aWNrTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBUT1VDSEVEX1NUQVJUOiBzdHJpbmcgPSAndG91Y2hTdGFydCc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBUT1VDSEVEX0VORDogc3RyaW5nID0gJ3RvdWNoRW5kJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IFNUSUNLX0ZBTExFTjogc3RyaW5nID0gJ3N0aWNrRmFsbGVuJztcblxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBwcml2YXRlIGdyb3dTcGVlZDogbnVtYmVyID0gMTAwO1xuXG4gICAgcHJpdmF0ZSBpc0dyb3dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzU3RpY2tQbGFjZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24odGhpcy5UT1VDSEVEX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuVE9VQ0hFRF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHRoaXMuVE9VQ0hFRF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYodGhpcy5UT1VDSEVEX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hTdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGlja1BsYWNlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0YXJ0R3Jvd2luZygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Ub3VjaEVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGlja1BsYWNlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0b3BHcm93aW5nKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEdyb3dpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNHcm93aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdyb3dTdGljaywgMC4wMik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wR3Jvd2luZygpIHtcbiAgICAgICAgdGhpcy5pc0dyb3dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ3Jvd1N0aWNrKTtcbiAgICAgICAgdGhpcy5yb3RhdGVTdGljaygpO1xuICAgICAgICB0aGlzLmlzU3RpY2tQbGFjZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ3Jvd1N0aWNrKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNHcm93aW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgKz0gdGhpcy5ncm93U3BlZWQgKiAwLjI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb3RhdGVTdGljaygpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuNSwgeyBhbmdsZTogLTkwIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0U3RpY2tGYWxsZW5FdmVudCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW1pdFN0aWNrRmFsbGVuRXZlbnQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQodGhpcy5TVElDS19GQUxMRU4sIHRoaXMubm9kZSk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PLAYER_REACHED_EVENT = 'playerReached';
        _this.moveDuration = 3;
        _this.isMoving = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.systemEvent.on(this.PLAYER_REACHED_EVENT, this.startMoving, this);
    };
    NewClass.prototype.onDestroy = function () {
        cc.systemEvent.off(this.PLAYER_REACHED_EVENT, this.startMoving, this);
    };
    NewClass.prototype.startMoving = function (distance) {
        var _this = this;
        if (this.isMoving)
            return;
        this.isMoving = true;
        cc.tween(this.node)
            .by(this.moveDuration, { position: cc.v3(-distance, 0) }, { easing: 'sineInOut' })
            .call(function () {
            _this.isMoving = false;
        })
            .start();
    };
    __decorate([
        property(cc.Float)
    ], NewClass.prototype, "moveDuration", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZU1vdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMkJDO1FBMUJvQiwwQkFBb0IsR0FBVyxlQUFlLENBQUM7UUFHaEUsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFakIsY0FBUSxHQUFZLEtBQUssQ0FBQzs7SUFxQnRDLENBQUM7SUFuQmEseUJBQU0sR0FBaEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRVMsNEJBQVMsR0FBbkI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU8sOEJBQVcsR0FBbkIsVUFBb0IsUUFBZ0I7UUFBcEMsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDakYsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQXRCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNNO0lBSlIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJCNUI7SUFBRCxlQUFDO0NBM0JELEFBMkJDLENBM0JxQyxFQUFFLENBQUMsU0FBUyxHQTJCakQ7a0JBM0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBQTEFZRVJfUkVBQ0hFRF9FVkVOVDogc3RyaW5nID0gJ3BsYXllclJlYWNoZWQnO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIG1vdmVEdXJhdGlvbjogbnVtYmVyID0gMztcblxuICAgIHByaXZhdGUgaXNNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKHRoaXMuUExBWUVSX1JFQUNIRURfRVZFTlQsIHRoaXMuc3RhcnRNb3ZpbmcsIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZih0aGlzLlBMQVlFUl9SRUFDSEVEX0VWRU5ULCB0aGlzLnN0YXJ0TW92aW5nLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0TW92aW5nKGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmcpIHJldHVybjtcblxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLmJ5KHRoaXMubW92ZUR1cmF0aW9uLCB7IHBvc2l0aW9uOiBjYy52MygtZGlzdGFuY2UsIDApIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
