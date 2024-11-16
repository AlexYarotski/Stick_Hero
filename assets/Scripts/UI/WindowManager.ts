import WindowSwitcher from "./WindowSwitcher";
import MainWindow from "./MainWindow";
import GameWindow from "./GameWindow";

const {ccclass, property} = cc._decorator;

@ccclass
export default class WindowManager extends cc.Component {
    private readonly START_GAME: string = 'startGame';

    @property(WindowSwitcher)
    private windowSwitcher: WindowSwitcher = null;

    protected onLoad() {
        cc.systemEvent.on(this.START_GAME, () => this.windowSwitcher.show(GameWindow), this);
    }

    protected onDestroy() {
        cc.systemEvent.off(this.START_GAME, () => this.windowSwitcher.show(GameWindow), this);
    }

    protected start(){
        this.windowSwitcher.show(MainWindow);
    }
}
