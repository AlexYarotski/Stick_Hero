import { Spawner } from "./Spawner";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlatformSpawner extends Spawner {
    private readonly posY: number = -1100;

    @property
    private minWidth: number = 50;

    @property
    private maxWidth: number = 200;

    @property
    private minXOffset: number = 100;

    @property
    private maxXOffset: number = 400;

    @property
    private platformAppearTime: number = 0.5;

    private lastPlatform: cc.Node = null;

    public spawnNode(position?: cc.Vec2): cc.Node {
        const newPlatform = this.getOrCreateNode();
        if (position) {
            newPlatform.setPosition(cc.v2(position.x, this.posY));
            newPlatform.active = true;
        } else {
            this.setRandomPlatformAttributes(newPlatform);
        }

        this.lastPlatform = newPlatform;
        return newPlatform;
    }


    private setRandomPlatformAttributes(platform: cc.Node) {
        const platformWidth = this.minWidth + Math.random() * (this.maxWidth - this.minWidth);
        platform.width = platformWidth;

        const offsetX = this.minXOffset + Math.random() * (this.maxXOffset - this.minXOffset);
        const newPositionX = this.lastPlatform ? this.lastPlatform.x + this.lastPlatform.width + offsetX : 0;

        platform.setPosition(cc.v2(newPositionX, this.posY * 2));

        cc.tween(platform)
            .to(this.platformAppearTime, { position: cc.v3(newPositionX, -1100) }, { easing: 'cubicOut' })
            .start();
    }
}
