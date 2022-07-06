
        import _bird5_ground from './images/bird5_ground.png'
let paths = [
        ['bird5_ground', _bird5_ground, 55],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./bird5_ground_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "bird5_ground"
export const Id = 22;
export const Visible = true
export const X = 823;
export const Y = 597;
export const Height = 39;
export const Interactive= true
export const Width = 60;
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

