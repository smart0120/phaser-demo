
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/SchoolHomeroom.js');
            const _Sky = require( './sprites/Sky/Sky')
const _Trash = require( './sprites/Trash/Trash')
const _Window1 = require( './sprites/Window1/Window1')
const _Rope = require( './sprites/Rope/Rope')
const _Window2 = require( './sprites/Window2/Window2')
const _NoticeBoard = require( './sprites/NoticeBoard/NoticeBoard')
const _Spinach = require( './sprites/Spinach/Spinach')
const _Clock = require( './sprites/Clock/Clock')
const _Flag = require( './sprites/Flag/Flag')
const _Basket = require( './sprites/Basket/Basket')
const _Closet = require( './sprites/Closet/Closet')
const _Door = require( './sprites/Door/Door')
const _Blackboard = require( './sprites/Blackboard/Blackboard')
const _Desk = require( './sprites/Desk/Desk')
const _Globe = require( './sprites/Globe/Globe')
const _NoGlobe = require( './sprites/NoGlobe/NoGlobe')
const _DesksFront = require( './sprites/DesksFront/DesksFront')
const _DesksBack = require( './sprites/DesksBack/DesksBack')
const _CupDesk = require( './sprites/CupDesk/CupDesk')
const _GlobeBall = require( './sprites/GlobeBall/GlobeBall')
const _Yarn = require( './sprites/Yarn/Yarn')
const _Chairs = require( './sprites/Chairs/Chairs')
const _IsabelleXrayFull = require( './sprites/IsabelleXrayFull/IsabelleXrayFull')
const _IsabelleXray = require( './sprites/IsabelleXray/IsabelleXray')
const _Isabelle = require( './sprites/Isabelle/Isabelle')
const _IsabelleSkirt = require( './sprites/IsabelleSkirt/IsabelleSkirt')
const _KateXrayFull = require( './sprites/KateXrayFull/KateXrayFull')
const _KateXray = require( './sprites/KateXray/KateXray')
const _Kate = require( './sprites/Kate/Kate')
const _MrslXrayFull = require( './sprites/MrslXrayFull/MrslXrayFull')
const _MrslXray = require( './sprites/MrslXray/MrslXray')
const _Mrsl = require( './sprites/Mrsl/Mrsl')
const _MrslBraless = require( './sprites/MrslBraless/MrslBraless')
const _Eraser = require( './sprites/Eraser/Eraser')
const _CupLeft = require( './sprites/CupLeft/CupLeft')
const _CupRight = require( './sprites/CupRight/CupRight')
const _CupMiddle = require( './sprites/CupMiddle/CupMiddle')
const _FloraXrayFull = require( './sprites/FloraXrayFull/FloraXrayFull')
const _FloraXray = require( './sprites/FloraXray/FloraXray')
const _Flora = require( './sprites/Flora/Flora')
const _Book = require( './sprites/Book/Book')
const _Dollar3 = require( './sprites/Dollar3/Dollar3')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _Poster = require( './sprites/Poster/Poster')
            const SpriteNames = [_Sky,_Trash,_Window1,_Rope,_Window2,_NoticeBoard,_Spinach,_Clock,_Flag,_Basket,_Closet,_Door,_Blackboard,_Desk,_Globe,_NoGlobe,_DesksFront,_DesksBack,_CupDesk,_GlobeBall,_Yarn,_Chairs,_IsabelleXrayFull,_IsabelleXray,_Isabelle,_IsabelleSkirt,_KateXrayFull,_KateXray,_Kate,_MrslXrayFull,_MrslXray,_Mrsl,_MrslBraless,_Eraser,_CupLeft,_CupRight,_CupMiddle,_FloraXrayFull,_FloraXray,_Flora,_Book,_Dollar3,_Dollar2,_Dollar1,_Poster]
            
            export default class SchoolHomeroom extends PlayScene{
      
            constructor(){
                super('SchoolHomeroom')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'SchoolHomeroom');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }