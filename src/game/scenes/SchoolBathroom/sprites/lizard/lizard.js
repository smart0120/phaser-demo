
        import lizard from './images/lizard.png'
let paths = [
        ['lizard', lizard, 16],
      
    ]

      import {store} from "@/store";
const EventsData = require('./events/lizard.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "lizard"
export const Id = 22;
export const Visible = true
export const X = 1578;
export const Y = 15;
export const Height = 89;
export const Interactive= true
export const Width = 47;
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

