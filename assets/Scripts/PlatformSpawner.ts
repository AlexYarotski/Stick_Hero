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

    private lastPlatform: cc.Node = null;

    private platformPool: cc.Node[] = [];

    public spawnPlatform(previousPlatformPosition?: cc.Vec2): cc.Node {
        const newPlatform = this.getOrCreatePlatform();

        if (previousPlatformPosition) {
            newPlatform.setPosition(cc.v2(previousPlatformPosition.x, this.posY));

            newPlatform.active = true;
        } else {

            this.setRandomPlatformAttributes(newPlatform);
        }

        this.lastPlatform = newPlatform;

        return newPlatform;
    }

    public deactivatePlatform(platform: cc.Node) {
        platform.setPosition(cc.v2(platform.x, this.posY * 2));
        platform.active = false;
        this.platformPool.push(platform);
    }

    private getOrCreatePlatform(): cc.Node {
        if (this.platformPool.length > 0) {
            const reusedPlatform = this.platformPool.pop();
            return reusedPlatform;
        }
        const newPlatform = cc.instantiate(this.platformPrefab);
        this.node.addChild(newPlatform);
        return newPlatform;
    }

    private setRandomPlatformAttributes(platform: cc.Node) {
        const platformWidth = this.minWidth + Math.random() * (this.maxWidth - this.minWidth);
        platform.width = platformWidth;

        const offsetX = this.minXOffset + Math.random() * (this.maxXOffset - this.minXOffset);
        const newPositionX = this.lastPlatform ? this.lastPlatform.x + this.lastPlatform.width + offsetX : 0;

        platform.setPosition(cc.v2(newPositionX, this.posY * 2));

        platform.active = true;

        cc.tween(platform)
            .to(this.platformAppearTime, { position: cc.v3(newPositionX, this.posY) }, { easing: 'cubicOut' })
            .start();
    }
}