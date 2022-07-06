
        import _bird3_roof from './images/bird3_roof.png'
let paths = [
        ['bird3_roof', _bird3_roof, 59],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./bird3_roof_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "bird3_roof"
export const Id = 22;
export const Visible = true
export const X = 549;
export const Y = 418;
export const Height = 41;
export const Interactive= true
export const Width = 34;
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

