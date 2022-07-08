
        import _Npc1 from './images/Npc1.png'
let paths = [
        ['SchoolGroundFloor_Npc1', _Npc1, 57],
      
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
export const X = 1566;
export const Y = 491;
export const Height = 589;
export const Interactive= true
export const Width = 218;
export const Alpha = 1;
export let Scale = 1;

 
