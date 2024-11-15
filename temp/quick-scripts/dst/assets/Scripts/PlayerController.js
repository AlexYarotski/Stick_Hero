
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
var StickSpawner_1 = require("./StickSpawner");
var PlayerFlip_1 = require("./PlayerFlip");
var Platform_1 = require("./Platform"); // Добавим импорт Platform для проверки типа объекта
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLLISION_ENTER = 'collision-enter';
        _this.offsetPlatformX = -50;
        _this.offsetStick = cc.v2(80, 10);
        _this.stickPrefab = null;
        _this.moveDuration = 1;
        _this.fallDuration = 0.2;
        _this.stickSpawner = null;
        _this.playerFlip = null;
        _this.stick = null;
        _this.previousStick = null;
        _this.boxCollider = null;
        return _this;
    }
    PlayerController_1 = PlayerController;
    PlayerController.prototype.onLoad = function () {
        this.boxCollider = this.getComponent(cc.BoxCollider);
        this.boxCollider.node.on(this.COLLISION_ENTER, this.onCollisionEnter, this);
    };
    PlayerController.prototype.reset = function () {
        this.spawnStick();
    };
    PlayerController.prototype.onCollisionEnter = function (other, self) {
        if (other.node.getComponent(Platform_1.default)) {
            this.initiateFall();
        }
    };
    PlayerController.prototype.spawnStick = function () {
        var position = cc.v2(this.node.position.x + this.offsetStick.x, this.node.position.y + this.offsetStick.y);
        this.stick = this.stickSpawner.spawnNode(position).getComponent(StickManager_1.default);
        this.stick.node.parent = this.node.parent;
        this.stick.reset();
    };
    PlayerController.prototype.moveToEndOfStick = function (xPos) {
        var _this = this;
        var targetPosition = cc.v3(xPos, this.node.position.y);
        this.moveTowards(targetPosition, function () {
            _this.initiateFall();
        });
    };
    PlayerController.prototype.moveToEndOfPlatform = function (xPos) {
        var _this = this;
        var worldTargetPosition = cc.v3(xPos + this.offsetPlatformX, this.node.position.y);
        var localTargetPosition = this.node.parent.convertToNodeSpaceAR(worldTargetPosition);
        var endPlatformPos = cc.v3(localTargetPosition.x + this.offsetPlatformX, this.node.position.y);
        var distanceTravelled = Math.abs(this.node.position.x - endPlatformPos.x);
        this.moveTowards(endPlatformPos, function () {
            _this.onReachEndOfPlatform(distanceTravelled);
        });
    };
    PlayerController.prototype.onReachEndOfPlatform = function (distanceTravelled) {
        if (this.previousStick) {
            this.stickSpawner.deactivateNode(this.previousStick.node);
        }
        this.previousStick = this.stick;
        cc.systemEvent.emit(PlayerController_1.PLAYER_REACHED, distanceTravelled);
    };
    PlayerController.prototype.moveTowards = function (targetPosition, onComplete) {
        var _this = this;
        this.playerFlip.disableFlip();
        cc.tween(this.node)
            .to(this.moveDuration, { position: targetPosition }, { easing: 'sineInOut' })
            .call(function () {
            if (onComplete)
                onComplete();
            _this.playerFlip.enableFlip();
        })
            .start();
    };
    PlayerController.prototype.initiateFall = function () {
        cc.tween(this.node)
            .to(this.fallDuration, { position: cc.v3(this.node.x, -1080) })
            .start();
        this.stick.initiateFall(this.fallDuration);
    };
    var PlayerController_1;
    PlayerController.PLAYER_REACHED = 'playerReached';
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "stickPrefab", void 0);
    __decorate([
        property(cc.Float)
    ], PlayerController.prototype, "moveDuration", void 0);
    __decorate([
        property(cc.Float)
    ], PlayerController.prototype, "fallDuration", void 0);
    __decorate([
        property(StickSpawner_1.default)
    ], PlayerController.prototype, "stickSpawner", void 0);
    __decorate([
        property(PlayerFlip_1.default)
    ], PlayerController.prototype, "playerFlip", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFDMUMsK0NBQTBDO0FBQzFDLDJDQUFzQztBQUN0Qyx1Q0FBa0MsQ0FBQyxvREFBb0Q7QUFFakYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFpR0M7UUEvRm9CLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7UUFFNUMscUJBQWUsR0FBVyxDQUFDLEVBQUUsQ0FBQztRQUM5QixpQkFBVyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBR3RELGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBR25CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixXQUFLLEdBQWlCLElBQUksQ0FBQztRQUMzQixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDOztJQXlFL0MsQ0FBQzt5QkFqR29CLGdCQUFnQjtJQTBCdkIsaUNBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRU0sZ0NBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRVMsMkNBQWdCLEdBQTFCLFVBQTJCLEtBQWtCLEVBQUUsSUFBaUI7UUFDNUQsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVPLHFDQUFVLEdBQWxCO1FBQ0ksSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0csSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwyQ0FBZ0IsR0FBdkIsVUFBd0IsSUFBWTtRQUFwQyxpQkFLQztRQUpHLElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO1lBQzdCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw4Q0FBbUIsR0FBMUIsVUFBMkIsSUFBWTtRQUF2QyxpQkFVQztRQVRHLElBQU0sbUJBQW1CLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdkYsSUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqRyxJQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1RSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTtZQUM3QixLQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTywrQ0FBb0IsR0FBNUIsVUFBNkIsaUJBQXlCO1FBQ2xELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRWhDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFnQixDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTyxzQ0FBVyxHQUFuQixVQUFvQixjQUF1QixFQUFFLFVBQW9CO1FBQWpFLGlCQVVDO1FBVEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUU5QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUM1RSxJQUFJLENBQUM7WUFDRixJQUFJLFVBQVU7Z0JBQUUsVUFBVSxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNqQyxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU8sdUNBQVksR0FBcEI7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUM5RCxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOztJQS9GdUIsK0JBQWMsR0FBRyxlQUFlLENBQUM7SUFPekQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBEQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzswREFDbUI7SUFHMUM7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQzt3REFDaUI7SUFuQnJCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBaUdwQztJQUFELHVCQUFDO0NBakdELEFBaUdDLENBakc2QyxFQUFFLENBQUMsU0FBUyxHQWlHekQ7a0JBakdvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RpY2tNYW5hZ2VyIGZyb20gXCIuL1N0aWNrTWFuYWdlclwiO1xyXG5pbXBvcnQgU3RpY2tTcGF3bmVyIGZyb20gXCIuL1N0aWNrU3Bhd25lclwiO1xyXG5pbXBvcnQgUGxheWVyRmxpcCBmcm9tIFwiLi9QbGF5ZXJGbGlwXCI7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi9QbGF0Zm9ybVwiOyAvLyDQlNC+0LHQsNCy0LjQvCDQuNC80L/QvtGA0YIgUGxhdGZvcm0g0LTQu9GPINC/0YDQvtCy0LXRgNC60Lgg0YLQuNC/0LAg0L7QsdGK0LXQutGC0LBcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFBMQVlFUl9SRUFDSEVEID0gJ3BsYXllclJlYWNoZWQnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBDT0xMSVNJT05fRU5URVI6IHN0cmluZyA9ICdjb2xsaXNpb24tZW50ZXInO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgb2Zmc2V0UGxhdGZvcm1YOiBudW1iZXIgPSAtNTA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9mZnNldFN0aWNrOiBjYy5WZWMyID0gY2MudjIoODAsIDEwKTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc3RpY2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgbW92ZUR1cmF0aW9uOiBudW1iZXIgPSAxO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgZmFsbER1cmF0aW9uOiBudW1iZXIgPSAwLjI7XHJcblxyXG4gICAgQHByb3BlcnR5KFN0aWNrU3Bhd25lcilcclxuICAgIHByaXZhdGUgc3RpY2tTcGF3bmVyOiBTdGlja1NwYXduZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShQbGF5ZXJGbGlwKVxyXG4gICAgcHJpdmF0ZSBwbGF5ZXJGbGlwOiBQbGF5ZXJGbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHN0aWNrOiBTdGlja01hbmFnZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwcmV2aW91c1N0aWNrOiBTdGlja01hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYm94Q29sbGlkZXI6IGNjLkJveENvbGxpZGVyID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlci5ub2RlLm9uKHRoaXMuQ09MTElTSU9OX0VOVEVSLCB0aGlzLm9uQ29sbGlzaW9uRW50ZXIsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnNwYXduU3RpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KFBsYXRmb3JtKSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlRmFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNwYXduU3RpY2soKSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjYy52Mih0aGlzLm5vZGUucG9zaXRpb24ueCArIHRoaXMub2Zmc2V0U3RpY2sueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyB0aGlzLm9mZnNldFN0aWNrLnkpO1xyXG4gICAgICAgIHRoaXMuc3RpY2sgPSB0aGlzLnN0aWNrU3Bhd25lci5zcGF3bk5vZGUocG9zaXRpb24pLmdldENvbXBvbmVudChTdGlja01hbmFnZXIpO1xyXG4gICAgICAgIHRoaXMuc3RpY2subm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIHRoaXMuc3RpY2sucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZVRvRW5kT2ZTdGljayh4UG9zOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IGNjLnYzKHhQb3MsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLm1vdmVUb3dhcmRzKHRhcmdldFBvc2l0aW9uLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVGYWxsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVUb0VuZE9mUGxhdGZvcm0oeFBvczogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qgd29ybGRUYXJnZXRQb3NpdGlvbiA9IGNjLnYzKHhQb3MgKyB0aGlzLm9mZnNldFBsYXRmb3JtWCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsVGFyZ2V0UG9zaXRpb24gPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkVGFyZ2V0UG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGVuZFBsYXRmb3JtUG9zID0gY2MudjMobG9jYWxUYXJnZXRQb3NpdGlvbi54ICsgdGhpcy5vZmZzZXRQbGF0Zm9ybVgsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2VUcmF2ZWxsZWQgPSBNYXRoLmFicyh0aGlzLm5vZGUucG9zaXRpb24ueCAtIGVuZFBsYXRmb3JtUG9zLngpO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVUb3dhcmRzKGVuZFBsYXRmb3JtUG9zLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25SZWFjaEVuZE9mUGxhdGZvcm0oZGlzdGFuY2VUcmF2ZWxsZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25SZWFjaEVuZE9mUGxhdGZvcm0oZGlzdGFuY2VUcmF2ZWxsZWQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzU3RpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zdGlja1NwYXduZXIuZGVhY3RpdmF0ZU5vZGUodGhpcy5wcmV2aW91c1N0aWNrLm5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1N0aWNrID0gdGhpcy5zdGljaztcclxuXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChQbGF5ZXJDb250cm9sbGVyLlBMQVlFUl9SRUFDSEVELCBkaXN0YW5jZVRyYXZlbGxlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlVG93YXJkcyh0YXJnZXRQb3NpdGlvbjogY2MuVmVjMywgb25Db21wbGV0ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLnBsYXllckZsaXAuZGlzYWJsZUZsaXAoKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8odGhpcy5tb3ZlRHVyYXRpb24sIHsgcG9zaXRpb246IHRhcmdldFBvc2l0aW9uIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJGbGlwLmVuYWJsZUZsaXAoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWF0ZUZhbGwoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8odGhpcy5mYWxsRHVyYXRpb24sIHsgcG9zaXRpb246IGNjLnYzKHRoaXMubm9kZS54LCAtMTA4MCkgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RpY2suaW5pdGlhdGVGYWxsKHRoaXMuZmFsbER1cmF0aW9uKTtcclxuICAgIH1cclxufVxyXG4iXX0=