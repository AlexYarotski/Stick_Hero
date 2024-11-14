const { ccclass, property } = cc._decorator;

@ccclass
export default class StickManager extends cc.Component {
    private readonly TOUCHED_START: string = 'touchStart';
    private readonly TOUCHED_END: string = 'touchEnd';
    private readonly STICK_FALLEN: string = 'stickFallen';

    @property(Number)
    private growSpeed: number = 100;

    private isGrowing: boolean = false;
    private isStickPlaced: boolean = false;

    protected onEnable() {
        cc.systemEvent.on(this.TOUCHED_START, this.onTouchStart, this);
        cc.systemEvent.on(this.TOUCHED_END, this.onTouchEnd, this);
    }

    protected onDisable() {
        cc.systemEvent.off(this.TOUCHED_START, this.onTouchStart, this);
        cc.systemEvent.off(this.TOUCHED_END, this.onTouchEnd, this);
    }

    private onTouchStart() {
        if (this.isStickPlaced) return;
        this.startGrowing();
    }

    private onTouchEnd() {
        if (this.isStickPlaced) return;
        this.stopGrowing();
    }

    private startGrowing() {
        this.isGrowing = true;
        this.schedule(this.growStick, 0.02);
    }

    private stopGrowing() {
        this.isGrowing = false;
        this.unschedule(this.growStick);
        this.rotateStick();
        this.isStickPlaced = true;
    }

    private growStick() {
        if (!this.isGrowing) return;
        this.node.height += this.growSpeed * 0.02;
    }

    private rotateStick() {
        cc.tween(this.node)
            .to(0.5, { angle: -90 }, { easing: 'cubicOut' })
            .call(() => {
                this.emitStickFallenEvent();
            })
            .start();
    }

    private emitStickFallenEvent() {
        cc.systemEvent.emit(this.STICK_FALLEN, this.node);
    }
}
