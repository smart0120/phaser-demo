
        import _bird4_drugged from './images/bird4_drugged.png'
let paths = [
        ['bird4_drugged', _bird4_drugged, 57],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./bird4_drugged_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "bird4_drugged"
export const Id = 22;
export const Visible = true
export const X = 999;
export const Y = 623;
export const Height = 99;
export const Interactive= true
export const Width = 56;
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

