
        import _sugarcube8 from './images/sugarcube8.png'
let paths = [
        ['sugarcube8', _sugarcube8, 63],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./sugarcube8_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "sugarcube8"
export const Id = 22;
export const Visible = true
export const X = 1271;
export const Y = 614;
export const Height = 19;
export const Interactive= true
export const Width = 19;
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

