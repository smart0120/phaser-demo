
        import _hole from './images/hole.png'
let paths = [
        ['hole', _hole, 71],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./hole_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "hole"
export const Id = 22;
export const Visible = true
export const X = 58;
export const Y = 870;
export const Height = 173;
export const Interactive= true
export const Width = 362;
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

