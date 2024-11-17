import Stick from "./Stick";
import PlayerFlip from "./PlayerFlip";
import Platform from "./Platform";
import StickSpawner from "./Spawner/StickSpawner";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {
    private static readonly PLAYER_REACHED: string = 'playerReached';

    private readonly PLAYER_FALL: string = 'playerFall';
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

    @property(cc.Float)
    private speed: number = 100;

    private stick: Stick = null;
    private previousStick: Stick = null;

    private boxCollider: cc.BoxCollider = null;
    private canMove: boolean = true;

    private targetPosition: cc.Vec3 = null;
    private moveCompleteCallback: Function = null;

    protected onLoad() {
        this.boxCollider = this.getComponent(cc.BoxCollider);
        this.boxCollider.node.on(this.COLLISION_ENTER, this.onCollisionEnter, this);
    }

    protected update(dt: number) {
        if (this.targetPosition && this.canMove) {
            this.handleMovement(dt);
        }
    }

    private handleMovement(dt: number) {
        this.playerFlip.enableFlip();
        const direction = this.calculateDirectionToTarget();
        const step = this.calculateStep(direction, dt);
        const distanceToTarget = this.calculateDistanceToTarget();

        if (this.isTargetReached(step, distanceToTarget)) {
            this.finalizeMovement();
        } else {
            this.moveTowardsTarget(step);
        }
    }

    public reset() {
        this.spawnStick();
        this.playerFlip.reset();
        this.node.active = true;
        this.canMove = true;
        this.targetPosition = null;
    }

    public moveToEndOfStick(xPos: number) {
        const targetPosition = cc.v3(xPos, this.node.position.y);
        this.setMovement(targetPosition, () => {
            this.initiateFall();
        });
    }

    public moveToEndOfPlatform(xPos: number) {
        const worldTargetPosition = cc.v3(xPos + this.offsetPlatformX, this.node.position.y);
        const localTargetPosition = this.node.parent.convertToNodeSpaceAR(worldTargetPosition);
        const endPlatformPos = cc.v3(localTargetPosition.x + this.offsetPlatformX, this.node.position.y);

        const distanceTravelled = Math.abs(this.node.position.x - endPlatformPos.x);
        this.setMovement(endPlatformPos, () => {
            this.onReachEndOfPlatform(distanceTravelled);
            this.playerFlip.disableFlip();
        });
    }

    protected onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.node.getComponent(Platform)) {
            this.canMove = false;
            this.initiateFall();
        }
    }

    private spawnStick() {
        const position = cc.v2(this.node.position.x + this.offsetStick.x, this.node.position.y + this.offsetStick.y);
        this.stick = this.stickSpawner.spawnNode(position).getComponent(Stick);
        this.stick.node.parent = this.node.parent;
        this.stick.reset();
    }

    private onReachEndOfPlatform(distanceTravelled: number) {
        if (!this.canMove) return;

        if (this.previousStick) {
            this.stickSpawner.deactivateNode(this.previousStick.node);
        }

        this.previousStick = this.stick;
        cc.systemEvent.emit(PlayerController.PLAYER_REACHED, distanceTravelled);
    }

    private setMovement(targetPosition: cc.Vec3, onComplete: Function) {
        this.targetPosition = targetPosition;
        this.moveCompleteCallback = onComplete;
    }

    private initiateFall() {
        cc.systemEvent.emit(this.PLAYER_FALL);
        this.playerFlip.disableFlip();
        this.canMove = false;
        cc.tween(this.node)
            .to(this.fallDuration, { position: cc.v3(this.node.x, -2000) })
            .start();

        this.stick.initiateFall();
    }

    private calculateDirectionToTarget(): cc.Vec3 {
        return this.targetPosition.sub(this.node.position).normalize();
    }

    private calculateStep(direction: cc.Vec3, dt: number): cc.Vec3 {
        return direction.mul(this.speed * dt);
    }

    private calculateDistanceToTarget(): number {
        return this.node.position.sub(this.targetPosition).mag();
    }

    private isTargetReached(step: cc.Vec3, distanceToTarget: number): boolean {
        return step.mag() >= distanceToTarget;
    }

    private finalizeMovement() {
        this.node.setPosition(this.targetPosition);
        this.targetPosition = null;

        if (this.moveCompleteCallback) {
            this.moveCompleteCallback();
        }
    }

    private moveTowardsTarget(step: cc.Vec3) {
        this.node.setPosition(this.node.position.add(step));
    }
}