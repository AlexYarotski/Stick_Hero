const { ccclass, property } = cc._decorator;

@ccclass
export default class PlatformSpawner extends cc.Component {
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
    platformAppearTime: number = 0.5; // Время появления платформы снизу вверх

    public spawnPlatform(previousPlatformPosition?: cc.Vec2): cc.Node {
        const newPlatform = cc.instantiate(this.platformPrefab);
        const platformWidth = this.minWidth + Math.random() * (this.maxWidth - this.minWidth);
        newPlatform.width = platformWidth;

        if (previousPlatformPosition) {
            newPlatform.setPosition(cc.v2(previousPlatformPosition.x, -708)); // Появляется сразу
        } else {
            // Если позиция не передана, используем случайное значение
             const newPositionX = -240 + Math.random() * (400 - (-240)); // Случайное значение в промежутке [-240, 400]
            newPlatform.setPosition(cc.v2(newPositionX, -1080)); // Начальная позиция снизу экрана

            // Анимация появления снизу вверх
            cc.tween(newPlatform)
                .to(this.platformAppearTime, { position: cc.v3(newPositionX, -708) }, { easing: 'cubicOut' })
                .start();
        }

        this.node.addChild(newPlatform);
        return newPlatform;
    }
}
