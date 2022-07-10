
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/TitleCArd.js');
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
            
            export default class TitleCArd extends PlayScene{
      
            constructor(){
                super('TitleCArd')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'TitleCArd');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }