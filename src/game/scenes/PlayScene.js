import {Scene} from 'phaser'
import {GetAllQuests, GetQuestSection, GetSetting, SetSetting, store} from "@/store";
import {StopEventLoop} from "@/game/scenes/StopEventLoop";
import {Items} from "@/game/scenes/PianoPlay/sprites/ReglaDePerspectiva1/ReglaDePerspectiva1";


export default class PlayScene extends Scene {
    DebugText(eventname, point, sprite) {
        if (window.debug_sprites)
            this.DebugTextBox.setText(sprite.texture.key)
        //this.triggerTextBox("DebugTextBox", "Default", {point, sprite})

    }

    SceneName = '';


    constructor(sceneName = 'PlayScene') {
        super({key: sceneName})
        this.SceneName = sceneName;


    }

    SceneEvents;


    SpriteList = []

    cloneSprite(item, SceneName) {
        let clone_count = 0;
        const clone = Object.assign({}, item);
        clone.name = clone.name + "_Clone_" + clone_count;
        while (this.getSpriteByName(clone.name)) {
            clone.name = item.name + "_Clone_" + ++clone_count;
        }
        return this.createSprite(clone, SceneName);
    }

    SpriteLogic(event_file) {
        const eventData = {};

        let indexes = Object.keys(event_file);
        indexes.forEach(a => {
            eventData[a] = new event_file[a]();
        });
        return eventData

    }

    MouseEvents(EventName, sprite_definition, pointer, EventsData) {
        const quests = store.getters.CurrentQuests();
        for (const quest of quests) {
            try {
                this.MouseQuest(quest, EventsData, EventName, sprite_definition, pointer);
            } catch (e) {
                if (e instanceof StopEventLoop) {
                    return;
                }

                console.log("MouseEvent Threw Eception");
                console.error(e);
                throw e
            }
        }
    }

    MouseQuest(QuestName, EventsData, EventName, sprite_definition, pointer) {

        const QuestMouseEvent = EventName;
        if (this.SceneEvents[QuestName] && this.SceneEvents[QuestName][QuestMouseEvent]) {
            this.SceneEvents[QuestName][QuestMouseEvent](null, null, this, pointer)
        }

        if (!(EventsData && EventsData[QuestName]) || !EventsData[QuestName][QuestMouseEvent]) {
            return;
        }

        EventsData[QuestName][QuestMouseEvent].bind(EventsData[QuestName])(this, sprite_definition, pointer)

    }

    getSpritesByGroup(groupId) {
        return this.SpriteList.filter(a => a.GroupId === groupId).map(a => a.sprite);
    }

    createSprite(item, SceneName = '') {
        let {Name, Id, X, Y, Scale, Alpha, Visible, Interactive, MouseEvents, Items} = item;

        let sprite = this.add.sprite(X, Y, SceneName + "_" + Name);

        for (const groupElement of item.default) {
            let key =  groupElement[0];
            const prefix = key.indexOf('_');
            if(prefix >=0){
                key = key.slice(prefix+1);
            }

            const animation = this.anims.create({
                key:key,
                frames: [
                    {key: groupElement[0]}
                ],
                frameRate: 1,
                repeat: 0
            });


        }
        sprite.visible = Visible
        if (Interactive)
            sprite.setInteractive();
        sprite.scale = Scale;
        sprite.alpha = Alpha
        sprite.setOrigin(0, 0);
        //    sprite.setOriginFromFrame()

        sprite.width = item.Width;
        sprite.height = item.Height;
        const EventsData = this.SpriteLogic(item.event_file);
        let sprite_def = {sprite, item, Name, EventsData};
        let lastClick = 0;
        sprite.on('pointerout', (pointer) => {
            this.DebugText('PointerOut', pointer, sprite)
            this.MouseEvents('PointerOut', sprite_def, pointer, EventsData)
        })
        sprite.on('pointerover', (pointer) => {
            this.DebugText('PointerOver', pointer, sprite)
            this.MouseEvents('PointerOver', sprite_def, pointer, EventsData)
        });
        sprite.on('pointerup', (pointer) => {
            let clickTime = +(new Date());
            let lastClickTime = lastClick;
            lastClick = clickTime;
            let eventName = 'PointerDoubleClick';
            if (clickTime - lastClickTime > 500) {

                eventName = 'PointerUp'
            }
            this.MouseEvents(eventName, sprite_def, pointer, EventsData)


            this.DebugText(eventName, pointer, sprite)
        });


        this.SpriteList.push(sprite_def);
        return sprite;
    }

    createSpriteSheet(item, SceneName = '') {
        //  this.load.spritesheet(item.Name, item.default[0][1], { frameWidth: item.FrameWidth, frameHeight: item.FrameHeight });
        //    const sprite = this.add.sprite(item.X, item.Y2)

    }

    TextBoxes = []
    Tweens = []

    createTextBox(item) {

        let {Name, Id, X, Y, FontFamily, TextClass, Interactive, EventsData} = item;

        const text_box = new TextClass(this, item);

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
            duration: 1500,
            tweens: [{x: 600, y: 400}],
            yoyo: true,
            loop: -1,

        };
        const TimeLine = this.tweens.timeline(tween);
        return new Promise((resolve, reject) => {
            TimeLine.on('stop', () => {

                resolve(...arguments);
            })
        })

    }

    clearAnimations(sprite) {

        this.tweens.killTweensOf(sprite)
    }

    async triggerTextBox(TextBoxName, Quest = "Default", payload) {

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
            await box.text_box[UniqueQuestSectionEvent].bind(box.text_box)(this, payload);
            SetSetting(UniqueQuestSectionTextSetting, true, this, Quest);

        } else if (UniqueQuestTextTest()) {
            await box.text_box[UniqueQuestEvent].bind(box.text_box)(this, payload);
            SetSetting(UniqueQuestTextSetting, true, this, Quest);

        } else {
            const questSectionText = QuestSectionText();
            if (questSectionText) {
                await questSectionText.bind(box.text_box)(this, QuestSectionCount, payload);
                SetSetting(QuestSectionCountSetting, QuestSectionCount + 1, this, Quest);
            } else {
                const questText = QuestText();

                if (questText) {
                    await questText.bind(box.text_box)(this, QuestCount, payload);
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

    getTextBoxByName(name) {
        let found = this.TextBoxes.find(a => a.Name === name);
        if (!found) return undefined;
        return found.text_box;
    }

    getSpriteByName(name) {
        let found = this.SpriteList.find(a => a.Name === this.ConvertSpriteNameToSpriteSceneName(name));
        if (!found) return undefined;
        return found.sprite;
    }

    ConvertSpriteNameToSpriteSceneName(name) {
        return name;
    }

    walkSprite(sprite, x, y) {

        let tween = {
            targets: sprite,
            duration: 500,
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


    triggerSceneResume(oldScene) {
        this.scene.pause();
        this.scene.setVisible(false)
        this.scene.resume(oldScene)

    }

    triggerSceneChange(NewScene) {
        const Quests = GetAllQuests()
        for (const quest of Quests) {
            this.triggerCustomEvent("SceneFinished")
        }


        this.cameras.main.fadeOut(1000, 0, 0, 0)

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start(NewScene)
        })


    }

    // triggers an event on a quest (default being the "world" quest the ends when you win.
    triggerCustomEvent(EventName, OnlyQuest = null, payload) {
        const Quests = GetAllQuests()
        if (this.SceneEvents[EventName]) {
            try {
                this.SceneEvents[EventName](this, payload)
            } catch (e) {
                if (e instanceof StopEventLoop) {
                    return;
                }
                throw e
            }
        }

        for (const Quest of Quests) {
            const QuestName = Quest.QuestId
            if (OnlyQuest && OnlyQuest !== QuestName)
                continue;

            const Sprites = this.SpriteList.filter(sprite =>
                sprite.sprite && sprite.EventsData && sprite.EventsData[QuestName] && sprite.EventsData[QuestName][EventName]
            )
            for (const sprite_def of Sprites) {
                try {
                    sprite_def.EventsData[QuestName][EventName].bind(sprite_def.EventsData[QuestName])(this, sprite_def.sprite, payload)
                } catch (e) {
                    if (e instanceof StopEventLoop) {
                        return;
                    }
                    throw e
                }
            }

        }
    }

    createRectangle(RectangleId, Name, X, Y, Width, Height, FillColor, Alpha, TweenEffect) {
        const rectangle = this.add.rectangle(X, Y, Width, Height, FillColor, Alpha);
        /*  rectangle.setInteractive()
          rectangle.on('pointerout', (pointer) => {
              MouseEvents('MouseOut', item, sprite, pointer, this)
          })
          rectangle.on('pointerover', (pointer) => {
              MouseEvents('MouseOver', item, sprite, pointer, this)
          });
          rectangle.on('pointerup', (pointer) => {

              MouseEvents('MouseUp', item, sprite, pointer, this)
          });*/
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
        return rectangle;

    }

    create() {

        this.cameras.main.fadeIn(1000, 0, 0, 0)
        this.triggerCustomEvent("SceneCreated");
        this.input.on('pointermove', (pointer) => {
            if (this.SceneEvents["PointerMove"])
                this.SceneEvents["PointerMove"].bind(this.SceneEvents)(this, pointer);
        });

            this.DebugTextBox = this.add.text(10, 50, "Debug:", {
                fontSize: '40px',
                fontFamily: 'Arial',
                color: '#ffffff',
                align: 'center',
                backgroundColor: '#640f64',

            })
            this.children.bringToTop(this.DebugTextBox)


    }


    update() {
    }
}
