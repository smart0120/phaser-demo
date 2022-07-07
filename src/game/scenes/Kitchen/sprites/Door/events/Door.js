import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";

export const exportClass = class DoorDefaultSceneEvents extends SceneSpriteEvents {
    MouseUp(sprite_lib, sprite, pointer, Scene) {
        super.MouseUp(sprite_lib, sprite, pointer, Scene);
        Scene.scene.start('preload_ForestGlade')

    }
}
export default new exportClass()
