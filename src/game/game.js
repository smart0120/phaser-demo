import Phaser from 'phaser'
import BootScene from "@/game/scenes/BootScene";
import PlayScene from "@/game/scenes/PlayScene";
import PlayScene2 from "@/game/scenes/PlayScene2";
import PreloadSchoolBathroom from "@/game/scenes/SchoolBathroom/PreloadSchoolBathroom";
import SchoolBathroom from "@/game/scenes/SchoolBathroom/SchoolBathroom";


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
        scene:  [PreloadSchoolBathroom, SchoolBathroom]
    })
}

export default launch
export {launch}
