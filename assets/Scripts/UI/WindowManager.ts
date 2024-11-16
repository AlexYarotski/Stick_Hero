import WindowSwitcher from "./WindowSwitcher";
import MainWindow from "./MainWindow";

const {ccclass, property} = cc._decorator;

@ccclass
export default class WindowManager extends cc.Component {

    @property(WindowSwitcher)
    private windowSwitcher: WindowSwitcher = null;

    protected start(){
        this.windowSwitcher.show(MainWindow);
    }
}
