
        import _riverr_lv2 from './images/riverr_lv2.png'
let paths = [
        ['riverr lv2', _riverr_lv2, 10],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./riverr_lv2_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "riverr_lv2"
export const Id = 22;
export const Visible = true
export const X = 0;
export const Y = 735;
export const Height = 314;
export const Interactive= true
export const Width = 1920;
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

