
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
const background = require('./sprites/sky/sky') ;
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/ForestGlade.js');
            const _sky = require( './sprites/sky/sky')
const _sunsetsky = require( './sprites/sunsetsky/sunsetsky')
const _tree_back = require( './sprites/tree_back/tree_back')
const _road_left = require( './sprites/road_left/road_left')
const _road_right = require( './sprites/road_right/road_right')
const _house = require( './sprites/house/house')
const _bushes = require( './sprites/bushes/bushes')
const _river_lv3 = require( './sprites/river_lv3/river_lv3')
const _riverr_lv2 = require( './sprites/riverr_lv2/riverr_lv2')
const _river_lv1 = require( './sprites/river_lv1/river_lv1')
const _river_lv0 = require( './sprites/river_lv0/river_lv0')
const _earth = require( './sprites/earth/earth')
const _dry = require( './sprites/dry/dry')
const _watered = require( './sprites/watered/watered')
const _watercanal_lvl0 = require( './sprites/watercanal_lvl0/watercanal_lvl0')
const _watercanal_lvl3 = require( './sprites/watercanal_lvl3/watercanal_lvl3')
const _stone = require( './sprites/stone/stone')
const _rivercanal_lvl0 = require( './sprites/rivercanal_lvl0/rivercanal_lvl0')
const _rivercanal_lvl3 = require( './sprites/rivercanal_lvl3/rivercanal_lvl3')
const _small_sprouts = require( './sprites/small_sprouts/small_sprouts')
const _medium_sprouts = require( './sprites/medium_sprouts/medium_sprouts')
const _big_sprouts = require( './sprites/big_sprouts/big_sprouts')
const _wood = require( './sprites/wood/wood')
const _mushrooms = require( './sprites/mushrooms/mushrooms')
const _tire = require( './sprites/tire/tire')
const _stump = require( './sprites/stump/stump')
const _duck = require( './sprites/duck/duck')
const _dragonfly = require( './sprites/dragonfly/dragonfly')
const _trap = require( './sprites/trap/trap')
const _ant = require( './sprites/ant/ant')
const _egg = require( './sprites/egg/egg')
const _basket = require( './sprites/basket/basket')
const _Beaver_ground = require( './sprites/Beaver_ground/Beaver_ground')
const _tombstone = require( './sprites/tombstone/tombstone')
const _Dead_beaver = require( './sprites/Dead_beaver/Dead_beaver')
const _Beaver_river_lvl0 = require( './sprites/Beaver_river_lvl0/Beaver_river_lvl0')
const _Beaver_river_lvl1 = require( './sprites/Beaver_river_lvl1/Beaver_river_lvl1')
const _Beaver_river_lvl2 = require( './sprites/Beaver_river_lvl2/Beaver_river_lvl2')
const _Beaver_river_lvl3 = require( './sprites/Beaver_river_lvl3/Beaver_river_lvl3')
const _candy8 = require( './sprites/candy8/candy8')
const _candy7 = require( './sprites/candy7/candy7')
const _candy6 = require( './sprites/candy6/candy6')
const _candy5 = require( './sprites/candy5/candy5')
const _candy4 = require( './sprites/candy4/candy4')
const _candy3 = require( './sprites/candy3/candy3')
const _candy_hat = require( './sprites/candy_hat/candy_hat')
const _candy2 = require( './sprites/candy2/candy2')
const _candy1 = require( './sprites/candy1/candy1')
const _bird6_ground = require( './sprites/bird6_ground/bird6_ground')
const _bird6_roof = require( './sprites/bird6_roof/bird6_roof')
const _bird6_drugged = require( './sprites/bird6_drugged/bird6_drugged')
const _bird5_roof = require( './sprites/bird5_roof/bird5_roof')
const _bird5_drugged = require( './sprites/bird5_drugged/bird5_drugged')
const _bird5_ground = require( './sprites/bird5_ground/bird5_ground')
const _bird4_roof = require( './sprites/bird4_roof/bird4_roof')
const _bird4_drugged = require( './sprites/bird4_drugged/bird4_drugged')
const _bird4_ground = require( './sprites/bird4_ground/bird4_ground')
const _bird3_roof = require( './sprites/bird3_roof/bird3_roof')
const _bird3_ground = require( './sprites/bird3_ground/bird3_ground')
const _bird3_drugged = require( './sprites/bird3_drugged/bird3_drugged')
const _bird2_drugged = require( './sprites/bird2_drugged/bird2_drugged')
const _bird2_roof = require( './sprites/bird2_roof/bird2_roof')
const _bird2_ground = require( './sprites/bird2_ground/bird2_ground')
const _bird1_drugged = require( './sprites/bird1_drugged/bird1_drugged')
const _bird1_roof = require( './sprites/bird1_roof/bird1_roof')
const _bird1_ground = require( './sprites/bird1_ground/bird1_ground')
const _nurse_xray = require( './sprites/nurse_xray/nurse_xray')
const _nurse_undies = require( './sprites/nurse_undies/nurse_undies')
const _nurse = require( './sprites/nurse/nurse')
const _hole = require( './sprites/hole/hole')
const _buriedbox = require( './sprites/buriedbox/buriedbox')
const _grave = require( './sprites/grave/grave')
const _rocks = require( './sprites/rocks/rocks')
const _ribbon = require( './sprites/ribbon/ribbon')
const _isabelle_xray = require( './sprites/isabelle_xray/isabelle_xray')
const _isabelle_undies = require( './sprites/isabelle_undies/isabelle_undies')
const _isabelle = require( './sprites/isabelle/isabelle')
const _dollar2 = require( './sprites/dollar2/dollar2')
const _dollar1 = require( './sprites/dollar1/dollar1')
const _sunsetoverlay = require( './sprites/sunsetoverlay/sunsetoverlay')
            const SpriteNames = [_sky,_sunsetsky,_tree_back,_road_left,_road_right,_house,_bushes,_river_lv3,_riverr_lv2,_river_lv1,_river_lv0,_earth,_dry,_watered,_watercanal_lvl0,_watercanal_lvl3,_stone,_rivercanal_lvl0,_rivercanal_lvl3,_small_sprouts,_medium_sprouts,_big_sprouts,_wood,_mushrooms,_tire,_stump,_duck,_dragonfly,_trap,_ant,_egg,_basket,_Beaver_ground,_tombstone,_Dead_beaver,_Beaver_river_lvl0,_Beaver_river_lvl1,_Beaver_river_lvl2,_Beaver_river_lvl3,_candy8,_candy7,_candy6,_candy5,_candy4,_candy3,_candy_hat,_candy2,_candy1,_bird6_ground,_bird6_roof,_bird6_drugged,_bird5_roof,_bird5_drugged,_bird5_ground,_bird4_roof,_bird4_drugged,_bird4_ground,_bird3_roof,_bird3_ground,_bird3_drugged,_bird2_drugged,_bird2_roof,_bird2_ground,_bird1_drugged,_bird1_roof,_bird1_ground,_nurse_xray,_nurse_undies,_nurse,_hole,_buriedbox,_grave,_rocks,_ribbon,_isabelle_xray,_isabelle_undies,_isabelle,_dollar2,_dollar1,_sunsetoverlay]
            
            export default class ForestGlade extends PlayScene{
        
            constructor(){
                super('ForestGlade')  
                     
            }
                create(){
this.SceneEvents = EventsData;
                this.createSprite(background.default[0][0]);
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name);
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
                }


            
        }