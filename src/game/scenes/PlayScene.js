import {Scene} from 'phaser'
import {GetQuestSection, GetSetting, SetSetting} from "@/store";


export default class PlayScene extends Scene {

    SceneName = '';


    constructor(sceneName = 'PlayScene') {
        super({key: sceneName})
        this.SceneName = sceneName;


    }

    SceneEvents;


    SpriteList = []

    cloneSprite(item) {
        let clone_count = 0;
        const clone = Object.assign({}, item);
        clone.name = clone.name + "_Clone_" + clone_count;
        while (this.getSpriteByName(clone.name)) {
            clone.name = item.name + "_Clone_" + ++clone_count;
        }
        return this.createSprite(clone);
    }

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
    Tweens = []

    createTextBox(item) {

        let {Name, Id, X, Y, FontFamily, TextClass, Interactive, EventsData} = item;
        const text_obj = this.add.text(X, Y, '', {fontFamily: FontFamily})
        if (Interactive)
            text_obj.setInteractive()
        const text_box = new TextClass(text_obj, this)
        this.TextBoxes.push({text_box: text_box, Name: Name, Item: item})
    }

    async triggerAnimation(sprite_name, animation_name, animation_options) {

    }

    resetSpriteXY_Walk(sprite_name) {

        let found = this.SpriteList.find(a => a.Name === sprite_name);
        if (!found) {
            throw new Error("No Such Sprite")
        }
        return this.walkSprite(found.sprite, found.item.X, found.item.Y)


    }

    resetSpriteXY(sprite_name) {

        let found = this.SpriteList.find(a => a.Name === sprite_name);
        if (!found) {
            throw new Error("No Such Sprite")
        }
        found.sprite.x = found.item.X;
        found.sprite.y = found.item.Y;


    }

    triggerYoYo(sprite) {

        let tween = {
            targets: sprite,
            duration:1500,
            tweens: [{x: 600,y:400 }],
            yoyo: true,
            loop: -1,

        };
        const TimeLine = this.tweens.timeline(tween);
        return new Promise((resolve, reject) => {
            TimeLine.on('stop', () => {
                alert("done")
                resolve(...arguments);
            })
        })

    }

    clearAnimations(sprite) {

        this.tweens.killTweensOf(sprite)
    }

    async triggerTextBox(TextBoxName, Quest = "Default") {

        const box = this.TextBoxes.find(a => a.Name === TextBoxName);
        if (!box) return;
        const Section = GetQuestSection(Quest);

        const UniqueQuestSectionTextSetting = `${Quest}_${TextBoxName}_${Section}_Unique`;
        const UniqueQuestTextSetting = `${Quest}_${TextBoxName}_Unique`;
        const QuestSectionCountSetting = `${Quest}_${TextBoxName}_${Section}_Count`;
        const QuestCountSetting = `${Quest}_${TextBoxName}_Count`;

        const UniqueQuestSectionEvent = `${Quest}_${Section}_Unique`;
        const UniqueQuestEvent = `${Quest}_Unique`;
        const QuestSectionEvent = `${Quest}_${Section}`;
        const QuestEvent = `${Quest}`;


        const UniqueQuestSectionTextTest = () => box.text_box[UniqueQuestSectionEvent] && !GetSetting(UniqueQuestSectionTextSetting, Quest);
        const UniqueQuestTextTest = () => box.text_box[UniqueQuestEvent] && !GetSetting(UniqueQuestTextSetting, Quest);
        const QuestSectionText = () => box.text_box[QuestSectionEvent];

        const QuestSectionCount = GetSetting(QuestCountSetting, Quest, 0);
        const QuestCount = GetSetting(`${Quest}_${TextBoxName}_Count`, Quest, 0);
        const QuestText = () => box.text_box[QuestEvent];

        if (UniqueQuestSectionTextTest()) {
            await box.text_box[UniqueQuestSectionEvent].bind(box.text_box)(this);
            SetSetting(UniqueQuestSectionTextSetting, true, this, Quest);

        } else if (UniqueQuestTextTest()) {
            await box.text_box[UniqueQuestEvent].bind(box.text_box)(this);
            SetSetting(UniqueQuestTextSetting, true, this, Quest);

        } else {
            const questSectionText = QuestSectionText();
            if (questSectionText) {
                await questSectionText.bind(box.text_box)(this, QuestSectionCount);
                SetSetting(QuestSectionCountSetting, QuestSectionCount + 1, this, Quest);
            } else {
                const questText = QuestText();

                if (questText) {
                    await questText.bind(box.text_box)(this, QuestCount);
                    SetSetting(QuestCountSetting, QuestCount + 1, this, Quest)
                }
            }
        }


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

    getSpriteByName(name) {
        let found = this.SpriteList.find(a => a.Name === name);
        if (!found) return undefined;
        return found.sprite;
    }

    walkSprite(sprite, x, y) {

        let tween = {
            targets: sprite,
            duration:500,
            tweens: [{x: x}, {y: y}],
            yoyo: false,
            loop: 0,

        };
        const TimeLine = this.tweens.timeline(tween);
        return new Promise((resolve, reject) => {
            TimeLine.on('complete', () => {
                resolve(...arguments);
            })
        })
    }

    walkOutSprite(sprite) {
        sprite.removeInteractive()
        let tween = {
            targets: sprite,
            tweens: [{x: 600}, {y: 500}, {x: 100}, {y: 100}],
            yoyo: false,
            loop: 0,

        };
        const TimeLine = this.tweens.timeline(tween);
        TimeLine.on('complete', () => {
            sprite.visible = false;
        })
    }

    // triggers an event on a quest (default being the "world" quest the ends when you win.
    triggerCustomEvent(EventName, QuestName = "Default", payload) {
        if (QuestName === "Default")
            QuestName = "default";
        if (EventName === "Finished") {
            debugger;
        }
        if (this.SceneEvents[QuestName] && this.SceneEvents[QuestName][EventName]) {
            this.SceneEvents[QuestName][EventName](null, null, this, payload)
        }

        for (let i = this.SpriteList.length - 1; i >= 0; i--) {
            const sprite = this.SpriteList[i];
            const events = sprite.item.EventsData;
            if (events && events[QuestName]) {
                if (events[QuestName][EventName]) {

                    events[QuestName][EventName].bind(events[QuestName])(sprite.item, sprite.sprite, this, payload)
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
