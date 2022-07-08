
 
import {Scene} from "phaser";
    
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
            export default class PreloadSchoolMusicClass extends Scene{
        
            constructor(){
                super('preload_SchoolMusicClass')  
               
            }
            preload() {
            
           
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }

   
                create() {
            this.scene.start('SchoolMusicClass')
        }

    }