
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/SchoolRoofDoor.js');
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
            
            export default class SchoolRoofDoor extends PlayScene{
      
            constructor(){
                super('SchoolRoofDoor')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'SchoolRoofDoor');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }