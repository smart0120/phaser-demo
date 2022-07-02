import Phaser from 'phaser'
import BootScene from "@/game/scenes/BootScene";
import PlayScene from "@/game/scenes/PlayScene";
import PlayScene2 from "@/game/scenes/PlayScene2";


const sceneConfig = '@/game/scenes/index';

function launch(containerId) {
    return new Phaser.Game({
        type: Phaser.AUTO,
        width: window.innerWidth * window.devicePixelRatio,
        height: window.innerHeight * window.devicePixelRatio,
        parent: containerId,

        physics: {
            default: 'arcade',
            arcade: {
                gravity: {y: 300},
                debug: false
            }
        },
        scene:  [BootScene, PlayScene,PlayScene2]
    })
}

export default launch
export {launch}
