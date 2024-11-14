const { ccclass, property } = cc._decorator;

import PlayerController from "./PlayerController";
import PlatformSpawner from "./PlatformSpawner";

@ccclass
export default class GameController extends cc.Component {
    private readonly startPlayerPos: cc.Vec2 = new cc.Vec2(-503, -233);
    private readonly startPlatformPos: cc.Vec2 = new cc.Vec2(-500, -708);

    @property(PlayerController)
    player: PlayerController = null;

    @property(PlatformSpawner)
    platformSpawner: PlatformSpawner = null;

    private isGameActive: boolean = false;
    private currentStick: cc.Node = null;
    private platforms: cc.Node[] = [];

    protected start() {
        this.initGame();
        cc.systemEvent.on('stickFallen', this.onStickFallen, this);  // Подписываемся на событие падения стика
    }

    private initGame() {
        this.isGameActive = true;
        this.resetGame();
    }

    private resetGame() {
        this.player.node.setPosition(this.startPlayerPos);
        this.clearPlatforms();

        const initialPlatform = this.platformSpawner.spawnPlatform(cc.v2(this.startPlatformPos));
        this.platforms.push(initialPlatform);

        const nextPlatform = this.platformSpawner.spawnPlatform();
        this.platforms.push(nextPlatform);

        this.player.reset();
    }

    private clearPlatforms() {
        this.platforms.forEach(platform => platform.destroy());
        this.platforms = [];
    }

    private onStickFallen(stickNode: cc.Node) {
        this.currentStick = stickNode;
        const playerPosition = this.player.node.getPosition();
        const targetPlatform = this.getTargetPlatform(playerPosition);

        const stickEndX = this.currentStick.x + this.currentStick.width;
        const platformStartX = targetPlatform.x - targetPlatform.width / 2;
        const platformEndX = targetPlatform.x + targetPlatform.width / 2;

        if (stickEndX >= platformStartX && stickEndX <= platformEndX) {
            this.player.moveToEndOfPlatform(targetPlatform);
        } else {
            this.player.moveToEndOfStick(this.currentStick);
        }
    }

    private getTargetPlatform(playerPosition: cc.Vec2): cc.Node {
        for (const platform of this.platforms) {
            if (platform.x > playerPosition.x) {
                return platform;
            }
        }
        return null;
    }

    private spawnPlatforms() {
        const previousPlatform = this.platforms[this.platforms.length - 1];
        const newPlatform = this.platformSpawner.spawnPlatform(previousPlatform.getPosition());
        this.platforms.push(newPlatform);
    }

    private endGame() {
        this.isGameActive = false;
        cc.log('Game Over');
    }
}
