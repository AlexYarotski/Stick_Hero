
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/MainWindow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15d42JDXLpAFZTvEYZSYIPp', 'MainWindow');
// Scripts/UI/MainWindow.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainWindow = /** @class */ (function (_super) {
    __extends(MainWindow, _super);
    function MainWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.START_GAME = 'startGame';
        _this.startButton = null;
        return _this;
    }
    Object.defineProperty(MainWindow.prototype, "isPopUp", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    MainWindow.prototype.onLoad = function () {
        this.startButton.node.on(cc.Node.EventType.TOUCH_END, this.handleClick, this);
    };
    MainWindow.prototype.handleClick = function () {
        cc.systemEvent.emit(this.START_GAME);
        this.hide();
    };
    __decorate([
        property(cc.Button)
    ], MainWindow.prototype, "startButton", void 0);
    MainWindow = __decorate([
        ccclass
    ], MainWindow);
    return MainWindow;
}(Window_1.default));
exports.default = MainWindow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXE1haW5XaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBRXhCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBbUJDO1FBbEJvQixnQkFBVSxHQUFXLFdBQVcsQ0FBQztRQUcxQyxpQkFBVyxHQUFjLElBQUksQ0FBQzs7SUFlMUMsQ0FBQztJQWJHLHNCQUFJLCtCQUFPO2FBQVg7WUFDSSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUVTLDJCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFTyxnQ0FBVyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQWREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ2tCO0lBSnJCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FtQjlCO0lBQUQsaUJBQUM7Q0FuQkQsQUFtQkMsQ0FuQnVDLGdCQUFNLEdBbUI3QztrQkFuQm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2luZG93IGZyb20gXCIuL1dpbmRvd1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluV2luZG93IGV4dGVuZHMgV2luZG93IHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgU1RBUlRfR0FNRTogc3RyaW5nID0gJ3N0YXJ0R2FtZSc7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByaXZhdGUgc3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgZ2V0IGlzUG9wVXAoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5oYW5kbGVDbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KHRoaXMuU1RBUlRfR0FNRSk7XHJcblxyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==