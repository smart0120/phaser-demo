
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/SchoolClubroom.js');
            const _Background = require( './sprites/Background/Background')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _TrashCan = require( './sprites/TrashCan/TrashCan')
const _Worldmap = require( './sprites/Worldmap/Worldmap')
const _Closet = require( './sprites/Closet/Closet')
const _Blackboard = require( './sprites/Blackboard/Blackboard')
const _Vent = require( './sprites/Vent/Vent')
const _BoxMoved = require( './sprites/BoxMoved/BoxMoved')
const _LocatorMoved = require( './sprites/LocatorMoved/LocatorMoved')
const _Box = require( './sprites/Box/Box')
const _Table = require( './sprites/Table/Table')
const _BooksBack = require( './sprites/BooksBack/BooksBack')
const _Books = require( './sprites/Books/Books')
const _Computer = require( './sprites/Computer/Computer')
const _Typewriter = require( './sprites/Typewriter/Typewriter')
const _Camera = require( './sprites/Camera/Camera')
const _Bookshelf = require( './sprites/Bookshelf/Bookshelf')
const _Chest = require( './sprites/Chest/Chest')
const _Newspapers = require( './sprites/Newspapers/Newspapers')
const _Locator = require( './sprites/Locator/Locator')
const _Doll = require( './sprites/Doll/Doll')
const _Eyelessdoll = require( './sprites/Eyelessdoll/Eyelessdoll')
const _Dollsmoke = require( './sprites/Dollsmoke/Dollsmoke')
const _MagnetPrison = require( './sprites/MagnetPrison/MagnetPrison')
const _Mirror = require( './sprites/Mirror/Mirror')
const _Light = require( './sprites/Light/Light')
const _CatHidden = require( './sprites/CatHidden/CatHidden')
const _CatSleeping = require( './sprites/CatSleeping/CatSleeping')
const _MaxineXrayFull = require( './sprites/MaxineXrayFull/MaxineXrayFull')
const _MaxineXray = require( './sprites/MaxineXray/MaxineXray')
const _Maxine = require( './sprites/Maxine/Maxine')
const _Chairback = require( './sprites/Chairback/Chairback')
const _CatLick = require( './sprites/CatLick/CatLick')
const _CatYarn = require( './sprites/CatYarn/CatYarn')
const _PosterCopy = require( './sprites/PosterCopy/PosterCopy')
            const SpriteNames = [_Background,_Dollar2,_Dollar1,_TrashCan,_Worldmap,_Closet,_Blackboard,_Vent,_BoxMoved,_LocatorMoved,_Box,_Table,_BooksBack,_Books,_Computer,_Typewriter,_Camera,_Bookshelf,_Chest,_Newspapers,_Locator,_Doll,_Eyelessdoll,_Dollsmoke,_MagnetPrison,_Mirror,_Light,_CatHidden,_CatSleeping,_MaxineXrayFull,_MaxineXray,_Maxine,_Chairback,_CatLick,_CatYarn,_PosterCopy]
            
            export default class SchoolClubroom extends PlayScene{
      
            constructor(){
                super('SchoolClubroom')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'SchoolClubroom');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }