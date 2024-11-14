const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {
    private readonly offsetStick: cc.Vec2 = new cc.Vec2(40, -76);

    @property(cc.Prefab)
    stickPrefab: cc.Prefab = null;

    private stick: cc.Node = null;

    public reset() {
        this.startCreatingStick();
    }

    private startCreatingStick() {
        const position = cc.v2(this.node.position.x + this.offsetStick.x,
            this.node.position.y + this.offsetStick.y);

        this.stick = cc.instantiate(this.stickPrefab);
        this.stick.parent = this.node.parent;
        this.stick.setPosition(position);
    }

    public moveToEndOfStick(stickNode: cc.Node) {
        const targetPosition = stickNode.position.add(cc.v3(stickNode.width, 0, 0));
        this.moveTowards(targetPosition, () => {
            this.initiateFall();
        });
    }

    public moveToEndOfPlatform(platformNode: cc.Node) {
        const targetPosition = platformNode.position.add(cc.v3(platformNode.width / 2, 0, 0));
        this.moveTowards(targetPosition, () => {
        });
    }

    private moveTowards(targetPosition: cc.Vec3, onComplete: Function) {
        cc.tween(this.node)
            .to(1, { position: targetPosition }, { easing: 'sineInOut' })
            .start();
    }

    private initiateFall() {
        cc.tween(this.node)
            .to(0.5, { position: cc.v3(this.node.x, -1080) })
            .start();
    }
}
