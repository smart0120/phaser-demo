
        import _rivercanal_lvl3 from './images/rivercanal_lvl3.png'
let paths = [
        ['rivercanal_lvl3', _rivercanal_lvl3, 20],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./rivercanal_lvl3_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "rivercanal_lvl3"
export const Id = 22;
export const Visible = true
export const X = 718;
export const Y = 664;
export const Height = 126;
export const Interactive= true
export const Width = 132;
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

