import Phaser from 'phaser'
import BootScene from "@/game/scenes/BootScene";
import PlayScene from "@/game/scenes/PlayScene";



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
        scene:  [BootScene, PlayScene]
    })
}

export default launch
export {launch}
