
 
import {Scene} from "phaser";
    
            const _Gym = require( './sprites/Gym/Gym')
const _Light = require( './sprites/Light/Light')
const _Windowleft = require( './sprites/Windowleft/Windowleft')
const _Windowright = require( './sprites/Windowright/Windowright')
const _Scoreboard = require( './sprites/Scoreboard/Scoreboard')
const _Npc1 = require( './sprites/Npc1/Npc1')
const _Bleachers = require( './sprites/Bleachers/Bleachers')
const _Fence = require( './sprites/Fence/Fence')
const _Doorright = require( './sprites/Doorright/Doorright')
const _Doorleft = require( './sprites/Doorleft/Doorleft')
const _Signup = require( './sprites/Signup/Signup')
const _Bin = require( './sprites/Bin/Bin')
const _Vendingmachine = require( './sprites/Vendingmachine/Vendingmachine')
const _Ladder = require( './sprites/Ladder/Ladder')
const _BackboardBottom = require( './sprites/BackboardBottom/BackboardBottom')
const _BackboardTop = require( './sprites/BackboardTop/BackboardTop')
const _Ringleft = require( './sprites/Ringleft/Ringleft')
const _Net = require( './sprites/Net/Net')
const _Hoops = require( './sprites/Hoops/Hoops')
const _Npc3 = require( './sprites/Npc3/Npc3')
const _Ball7 = require( './sprites/Ball7/Ball7')
const _Ball6 = require( './sprites/Ball6/Ball6')
const _Ball5 = require( './sprites/Ball5/Ball5')
const _Ball4 = require( './sprites/Ball4/Ball4')
const _Ball3 = require( './sprites/Ball3/Ball3')
const _Ball2 = require( './sprites/Ball2/Ball2')
const _Ball1 = require( './sprites/Ball1/Ball1')
const _Table = require( './sprites/Table/Table')
const _Shorts = require( './sprites/Shorts/Shorts')
const _Paddles = require( './sprites/Paddles/Paddles')
const _KateXrayFull = require( './sprites/KateXrayFull/KateXrayFull')
const _KateXray = require( './sprites/KateXray/KateXray')
const _Kate = require( './sprites/Kate/Kate')
const _KateCheerleaderXray = require( './sprites/KateCheerleaderXray/KateCheerleaderXray')
const _KateCheerleader = require( './sprites/KateCheerleader/KateCheerleader')
const _MrslXrayFull = require( './sprites/MrslXrayFull/MrslXrayFull')
const _MrslXray = require( './sprites/MrslXray/MrslXray')
const _Mrsl = require( './sprites/Mrsl/Mrsl')
const _IsabelleXrayFull = require( './sprites/IsabelleXrayFull/IsabelleXrayFull')
const _IsabelleXray = require( './sprites/IsabelleXray/IsabelleXray')
const _Isabelle = require( './sprites/Isabelle/Isabelle')
const _IsabelleSkirt = require( './sprites/IsabelleSkirt/IsabelleSkirt')
const _LindseyXrayFull = require( './sprites/LindseyXrayFull/LindseyXrayFull')
const _LindseyXray = require( './sprites/LindseyXray/LindseyXray')
const _Lindsey = require( './sprites/Lindsey/Lindsey')
const _Brokenlight = require( './sprites/Brokenlight/Brokenlight')
const _Lightsoff = require( './sprites/Lightsoff/Lightsoff')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _Book = require( './sprites/Book/Book')
const _Pool = require( './sprites/Pool/Pool')
const _Water = require( './sprites/Water/Water')
const _MaxineXrayFull = require( './sprites/MaxineXrayFull/MaxineXrayFull')
const _MaxineXray = require( './sprites/MaxineXray/MaxineXray')
const _Maxine = require( './sprites/Maxine/Maxine')
const _Magnet = require( './sprites/Magnet/Magnet')
const _Npc2 = require( './sprites/Npc2/Npc2')
const _DarkOverlay = require( './sprites/DarkOverlay/DarkOverlay')
const _Position2 = require( './sprites/Position2/Position2')
            const SpriteNames = [_Gym,_Light,_Windowleft,_Windowright,_Scoreboard,_Npc1,_Bleachers,_Fence,_Doorright,_Doorleft,_Signup,_Bin,_Vendingmachine,_Ladder,_BackboardBottom,_BackboardTop,_Ringleft,_Net,_Hoops,_Npc3,_Ball7,_Ball6,_Ball5,_Ball4,_Ball3,_Ball2,_Ball1,_Table,_Shorts,_Paddles,_KateXrayFull,_KateXray,_Kate,_KateCheerleaderXray,_KateCheerleader,_MrslXrayFull,_MrslXray,_Mrsl,_IsabelleXrayFull,_IsabelleXray,_Isabelle,_IsabelleSkirt,_LindseyXrayFull,_LindseyXray,_Lindsey,_Brokenlight,_Lightsoff,_Dollar2,_Dollar1,_Book,_Pool,_Water,_MaxineXrayFull,_MaxineXray,_Maxine,_Magnet,_Npc2,_DarkOverlay,_Position2]
            export default class PreloadSchoolGym extends Scene{
        
            constructor(){
                super('preload_SchoolGym')  
               
            }
            preload() {
            
           
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }

   
                create() {
            this.scene.start('SchoolGym')
        }

    }