
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/School1WestCorridor.js');
            const _1Fwcorridor = require( './sprites/1Fwcorridor/1Fwcorridor')
const _Library = require( './sprites/Library/Library')
const _Librarysign = require( './sprites/Librarysign/Librarysign')
const _Music = require( './sprites/Music/Music')
const _Musicsign = require( './sprites/Musicsign/Musicsign')
const _English = require( './sprites/English/English')
const _Englishsign = require( './sprites/Englishsign/Englishsign')
const _Position3 = require( './sprites/Position3/Position3')
const _Art = require( './sprites/Art/Art')
const _Arsign = require( './sprites/Arsign/Arsign')
const _Paintings = require( './sprites/Paintings/Paintings')
const _Headmistress = require( './sprites/Headmistress/Headmistress')
const _Riapainting = require( './sprites/Riapainting/Riapainting')
const _Mrslpainting = require( './sprites/Mrslpainting/Mrslpainting')
const _Easel = require( './sprites/Easel/Easel')
const _Stool = require( './sprites/Stool/Stool')
const _Cello = require( './sprites/Cello/Cello')
const _Cellobox = require( './sprites/Cellobox/Cellobox')
const _Bookshelf = require( './sprites/Bookshelf/Bookshelf')
const _Books = require( './sprites/Books/Books')
const _Sofaback = require( './sprites/Sofaback/Sofaback')
const _Table = require( './sprites/Table/Table')
const _Pot = require( './sprites/Pot/Pot')
const _Sofafront = require( './sprites/Sofafront/Sofafront')
const _IsabelleXrayFull = require( './sprites/IsabelleXrayFull/IsabelleXrayFull')
const _IsabelleXray = require( './sprites/IsabelleXray/IsabelleXray')
const _Isabelle = require( './sprites/Isabelle/Isabelle')
const _Piano = require( './sprites/Piano/Piano')
const _Pianostool = require( './sprites/Pianostool/Pianostool')
const _Farcat = require( './sprites/Farcat/Farcat')
const _MrslXrayFull = require( './sprites/MrslXrayFull/MrslXrayFull')
const _MrslXray = require( './sprites/MrslXray/MrslXray')
const _Mrsl = require( './sprites/Mrsl/Mrsl')
const _MrslBraless = require( './sprites/MrslBraless/MrslBraless')
const _Candy11 = require( './sprites/Candy11/Candy11')
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
const _Dollar3 = require( './sprites/Dollar3/Dollar3')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _Book = require( './sprites/Book/Book')
const _Magnet = require( './sprites/Magnet/Magnet')
const _PianoScore = require( './sprites/PianoScore/PianoScore')
const _KateCopy = require( './sprites/KateCopy/KateCopy')
const _KateXrayCopy = require( './sprites/KateXrayCopy/KateXrayCopy')
const _KateXrayFullCopy = require( './sprites/KateXrayFullCopy/KateXrayFullCopy')
const _Closecat = require( './sprites/Closecat/Closecat')
            const SpriteNames = [_1Fwcorridor,_Library,_Librarysign,_Music,_Musicsign,_English,_Englishsign,_Position3,_Art,_Arsign,_Paintings,_Headmistress,_Riapainting,_Mrslpainting,_Easel,_Stool,_Cello,_Cellobox,_Bookshelf,_Books,_Sofaback,_Table,_Pot,_Sofafront,_IsabelleXrayFull,_IsabelleXray,_Isabelle,_Piano,_Pianostool,_Farcat,_MrslXrayFull,_MrslXray,_Mrsl,_MrslBraless,_Candy11,_Candy10,_Candy9,_Candy8,_Candy7,_Candy6,_Candy5,_Candy4,_Candy3,_Candy2,_Candy1,_Dollar3,_Dollar2,_Dollar1,_Book,_Magnet,_PianoScore,_KateCopy,_KateXrayCopy,_KateXrayFullCopy,_Closecat]
            
            export default class School1WestCorridor extends PlayScene{
      
            constructor(){
                super('School1WestCorridor')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'School1WestCorridor');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }