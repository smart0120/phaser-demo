import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";

export const exportClass = class _DoorDefaultSceneEvents extends SceneSpriteEvents {
    PointerUp(Scene, Sprite, Payload) {
        super.PointerUp(Scene, Sprite, Payload);
        Scene.triggerSceneChange("preload_HomeHall")
    }
}
export default exportClass
