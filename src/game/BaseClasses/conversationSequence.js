export default class ConversationSequence {
    constructor(sprites, textboxes) {
        this.Sprites = sprites;
        this.TextBoxes = textboxes;
    }

    async Say(textbox_name,text) {
        let textBox = this.TextBoxes[textbox_name];
        return await textBox.Say(text)
    }

    async Pose(sprite_name,frame) {
        this.Sprites.play(sprite_name,frame)
    }

    async Animate(frameList) {

    }


}
