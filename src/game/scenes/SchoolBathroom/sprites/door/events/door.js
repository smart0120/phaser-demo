import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";

   export const exportClass = class doorDefaultSceneEvents extends  SceneSpriteEvents{
MouseUp(sprite_lib, sprite, pointer, Scene) {
    super.MouseUp(sprite_lib, sprite, pointer, Scene);
 Scene.scene.start('preload_Kitchen')
}
   }
        export default new exportClass()
