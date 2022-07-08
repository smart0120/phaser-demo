
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/SchoolComputerRoom.js');
            const _WallCeilingFloor = require( './sprites/WallCeilingFloor/WallCeilingFloor')
const _Lamptop = require( './sprites/Lamptop/Lamptop')
const _Door = require( './sprites/Door/Door')
const _Doorframe = require( './sprites/Doorframe/Doorframe')
const _Posterleft = require( './sprites/Posterleft/Posterleft')
const _Boardmid = require( './sprites/Boardmid/Boardmid')
const _Clock = require( './sprites/Clock/Clock')
const _BoardLeft = require( './sprites/BoardLeft/BoardLeft')
const _PaperWallRight = require( './sprites/PaperWallRight/PaperWallRight')
const _PaperWallLeft = require( './sprites/PaperWallLeft/PaperWallLeft')
const _LightSwitch = require( './sprites/LightSwitch/LightSwitch')
const _TeacherChair = require( './sprites/TeacherChair/TeacherChair')
const _TeacherTable = require( './sprites/TeacherTable/TeacherTable')
const _CabinetRight = require( './sprites/CabinetRight/CabinetRight')
const _CableBox = require( './sprites/CableBox/CableBox')
const _OldMachine = require( './sprites/OldMachine/OldMachine')
const _ShelfLeft = require( './sprites/ShelfLeft/ShelfLeft')
const _Mouse = require( './sprites/Mouse/Mouse')
const _Nomousecage = require( './sprites/Nomousecage/Nomousecage')
const _Mousecage = require( './sprites/Mousecage/Mousecage')
const _Server = require( './sprites/Server/Server')
const _Capa2 = require( './sprites/Capa2/Capa2')
const _Servercable = require( './sprites/Servercable/Servercable')
const _Printer = require( './sprites/Printer/Printer')
const _Dollar = require( './sprites/Dollar/Dollar')
const _Stationary = require( './sprites/Stationary/Stationary')
const _Tablettable = require( './sprites/Tablettable/Tablettable')
const _Tablet = require( './sprites/Tablet/Tablet')
const _Projector = require( './sprites/Projector/Projector')
const _MaxineXrayFull = require( './sprites/MaxineXrayFull/MaxineXrayFull')
const _MaxineXray = require( './sprites/MaxineXray/MaxineXray')
const _MaxineXray0 = require( './sprites/MaxineXray0/MaxineXray0')
const _Table = require( './sprites/Table/Table')
const _Screen4 = require( './sprites/Screen4/Screen4')
const _Screen3 = require( './sprites/Screen3/Screen3')
const _Screen2 = require( './sprites/Screen2/Screen2')
const _Screen1 = require( './sprites/Screen1/Screen1')
const _Screen1On = require( './sprites/Screen1On/Screen1On')
const _Video1 = require( './sprites/Video1/Video1')
const _Video2 = require( './sprites/Video2/Video2')
const _Video3 = require( './sprites/Video3/Video3')
const _Videooverlay = require( './sprites/Videooverlay/Videooverlay')
const _Screen2On = require( './sprites/Screen2On/Screen2On')
const _Screen3On = require( './sprites/Screen3On/Screen3On')
const _Screen4On = require( './sprites/Screen4On/Screen4On')
const _Keyboardmouse = require( './sprites/Keyboardmouse/Keyboardmouse')
const _Chair = require( './sprites/Chair/Chair')
const _Nightoverlay = require( './sprites/Nightoverlay/Nightoverlay')
const _Screen1onNight = require( './sprites/Screen1onNight/Screen1onNight')
const _Screen2onNight = require( './sprites/Screen2onNight/Screen2onNight')
const _Screen3onNight = require( './sprites/Screen3onNight/Screen3onNight')
const _Screen4onNight = require( './sprites/Screen4onNight/Screen4onNight')
const _Cyberia = require( './sprites/Cyberia/Cyberia')
            const SpriteNames = [_WallCeilingFloor,_Lamptop,_Door,_Doorframe,_Posterleft,_Boardmid,_Clock,_BoardLeft,_PaperWallRight,_PaperWallLeft,_LightSwitch,_TeacherChair,_TeacherTable,_CabinetRight,_CableBox,_OldMachine,_ShelfLeft,_Mouse,_Nomousecage,_Mousecage,_Server,_Capa2,_Servercable,_Printer,_Dollar,_Stationary,_Tablettable,_Tablet,_Projector,_MaxineXrayFull,_MaxineXray,_MaxineXray0,_Table,_Screen4,_Screen3,_Screen2,_Screen1,_Screen1On,_Video1,_Video2,_Video3,_Videooverlay,_Screen2On,_Screen3On,_Screen4On,_Keyboardmouse,_Chair,_Nightoverlay,_Screen1onNight,_Screen2onNight,_Screen3onNight,_Screen4onNight,_Cyberia]
            
            export default class SchoolComputerRoom extends PlayScene{
      
            constructor(){
                super('SchoolComputerRoom')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'SchoolComputerRoom');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }