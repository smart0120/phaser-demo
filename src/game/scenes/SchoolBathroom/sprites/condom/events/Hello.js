import {exportClass} from './condom';
import {EndQuest, GetQuestCompleted, GetSetting, SetSetting} from "@/store";


export class condomQuestEvent extends exportClass {
    Started(sprite_lib, sprite, Scene) {
        super.Started(sprite_lib, sprite, Scene);
        sprite.visible = false;
        let clones = [];
        for(let i=0;i<8;i++)
        {
            let clone = Scene.cloneSprite(require('../condom'),Scene.SceneName)
            clone.visible = true;
            clones.push(clone)
        }
       this.CondomCircle = new Phaser.Geom.Circle(400, 300, 250);
        Phaser.Actions.RandomCircle(clones,this.CondomCircle)
    }

    MouseUp(sprite_lib, sprite, pointer, Scene) {

        Scene.walkOutSprite(sprite);
        const condom_count = GetSetting("CondomCount", "Hello", 0);
        if(condom_count < 8)
            SetSetting("CondomCount", condom_count + 1, Scene, "Hello");


    }
}

export default new condomQuestEvent();
