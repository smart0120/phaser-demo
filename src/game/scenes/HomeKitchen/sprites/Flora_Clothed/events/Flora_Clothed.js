import SceneSpriteEvents from "@/game/BaseClasses/SceneSpriteEvents";

export const exportClass = class _Flora_ClothedDefaultSceneEvents extends SceneSpriteEvents {
    PointerUp(Scene, Sprite, Payload) {
        super.PointerUp(Scene, Sprite, Payload);

    }

    QuestSettingsUpdate_FloraIntroConversation(Scene, Sprite, SettingValue) {

        Sprite.visible = SettingValue;
    }
}
export default exportClass


