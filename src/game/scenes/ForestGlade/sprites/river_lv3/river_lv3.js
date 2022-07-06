
        import _river_lv3 from './images/river_lv3.png'
let paths = [
        ['river lv3', _river_lv3, 9],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./river_lv3_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "river_lv3"
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

