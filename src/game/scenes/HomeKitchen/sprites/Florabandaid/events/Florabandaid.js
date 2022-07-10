import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";
import {Intro} from "@/game/scenes/HomeKitchen/ConversationSequences/Default/JackyIntro";
import ConversationSequence from "@/game/BaseClasses/conversationSequence";


export const exportClass = class _FlorabandaidDefaultSceneEvents extends SceneSpriteEvents {

    QuestSettingsUpdate_bug_count(QuestName, SettingValue) {
    debugger;
    }


    PointerUp(Scene, Sprite, Payload) {
        super.PointerUp(Scene, Sprite, Payload);
        SetSetting("bug_count",5,Scene)
        const sprites = {
            'Florabandaid': Scene.getSpriteByName('Florabandaid')
        }

        const tb = {
            "McTextBox": Scene.getTextBoxByName("McTextBox"),
            "JackyTextBox": Scene.getTextBoxByName("JackyTextBox")
        };

        Intro(new ConversationSequence(Scene, sprites, tb))
    }
}
export default exportClass
