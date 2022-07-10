import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";

export const exportClass = class _JocounterJacklyn_IntroductionDefaultSceneEvents extends SceneSpriteEvents {
SceneCreated(Scene, Sprite, Payload) {
    super.SceneCreated(Scene, Sprite, Payload);
    Sprite.visible = true;
}
}
export default exportClass
