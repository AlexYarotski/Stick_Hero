const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {
    private readonly offsetPlatformX: number = -40;
    private readonly offsetStickX: number = 40;

    @property(cc.Prefab)
    stickPrefab: cc.Prefab = null;

    @property(Number)
    moveDuration: number = 1;

    @property(Number)
    fallDuration: number = 0.2;

    private stick: cc.Node = null;

    public reset() {
        this.startCreatingStick();
    }

    private startCreatingStick() {
        const position = cc.v2(this.node.position.x + this.offsetStickX, this.node.position.y );

        this.stick = cc.instantiate(this.stickPrefab);
        this.stick.parent = this.node.parent;
        this.stick.setPosition(position);
    }

    public moveToEndOfStick(xPos: number) {
        const targetPosition = cc.v3(xPos, this.node.position.y);
        this.moveTowards(targetPosition, () => {
            this.initiateFall();
        });
    }

    public moveToEndOfPlatform(xPos: number) {
        const targetPosition = cc.v3(xPos + this.offsetPlatformX, this.node.position.y);
        this.moveTowards(targetPosition, () => {
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
