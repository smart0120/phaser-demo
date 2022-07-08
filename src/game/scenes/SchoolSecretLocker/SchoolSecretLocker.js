
const TextBoxesx= require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a=>TextBoxesx[a]);
 
import PlayScene from '@/game/scenes/PlayScene'
    const EventsData = require('./sceneevents/SchoolSecretLocker.js');
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
            
            export default class SchoolSecretLocker extends PlayScene{
      
            constructor(){
                super('SchoolSecretLocker')  
                this.SceneEvents = new EventsData.default();
            }
                create(){
             
                if(this.SpriteList.length !==0)                       
                  this.SpriteList.splice(0,this.SpriteList.length);
           
                
                for(const sprite_name of SpriteNames){
                        this.createSprite(sprite_name,'SchoolSecretLocker');
                }
              for(const textbox of TextBoxes){
                  this.createTextBox(textbox);
                    }
 super.create();
                }
                

            
        }