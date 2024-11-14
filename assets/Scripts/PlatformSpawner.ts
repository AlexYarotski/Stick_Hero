const { ccclass } = cc._decorator;

@ccclass
export default class PlatformSpawner extends cc.Component {
    spawnPlatform() {
        const newPlatform = new cc.Node("Platform");
        newPlatform.addComponent(cc.Sprite); // Предполагается, что у платформ есть спрайты
        this.node.addChild(newPlatform);
        newPlatform.setPosition(cc.v2(Math.random() * 400 - 200, -200));
    }
}
