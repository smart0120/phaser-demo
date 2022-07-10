import {GetSetting} from "@/store";

export async function Intro(convo) {
    await convo.Start(50)
    await convo.Say("McTextBox","hi ");
    await convo.Say("Lindsey","hi");
}



