import {exportClass} from './flora';
import {EndQuest, GetQuestCompleted, GetSetting, SetSetting} from "@/store";
import Xray from "@/game/BaseClasses/Xray";

export class floraQuestEvent extends exportClass {
    Started(sprite_lib, sprite, Scene) {

        super.Started(sprite_lib, sprite, Scene);
        Scene.triggerTextBox("MCTextAbove", "Hello")


    }

    QuestSettingsUpdate_CondomCount(sprite_def, sprite, Scene, condom_count) {
        if (condom_count >= 8) {

            if (!GetQuestCompleted("Hello"))
                EndQuest("Hello", Scene)
            return;
        }
        Scene.triggerTextBox("MCTextAbove", "Hello")
    }

    Finished(sprite_lib, sprite, Scene) {
        super.Finished(sprite_lib, sprite, Scene);
        Scene.triggerTextBox("MCTextAbove", "Hello")
        Scene.clearAnimations(Scene.getSpriteByName("flora"))
        Scene.resetSpriteXY_Walk("flora").then(() => {
            Scene.getSpriteByName('flora_xray').visible = true
            SetSetting("XrayLevel",1,Scene, "Default")
         //e   this.Xray = new Xray(Scene, ['flora'])
            //   Scene.getSpriteByName('flora_xray_full').visible = true;
        });


    }

    MouseUp(sprite_lib, sprite, pointer, Scene) {

        Scene.triggerTextBox("MCTextAbove", "Hello")
    }
}

export default new floraQuestEvent();
