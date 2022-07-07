export default class TextBox {
    constructor(scene  ,item) {

        this.text = '';

        this.scene = scene;
      //  this.createSpeechBubble(item.X,item.Y,  500, 200, this.text);
     //   this.group = this.scene.add.group([this.bubble, this.text_obj])
     //   this.bubble.visible = false;

        this.text_obj = this.scene.add.text(item.X, item.Y,   this.text, {
            fontFamily: 'Arial',
            fontSize: 20,
            color: '#000000',
            align: 'center',
            wordWrap: {width: 800 }
        });  this.text_obj.visible = false;
    }

    SetText(text) {
        this.Resolve();
      //  this.bubble.visible = true;
       this.text_obj.visible = true;
        this.text = text;

        this.text_obj.text = text;
    }

    resolve;
    reject;

    Resolve() {
        if (this.resolve) {
            this.resolve();
            return true;
        }
    }

    Start(text) {
        this.SetText(text)
        this.ShowEffect();
        return this.Show();
    }

    Show() {



        return new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;

        }).then(() => {
            this.resolve = null;
            this.reject = null;
        })


    }

    ShowEffect() {

    }

    Hide() {
        if (this.resolve) {
            this.resolve();

            this.HideEffect();
        }
        this.group.visible = false;
    }

    HideEffect() {

    }

    NextEffect() {

    }

    Next(text) {
        if (this.resolve) {
            this.resolve();

            this.NextEffect();
        }
        this.SetText(text);
        return this.Show();
    }

}
