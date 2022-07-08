
        import _Npc3 from './images/Npc3.png'
let paths = [
        ['SchoolEntrance_Npc3', _Npc3, 40],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Npc3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Npc3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 407;
export const Y = 733;
export const Height = 198;
export const Interactive= true
export const Width = 53;
export const Alpha = 1;
export let Scale = 1;

 
