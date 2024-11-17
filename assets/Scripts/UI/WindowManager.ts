import WindowSwitcher from "./WindowSwitcher";
import MainWindow from "./MainWindow";
import GameWindow from "./GameWindow";
import LoseWindow from "./LoseWindow";

const {ccclass, property} = cc._decorator;

@ccclass
export default class WindowManager extends cc.Component {
    private readonly START_GAME: string = 'startGame';
    private readonly PLAYER_FALL: string = 'playerFall';
    private readonly MAIN_CLICKED: string = 'mainClicked';
    private readonly RESTART_CLICKED: string = 'restartClicked';

    @property(WindowSwitcher)
    private windowSwitcher: WindowSwitcher = null;

    protected onLoad() {
        cc.systemEvent.on(this.START_GAME, () => this.windowSwitcher.show(GameWindow), this);
        cc.systemEvent.on(this.PLAYER_FALL, () => this.windowSwitcher.show(LoseWindow), this);
        cc.systemEvent.on(this.MAIN_CLICKED, () => this.windowSwitcher.show(MainWindow), this);
        cc.systemEvent.on(this.RESTART_CLICKED, () => this.windowSwitcher.show(GameWindow), this);
    }

    protected onDestroy() {
        cc.systemEvent.off(this.START_GAME, () => this.windowSwitcher.show(GameWindow), this);
        cc.systemEvent.off(this.PLAYER_FALL, () => this.windowSwitcher.show(LoseWindow), this);
        cc.systemEvent.off(this.MAIN_CLICKED, () => this.windowSwitcher.show(MainWindow), this);
        cc.systemEvent.off(this.RESTART_CLICKED, () => this.windowSwitcher.show(GameWindow), this);
    }

    protected start(){
        this.windowSwitcher.show(MainWindow);
    }
}
