
        import _Npc3 from './images/Npc3.png'
let paths = [
        ['SchoolGroundFloor_Npc3', _Npc3, 55],
      
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
export const X = 826;
export const Y = 441;
export const Height = 132;
export const Interactive= true
export const Width = 49;
export const Alpha = 1;
export let Scale = 1;

 
