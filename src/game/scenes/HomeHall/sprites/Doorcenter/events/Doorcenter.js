import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";

   export const exportClass = class _DoorcenterDefaultSceneEvents extends  SceneSpriteEvents{
PointerUp(Scene, Sprite, Payload) {
    super.PointerUp(Scene, Sprite, Payload);
    Scene.triggerSceneChange("preload_HomeBathroom")
}
   }
        export default exportClass
