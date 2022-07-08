export default class GameMenu{
    constructor() {
    }
    MainScene;
    Show(Scene){
        this.MainScene= Scene
        Scene.pause();
        Scene.launch('Menu')
    }
    Hide(){
        if(this.MainScene && this.MainScene.isPaused()) {
            this.MainScene.resume();
        }

    }
}
