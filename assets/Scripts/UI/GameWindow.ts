import Window from "./Window";
import Label = cc.Label;
import DataCounter from "../DataCounter";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameWindow extends Window {
    private readonly DOUBLE: string = 'double';
    private readonly PLAYER_REACHED: string = 'playerReached';

    @property(Label)
    private counter: Label = null;

    @property(Label)
    private bestScore: Label = null;

    @property(Number)
    private scaleDuration: number = 0.5;

    @property(Number)
    private increase: number = 1.5;

    private originalScale: number = 0;
    private count: number = 0;
    private point: number = 0;

    get isPopUp(): boolean {
        return false;
    }

    protected onEnable() {
        cc.systemEvent.on(this.PLAYER_REACHED, this.onPlayerReached, this);
        cc.systemEvent.on(this.DOUBLE, this.onDouble, this);
    }

    protected onDisable() {
        cc.systemEvent.off(this.PLAYER_REACHED, this.onPlayerReached, this);
        cc.systemEvent.off(this.DOUBLE, this.onDouble, this);
    }

    protected start() {
        this.originalScale = this.counter.node.scale;
    }

    public show() {
        super.show();
        this.resetCounter();

        this.bestScore.string = DataCounter.getBestScore().toString();
    }

    public hide(){
        DataCounter.setScore(this.count);

        if (DataCounter.getBestScore() < this.count) {
            DataCounter.setBestScore(this.count);
        }

        super.hide();
    }

    private resetCounter() {
        this.count = 0;
        this.updateCounterDisplay();
    }

    private onDouble() {
        this.point++;
    }

    private onPlayerReached() {
        this.point++;

        if (this.point > 1){
            DataCounter.setDoubleCount(DataCounter.getDoubleCount() + 1);
        }

        this.count += this.point;
        this.updateCounterDisplay();
        this.animateCounter();

        this.point = 0;
    }

    private updateCounterDisplay() {
        this.counter.string = this.count.toString();
    }

    private animateCounter() {
        cc.Tween.stopAllByTarget(this.counter.node);

        cc.tween(this.counter.node)
            .to(this.scaleDuration, { scale: this.originalScale * this.increase })
            .to(this.scaleDuration, { scale: this.originalScale })
            .start();
    }
}
