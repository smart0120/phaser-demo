
        import _jacklyn_undies from './images/jacklyn_undies.png'
let paths = [
        ['jacklyn_undies', _jacklyn_undies, 70],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./jacklyn_undies_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "jacklyn_undies"
export const Id = 22;
export const Visible = true
export const X = 387;
export const Y = 373;
export const Height = 506;
export const Interactive= true
export const Width = 153;
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

