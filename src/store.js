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
    'Finished': 1,
    'Failed': 2,

}

export class QuestState {
    QuestId = ''
    QuestParameters = {}
    QuestSection = 'Started'

    constructor(options = {QuestId: '', QuestState: EQuestState.Failed}) {
        Object.assign(this, options);
    }

    QuestState = EQuestState.Started


}

export class PlayerGameSave extends PlayerSave {
    ActiveQuestStates = [new QuestState({QuestId: "Default", QuestState: EQuestState.Started, QuestSection: "Started"})]
    FinishedQuestStates = []
    PausedQuestStates = []
    FailedQuestStates = []
    All(){
        return [this.FinishedQuestStates,this.PausedQuestStates,this.FailedQuestStates,this.ActiveQuestStates].flat();
    }
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
        SetQuestState(state, options = {QuestId: -1, QuestSection: 'Start', QuestState: EQuestState.Failed}) {

            let qstate;
            let index = state.PlayerSave.ActiveQuestStates.findIndex(a => a.QuestId === options.QuestId);
            if (index < 0) {
                qstate = new QuestState(options);
                state.PlayerSave.ActiveQuestStates.push(qstate);
            } else {
                qstate = state.PlayerSave.ActiveQuestStates[index]
            }
            qstate.QuestState = options.QuestState;
            switch (qstate.QuestState) {
                case EQuestState.Finished:
                    state.PlayerSave.ActiveQuestStates.splice(index, 1);
                    state.PlayerSave.FinishedQuestStates.push(qstate)
                    break
            }


        },
        SetDefaultQuestValue(state, options = {QuestValue: {}, Name: ''}) {
            let qstate = state.PlayerSave.ActiveQuestStates.find(a => a.QuestId === "Default");

            if (!qstate) {
                throw new Error("No Such Quest")
            }
            qstate.QuestParameters[options.Name] = options.QuestValue;

        },
        SetQuestValue(state, options = {QuestId: -1, Value: {}, Name: ''}) {
            let qstate = state.PlayerSave.All().find(a => a.QuestId === options.QuestId);

            if (!qstate) {
                throw new Error("No Such Quest")
            }
            qstate.QuestParameters[options.Name] = options.Value;

        },
        SetQuestSection(state, options = {QuestId: -1, Section: ''}) {

            let qstate = state.PlayerSave.ActiveQuestStates.find(a => a.QuestId === options.QuestId);

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
            return state.PlayerSave.ActiveQuestStates.map(a => a.QuestId);
        },
        GetQuestStates: state => () => {
            return state.PlayerSave.ActiveQuestStates;
        },
        GetAllQuests: state => () => {
            return state.PlayerSave.All();
        },
        HasQuestState: state => (QuestId) => {
            return state.PlayerSave.ActiveQuestStates.find(a => a.QuestId === QuestId);
        },
        GetQuestValue: state => (QuestId, ParameterName) => {
            let qstate = state.PlayerSave.ActiveQuestStates.find(a => a.QuestId === QuestId);

            if (!qstate) {
                throw new Error("No Such Quest")
            }
            return qstate.QuestParameters[ParameterName];
        },
        GetQuestSection: state => (QuestId) => {
            let qstate = state.PlayerSave.ActiveQuestStates.find(a => a.QuestId === QuestId);

            if (!qstate) {
                throw new Error("No Such Quest")
            }
            return qstate.QuestSection;
        }, GetQuestCompleted: state => (QuestId) => {
            return state.PlayerSave.FinishedQuestStates.find(a => a.QuestId === QuestId);


        },
        GetQuestCreated: state => (QuestId) => {
            let qstate = state.PlayerSave.ActiveQuestStates.find(a => a.QuestId === QuestId) ||
                state.PlayerSave.FinishedQuestStates.find(a => a.QuestId === QuestId) ||
                state.PlayerSave.FailedQuestStates.find(a => a.QuestId === QuestId);

            return qstate;
        },
        GetDefaultQuestValue: state => (ParameterName) => {
            let qstate = state.PlayerSave.ActiveQuestStates.find(a => a.QuestId === "Default");

            if (!qstate) {
                throw new Error("No Such Quest")
            }
            return qstate.QuestParameters[ParameterName];
        },
    }

})

export function SetQuestSection(QuestName, QuestSection, Scene) {

    store.commit('SetQuestSection', {QuestId: QuestName, Section: QuestSection})
    Scene.triggerCustomEvent(`QuestSectionUpdate_${QuestSection}`, QuestName)
}

export function GetQuestSection(QuestName) {

    return store.getters.GetQuestSection(QuestName)
}

export function GetQuestCreated(QuestName) {

    return store.getters.GetQuestCreated(QuestName)
}
 export function GetAllQuests(){
    return store.getters.GetAllQuests();
 }
export function GetQuestCompleted(QuestName) {

    return store.getters.GetQuestCompleted(QuestName)
}

export function GetSetting(SettingName, defaultValue, QuestId = "Default") {
    const val = store.getters.GetQuestValue(QuestId, SettingName)
    return val === undefined ? defaultValue : val;
}

export async function SetSetting(SettingName, SettingValue, Scene, QuestId = "Default") {
    await store.commit('SetQuestValue', {QuestId: QuestId, Value: SettingValue, Name: SettingName})

    Scene.triggerCustomEvent("QuestSettingsUpdate_" + SettingName, QuestId,SettingValue)
}

export function FailQuest(QuestName, scene) {
    store.commit('SetQuestState', {QuestId: QuestName, QuestState: EQuestState.Failed})
    scene.triggerQuestFailed(QuestName)
}

export function EndQuest(QuestName, scene) {

    scene.triggerQuestFinished(QuestName)
    store.commit('SetQuestState', {QuestId: QuestName, QuestState: EQuestState.Finished})

}

export async function StartQuest( scene, QuestName, Section) {
    await store.commit('SetQuestState', {QuestId: QuestName, QuestSection: Section, QuestState: EQuestState.Started})
    await scene.triggerQuestStart(QuestName)

}

