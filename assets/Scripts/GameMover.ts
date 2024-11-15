const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    private readonly PLAYER_REACHED_EVENT: string = 'playerReached';

    @property(cc.Float)
    moveDuration: number = 1;

    private isMoving: boolean = false;

    protected onLoad() {
        cc.systemEvent.on(this.PLAYER_REACHED_EVENT, this.startMoving, this);
    }

    protected onDestroy() {
        cc.systemEvent.off(this.PLAYER_REACHED_EVENT, this.startMoving, this);
    }

    private startMoving(distance: number) {
        if (this.isMoving) return;

        this.isMoving = true;
        cc.tween(this.node)
            .by(this.moveDuration, { position: cc.v3(-distance, 0) }, { easing: 'sineInOut' })
            .call(() => {
                this.isMoving = false;
            })
            .start();
    }
}
