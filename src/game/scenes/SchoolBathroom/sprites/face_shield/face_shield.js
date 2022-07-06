
        import face_shield from './images/face_shield.png'
let paths = [
        ['face_shield', face_shield, 13],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./face_shield_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "face_shield"
export const Id = 22;
export const Visible = true
export const X = 1373;
export const Y = 749;
export const Height = 82;
export const Interactive= true
export const Width = 105;
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

