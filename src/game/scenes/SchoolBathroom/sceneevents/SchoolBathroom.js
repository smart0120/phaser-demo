import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents"
import {GetSetting, SetSetting} from "@/store";
import Xray from "@/game/BaseClasses/Xray";

export const exportClass = class SchoolBathroomDefaultSceneEvents extends SceneSpriteEvents {

    SceneCreated(sprite_lib, sprite, Scene) {
        super.SceneCreated(sprite_lib, sprite, Scene);
        this.Xray = new Xray(Scene);

        if (!GetSetting("XrayLevel")) {
            SetSetting("XrayLevel", 0, Scene)

        }


    }

    QuestSettingsUpdate_XrayLevel(sprite_lib, sprite, Scene,value) {

        if (this.Xray)
            this.Xray.Clear();
        switch (value) {
            case 0:
               this.Xray.Clear()
                break
            case 1:
                debugger;
                this.Xray.Attach(['flora'])
                break
            case 2:
                this.Xray.Attach(this.Scene, ['flora', 'flora_xray'])
        }
    }
}
export default new exportClass()

