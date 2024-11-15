import StickManager from "./StickManager";

const { ccclass, property } = cc._decorator;

import PlayerController from "./PlayerController";
import PlatformSpawner from "./PlatformSpawner";

@ccclass
export default class GameController extends cc.Component {
    private readonly Stick_Fallen: string = 'stickFallen';

    private readonly startPlayerPos: cc.Vec2 = new cc.Vec2(-510, -310);
    private readonly startPlatformPos: cc.Vec2 = new cc.Vec2(-553, -1100);

    @property(PlayerController)
    player: PlayerController = null;

    @property(PlatformSpawner)
    platformSpawner: PlatformSpawner = null;

    private currentStick: cc.Node = null;
    private platforms: cc.Node[] = [];

    protected start() {
        this.initGame();
        cc.systemEvent.on(this.Stick_Fallen, this.onStickFallen, this);
    }

    private initGame() {
        this.resetGame();
    }

    private resetGame() {
        this.player.node.setPosition(this.startPlayerPos);
        this.player.reset();

        this.clearPlatforms();

        const initialPlatform = this.platformSpawner.spawnPlatform(cc.v2(this.startPlatformPos));
        this.platforms.push(initialPlatform);

        const nextPlatform = this.platformSpawner.spawnPlatform();
        this.platforms.push(nextPlatform);
    }

    private clearPlatforms() {
        this.platforms.forEach(platform => platform.destroy());
        this.platforms = [];
    }

    private onStickFallen(stick: cc.Node) {
        this.currentStick = stick;

        const stickEndPosX = this.currentStick.x + this.currentStick.height - this.player.node.width / 2;

        const stickWorldEndPos = this.currentStick.parent.convertToWorldSpaceAR(
            cc.v2(this.currentStick.x + this.currentStick.height, this.currentStick.y)
        );

        const targetPlatform = this.getTargetPlatform(cc.v2(this.player.node.x, this.player.node.y));

        const platformWorldPos = targetPlatform.parent.convertToWorldSpaceAR(targetPlatform.getPosition());

        const platformStartX = platformWorldPos.x;
        const platformEndX = platformWorldPos.x + targetPlatform.width;

        if (stickWorldEndPos.x >= platformStartX && stickWorldEndPos.x <= platformEndX) {
            this.player.moveToEndOfPlatform(platformEndX);
        } else {
            this.player.moveToEndOfStick(stickEndPosX);
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
        cc.log('Game Over');
    }
}
