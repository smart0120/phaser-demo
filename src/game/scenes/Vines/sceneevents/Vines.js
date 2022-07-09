import {SceneEvents} from "@/game/BaseClasses/SceneSpriteEvents"
import ConversationSequence from "@/game/BaseClasses/conversationSequence";
import {Intro} from "@/game/ConversationSequences/Hello/Part1/JackyIntro"

export default class VinesDefaultSceneEvents extends SceneEvents {
    SceneCreated(Scene, payload) {
        super.SceneCreated(Scene, payload);
        const b = {};
        Scene.TextBoxes.forEach(A => {

            b[A.Name] = A.text_box;

        })
        Intro(new ConversationSequence({}, b))
    }
}


