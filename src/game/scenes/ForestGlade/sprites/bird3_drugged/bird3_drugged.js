
        import _bird3_drugged from './images/bird3_drugged.png'
let paths = [
        ['bird3_drugged', _bird3_drugged, 61],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./bird3_drugged_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "bird3_drugged"
export const Id = 22;
export const Visible = true
export const X = 842;
export const Y = 548;
export const Height = 32;
export const Interactive= true
export const Width = 37;
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

