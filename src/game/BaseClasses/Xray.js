export default class Xray {
    constructor(Scene) {
        this.Scene = Scene;
        this.mask = Scene.make.sprite({
            x: 400,
            y: 300,

            key: 'SchoolBathroom_locker_1',
            add: false,

        });
        this.mask.setOrigin( .5,.5)
        this.mask.displayWidth = 300;
        this.mask.displayHeight = 100;


    }

    Sprites = []

    Attach(images) {



        if (images.length === 0) return;

        this.Sprites = []
        // this.shape.beginPath();
        //
        // this.shape.fillRect(50, 0, 100, 75);
        //
        // this.mask = this.shape.createGeometryMask();
        // this.mask.invertAlpha = true;





        this.Sprites = images.map(a => this.Scene.getSpriteByName(a)).filter(a => a);
        for (let sprite of this.Sprites) {
            sprite.oldmask = sprite.mask;
            let bitmapMask = new Phaser.Display.Masks.BitmapMask(this.Scene, this.mask);
            sprite.mask = bitmapMask
            bitmapMask.invertAlpha = true;
        }
    }

    Clear() {


        for (let sprite of this.Sprites) {

            sprite.mask = sprite.oldmask  ;
        }
        this.mask.destroy();

    }

    Update(payload) {
        this.mask.x = payload.x;
        this.mask.y = payload.y;
    }
}
