const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerFlip extends cc.Component {
    private readonly TOUCHED_START: string = 'touchStart';

    @property(cc.Float)
    private flipDuration: number = 0.1;

    private canFlip: boolean = false;

    protected onLoad() {
        cc.systemEvent.on(this.TOUCHED_START, this.flipPlayer, this);
    }

    protected onDestroy() {
        cc.systemEvent.off(this.TOUCHED_START, this.flipPlayer, this);
    }

    public disableFlip() {
        this.canFlip = false;
    }

    public enableFlip() {
        this.canFlip = true;
    }

    public reset(){
        this.node.scaleY = Math.abs(this.node.scaleY);
        this.disableFlip();
    }

    private flipPlayer() {
        if (this.canFlip) {
            cc.tween(this.node)
                .to(this.flipDuration, { scaleY: -this.node.scaleY })
                .start();
        }
    }
}