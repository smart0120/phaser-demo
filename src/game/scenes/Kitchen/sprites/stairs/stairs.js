
        import _stairs from './images/stairs.png'
let paths = [
        ['stairs', _stairs, 29],

    ]

      import {store} from "@/store";
export const EventsData = require('./stairs_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "stairs"
export const Id = 22;
export const Visible = true
export const X = 0;
export const Y = 0;
export const Height = 1080;
export const Interactive= false
export const Width = 817;
export const Alpha = 1;
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

