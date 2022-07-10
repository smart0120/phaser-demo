import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";

   export const exportClass = class _BusLustDefaultSceneEvents extends  SceneSpriteEvents{
       PointerUp(Scene, Sprite, Payload) {
           super.PointerUp(Scene, Sprite, Payload); // this debug point actually shows up when the browser comes here. I can inspect all the variables
           Scene.triggerSceneChange('preload_HomeKitchen')
       }
    }
        export default exportClass
