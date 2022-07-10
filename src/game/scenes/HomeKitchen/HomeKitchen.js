
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);

import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/HomeKitchen.js');
            const _Kitchen = require( './sprites/Kitchen/Kitchen')
const _Nightwindow = require( './sprites/Nightwindow/Nightwindow')
const _Carpets = require( './sprites/Carpets/Carpets')
const _Furniture03 = require( './sprites/Furniture03/Furniture03')
const _Closet = require( './sprites/Closet/Closet')
const _D3 = require( './sprites/D3/D3')
const _D1 = require( './sprites/D1/D1')
const _S1 = require( './sprites/S1/S1')
const _Cupboard = require( './sprites/Cupboard/Cupboard')
const _C1 = require( './sprites/C1/C1')
const _Door = require( './sprites/Door/Door')
const _Stove = require( './sprites/Stove/Stove')
const _Pot = require( './sprites/Pot/Pot')
const _Lights = require( './sprites/Lights/Lights')
const _Furniture01 = require( './sprites/Furniture01/Furniture01')
const _D2 = require( './sprites/D2/D2')
const _Counter = require( './sprites/Counter/Counter')
const _MF = require( './sprites/MF/MF')
const _Barstool2 = require( './sprites/Barstool2/Barstool2')
const _Barstool1 = require( './sprites/Barstool1/Barstool1')
const _VariousBack = require( './sprites/VariousBack/VariousBack')
const _KettleStove = require( './sprites/KettleStove/KettleStove')
const _Kettle = require( './sprites/Kettle/Kettle')
const _VariousFront = require( './sprites/VariousFront/VariousFront')
const _SauceLeft = require( './sprites/SauceLeft/SauceLeft')
const _Plant = require( './sprites/Plant/Plant')
const _PlantRight = require( './sprites/PlantRight/PlantRight')
const _Stairs = require( './sprites/Stairs/Stairs')
const _TrailKitchen = require( './sprites/TrailKitchen/TrailKitchen')
const _Clock = require( './sprites/Clock/Clock')
const _Squid = require( './sprites/Squid/Squid')
const _Smoke = require( './sprites/Smoke/Smoke')
const _LindseyXrayFull = require( './sprites/LindseyXrayFull/LindseyXrayFull')
const _LindseyXray = require( './sprites/LindseyXray/LindseyXray')
const _Lindsey = require( './sprites/Lindsey/Lindsey')
const _Pants = require( './sprites/Pants/Pants')
const _Spilledflour = require( './sprites/Spilledflour/Spilledflour')
const _Fire = require( './sprites/Fire/Fire')
const _Tippedsquid = require( './sprites/Tippedsquid/Tippedsquid')
const _Glassescase = require( './sprites/Glassescase/Glassescase')
const _FlorapainXrayFull = require( './sprites/FlorapainXrayFull/FlorapainXrayFull')
const _FlorapainXray = require( './sprites/FlorapainXray/FlorapainXray')
const _Florapain = require( './sprites/Florapain/Florapain')
const _FlorabandaidcookXrayFull = require( './sprites/FlorabandaidcookXrayFull/FlorabandaidcookXrayFull')
const _Florabandaidcook = require( './sprites/Florabandaidcook/Florabandaidcook')
const _FloraXrayFull = require( './sprites/FloraXrayFull/FloraXrayFull')
const _FloraXray = require( './sprites/FloraXray/FloraXray')
const _Flora = require( './sprites/Flora/Flora')
const _Bandaid = require( './sprites/Bandaid/Bandaid')
const _Waterbottle = require( './sprites/Waterbottle/Waterbottle')
const _Crouton = require( './sprites/Crouton/Crouton')
const _FlorasittingXrayFull = require( './sprites/FlorasittingXrayFull/FlorasittingXrayFull')
const _FlorasittingXray = require( './sprites/FlorasittingXray/FlorasittingXray')
const _Florasitting = require( './sprites/Florasitting/Florasitting')
const _FlorabandaidXrayFull = require( './sprites/FlorabandaidXrayFull/FlorabandaidXrayFull')
const _FlorabandaidXray = require( './sprites/FlorabandaidXray/FlorabandaidXray')
const _Florabandaid = require( './sprites/Florabandaid/Florabandaid')
const _JonewsXrayFull = require( './sprites/JonewsXrayFull/JonewsXrayFull')
const _JonewsXray = require( './sprites/JonewsXray/JonewsXray')
const _Jonews = require( './sprites/Jonews/Jonews')
const _JocounterXrayFull = require( './sprites/JocounterXrayFull/JocounterXrayFull')
const _JocounterXray = require( './sprites/JocounterXray/JocounterXray')
const _Jocounter = require( './sprites/Jocounter/Jocounter')
const _JocounterXrayBraless = require( './sprites/JocounterXrayBraless/JocounterXrayBraless')
const _JocounterBraless = require( './sprites/JocounterBraless/JocounterBraless')
const _Onion = require( './sprites/Onion/Onion')
const _LampKettle = require( './sprites/LampKettle/LampKettle')
const _Smokekettle = require( './sprites/Smokekettle/Smokekettle')
const _Package = require( './sprites/Package/Package')
const _Sugarcube8 = require( './sprites/Sugarcube8/Sugarcube8')
const _Sugarcube9 = require( './sprites/Sugarcube9/Sugarcube9')
const _Sugarcube10 = require( './sprites/Sugarcube10/Sugarcube10')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Dollar3 = require( './sprites/Dollar3/Dollar3')
const _JacklynXrayFull = require( './sprites/JacklynXrayFull/JacklynXrayFull')
const _JacklynXray = require( './sprites/JacklynXray/JacklynXray')
const _Jacklyn = require( './sprites/Jacklyn/Jacklyn')
const _Nightoverlay = require( './sprites/Nightoverlay/Nightoverlay')






             const _Flora_Clothed = require( './sprites/Flora_Clothed/Flora_Clothed')



const SpriteNames = [_Kitchen,_Nightwindow,_Carpets,_Furniture03,_Closet,_D3,_D1,_S1,_Cupboard,_C1,_Door,_Stove,_Pot,_Lights,_Furniture01,_D2,_Counter,_MF,_Barstool2,_Barstool1,_VariousBack,_KettleStove,_Kettle,_VariousFront,_SauceLeft,_Plant,_PlantRight,_Stairs,_TrailKitchen,_Clock,_Squid,_Smoke,_LindseyXrayFull,_LindseyXray,_Lindsey,_Pants,_Spilledflour,_Fire,_Tippedsquid,_Glassescase,_FlorapainXrayFull,_FlorapainXray,_Florapain,_FlorabandaidcookXrayFull,_Florabandaidcook,_FloraXrayFull,_FloraXray,_Flora,_Bandaid,_Waterbottle,_Crouton,_FlorasittingXrayFull,_FlorasittingXray,_Florasitting,_FlorabandaidXrayFull,_FlorabandaidXray,_Florabandaid,_JonewsXrayFull,_JonewsXray,_Jonews,_JocounterXrayFull,_JocounterXray,_Jocounter,_JocounterXrayBraless,_JocounterBraless,_Onion,_LampKettle,_Smokekettle,_Package,_Sugarcube8,_Sugarcube9,_Sugarcube10,_Dollar1,_Dollar2,_Dollar3,_JacklynXrayFull,_JacklynXray,_Jacklyn,_Nightoverlay, _Flora_Clothed]

            export default class HomeKitchen extends PlayScene{

            constructor(){
                super('HomeKitchen')
                this.SceneEvents = new EventsData.default();
            }
                create(){

                if(this.SpriteList.length !==0)
                  this.SpriteList.splice(0,this.SpriteList.length);


                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'HomeKitchen');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }



        }
