
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Spawner/DoubleSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
            cc.log(startX);
            cc.log(endX);
            cc.log(doubleNode.x);
            cc.log(doubleNode.y);
            cc.log(doubleNode);
            doubleNode.active = true;
            doubleNode.parent = this.node;
            return doubleNode;
        }
        return null;
    };
    __decorate([
        property
    ], DoubleSpawner.prototype, "appearanceFrequency", void 0);
    DoubleSpawner = __decorate([
        ccclass
    ], DoubleSpawner);
    return DoubleSpawner;
}(Spawner_1.Spawner));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3Bhd25lclxcRG91YmxlU3Bhd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQ0FBb0M7QUFFOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQU87SUFBbEQ7UUFBQSxxRUFzQ0M7UUFyQ29CLFVBQUksR0FBVyxDQUFDLEdBQUcsQ0FBQztRQUc3Qix5QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFFaEMsYUFBTyxHQUFXLENBQUMsQ0FBQzs7SUFnQ2hDLENBQUM7SUE5QlUsaUNBQVMsR0FBaEIsVUFBaUIsUUFBaUIsRUFBRSxNQUFlO1FBQy9DLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFFakIsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRTFDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUUzRCxJQUFNLE1BQU0sR0FBRyxhQUFhLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDbEQsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQzlDLElBQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFFekQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTNDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDZixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVuQixVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN6QixVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFFOUIsT0FBTyxVQUFVLENBQUM7U0FDckI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBakNEO1FBREMsUUFBUTs4REFDK0I7SUFKdkIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXNDakM7SUFBRCxvQkFBQztDQXRDRCxBQXNDQyxDQXRDMEMsaUJBQU8sR0FzQ2pEO2tCQXRDb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb3VibGUgZnJvbSBcIi4uL0RvdWJsZVwiO1xuaW1wb3J0IHsgU3Bhd25lciB9IGZyb20gXCIuL1NwYXduZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvdWJsZVNwYXduZXIgZXh0ZW5kcyBTcGF3bmVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBvc1k6IG51bWJlciA9IC0zNTA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIGFwcGVhcmFuY2VGcmVxdWVuY3k6IG51bWJlciA9IDM7XG5cbiAgICBwcml2YXRlIGNvdW50ZXI6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgc3Bhd25Ob2RlKHN0YXJ0UG9zOiBjYy5WZWMzLCBlbmRQb3M6IGNjLlZlYzMpOiBjYy5Ob2RlIHtcbiAgICAgICAgdGhpcy5jb3VudGVyKys7XG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gdGhpcy5hcHBlYXJhbmNlRnJlcXVlbmN5KSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuXG4gICAgICAgICAgICBjb25zdCBkb3VibGVOb2RlID0gdGhpcy5nZXRPckNyZWF0ZU5vZGUoKTtcblxuICAgICAgICAgICAgY29uc3QgbG9jYWxTdGFydFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzdGFydFBvcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbEVuZFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlbmRQb3MpO1xuXG4gICAgICAgICAgICBjb25zdCBzdGFydFggPSBsb2NhbFN0YXJ0UG9zLnggKyBkb3VibGVOb2RlLndpZHRoO1xuICAgICAgICAgICAgY29uc3QgZW5kWCA9IGxvY2FsRW5kUG9zLnggLSBkb3VibGVOb2RlLndpZHRoO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tWCA9IHN0YXJ0WCArIE1hdGgucmFuZG9tKCkgKiAoZW5kWCAtIHN0YXJ0WCk7XG5cbiAgICAgICAgICAgIGRvdWJsZU5vZGUuc2V0UG9zaXRpb24ocmFuZG9tWCwgdGhpcy5wb3NZKTtcblxuICAgICAgICAgICAgY2MubG9nKHN0YXJ0WCk7XG4gICAgICAgICAgICBjYy5sb2coZW5kWCk7XG4gICAgICAgICAgICBjYy5sb2coZG91YmxlTm9kZS54KTtcbiAgICAgICAgICAgIGNjLmxvZyhkb3VibGVOb2RlLnkpO1xuICAgICAgICAgICAgY2MubG9nKGRvdWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBkb3VibGVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBkb3VibGVOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcblxuICAgICAgICAgICAgcmV0dXJuIGRvdWJsZU5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXX0=