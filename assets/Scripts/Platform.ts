const { ccclass, property } = cc._decorator;

@ccclass
export default class Platform extends cc.Component {
    @property(cc.BoxCollider)
    private boxCollider: cc.BoxCollider = null;

    protected onLoad() {
        if (!this.boxCollider) {
            this.boxCollider = this.getComponent(cc.BoxCollider);
            if (!this.boxCollider) {
                cc.error('BoxCollider отсутствует на ноде платформы.');
                return;
            }
        }

        this.updateColliderSize();
    }

    public updatePlatformSize() {
        this.updateColliderSize();
    }

    protected updateColliderSize() {
        if (this.boxCollider) {
            this.boxCollider.size.width = this.node.width;
            this.boxCollider.size.height = this.node.height;

            this.boxCollider.offset = cc.v2(this.node.width / 2, this.node.height / 2);
        }
    }
}
