import PlayScene from "@/game/scenes/PlayScene";
import {Alpha, GroupId, Items, Scale, X, Y} from "@/game/assets/characters/jacklyn_naked1";
import {ClickCondition, InventoryClickCondition, Spot} from "@/dtos";
import ApplyRectangleBindings from "@/game/scenes/applyRectangleBindings";

const Spots = [
    new Spot({
        projectId: 0,
        y: 600,
        width: 125,
        height: 50,
        x: 500,
        id: 1,
        visibleEffect: true,

    })
]
const SpotConditions = {
    0: {
        'click': [new ClickCondition({
            projectId: 0,
            id: 1,
            resultId: 0,
            order: 0,
            sceneId: 2,
            spotId: 1,
            showEffect: 1,
            stopsEvaluationOnFalse: false,
            stopsEvaluationOnTrue: false,
            beforeText: false
        })],
        'inventoryClick': [[new InventoryClickCondition({
            projectId: 0,
            id: 1,
            resultId: 0,
            order: 0,
            sceneId: 2,
            spotId: 1,
            showEffect: 1,
            stopsEvaluationOnFalse: false,
            stopsEvaluationOnTrue: false,
            beforeText: false,
            not: false,
            inventoryCountBetweenLower: 0,
            inventoryCountBetweenUpper: 5,
            inventoryId: 1
        })]]
    }
}

ApplyRectangleBindings(SpotConditions);

export default class SceneRoom1 extends PlayScene {
    constructor() {
        super("SceneRoom1", 2);

    }

    create() {
        super.create();
        this.createJacklyn_Naked1Group()
        this.add.image(900, 500, 'bg_1FECorridor_5')
        this.createJacklyn_Naked1Group()
        this.createRectangle(1, "PantyButton", 500, 600, 125, 50, 0xff66ff, 0)
        this.createRectangle(2, "ExitButton", 100, 600, 125, 50, 0xff66ff, .2, 1)
        this.Rules.RectangleMouseClickRules[1] = []
    }

    createRectangle4() {

    }

    createJacklyn_Naked1Group() {
        const {Items, GroupId, Scale, Alpha, X, Y} = require("@/game/assets/characters/jacklyn_naked1")
        this.createSpriteGroup(Items, GroupId, Scale, Alpha, X, Y);

    }
}
