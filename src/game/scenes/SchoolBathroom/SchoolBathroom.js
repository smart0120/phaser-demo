
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/SchoolBathroom.js');
            const _Bg = require( './sprites/Bg/Bg')
const _Shower2 = require( './sprites/Shower2/Shower2')
const _Shower1 = require( './sprites/Shower1/Shower1')
const _Urinal = require( './sprites/Urinal/Urinal')
const _Sink = require( './sprites/Sink/Sink')
const _SelfieStick = require( './sprites/SelfieStick/SelfieStick')
const _StallDoors = require( './sprites/StallDoors/StallDoors')
const _Door = require( './sprites/Door/Door')
const _CrackedSnowglobe = require( './sprites/CrackedSnowglobe/CrackedSnowglobe')
const _Shoes = require( './sprites/Shoes/Shoes')
const _Soap = require( './sprites/Soap/Soap')
const _Condom = require( './sprites/Condom/Condom')
const _FaceShield = require( './sprites/FaceShield/FaceShield')
const _Cigarettes = require( './sprites/Cigarettes/Cigarettes')
const _Mask = require( './sprites/Mask/Mask')
const _Lizard = require( './sprites/Lizard/Lizard')
const _Basket = require( './sprites/Basket/Basket')
const _Painting = require( './sprites/Painting/Painting')
const _Fork = require( './sprites/Fork/Fork')
const _Lockers = require( './sprites/Lockers/Lockers')
const _Locker3 = require( './sprites/Locker3/Locker3')
const _Locker2 = require( './sprites/Locker2/Locker2')
const _Locker1 = require( './sprites/Locker1/Locker1')
const _HotAirDryer = require( './sprites/HotAirDryer/HotAirDryer')
const _SinksColumns = require( './sprites/SinksColumns/SinksColumns')
const _Sinks = require( './sprites/Sinks/Sinks')
const _Mirror = require( './sprites/Mirror/Mirror')
const _WaterBottle = require( './sprites/WaterBottle/WaterBottle')
const _FloraXrayFull = require( './sprites/FloraXrayFull/FloraXrayFull')
const _FloraXray = require( './sprites/FloraXray/FloraXray')
const _Flora = require( './sprites/Flora/Flora')
            const SpriteNames = [_Bg,_Shower2,_Shower1,_Urinal,_Sink,_SelfieStick,_StallDoors,_Door,_CrackedSnowglobe,_Shoes,_Soap,_Condom,_FaceShield,_Cigarettes,_Mask,_Lizard,_Basket,_Painting,_Fork,_Lockers,_Locker3,_Locker2,_Locker1,_HotAirDryer,_SinksColumns,_Sinks,_Mirror,_WaterBottle,_FloraXrayFull,_FloraXray,_Flora]
            
            export default class SchoolBathroom extends PlayScene{
      
            constructor(){
                super('SchoolBathroom')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'SchoolBathroom');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }