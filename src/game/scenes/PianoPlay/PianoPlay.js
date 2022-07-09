const TextBoxesx = require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a => TextBoxesx[a]);

import PlayScene from '@/game/scenes/PlayScene'

const EventsData = require('./sceneevents/PianoPlay.js');
const _ReglaDePerspectiva1 = require('./sprites/ReglaDePerspectiva1/ReglaDePerspectiva1')
const _Crowd = require('./sprites/Crowd/Crowd')
const _Score = require('./sprites/Score/Score')
const _Toplight = require('./sprites/Toplight/Toplight')
const _Capa2 = require('./sprites/Capa2/Capa2')
const SpriteNames = [_ReglaDePerspectiva1, _Crowd, _Score, _Toplight, _Capa2]

export default class PianoPlay extends PlayScene {

    constructor() {
        super('PianoPlay')
        this.SceneEvents = new EventsData.default();
    }

    create() {

        if (this.SpriteList.length !== 0)
            this.SpriteList.splice(0, this.SpriteList.length);


        for (const sprite_name of SpriteNames) {
            this.createSprite(sprite_name, 'PianoPlay');
        }
        for (const textbox of TextBoxes) {
            this.createTextBox(textbox);
        }
        super.create();
    }


}
