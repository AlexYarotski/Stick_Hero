"use strict";
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