
        import _WalkLeft from './images/WalkLeft.png'
let paths = [
        ['School1FloorHall_WalkLeft', _WalkLeft, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WalkLeft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WalkLeft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 657;
export const Height = 195;
export const Interactive= true
export const Width = 282;
export const Alpha = 1;
export let Scale = 1;

 
