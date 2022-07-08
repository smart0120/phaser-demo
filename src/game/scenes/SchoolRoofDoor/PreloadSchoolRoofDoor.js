
 
import {Scene} from "phaser";
    
            const _Background = require( './sprites/Background/Background')
const _Plant = require( './sprites/Plant/Plant')
const _WallSign = require( './sprites/WallSign/WallSign')
const _Painting = require( './sprites/Painting/Painting')
const _Web = require( './sprites/Web/Web')
const _Door = require( './sprites/Door/Door')
const _Calendar = require( './sprites/Calendar/Calendar')
const _Locker = require( './sprites/Locker/Locker')
const _Cans = require( './sprites/Cans/Cans')
const _ToiletPaper = require( './sprites/ToiletPaper/ToiletPaper')
const _FireAxe = require( './sprites/FireAxe/FireAxe')
const _NoFireAxe = require( './sprites/NoFireAxe/NoFireAxe')
const _Shadow = require( './sprites/Shadow/Shadow')
const _Lighting = require( './sprites/Lighting/Lighting')
            const SpriteNames = [_Background,_Plant,_WallSign,_Painting,_Web,_Door,_Calendar,_Locker,_Cans,_ToiletPaper,_FireAxe,_NoFireAxe,_Shadow,_Lighting]
            export default class PreloadSchoolRoofDoor extends Scene{
        
            constructor(){
                super('preload_SchoolRoofDoor')  
               
            }
            preload() {
            
           
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }

   
                create() {
            this.scene.start('SchoolRoofDoor')
        }

    }