
        import _Lockersfront from './images/Lockersfront.png'
let paths = [
        ['SchoolGroundFloor_Lockersfront', _Lockersfront, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lockersfront_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lockersfront"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 552;
export const Y = 561;
export const Height = 147;
export const Interactive= true
export const Width = 164;
export const Alpha = 1;
export let Scale = 1;

 
