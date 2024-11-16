import Stick from "./Stick";
import PlayerFlip from "./PlayerFlip";
import Platform from "./Platform";
import StickSpawner from "./Spawner/StickSpawner";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {
    private static readonly PLAYER_REACHED: string = 'playerReached';

    private readonly  PLAYER_FALL: string = 'playerFall';
    private readonly COLLISION_ENTER: string = 'collision-enter';

    private readonly offsetStick: cc.Vec2 = cc.v2(80, 10);

    public readonly offsetPlatformX: number = -50;

    @property(cc.Prefab)
    stickPrefab: cc.Prefab = null;

    @property(cc.Float)
    moveDuration: number = 1;
    @property(cc.Float)
    fallDuration: number = 0.2;

    @property(StickSpawner)
    private stickSpawner: StickSpawner = null;

    @property(PlayerFlip)
    private playerFlip: PlayerFlip = null;

    private stick: Stick = null;
    private previousStick: Stick = null;

    private boxCollider: cc.BoxCollider = null;

    protected onLoad(){
        this.boxCollider = this.getComponent(cc.BoxCollider);

        this.boxCollider.node.on(this.COLLISION_ENTER, this.onCollisionEnter, this);
    }

    public reset() {
        this.spawnStick();

        this.node.active = true;
    }

    protected onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.node.getComponent(Platform)) {
            this.initiateFall();
        }
    }

    private spawnStick() {
        const position = cc.v2(this.node.position.x + this.offsetStick.x, this.node.position.y + this.offsetStick.y);
        this.stick = this.stickSpawner.spawnNode(position).getComponent(Stick);
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

        cc.systemEvent.emit(PlayerController.PLAYER_REACHED, distanceTravelled);
    }

    private moveTowards(targetPosition: cc.Vec3, onComplete: Function) {
        this.playerFlip.disableFlip();

        cc.tween(this.node)
            .to(this.moveDuration, { position: targetPosition }, { easing: 'sineInOut' })
            .call(() => {
                if (onComplete) onComplete();
                this.playerFlip.enableFlip();
            })
            .start();
    }

    private initiateFall() {
        cc.systemEvent.emit(this.PLAYER_FALL)

        cc.tween(this.node)
            .to(this.fallDuration, { position: cc.v3(this.node.x, -2000) })
            .start();

        this.stick.initiateFall();
    }
}
