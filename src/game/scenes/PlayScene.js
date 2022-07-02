import {Scene} from 'phaser'
import {GroupName} from "@/game/assets/characters/jacklyn_naked1";
import {store} from "@/store";


export default class PlayScene extends Scene {


    constructor() {
        super({key: 'PlayScene'})

    }


    characters = {};

    OnSpriteClick(sprite, pointer, name, groupName) {
        if (name === 'Jacklyn_naked1_bottom1') {

            const annoy_tokens = store.getters.GetInventory(1)
            if (annoy_tokens.item_stats.itemCount >= 6 && annoy_tokens.item_stats.itemCount <= 6) {
                if (sprite.visible) {
                    sprite.visible = false;
                }
            }
            if (annoy_tokens.item_stats.itemCount >= 0 && annoy_tokens.item_stats.itemCount <= 5) {
                store.commit('IncreaseInventory', {itemId: 1, amount: 1})
            }
        }
        if (name === 'Jacklyn_naked1_bottom2') {

            const annoy_tokens = store.getters.GetInventory(0)
            if (annoy_tokens.item_stats.itemCount >= 6 && annoy_tokens.item_stats.itemCount <= 6) {
                if (sprite.visible) {
                    sprite.visible = false;
                }
            }
            if (annoy_tokens.item_stats.itemCount >= 0 && annoy_tokens.item_stats.itemCount <= 5) {
                store.commit('IncreaseInventory', {itemId: 0, amount: 1})
            }
        }
    }
    OnSpriteOut(sprite, pointer, name, groupName) {
        if (name === 'Jacklyn_naked1_bottom1') {

            sprite.alpha = 1
        }
        if (name === 'Jacklyn_naked1_bottom2') {

            sprite.alpha = 1;
        }
    }
    OnSpriteOver(sprite, pointer, name, groupName) {

        if (name === 'Jacklyn_naked1_bottom1') {

           if(sprite.alpha >.2){
               sprite.alpha -= .1
           }
        }
        if (name === 'Jacklyn_naked1_bottom2') {

            if(sprite.alpha >.2){
                sprite.alpha -= .1
            }
        }
    }

    createJacklyn_Naked1Group() {
        const {Items, GroupName, Scale, Alpha, X, Y} = require("@/game/assets/characters/jacklyn_naked1")
        this.characters[GroupName] = this.add.group();
        for (let name of Items()) {

            let sprite = this.add.sprite(X, Y, name);
            sprite.setInteractive();
            sprite.scale = Scale;
            sprite.alpha = Alpha
            sprite.on('pointerout',(pointer)=>{
                this.OnSpriteOut(sprite, pointer, name, GroupName)
            })
            sprite.on('pointerover', (pointer) => {

                this.OnSpriteOver(sprite, pointer, name, GroupName)
            });
            sprite.on('pointerup', (pointer) => {

                this.OnSpriteClick(sprite, pointer, name, GroupName)
            });
            this.characters[GroupName].add(sprite)
        }

    }

    create() {

        this.createJacklyn_Naked1Group()

    }

    update() {
    }
}
