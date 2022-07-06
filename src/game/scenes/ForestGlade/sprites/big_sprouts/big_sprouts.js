
        import _big_sprouts from './images/big_sprouts.png'
let paths = [
        ['big_sprouts', _big_sprouts, 23],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./big_sprouts_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "big_sprouts"
export const Id = 22;
export const Visible = true
export const X = 820;
export const Y = 621;
export const Height = 83;
export const Interactive= true
export const Width = 363;
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

