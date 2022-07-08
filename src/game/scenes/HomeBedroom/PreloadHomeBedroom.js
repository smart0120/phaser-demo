
 
import {Scene} from "phaser";
    
            const _Bedroom = require( './sprites/Bedroom/Bedroom')
const _CleanWalls = require( './sprites/CleanWalls/CleanWalls')
const _CleanPainting = require( './sprites/CleanPainting/CleanPainting')
const _NoPoster = require( './sprites/NoPoster/NoPoster')
const _KingOfSweets = require( './sprites/KingOfSweets/KingOfSweets')
const _Closet = require( './sprites/Closet/Closet')
const _CleanCloset = require( './sprites/CleanCloset/CleanCloset')
const _Carpet = require( './sprites/Carpet/Carpet')
const _CleanCarpet = require( './sprites/CleanCarpet/CleanCarpet')
const _Door = require( './sprites/Door/Door')
const _Bed = require( './sprites/Bed/Bed')
const _CleanBed = require( './sprites/CleanBed/CleanBed')
const _Ouijaboard = require( './sprites/Ouijaboard/Ouijaboard')
const _MaxineXrayFull = require( './sprites/MaxineXrayFull/MaxineXrayFull')
const _MaxineXray = require( './sprites/MaxineXray/MaxineXray')
const _Maxine = require( './sprites/Maxine/Maxine')
const _Pillow = require( './sprites/Pillow/Pillow')
const _Drawers = require( './sprites/Drawers/Drawers')
const _Flashdrive = require( './sprites/Flashdrive/Flashdrive')
const _BookshelveLeft = require( './sprites/BookshelveLeft/BookshelveLeft')
const _Tv = require( './sprites/Tv/Tv')
const _CleanTv = require( './sprites/CleanTv/CleanTv')
const _Controller = require( './sprites/Controller/Controller')
const _CleanController = require( './sprites/CleanController/CleanController')
const _BookshelvesRight = require( './sprites/BookshelvesRight/BookshelvesRight')
const _Desk = require( './sprites/Desk/Desk')
const _CleanDesk = require( './sprites/CleanDesk/CleanDesk')
const _AlarmBroken = require( './sprites/AlarmBroken/AlarmBroken')
const _Alarm = require( './sprites/Alarm/Alarm')
const _CleanAlarm = require( './sprites/CleanAlarm/CleanAlarm')
const _Statuettes = require( './sprites/Statuettes/Statuettes')
const _CleanStatuettes = require( './sprites/CleanStatuettes/CleanStatuettes')
const _SmallPc = require( './sprites/SmallPc/SmallPc')
const _MonitorOn = require( './sprites/MonitorOn/MonitorOn')
const _CapturecardOn = require( './sprites/CapturecardOn/CapturecardOn')
const _BigPc = require( './sprites/BigPc/BigPc')
const _Sugarcube5 = require( './sprites/Sugarcube5/Sugarcube5')
const _Sugarcube4 = require( './sprites/Sugarcube4/Sugarcube4')
const _Sugarcube3 = require( './sprites/Sugarcube3/Sugarcube3')
const _Various = require( './sprites/Various/Various')
const _BooksFloor = require( './sprites/BooksFloor/BooksFloor')
const _WireVhs = require( './sprites/WireVhs/WireVhs')
const _Chair = require( './sprites/Chair/Chair')
const _Clothes = require( './sprites/Clothes/Clothes')
const _PornMagazine = require( './sprites/PornMagazine/PornMagazine')
const _CleanPornMagazine = require( './sprites/CleanPornMagazine/CleanPornMagazine')
const _PizzaBox = require( './sprites/PizzaBox/PizzaBox')
const _CleanPizzaBox = require( './sprites/CleanPizzaBox/CleanPizzaBox')
const _Badge = require( './sprites/Badge/Badge')
const _Tier1Painting = require( './sprites/Tier1Painting/Tier1Painting')
const _Tier2Painting = require( './sprites/Tier2Painting/Tier2Painting')
const _Dollar3 = require( './sprites/Dollar3/Dollar3')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _Book = require( './sprites/Book/Book')
const _Spinach = require( './sprites/Spinach/Spinach')
const _IsabelleXrayFull = require( './sprites/IsabelleXrayFull/IsabelleXrayFull')
const _IsabelleXray = require( './sprites/IsabelleXray/IsabelleXray')
const _Isabelle = require( './sprites/Isabelle/Isabelle')
const _IsabelleSkirt = require( './sprites/IsabelleSkirt/IsabelleSkirt')
const _LindseyXrayFull = require( './sprites/LindseyXrayFull/LindseyXrayFull')
const _LindseyXray = require( './sprites/LindseyXray/LindseyXray')
const _Lindsey = require( './sprites/Lindsey/Lindsey')
const _LindseyPillow = require( './sprites/LindseyPillow/LindseyPillow')
const _Nightoverlay = require( './sprites/Nightoverlay/Nightoverlay')
            const SpriteNames = [_Bedroom,_CleanWalls,_CleanPainting,_NoPoster,_KingOfSweets,_Closet,_CleanCloset,_Carpet,_CleanCarpet,_Door,_Bed,_CleanBed,_Ouijaboard,_MaxineXrayFull,_MaxineXray,_Maxine,_Pillow,_Drawers,_Flashdrive,_BookshelveLeft,_Tv,_CleanTv,_Controller,_CleanController,_BookshelvesRight,_Desk,_CleanDesk,_AlarmBroken,_Alarm,_CleanAlarm,_Statuettes,_CleanStatuettes,_SmallPc,_MonitorOn,_CapturecardOn,_BigPc,_Sugarcube5,_Sugarcube4,_Sugarcube3,_Various,_BooksFloor,_WireVhs,_Chair,_Clothes,_PornMagazine,_CleanPornMagazine,_PizzaBox,_CleanPizzaBox,_Badge,_Tier1Painting,_Tier2Painting,_Dollar3,_Dollar2,_Dollar1,_Book,_Spinach,_IsabelleXrayFull,_IsabelleXray,_Isabelle,_IsabelleSkirt,_LindseyXrayFull,_LindseyXray,_Lindsey,_LindseyPillow,_Nightoverlay]
            export default class PreloadHomeBedroom extends Scene{
        
            constructor(){
                super('preload_HomeBedroom')  
               
            }
            preload() {
            
           
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }

   
                create() {
            this.scene.start('HomeBedroom')
        }

    }