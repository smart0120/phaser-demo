
        import _Beaver_river_lvl1 from './images/Beaver_river_lvl1.png'
let paths = [
        ['Beaver_river lvl1', _Beaver_river_lvl1, 38],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./Beaver_river_lvl1_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Beaver_river_lvl1"
export const Id = 22;
export const Visible = true
export const X = 754;
export const Y = 792;
export const Height = 71;
export const Interactive= true
export const Width = 148;
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

