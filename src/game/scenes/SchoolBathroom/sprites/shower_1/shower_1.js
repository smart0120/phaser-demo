
        import shower_1 from './images/shower_1.png'
let paths = [
        ['shower 1', shower_1, 3],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./shower_1_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "shower_1"
export const Id = 22;
export const Visible = true
export const X = 1254;
export const Y = 204;
export const Height = 543;
export const Interactive= true
export const Width = 98;
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

