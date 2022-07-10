import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";

export const exportClass = class _CounterDefaultSceneEvents extends SceneSpriteEvents {
    PointerUp(Scene, Sprite, Payload) {
        super.PointerUp(Scene, Sprite, Payload);
        AppearFrom(Scene, Scene.getSpriteByName('Spilledflour'));
    }
}



export default exportClass
