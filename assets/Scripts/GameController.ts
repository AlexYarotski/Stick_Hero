import StickManager from "./StickManager";

const { ccclass, property } = cc._decorator;

import PlayerController from "./PlayerController";
import PlatformSpawner from "./PlatformSpawner";

@ccclass
export default class GameController extends cc.Component {
    private readonly Stick_Fallen: string = 'stickFallen';
    private readonly MOVEMENT_COMPLETE: string = 'movementComplete';

    private readonly startPlayerPos: cc.Vec2 = new cc.Vec2(-510, -310);
    private readonly startPlatformPos: cc.Vec2 = new cc.Vec2(-553, -1100);

    @property(PlayerController)
    player: PlayerController = null;

    @property(PlatformSpawner)
    platformSpawner: PlatformSpawner = null;

    private currentStick: cc.Node = null;
    private currentPlatform: cc.Node = null;
    private previousPlatform: cc.Node = null;

    protected onLoad() {
        cc.systemEvent.on(this.Stick_Fallen, this.onStickFallen, this);
        cc.systemEvent.on(this.MOVEMENT_COMPLETE, this.onMovementComplete, this);
    }

    protected start() {
        this.initGame();
    }

    protected onDestroy() {
        cc.systemEvent.off(this.Stick_Fallen, this.onStickFallen, this);
        cc.systemEvent.off(this.MOVEMENT_COMPLETE, this.onMovementComplete, this);
    }

    private initGame() {
        this.resetGame();
    }

    private resetGame() {
        this.player.node.setPosition(this.startPlayerPos);
        this.player.reset();

        this.previousPlatform = this.platformSpawner.spawnPlatform(cc.v2(this.startPlatformPos));
        this.currentPlatform = this.platformSpawner.spawnPlatform();
    }

    private onStickFallen(stick: cc.Node) {
        this.currentStick = stick;

        const stickEndPosX = this.currentStick.x + this.currentStick.height - this.player.node.width / 2;
        const stickWorldEndPos = this.currentStick.parent.convertToWorldSpaceAR(
            cc.v2(this.currentStick.x + this.currentStick.height, this.currentStick.y)
        );

        const platformWorldPos = this.currentPlatform.parent.convertToWorldSpaceAR(this.currentPlatform.getPosition());
        const platformStartX = platformWorldPos.x;
        const platformEndX = platformWorldPos.x + this.currentPlatform.width;

        if (stickWorldEndPos.x >= platformStartX && stickWorldEndPos.x <= platformEndX) {
            this.player.moveToEndOfPlatform(platformEndX);
        } else {
            this.player.moveToEndOfStick(stickEndPosX);
        }
    }

    private onMovementComplete() {
        this.player.reset();
        if (this.previousPlatform) {
            this.platformSpawner.deactivatePlatform(this.previousPlatform);
        }
        this.previousPlatform = this.currentPlatform;
        this.currentPlatform = this.platformSpawner.spawnPlatform();
    }

    private endGame() {
        cc.log('Game Over');
    }
}
