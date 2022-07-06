export default class Xray {
    constructor(Scene,Sprites) {
        this.Scene = Scene;
         this.shape = Scene.make.graphics(undefined, true);

        this.shape.beginPath();

        this.shape.fillRect(50, 0, 100, 75);


        this.mask = this.shape.createGeometryMask();
        this.mask.invertAlpha = true;
        this.Sprites = Sprites;
        for (let sprite of this.Sprites) {
            const image = Scene.getSpriteByName(sprite);
            image.setMask(this.mask)
        }


        Scene.input.on('pointermove',  (pointer) => {

            this.shape.x = pointer.x - 50;
            this.shape.y = pointer.y -35 ;

        });

    }
    Clear(){
        for (let sprite of this.Sprites) {
            const image = this.Scene.getSpriteByName(sprite);
            image.clearMask(false)
        }
    }

}
