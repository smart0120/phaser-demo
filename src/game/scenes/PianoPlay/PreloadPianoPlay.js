
 
import {Scene} from "phaser";
    
            const _ReglaDePerspectiva1 = require( './sprites/ReglaDePerspectiva1/ReglaDePerspectiva1')
const _Crowd = require( './sprites/Crowd/Crowd')
const _Score = require( './sprites/Score/Score')
const _Toplight = require( './sprites/Toplight/Toplight')
const _Capa2 = require( './sprites/Capa2/Capa2')
            const SpriteNames = [_ReglaDePerspectiva1,_Crowd,_Score,_Toplight,_Capa2]
            export default class PreloadPianoPlay extends Scene{
        
            constructor(){
                super('preload_PianoPlay')  
               
            }
            preload() {
            
           
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }

   
                create() {
            this.scene.start('PianoPlay')
        }

    }