
        import hot_air_dryer from './images/hot_air_dryer.png'
let paths = [
        ['hot_air_dryer', hot_air_dryer, 24],
      
    ]

      import {store} from "@/store";
const EventsData = require('./events/hot_air_dryer.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "hot_air_dryer"
export const Id = 22;
export const Visible = true
export const X = 621;
export const Y = 210;
export const Height = 61;
export const Interactive= true
export const Width = 58;
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

