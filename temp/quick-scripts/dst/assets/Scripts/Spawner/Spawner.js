
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Spawner/Spawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3b0cixdF5MVabBaRW6D38O', 'Spawner');
// Scripts/Spawner/Spawner.ts

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
exports.Spawner = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Spawner = /** @class */ (function (_super) {
    __extends(Spawner, _super);
    function Spawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefab = null;
        _this.pool = [];
        return _this;
    }
    Spawner.prototype.getOrCreateNode = function () {
        if (this.pool.length > 0) {
            var reusedNode = this.pool.pop();
            reusedNode.active = true;
            return reusedNode;
        }
        var newNode = cc.instantiate(this.prefab);
        this.node.addChild(newNode);
        return newNode;
    };
    Spawner.prototype.deactivateNode = function (node) {
        node.active = false;
        this.pool.push(node);
    };
    __decorate([
        property(cc.Prefab)
    ], Spawner.prototype, "prefab", void 0);
    Spawner = __decorate([
        ccclass
    ], Spawner);
    return Spawner;
}(cc.Component));
exports.Spawner = Spawner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3Bhd25lclxcU3Bhd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsMkJBQVk7SUFBbEQ7UUFBQSxxRUEwQkM7UUF4QmEsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQWMsRUFBRSxDQUFDOztJQXNCbkMsQ0FBQztJQXBCYSxpQ0FBZSxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFekIsT0FBTyxVQUFVLENBQUM7U0FDckI7UUFFRCxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1QixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU0sZ0NBQWMsR0FBckIsVUFBc0IsSUFBYTtRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBckJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ2U7SUFGakIsT0FBTztRQUQ1QixPQUFPO09BQ2MsT0FBTyxDQTBCNUI7SUFBRCxjQUFDO0NBMUJELEFBMEJDLENBMUJxQyxFQUFFLENBQUMsU0FBUyxHQTBCakQ7QUExQnFCLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvdWJsZSBmcm9tIFwiLi4vRG91YmxlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3Bhd25lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcm90ZWN0ZWQgcHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIHBvb2w6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgcHJvdGVjdGVkIGdldE9yQ3JlYXRlTm9kZSgpOiBjYy5Ob2RlIHtcbiAgICAgICAgaWYgKHRoaXMucG9vbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCByZXVzZWROb2RlID0gdGhpcy5wb29sLnBvcCgpO1xuICAgICAgICAgICAgcmV1c2VkTm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gcmV1c2VkTm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdOb2RlKTtcblxuICAgICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVhY3RpdmF0ZU5vZGUobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvb2wucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3Qgc3Bhd25Ob2RlKC4uLnBvc2l0aW9uczogYW55W10pOiBjYy5Ob2RlO1xufVxuIl19