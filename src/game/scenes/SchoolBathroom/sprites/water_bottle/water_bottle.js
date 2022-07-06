
        import water_bottle from './images/water_bottle.png'
let paths = [
        ['water_bottle', water_bottle, 28],
      
    ]

      import {store} from "@/store";
const EventsData = require('./events/water_bottle.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "water_bottle"
export const Id = 22;
export const Visible = true
export const X = 772;
export const Y = 805;
export const Height = 100;
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

