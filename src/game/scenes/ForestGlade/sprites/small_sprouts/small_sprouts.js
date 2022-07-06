
        import _small_sprouts from './images/small_sprouts.png'
let paths = [
        ['small_sprouts', _small_sprouts, 21],
      
    ]

      import {store} from "@/store";
export const EventsData = require('./small_sprouts_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "small_sprouts"
export const Id = 22;
export const Visible = true
export const X = 835;
export const Y = 639;
export const Height = 54;
export const Interactive= true
export const Width = 321;
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

