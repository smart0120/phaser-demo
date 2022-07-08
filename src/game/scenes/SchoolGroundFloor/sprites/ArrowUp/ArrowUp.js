
        import _ArrowUp from './images/ArrowUp.png'
let paths = [
        ['SchoolGroundFloor_ArrowUp', _ArrowUp, 18],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ArrowUp_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ArrowUp"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 416;
export const Y = 485;
export const Height = 273;
export const Interactive= true
export const Width = 160;
export const Alpha = 1;
export let Scale = 1;

 
