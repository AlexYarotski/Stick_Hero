const { ccclass, property } = cc._decorator;

@ccclass
export default class CameraShake extends cc.Component {
    private readonly  PLAYER_FALL: string = 'playerFall';

    @property(cc.Float)
    private shakeDuration: number = 0.5;

    @property(cc.Float)
    private shakeMagnitude: number = 20;

    @property(cc.Float)
    private repeat: number = 2;

    protected onLoad() {
        cc.systemEvent.on(this.PLAYER_FALL, this.shake, this);
    }

    protected onDestroy() {
        cc.systemEvent.off(this.PLAYER_FALL, this.shake, this);
    }

    private shake() {
        const originalPosition = this.node.position; // Сохраняем изначальную позицию

        cc.tween(this.node)
            .repeat(this.repeat,
                cc.tween()
                    .by(this.shakeDuration / 4, { position: cc.v3(this.shakeMagnitude, 0) })
                    .by(this.shakeDuration / 4, { position: cc.v3(-this.shakeMagnitude * 2, 0) })
                    .by(this.shakeDuration / 4, { position: cc.v3(this.shakeMagnitude * 2, 0) })
                    .by(this.shakeDuration / 4, { position: cc.v3(-this.shakeMagnitude, 0) })
            )
            .to(0, { position: originalPosition })
            .start();
    }
}
