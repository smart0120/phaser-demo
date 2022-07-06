
        import _bird6_ground from './images/bird6_ground.png'
let paths = [
        ['bird6_ground', _bird6_ground, 50],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./bird6_ground_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "bird6_ground"
export const Id = 22;
export const Visible = true
export const X = 562;
export const Y = 678;
export const Height = 42;
export const Interactive= true
export const Width = 69;
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

