
        import _candy3 from './images/candy3.png'
let paths = [
        ['candy3', _candy3, 46],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./candy3_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "candy3"
export const Id = 22;
export const Visible = true
export const X = 876;
export const Y = 867;
export const Height = 22;
export const Interactive= true
export const Width = 39;
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

