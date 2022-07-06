import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";
import {GetQuestCreated, GetSetting, SetQuestSection, SetSetting, StartQuest} from "@/store";
import Xray from "@/game/BaseClasses/Xray";

   export const exportClass = class floraDefaultSceneEvents extends  SceneSpriteEvents{
       SceneCreated(sprite_lib, sprite, Scene) {
           super.SceneCreated(sprite_lib, sprite, Scene);

       }

       PointerMove(pointer, Scene) {
           super.PointerMove(pointer, Scene);

       }
       MouseUp(sprite_lib, sprite, pointer, Scene) {

           if(!GetQuestCreated("Hello")){
               Scene.triggerYoYo(sprite);
               SetSetting("YoYoStarted",true,Scene,"Default");
               StartQuest("Hello",Scene,"Search")


           }

       }
   }
        export default new exportClass()
