import TextBox from "@/game/BaseClasses/TextBox";
import {EndQuest, GetSetting} from "@/store";

export class MCTextAboveTextBox extends TextBox {
    async Hello_Search(scene, count) {

        const condom_count = GetSetting("CondomCount", "Hello", 0);
        if (condom_count < 8)
            this.SetText(`You have only collected ${condom_count} condoms, I need 8, you need ${8 - condom_count} more`)
        else {
            this.SetText(`Thank god! I thought I was gonna be here for ever`)

        }


    }

    //
    async Hello_Unique(scene) {


        this.SetText("Hello, I need your help. I fucked the whole foot ball team and forgot to collect condoms for dna tests in case you know teehe")
        await this.Show()
    }


}
