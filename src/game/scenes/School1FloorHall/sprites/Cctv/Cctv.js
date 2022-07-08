
        import _Cctv from './images/Cctv.png'
let paths = [
        ['School1FloorHall_Cctv', _Cctv, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Cctv_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Cctv"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1276;
export const Y = 20;
export const Height = 58;
export const Interactive= true
export const Width = 76;
export const Alpha = 1;
export let Scale = 1;

 
