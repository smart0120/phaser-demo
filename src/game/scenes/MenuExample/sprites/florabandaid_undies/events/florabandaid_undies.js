import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";

   export const exportClass = class florabandaid_undiesDefaultSceneEvents extends  SceneSpriteEvents{
PointerUp(Scene, Sprite, Payload) {
    super.PointerUp(Scene, Sprite, Payload);
    Scene.triggerSceneResume('SchoolBathroom')
}
   }
        export default exportClass
