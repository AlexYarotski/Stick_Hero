
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3Bhd25lclxcRG91YmxlU3Bhd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBb0M7QUFFOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQU87SUFBbEQ7UUFBQSxxRUFzQ0M7UUFyQ29CLFVBQUksR0FBVyxDQUFDLEdBQUcsQ0FBQztRQUc3Qix5QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFFaEMsYUFBTyxHQUFXLENBQUMsQ0FBQzs7SUFnQ2hDLENBQUM7SUE5QlUsaUNBQVMsR0FBaEIsVUFBaUIsUUFBaUIsRUFBRSxNQUFlO1FBQy9DLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFFakIsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRTFDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUUzRCxJQUFNLE1BQU0sR0FBRyxhQUFhLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDbEQsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQzlDLElBQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFFekQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTNDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDZixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVuQixVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN6QixVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFFOUIsT0FBTyxVQUFVLENBQUM7U0FDckI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBakNEO1FBREMsUUFBUTs4REFDK0I7SUFKdkIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXNDakM7SUFBRCxvQkFBQztDQXRDRCxBQXNDQyxDQXRDMEMsaUJBQU8sR0FzQ2pEO2tCQXRDb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwYXduZXIgfSBmcm9tIFwiLi9TcGF3bmVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb3VibGVTcGF3bmVyIGV4dGVuZHMgU3Bhd25lciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwb3NZOiBudW1iZXIgPSAtMzUwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBhcHBlYXJhbmNlRnJlcXVlbmN5OiBudW1iZXIgPSAzO1xuXG4gICAgcHJpdmF0ZSBjb3VudGVyOiBudW1iZXIgPSAwO1xuXG4gICAgcHVibGljIHNwYXduTm9kZShzdGFydFBvczogY2MuVmVjMywgZW5kUG9zOiBjYy5WZWMzKTogY2MuTm9kZSB7XG4gICAgICAgIHRoaXMuY291bnRlcisrO1xuICAgICAgICBpZiAodGhpcy5jb3VudGVyID49IHRoaXMuYXBwZWFyYW5jZUZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcblxuICAgICAgICAgICAgY29uc3QgZG91YmxlTm9kZSA9IHRoaXMuZ2V0T3JDcmVhdGVOb2RlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsU3RhcnRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoc3RhcnRQb3MpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxFbmRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZW5kUG9zKTtcblxuICAgICAgICAgICAgY29uc3Qgc3RhcnRYID0gbG9jYWxTdGFydFBvcy54ICsgZG91YmxlTm9kZS53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGVuZFggPSBsb2NhbEVuZFBvcy54IC0gZG91YmxlTm9kZS53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVggPSBzdGFydFggKyBNYXRoLnJhbmRvbSgpICogKGVuZFggLSBzdGFydFgpO1xuXG4gICAgICAgICAgICBkb3VibGVOb2RlLnNldFBvc2l0aW9uKHJhbmRvbVgsIHRoaXMucG9zWSk7XG5cbiAgICAgICAgICAgIGNjLmxvZyhzdGFydFgpO1xuICAgICAgICAgICAgY2MubG9nKGVuZFgpO1xuICAgICAgICAgICAgY2MubG9nKGRvdWJsZU5vZGUueCk7XG4gICAgICAgICAgICBjYy5sb2coZG91YmxlTm9kZS55KTtcbiAgICAgICAgICAgIGNjLmxvZyhkb3VibGVOb2RlKTtcblxuICAgICAgICAgICAgZG91YmxlTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgZG91YmxlTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG5cbiAgICAgICAgICAgIHJldHVybiBkb3VibGVOb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIl19