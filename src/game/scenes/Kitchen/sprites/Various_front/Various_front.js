
        import _Various_front from './images/Various_front.png'
let paths = [
        ['Various_front', _Various_front, 25],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./Various_front_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Various_front"
export const Id = 22;
export const Visible = true
export const X = 424;
export const Y = 482;
export const Height = 159;
export const Interactive= true
export const Width = 793;
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

