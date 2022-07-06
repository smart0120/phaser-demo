
        import _water_bottle from './images/water_bottle.png'
let paths = [
        ['water bottle', _water_bottle, 44],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./water_bottle_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "water_bottle"
export const Id = 22;
export const Visible = true
export const X = 819;
export const Y = 520;
export const Height = 105;
export const Interactive= true
export const Width = 36;
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

