import Double from "../Double";

const { ccclass, property } = cc._decorator;

@ccclass
export abstract class Spawner extends cc.Component {
    @property(cc.Prefab)
    protected prefab: cc.Prefab = null;

    protected pool: cc.Node[] = [];

    protected getOrCreateNode(): cc.Node {
        if (this.pool.length > 0) {
            const reusedNode = this.pool.pop();
            reusedNode.active = true;

            return reusedNode;
        }

        const newNode = cc.instantiate(this.prefab);
        this.node.addChild(newNode);

        return newNode;
    }

    public deactivateNode(node: cc.Node) {
        node.active = false;
        this.pool.push(node);
    }

    public abstract spawnNode(...positions: any[]): cc.Node;
}
