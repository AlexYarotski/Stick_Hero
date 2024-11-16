import PlayerController from "./PlayerController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Double extends cc.Component {
    private readonly COLLISION_ENTER: string = 'collision-enter';
    private readonly MOVEMENT_COMPLETE: string = 'movementComplete';
    private readonly DOUBLE: string = 'double';

    private boxCollider: cc.BoxCollider = null;

    protected onLoad() {
        this.boxCollider = this.getComponent(cc.BoxCollider);

        this.boxCollider.node.on(this.COLLISION_ENTER, this.onCollisionEnter, this);

        cc.systemEvent.on(this.MOVEMENT_COMPLETE, this.onMovementComplete, this);
    }

    protected onDestroy() {
        cc.systemEvent.off(this.MOVEMENT_COMPLETE, this.onMovementComplete, this);
    }

    private onCollisionEnter(other: cc.Collider) {
        if (other.node.getComponent(PlayerController)) {
            this.node.active = false;
            cc.systemEvent.emit(this.DOUBLE);
        }
    }

    private onMovementComplete(){
        this.node.active = false;
    }
}
