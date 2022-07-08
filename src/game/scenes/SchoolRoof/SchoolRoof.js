
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/SchoolRoof.js');
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
            
            export default class SchoolRoof extends PlayScene{
      
            constructor(){
                super('SchoolRoof')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'SchoolRoof');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }