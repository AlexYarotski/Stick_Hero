
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Double');
require('./assets/Scripts/GameController');
require('./assets/Scripts/GameMover');
require('./assets/Scripts/Platform');
require('./assets/Scripts/PlayerController');
require('./assets/Scripts/PlayerFlip');
require('./assets/Scripts/ScoreCounter');
require('./assets/Scripts/Spawner/DoubleSpawner');
require('./assets/Scripts/Spawner/PlatformSpawner');
require('./assets/Scripts/Spawner/Spawner');
require('./assets/Scripts/Spawner/StickSpawner');
require('./assets/Scripts/Stick');
require('./assets/Scripts/SystemManager');
require('./assets/Scripts/TouchController');
require('./assets/Scripts/UIManager');

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