
        import _Npc2 from './images/Npc2.png'
let paths = [
        ['SchoolGroundFloor_Npc2', _Npc2, 56],
      
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
export const X = 142;
export const Y = 460;
export const Height = 537;
export const Interactive= true
export const Width = 353;
export const Alpha = 1;
export let Scale = 1;

 
