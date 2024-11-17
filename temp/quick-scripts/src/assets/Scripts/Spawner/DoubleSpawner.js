"use strict";
cc._RF.push(module, 'b4abenG0CRNlbbL04jUVv03', 'DoubleSpawner');
// Scripts/Spawner/DoubleSpawner.ts

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
var Spawner_1 = require("./Spawner");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DoubleSpawner = /** @class */ (function (_super) {
    __extends(DoubleSpawner, _super);
    function DoubleSpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.posY = -350;
        _this.appearanceFrequency = 3;
        _this.counter = 0;
        return _this;
    }
    DoubleSpawner.prototype.spawnNode = function (startPos, endPos) {
        this.counter++;
        if (this.counter >= this.appearanceFrequency) {
            this.counter = 0;
            var doubleNode = this.getOrCreateNode();
            var localStartPos = this.node.convertToNodeSpaceAR(startPos);
            var localEndPos = this.node.convertToNodeSpaceAR(endPos);
            var startX = localStartPos.x + doubleNode.width;
            var endX = localEndPos.x - doubleNode.width;
            var randomX = startX + Math.random() * (endX - startX);
            doubleNode.setPosition(randomX, this.posY);
            doubleNode.active = true;
            doubleNode.parent = this.node;
            return doubleNode;
        }
        return null;
    };
    __decorate([
        property(cc.Float)
    ], DoubleSpawner.prototype, "appearanceFrequency", void 0);
    DoubleSpawner = __decorate([
        ccclass
    ], DoubleSpawner);
    return DoubleSpawner;
}(Spawner_1.Spawner));
exports.default = DoubleSpawner;

cc._RF.pop();