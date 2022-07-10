import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";
import {Intro, Setup} from "@/game/scenes/HomeKitchen/ConversationSequences/Default/FloraIntro";



export const exportClass = class _FlorabandaidDefaultSceneEvents extends SceneSpriteEvents {

    QuestSettingsUpdate_FloraIntroConversation(Scene, Sprite, SettingValue) {
        if(SettingValue)
            Sprite.visible = false;
    }
    QuestSettingsUpdate_FloraLocation(Scene, Sprite, SettingValue) {
        if(SettingValue !== Scene.SceneName)
            Sprite.visible = false;
    }
    SceneCreated(Scene, Sprite, Payload) {
        super.SceneCreated(Scene, Sprite, Payload);
    }

    PointerUp(Scene, Sprite, Payload) {
        super.PointerUp(Scene, Sprite, Payload);

        Intro(Setup(Scene))
    }
}
export default exportClass
