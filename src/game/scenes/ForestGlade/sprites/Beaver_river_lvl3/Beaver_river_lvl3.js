
        import _Beaver_river_lvl3 from './images/Beaver_river_lvl3.png'
let paths = [
        ['Beaver river lvl3', _Beaver_river_lvl3, 40],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./Beaver_river_lvl3_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Beaver_river_lvl3"
export const Id = 22;
export const Visible = true
export const X = 760;
export const Y = 792;
export const Height = 39;
export const Interactive= true
export const Width = 142;
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

