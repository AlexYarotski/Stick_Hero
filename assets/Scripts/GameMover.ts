const { ccclass, property } = cc._decorator;

@ccclass
export default class GameMover extends cc.Component {
    private readonly PLAYER_REACHED: string = 'playerReached';
    private readonly MOVEMENT_COMPLETE: string = 'movementComplete';
    private readonly START_GAME: string = 'startGame';

    private readonly startDistance: number = 460;

    @property(cc.Float)
    moveDuration: number = 1;

    private isMoving: boolean = false;

    protected onLoad() {
        cc.systemEvent.on(this.PLAYER_REACHED, this.startMoving, this);
        cc.systemEvent.on(this.START_GAME, this.onStartGame, this);
    }

    protected onDestroy() {
        cc.systemEvent.off(this.PLAYER_REACHED, this.startMoving, this);
        cc.systemEvent.off(this.START_GAME, this.onStartGame, this);
    }

    private startMoving(distance: number) {
        if (this.isMoving) return;

        this.isMoving = true;
        cc.tween(this.node)
            .by(this.moveDuration, { position: cc.v3(-distance, 0) }, { easing: 'sineInOut' })
            .call(() => {
                this.isMoving = false;
                cc.systemEvent.emit(this.MOVEMENT_COMPLETE);
            })
            .start();
    }

    private onStartGame(){
        this.startMoving(this.startDistance);
    }
}
