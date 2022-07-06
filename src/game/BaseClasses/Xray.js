export default class Xray {
    constructor(Scene) {
        this.Scene = Scene;
         this.shape = Scene.make.graphics(undefined, true);
        this.Sprites =[]
        this.shape.beginPath();

        this.shape.fillRect(50, 0, 100, 75);


        this.mask = this.shape.createGeometryMask();
        this.mask.invertAlpha = true;
        this.mask.visible = false;
        this.shape.visible = false;


        Scene.input.on('pointermove',  (pointer) => {

            this.shape.x = pointer.x - 50;
            this.shape.y = pointer.y -35 ;

        });

    }
    Attach(images){
        if(images.length >0){
            this.mask.visible = true;
            this.shape.visible = true;

        }
        this.Sprites = images;
        for (let sprite of this.Sprites) {
            const image = this.Scene.getSpriteByName(sprite);
            if(image)
                image.setMask(this.mask)
        }
    }
    Clear(){
        for (let sprite of this.Sprites) {
            const image = this.Scene.getSpriteByName(sprite);
            if(image)
                image.clearMask(false)
        }
    }

}
