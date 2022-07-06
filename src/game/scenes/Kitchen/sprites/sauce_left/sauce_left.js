
        import _sauce_left from './images/sauce_left.png'
let paths = [
        ['sauce_left', _sauce_left, 26],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./sauce_left_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "sauce_left"
export const Id = 22;
export const Visible = true
export const X = 1087;
export const Y = 545;
export const Height = 73;
export const Interactive= true
export const Width = 25;
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

