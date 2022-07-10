import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";

   export const exportClass = class _BusLustDefaultSceneEvents extends  SceneSpriteEvents{
       PointerUp(Scene, Sprite, Payload) {
           super.PointerUp(Scene, Sprite, Payload);
           Scene.triggerSceneChange('preload_HomeKitchen')
       }
    }
        export default exportClass
