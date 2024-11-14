const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {
    @property(cc.Node)
    stick: cc.Node = null;

    private isMoving: boolean = false;

    moveTo(targetPosition: cc.Vec2, onComplete: Function) {
        this.isMoving = true;
        const targetPosition3D = new cc.Vec3(targetPosition.x, targetPosition.y, 0);
        cc.tween(this.node)
            .to(1, { position: targetPosition3D }, { easing: 'sineInOut' })
            .call(() => {
                this.isMoving = false;
                if (onComplete) onComplete();
            })
            .start();
    }

    fall() {
        cc.tween(this.node)
            .by(1, { position: new cc.Vec3(0, -1000, 0) }, { easing: 'sineIn' })
            .start();
    }
}
