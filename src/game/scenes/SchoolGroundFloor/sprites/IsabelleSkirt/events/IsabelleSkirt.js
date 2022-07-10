import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";
import {IsaBelleGroundFloorDefault} from "@/game/scenes/SchoolGroundFloor/ConversationSequences/Default/IsaBelleGroundFloorDefault";
import ConversationSequence from "@/game/BaseClasses/conversationSequence";

export const exportClass = class _IsabelleSkirtDefaultSceneEvents extends SceneSpriteEvents {
    PointerUp(Scene, Sprite, Payload) {
        super.PointerUp(Scene, Sprite, Payload);
        const sprites = {
            'IsabelleSkirt': Sprite
        }

        const tb = {
            "McTextBox": Scene.getTextBoxByName("TbMc"),
            "TbIsabelleSkirt": Scene.getTextBoxByName("TbIsabelleSkirt")
        };

        IsaBelleGroundFloorDefault(new ConversationSequence(Scene,sprites,tb))
    }
}
export default exportClass
