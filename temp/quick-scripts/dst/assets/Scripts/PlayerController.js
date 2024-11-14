
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
    PlayerController.prototype.moveTo = function (targetPosition, onComplete) {
        var _this = this;
        this.isMoving = true;
        cc.tween(this.node)
            .to(1, { position: targetPosition }, { easing: 'sineInOut' })
            .call(function () {
            _this.isMoving = false;
            if (onComplete)
                onComplete();
        })
            .start();
    };
    PlayerController.prototype.fall = function () {
        cc.tween(this.node)
            .by(1, { position: cc.v2(0, -1000) }, { easing: 'sineIn' })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], PlayerController.prototype, "stick", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQXNCQztRQXBCRyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRWQsY0FBUSxHQUFZLEtBQUssQ0FBQzs7SUFrQnRDLENBQUM7SUFoQkcsaUNBQU0sR0FBTixVQUFPLGNBQXVCLEVBQUUsVUFBb0I7UUFBcEQsaUJBU0M7UUFSRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQzVELElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksVUFBVTtnQkFBRSxVQUFVLEVBQUUsQ0FBQztRQUNqQyxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQzFELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFuQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDSTtJQUZMLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBc0JwQztJQUFELHVCQUFDO0NBdEJELEFBc0JDLENBdEI2QyxFQUFFLENBQUMsU0FBUyxHQXNCekQ7a0JBdEJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHN0aWNrOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzTW92aW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbW92ZVRvKHRhcmdldFBvc2l0aW9uOiBjYy5WZWMyLCBvbkNvbXBsZXRlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRhcmdldFBvc2l0aW9uIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmYWxsKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLmJ5KDEsIHsgcG9zaXRpb246IGNjLnYyKDAsIC0xMDAwKSB9LCB7IGVhc2luZzogJ3NpbmVJbicgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19