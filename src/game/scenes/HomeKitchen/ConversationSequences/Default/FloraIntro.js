import {GetSetting, SetSetting, StartQuest} from "@/store";
import ConversationSequence from "@/game/BaseClasses/conversationSequence";
// What sprites do we need? You would have called AddFramesToSprite probably and this would be the Name you gave it
export function Setup(Scene) {
    const sprites = {
        'Flora': Scene.getSpriteByName("Flora_Clothed") //Set an alias to the sprite. the alias can be anything (so if you want to patch old code)
    }
// What text boxes did you create? Create aliases for them, too. gettextboxybyname takes the name you used
    const tb = {
        "FloraTextBox": Scene.getTextBoxByName("FloraTextBox"),
        "McTextBox": Scene.getTextBoxByName("McTextBox")
    };

    return new ConversationSequence(Scene, sprites, tb)
}
export async function Intro(convo) {
    debugger;
    SetSetting("FloraIntroConversation",true,convo.Scene )
    await convo.Start(50)

    await convo.Pose("Flora","Flora_Clothed_annoyed");
    await convo.Say("FloraTextBox","what");
    await convo.Say("McTextBox","nothing");
    await convo.Pose("Flora","Flora_Clothed_eyeroll");
    await convo.Say("FloraTextBox","what is it, player?");
    await convo.Say("McTextBox","    You drank all the milk again.");
    await convo.Pose("Flora","Flora_Clothed_laughing");
    await convo.Say("FloraTextBox","Damn straight!");
    await convo.Say("FloraTextBox","And it tasted great!");
    await convo.Say("McTextBox"," Did it really?");
    await convo.Pose("Flora","Flora_Clothed_skeptical");
    await convo.Say("McTextBox"," Heh.");
    await convo.Pose("Flora","Flora_Clothed_afraid");
    await convo.Say("FloraTextBox","You put something in it, didn't you?");
    await convo.Say("McTextBox","I don't know what you're talking about.");
    await convo.Pose("Flora","Flora_Clothed_embarrassed");
    await convo.Say("FloraTextBox","I'm going to be sick!");
    await convo.FadeOut("Flora")
    StartQuest(convo.Scene,"Jacklyn_Introduction","bathroom")
    SetSetting("FloraLocation","Bathroomaaaa")
  /*

  "She ran upstairs to the bathroom, looking like she was going to throw up."
  "Funny thing is, there was nothing but milk in the milk."
  "Getting under her skin has taken me years of hard work, but this time it wasn't even intentional."
  "Better check on her before she tells [jo]."


   */
    await convo.Finish(1000)

}



