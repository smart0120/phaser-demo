
        import locker_2 from './images/locker 2.png'
let paths = [
        ['locker 2', locker_2, 22],
      
    ]

      import {store} from "@/store";
const EventsData = require('./events/locker 2.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "locker 2"
export const Id = 22;
export const Visible = true
export const X = 754;
export const Y = 279;
export const Height = 416;
export const Interactive= true
export const Width = 120;
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

