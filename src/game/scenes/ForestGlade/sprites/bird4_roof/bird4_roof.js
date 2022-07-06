
        import _bird4_roof from './images/bird4_roof.png'
let paths = [
        ['bird4_roof', _bird4_roof, 56],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./bird4_roof_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "bird4_roof"
export const Id = 22;
export const Visible = true
export const X = 624;
export const Y = 356;
export const Height = 38;
export const Interactive= true
export const Width = 54;
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

