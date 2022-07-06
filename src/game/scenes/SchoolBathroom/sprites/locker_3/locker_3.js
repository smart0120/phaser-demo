
        import locker_3 from './images/locker_3.png'
let paths = [
        ['locker 3', locker_3, 21],

    ]

      import {store} from "@/store";
export const EventsData = require('./locker_3_events.js');
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "locker_3"
export const Id = 22;
export const Visible = false
export const X = 876;
export const Y = 279;
export const Height = 416;
export const Interactive= true
export const Width = 104;
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

