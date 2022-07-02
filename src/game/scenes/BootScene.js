import {Scene} from 'phaser'
import bg_1FECorridor_5 from '@/game/assets/bacakgrounds/1FECorridor(Ver5).png'
import bg_locker_2 from '@/game/assets/bacakgrounds/Locker(Ver2).png'
import jacklyn_naked1 from "@/game/assets/characters/jacklyn_naked1";


export default class BootScene extends Scene {
    constructor() {
        super({key: 'BootScene'})
    }

    preload() {

        this.load.image('bg_1FECorridor_5', bg_1FECorridor_5)
        this.load.image('bg_locker_2', bg_locker_2)

        for (let jacklynElement of jacklyn_naked1) {
            let image_name = jacklynElement[0];
            let module = jacklynElement[1];
            this.load.image(image_name, module)
        }



    }

    create() {
        this.scene.start('PlayScene')
    }
}
