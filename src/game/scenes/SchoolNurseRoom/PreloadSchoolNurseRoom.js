
 
import {Scene} from "phaser";
    
            const _NurseWall = require( './sprites/NurseWall/NurseWall')
const _Lines = require( './sprites/Lines/Lines')
const _Outside = require( './sprites/Outside/Outside')
const _BoobsRight = require( './sprites/BoobsRight/BoobsRight')
const _SideTable = require( './sprites/SideTable/SideTable')
const _Butt = require( './sprites/Butt/Butt')
const _Rainbow = require( './sprites/Rainbow/Rainbow')
const _Beach = require( './sprites/Beach/Beach')
const _Bin = require( './sprites/Bin/Bin')
const _Clock = require( './sprites/Clock/Clock')
const _Drawing = require( './sprites/Drawing/Drawing')
const _BoobsLeft = require( './sprites/BoobsLeft/BoobsLeft')
const _Curtain = require( './sprites/Curtain/Curtain')
const _Door = require( './sprites/Door/Door')
const _Vent = require( './sprites/Vent/Vent')
const _BedUp = require( './sprites/BedUp/BedUp')
const _Bed = require( './sprites/Bed/Bed')
const _IronBar = require( './sprites/IronBar/IronBar')
const _CurtainOpen = require( './sprites/CurtainOpen/CurtainOpen')
const _CurtainClosed = require( './sprites/CurtainClosed/CurtainClosed')
const _Skeleton = require( './sprites/Skeleton/Skeleton')
const _Table = require( './sprites/Table/Table')
const _BookshelfCenter = require( './sprites/BookshelfCenter/BookshelfCenter')
const _BookshelfLeft = require( './sprites/BookshelfLeft/BookshelfLeft')
const _Misc = require( './sprites/Misc/Misc')
const _MedicalSupplies = require( './sprites/MedicalSupplies/MedicalSupplies')
const _Weight = require( './sprites/Weight/Weight')
const _Desk = require( './sprites/Desk/Desk')
const _Stool = require( './sprites/Stool/Stool')
const _Stethoscope = require( './sprites/Stethoscope/Stethoscope')
const _BooksDesk = require( './sprites/BooksDesk/BooksDesk')
const _Cup = require( './sprites/Cup/Cup')
const _Pot = require( './sprites/Pot/Pot')
const _Bonsai = require( './sprites/Bonsai/Bonsai')
const _Sticks = require( './sprites/Sticks/Sticks')
const _Lollipop = require( './sprites/Lollipop/Lollipop')
const _Teddy = require( './sprites/Teddy/Teddy')
const _Paper = require( './sprites/Paper/Paper')
const _Pen = require( './sprites/Pen/Pen')
const _Laptop = require( './sprites/Laptop/Laptop')
const _BelowDesk = require( './sprites/BelowDesk/BelowDesk')
const _ChairLeft = require( './sprites/ChairLeft/ChairLeft')
const _NurseXrayFull = require( './sprites/NurseXrayFull/NurseXrayFull')
const _NurseXray = require( './sprites/NurseXray/NurseXray')
const _Nurse = require( './sprites/Nurse/Nurse')
const _KateXrayFull = require( './sprites/KateXrayFull/KateXrayFull')
const _KateXray = require( './sprites/KateXray/KateXray')
const _Kate = require( './sprites/Kate/Kate')
const _Strikebook = require( './sprites/Strikebook/Strikebook')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Dollar3 = require( './sprites/Dollar3/Dollar3')
            const SpriteNames = [_NurseWall,_Lines,_Outside,_BoobsRight,_SideTable,_Butt,_Rainbow,_Beach,_Bin,_Clock,_Drawing,_BoobsLeft,_Curtain,_Door,_Vent,_BedUp,_Bed,_IronBar,_CurtainOpen,_CurtainClosed,_Skeleton,_Table,_BookshelfCenter,_BookshelfLeft,_Misc,_MedicalSupplies,_Weight,_Desk,_Stool,_Stethoscope,_BooksDesk,_Cup,_Pot,_Bonsai,_Sticks,_Lollipop,_Teddy,_Paper,_Pen,_Laptop,_BelowDesk,_ChairLeft,_NurseXrayFull,_NurseXray,_Nurse,_KateXrayFull,_KateXray,_Kate,_Strikebook,_Dollar1,_Dollar2,_Dollar3]
            export default class PreloadSchoolNurseRoom extends Scene{
        
            constructor(){
                super('preload_SchoolNurseRoom')  
               
            }
            preload() {
            
           
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }

   
                create() {
            this.scene.start('SchoolNurseRoom')
        }

    }