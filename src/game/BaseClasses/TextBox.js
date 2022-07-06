export default class TextBox {
    constructor(text_obj, scene) {
        this.text = '';
        this.text_obj = text_obj;
        this.scene = scene;


    }


    SetText(text) {
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
        this.text_obj.visible = true;


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
        this.text_obj.visible = false;
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
