
        import _Npc2 from './images/Npc2.png'
let paths = [
        ['SchoolGym_Npc2', _Npc2, 57],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Npc2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Npc2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 299;
export const Y = 535;
export const Height = 625;
export const Interactive= true
export const Width = 283;
export const Alpha = 1;
export let Scale = 1;

 
