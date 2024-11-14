const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager extends cc.Component {
    @property(cc.Label)
    scoreLabel: cc.Label = null;

    private score: number = 0;

    public updateScore(value: number) {
        this.score += value;
        this.scoreLabel.string = `Score: ${this.score}`;
    }

    public resetScore() {
        this.score = 0;
        this.updateScore(0);
    }
}
