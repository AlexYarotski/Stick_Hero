
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
        _this.stick = null;
        _this.isMoving = false;
        return _this;
    }
    PlayerController.prototype.enableStickCreation = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.startCreatingStick, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.stopCreatingStick, this);
    };
    PlayerController.prototype.startCreatingStick = function () {
        this.stick = new cc.Node("Stick");
        this.stick.addComponent(cc.Sprite);
        this.stick.setPosition(this.node.position.add(cc.v3(0, this.node.height / 2, 0)));
        this.stick.parent = this.node.parent;
        this.stick.height = 0;
        this.schedule(this.growStick, 0.02);
    };
    PlayerController.prototype.growStick = function () {
        this.stick.height += 10; // Примерная скорость роста
    };
    PlayerController.prototype.stopCreatingStick = function () {
        this.unschedule(this.growStick);
        this.rotateStick();
    };
    PlayerController.prototype.rotateStick = function () {
        var _this = this;
        cc.tween(this.stick)
            .to(0.5, { angle: -90 }, { easing: 'cubicOut' })
            .call(function () {
            // Уведомляем GameController, что палка упала
            cc.systemEvent.emit('stick-fallen', _this.stick);
        })
            .start();
    };
    PlayerController.prototype.moveToEndOfStick = function (stickNode, onComplete) {
        var _this = this;
        this.isMoving = true;
        var targetPosition = stickNode.position.add(cc.v3(stickNode.width, 0, 0));
        var targetPosition3D = new cc.Vec3(targetPosition.x, targetPosition.y, 0);
        cc.tween(this.node)
            .to(1, { position: targetPosition3D }, { easing: 'sineInOut' })
            .call(function () {
            _this.isMoving = false;
            if (onComplete)
                onComplete();
        })
            .start();
    };
    PlayerController = __decorate([
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQW1EQztRQWxEVyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGNBQVEsR0FBWSxLQUFLLENBQUM7O0lBaUR0QyxDQUFDO0lBL0NHLDhDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsNkNBQWtCLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQywyQkFBMkI7SUFDeEQsQ0FBQztJQUVELDRDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUFBLGlCQVFDO1FBUEcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2YsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQy9DLElBQUksQ0FBQztZQUNGLDZDQUE2QztZQUM3QyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCwyQ0FBZ0IsR0FBaEIsVUFBaUIsU0FBa0IsRUFBRSxVQUFvQjtRQUF6RCxpQkFZQztRQVhHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFNLGdCQUFnQixHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQzlELElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksVUFBVTtnQkFBRSxVQUFVLEVBQUUsQ0FBQztRQUNqQyxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBbERnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQW1EcEM7SUFBRCx1QkFBQztDQW5ERCxBQW1EQyxDQW5ENkMsRUFBRSxDQUFDLFNBQVMsR0FtRHpEO2tCQW5Eb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdGljazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGlzTW92aW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgZW5hYmxlU3RpY2tDcmVhdGlvbigpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuc3RhcnRDcmVhdGluZ1N0aWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnN0b3BDcmVhdGluZ1N0aWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydENyZWF0aW5nU3RpY2soKSB7XHJcbiAgICAgICAgdGhpcy5zdGljayA9IG5ldyBjYy5Ob2RlKFwiU3RpY2tcIik7XHJcbiAgICAgICAgdGhpcy5zdGljay5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLnN0aWNrLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoY2MudjMoMCwgdGhpcy5ub2RlLmhlaWdodCAvIDIsIDApKSk7XHJcbiAgICAgICAgdGhpcy5zdGljay5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIHRoaXMuc3RpY2suaGVpZ2h0ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdyb3dTdGljaywgMC4wMik7XHJcbiAgICB9XHJcblxyXG4gICAgZ3Jvd1N0aWNrKCkge1xyXG4gICAgICAgIHRoaXMuc3RpY2suaGVpZ2h0ICs9IDEwOyAvLyDQn9GA0LjQvNC10YDQvdCw0Y8g0YHQutC+0YDQvtGB0YLRjCDRgNC+0YHRgtCwXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcENyZWF0aW5nU3RpY2soKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ3Jvd1N0aWNrKTtcclxuICAgICAgICB0aGlzLnJvdGF0ZVN0aWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRlU3RpY2soKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zdGljaylcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBhbmdsZTogLTkwIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vINCj0LLQtdC00L7QvNC70Y/QtdC8IEdhbWVDb250cm9sbGVyLCDRh9GC0L4g0L/QsNC70LrQsCDRg9C/0LDQu9CwXHJcbiAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KCdzdGljay1mYWxsZW4nLCB0aGlzLnN0aWNrKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvRW5kT2ZTdGljayhzdGlja05vZGU6IGNjLk5vZGUsIG9uQ29tcGxldGU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSBzdGlja05vZGUucG9zaXRpb24uYWRkKGNjLnYzKHN0aWNrTm9kZS53aWR0aCwgMCwgMCkpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uM0QgPSBuZXcgY2MuVmVjMyh0YXJnZXRQb3NpdGlvbi54LCB0YXJnZXRQb3NpdGlvbi55LCAwKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zaXRpb24zRCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19