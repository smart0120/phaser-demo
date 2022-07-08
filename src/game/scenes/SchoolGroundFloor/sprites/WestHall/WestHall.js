
        import _WestHall from './images/WestHall.png'
let paths = [
        ['SchoolGroundFloor_WestHall', _WestHall, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WestHall_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WestHall"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 450;
export const Y = 484;
export const Height = 222;
export const Interactive= true
export const Width = 128;
export const Alpha = 1;
export let Scale = 1;

 
