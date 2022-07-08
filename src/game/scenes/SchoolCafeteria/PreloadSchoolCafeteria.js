
 
import {Scene} from "phaser";
    
            const _Security = require( './sprites/Security/Security')
const _Wall = require( './sprites/Wall/Wall')
const _Lines = require( './sprites/Lines/Lines')
const _Door = require( './sprites/Door/Door')
const _Kitchen = require( './sprites/Kitchen/Kitchen')
const _Counterright = require( './sprites/Counterright/Counterright')
const _Coffee = require( './sprites/Coffee/Coffee')
const _Bread = require( './sprites/Bread/Bread')
const _Plate = require( './sprites/Plate/Plate')
const _Salad = require( './sprites/Salad/Salad')
const _Drink = require( './sprites/Drink/Drink')
const _Counterleft = require( './sprites/Counterleft/Counterleft')
const _Table = require( './sprites/Table/Table')
const _Donuts = require( './sprites/Donuts/Donuts')
const _Vendingback = require( './sprites/Vendingback/Vendingback')
const _Vendingleft = require( './sprites/Vendingleft/Vendingleft')
const _ChairH2 = require( './sprites/ChairH2/ChairH2')
const _ChairH1 = require( './sprites/ChairH1/ChairH1')
const _TableH = require( './sprites/TableH/TableH')
const _ChairQ2 = require( './sprites/ChairQ2/ChairQ2')
const _ChairQ1 = require( './sprites/ChairQ1/ChairQ1')
const _TableQ = require( './sprites/TableQ/TableQ')
const _ChairF1 = require( './sprites/ChairF1/ChairF1')
const _ChairF2 = require( './sprites/ChairF2/ChairF2')
const _TableF = require( './sprites/TableF/TableF')
const _ChairE2 = require( './sprites/ChairE2/ChairE2')
const _ChairE1 = require( './sprites/ChairE1/ChairE1')
const _TableE = require( './sprites/TableE/TableE')
const _ChairD2 = require( './sprites/ChairD2/ChairD2')
const _TableD = require( './sprites/TableD/TableD')
const _ChairD1 = require( './sprites/ChairD1/ChairD1')
const _ChairC2 = require( './sprites/ChairC2/ChairC2')
const _TableC = require( './sprites/TableC/TableC')
const _ChairC1 = require( './sprites/ChairC1/ChairC1')
const _ChairB1 = require( './sprites/ChairB1/ChairB1')
const _TableB = require( './sprites/TableB/TableB')
const _MaxineXray = require( './sprites/MaxineXray/MaxineXray')
const _Maxine = require( './sprites/Maxine/Maxine')
const _ChairB2 = require( './sprites/ChairB2/ChairB2')
const _MaxineNewspaperXray = require( './sprites/MaxineNewspaperXray/MaxineNewspaperXray')
const _MaxineNewspaper = require( './sprites/MaxineNewspaper/MaxineNewspaper')
const _ChairA2 = require( './sprites/ChairA2/ChairA2')
const _TableA = require( './sprites/TableA/TableA')
const _ChairA1 = require( './sprites/ChairA1/ChairA1')
const _Pot = require( './sprites/Pot/Pot')
const _IsabelleXrayFull = require( './sprites/IsabelleXrayFull/IsabelleXrayFull')
const _IsabelleXray = require( './sprites/IsabelleXray/IsabelleXray')
const _Isabelle = require( './sprites/Isabelle/Isabelle')
const _LindseyXrayFull = require( './sprites/LindseyXrayFull/LindseyXrayFull')
const _LindseyXray = require( './sprites/LindseyXray/LindseyXray')
const _Lindsey = require( './sprites/Lindsey/Lindsey')
const _MmmDoughnuts = require( './sprites/MmmDoughnuts/MmmDoughnuts')
const _KateXrayFull = require( './sprites/KateXrayFull/KateXrayFull')
const _KateXray = require( './sprites/KateXray/KateXray')
const _Kate = require( './sprites/Kate/Kate')
const _GuardXrayFull = require( './sprites/GuardXrayFull/GuardXrayFull')
const _Guard = require( './sprites/Guard/Guard')
const _NoDonuts = require( './sprites/NoDonuts/NoDonuts')
const _NurseXrayFull = require( './sprites/NurseXrayFull/NurseXrayFull')
const _NurseXray = require( './sprites/NurseXray/NurseXray')
const _Nurse = require( './sprites/Nurse/Nurse')
const _FloraXrayFull = require( './sprites/FloraXrayFull/FloraXrayFull')
const _FloraXray = require( './sprites/FloraXray/FloraXray')
const _Flora = require( './sprites/Flora/Flora')
const _JacklynXrayFull = require( './sprites/JacklynXrayFull/JacklynXrayFull')
const _JacklynXray = require( './sprites/JacklynXray/JacklynXray')
const _Jacklyn = require( './sprites/Jacklyn/Jacklyn')
const _Spinach = require( './sprites/Spinach/Spinach')
const _JoXrayFull = require( './sprites/JoXrayFull/JoXrayFull')
const _JoXray = require( './sprites/JoXray/JoXray')
const _Jo = require( './sprites/Jo/Jo')
const _MomBraless = require( './sprites/MomBraless/MomBraless')
const _Dollar1 = require( './sprites/Dollar1/Dollar1')
const _Dollar2 = require( './sprites/Dollar2/Dollar2')
            const SpriteNames = [_Security,_Wall,_Lines,_Door,_Kitchen,_Counterright,_Coffee,_Bread,_Plate,_Salad,_Drink,_Counterleft,_Table,_Donuts,_Vendingback,_Vendingleft,_ChairH2,_ChairH1,_TableH,_ChairQ2,_ChairQ1,_TableQ,_ChairF1,_ChairF2,_TableF,_ChairE2,_ChairE1,_TableE,_ChairD2,_TableD,_ChairD1,_ChairC2,_TableC,_ChairC1,_ChairB1,_TableB,_MaxineXray,_Maxine,_ChairB2,_MaxineNewspaperXray,_MaxineNewspaper,_ChairA2,_TableA,_ChairA1,_Pot,_IsabelleXrayFull,_IsabelleXray,_Isabelle,_LindseyXrayFull,_LindseyXray,_Lindsey,_MmmDoughnuts,_KateXrayFull,_KateXray,_Kate,_GuardXrayFull,_Guard,_NoDonuts,_NurseXrayFull,_NurseXray,_Nurse,_FloraXrayFull,_FloraXray,_Flora,_JacklynXrayFull,_JacklynXray,_Jacklyn,_Spinach,_JoXrayFull,_JoXray,_Jo,_MomBraless,_Dollar1,_Dollar2]
            export default class PreloadSchoolCafeteria extends Scene{
        
            constructor(){
                super('preload_SchoolCafeteria')  
               
            }
            preload() {
            
           
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }

   
                create() {
            this.scene.start('SchoolCafeteria')
        }

    }