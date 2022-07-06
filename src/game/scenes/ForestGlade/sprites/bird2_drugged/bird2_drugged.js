
        import _bird2_drugged from './images/bird2_drugged.png'
let paths = [
        ['bird2_drugged', _bird2_drugged, 62],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./bird2_drugged_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "bird2_drugged"
export const Id = 22;
export const Visible = true
export const X = 1182;
export const Y = 689;
export const Height = 64;
export const Interactive= true
export const Width = 71;
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

