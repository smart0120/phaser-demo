
        import _dollar2 from './images/dollar2.png'
let paths = [
        ['dollar2', _dollar2, 67],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./dollar2_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "dollar2"
export const Id = 22;
export const Visible = true
export const X = 129;
export const Y = 326;
export const Height = 25;
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

