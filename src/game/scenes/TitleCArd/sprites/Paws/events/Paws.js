import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";
import {NewGame, SetSetting} from "@/store";

export const exportClass = class _PawsDefaultSceneEvents extends SceneSpriteEvents {
    PointerUp(Scene, Sprite, Payload) {
        super.PointerUp(Scene, Sprite, Payload);
        NewGame().then(()=>{
            scene.triggerSceneChange("preload_HomeKitchen")
        })

    }
}
export default exportClass
