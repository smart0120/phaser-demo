
        import _Npc4 from './images/Npc4.png'
let paths = [
        ['SchoolEntrance_Npc4', _Npc4, 41],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Npc4_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Npc4"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1381;
export const Y = 803;
export const Height = 277;
export const Interactive= true
export const Width = 174;
export const Alpha = 1;
export let Scale = 1;

 
