
        import _Mop from './images/Mop.png'
let paths = [
        ['School1FloorHall_Mop', _Mop, 49],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Mop_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Mop"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 468;
export const Y = 478;
export const Height = 416;
export const Interactive= true
export const Width = 102;
export const Alpha = 1;
export let Scale = 1;

 
