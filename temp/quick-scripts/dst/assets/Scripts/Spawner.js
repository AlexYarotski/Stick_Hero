
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Spawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3b0cixdF5MVabBaRW6D38O', 'Spawner');
// Scripts/Spawner.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3Bhd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsMkJBQVk7SUFBbEQ7UUFBQSxxRUF1QkM7UUFyQmEsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQWMsRUFBRSxDQUFDOztJQW1CbkMsQ0FBQztJQWpCYSxpQ0FBZSxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDekIsT0FBTyxVQUFVLENBQUM7U0FDckI7UUFDRCxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU0sZ0NBQWMsR0FBckIsVUFBc0IsSUFBYTtRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBbEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ2U7SUFGakIsT0FBTztRQUQ1QixPQUFPO09BQ2MsT0FBTyxDQXVCNUI7SUFBRCxjQUFDO0NBdkJELEFBdUJDLENBdkJxQyxFQUFFLENBQUMsU0FBUyxHQXVCakQ7QUF2QnFCLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTcGF3bmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByb3RlY3RlZCBwcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgcG9vbDogY2MuTm9kZVtdID0gW107XG5cbiAgICBwcm90ZWN0ZWQgZ2V0T3JDcmVhdGVOb2RlKCk6IGNjLk5vZGUge1xuICAgICAgICBpZiAodGhpcy5wb29sLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHJldXNlZE5vZGUgPSB0aGlzLnBvb2wucG9wKCk7XG4gICAgICAgICAgICByZXVzZWROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcmV1c2VkTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWIpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Tm9kZSk7XG4gICAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWFjdGl2YXRlTm9kZShub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9vbC5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBzcGF3bk5vZGUocG9zaXRpb246IGNjLlZlYzIpOiBjYy5Ob2RlO1xufVxuIl19