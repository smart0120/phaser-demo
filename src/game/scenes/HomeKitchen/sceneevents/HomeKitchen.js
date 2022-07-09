import {SceneEvents} from "@/game/BaseClasses/SceneSpriteEvents"
import {Intro} from "@/game/ConversationSequences/Hello/Part1/JackyIntro";
import ConversationSequence from "@/game/BaseClasses/conversationSequence";

export default class HomeKitchenDefaultSceneEvents extends SceneEvents {
    SceneCreated(Scene, payload) {
        super.SceneCreated(Scene, payload);
        const tb = {};
        const sprites = {
            'Florabandaid': Scene.getSpriteByName('Florabandaid')
        }
        Scene.TextBoxes.forEach(A => {

            tb[A.Name] = A.text_box;

        })
        Intro(new ConversationSequence(Scene,sprites, tb))
    }
}


