import {StartQuest} from "@/store";

export default class ConversationSequence {
    constructor(scene, sprites, textboxes) {
        this.Scene = scene
        this.Sprites = sprites;
        this.TextBoxes = textboxes;
    }

    FadeIn(sprite_name) {
        const sprite = this.Sprites[sprite_name];
        return this.animatetweens(this.Scene, sprite, [{
            alpha: 1,
            duration: 3000,
            targets: sprite,
            ease: 'Power2'
        }]);
    }

    async FadeTo(sprite_name, frame_name) {
        await this.FadeOut(sprite_name);
        await this.Pose(sprite_name, frame_name);
        await this.FadeIn(sprite_name);

    }

    FadeOut(sprite_name) {
        const sprite = this.Sprites[sprite_name];

        return this.animatetweens(this.Scene, sprite, [{
            alpha: 0,
            duration: 3000,
            targets: sprite,
            ease: 'Power2'
        }]);
    }

    animatetweens(scene, sprite, tweens) {
        return new Promise((resolve, reject) => {
            try {

                const timeline = scene.tweens.timeline({})
                tweens.forEach(a => {
                    timeline.add(a);
                })

                timeline.on('complete', () => {
                    resolve(sprite)
                });
                timeline.play()
            } catch (e) {
                reject(e)
            }
        })
    }

    async Start(Delay) {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                for (let key of Object.keys(this.TextBoxes)) {
                    let value = this.TextBoxes[key]
                    value.Show();
                }
                for (let key of Object.keys(this.Sprites)) {
                    let value = this.Sprites[key]
                    value.visible = true;
                }
                resolve();
            }, Delay ? Delay : 0)
        }));
    }

    Finish(Delay) {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                for (let key of Object.keys(this.TextBoxes)) {
                    let value = this.TextBoxes[key]
                    value.Hide();
                }
                resolve();
            }, Delay ? Delay : 0)
        }));
    }

    async Say(textbox_name, text) {
        let textBox = this.TextBoxes[textbox_name];
        return await textBox.Say(text)
    }

    async StartQuest(QuestName){
        StartQuest(this.Scene,QuestName)
    }
    async Pose(sprite_name, frame) {
        return new Promise((resolve, reject) => {

            this.Sprites[sprite_name].once(Phaser.Animations.Events.ANIMATION_COMPLETE, function (anim, frame, gameObject) {
                resolve();

            });
            try {
                this.Sprites[sprite_name].play({key: frame})
            } catch (e) {
                reject(e);
            }
        });

    }

    async Animate(frameList) {

    }


}
