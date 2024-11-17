const {ccclass, property} = cc._decorator;

@ccclass
export default class BackgroundManager extends cc.Component {
    private readonly PLAYER_REACHED: string = 'playerReached';

    @property(cc.Node)
    private firstBack: cc.Node = null;

    @property(cc.Node)
    private endBack: cc.Node = null;

    @property(cc.Float)
    private moveDuration: number = 1;

    @property(cc.Float)
    private parallaxFactor: number = 0.5;

    protected onLoad() {
        cc.systemEvent.on(this.PLAYER_REACHED, this.onPlayerReached, this);
    }

    protected onDestroy() {
        cc.systemEvent.off(this.PLAYER_REACHED, this.onPlayerReached, this);
    }

    public onPlayerReached(distance: number) {
        const moveDistance = -distance * this.parallaxFactor;

        cc.tween(this.firstBack)
            .by(this.moveDuration, { position: cc.v3(moveDistance, 0) }, { easing: 'sineInOut' })
            .start();

        cc.tween(this.endBack)
            .by(this.moveDuration, { position: cc.v3(moveDistance, 0) }, { easing: 'sineInOut' })
            .start();


        this.checkAndResetPosition(this.firstBack, this.endBack);
    }

    private checkAndResetPosition(first: cc.Node, end: cc.Node) {
        if (first.x <= -first.width) {
            first.x = end.x + end.width;
        }

        if (end.x <= -end.width) {
            end.x = first.x + first.width;
        }
    }
}
