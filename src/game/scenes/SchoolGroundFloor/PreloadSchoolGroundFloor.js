
 
import {Scene} from "phaser";
    
            const _Background = require( './sprites/Background/Background')
const _PuddleEntrance = require( './sprites/PuddleEntrance/PuddleEntrance')
const _ComputerRoom = require( './sprites/ComputerRoom/ComputerRoom')
const _MainStairs = require( './sprites/MainStairs/MainStairs')
const _RoofStairsRight = require( './sprites/RoofStairsRight/RoofStairsRight')
const _RoofStairsLeft = require( './sprites/RoofStairsLeft/RoofStairsLeft')
const _WestHall = require( './sprites/WestHall/WestHall')
const _Lockersback = require( './sprites/Lockersback/Lockersback')
const _Lockersleft = require( './sprites/Lockersleft/Lockersleft')
const _Lockersfront = require( './sprites/Lockersfront/Lockersfront')
const _Guard = require( './sprites/Guard/Guard')
const _Cafeteria = require( './sprites/Cafeteria/Cafeteria')
const _CafeteriaDoors = require( './sprites/CafeteriaDoors/CafeteriaDoors')
const _JanitorDoor = require( './sprites/JanitorDoor/JanitorDoor')
const _Board = require( './sprites/Board/Board')
const _Homeroom = require( './sprites/Homeroom/Homeroom')
const _ArrowDown = require( './sprites/ArrowDown/ArrowDown')
const _ArrowUp = require( './sprites/ArrowUp/ArrowUp')
const _IsabelleXrayFull = require( './sprites/IsabelleXrayFull/IsabelleXrayFull')
const _IsabelleXray = require( './sprites/IsabelleXray/IsabelleXray')
const _Isabelle = require( './sprites/Isabelle/Isabelle')
const _IsabelleSkirt = require( './sprites/IsabelleSkirt/IsabelleSkirt')
const _SpinachLeft = require( './sprites/SpinachLeft/SpinachLeft')
const _SpinachRight = require( './sprites/SpinachRight/SpinachRight')
const _MrslXrayFull = require( './sprites/MrslXrayFull/MrslXrayFull')
const _MrslXray = require( './sprites/MrslXray/MrslXray')
const _Mrsl = require( './sprites/Mrsl/Mrsl')
const _Beaver = require( './sprites/Beaver/Beaver')
const _Discoveredposition = require( './sprites/Discoveredposition/Discoveredposition')
const _Couch = require( './sprites/Couch/Couch')
const _MissingLocker = require( './sprites/MissingLocker/MissingLocker')
const _Tape = require( './sprites/Tape/Tape')
const _Permit = require( './sprites/Permit/Permit')
const _LindseyXrayFull = require( './sprites/LindseyXrayFull/LindseyXrayFull')
const _LindseyXray = require( './sprites/LindseyXray/LindseyXray')
const _Lindsey = require( './sprites/Lindsey/Lindsey')
const _SignDown = require( './sprites/SignDown/SignDown')
const _Sign = require( './sprites/Sign/Sign')
const _LookbackXrayFull = require( './sprites/LookbackXrayFull/LookbackXrayFull')
const _LookbackXray = require( './sprites/LookbackXray/LookbackXray')
const _Lookback = require( './sprites/Lookback/Lookback')
const _LookXrayFull = require( './sprites/LookXrayFull/LookXrayFull')
const _LookXray = require( './sprites/LookXray/LookXray')
const _Look = require( './sprites/Look/Look')
const _Dollar = require( './sprites/Dollar/Dollar')
const _LindseystairsXrayFull = require( './sprites/LindseystairsXrayFull/LindseystairsXrayFull')
const _LindseystairsXray = require( './sprites/LindseystairsXray/LindseystairsXray')
const _Lindseystairs = require( './sprites/Lindseystairs/Lindseystairs')
const _Poster = require( './sprites/Poster/Poster')
const _MaxineXrayFull = require( './sprites/MaxineXrayFull/MaxineXrayFull')
const _MaxineXray = require( './sprites/MaxineXray/MaxineXray')
const _Maxine = require( './sprites/Maxine/Maxine')
const _Npc5 = require( './sprites/Npc5/Npc5')
const _Npc4 = require( './sprites/Npc4/Npc4')
const _Npc3 = require( './sprites/Npc3/Npc3')
const _Npc2 = require( './sprites/Npc2/Npc2')
const _Npc1 = require( './sprites/Npc1/Npc1')
            const SpriteNames = [_Background,_PuddleEntrance,_ComputerRoom,_MainStairs,_RoofStairsRight,_RoofStairsLeft,_WestHall,_Lockersback,_Lockersleft,_Lockersfront,_Guard,_Cafeteria,_CafeteriaDoors,_JanitorDoor,_Board,_Homeroom,_ArrowDown,_ArrowUp,_IsabelleXrayFull,_IsabelleXray,_Isabelle,_IsabelleSkirt,_SpinachLeft,_SpinachRight,_MrslXrayFull,_MrslXray,_Mrsl,_Beaver,_Discoveredposition,_Couch,_MissingLocker,_Tape,_Permit,_LindseyXrayFull,_LindseyXray,_Lindsey,_SignDown,_Sign,_LookbackXrayFull,_LookbackXray,_Lookback,_LookXrayFull,_LookXray,_Look,_Dollar,_LindseystairsXrayFull,_LindseystairsXray,_Lindseystairs,_Poster,_MaxineXrayFull,_MaxineXray,_Maxine,_Npc5,_Npc4,_Npc3,_Npc2,_Npc1]
            export default class PreloadSchoolGroundFloor extends Scene{
        
            constructor(){
                super('preload_SchoolGroundFloor')  
               
            }
            preload() {
            
           
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }

   
                create() {
            this.scene.start('SchoolGroundFloor')
        }

    }