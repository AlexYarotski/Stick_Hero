import { Spawner } from "./Spawner";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StickSpawner extends Spawner {
    public spawnNode(position: cc.Vec2): cc.Node {
        const newStick = this.getOrCreateNode();
        newStick.setPosition(position);

        return newStick;
    }
}
