
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/HomeBathroom.js');
            const _Fondo = require( './sprites/Fondo/Fondo')
const _Bathroom = require( './sprites/Bathroom/Bathroom')
const _Poster = require( './sprites/Poster/Poster')
const _Door = require( './sprites/Door/Door')
const _Mirror = require( './sprites/Mirror/Mirror')
const _Bathrobe = require( './sprites/Bathrobe/Bathrobe')
const _Carpet = require( './sprites/Carpet/Carpet')
const _Emptybasket = require( './sprites/Emptybasket/Emptybasket')
const _Clothes = require( './sprites/Clothes/Clothes')
const _Toilet = require( './sprites/Toilet/Toilet')
const _Bathtub = require( './sprites/Bathtub/Bathtub')
const _Sink = require( './sprites/Sink/Sink')
const _Water = require( './sprites/Water/Water')
const _Vapor = require( './sprites/Vapor/Vapor')
const _Detergent = require( './sprites/Detergent/Detergent')
const _Waterpuddles = require( './sprites/Waterpuddles/Waterpuddles')
const _Wateroverflow = require( './sprites/Wateroverflow/Wateroverflow')
const _Clothes0 = require( './sprites/Clothes0/Clothes0')
const _Waterclothes = require( './sprites/Waterclothes/Waterclothes')
const _Tissues = require( './sprites/Tissues/Tissues')
const _Garbage = require( './sprites/Garbage/Garbage')
const _ClotheslineClothes = require( './sprites/ClotheslineClothes/ClotheslineClothes')
const _Clothesline = require( './sprites/Clothesline/Clothesline')
const _Wetlaundry4 = require( './sprites/Wetlaundry4/Wetlaundry4')
const _Wetlaundry3 = require( './sprites/Wetlaundry3/Wetlaundry3')
const _Wetlaundry2 = require( './sprites/Wetlaundry2/Wetlaundry2')
const _Wetlaundry1 = require( './sprites/Wetlaundry1/Wetlaundry1')
const _Flora = require( './sprites/Flora/Flora')
const _Sugarcube6 = require( './sprites/Sugarcube6/Sugarcube6')
const _Sugarcube7 = require( './sprites/Sugarcube7/Sugarcube7')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _Lipstickwriting = require( './sprites/Lipstickwriting/Lipstickwriting')
const _Garbagedown = require( './sprites/Garbagedown/Garbagedown')
const _Basketdown = require( './sprites/Basketdown/Basketdown')
const _Pocketmirror = require( './sprites/Pocketmirror/Pocketmirror')
const _Trash = require( './sprites/Trash/Trash')
const _Piss = require( './sprites/Piss/Piss')
const _Fallenrobe = require( './sprites/Fallenrobe/Fallenrobe')
const _Laundry7 = require( './sprites/Laundry7/Laundry7')
const _Laundry6 = require( './sprites/Laundry6/Laundry6')
const _Laundry5 = require( './sprites/Laundry5/Laundry5')
const _Laundry4 = require( './sprites/Laundry4/Laundry4')
const _Laundry3 = require( './sprites/Laundry3/Laundry3')
const _Laundry2 = require( './sprites/Laundry2/Laundry2')
const _Laundry1 = require( './sprites/Laundry1/Laundry1')
const _Nightoverlay = require( './sprites/Nightoverlay/Nightoverlay')
            const SpriteNames = [_Fondo,_Bathroom,_Poster,_Door,_Mirror,_Bathrobe,_Carpet,_Emptybasket,_Clothes,_Toilet,_Bathtub,_Sink,_Water,_Vapor,_Detergent,_Waterpuddles,_Wateroverflow,_Clothes0,_Waterclothes,_Tissues,_Garbage,_ClotheslineClothes,_Clothesline,_Wetlaundry4,_Wetlaundry3,_Wetlaundry2,_Wetlaundry1,_Flora,_Sugarcube6,_Sugarcube7,_Dollar2,_Dollar1,_Lipstickwriting,_Garbagedown,_Basketdown,_Pocketmirror,_Trash,_Piss,_Fallenrobe,_Laundry7,_Laundry6,_Laundry5,_Laundry4,_Laundry3,_Laundry2,_Laundry1,_Nightoverlay]
            
            export default class HomeBathroom extends PlayScene{
      
            constructor(){
                super('HomeBathroom')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'HomeBathroom');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }