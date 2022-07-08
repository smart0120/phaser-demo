
        import _ArrowDown from './images/ArrowDown.png'
let paths = [
        ['SchoolGroundFloor_ArrowDown', _ArrowDown, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ArrowDown_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ArrowDown"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 933;
export const Y = 986;
export const Height = 47;
export const Interactive= true
export const Width = 48;
export const Alpha = 1;
export let Scale = 1;

 
