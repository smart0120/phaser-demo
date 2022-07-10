import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";

export const exportClass = class JackyTightButtHoleSceneEvents extends SceneSpriteEvents {
    Started(Scene, Sprite, Payload) {
        super.Started(Scene, Sprite, Payload);
        Sprite.visible= false;
    }
}
export default exportClass
