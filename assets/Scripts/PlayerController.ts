const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {
    private stick: cc.Node = null;
    private isMoving: boolean = false;

    protected enableStickCreation() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.startCreatingStick, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.stopCreatingStick, this);
    }

    private startCreatingStick() {
        this.stick = new cc.Node("Stick");
        this.stick.addComponent(cc.Sprite);
        this.stick.setPosition(this.node.position.add(cc.v3(0, this.node.height / 2, 0)));
        this.stick.parent = this.node.parent;
        this.stick.height = 0;

        this.schedule(this.growStick, 0.02);
    }

    private growStick() {
        this.stick.height += 10; // Примерная скорость роста
    }

    private stopCreatingStick() {
        this.unschedule(this.growStick);
        this.rotateStick();
    }

    private rotateStick() {
        cc.tween(this.stick)
            .to(0.5, { angle: -90 }, { easing: 'cubicOut' })
            .call(() => {
                // Уведомляем GameController, что палка упала
                cc.systemEvent.emit('stick-fallen', this.stick);
            })
            .start();
    }

    private moveToEndOfStick(stickNode: cc.Node, onComplete: Function) {
        this.isMoving = true;
        const targetPosition = stickNode.position.add(cc.v3(stickNode.width, 0, 0));
        const targetPosition3D = new cc.Vec3(targetPosition.x, targetPosition.y, 0);

        cc.tween(this.node)
            .to(1, { position: targetPosition3D }, { easing: 'sineInOut' })
            .call(() => {
                this.isMoving = false;
                if (onComplete) onComplete();
            })
            .start();
    }
}
