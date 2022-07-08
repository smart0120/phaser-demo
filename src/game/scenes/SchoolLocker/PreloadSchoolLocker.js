
 
import {Scene} from "phaser";
    
            const _Locker = require( './sprites/Locker/Locker')
const _Post = require( './sprites/Post/Post')
const _Floraposter = require( './sprites/Floraposter/Floraposter')
const _Chocolate = require( './sprites/Chocolate/Chocolate')
const _LindseyDancing = require( './sprites/LindseyDancing/LindseyDancing')
const _Katesoaked = require( './sprites/Katesoaked/Katesoaked')
const _Lunchfinal = require( './sprites/Lunchfinal/Lunchfinal')
const _Pen = require( './sprites/Pen/Pen')
const _Todo = require( './sprites/Todo/Todo')
const _Isabelle = require( './sprites/Isabelle/Isabelle')
const _Kate = require( './sprites/Kate/Kate')
const _Glassescase = require( './sprites/Glassescase/Glassescase')
const _Maxine = require( './sprites/Maxine/Maxine')
const _Maxinewrist = require( './sprites/Maxinewrist/Maxinewrist')
            const SpriteNames = [_Locker,_Post,_Floraposter,_Chocolate,_LindseyDancing,_Katesoaked,_Lunchfinal,_Pen,_Todo,_Isabelle,_Kate,_Glassescase,_Maxine,_Maxinewrist]
            export default class PreloadSchoolLocker extends Scene{
        
            constructor(){
                super('preload_SchoolLocker')  
               
            }
            preload() {
            
           
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }

   
                create() {
            this.scene.start('SchoolLocker')
        }

    }