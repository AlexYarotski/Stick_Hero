import PlayerController from "./PlayerController";
import PlatformSpawner from "./Spawner/PlatformSpawner";
import StickSpawner from "./Spawner/StickSpawner";
import DoubleSpawner from "./Spawner/DoubleSpawner";
import Platform from "./Platform";


const { ccclass, property } = cc._decorator;

@ccclass
export default class GameController extends cc.Component {
    private readonly Stick_Fallen: string = 'stickFallen';
    private readonly MOVEMENT_COMPLETE: string = 'movementComplete';
    private readonly MAIN_CLICKED: string = 'mainClicked';
    private readonly RESTART_CLICKED: string = 'restartClicked';

    private readonly startPlatformPos: cc.Vec2 = new cc.Vec2(-105, -1100);

    @property(PlayerController)
    private player: PlayerController = null;

    @property(PlatformSpawner)
    private platformSpawner: PlatformSpawner = null;

    @property(DoubleSpawner)
    private doubleSpawner: DoubleSpawner = null;

    private currentStick: cc.Node = null;
    private currentPlatform: cc.Node = null;
    private previousPlatform: cc.Node = null;
    private playerPos: cc.Vec2;

    protected onLoad() {
        cc.systemEvent.on(this.Stick_Fallen, this.onStickFallen, this);
        cc.systemEvent.on(this.MOVEMENT_COMPLETE, this.onMovementComplete, this);
        cc.systemEvent.on(this.MAIN_CLICKED, this.resetPlayer, this);
        cc.systemEvent.on(this.RESTART_CLICKED, this.resetPlayer, this);
    }

    protected onDestroy() {
        cc.systemEvent.off(this.Stick_Fallen, this.onStickFallen, this);
        cc.systemEvent.off(this.MOVEMENT_COMPLETE, this.onMovementComplete, this);
        cc.systemEvent.off(this.MAIN_CLICKED, this.resetPlayer, this);
        cc.systemEvent.off(this.RESTART_CLICKED, this.resetPlayer, this);
    }

    protected start() {
        this.previousPlatform = this.platformSpawner.spawnNode(cc.v2(this.startPlatformPos));
    }

    private resetPlayer() {
        this.player.node.setPosition(this.playerPos);

        this.player.reset();
    }

    private onStickFallen(stick: cc.Node) {
        this.currentStick = stick;
        this.playerPos = cc.v2(this.player.node.position.x, this.player.node.position.y);

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
        if (!this.currentPlatform) {
            this.player.reset();
            this.currentPlatform = this.platformSpawner.spawnNode();
        } else {
            if (this.previousPlatform) {
                this.platformSpawner.deactivateNode(this.previousPlatform);
            }

            this.previousPlatform = this.currentPlatform;
            this.currentPlatform = this.platformSpawner.spawnNode();

            this.player.reset();
        }

        const previousWorldPos = this.previousPlatform?.parent.convertToWorldSpaceAR(this.previousPlatform.position);
        const currentWorldPos = this.currentPlatform.parent.convertToWorldSpaceAR(this.currentPlatform.position);

        this.doubleSpawner.spawnNode(cc.v3(previousWorldPos.x + this.previousPlatform.width), currentWorldPos);
    }
}
