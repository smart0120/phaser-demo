
        import _Kettle_Stove from './images/Kettle_Stove.png'
let paths = [
        ['Kettle_Stove', _Kettle_Stove, 23],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./Kettle_Stove_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Kettle_Stove"
export const Id = 22;
export const Visible = true
export const X = 745;
export const Y = 496;
export const Height = 54;
export const Interactive= true
export const Width = 75;
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

