
import {Scene} from "phaser";

const _flora = require( './sprites/florabandaid_undies/florabandaid_undies')
            const SpriteNames = [_flora]
            export default class PreloadMenuExampleScene extends Scene{

            constructor(){
                super('preload_MenuExampleScene')

            }
            preload() {


                for(const sprite_set of SpriteNames){
                    for(const sprite_name of sprite_set.default){
                        this.load.image(  sprite_name[0],  sprite_name[1]);
                    }
                }
            }


                create() {
            this.scene.start('MenuExample')
        }

    }
