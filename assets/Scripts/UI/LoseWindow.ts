import Window from "./Window";
import Button = cc.Button;
import DataCounter from "../DataCounter";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoseWindow extends Window {
    private readonly MAIN_CLICKED: string = 'mainClicked';
    private readonly RESTART_CLICKED: string = 'restartClicked';

    @property(Button)
    private main: Button = null;
    @property(Button)
    private restart: Button = null;

    @property(cc.Label)
    private score: cc.Label = null;

    @property(cc.Label)
    private bestScore: cc.Label = null;

    @property(cc.Label)
    private doubleCount: cc.Label = null;

    get isPopUp(): boolean {
        return false;
    }

    protected onLoad() {
        this.main.node.on(cc.Node.EventType.TOUCH_END, () => cc.systemEvent.emit(this.MAIN_CLICKED), this);
        this.restart.node.on(cc.Node.EventType.TOUCH_END, () => cc.systemEvent.emit(this.RESTART_CLICKED), this);
    }

    protected onDestroy() {
        this.main.node.off(cc.Node.EventType.TOUCH_END, () => cc.systemEvent.emit(this.MAIN_CLICKED), this);
        this.restart.node.off(cc.Node.EventType.TOUCH_END, () => cc.systemEvent.emit(this.RESTART_CLICKED), this);
    }

    public show() {
        super.show();

        this.score.string = DataCounter.getScore().toString();
        this.bestScore.string = DataCounter.getBestScore().toString();
        this.doubleCount.string = DataCounter.getDoubleCount().toString();
    }
}
