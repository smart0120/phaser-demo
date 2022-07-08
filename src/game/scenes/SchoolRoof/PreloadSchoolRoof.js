
 
import {Scene} from "phaser";
    
            const _Panorama = require( './sprites/Panorama/Panorama')
const _FloorCopy = require( './sprites/FloorCopy/FloorCopy')
const _Plantsleft = require( './sprites/Plantsleft/Plantsleft')
const _Plantsright = require( './sprites/Plantsright/Plantsright')
const _Building = require( './sprites/Building/Building')
const _Ladder = require( './sprites/Ladder/Ladder')
const _Door = require( './sprites/Door/Door')
const _Greenhouse = require( './sprites/Greenhouse/Greenhouse')
const _Telescopeleft = require( './sprites/Telescopeleft/Telescopeleft')
const _Bench3 = require( './sprites/Bench3/Bench3')
const _Bench2 = require( './sprites/Bench2/Bench2')
const _Bench1 = require( './sprites/Bench1/Bench1')
const _Megaphone = require( './sprites/Megaphone/Megaphone')
            const SpriteNames = [_Panorama,_FloorCopy,_Plantsleft,_Plantsright,_Building,_Ladder,_Door,_Greenhouse,_Telescopeleft,_Bench3,_Bench2,_Bench1,_Megaphone]
            export default class PreloadSchoolRoof extends Scene{
        
            constructor(){
                super('preload_SchoolRoof')  
               
            }
            preload() {
            
           
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }

   
                create() {
            this.scene.start('SchoolRoof')
        }

    }