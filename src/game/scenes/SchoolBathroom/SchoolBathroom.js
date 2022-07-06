const TextBoxesx = require('./textboxes/index.js')
const TextBoxes = Object.keys(TextBoxesx).map(a => TextBoxesx[a]);
const background = require('./sprites/bg/bg');
import PlayScene from '@/game/scenes/PlayScene'

const EventsData = require('./sceneevents/SchoolBathroom.js');
const shower_2 = require('./sprites/shower_2/shower_2')
const shower_1 = require('./sprites/shower_1/shower_1')
const urinal = require('./sprites/urinal/urinal')
const sink = require('./sprites/sink/sink')
const selfie_stick = require('./sprites/selfie_stick/selfie_stick')
const stall_doors = require('./sprites/stall_doors/stall_doors')
const door = require('./sprites/door/door')
const cracked_snowglobe = require('./sprites/cracked_snowglobe/cracked_snowglobe')
const shoes = require('./sprites/shoes/shoes')
const soap = require('./sprites/soap/soap')
const condom = require('./sprites/condom/condom')
const face_shield = require('./sprites/face_shield/face_shield')
const cigarettes = require('./sprites/cigarettes/cigarettes')
const mask = require('./sprites/mask/mask')
const lizard = require('./sprites/lizard/lizard')
const basket = require('./sprites/basket/basket')
const painting = require('./sprites/painting/painting')
const fork = require('./sprites/fork/fork')
const lockers = require('./sprites/lockers/lockers')
const locker_3 = require('./sprites/locker_3/locker_3')
const locker_2 = require('./sprites/locker_2/locker_2')
const locker_1 = require('./sprites/locker_1/locker_1')
const hot_air_dryer = require('./sprites/hot_air_dryer/hot_air_dryer')
const sinks_columns = require('./sprites/sinks_columns/sinks_columns')
const sinks = require('./sprites/sinks/sinks')
const mirror = require('./sprites/mirror/mirror')
const water_bottle = require('./sprites/water_bottle/water_bottle')
const flora_xray_full = require('./sprites/flora_xray_full/flora_xray_full')
const flora_xray = require('./sprites/flora_xray/flora_xray')
const flora = require('./sprites/flora/flora')
const SpriteNames = [shower_2, shower_1, urinal, sink, selfie_stick, stall_doors, door, cracked_snowglobe, shoes, soap, condom, face_shield, cigarettes, mask, lizard, basket, painting, fork, lockers, locker_3, locker_2, locker_1, hot_air_dryer, sinks_columns, sinks, mirror, water_bottle, flora_xray_full, flora_xray, flora]

export default class SchoolBathroom extends PlayScene {

    constructor() {
        super('SchoolBathroom')

    }

    create() {

        this.SceneEvents = EventsData;
        this.createSprite(background.default[0][0]);

        for (const sprite_name of SpriteNames) {
            this.createSprite(sprite_name);
        }
        for (const textbox of TextBoxes) {
            this.createTextBox(textbox);
        }
        this.triggerCustomEvent("SceneCreated", "Default");
    }


}
