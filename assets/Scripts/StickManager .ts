const { ccclass, property } = cc._decorator;

@ccclass
export default class StickManager extends cc.Component {
    private isGrowing: boolean = false;
    private growSpeed: number = 100;

    startGrowing() {
        this.isGrowing = true;
        this.schedule(this.growStick, 0.02);
    }

    stopGrowing() {
        this.isGrowing = false;
        this.unschedule(this.growStick);
        this.rotateStick();
    }

    private growStick() {
        if (!this.isGrowing) return;
        this.node.height += this.growSpeed * 0.02;
    }

    private rotateStick() {
        cc.tween(this.node)
            .to(0.5, { angle: -90 }, { easing: 'cubicOut' })
            .start();
    }
}
