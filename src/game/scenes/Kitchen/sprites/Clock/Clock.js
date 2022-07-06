
        import _Clock from './images/Clock.png'
let paths = [
        ['Clock', _Clock, 30],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./Clock_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Clock"
export const Id = 22;
export const Visible = true
export const X = 689;
export const Y = 272;
export const Height = 106;
export const Interactive= true
export const Width = 96;
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

