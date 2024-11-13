const { ccclass, property } = cc._decorator;

@ccclass
export default class GameController extends cc.Component {
    @property(cc.Node)
    player: cc.Node = null;

    @property(cc.Node)
    stick: cc.Node = null;

    @property(cc.Node)
    platformContainer: cc.Node = null;

    private isGameActive: boolean = false;

    start() {
        this.initGame();
    }

    initGame() {
        this.isGameActive = true;
        this.resetGame();
    }

    resetGame() {
        this.player.setPosition(cc.v2(-200, 0));
        this.stick.setScale(1, 0);
        this.spawnPlatforms();
    }

    spawnPlatforms() {
        // Примерный спавн платформ
        this.platformContainer.removeAllChildren();
        for (let i = 0; i < 5; i++) {
            const newPlatform = new cc.Node("Platform");
            newPlatform.addComponent(cc.Sprite);
            newPlatform.setPosition(cc.v2(200 * i, -200));
            this.platformContainer.addChild(newPlatform);
        }
    }

    endGame() {
        this.isGameActive = false;
        cc.log('Game Over');
    }

    update(dt: number) {
        if (!this.isGameActive) return;

        // Игровая логика обновлений
    }
}
