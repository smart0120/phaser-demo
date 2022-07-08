
 
import {Scene} from "phaser";
    
            const _Locker = require( './sprites/Locker/Locker')
const _Eye = require( './sprites/Eye/Eye')
const _Panel2 = require( './sprites/Panel2/Panel2')
const _Panel1 = require( './sprites/Panel1/Panel1')
const _SecretNote = require( './sprites/SecretNote/SecretNote')
const _Spiderweb = require( './sprites/Spiderweb/Spiderweb')
const _Coin = require( './sprites/Coin/Coin')
const _Key = require( './sprites/Key/Key')
const _JacklynHandUnscrew = require( './sprites/JacklynHandUnscrew/JacklynHandUnscrew')
            const SpriteNames = [_Locker,_Eye,_Panel2,_Panel1,_SecretNote,_Spiderweb,_Coin,_Key,_JacklynHandUnscrew]
            export default class PreloadSchoolSecretLocker extends Scene{
        
            constructor(){
                super('preload_SchoolSecretLocker')  
               
            }
            preload() {
            
           
                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }

   
                create() {
            this.scene.start('SchoolSecretLocker')
        }

    }