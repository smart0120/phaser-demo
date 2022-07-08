import TextBox from "@/game/BaseClasses/TextBox";

function removeFirst(str) {
    let i = 0;
   return str.split('_').filter(a => {
        return i++ !== 0;
    }).join("_");
}

export class DebugTextBoxTextBox extends TextBox {

    Default(Scene, ClickCount, Payload) {

     //   this.SetText("Sprite: " + removeFirst(Payload.sprite.texture.key))

    }

    Default_Unique(Scene, ClickCount, Payload) {
        this.Show();
    }
}
