
        import cracked_snowglobe from './images/cracked_snowglobe.png'
let paths = [
        ['cracked_snowglobe', cracked_snowglobe, 9],
      
    ]

      import {store} from "@/store";
const EventsData = require('./events/cracked_snowglobe.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "cracked_snowglobe"
export const Id = 22;
export const Visible = true
export const X = 1528;
export const Y = 471;
export const Height = 83;
export const Interactive= true
export const Width = 72;
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

