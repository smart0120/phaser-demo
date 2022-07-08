
        import _Npc1 from './images/Npc1.png'
let paths = [
        ['SchoolGym_Npc1', _Npc1, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Npc1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Npc1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 243;
export const Y = 265;
export const Height = 116;
export const Interactive= true
export const Width = 34;
export const Alpha = 1;
export let Scale = 1;

 
