
        import sinks_columns from './images/sinks_columns.png'
let paths = [
        ['sinks_columns', sinks_columns, 25],
      
    ]

      import {store} from "@/store";
const EventsData = require('./events/sinks_columns.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "sinks_columns"
export const Id = 22;
export const Visible = true
export const X = 742;
export const Y = 7;
export const Height = 920;
export const Interactive= true
export const Width = 283;
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

