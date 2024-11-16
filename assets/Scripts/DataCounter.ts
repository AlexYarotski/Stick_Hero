export default class DataCounter {
    private static readonly SCORE_KEY: string = 'score';
    private static readonly BEST_SCORE_KEY: string = 'best_score';
    private static readonly DOUBLE_KEY: string = 'best_score';

    public static getScore(): number {
        const scoreString = cc.sys.localStorage.getItem(this.SCORE_KEY);
        return scoreString ? parseInt(scoreString) : 0;
    }

    public static setScore(score: number): void {
        cc.sys.localStorage.setItem(this.SCORE_KEY, score.toString());
    }

    public static getBestScore(): number {
        const scoreString = cc.sys.localStorage.getItem(this.BEST_SCORE_KEY);
        return scoreString ? parseInt(scoreString) : 0;
    }

    public static setBestScore(score: number): void {
        cc.sys.localStorage.setItem(this.BEST_SCORE_KEY, score.toString());
    }

    public static getDoubleCount(): number {
        const doubleString = cc.sys.localStorage.getItem(this.DOUBLE_KEY);
        return doubleString ? parseInt(doubleString) : 0;
    }

    public static setDoubleCount(double: number){
    cc.sys.localStorage.setItem(this.DOUBLE_KEY, double.toString());}
}
