
 
import {Scene} from "phaser";
    
            const _Homehall = require( './sprites/Homehall/Homehall')
const _Stairs = require( './sprites/Stairs/Stairs')
const _TrailDown = require( './sprites/TrailDown/TrailDown')
const _TrailToilet = require( './sprites/TrailToilet/TrailToilet')
const _Hole = require( './sprites/Hole/Hole')
const _Doorright = require( './sprites/Doorright/Doorright')
const _Doorwhite = require( './sprites/Doorwhite/Doorwhite')
const _Doorcenter = require( './sprites/Doorcenter/Doorcenter')
const _Doorleft = require( './sprites/Doorleft/Doorleft')
const _Backposter = require( './sprites/Backposter/Backposter')
const _Stop = require( './sprites/Stop/Stop')
const _Cleaningsupply = require( './sprites/Cleaningsupply/Cleaningsupply')
const _Cabinet = require( './sprites/Cabinet/Cabinet')
const _Shelves = require( './sprites/Shelves/Shelves')
const _Candle = require( './sprites/Candle/Candle')
const _Freshener = require( './sprites/Freshener/Freshener')
const _Fire = require( './sprites/Fire/Fire')
const _Saltlamp = require( './sprites/Saltlamp/Saltlamp')
const _Trophies = require( './sprites/Trophies/Trophies')
const _Socket = require( './sprites/Socket/Socket')
const _Table = require( './sprites/Table/Table')
const _Note = require( './sprites/Note/Note')
const _Tableback = require( './sprites/Tableback/Tableback')
const _Lamp = require( './sprites/Lamp/Lamp')
const _Lampground = require( './sprites/Lampground/Lampground')
const _Coathanger = require( './sprites/Coathanger/Coathanger')
const _Umbrellas = require( './sprites/Umbrellas/Umbrellas')
const _Blackumbrella = require( './sprites/Blackumbrella/Blackumbrella')
const _Redumbrella = require( './sprites/Redumbrella/Redumbrella')
const _Shoes = require( './sprites/Shoes/Shoes')
const _Bandaid = require( './sprites/Bandaid/Bandaid')
const _Sword = require( './sprites/Sword/Sword')
const _Family = require( './sprites/Family/Family')
const _Sky = require( './sprites/Sky/Sky')
const _Flowers = require( './sprites/Flowers/Flowers')
const _Handle = require( './sprites/Handle/Handle')
const _Sugarcube1 = require( './sprites/Sugarcube1/Sugarcube1')
const _Sugarcube2 = require( './sprites/Sugarcube2/Sugarcube2')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _Book = require( './sprites/Book/Book')
const _FloraXrayFull = require( './sprites/FloraXrayFull/FloraXrayFull')
const _FloraXray = require( './sprites/FloraXray/FloraXray')
const _Flora = require( './sprites/Flora/Flora')
const _Nightoverlay = require( './sprites/Nightoverlay/Nightoverlay')
            const SpriteNames = [_Homehall,_Stairs,_TrailDown,_TrailToilet,_Hole,_Doorright,_Doorwhite,_Doorcenter,_Doorleft,_Backposter,_Stop,_Cleaningsupply,_Cabinet,_Shelves,_Candle,_Freshener,_Fire,_Saltlamp,_Trophies,_Socket,_Table,_Note,_Tableback,_Lamp,_Lampground,_Coathanger,_Umbrellas,_Blackumbrella,_Redumbrella,_Shoes,_Bandaid,_Sword,_Family,_Sky,_Flowers,_Handle,_Sugarcube1,_Sugarcube2,_Dollar2,_Dollar1,_Book,_FloraXrayFull,_FloraXray,_Flora,_Nightoverlay]
            export default class PreloadHomeHall extends Scene{
        
            constructor(){
                super('preload_HomeHall')  
               
            }
            preload() {
            
           
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }

   
                create() {
            this.scene.start('HomeHall')
        }

    }