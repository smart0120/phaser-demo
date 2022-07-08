
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/SchoolAdminWing.js');
            const _Gfwhall = require( './sprites/Gfwhall/Gfwhall')
const _Nursedoor = require( './sprites/Nursedoor/Nursedoor')
const _Headmasterdoor = require( './sprites/Headmasterdoor/Headmasterdoor')
const _Lamp = require( './sprites/Lamp/Lamp')
const _Magazines = require( './sprites/Magazines/Magazines')
const _Bookshelf = require( './sprites/Bookshelf/Bookshelf')
const _SofaRight = require( './sprites/SofaRight/SofaRight')
const _SofaLeft = require( './sprites/SofaLeft/SofaLeft')
const _Table = require( './sprites/Table/Table')
const _Pot = require( './sprites/Pot/Pot')
const _Paintings = require( './sprites/Paintings/Paintings')
const _SunPainting = require( './sprites/SunPainting/SunPainting')
const _SunPaintingHiddenStash = require( './sprites/SunPaintingHiddenStash/SunPaintingHiddenStash')
const _Wine = require( './sprites/Wine/Wine')
const _SunPaintingSide = require( './sprites/SunPaintingSide/SunPaintingSide')
const _Info = require( './sprites/Info/Info')
const _Aquarium = require( './sprites/Aquarium/Aquarium')
const _Beaver = require( './sprites/Beaver/Beaver')
const _Glassdome = require( './sprites/Glassdome/Glassdome')
const _GlassdomeLifted = require( './sprites/GlassdomeLifted/GlassdomeLifted')
const _Vines = require( './sprites/Vines/Vines')
const _Glassvine = require( './sprites/Glassvine/Glassvine')
const _GlassvinePot = require( './sprites/GlassvinePot/GlassvinePot')
const _FloraXray = require( './sprites/FloraXray/FloraXray')
const _FloraUndies = require( './sprites/FloraUndies/FloraUndies')
const _Flora = require( './sprites/Flora/Flora')
const _FlorabandageXrayFull = require( './sprites/FlorabandageXrayFull/FlorabandageXrayFull')
const _FlorabandageXray = require( './sprites/FlorabandageXray/FlorabandageXray')
const _Florabandage = require( './sprites/Florabandage/Florabandage')
const _ReachingVine = require( './sprites/ReachingVine/ReachingVine')
const _Stickynote = require( './sprites/Stickynote/Stickynote')
const _StickynoteLifted = require( './sprites/StickynoteLifted/StickynoteLifted')
const _Book = require( './sprites/Book/Book')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _MaxineXrayFull = require( './sprites/MaxineXrayFull/MaxineXrayFull')
const _MaxineXray = require( './sprites/MaxineXray/MaxineXray')
const _Maxine = require( './sprites/Maxine/Maxine')
const _Pentagram = require( './sprites/Pentagram/Pentagram')
const _IsabelleXrayFull = require( './sprites/IsabelleXrayFull/IsabelleXrayFull')
const _IsabelleXray = require( './sprites/IsabelleXray/IsabelleXray')
const _IsabelleSkirt = require( './sprites/IsabelleSkirt/IsabelleSkirt')
const _Isabelle = require( './sprites/Isabelle/Isabelle')
const _Spinach = require( './sprites/Spinach/Spinach')
const _Poster = require( './sprites/Poster/Poster')
            const SpriteNames = [_Gfwhall,_Nursedoor,_Headmasterdoor,_Lamp,_Magazines,_Bookshelf,_SofaRight,_SofaLeft,_Table,_Pot,_Paintings,_SunPainting,_SunPaintingHiddenStash,_Wine,_SunPaintingSide,_Info,_Aquarium,_Beaver,_Glassdome,_GlassdomeLifted,_Vines,_Glassvine,_GlassvinePot,_FloraXray,_FloraUndies,_Flora,_FlorabandageXrayFull,_FlorabandageXray,_Florabandage,_ReachingVine,_Stickynote,_StickynoteLifted,_Book,_Dollar2,_Dollar1,_MaxineXrayFull,_MaxineXray,_Maxine,_Pentagram,_IsabelleXrayFull,_IsabelleXray,_IsabelleSkirt,_Isabelle,_Spinach,_Poster]
            
            export default class SchoolAdminWing extends PlayScene{
      
            constructor(){
                super('SchoolAdminWing')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'SchoolAdminWing');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }