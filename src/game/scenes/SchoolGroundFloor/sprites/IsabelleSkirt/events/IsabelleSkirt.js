import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";
import {IsaBelleGroundFloorDefault,Setup} from "@/game/scenes/SchoolGroundFloor/ConversationSequences/Default/IsaBelleGroundFloorDefault";


export const exportClass = class _IsabelleSkirtDefaultSceneEvents extends SceneSpriteEvents {
    PointerUp(Scene, Sprite, Payload) {
        super.PointerUp(Scene, Sprite, Payload);
        IsaBelleGroundFloorDefault(Setup(Scene))
    }
}
export default exportClass
