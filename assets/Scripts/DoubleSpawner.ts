const { ccclass, property } = cc._decorator;

@ccclass
export default class DoubleSpawner extends cc.Component {
    @property(cc.Prefab)
    doublePrefab: cc.Prefab = null;

    @property
    private appearanceFrequency: number = 3; // Частота появления Double

    private counter: number = 0; // Счётчик для появления

    public spawnDouble(previousPlatform: cc.Node, currentPlatform: cc.Node): void {
        this.counter++;
        if (this.counter >= this.appearanceFrequency) {
            this.counter = 0; // Сброс счётчика
            const startX = previousPlatform.x;
            const endX = currentPlatform.x;
            const midX = (startX + endX) / 2;

            const doubleNode = cc.instantiate(this.doublePrefab);
            doubleNode.parent = this.node;
            doubleNode.setPosition(-291, -350); // Заданная Y-позиция
        }
    }
}
