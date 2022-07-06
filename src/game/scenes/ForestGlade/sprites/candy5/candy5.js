
        import _candy5 from './images/candy5.png'
let paths = [
        ['candy5', _candy5, 44],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./candy5_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "candy5"
export const Id = 22;
export const Visible = true
export const X = 1108;
export const Y = 851;
export const Height = 20;
export const Interactive= true
export const Width = 32;
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

