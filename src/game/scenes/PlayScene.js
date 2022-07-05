import {Scene} from 'phaser'

import {store} from "@/store";


export default class PlayScene extends Scene {

    SceneName = '';
    SceneId = 2;
    SceneLogic;

    constructor(sceneName = 'PlayScene', SceneId = 2) {
        super({key: sceneName})
        this.SceneName = sceneName;
        this.SceneLogic = store.getters.GetCurrentScene()

    }

    Rules = {
        SpriteMouseOutRules: {},
        SpriteMouseOverRules: {},
        SpriteMouseClickRules: {},
        RectangleMouseClickRules: {},
        RectangleMouseOutRules: {},
        RectangleMouseOverRules: {},
        SceneRules: []
    }

    characters = {};

    onSceneCreate() {
        for (let rule of this.SceneRules) {
            if (this.applySceneRule(rule, this.SceneName, this.SceneId)) return;
        }
    }

    onRectangleClick(rect, pointer, name, rectangleId) {
        const rules = this.Rules.RectangleMouseClickRules[rectangleId];
        if (!rules) return;
        for (let rule of rules) {
            if (this.applyRectangleRule(rule, rect, pointer, name, rectangleId)) break;
        }
    }

    OnRectangleOut(rect, pointer, name, rectangleId) {
        const rules = this.Rules.RectangleMouseOutRules[rectangleId];
        if (!rules) return;
        for (let rule of rules) {
            if (this.applyRectangleRule(rule, rect, pointer, name, rectangleId)) break;
        }
    }

    OnRectangleOver(rect, pointer, name, rectangleId) {
        const rules = this.Rules.RectangleMouseOverRules[rectangleId];
        if (!rules) return;
        for (let rule of rules) {
            if (this.applyRectangleRule(rule, rect, pointer, name, rectangleId)) break;
        }
    }

    OnSpriteClick(sprite, pointer, name, spriteId, groupName) {

        const rules = this.Rules.SpriteMouseClickRules[spriteId];
        if (!rules) return;
        for (let rule of rules) {
            if (this.applySpriteRule(rule, sprite, pointer, name, spriteId, groupName)) break;
        }
    }

    applySceneRule(rule, scene, name, sceneId) {
        try {
            const Result = rule.applyRule(scene, name, sceneId);
            if (Result) {
                rule.applyResults(scene, name, sceneId);
                if (rule.EndEvaluationOnTrue) {
                    return true;
                }
            } else {
                if (rule.EndEvaluationOnFalse) {
                    return true;
                }
            }
        } catch (e) {
            console.log(e);
            return true;
        }
        return false;
    }

    applyRectangleRule(rule, rectangle, pointer, name, rectangleId) {
        try {
            const Result = rule.applyRule(rectangle, pointer, name, rectangleId);
            if (Result) {
                rule.applyResults(rectangle, pointer, name, rectangleId);
                if (rule.EndEvaluationOnTrue) {
                    return true;
                }
            } else {
                if (rule.EndEvaluationOnFalse) {
                    return true;
                }
            }
        } catch (e) {
            console.log(e);
            return true;
        }
        return false;
    }

    applySpriteRule(rule, sprite, pointer, name, spriteId, groupId) {
        try {
            const Result = rule.applyRule(sprite, pointer, name, spriteId, groupId);
            if (Result) {
                rule.applyResults(sprite, pointer, name, spriteId, groupId);
                if (rule.EndEvaluationOnTrue) {
                    return true;
                }
            } else {
                if (rule.EndEvaluationOnFalse) {
                    return true;
                }
            }
        } catch (e) {
            console.log(e);
            return true;
        }
        return false;
    }

    OnSpriteOut(sprite, pointer, name, spriteId, groupId) {
        const rules = this.Rules.SpriteMouseOutRules[spriteId];
        if (!rules) return;

        for (let rule of rules) {
            if (this.applySpriteRule(rule, sprite, pointer, name, spriteId, groupId)) break;
        }


    }

    OnSpriteOver(sprite, pointer, name, spriteId, groupId) {

        const rules = this.Rules.SpriteMouseOverRules[spriteId];
        if (!rules) return;

        for (let rule of rules) {
            if (this.applySpriteRule(rule, sprite, pointer, name, spriteId, groupId)) break;
        }
    }

    createSpriteGroup(Items, GroupName, Scale, Alpha, X, Y, GroupId) {
        this.characters[GroupId] = {};
        for (let item of Items()) {
            this.createSprite(item, X, Y, Scale, Alpha, GroupId);
        }
    }

    createSprite(item, X, Y, Scale, Alpha, GroupId) {
        let {Name, Id} = item;
        let sprite = this.add.sprite(X, Y, Name);

        sprite.setInteractive();
        sprite.scale = Scale;
        sprite.alpha = Alpha
        sprite.on('pointerout', (pointer) => {
            this.OnSpriteOut(sprite, pointer, Name, Id, GroupId)
        })
        sprite.on('pointerover', (pointer) => {

            this.OnSpriteOver(sprite, pointer, Name, Id, GroupId)
        });
        sprite.on('pointerup', (pointer) => {

            this.OnSpriteClick(sprite, pointer, Name, Id, GroupId)
        });
        this.characters[GroupId][Id] = sprite;
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

        this.onSceneCreate();




    }


    update() {
    }
}
