
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataCounter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9a567aUvxMya5kS//W/Qom', 'DataCounter');
// Scripts/DataCounter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataCounter = /** @class */ (function () {
    function DataCounter() {
    }
    DataCounter.getScore = function () {
        var scoreString = cc.sys.localStorage.getItem(this.SCORE_KEY);
        return scoreString ? parseInt(scoreString) : 0;
    };
    DataCounter.setScore = function (score) {
        cc.sys.localStorage.setItem(this.SCORE_KEY, score.toString());
    };
    DataCounter.getBestScore = function () {
        var scoreString = cc.sys.localStorage.getItem(this.BEST_SCORE_KEY);
        return scoreString ? parseInt(scoreString) : 0;
    };
    DataCounter.setBestScore = function (score) {
        cc.sys.localStorage.setItem(this.BEST_SCORE_KEY, score.toString());
    };
    DataCounter.getDoubleCount = function () {
        var doubleString = cc.sys.localStorage.getItem(this.DOUBLE_KEY);
        return doubleString ? parseInt(doubleString) : 0;
    };
    DataCounter.setDoubleCount = function (double) {
        cc.sys.localStorage.setItem(this.DOUBLE_KEY, double.toString());
    };
    DataCounter.SCORE_KEY = 'score';
    DataCounter.BEST_SCORE_KEY = 'best_score';
    DataCounter.DOUBLE_KEY = 'double';
    return DataCounter;
}());
exports.default = DataCounter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YUNvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBOEJBLENBQUM7SUF6QmlCLG9CQUFRLEdBQXRCO1FBQ0ksSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRSxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVhLG9CQUFRLEdBQXRCLFVBQXVCLEtBQWE7UUFDaEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVhLHdCQUFZLEdBQTFCO1FBQ0ksSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRSxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVhLHdCQUFZLEdBQTFCLFVBQTJCLEtBQWE7UUFDcEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVhLDBCQUFjLEdBQTVCO1FBQ0ksSUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVhLDBCQUFjLEdBQTVCLFVBQTZCLE1BQWM7UUFDM0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBNUJ6QyxxQkFBUyxHQUFXLE9BQU8sQ0FBQztJQUM1QiwwQkFBYyxHQUFXLFlBQVksQ0FBQztJQUN0QyxzQkFBVSxHQUFXLFFBQVEsQ0FBQztJQTJCMUQsa0JBQUM7Q0E5QkQsQUE4QkMsSUFBQTtrQkE5Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhQ291bnRlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTQ09SRV9LRVk6IHN0cmluZyA9ICdzY29yZSc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBCRVNUX1NDT1JFX0tFWTogc3RyaW5nID0gJ2Jlc3Rfc2NvcmUnO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRE9VQkxFX0tFWTogc3RyaW5nID0gJ2RvdWJsZSc7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRTY29yZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHNjb3JlU3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuU0NPUkVfS0VZKTtcclxuICAgICAgICByZXR1cm4gc2NvcmVTdHJpbmcgPyBwYXJzZUludChzY29yZVN0cmluZykgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U2NvcmUoc2NvcmU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLlNDT1JFX0tFWSwgc2NvcmUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRCZXN0U2NvcmUoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBzY29yZVN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLkJFU1RfU0NPUkVfS0VZKTtcclxuICAgICAgICByZXR1cm4gc2NvcmVTdHJpbmcgPyBwYXJzZUludChzY29yZVN0cmluZykgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0QmVzdFNjb3JlKHNjb3JlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5CRVNUX1NDT1JFX0tFWSwgc2NvcmUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXREb3VibGVDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGRvdWJsZVN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLkRPVUJMRV9LRVkpO1xyXG4gICAgICAgIHJldHVybiBkb3VibGVTdHJpbmcgPyBwYXJzZUludChkb3VibGVTdHJpbmcpIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldERvdWJsZUNvdW50KGRvdWJsZTogbnVtYmVyKXtcclxuICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLkRPVUJMRV9LRVksIGRvdWJsZS50b1N0cmluZygpKTt9XHJcbn1cclxuIl19