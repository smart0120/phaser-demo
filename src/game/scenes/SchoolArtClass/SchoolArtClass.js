
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/SchoolArtClass.js');
            const _ArtClass = require( './sprites/ArtClass/ArtClass')
const _Lines = require( './sprites/Lines/Lines')
const _Shelf = require( './sprites/Shelf/Shelf')
const _Brush = require( './sprites/Brush/Brush')
const _BigBrush = require( './sprites/BigBrush/BigBrush')
const _Door = require( './sprites/Door/Door')
const _SupplyCloset = require( './sprites/SupplyCloset/SupplyCloset')
const _Paintings = require( './sprites/Paintings/Paintings')
const _Discardedart3 = require( './sprites/Discardedart3/Discardedart3')
const _Discardedart2 = require( './sprites/Discardedart2/Discardedart2')
const _Discardedart1 = require( './sprites/Discardedart1/Discardedart1')
const _Easel1 = require( './sprites/Easel1/Easel1')
const _Easel3 = require( './sprites/Easel3/Easel3')
const _Easel3Sketch = require( './sprites/Easel3Sketch/Easel3Sketch')
const _Easel3Artinprogress = require( './sprites/Easel3Artinprogress/Easel3Artinprogress')
const _Cola = require( './sprites/Cola/Cola')
const _Lollipop = require( './sprites/Lollipop/Lollipop')
const _Donuts = require( './sprites/Donuts/Donuts')
const _StatueRight = require( './sprites/StatueRight/StatueRight')
const _StatueLeft = require( './sprites/StatueLeft/StatueLeft')
const _Chair5 = require( './sprites/Chair5/Chair5')
const _Chair4 = require( './sprites/Chair4/Chair4')
const _Chair3 = require( './sprites/Chair3/Chair3')
const _Chair2 = require( './sprites/Chair2/Chair2')
const _Chair1 = require( './sprites/Chair1/Chair1')
const _Easel2 = require( './sprites/Easel2/Easel2')
const _Ship = require( './sprites/Ship/Ship')
const _ShipSmashed = require( './sprites/ShipSmashed/ShipSmashed')
const _PaintBuckets = require( './sprites/PaintBuckets/PaintBuckets')
const _Kate = require( './sprites/Kate/Kate')
const _Nurse = require( './sprites/Nurse/Nurse')
const _Mrsl = require( './sprites/Mrsl/Mrsl')
const _FloraXrayFull = require( './sprites/FloraXrayFull/FloraXrayFull')
const _FloraXray = require( './sprites/FloraXray/FloraXray')
const _Flora = require( './sprites/Flora/Flora')
const _Book = require( './sprites/Book/Book')
const _IsabelleXrayFull = require( './sprites/IsabelleXrayFull/IsabelleXrayFull')
const _IsabelleXray = require( './sprites/IsabelleXray/IsabelleXray')
const _Isabelle = require( './sprites/Isabelle/Isabelle')
const _IsabelleSkirt = require( './sprites/IsabelleSkirt/IsabelleSkirt')
const _JacklynXrayFull = require( './sprites/JacklynXrayFull/JacklynXrayFull')
const _JacklynXray = require( './sprites/JacklynXray/JacklynXray')
const _Jacklyn = require( './sprites/Jacklyn/Jacklyn')
const _JacklynPose = require( './sprites/JacklynPose/JacklynPose')
const _CatLook = require( './sprites/CatLook/CatLook')
const _CatRun = require( './sprites/CatRun/CatRun')
const _Candy7 = require( './sprites/Candy7/Candy7')
const _Candy6 = require( './sprites/Candy6/Candy6')
const _Candy5 = require( './sprites/Candy5/Candy5')
const _Candy4 = require( './sprites/Candy4/Candy4')
const _Candy3 = require( './sprites/Candy3/Candy3')
const _Candy2 = require( './sprites/Candy2/Candy2')
const _Candy1 = require( './sprites/Candy1/Candy1')
const _LindseyXrayFull = require( './sprites/LindseyXrayFull/LindseyXrayFull')
const _LindseyXray = require( './sprites/LindseyXray/LindseyXray')
const _Lindsey = require( './sprites/Lindsey/Lindsey')
const _Lindseynaked = require( './sprites/Lindseynaked/Lindseynaked')
const _LindseyshirtXray = require( './sprites/LindseyshirtXray/LindseyshirtXray')
const _Lindseyshirt = require( './sprites/Lindseyshirt/Lindseyshirt')
const _Dollar3 = require( './sprites/Dollar3/Dollar3')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
            const SpriteNames = [_ArtClass,_Lines,_Shelf,_Brush,_BigBrush,_Door,_SupplyCloset,_Paintings,_Discardedart3,_Discardedart2,_Discardedart1,_Easel1,_Easel3,_Easel3Sketch,_Easel3Artinprogress,_Cola,_Lollipop,_Donuts,_StatueRight,_StatueLeft,_Chair5,_Chair4,_Chair3,_Chair2,_Chair1,_Easel2,_Ship,_ShipSmashed,_PaintBuckets,_Kate,_Nurse,_Mrsl,_FloraXrayFull,_FloraXray,_Flora,_Book,_IsabelleXrayFull,_IsabelleXray,_Isabelle,_IsabelleSkirt,_JacklynXrayFull,_JacklynXray,_Jacklyn,_JacklynPose,_CatLook,_CatRun,_Candy7,_Candy6,_Candy5,_Candy4,_Candy3,_Candy2,_Candy1,_LindseyXrayFull,_LindseyXray,_Lindsey,_Lindseynaked,_LindseyshirtXray,_Lindseyshirt,_Dollar3,_Dollar2,_Dollar1]
            
            export default class SchoolArtClass extends PlayScene{
      
            constructor(){
                super('SchoolArtClass')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'SchoolArtClass');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }