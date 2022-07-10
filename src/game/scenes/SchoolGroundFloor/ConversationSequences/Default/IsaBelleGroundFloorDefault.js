import ConversationSequence from "@/game/BaseClasses/conversationSequence";

export function Setup(Scene) {
    const sprites = {
        'IsabelleSkirt': Sprite
    }

    const tb = {
        "McTextBox": Scene.getTextBoxByName("TbMc"),
        "TbIsabelleSkirt": Scene.getTextBoxByName("TbIsabelleSkirt")
    };
    return new ConversationSequence(Scene, sprites, tb)
}

export async function IsaBelleGroundFloorDefault(convo) {
    await convo.Start(50)
    await convo.Say("McTextBox", "hi sexy ");
    await convo.Say("TbIsabelleSkirt", "hi");
    await convo.Finish(2000);
}



