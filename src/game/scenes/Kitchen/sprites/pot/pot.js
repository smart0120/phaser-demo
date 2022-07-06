
        import _pot from './images/pot.png'
let paths = [
        ['pot', _pot, 14],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./pot_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "pot"
export const Id = 22;
export const Visible = true
export const X = 707;
export const Y = 446;
export const Height = 104;
export const Interactive= true
export const Width = 115;
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

