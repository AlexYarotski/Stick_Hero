import StickManager from "./StickManager";

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

    private stick: StickManager = null;

    public reset() {
        this.spawnStick();
    }

    private spawnStick() {
        const position = cc.v2(this.node.position.x + this.offsetStick.x, this.node.position.y + this.offsetStick.y);

        if (!this.stick) {
            this.stick = cc.instantiate(this.stickPrefab).getComponent(StickManager);
            this.stick.node.parent = this.node.parent;
        }

        this.stick.reset();
        this.stick.node.setPosition(position);
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

        const distanceTravelled = Math.abs(this.node.position.x - endPlatformPos.x); // Расчет пройденного расстояния

        this.moveTowards(endPlatformPos, () => {
            cc.systemEvent.emit(PlayerController.PLAYER_REACHED_EVENT, distanceTravelled); // Передаем расстояние как параметр
        });
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
    }
}
