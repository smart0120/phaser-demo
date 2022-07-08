

const TextBoxesx = require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a => TextBoxesx[a]);
import PlayScene from '@/game/scenes/PlayScene'

const EventsData = require('./sceneevents/MenuExample.js');
const _flora = require('./sprites/florabandaid_undies/florabandaid_undies')
const SpriteNames = [_flora]

export default class MenuExampleScene extends PlayScene {

    constructor() {
        super('MenuExample')
        this.SceneEvents = new EventsData.default();
    }

    create() {
        if(this.SpriteList.length !==0) return;

        for (const sprite_name of SpriteNames) {
            this.createSprite(sprite_name, 'MenuExample');
        }
        for (const textbox of TextBoxes) {
            this.createTextBox(textbox);
        }
        super.create();
    }


}
