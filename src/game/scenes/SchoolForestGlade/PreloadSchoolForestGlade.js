
 
import {Scene} from "phaser";
    
            const _Sky = require( './sprites/Sky/Sky')
const _Sunsetsky = require( './sprites/Sunsetsky/Sunsetsky')
const _TreeBack = require( './sprites/TreeBack/TreeBack')
const _Meadow = require( './sprites/Meadow/Meadow')
const _RoadLeft = require( './sprites/RoadLeft/RoadLeft')
const _RoadRight = require( './sprites/RoadRight/RoadRight')
const _House = require( './sprites/House/House')
const _Bushes = require( './sprites/Bushes/Bushes')
const _RiverLv3 = require( './sprites/RiverLv3/RiverLv3')
const _RiverrLv2 = require( './sprites/RiverrLv2/RiverrLv2')
const _RiverLv1 = require( './sprites/RiverLv1/RiverLv1')
const _RiverLv0 = require( './sprites/RiverLv0/RiverLv0')
const _Earth = require( './sprites/Earth/Earth')
const _Dry = require( './sprites/Dry/Dry')
const _Watered = require( './sprites/Watered/Watered')
const _WatercanalLvl0 = require( './sprites/WatercanalLvl0/WatercanalLvl0')
const _WatercanalLvl3 = require( './sprites/WatercanalLvl3/WatercanalLvl3')
const _Stone = require( './sprites/Stone/Stone')
const _FloraXrayFull = require( './sprites/FloraXrayFull/FloraXrayFull')
const _Flora = require( './sprites/Flora/Flora')
const _RivercanalLvl0 = require( './sprites/RivercanalLvl0/RivercanalLvl0')
const _RivercanalLvl3 = require( './sprites/RivercanalLvl3/RivercanalLvl3')
const _SmallSprouts = require( './sprites/SmallSprouts/SmallSprouts')
const _MediumSprouts = require( './sprites/MediumSprouts/MediumSprouts')
const _BigSprouts = require( './sprites/BigSprouts/BigSprouts')
const _Wood = require( './sprites/Wood/Wood')
const _Mushrooms = require( './sprites/Mushrooms/Mushrooms')
const _Tire = require( './sprites/Tire/Tire')
const _Stump = require( './sprites/Stump/Stump')
const _Duck = require( './sprites/Duck/Duck')
const _Dragonfly = require( './sprites/Dragonfly/Dragonfly')
const _Trap = require( './sprites/Trap/Trap')
const _Ant = require( './sprites/Ant/Ant')
const _Egg = require( './sprites/Egg/Egg')
const _Basket = require( './sprites/Basket/Basket')
const _BeaverGround = require( './sprites/BeaverGround/BeaverGround')
const _Tombstone = require( './sprites/Tombstone/Tombstone')
const _DeadBeaver = require( './sprites/DeadBeaver/DeadBeaver')
const _BeaverRiverLvl0 = require( './sprites/BeaverRiverLvl0/BeaverRiverLvl0')
const _BeaverRiverLvl1 = require( './sprites/BeaverRiverLvl1/BeaverRiverLvl1')
const _BeaverRiverLvl2 = require( './sprites/BeaverRiverLvl2/BeaverRiverLvl2')
const _BeaverRiverLvl3 = require( './sprites/BeaverRiverLvl3/BeaverRiverLvl3')
const _Candy8 = require( './sprites/Candy8/Candy8')
const _Candy7 = require( './sprites/Candy7/Candy7')
const _Candy6 = require( './sprites/Candy6/Candy6')
const _Candy5 = require( './sprites/Candy5/Candy5')
const _Candy4 = require( './sprites/Candy4/Candy4')
const _Candy3 = require( './sprites/Candy3/Candy3')
const _CandyHat = require( './sprites/CandyHat/CandyHat')
const _Candy2 = require( './sprites/Candy2/Candy2')
const _Candy1 = require( './sprites/Candy1/Candy1')
const _Bird6Ground = require( './sprites/Bird6Ground/Bird6Ground')
const _Bird6Roof = require( './sprites/Bird6Roof/Bird6Roof')
const _Bird6Drugged = require( './sprites/Bird6Drugged/Bird6Drugged')
const _Bird5Roof = require( './sprites/Bird5Roof/Bird5Roof')
const _Bird5Drugged = require( './sprites/Bird5Drugged/Bird5Drugged')
const _Bird5Ground = require( './sprites/Bird5Ground/Bird5Ground')
const _Bird4Roof = require( './sprites/Bird4Roof/Bird4Roof')
const _Bird4Drugged = require( './sprites/Bird4Drugged/Bird4Drugged')
const _Ants = require( './sprites/Ants/Ants')
const _Bird4Ground = require( './sprites/Bird4Ground/Bird4Ground')
const _Bird3Roof = require( './sprites/Bird3Roof/Bird3Roof')
const _Bird3Ground = require( './sprites/Bird3Ground/Bird3Ground')
const _Bird3Drugged = require( './sprites/Bird3Drugged/Bird3Drugged')
const _Bird2Drugged = require( './sprites/Bird2Drugged/Bird2Drugged')
const _Bird2Roof = require( './sprites/Bird2Roof/Bird2Roof')
const _Bird2Ground = require( './sprites/Bird2Ground/Bird2Ground')
const _Bird1Drugged = require( './sprites/Bird1Drugged/Bird1Drugged')
const _Bird1Drugged2 = require( './sprites/Bird1Drugged2/Bird1Drugged2')
const _Bird1Roof = require( './sprites/Bird1Roof/Bird1Roof')
const _Bird1Ground = require( './sprites/Bird1Ground/Bird1Ground')
const _NurseXrayFull = require( './sprites/NurseXrayFull/NurseXrayFull')
const _NurseXray = require( './sprites/NurseXray/NurseXray')
const _Nurse = require( './sprites/Nurse/Nurse')
const _Hole = require( './sprites/Hole/Hole')
const _Buriedbox = require( './sprites/Buriedbox/Buriedbox')
const _Dirtpatch = require( './sprites/Dirtpatch/Dirtpatch')
const _Rocks = require( './sprites/Rocks/Rocks')
const _Ribbon = require( './sprites/Ribbon/Ribbon')
const _Tinyribbon = require( './sprites/Tinyribbon/Tinyribbon')
const _IsabelleXrayFull = require( './sprites/IsabelleXrayFull/IsabelleXrayFull')
const _IsabelleXray = require( './sprites/IsabelleXray/IsabelleXray')
const _Isabelle = require( './sprites/Isabelle/Isabelle')
const _IsabelleSkirt = require( './sprites/IsabelleSkirt/IsabelleSkirt')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _MaxineXrayFull = require( './sprites/MaxineXrayFull/MaxineXrayFull')
const _MaxineXray = require( './sprites/MaxineXray/MaxineXray')
const _Maxine = require( './sprites/Maxine/Maxine')
const _BigTree = require( './sprites/BigTree/BigTree')
const _ForestVines = require( './sprites/ForestVines/ForestVines')
const _Sunsetoverlay = require( './sprites/Sunsetoverlay/Sunsetoverlay')
            const SpriteNames = [_Sky,_Sunsetsky,_TreeBack,_Meadow,_RoadLeft,_RoadRight,_House,_Bushes,_RiverLv3,_RiverrLv2,_RiverLv1,_RiverLv0,_Earth,_Dry,_Watered,_WatercanalLvl0,_WatercanalLvl3,_Stone,_FloraXrayFull,_Flora,_RivercanalLvl0,_RivercanalLvl3,_SmallSprouts,_MediumSprouts,_BigSprouts,_Wood,_Mushrooms,_Tire,_Stump,_Duck,_Dragonfly,_Trap,_Ant,_Egg,_Basket,_BeaverGround,_Tombstone,_DeadBeaver,_BeaverRiverLvl0,_BeaverRiverLvl1,_BeaverRiverLvl2,_BeaverRiverLvl3,_Candy8,_Candy7,_Candy6,_Candy5,_Candy4,_Candy3,_CandyHat,_Candy2,_Candy1,_Bird6Ground,_Bird6Roof,_Bird6Drugged,_Bird5Roof,_Bird5Drugged,_Bird5Ground,_Bird4Roof,_Bird4Drugged,_Ants,_Bird4Ground,_Bird3Roof,_Bird3Ground,_Bird3Drugged,_Bird2Drugged,_Bird2Roof,_Bird2Ground,_Bird1Drugged,_Bird1Drugged2,_Bird1Roof,_Bird1Ground,_NurseXrayFull,_NurseXray,_Nurse,_Hole,_Buriedbox,_Dirtpatch,_Rocks,_Ribbon,_Tinyribbon,_IsabelleXrayFull,_IsabelleXray,_Isabelle,_IsabelleSkirt,_Dollar2,_Dollar1,_MaxineXrayFull,_MaxineXray,_Maxine,_BigTree,_ForestVines,_Sunsetoverlay]
            export default class PreloadSchoolForestGlade extends Scene{
        
            constructor(){
                super('preload_SchoolForestGlade')  
               
            }
            preload() {
            
           
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }

   
                create() {
            this.scene.start('SchoolForestGlade')
        }

    }