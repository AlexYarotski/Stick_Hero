"use strict";
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