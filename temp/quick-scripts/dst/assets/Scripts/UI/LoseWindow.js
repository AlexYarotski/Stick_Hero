
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/LoseWindow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ade6F0krtPaIsKQmcVPr/I', 'LoseWindow');
// Scripts/UI/LoseWindow.ts

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
var Window_1 = require("./Window");
var Button = cc.Button;
var DataCounter_1 = require("../DataCounter");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoseWindow = /** @class */ (function (_super) {
    __extends(LoseWindow, _super);
    function LoseWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MAIN_CLICKED = 'mainClicked';
        _this.RESTART_CLICKED = 'restartClicked';
        _this.main = null;
        _this.restart = null;
        _this.score = null;
        _this.bestScore = null;
        _this.doubleCount = null;
        return _this;
    }
    Object.defineProperty(LoseWindow.prototype, "isPopUp", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    LoseWindow.prototype.onLoad = function () {
        var _this = this;
        this.main.node.on(cc.Node.EventType.TOUCH_END, function () { return cc.systemEvent.emit(_this.MAIN_CLICKED); }, this);
        this.restart.node.on(cc.Node.EventType.TOUCH_END, function () { return cc.systemEvent.emit(_this.RESTART_CLICKED); }, this);
    };
    LoseWindow.prototype.onDestroy = function () {
        var _this = this;
        this.main.node.off(cc.Node.EventType.TOUCH_END, function () { return cc.systemEvent.emit(_this.MAIN_CLICKED); }, this);
        this.restart.node.off(cc.Node.EventType.TOUCH_END, function () { return cc.systemEvent.emit(_this.RESTART_CLICKED); }, this);
    };
    LoseWindow.prototype.show = function () {
        _super.prototype.show.call(this);
        this.score.string = DataCounter_1.default.getScore().toString();
        this.bestScore.string = DataCounter_1.default.getBestScore().toString();
        this.doubleCount.string = DataCounter_1.default.getDoubleCount().toString();
    };
    __decorate([
        property(Button)
    ], LoseWindow.prototype, "main", void 0);
    __decorate([
        property(Button)
    ], LoseWindow.prototype, "restart", void 0);
    __decorate([
        property(cc.Label)
    ], LoseWindow.prototype, "score", void 0);
    __decorate([
        property(cc.Label)
    ], LoseWindow.prototype, "bestScore", void 0);
    __decorate([
        property(cc.Label)
    ], LoseWindow.prototype, "doubleCount", void 0);
    LoseWindow = __decorate([
        ccclass
    ], LoseWindow);
    return LoseWindow;
}(Window_1.default));
exports.default = LoseWindow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXExvc2VXaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLElBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7QUFDMUIsOENBQXlDO0FBRW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBdUNDO1FBdENvQixrQkFBWSxHQUFXLGFBQWEsQ0FBQztRQUNyQyxxQkFBZSxHQUFXLGdCQUFnQixDQUFDO1FBR3BELFVBQUksR0FBVyxJQUFJLENBQUM7UUFFcEIsYUFBTyxHQUFXLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsaUJBQVcsR0FBYSxJQUFJLENBQUM7O0lBdUJ6QyxDQUFDO0lBckJHLHNCQUFJLCtCQUFPO2FBQVg7WUFDSSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUVTLDJCQUFNLEdBQWhCO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQXRDLENBQXNDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxFQUF6QyxDQUF5QyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFFUyw4QkFBUyxHQUFuQjtRQUFBLGlCQUdDO1FBRkcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUF0QyxDQUFzQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsRUFBekMsQ0FBeUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RyxDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcscUJBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxxQkFBVyxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLHFCQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEUsQ0FBQztJQWpDRDtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7NENBQ1c7SUFFNUI7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDOytDQUNjO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ1k7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDZ0I7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDa0I7SUFoQnBCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F1QzlCO0lBQUQsaUJBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q3VDLGdCQUFNLEdBdUM3QztrQkF2Q29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2luZG93IGZyb20gXCIuL1dpbmRvd1wiO1xyXG5pbXBvcnQgQnV0dG9uID0gY2MuQnV0dG9uO1xyXG5pbXBvcnQgRGF0YUNvdW50ZXIgZnJvbSBcIi4uL0RhdGFDb3VudGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9zZVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE1BSU5fQ0xJQ0tFRDogc3RyaW5nID0gJ21haW5DbGlja2VkJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgUkVTVEFSVF9DTElDS0VEOiBzdHJpbmcgPSAncmVzdGFydENsaWNrZWQnO1xyXG5cclxuICAgIEBwcm9wZXJ0eShCdXR0b24pXHJcbiAgICBwcml2YXRlIG1haW46IEJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQnV0dG9uKVxyXG4gICAgcHJpdmF0ZSByZXN0YXJ0OiBCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgc2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGJlc3RTY29yZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgZG91YmxlQ291bnQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBnZXQgaXNQb3BVcCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm1haW4ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IGNjLnN5c3RlbUV2ZW50LmVtaXQodGhpcy5NQUlOX0NMSUNLRUQpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnJlc3RhcnQubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IGNjLnN5c3RlbUV2ZW50LmVtaXQodGhpcy5SRVNUQVJUX0NMSUNLRUQpLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubWFpbi5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IGNjLnN5c3RlbUV2ZW50LmVtaXQodGhpcy5NQUlOX0NMSUNLRUQpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnJlc3RhcnQubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiBjYy5zeXN0ZW1FdmVudC5lbWl0KHRoaXMuUkVTVEFSVF9DTElDS0VEKSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3coKSB7XHJcbiAgICAgICAgc3VwZXIuc2hvdygpO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9IERhdGFDb3VudGVyLmdldFNjb3JlKCkudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmJlc3RTY29yZS5zdHJpbmcgPSBEYXRhQ291bnRlci5nZXRCZXN0U2NvcmUoKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuZG91YmxlQ291bnQuc3RyaW5nID0gRGF0YUNvdW50ZXIuZ2V0RG91YmxlQ291bnQoKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==