
        import _nightoverlay from './images/nightoverlay.png'
let paths = [
        ['nightoverlay', _nightoverlay, 72],

    ]

      import {store} from "@/store";
export const EventsData = require('./nightoverlay_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "nightoverlay"
export const Id = 22;
export const Visible = true
export const X = 0;
export const Y = 0;
export const Height = 1080;
export const Interactive= false
export const Width = 1920;
export const Alpha = 0.8;
export let Scale = 1;

   export const  MouseEvents = function(name,sprite_definition,sprite,pointer,scene){
            const quests = store.getters.CurrentQuests();
            let quest_found = false;
            for(const quest of quests){
                    if(EventsData[quest]){
                        EventsData[quest][name](sprite_definition,sprite,pointer,scene)
                        quest_found = true;
                    }
            }
            if(!quest_found && EventsData.default && EventsData.default[name]) EventsData.default[name](sprite_definition,sprite,pointer,scene)


        }

