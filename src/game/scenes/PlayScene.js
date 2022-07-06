import {Scene} from 'phaser'


export default class PlayScene extends Scene {

    SceneName = '';


    constructor(sceneName = 'PlayScene') {
        super({key: sceneName})
        this.SceneName = sceneName;


    }

    SceneEvents;


    SpriteList = []

    createSprite(item) {
        let {Name, Id, X, Y, Scale, Alpha, Visible, Interactive, MouseEvents, EventsData} = item;
        let sprite = this.add.sprite(X, Y, Name);
        sprite.visible = Visible
        if (Interactive)
            sprite.setInteractive();
        sprite.scale = Scale;
        sprite.alpha = Alpha
        sprite.on('pointerout', (pointer) => {
            MouseEvents('MouseOut', item, sprite, pointer, this)
        })
        sprite.on('pointerover', (pointer) => {
            MouseEvents('MouseOver', item, sprite, pointer, this)
        });
        sprite.on('pointerup', (pointer) => {
            MouseEvents('MouseUp', item, sprite, pointer, this)
        });
        this.SpriteList.push({sprite, item, Name});
        return sprite;
    }

    createSpriteSheet(item, X, Y, Scale, Alpha, frameStart, frameEnd, fps, repeat) {
        let {Name, Id} = item;


        this.anims.create({
            key: Name,
            frames: this.anims.generateFrameNumbers(Name, {start: frameStart, end: frameEnd}),
            frameRate: fps,
            repeat: repeat
        });
        const sprite = this.add.sprite(400, 300, Name)
        sprite.play('explodeAnimation');
        sprite.setInteractive();
        sprite.scale = Scale;
        sprite.alpha = Alpha
        sprite.on(Phaser.Animations.Events.ANIMATION_START, function (anim, frame, gameObject) {


        });
        sprite.on(Phaser.Animations.Events.ANIMATION_STOP, function (anim, frame, gameObject) {


        });

        sprite.on(Phaser.Animations.Events.ANIMATION_UPDATE, function (anim, frame, gameObject) {


        });

        sprite.on(Phaser.Animations.Events.ANIMATION_REPEAT, function (anim, frame, gameObject) {


        });

        sprite.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function (anim, frame, gameObject) {


        });
        sprite.on('pointerout', (pointer) => {
            this.OnSpriteOut(sprite, pointer, Name, Id, GroupId)
        })
        sprite.on('pointerover', (pointer) => {

            this.OnSpriteOver(sprite, pointer, Name, Id, GroupId)
        });
        sprite.on('pointerup', (pointer) => {

            this.OnSpriteClick(sprite, pointer, Name, Id, GroupId)
        });
        this.Animations[Id] = sprite;
    }

    TextBoxes = []

    createTextBox(item) {

        let {Name, Id, X, Y, FontFamily, TextClass, Interactive, EventsData} = item;
        const text_obj = this.add.text(X, Y, '', {fontFamily: FontFamily})
        if (Interactive)
            text_obj.setInteractive()
        const text_box = new TextClass(text_obj, this)
        this.TextBoxes.push({text_box: text_box, Name: Name, Item: item})
    }

    async triggerTextBox(TextBoxName, Quest = "Default") {

        const box = this.TextBoxes.find(a => a.Name === TextBoxName);
        if (!box) return;
        if (box.text_box[Quest])
            await box.text_box[Quest]();


    }

    triggerQuestFinished(QuestName) {
        this.triggerCustomEvent("Finished", QuestName)
    }

    triggerQuestFailed(QuestName) {
        this.triggerCustomEvent("Failed", QuestName)
    }

    triggerQuestStart(QuestName) {
        this.triggerCustomEvent("Started", QuestName)
    }
    getSpriteByName(name){
       return this.SpriteList.find(a=>a.Name === name).sprite;
    }
    // triggers an event on a quest (default being the "world" quest the ends when you win.
    triggerCustomEvent(EventName, QuestName = "Default", payload) {
            if(QuestName === "Default")
                QuestName = "default";
        if (this.SceneEvents[QuestName] && this.SceneEvents[QuestName][EventName]) {
            this.SceneEvents[QuestName][EventName](this, payload)
        }

        for (let i = this.SpriteList.length - 1; i >= 0; i--) {
            const sprite = this.SpriteList[i];
            const events = sprite.item.EventsData;
            if (events)
                if (events[QuestName]) {
                    if (events[QuestName][EventName]) {

                        events[QuestName][EventName](sprite.item,sprite.sprite,this)
                    }
                }
        }

    }

    createRectangle(RectangleId, Name, X, Y, Width, Height, FillColor, Alpha, TweenEffect) {
        const rectangle = this.add.rectangle(X, Y, Width, Height, FillColor, Alpha);
        rectangle.setInteractive()
        rectangle.on('pointerup', (pointer) => {
            this.onRectangleClick(rectangle, pointer, "RoomExit", RectangleId);
        })

        rectangle.on('pointerover', (pointer) => {
            this.OnRectangleOver(rectangle, pointer, "RoomExit", RectangleId);

        });
        rectangle.on('pointerout', (pointer) => {
            this.OnRectangleOut(rectangle, pointer, "RoomExit", RectangleId);

        });
        if (TweenEffect)
            switch (TweenEffect) {
                case 1:
                    this.tweens.add({

                        targets: rectangle,
                        angle: 90,
                        yoyo: true,
                        repeat: -1,
                        ease: 'Sine.easeInOut'

                    });
                    break;
            }

    }

    create() {



    }


    update() {
    }
}
