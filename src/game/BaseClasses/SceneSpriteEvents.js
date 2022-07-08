import Xray from "@/game/BaseClasses/Xray";

export default class SceneSpriteEvents {
    Started(Scene, Sprite, Payload) {
    }

    Finished(Scene, Sprite, Payload) {
    }

    PointerMove(Scene, Sprite, Payload) {

    }

    Failed(Scene, Sprite, Payload) {
    }

    PointerUp(Scene, Sprite, Payload) {

    }

    PointerOut(Scene, Sprite, Payload) {
    }


    SceneCreated(Scene, Sprite, Payload) {


    }

    SceneFinished(Scene, Sprite, Payload) {

    }


}


export const SceneEvents = class SceneEvents {

    PointerUp(Scene, payload) {
    }

    PointerOut(Scene, payload) {
    }

    PointerOver(Scene, payload) {
    }
    PointerMove(Scene, payload) {
    }

    SceneCreated(Scene, payload) {

    }

    SceneFinished(Scene, payload) {

    }

    //SomeCustomEvent

}
