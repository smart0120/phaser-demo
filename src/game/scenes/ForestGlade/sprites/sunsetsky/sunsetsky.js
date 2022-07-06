
        import _sunsetsky from './images/sunsetsky.png'
let paths = [
        ['sunsetsky', _sunsetsky, 3],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./sunsetsky_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "sunsetsky"
export const Id = 22;
export const Visible = true
export const X = 0;
export const Y = 0;
export const Height = 1080;
export const Interactive= true
export const Width = 1920;
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

