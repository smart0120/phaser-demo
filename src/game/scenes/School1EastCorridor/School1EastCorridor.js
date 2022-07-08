
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/School1EastCorridor.js');
            const _1Fecorridor = require( './sprites/1Fecorridor/1Fecorridor')
const _LockerSign = require( './sprites/LockerSign/LockerSign')
const _LockerDoor = require( './sprites/LockerDoor/LockerDoor')
const _Bathroom = require( './sprites/Bathroom/Bathroom')
const _BathroomSign = require( './sprites/BathroomSign/BathroomSign')
const _Pool = require( './sprites/Pool/Pool')
const _PoolSign = require( './sprites/PoolSign/PoolSign')
const _Gym = require( './sprites/Gym/Gym')
const _GymSign = require( './sprites/GymSign/GymSign')
const _Vent = require( './sprites/Vent/Vent')
const _Openvent = require( './sprites/Openvent/Openvent')
const _Lamp = require( './sprites/Lamp/Lamp')
const _Lampoff = require( './sprites/Lampoff/Lampoff')
const _Banner = require( './sprites/Banner/Banner')
const _Shoesbox = require( './sprites/Shoesbox/Shoesbox')
const _Shoes1 = require( './sprites/Shoes1/Shoes1')
const _Shoes2 = require( './sprites/Shoes2/Shoes2')
const _Shoes3 = require( './sprites/Shoes3/Shoes3')
const _Shoes4 = require( './sprites/Shoes4/Shoes4')
const _Shoes5 = require( './sprites/Shoes5/Shoes5')
const _Shoes6 = require( './sprites/Shoes6/Shoes6')
const _Shoes7 = require( './sprites/Shoes7/Shoes7')
const _Shoes8 = require( './sprites/Shoes8/Shoes8')
const _Shoes9 = require( './sprites/Shoes9/Shoes9')
const _Shoes10 = require( './sprites/Shoes10/Shoes10')
const _Shoes11 = require( './sprites/Shoes11/Shoes11')
const _Pileofshoes1 = require( './sprites/Pileofshoes1/Pileofshoes1')
const _Pileofshoes2 = require( './sprites/Pileofshoes2/Pileofshoes2')
const _Pileofshoes3 = require( './sprites/Pileofshoes3/Pileofshoes3')
const _Pileofshoes4 = require( './sprites/Pileofshoes4/Pileofshoes4')
const _Pileofshoes5 = require( './sprites/Pileofshoes5/Pileofshoes5')
const _Pileofshoes6 = require( './sprites/Pileofshoes6/Pileofshoes6')
const _Pileofshoes7 = require( './sprites/Pileofshoes7/Pileofshoes7')
const _Pileofshoes8 = require( './sprites/Pileofshoes8/Pileofshoes8')
const _Pileofshoes9 = require( './sprites/Pileofshoes9/Pileofshoes9')
const _Pileofshoes10 = require( './sprites/Pileofshoes10/Pileofshoes10')
const _Pileofshoes11 = require( './sprites/Pileofshoes11/Pileofshoes11')
const _Pileofshoes12 = require( './sprites/Pileofshoes12/Pileofshoes12')
const _Pileofshoes13 = require( './sprites/Pileofshoes13/Pileofshoes13')
const _Pileofshoes14 = require( './sprites/Pileofshoes14/Pileofshoes14')
const _Pileofshoes15 = require( './sprites/Pileofshoes15/Pileofshoes15')
const _Pileofshoes16 = require( './sprites/Pileofshoes16/Pileofshoes16')
const _Pileofshoes17 = require( './sprites/Pileofshoes17/Pileofshoes17')
const _Photos = require( './sprites/Photos/Photos')
const _Board = require( './sprites/Board/Board')
const _Poster = require( './sprites/Poster/Poster')
const _Trophycase = require( './sprites/Trophycase/Trophycase')
const _Trophies = require( './sprites/Trophies/Trophies')
const _Glass = require( './sprites/Glass/Glass')
const _KateXrayFull = require( './sprites/KateXrayFull/KateXrayFull')
const _KateXray = require( './sprites/KateXray/KateXray')
const _Kate = require( './sprites/Kate/Kate')
const _MrslXrayFull = require( './sprites/MrslXrayFull/MrslXrayFull')
const _MrslXray = require( './sprites/MrslXray/MrslXray')
const _Mrsl = require( './sprites/Mrsl/Mrsl')
const _LindseyXrayFull = require( './sprites/LindseyXrayFull/LindseyXrayFull')
const _LindseyXray = require( './sprites/LindseyXray/LindseyXray')
const _Lindsey = require( './sprites/Lindsey/Lindsey')
const _Trophy = require( './sprites/Trophy/Trophy')
const _FloraXrayFull = require( './sprites/FloraXrayFull/FloraXrayFull')
const _FloraXray = require( './sprites/FloraXray/FloraXray')
const _Flora = require( './sprites/Flora/Flora')
const _Dollar3 = require( './sprites/Dollar3/Dollar3')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _Book = require( './sprites/Book/Book')
const _Poster0 = require( './sprites/Poster0/Poster0')
const _Dark = require( './sprites/Dark/Dark')
const _LinesRoutetoposition2 = require( './sprites/LinesRoutetoposition2/LinesRoutetoposition2')
            const SpriteNames = [_1Fecorridor,_LockerSign,_LockerDoor,_Bathroom,_BathroomSign,_Pool,_PoolSign,_Gym,_GymSign,_Vent,_Openvent,_Lamp,_Lampoff,_Banner,_Shoesbox,_Shoes1,_Shoes2,_Shoes3,_Shoes4,_Shoes5,_Shoes6,_Shoes7,_Shoes8,_Shoes9,_Shoes10,_Shoes11,_Pileofshoes1,_Pileofshoes2,_Pileofshoes3,_Pileofshoes4,_Pileofshoes5,_Pileofshoes6,_Pileofshoes7,_Pileofshoes8,_Pileofshoes9,_Pileofshoes10,_Pileofshoes11,_Pileofshoes12,_Pileofshoes13,_Pileofshoes14,_Pileofshoes15,_Pileofshoes16,_Pileofshoes17,_Photos,_Board,_Poster,_Trophycase,_Trophies,_Glass,_KateXrayFull,_KateXray,_Kate,_MrslXrayFull,_MrslXray,_Mrsl,_LindseyXrayFull,_LindseyXray,_Lindsey,_Trophy,_FloraXrayFull,_FloraXray,_Flora,_Dollar3,_Dollar2,_Dollar1,_Book,_Poster0,_Dark,_LinesRoutetoposition2]
            
            export default class School1EastCorridor extends PlayScene{
      
            constructor(){
                super('School1EastCorridor')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'School1EastCorridor');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }