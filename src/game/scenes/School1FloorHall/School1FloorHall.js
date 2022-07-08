
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/School1FloorHall.js');
            const _Ceiling = require( './sprites/Ceiling/Ceiling')
const _Lamps = require( './sprites/Lamps/Lamps')
const _Wall = require( './sprites/Wall/Wall')
const _WalkRight = require( './sprites/WalkRight/WalkRight')
const _WalkLeft = require( './sprites/WalkLeft/WalkLeft')
const _Cctv = require( './sprites/Cctv/Cctv')
const _Electric = require( './sprites/Electric/Electric')
const _Smoke = require( './sprites/Smoke/Smoke')
const _Stairs = require( './sprites/Stairs/Stairs')
const _Door = require( './sprites/Door/Door')
const _Board = require( './sprites/Board/Board')
const _Bin = require( './sprites/Bin/Bin')
const _Water = require( './sprites/Water/Water')
const _WaterFountainGushing = require( './sprites/WaterFountainGushing/WaterFountainGushing')
const _Mcjacket = require( './sprites/Mcjacket/Mcjacket')
const _WaterFountainHoodie = require( './sprites/WaterFountainHoodie/WaterFountainHoodie')
const _Plant = require( './sprites/Plant/Plant')
const _Window = require( './sprites/Window/Window')
const _WindowOpen = require( './sprites/WindowOpen/WindowOpen')
const _ButterfliesoutsideWindowopen = require( './sprites/ButterfliesoutsideWindowopen/ButterfliesoutsideWindowopen')
const _ButterfliesOutside = require( './sprites/ButterfliesOutside/ButterfliesOutside')
const _Plant1F = require( './sprites/Plant1F/Plant1F')
const _ButterfliesInside = require( './sprites/ButterfliesInside/ButterfliesInside')
const _Newspaper = require( './sprites/Newspaper/Newspaper')
const _Vending = require( './sprites/Vending/Vending')
const _Backpack = require( './sprites/Backpack/Backpack')
const _Spinach = require( './sprites/Spinach/Spinach')
const _KateXrayFull = require( './sprites/KateXrayFull/KateXrayFull')
const _KateCheerleaderXray = require( './sprites/KateCheerleaderXray/KateCheerleaderXray')
const _KateCheerleader = require( './sprites/KateCheerleader/KateCheerleader')
const _KateXray = require( './sprites/KateXray/KateXray')
const _Kate = require( './sprites/Kate/Kate')
const _IsabelleXrayFull = require( './sprites/IsabelleXrayFull/IsabelleXrayFull')
const _IsabelleXray = require( './sprites/IsabelleXray/IsabelleXray')
const _IsabelleSkirt = require( './sprites/IsabelleSkirt/IsabelleSkirt')
const _Isabelle = require( './sprites/Isabelle/Isabelle')
const _Candy10 = require( './sprites/Candy10/Candy10')
const _Candy9 = require( './sprites/Candy9/Candy9')
const _Candy8 = require( './sprites/Candy8/Candy8')
const _Candy7 = require( './sprites/Candy7/Candy7')
const _Candy6 = require( './sprites/Candy6/Candy6')
const _Candy5 = require( './sprites/Candy5/Candy5')
const _Candy4 = require( './sprites/Candy4/Candy4')
const _Candy3 = require( './sprites/Candy3/Candy3')
const _Candy2 = require( './sprites/Candy2/Candy2')
const _Candy1 = require( './sprites/Candy1/Candy1')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _Mop = require( './sprites/Mop/Mop')
const _WaterPuddle6 = require( './sprites/WaterPuddle6/WaterPuddle6')
const _WaterPuddle5 = require( './sprites/WaterPuddle5/WaterPuddle5')
const _WaterPuddle4 = require( './sprites/WaterPuddle4/WaterPuddle4')
const _WaterPuddle3 = require( './sprites/WaterPuddle3/WaterPuddle3')
const _WaterPuddle2 = require( './sprites/WaterPuddle2/WaterPuddle2')
const _WaterPuddle1 = require( './sprites/WaterPuddle1/WaterPuddle1')
const _LinePosition1 = require( './sprites/LinePosition1/LinePosition1')
const _LinePosition1v2 = require( './sprites/LinePosition1v2/LinePosition1v2')
const _MaxineXrayFull = require( './sprites/MaxineXrayFull/MaxineXrayFull')
const _MaxineXray = require( './sprites/MaxineXray/MaxineXray')
const _Maxine = require( './sprites/Maxine/Maxine')
const _Magnet = require( './sprites/Magnet/Magnet')
const _Poster = require( './sprites/Poster/Poster')
            const SpriteNames = [_Ceiling,_Lamps,_Wall,_WalkRight,_WalkLeft,_Cctv,_Electric,_Smoke,_Stairs,_Door,_Board,_Bin,_Water,_WaterFountainGushing,_Mcjacket,_WaterFountainHoodie,_Plant,_Window,_WindowOpen,_ButterfliesoutsideWindowopen,_ButterfliesOutside,_Plant1F,_ButterfliesInside,_Newspaper,_Vending,_Backpack,_Spinach,_KateXrayFull,_KateCheerleaderXray,_KateCheerleader,_KateXray,_Kate,_IsabelleXrayFull,_IsabelleXray,_IsabelleSkirt,_Isabelle,_Candy10,_Candy9,_Candy8,_Candy7,_Candy6,_Candy5,_Candy4,_Candy3,_Candy2,_Candy1,_Dollar2,_Dollar1,_Mop,_WaterPuddle6,_WaterPuddle5,_WaterPuddle4,_WaterPuddle3,_WaterPuddle2,_WaterPuddle1,_LinePosition1,_LinePosition1v2,_MaxineXrayFull,_MaxineXray,_Maxine,_Magnet,_Poster]
            
            export default class School1FloorHall extends PlayScene{
      
            constructor(){
                super('School1FloorHall')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'School1FloorHall');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }