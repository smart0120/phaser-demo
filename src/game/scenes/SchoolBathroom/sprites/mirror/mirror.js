
        import mirror from './images/mirror.png'
let paths = [
        ['mirror', mirror, 27],
      
    ]

      import {store} from "@/store";
const EventsData = require('./events/mirror.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "mirror"
export const Id = 22;
export const Visible = true
export const X = 1525;
export const Y = 217;
export const Height = 364;
export const Interactive= true
export const Width = 473;
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

