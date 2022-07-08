import Phaser from 'phaser'


import SchoolBathroom from "@/game/scenes/SchoolBathroom/SchoolBathroom";
import PreloadSchoolBathroom from "@/game/scenes/SchoolBathroom/PreloadSchoolBathroom";
import PreloadKitchen from "@/game/scenes/Kitchen/PreloadKitchen";
import Kitchen from "@/game/scenes/Kitchen/Kitchen";
import PreloadForestGlade from "@/game/scenes/ForestGlade/PreloadForestGlade";
import ForestGlade from "@/game/scenes/ForestGlade/ForestGlade";
import MenuExampleScene from "@/game/scenes/MenuExample/MenuExampleScene";
import PreloadMenuExampleScene from "@/game/scenes/MenuExample/PreloadMenuExampleScene";


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
        scene:  [PreloadSchoolBathroom,SchoolBathroom,PreloadForestGlade,PreloadMenuExampleScene, MenuExampleScene,ForestGlade]
    })
}

export default launch
export {launch}
