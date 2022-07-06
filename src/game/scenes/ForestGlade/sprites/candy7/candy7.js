
        import _candy7 from './images/candy7.png'
let paths = [
        ['candy7', _candy7, 42],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./candy7_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "candy7"
export const Id = 22;
export const Visible = true
export const X = 1591;
export const Y = 892;
export const Height = 24;
export const Interactive= true
export const Width = 47;
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

