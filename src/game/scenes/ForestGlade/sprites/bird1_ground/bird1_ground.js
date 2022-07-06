
        import _bird1_ground from './images/bird1_ground.png'
let paths = [
        ['bird1_ground', _bird1_ground, 67],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./bird1_ground_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "bird1_ground"
export const Id = 22;
export const Visible = true
export const X = 826;
export const Y = 671;
export const Height = 48;
export const Interactive= true
export const Width = 34;
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

