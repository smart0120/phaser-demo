import Phaser from 'phaser'

import PreloadVines from
        "@/game/scenes/Vines/PreloadVines";
import Vines from
        "@/game/scenes/Vines/Vines";
import PreloadPianoPlay from
        "@/game/scenes/PianoPlay/PreloadPianoPlay";
import PianoPlay from
        "@/game/scenes/PianoPlay/PianoPlay";
import PreloadSchoolArtClass from
        "@/game/scenes/SchoolArtClass/PreloadSchoolArtClass";
import SchoolArtClass from
        "@/game/scenes/SchoolArtClass/SchoolArtClass";
import PreloadSchoolEnglishClassroom from
        "@/game/scenes/SchoolEnglishClassroom/PreloadSchoolEnglishClassroom";
import SchoolEnglishClassroom from
        "@/game/scenes/SchoolEnglishClassroom/SchoolEnglishClassroom";
import PreloadSchoolHomeroom from
        "@/game/scenes/SchoolHomeroom/PreloadSchoolHomeroom";
import SchoolHomeroom from
        "@/game/scenes/SchoolHomeroom/SchoolHomeroom";
import PreloadSchoolRoofDoor from
        "@/game/scenes/SchoolRoofDoor/PreloadSchoolRoofDoor";
import SchoolRoofDoor from
        "@/game/scenes/SchoolRoofDoor/SchoolRoofDoor";
import PreloadHomeBedroom from
        "@/game/scenes/HomeBedroom/PreloadHomeBedroom";
import HomeBedroom from
        "@/game/scenes/HomeBedroom/HomeBedroom";
import PreloadSchool1EastCorridor from
        "@/game/scenes/School1EastCorridor/PreloadSchool1EastCorridor";
import School1EastCorridor from
        "@/game/scenes/School1EastCorridor/School1EastCorridor";
import PreloadSchoolBathroom from
        "@/game/scenes/SchoolBathroom/PreloadSchoolBathroom";
import SchoolBathroom from
        "@/game/scenes/SchoolBathroom/SchoolBathroom";
import PreloadSchoolEntrance from
        "@/game/scenes/SchoolEntrance/PreloadSchoolEntrance";
import SchoolEntrance from
        "@/game/scenes/SchoolEntrance/SchoolEntrance";
import PreloadSchoolLocker from
        "@/game/scenes/SchoolLocker/PreloadSchoolLocker";
import SchoolLocker from
        "@/game/scenes/SchoolLocker/SchoolLocker";
import PreloadSchoolSecretLocker from
        "@/game/scenes/SchoolSecretLocker/PreloadSchoolSecretLocker";
import SchoolSecretLocker from
        "@/game/scenes/SchoolSecretLocker/SchoolSecretLocker";
import PreloadHomeHall from
        "@/game/scenes/HomeHall/PreloadHomeHall";
import HomeHall from
        "@/game/scenes/HomeHall/HomeHall";
import PreloadSchool1FloorHall from
        "@/game/scenes/School1FloorHall/PreloadSchool1FloorHall";
import School1FloorHall from
        "@/game/scenes/School1FloorHall/School1FloorHall";
import PreloadSchoolCafeteria from
        "@/game/scenes/SchoolCafeteria/PreloadSchoolCafeteria";
import SchoolCafeteria from
        "@/game/scenes/SchoolCafeteria/SchoolCafeteria";
import PreloadSchoolForestGlade from
        "@/game/scenes/SchoolForestGlade/PreloadSchoolForestGlade";
import SchoolForestGlade from
        "@/game/scenes/SchoolForestGlade/SchoolForestGlade";
import PreloadSchoolMusicClass from
        "@/game/scenes/SchoolMusicClass/PreloadSchoolMusicClass";
import SchoolMusicClass from
        "@/game/scenes/SchoolMusicClass/SchoolMusicClass";
import PreloadHomeKitchen from
        "@/game/scenes/HomeKitchen/PreloadHomeKitchen";
import HomeKitchen from
        "@/game/scenes/HomeKitchen/HomeKitchen";
import PreloadSchool1WestCorridor from
        "@/game/scenes/School1WestCorridor/PreloadSchool1WestCorridor";
import School1WestCorridor from
        "@/game/scenes/School1WestCorridor/School1WestCorridor";
import PreloadSchoolClubroom from
        "@/game/scenes/SchoolClubroom/PreloadSchoolClubroom";
import SchoolClubroom from
        "@/game/scenes/SchoolClubroom/SchoolClubroom";
import PreloadSchoolGroundFloor from
        "@/game/scenes/SchoolGroundFloor/PreloadSchoolGroundFloor";
import SchoolGroundFloor from
        "@/game/scenes/SchoolGroundFloor/SchoolGroundFloor";
import PreloadSchoolNurseRoom from
        "@/game/scenes/SchoolNurseRoom/PreloadSchoolNurseRoom";
import SchoolNurseRoom from
        "@/game/scenes/SchoolNurseRoom/SchoolNurseRoom";
import PreloadHomeBathroom from
        "@/game/scenes/HomeBathroom/PreloadHomeBathroom";
import HomeBathroom from
        "@/game/scenes/HomeBathroom/HomeBathroom";
import PreloadSchoolAdminWing from
        "@/game/scenes/SchoolAdminWing/PreloadSchoolAdminWing";
import SchoolAdminWing from
        "@/game/scenes/SchoolAdminWing/SchoolAdminWing";
import PreloadSchoolComputerRoom from
        "@/game/scenes/SchoolComputerRoom/PreloadSchoolComputerRoom";
import SchoolComputerRoom from
        "@/game/scenes/SchoolComputerRoom/SchoolComputerRoom";
import PreloadSchoolGym from
        "@/game/scenes/SchoolGym/PreloadSchoolGym";
import SchoolGym from
        "@/game/scenes/SchoolGym/SchoolGym";
import PreloadSchoolRoof from
        "@/game/scenes/SchoolRoof/PreloadSchoolRoof";
import SchoolRoof from
        "@/game/scenes/SchoolRoof/SchoolRoof";


const sceneConfig = '@/game/scenes/index';
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';

function launch(containerId) {
    return new Phaser.Game({
        type: Phaser.AUTO,
        width: window.innerWidth * window.devicePixelRatio,
        height: window.innerHeight * window.devicePixelRatio,
        parent: containerId,
        plugins: {
            scene: [{
                key: 'rexUI',
                plugin: UIPlugin,
                mapping: 'rexUI'
            },
                // ...
            ]
        },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {y: 300},
                debug: false
            }
        },
        scene: [   PreloadHomeKitchen, HomeKitchen,

            PreloadPianoPlay, PianoPlay,
            PreloadSchoolArtClass, SchoolArtClass,
            PreloadSchoolEnglishClassroom, SchoolEnglishClassroom,
            PreloadSchoolHomeroom, SchoolHomeroom,
            PreloadSchoolRoofDoor, SchoolRoofDoor,
            PreloadHomeBedroom, HomeBedroom,
            PreloadSchool1EastCorridor, School1EastCorridor,
            PreloadSchoolBathroom, SchoolBathroom,
            PreloadSchoolEntrance, SchoolEntrance,
            PreloadSchoolLocker, SchoolLocker,
            PreloadSchoolSecretLocker, SchoolSecretLocker,
            PreloadHomeHall, HomeHall,
            PreloadSchool1FloorHall, School1FloorHall,
            PreloadSchoolCafeteria, SchoolCafeteria,
            PreloadSchoolForestGlade, SchoolForestGlade,
            PreloadSchoolMusicClass, SchoolMusicClass,
            PreloadVines, Vines,
            PreloadSchool1WestCorridor, School1WestCorridor,
            PreloadSchoolClubroom, SchoolClubroom,
            PreloadSchoolGroundFloor, SchoolGroundFloor,
            PreloadSchoolNurseRoom, SchoolNurseRoom,
            PreloadHomeBathroom, HomeBathroom,
            PreloadSchoolAdminWing, SchoolAdminWing,
            PreloadSchoolComputerRoom, SchoolComputerRoom,
            PreloadSchoolGym, SchoolGym,
            PreloadSchoolRoof, SchoolRoof,

        ]
    })
}

//window.debug_sprites = true;

export default launch
export {launch}
