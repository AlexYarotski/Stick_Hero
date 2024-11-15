const { ccclass, property } = cc._decorator;

@ccclass
export default class PlatformSpawner extends cc.Component {
    private readonly posY: number = -1100;

    @property(cc.Prefab)
    platformPrefab: cc.Prefab = null;

    @property
    minWidth: number = 50;

    @property
    maxWidth: number = 200;

    @property
    minXOffset: number = 100;

    @property
    maxXOffset: number = 400;

    @property
    platformAppearTime: number = 0.5;

    public spawnPlatform(previousPlatformPosition?: cc.Vec2): cc.Node {
        const newPlatform = cc.instantiate(this.platformPrefab);

        if (previousPlatformPosition) {
            newPlatform.setPosition(cc.v2(previousPlatformPosition.x, this.posY));
        } else {
            const platformWidth = this.minWidth + Math.random() * (this.maxWidth - this.minWidth);
            newPlatform.width = platformWidth;

             const newPositionX = this.minXOffset + Math.random() * (this.maxXOffset - (this.minXOffset)); // Случайное значение в промежутке [-240, 400]
            newPlatform.setPosition(cc.v2(newPositionX, this.posY * 2)); // Начальная позиция снизу экрана

            // Анимация появления снизу вверх
            cc.tween(newPlatform)
                .to(this.platformAppearTime, { position: cc.v3(newPositionX, this.posY) }, { easing: 'cubicOut' })
                .start();
        }

        this.node.addChild(newPlatform);
        return newPlatform;
    }
}
