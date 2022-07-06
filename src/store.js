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

export const EQuestState = {
    'Started': 0,
    'Finished': 0,
    'Failed': 0,

}

export class QuestState {
    QuestId = ''
    QuestParameters = {}
    QuestSection='Started'
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
           debugger;
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
        SetQuestValue(state, options = {QuestId: -1, Value: {}, Name: ''}) {
            let qstate = state.PlayerSave.QuestStates.find(a => a.QuestId === options.QuestId);

            if (!qstate) {
                throw new Error("No Such Quest")
            }
            qstate.QuestParameters[options.Name] = options.Value;

        },
        SetQuestSection(state, options = {QuestId: -1,   Section: ''}) {
            let qstate = state.PlayerSave.QuestStates.find(a => a.QuestId === options.QuestId);

            if (!qstate) {
                throw new Error("No Such Quest")
            }
            qstate.QuestSection = options.Section;

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
            let qstate = state.PlayerSave.QuestStates.find(a => a.QuestId === QuestId);

            if (!qstate) {
                throw new Error("No Such Quest")
            }
            return qstate.QuestParameters[ParameterName];
        },
        GetQuestSection: state => (QuestId) => {
            let qstate = state.PlayerSave.QuestStates.find(a => a.QuestId === options.QuestId);

            if (!qstate) {
                throw new Error("No Such Quest")
            }
            return qstate.QuestSection;
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
export function SetQuestSection(QuestName,QuestSection){
    store.commit('SetQuestState', {QuestId: QuestName, QuestSection: QuestSection})
}
export function GetQuestSection(QuestName){
    return store.getters.GetQuestSection(QuestName)
}
export function GetSetting(SettingName,QuestId = "Default"){
    return store.getters.GetQuestValue(QuestId,SettingName)
}
export async function SetSetting(SettingName,SettingValue,Scene,QuestId = "Default"){
    await store.commit('SetQuestValue',{QuestId: QuestId, Value: SettingValue, Name: SettingName})

    Scene.triggerCustomEvent("QuestSettingsUpdate_" + SettingName,QuestId)
}

export function FailQuest(QuestName, scene) {
    store.commit('SetQuestState', {QuestId: QuestName, QuestState: EQuestState.Failed})
    scene.triggerQuestFailed(QuestName)
}

export function EndQuest(QuestName, scene) {
    store.commit('SetQuestState', {QuestId: QuestName, QuestState: EQuestState.Finished})
    scene.triggerQuestFinished(QuestName)
}

export function StartQuest(QuestName, scene) {
    store.commit('SetQuestState', {QuestId: QuestName, QuestState: EQuestState.Started})
    scene.triggerQuestStart(QuestName)

}

