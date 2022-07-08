
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/SchoolEntrance.js');
            const _School = require( './sprites/School/School')
const _Window = require( './sprites/Window/Window')
const _Nightsky = require( './sprites/Nightsky/Nightsky')
const _Path = require( './sprites/Path/Path')
const _Bush = require( './sprites/Bush/Bush')
const _FloraXrayFullCopia = require( './sprites/FloraXrayFullCopia/FloraXrayFullCopia')
const _FloraXrayCopia = require( './sprites/FloraXrayCopia/FloraXrayCopia')
const _FloraCopia = require( './sprites/FloraCopia/FloraCopia')
const _Door = require( './sprites/Door/Door')
const _Carport = require( './sprites/Carport/Carport')
const _Bus = require( './sprites/Bus/Bus')
const _BusJacklyn = require( './sprites/BusJacklyn/BusJacklyn')
const _BusLove = require( './sprites/BusLove/BusLove')
const _BusLust = require( './sprites/BusLust/BusLust')
const _JacklynXrayFull = require( './sprites/JacklynXrayFull/JacklynXrayFull')
const _JacklynXray = require( './sprites/JacklynXray/JacklynXray')
const _Jacklyn = require( './sprites/Jacklyn/Jacklyn')
const _Ladder = require( './sprites/Ladder/Ladder')
const _Spinach = require( './sprites/Spinach/Spinach')
const _LindseyXrayFull = require( './sprites/LindseyXrayFull/LindseyXrayFull')
const _LindseyXray = require( './sprites/LindseyXray/LindseyXray')
const _Lindsey = require( './sprites/Lindsey/Lindsey')
const _Baseball = require( './sprites/Baseball/Baseball')
const _Wbeaver1 = require( './sprites/Wbeaver1/Wbeaver1')
const _Wbeaver2 = require( './sprites/Wbeaver2/Wbeaver2')
const _Wbeaver3 = require( './sprites/Wbeaver3/Wbeaver3')
const _BeaverRoof = require( './sprites/BeaverRoof/BeaverRoof')
const _Spraycans = require( './sprites/Spraycans/Spraycans')
const _BeaverGround = require( './sprites/BeaverGround/BeaverGround')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Dollar3 = require( './sprites/Dollar3/Dollar3')
const _LeftLamp = require( './sprites/LeftLamp/LeftLamp')
const _LeftbackLamp = require( './sprites/LeftbackLamp/LeftbackLamp')
const _RightbackLamp = require( './sprites/RightbackLamp/RightbackLamp')
const _RightLamp = require( './sprites/RightLamp/RightLamp')
const _Cropcircle = require( './sprites/Cropcircle/Cropcircle')
const _Npc1 = require( './sprites/Npc1/Npc1')
const _Npc2 = require( './sprites/Npc2/Npc2')
const _Npc3 = require( './sprites/Npc3/Npc3')
const _Npc4 = require( './sprites/Npc4/Npc4')
const _Npc5 = require( './sprites/Npc5/Npc5')
const _Nightoverlay = require( './sprites/Nightoverlay/Nightoverlay')
const _LeftLampOn = require( './sprites/LeftLampOn/LeftLampOn')
const _LeftbackLampOn = require( './sprites/LeftbackLampOn/LeftbackLampOn')
const _RightLampOn = require( './sprites/RightLampOn/RightLampOn')
const _RightLampOn0 = require( './sprites/RightLampOn0/RightLampOn0')
const _RightWindowlight = require( './sprites/RightWindowlight/RightWindowlight')
const _LeftWindowlight = require( './sprites/LeftWindowlight/LeftWindowlight')
const _AtticWindowlight = require( './sprites/AtticWindowlight/AtticWindowlight')
            const SpriteNames = [_School,_Window,_Nightsky,_Path,_Bush,_FloraXrayFullCopia,_FloraXrayCopia,_FloraCopia,_Door,_Carport,_Bus,_BusJacklyn,_BusLove,_BusLust,_JacklynXrayFull,_JacklynXray,_Jacklyn,_Ladder,_Spinach,_LindseyXrayFull,_LindseyXray,_Lindsey,_Baseball,_Wbeaver1,_Wbeaver2,_Wbeaver3,_BeaverRoof,_Spraycans,_BeaverGround,_Dollar1,_Dollar2,_Dollar3,_LeftLamp,_LeftbackLamp,_RightbackLamp,_RightLamp,_Cropcircle,_Npc1,_Npc2,_Npc3,_Npc4,_Npc5,_Nightoverlay,_LeftLampOn,_LeftbackLampOn,_RightLampOn,_RightLampOn0,_RightWindowlight,_LeftWindowlight,_AtticWindowlight]
            
            export default class SchoolEntrance extends PlayScene{
      
            constructor(){
                super('SchoolEntrance')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'SchoolEntrance');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }