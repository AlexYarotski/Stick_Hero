const { ccclass, property } = cc._decorator;

@ccclass
export default class SkinChanger extends cc.Component {
    private readonly SKIN_SELECTED: string = 'skinSelected';


    @property(cc.Sprite)
    private characterSprite: cc.Sprite = null;

    @property([cc.SpriteFrame])
    private availableSkins: cc.SpriteFrame[] = [];

    protected onLoad() {
        cc.systemEvent.on(this.SKIN_SELECTED, this.onSkinChange, this);
    }

    protected onDestroy() {
        cc.systemEvent.off(this.SKIN_SELECTED, this.onSkinChange, this);
    }

    private onSkinChange(skinId: number) {
        this.characterSprite.spriteFrame = this.availableSkins[skinId - 1];
    }
}
