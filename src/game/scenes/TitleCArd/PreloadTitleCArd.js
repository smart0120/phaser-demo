
 
import {Scene} from "phaser";
    
            const _BigBackground = require( './sprites/BigBackground/BigBackground')
const _BlurredBackground = require( './sprites/BlurredBackground/BlurredBackground')
const _BigBlurredBackground = require( './sprites/BigBlurredBackground/BigBlurredBackground')
const _Capa15 = require( './sprites/Capa15/Capa15')
const _Capa16 = require( './sprites/Capa16/Capa16')
const _Overlay = require( './sprites/Overlay/Overlay')
const _Desaturation = require( './sprites/Desaturation/Desaturation')
const _Capa19 = require( './sprites/Capa19/Capa19')
const _Paws = require( './sprites/Paws/Paws')
const _Jacklyn = require( './sprites/Jacklyn/Jacklyn')
const _OnTop = require( './sprites/OnTop/OnTop')
            
 
             const _BallYarn = require( './sprites/BallYarn/BallYarn') 

const SpriteNames = [_BigBackground,_BlurredBackground,_BigBlurredBackground,_Capa15,_Capa16,_Overlay,_Desaturation,_Capa19,_Paws,_Jacklyn,_OnTop, _BallYarn]
            export default class PreloadTitleCArd extends Scene{
        
            constructor(){
                super('preload_TitleCArd')  
               
            }
            preload() {
            
           
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }

   
                create() {
            this.scene.start('TitleCArd')
        }

    }