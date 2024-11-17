const { ccclass, property } = cc._decorator;

@ccclass
export default class SkinSelector extends cc.Component {
    @property(cc.Button)
    private skinButton1: cc.Button = null;

    @property(cc.Button)
    private skinButton2: cc.Button = null;

    private static readonly SKIN_SELECTED_EVENT: string = 'skinSelected';

    protected onLoad() {
        this.skinButton1.node.on('click', () => this.onSkinSelected(1), this);
        this.skinButton2.node.on('click', () => this.onSkinSelected(2), this);
    }

    private onSkinSelected(skinId: number) {
        cc.systemEvent.emit(SkinSelector.SKIN_SELECTED_EVENT, skinId);
    }
}
