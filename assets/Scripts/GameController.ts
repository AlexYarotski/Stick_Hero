import PlayerController from "./PlayerController";
import PlatformSpawner from "./PlatformSpawner";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameController extends cc.Component {
    private startPlayerPos: cc.Vec2 = new cc.Vec2(-600, -233);
    private startPlatformPos: cc.Vec2 = new cc.Vec2(-520, -708);

    @property(PlayerController)
    player: PlayerController = null;

    @property(PlatformSpawner)
    platformSpawner: PlatformSpawner = null;

    private currentStick: cc.Node = null;
    private platforms: cc.Node[] = [];

    protected start() {
        this.initGame();
    }

    private initGame() {
        this.resetGame();
    }

    private resetGame() {
        this.player.node.setPosition(this.startPlayerPos);
        this.clearPlatforms();

        const initialPlatform = this.platformSpawner.spawnPlatform(this.startPlatformPos);
        this.platforms.push(initialPlatform);

        const nextPlatform = this.platformSpawner.spawnPlatform();
        this.platforms.push(nextPlatform);

        this.player.enableStickCreation();
    }

    private clearPlatforms() {
        this.platforms.forEach(platform => platform.destroy());
        this.platforms = [];
    }

    private onStickFallen(stickNode: cc.Node) {
        this.currentStick = stickNode;
        this.player.moveToEndOfStick(stickNode, this.onPlayerReachedEnd.bind(this));
    }

    private onPlayerReachedEnd() {
        const newPlatform = this.platformSpawner.spawnPlatform(this.currentStick.getPosition());
        this.platforms.push(newPlatform);
        this.player.enableStickCreation();
    }

    private endGame() {
        cc.log('Game Over');
    }
}
