
        import _candy6 from './images/candy6.png'
let paths = [
        ['candy6', _candy6, 43],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./candy6_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "candy6"
export const Id = 22;
export const Visible = true
export const X = 1512;
export const Y = 873;
export const Height = 15;
export const Interactive= true
export const Width = 26;
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

