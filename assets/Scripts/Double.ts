const { ccclass, property } = cc._decorator;

@ccclass
export default class Double extends cc.Component {
    private readonly COLLISION_ENTER: string = 'collision-enter';

    private boxCollider: cc.BoxCollider = null;

    protected onLoad() {
        this.boxCollider = this.getComponent(cc.BoxCollider);

        this.boxCollider.node.on(this.COLLISION_ENTER, this.onCollisionEnter, this)
    }

    private onCollisionEnter(other: cc.Collider) {
        if (other.node.getComponent('PlayerController')) {
            this.onDoubleCollision();
        }
    }

    private onDoubleCollision() {
        this.node.active = false;
    }
}
