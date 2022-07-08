
        import _StallDoors from './images/StallDoors.png'
let paths = [
        ['SchoolBathroom_StallDoors', _StallDoors, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./StallDoors_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "StallDoors"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 351;
export const Y = 98;
export const Height = 821;
export const Interactive= true
export const Width = 203;
export const Alpha = 1;
export let Scale = 1;

 
