
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/StickSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef9a2MKDChEVrXz4bQWP6gp', 'StickSpawner');
// Scripts/StickSpawner.ts

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
var StickSpawner = /** @class */ (function (_super) {
    __extends(StickSpawner, _super);
    function StickSpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stickAppearTime = 0.5;
        return _this;
    }
    StickSpawner.prototype.spawnNode = function (position) {
        var newStick = this.getOrCreateNode();
        newStick.setPosition(position);
        newStick.active = true;
        return newStick;
    };
    __decorate([
        property
    ], StickSpawner.prototype, "stickAppearTime", void 0);
    StickSpawner = __decorate([
        ccclass
    ], StickSpawner);
    return StickSpawner;
}(Spawner_1.Spawner));
exports.default = StickSpawner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3RpY2tTcGF3bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFvQztBQUc5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBTztJQUFqRDtRQUFBLHFFQVVDO1FBUlcscUJBQWUsR0FBVyxHQUFHLENBQUM7O0lBUTFDLENBQUM7SUFOVSxnQ0FBUyxHQUFoQixVQUFpQixRQUFpQjtRQUM5QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN2QixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBUEQ7UUFEQyxRQUFRO3lEQUM2QjtJQUZyQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBVWhDO0lBQUQsbUJBQUM7Q0FWRCxBQVVDLENBVnlDLGlCQUFPLEdBVWhEO2tCQVZvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Bhd25lciB9IGZyb20gXCIuL1NwYXduZXJcIjtcbmltcG9ydCBTdGlja01hbmFnZXIgZnJvbSBcIi4vU3RpY2tNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGlja1NwYXduZXIgZXh0ZW5kcyBTcGF3bmVyIHtcbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIHN0aWNrQXBwZWFyVGltZTogbnVtYmVyID0gMC41O1xuXG4gICAgcHVibGljIHNwYXduTm9kZShwb3NpdGlvbjogY2MuVmVjMik6IGNjLk5vZGUge1xuICAgICAgICBjb25zdCBuZXdTdGljayA9IHRoaXMuZ2V0T3JDcmVhdGVOb2RlKCk7XG4gICAgICAgIG5ld1N0aWNrLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgbmV3U3RpY2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIG5ld1N0aWNrO1xuICAgIH1cbn1cbiJdfQ==