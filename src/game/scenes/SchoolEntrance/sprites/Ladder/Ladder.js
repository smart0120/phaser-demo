
        import _Ladder from './images/Ladder.png'
let paths = [
        ['SchoolEntrance_Ladder', _Ladder, 18],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Ladder_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Ladder"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 511;
export const Y = 673;
export const Height = 136;
export const Interactive= true
export const Width = 92;
export const Alpha = 1;
export let Scale = 1;

 
