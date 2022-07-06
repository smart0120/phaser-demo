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

const EQuestState = {
    'Started': 0,
    'Completed': 0,
    'Failed': 0,

}

export class QuestState {
    QuestId = ''
    QuestParameters = {}

    constructor(options = {QuestId: '', QuestState: EQuestState.Failed}) {
        Object.assign(this, options);
    }

    QuestState = EQuestState.Started


}

export class PlayerGameSave extends PlayerSave {
    QuestStates = [new QuestState({QuestId: "Default", QuestState: EQuestState.Started})]
}

export const store = createStore({
    state() {
        return {


            PlayerSave: new PlayerGameSave(),


        }
    },
    mutations: {
        incrementInventory(state, options = {itemId: -1, amount: 0}) {

            let Item = state.PlayerSave.items.find(a => a.itemId === options.itemId);
            if (!Item) {
                state.PlayerSave.items.push(new Inventory({
                    itemCount: options.amount,
                    itemId: options.itemId,
                }));
            } else {
                Item.itemCount += options.amount;
            }

        },
        /// for unique items
        incrementInventoryUnique(state, options = {itemId: -1}) {

            let Item = state.PlayerSave.items.find(a => a.itemId === options.itemId);
            if (Item)
                return;

            state.PlayerSave.items.push(new Inventory({
                itemCount: 1,
                itemId: options.itemId,
            }));

        },
        SetQuestState(state, options = {QuestId: -1, QuestState: EQuestState.Failed}) {
            let qstate = state.PlayerSave.QuestStates.find(a => a.QuestId === options.QuestId);
            if (!qstate) {
                qstate = new QuestState(options);
                state.PlayerSave.QuestStates.push(qstate);
            }
            qstate.QuestState = options.QuestState;

        },
        SetDefaultQuestValue(state, options = {QuestValue: {}, Name: ''}) {
            let qstate = state.PlayerSave.QuestStates.find(a => a.QuestId === "Default");

            if (!qstate) {
                throw new Error("No Such Quest")
            }
            qstate.QuestParameters[options.Name] = options.QuestValue;

        },
        SetQuestValue(state, options = {QuestId: -1, QuestValue: {}, Name: ''}) {
            let qstate = state.PlayerSave.QuestStates.find(a => a.QuestId === options.QuestId);

            if (!qstate) {
                throw new Error("No Such Quest")
            }
            qstate.QuestParameters[options.Name] = options.QuestValue;

        },


    },
    getters: {
        GetCurrentScene: state => (getters, rootState, rootGetters) => {
            return state.CurrentScene;
        },
        GetInventory: state => (itemId) => {
            let Item = state.PlayerSave.items.find(a => a.itemId === itemId);
            if (!Item) {
                Item = new Inventory({
                    itemCount: 0,
                    itemId: itemId,
                });
                state.PlayerSave.items.push(Item);
            }
            return Item;

        },
        CurrentQuests: state => () => {
           return state.PlayerSave.QuestStates.map(a => a.QuestId);
        },
        GetQuestStates: state => () => {
            return state.PlayerSave.QuestStates;
        },
        HasQuestState: state => (QuestId) => {
            return state.PlayerSave.QuestStates.find(a => a.QuestId === QuestId);
        },
        GetQuestValue: state => (QuestId, ParameterName) => {
            let qstate = state.PlayerSave.QuestStates.find(a => a.QuestId === options.QuestId);

            if (!qstate) {
                throw new Error("No Such Quest")
            }
            return qstate.QuestParameters[ParameterName];
        },
        GetDefaultQuestValue: state => (ParameterName) => {
            let qstate = state.PlayerSave.QuestStates.find(a => a.QuestId === "Default");

            if (!qstate) {
                throw new Error("No Such Quest")
            }
            return qstate.QuestParameters[ParameterName];
        },
    }

})

