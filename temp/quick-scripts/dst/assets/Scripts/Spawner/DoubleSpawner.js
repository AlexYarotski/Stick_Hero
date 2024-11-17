
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3Bhd25lclxcRG91YmxlU3Bhd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBb0M7QUFFOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQU87SUFBbEQ7UUFBQSxxRUFnQ0M7UUEvQm9CLFVBQUksR0FBVyxDQUFDLEdBQUcsQ0FBQztRQUc3Qix5QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFFaEMsYUFBTyxHQUFXLENBQUMsQ0FBQzs7SUEwQmhDLENBQUM7SUF4QlUsaUNBQVMsR0FBaEIsVUFBaUIsUUFBaUIsRUFBRSxNQUFlO1FBQy9DLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFFakIsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRTFDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUUzRCxJQUFNLE1BQU0sR0FBRyxhQUFhLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDbEQsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQzlDLElBQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFFekQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTNDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUU5QixPQUFPLFVBQVUsQ0FBQztTQUNyQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUEzQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4REFDcUI7SUFKdkIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQWdDakM7SUFBRCxvQkFBQztDQWhDRCxBQWdDQyxDQWhDMEMsaUJBQU8sR0FnQ2pEO2tCQWhDb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwYXduZXIgfSBmcm9tIFwiLi9TcGF3bmVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG91YmxlU3Bhd25lciBleHRlbmRzIFNwYXduZXIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBwb3NZOiBudW1iZXIgPSAtMzUwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIHByaXZhdGUgYXBwZWFyYW5jZUZyZXF1ZW5jeTogbnVtYmVyID0gMztcclxuXHJcbiAgICBwcml2YXRlIGNvdW50ZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIHNwYXduTm9kZShzdGFydFBvczogY2MuVmVjMywgZW5kUG9zOiBjYy5WZWMzKTogY2MuTm9kZSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+PSB0aGlzLmFwcGVhcmFuY2VGcmVxdWVuY3kpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRvdWJsZU5vZGUgPSB0aGlzLmdldE9yQ3JlYXRlTm9kZSgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbG9jYWxTdGFydFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzdGFydFBvcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsRW5kUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGVuZFBvcyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdGFydFggPSBsb2NhbFN0YXJ0UG9zLnggKyBkb3VibGVOb2RlLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBlbmRYID0gbG9jYWxFbmRQb3MueCAtIGRvdWJsZU5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVggPSBzdGFydFggKyBNYXRoLnJhbmRvbSgpICogKGVuZFggLSBzdGFydFgpO1xyXG5cclxuICAgICAgICAgICAgZG91YmxlTm9kZS5zZXRQb3NpdGlvbihyYW5kb21YLCB0aGlzLnBvc1kpO1xyXG5cclxuICAgICAgICAgICAgZG91YmxlTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkb3VibGVOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkb3VibGVOb2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuIl19