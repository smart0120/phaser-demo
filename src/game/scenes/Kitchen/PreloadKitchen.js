
const background = require('./sprites/bg/bg') ;
import {Scene} from "phaser";

            const _bg = require( './sprites/bg/bg')
const _nightwindow = require( './sprites/nightwindow/nightwindow')
const _Carpets = require( './sprites/Carpets/Carpets')
const _Furniture_03 = require( './sprites/Furniture_03/Furniture_03')
const _Closet = require( './sprites/Closet/Closet')
const _D3 = require( './sprites/D3/D3')
const _D1 = require( './sprites/D1/D1')
const _S1 = require( './sprites/S1/S1')
const _Cupboard = require( './sprites/Cupboard/Cupboard')
const _C1 = require( './sprites/C1/C1')
const _Door = require( './sprites/Door/Door')
const _stove = require( './sprites/stove/stove')
const _pot = require( './sprites/pot/pot')
const _Lights = require( './sprites/Lights/Lights')
const _Furniture_01 = require( './sprites/Furniture_01/Furniture_01')
const _D2 = require( './sprites/D2/D2')
const _Counter = require( './sprites/Counter/Counter')
const _MF = require( './sprites/MF/MF')
const _Barstool_2 = require( './sprites/Barstool_2/Barstool_2')
const _Barstool_1 = require( './sprites/Barstool_1/Barstool_1')
const _Various_back = require( './sprites/Various_back/Various_back')
const _Kettle_Stove = require( './sprites/Kettle_Stove/Kettle_Stove')
const _Kettle = require( './sprites/Kettle/Kettle')
const _Various_front = require( './sprites/Various_front/Various_front')
const _sauce_left = require( './sprites/sauce_left/sauce_left')
const _plant = require( './sprites/plant/plant')
const _plant_right = require( './sprites/plant_right/plant_right')
const _stairs = require( './sprites/stairs/stairs')
const _Clock = require( './sprites/Clock/Clock')
const _squid = require( './sprites/squid/squid')
const _smoke = require( './sprites/smoke/smoke')
const _pants = require( './sprites/pants/pants')
const _spilled_flour = require( './sprites/spilled_flour/spilled_flour')
const _fire = require( './sprites/fire/fire')
const _tipped_squid = require( './sprites/tipped_squid/tipped_squid')
const _glassescase = require( './sprites/glassescase/glassescase')
const _florapain_xray = require( './sprites/florapain_xray/florapain_xray')
const _florapain_undies = require( './sprites/florapain_undies/florapain_undies')
const _florapain = require( './sprites/florapain/florapain')
const _flora_xray = require( './sprites/flora_xray/flora_xray')
const _flora_undies = require( './sprites/flora_undies/flora_undies')
const _flora = require( './sprites/flora/flora')
const _water_bottle = require( './sprites/water_bottle/water_bottle')
const _crouton = require( './sprites/crouton/crouton')
const _florasitting_xray = require( './sprites/florasitting_xray/florasitting_xray')
const _florasitting_undies = require( './sprites/florasitting_undies/florasitting_undies')
const _florasitting = require( './sprites/florasitting/florasitting')
const _florabandaid_xray = require( './sprites/florabandaid_xray/florabandaid_xray')
const _florabandaid_undies = require( './sprites/florabandaid_undies/florabandaid_undies')
const _florabandaid = require( './sprites/florabandaid/florabandaid')
const _momnews_xray = require( './sprites/momnews_xray/momnews_xray')
const _momnews_undies = require( './sprites/momnews_undies/momnews_undies')
const _momnews = require( './sprites/momnews/momnews')
const _momcounter_xray = require( './sprites/momcounter_xray/momcounter_xray')
const _momcounter_undies = require( './sprites/momcounter_undies/momcounter_undies')
const _momcounter = require( './sprites/momcounter/momcounter')
const _momcounter_braless = require( './sprites/momcounter_braless/momcounter_braless')
const _onion = require( './sprites/onion/onion')
const _Lamp_kettle = require( './sprites/Lamp_kettle/Lamp_kettle')
const _smokekettle = require( './sprites/smokekettle/smokekettle')
const _package = require( './sprites/package/package')
const _sugarcube8 = require( './sprites/sugarcube8/sugarcube8')
const _sugarcube9 = require( './sprites/sugarcube9/sugarcube9')
const _sugarcube10 = require( './sprites/sugarcube10/sugarcube10')
const _dollar1 = require( './sprites/dollar1/dollar1')
const _dollar2 = require( './sprites/dollar2/dollar2')
const _dollar3 = require( './sprites/dollar3/dollar3')
const _jacklyn_xray = require( './sprites/jacklyn_xray/jacklyn_xray')
const _jacklyn_undies = require( './sprites/jacklyn_undies/jacklyn_undies')
const _jacklyn = require( './sprites/jacklyn/jacklyn')
const _nightoverlay = require( './sprites/nightoverlay/nightoverlay')
            const SpriteNames = [_bg,_nightwindow,_Carpets,_Furniture_03,_Closet,_D3,_D1,_S1,_Cupboard,_C1,_Door,_stove,_pot,_Lights,_Furniture_01,_D2,_Counter,_MF,_Barstool_2,_Barstool_1,_Various_back,_Kettle_Stove,_Kettle,_Various_front,_sauce_left,_plant,_plant_right,_stairs,_Clock,_squid,_smoke,_pants,_spilled_flour,_fire,_tipped_squid,_glassescase,_florapain_xray,_florapain_undies,_florapain,_flora_xray,_flora_undies,_flora,_water_bottle,_crouton,_florasitting_xray,_florasitting_undies,_florasitting,_florabandaid_xray,_florabandaid_undies,_florabandaid,_momnews_xray,_momnews_undies,_momnews,_momcounter_xray,_momcounter_undies,_momcounter,_momcounter_braless,_onion,_Lamp_kettle,_smokekettle,_package,_sugarcube8,_sugarcube9,_sugarcube10,_dollar1,_dollar2,_dollar3,_jacklyn_xray,_jacklyn_undies,_jacklyn,_nightoverlay]
            export default class PreloadKitchen extends Scene{

            constructor(){
                super('preload_Kitchen')

            }
            preload() {
                this.load.image(background.default[0][0],background.default[0][1]);
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(sprite_name[0],  sprite_name[1]);
                    }
                }
            }


                create() {
            this.scene.start('Kitchen')
        }

    }
