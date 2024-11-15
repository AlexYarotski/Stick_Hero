import StickManager from "./StickManager";
import StickSpawner from "./StickSpawner";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {
    private static readonly PLAYER_REACHED_EVENT = 'playerReached';

    private readonly offsetPlatformX: number = -50;
    private readonly offsetStick: cc.Vec2 = cc.v2(80, 10);

    @property(cc.Prefab)
    stickPrefab: cc.Prefab = null;

    @property(cc.Float)
    moveDuration: number = 1;
    @property(cc.Float)
    fallDuration: number = 0.2;

    @property(StickSpawner)
    private stickSpawner: StickSpawner = null;

    private stick: StickManager = null;
    private previousStick: StickManager = null;

    public reset() {
        this.spawnStick();
    }

    private spawnStick() {
        const position = cc.v2(this.node.position.x + this.offsetStick.x, this.node.position.y + this.offsetStick.y);
        this.stick = this.stickSpawner.spawnNode(position).getComponent(StickManager);
        this.stick.node.parent = this.node.parent;
        this.stick.reset();
    }

    public moveToEndOfStick(xPos: number) {
        const targetPosition = cc.v3(xPos, this.node.position.y);
        this.moveTowards(targetPosition, () => {
            this.initiateFall();
        });
    }

    public moveToEndOfPlatform(xPos: number) {
        const worldTargetPosition = cc.v3(xPos + this.offsetPlatformX, this.node.position.y);
        const localTargetPosition = this.node.parent.convertToNodeSpaceAR(worldTargetPosition);
        const endPlatformPos = cc.v3(localTargetPosition.x + this.offsetPlatformX, this.node.position.y);

        const distanceTravelled = Math.abs(this.node.position.x - endPlatformPos.x);

        this.moveTowards(endPlatformPos, () => {
            this.onReachEndOfPlatform(distanceTravelled);
        });
    }

    private onReachEndOfPlatform(distanceTravelled: number) {
        if (this.previousStick) {
            this.stickSpawner.deactivateNode(this.previousStick.node);
        }

        this.previousStick = this.stick;

        cc.systemEvent.emit(PlayerController.PLAYER_REACHED_EVENT, distanceTravelled);
    }

    private moveTowards(targetPosition: cc.Vec3, onComplete: Function) {
        cc.tween(this.node)
            .to(this.moveDuration, { position: targetPosition }, { easing: 'sineInOut' })
            .call(() => {
                if (onComplete) onComplete();
            })
            .start();
    }

    private initiateFall() {
        cc.tween(this.node)
            .to(this.fallDuration, { position: cc.v3(this.node.x, -1080) })
            .start();

        this.stick.initiateFall(this.fallDuration);
    }
}
