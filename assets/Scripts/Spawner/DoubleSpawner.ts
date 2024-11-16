import { Spawner } from "./Spawner";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DoubleSpawner extends Spawner {
    private readonly posY: number = -350;

    @property
    private appearanceFrequency: number = 3;

    private counter: number = 0;

    public spawnNode(startPos: cc.Vec3, endPos: cc.Vec3): cc.Node {
        this.counter++;
        if (this.counter >= this.appearanceFrequency) {
            this.counter = 0;

            const doubleNode = this.getOrCreateNode();

            const localStartPos = this.node.convertToNodeSpaceAR(startPos);
            const localEndPos = this.node.convertToNodeSpaceAR(endPos);

            const startX = localStartPos.x + doubleNode.width;
            const endX = localEndPos.x - doubleNode.width;
            const randomX = startX + Math.random() * (endX - startX);

            doubleNode.setPosition(randomX, this.posY);

            doubleNode.active = true;
            doubleNode.parent = this.node;

            return doubleNode;
        }

        return null;
    }
}
