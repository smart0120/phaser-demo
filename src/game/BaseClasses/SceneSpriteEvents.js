export default class SceneSpriteEvents {
    Started(sprite_lib, sprite, Scene) {
    }

    Finished(sprite_lib, sprite, Scene) {
    }
    PointerMove(pointer,Scene){

    }
    Failed(sprite_lib, sprite, Scene) {
    }
    MouseOver(sprite_lib,sprite,pointer,Scene) {
    }

    MouseOut(sprite_lib,sprite,pointer,Scene) {
    }

    MouseUp(sprite_lib,sprite,pointer,Scene) {
    }
    Scene;
    SceneCreated(sprite_lib,sprite,Scene){
        this.Scene = Scene;
    }
    SceneEnding(sprite_lib,sprite,Scene){

    }
    //SomeCustomEvent

}

