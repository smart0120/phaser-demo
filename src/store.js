// Create a new store instance.
import {createStore} from "vuex";
import {
    Frame,
    GameScene,
    Inventory, Item,
    PlayerSave,
    Scene,
    SceneStartCondition,
    Spot,
    SpriteSheetRef,
    SpriteSheetRefResult
} from "@/dtos.js";

export const store = createStore({
    state() {
        return {
            CurrentScene: new GameScene(),
            SceneCache: [new GameScene()],
            PlayerSave: new PlayerSave(),
            CurrentSceneId: 0,
            CurrentFrameId: 0,
            FakeCounter1: 0,
            FakeCounter2: 0
        }
    },
    mutations: {
        async incrementInventory(state, itemId) {

            let Item = state.PlayerSave.items.find(a => a.itemId === itemId);
            if (!Item) {
                Item = await this.AddNewItem(); //automatically saves
                state.PlayerSave.items.push(Item);
            } else {
                Item.itemCount++;
                await this.Save();
            }

        },
        async Save() {
        },
        IncreaseInventory(state, payload) {
            // const item = state.CurrentScene.gameItems.find(b => b.id === itemID)
            // const item_stats = state.PlayerSave.items.find(a => a.itemId === itemID);
            debugger;
            if (payload.itemId === 0) {
                state.FakeCounter1 += payload.amount;
            } else {
                state.FakeCounter2 += payload.amount;
            }

        },
        async AddNewItem() {
            //
            return new Inventory({
                itemId: 1, id: 1, itemCount: 1, gameId: 0, userId: 1
            })
        },
        async DownloadScene(state, sceneId, projectId) {
            state.SceneCache.push(new GameScene({

                inventoryClickCondition: [],
                frames: [new Frame({
                    sceneId: sceneId,
                    id: 1,
                    name: "BgTest",

                })],
                scene: new Scene({
                    id: sceneId,
                    frames: [1],
                    name: "TestFrame",
                    spriteSheetRefId: 0,
                    textBlock: 3
                }),
                masksImageResult: [],
                mouseHoverCondition: [],
                mouseSwipeCondition: [],
                movesToFrameResult: [],
                spot: [new Spot({
                    sceneId: sceneId,
                    x: 0,
                    y: 100,
                    height: 100,
                    width: 100,
                    projectId: projectId

                })],
                project: projectId,
                clickConditions: [],
                frameStartConditions: [],
                gameItems: [],
                sceneStartCondition: [
                    new SceneStartCondition({
                        id: 1,
                        sceneId: sceneId,
                        frameId: state.CurrentFrameId,
                        projectId: projectId,
                        order: 0,
                        resultId: 5
                    })

                ],
                spriteSheetRefResults: [new SpriteSheetRefResult({
                    sceneId: sceneId,
                    frameId: state.CurrentFrameId,
                    projectId: projectId,
                    resultId: 5,
                    spriteSheetRefId: 9
                })],
                spriteSheetRefs: [new SpriteSheetRef({
                    id: 9,
                    endFrame: 1,
                    startFrame: 1,
                    spriteSheetId: 10

                })],
                spriteSheets: [],


            }))
        },
        UpdateToNewScene(state, sceneId) {
            state.CurrentSceneId = sceneId;
        },
        UpdateToNewFrame(state, frameId) {
            state.CurrentFrameId = frameId
        }
    },
    getters: {
        GetCurrentScene: state=>  (getters, rootState, rootGetters) => {
            return state.CurrentScene;
        },
        GetInventory :state=> ( itemID) =>{
            // const item = state.CurrentScene.gameItems.find(b => b.id === itemID)
            // const item_stats = state.PlayerSave.items.find(a => a.itemId === itemID);
            // return {item,item_stats}
            debugger;
            if (itemID === 0)
                return {
                    item: new Item({}), item_stats: new Inventory({itemCount: state.FakeCounter1})
                }
            return {
                item: new Item({}), item_stats: new Inventory({itemCount: state.FakeCounter2})
            }

        },

        GetInventoryConditions: (state) => {
            const currentFrame = state.CurrentScene.frames.find(a => a.id === state.CurrentFrameId);
            if (!currentFrame) {
                //Not loaded??
                alert("Frame is missing!");
                return;
            }
            return state.CurrentScene.inventoryClickCondition.filter(a => a.frameId === currentFrame.id && a.sceneId === state.CurrentSceneId);
            // for (const condition of inventoryConditions) {
            //
            // }
        }
    }

})

