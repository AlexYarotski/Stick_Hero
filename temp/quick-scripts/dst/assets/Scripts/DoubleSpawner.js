
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DoubleSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4abenG0CRNlbbL04jUVv03', 'DoubleSpawner');
// Scripts/DoubleSpawner.ts

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
var DoubleSpawner = /** @class */ (function (_super) {
    __extends(DoubleSpawner, _super);
    function DoubleSpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.doublePrefab = null;
        _this.appearanceFrequency = 3; // Частота появления Double
        _this.counter = 0; // Счётчик для появления
        return _this;
    }
    DoubleSpawner.prototype.spawnDouble = function (previousPlatform, currentPlatform) {
        this.counter++;
        if (this.counter >= this.appearanceFrequency) {
            this.counter = 0; // Сброс счётчика
            var startX = previousPlatform.x;
            var endX = currentPlatform.x;
            var midX = (startX + endX) / 2;
            var doubleNode = cc.instantiate(this.doublePrefab);
            doubleNode.parent = this.node;
            doubleNode.setPosition(-291, -350); // Заданная Y-позиция
        }
    };
    __decorate([
        property(cc.Prefab)
    ], DoubleSpawner.prototype, "doublePrefab", void 0);
    __decorate([
        property
    ], DoubleSpawner.prototype, "appearanceFrequency", void 0);
    DoubleSpawner = __decorate([
        ccclass
    ], DoubleSpawner);
    return DoubleSpawner;
}(cc.Component));
exports.default = DoubleSpawner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRG91YmxlU3Bhd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQXNCQztRQXBCRyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUd2Qix5QkFBbUIsR0FBVyxDQUFDLENBQUMsQ0FBQywyQkFBMkI7UUFFNUQsYUFBTyxHQUFXLENBQUMsQ0FBQyxDQUFDLHdCQUF3Qjs7SUFlekQsQ0FBQztJQWJVLG1DQUFXLEdBQWxCLFVBQW1CLGdCQUF5QixFQUFFLGVBQXdCO1FBQ2xFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7WUFDbkMsSUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQU0sSUFBSSxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWpDLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3JELFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM5QixVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7U0FDNUQ7SUFDTCxDQUFDO0lBbkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ1c7SUFHL0I7UUFEQyxRQUFROzhEQUMrQjtJQUx2QixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBc0JqQztJQUFELG9CQUFDO0NBdEJELEFBc0JDLENBdEIwQyxFQUFFLENBQUMsU0FBUyxHQXNCdEQ7a0JBdEJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvdWJsZVNwYXduZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZG91YmxlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBhcHBlYXJhbmNlRnJlcXVlbmN5OiBudW1iZXIgPSAzOyAvLyDQp9Cw0YHRgtC+0YLQsCDQv9C+0Y/QstC70LXQvdC40Y8gRG91YmxlXG5cbiAgICBwcml2YXRlIGNvdW50ZXI6IG51bWJlciA9IDA7IC8vINCh0YfRkdGC0YfQuNC6INC00LvRjyDQv9C+0Y/QstC70LXQvdC40Y9cblxuICAgIHB1YmxpYyBzcGF3bkRvdWJsZShwcmV2aW91c1BsYXRmb3JtOiBjYy5Ob2RlLCBjdXJyZW50UGxhdGZvcm06IGNjLk5vZGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb3VudGVyKys7XG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gdGhpcy5hcHBlYXJhbmNlRnJlcXVlbmN5KSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSAwOyAvLyDQodCx0YDQvtGBINGB0YfRkdGC0YfQuNC60LBcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0WCA9IHByZXZpb3VzUGxhdGZvcm0ueDtcbiAgICAgICAgICAgIGNvbnN0IGVuZFggPSBjdXJyZW50UGxhdGZvcm0ueDtcbiAgICAgICAgICAgIGNvbnN0IG1pZFggPSAoc3RhcnRYICsgZW5kWCkgLyAyO1xuXG4gICAgICAgICAgICBjb25zdCBkb3VibGVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5kb3VibGVQcmVmYWIpO1xuICAgICAgICAgICAgZG91YmxlTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBkb3VibGVOb2RlLnNldFBvc2l0aW9uKC0yOTEsIC0zNTApOyAvLyDQl9Cw0LTQsNC90L3QsNGPIFkt0L/QvtC30LjRhtC40Y9cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==