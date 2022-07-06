
        import _dollar3 from './images/dollar3.png'
let paths = [
        ['dollar3', _dollar3, 68],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./dollar3_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "dollar3"
export const Id = 22;
export const Visible = true
export const X = 1663;
export const Y = 355;
export const Height = 23;
export const Interactive= true
export const Width = 28;
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

