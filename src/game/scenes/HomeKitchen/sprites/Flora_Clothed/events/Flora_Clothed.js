
            import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";

   export const exportClass = class _Flora_ClothedDefaultSceneEvents extends  SceneSpriteEvents{
PointerUp(Scene, Sprite, Payload) {
    super.PointerUp(Scene, Sprite, Payload);
    Sprite.sprite.play('Flora_Clothed_confused')
}
   }
        export default exportClass


