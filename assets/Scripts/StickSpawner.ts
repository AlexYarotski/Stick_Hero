import { Spawner } from "./Spawner";
import StickManager from "./StickManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StickSpawner extends Spawner {
    @property
    private stickAppearTime: number = 0.5;

    public spawnNode(position: cc.Vec2): cc.Node {
        const newStick = this.getOrCreateNode();
        newStick.setPosition(position);
        newStick.active = true;
        return newStick;
    }
}
