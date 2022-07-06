
        import selfie_stick from './images/selfie_stick.png'
let paths = [
        ['selfie_stick', selfie_stick, 6],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./selfie_stick_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "selfie_stick"
export const Id = 22;
export const Visible = true
export const X = 1274;
export const Y = 340;
export const Height = 447;
export const Interactive= true
export const Width = 115;
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

