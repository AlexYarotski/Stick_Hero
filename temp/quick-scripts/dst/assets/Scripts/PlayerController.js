
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
var StickManager_1 = require("./StickManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.offsetPlatformX = -50;
        _this.offsetStick = cc.v2(80, 10);
        _this.stickPrefab = null;
        _this.moveDuration = 1;
        _this.fallDuration = 0.2;
        _this.stick = null;
        return _this;
    }
    PlayerController_1 = PlayerController;
    PlayerController.prototype.reset = function () {
        this.spawnStick();
    };
    PlayerController.prototype.spawnStick = function () {
        var position = cc.v2(this.node.position.x + this.offsetStick.x, this.node.position.y + this.offsetStick.y);
        if (!this.stick) {
            this.stick = cc.instantiate(this.stickPrefab).getComponent(StickManager_1.default);
            this.stick.node.parent = this.node.parent;
        }
        this.stick.reset();
        this.stick.node.setPosition(position);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFxRUM7UUFsRW9CLHFCQUFlLEdBQVcsQ0FBQyxFQUFFLENBQUM7UUFFOUIsaUJBQVcsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUd0RCxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUd6QixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUVuQixXQUFLLEdBQWlCLElBQUksQ0FBQzs7SUFxRHZDLENBQUM7eUJBckVvQixnQkFBZ0I7SUFrQjFCLGdDQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLHFDQUFVLEdBQWxCO1FBQ0ksSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0csSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzdDO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUdNLDJDQUFnQixHQUF2QixVQUF3QixJQUFZO1FBQXBDLGlCQUtDO1FBSkcsSUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7WUFDN0IsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDhDQUFtQixHQUExQixVQUEyQixJQUFZO1FBQ25DLElBQU0sbUJBQW1CLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdkYsSUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqRyxJQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztRQUU3RyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTtZQUM3QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsbUNBQW1DO1FBQ3RILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdPLHNDQUFXLEdBQW5CLFVBQW9CLGNBQXVCLEVBQUUsVUFBb0I7UUFDN0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDNUUsSUFBSSxDQUFDO1lBQ0YsSUFBSSxVQUFVO2dCQUFFLFVBQVUsRUFBRSxDQUFDO1FBQ2pDLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTyx1Q0FBWSxHQUFwQjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQzlELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7O0lBbkV1QixxQ0FBb0IsR0FBRyxlQUFlLENBQUM7SUFPL0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBEQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ1E7SUFkVixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXFFcEM7SUFBRCx1QkFBQztDQXJFRCxBQXFFQyxDQXJFNkMsRUFBRSxDQUFDLFNBQVMsR0FxRXpEO2tCQXJFb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0aWNrTWFuYWdlciBmcm9tIFwiLi9TdGlja01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFBMQVlFUl9SRUFDSEVEX0VWRU5UID0gJ3BsYXllclJlYWNoZWQnO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgb2Zmc2V0UGxhdGZvcm1YOiBudW1iZXIgPSAtNTA7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvZmZzZXRTdGljazogY2MuVmVjMiA9IGNjLnYyKDgwLCAxMCk7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHN0aWNrUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIG1vdmVEdXJhdGlvbjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBmYWxsRHVyYXRpb246IG51bWJlciA9IDAuMjtcclxuXHJcbiAgICBwcml2YXRlIHN0aWNrOiBTdGlja01hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnNwYXduU3RpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNwYXduU3RpY2soKSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjYy52Mih0aGlzLm5vZGUucG9zaXRpb24ueCArIHRoaXMub2Zmc2V0U3RpY2sueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyB0aGlzLm9mZnNldFN0aWNrLnkpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zdGljayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RpY2tQcmVmYWIpLmdldENvbXBvbmVudChTdGlja01hbmFnZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnN0aWNrLm5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RpY2sucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnN0aWNrLm5vZGUuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgbW92ZVRvRW5kT2ZTdGljayh4UG9zOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IGNjLnYzKHhQb3MsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLm1vdmVUb3dhcmRzKHRhcmdldFBvc2l0aW9uLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVGYWxsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVUb0VuZE9mUGxhdGZvcm0oeFBvczogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qgd29ybGRUYXJnZXRQb3NpdGlvbiA9IGNjLnYzKHhQb3MgKyB0aGlzLm9mZnNldFBsYXRmb3JtWCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsVGFyZ2V0UG9zaXRpb24gPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkVGFyZ2V0UG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGVuZFBsYXRmb3JtUG9zID0gY2MudjMobG9jYWxUYXJnZXRQb3NpdGlvbi54ICsgdGhpcy5vZmZzZXRQbGF0Zm9ybVgsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2VUcmF2ZWxsZWQgPSBNYXRoLmFicyh0aGlzLm5vZGUucG9zaXRpb24ueCAtIGVuZFBsYXRmb3JtUG9zLngpOyAvLyDQoNCw0YHRh9C10YIg0L/RgNC+0LnQtNC10L3QvdC+0LPQviDRgNCw0YHRgdGC0L7Rj9C90LjRj1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVUb3dhcmRzKGVuZFBsYXRmb3JtUG9zLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoUGxheWVyQ29udHJvbGxlci5QTEFZRVJfUkVBQ0hFRF9FVkVOVCwgZGlzdGFuY2VUcmF2ZWxsZWQpOyAvLyDQn9C10YDQtdC00LDQtdC8INGA0LDRgdGB0YLQvtGP0L3QuNC1INC60LDQuiDQv9Cw0YDQsNC80LXRgtGAXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgbW92ZVRvd2FyZHModGFyZ2V0UG9zaXRpb246IGNjLlZlYzMsIG9uQ29tcGxldGU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8odGhpcy5tb3ZlRHVyYXRpb24sIHsgcG9zaXRpb246IHRhcmdldFBvc2l0aW9uIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYXRlRmFsbCgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50byh0aGlzLmZhbGxEdXJhdGlvbiwgeyBwb3NpdGlvbjogY2MudjModGhpcy5ub2RlLngsIC0xMDgwKSB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=