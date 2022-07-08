
 
import {Scene} from "phaser";
    
            const _EnglishClassroom = require( './sprites/EnglishClassroom/EnglishClassroom')
const _Lines = require( './sprites/Lines/Lines')
const _Quote07 = require( './sprites/Quote07/Quote07')
const _Quote06 = require( './sprites/Quote06/Quote06')
const _Quote05 = require( './sprites/Quote05/Quote05')
const _Quote04 = require( './sprites/Quote04/Quote04')
const _Quote03 = require( './sprites/Quote03/Quote03')
const _Quote02 = require( './sprites/Quote02/Quote02')
const _Quote01 = require( './sprites/Quote01/Quote01')
const _Blackboard = require( './sprites/Blackboard/Blackboard')
const _Chalk = require( './sprites/Chalk/Chalk')
const _BigBoxChalk = require( './sprites/BigBoxChalk/BigBoxChalk')
const _Plackard = require( './sprites/Plackard/Plackard')
const _FurnitureBack = require( './sprites/FurnitureBack/FurnitureBack')
const _Beanbag = require( './sprites/Beanbag/Beanbag')
const _Door = require( './sprites/Door/Door')
const _FurnitureRight = require( './sprites/FurnitureRight/FurnitureRight')
const _Bookshelf = require( './sprites/Bookshelf/Bookshelf')
const _LindseyXrayFull = require( './sprites/LindseyXrayFull/LindseyXrayFull')
const _LindseyXray = require( './sprites/LindseyXray/LindseyXray')
const _Lindsey = require( './sprites/Lindsey/Lindsey')
const _Safe = require( './sprites/Safe/Safe')
const _Chairback = require( './sprites/Chairback/Chairback')
const _Desk4 = require( './sprites/Desk4/Desk4')
const _Desk3 = require( './sprites/Desk3/Desk3')
const _Desk2 = require( './sprites/Desk2/Desk2')
const _Desk1 = require( './sprites/Desk1/Desk1')
const _ChairRight = require( './sprites/ChairRight/ChairRight')
const _TableBack = require( './sprites/TableBack/TableBack')
const _Books = require( './sprites/Books/Books')
const _Cabinet = require( './sprites/Cabinet/Cabinet')
const _TeacherChair = require( './sprites/TeacherChair/TeacherChair')
const _TeacherDesk = require( './sprites/TeacherDesk/TeacherDesk')
const _DesksFront = require( './sprites/DesksFront/DesksFront')
const _ChairLeft = require( './sprites/ChairLeft/ChairLeft')
const _Clock = require( './sprites/Clock/Clock')
const _IsabelleXrayFull = require( './sprites/IsabelleXrayFull/IsabelleXrayFull')
const _IsabelleXray = require( './sprites/IsabelleXray/IsabelleXray')
const _Isabelle = require( './sprites/Isabelle/Isabelle')
const _IsabelleSkirt = require( './sprites/IsabelleSkirt/IsabelleSkirt')
const _CouchIsabelle = require( './sprites/CouchIsabelle/CouchIsabelle')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
const _Book = require( './sprites/Book/Book')
            const SpriteNames = [_EnglishClassroom,_Lines,_Quote07,_Quote06,_Quote05,_Quote04,_Quote03,_Quote02,_Quote01,_Blackboard,_Chalk,_BigBoxChalk,_Plackard,_FurnitureBack,_Beanbag,_Door,_FurnitureRight,_Bookshelf,_LindseyXrayFull,_LindseyXray,_Lindsey,_Safe,_Chairback,_Desk4,_Desk3,_Desk2,_Desk1,_ChairRight,_TableBack,_Books,_Cabinet,_TeacherChair,_TeacherDesk,_DesksFront,_ChairLeft,_Clock,_IsabelleXrayFull,_IsabelleXray,_Isabelle,_IsabelleSkirt,_CouchIsabelle,_Dollar1,_Dollar2,_Book]
            export default class PreloadSchoolEnglishClassroom extends Scene{
        
            constructor(){
                super('preload_SchoolEnglishClassroom')  
               
            }
            preload() {
            
           
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }

   
                create() {
            this.scene.start('SchoolEnglishClassroom')
        }

    }