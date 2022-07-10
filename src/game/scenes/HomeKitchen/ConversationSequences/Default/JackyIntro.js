import {GetSetting} from "@/store";

export async function Intro(convo) {
    await convo.Start(50)
    await convo.Say("McTextBox","hi ");
    await convo.Say("JackyTextBox","hi ");
    const her_list = GetSetting("Jacky_Lust",0)
    await convo.Say("McTextBox","I noticed you play league");
    await convo.Say("JackyTextBox","yeah stfu bronze zcrub z lord loser fuck im 3 elos above you ");
    await convo.Say("McTextBox","yep, thought that would happen");
    await convo.FadeTo ("Florabandaid","FlorabandaidXray");
    await convo.Say("McTextBox","...");
    await convo.Say("JackyTextBox","Take me I'm yours ");

    if(her_list <  8) {
        await convo.FadeTo("Florabandaid","Florabandaid");
        await convo.Say("JackyTextBox", "Psych bitch");
    }else{
        await convo.Say("JackyTextBox", "Yeah rea;;y");
    }
    await convo.Finish(1000)
    await convo.StartQuest("JackyTightButtHole")
}



