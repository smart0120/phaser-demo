
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/SchoolMusicClass.js');
            const _Background = require( './sprites/Background/Background')
const _Platform = require( './sprites/Platform/Platform')
const _Speakers = require( './sprites/Speakers/Speakers')
const _Cabinet = require( './sprites/Cabinet/Cabinet')
const _Podium = require( './sprites/Podium/Podium')
const _Door = require( './sprites/Door/Door')
const _GlassCase = require( './sprites/GlassCase/GlassCase')
const _Table = require( './sprites/Table/Table')
const _StereoSystem = require( './sprites/StereoSystem/StereoSystem')
const _Gramophone = require( './sprites/Gramophone/Gramophone')
const _Violin = require( './sprites/Violin/Violin')
const _Guitar = require( './sprites/Guitar/Guitar')
const _Triangle = require( './sprites/Triangle/Triangle')
const _DiscoBall = require( './sprites/DiscoBall/DiscoBall')
const _Bookcase = require( './sprites/Bookcase/Bookcase')
const _Chairs = require( './sprites/Chairs/Chairs')
const _LindseyXrayFull = require( './sprites/LindseyXrayFull/LindseyXrayFull')
const _LindseyXray = require( './sprites/LindseyXray/LindseyXray')
const _Lindsey = require( './sprites/Lindsey/Lindsey')
const _LindseyStreetwear = require( './sprites/LindseyStreetwear/LindseyStreetwear')
const _LindseyChair = require( './sprites/LindseyChair/LindseyChair')
const _MichaelJacksonStatue = require( './sprites/MichaelJacksonStatue/MichaelJacksonStatue')
            const SpriteNames = [_Background,_Platform,_Speakers,_Cabinet,_Podium,_Door,_GlassCase,_Table,_StereoSystem,_Gramophone,_Violin,_Guitar,_Triangle,_DiscoBall,_Bookcase,_Chairs,_LindseyXrayFull,_LindseyXray,_Lindsey,_LindseyStreetwear,_LindseyChair,_MichaelJacksonStatue]
            
            export default class SchoolMusicClass extends PlayScene{
      
            constructor(){
                super('SchoolMusicClass')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'SchoolMusicClass');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }