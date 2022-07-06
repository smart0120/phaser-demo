
        import _bird3_ground from './images/bird3_ground.png'
let paths = [
        ['bird3_ground', _bird3_ground, 60],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./bird3_ground_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "bird3_ground"
export const Id = 22;
export const Visible = true
export const X = 799;
export const Y = 626;
export const Height = 37;
export const Interactive= true
export const Width = 35;
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

