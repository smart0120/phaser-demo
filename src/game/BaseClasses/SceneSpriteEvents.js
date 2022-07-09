import Xray from "@/game/BaseClasses/Xray";

export default class SceneSpriteEvents {
    constructor() {

    }

    Started(Scene, Sprite, Payload) {
    }

    Finished(Scene, Sprite, Payload) {
    }

    PointerMove(Scene, Sprite, Payload) {

    }

    Failed(Scene, Sprite, Payload) {
    }

    PointerDoubleClick(Scene, Sprite, Payload) {
        if (process.env.NODE_ENV !== "development")
            return;

        try {
            let input = "http://localhost:9998/scenes/" + Scene.SceneName + "/sprites/" + Sprite.Name + "/" + Sprite.Name + ".js";
            if (this.cursorKeys.space.isDown) {
                input+="?visible";
            }
            if (this.cursorKeys.shift.isDown) {
                input = "http://localhost:9998/scenes/" + Scene.SceneName + "/sprites/" + Sprite.Name + "/events/" + Sprite.Name + ".js";
            }
            fetch(input).then(() => {
                console.log(input + " fetched")
            }).catch((error) => {
                console.log(error)
            })
        } catch (e) {

        }
    }

    PointerUp(Scene, Sprite, Payload) {



    }

    PointerOut(Scene, Sprite, Payload) {
    }


    SceneCreated(Scene, Sprite, Payload) {

        if (process.env.NODE_ENV !== "development")
            return;
        this.cursorKeys = Scene.input.keyboard.createCursorKeys();
        this.lastClick = 0

    }

    SceneFinished(Scene, Sprite, Payload) {

        if (process.env.NODE_ENV !== "development")
            return;
        this.cursorKeys.destroy()
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
