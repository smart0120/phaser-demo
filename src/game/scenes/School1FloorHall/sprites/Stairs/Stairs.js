
        import _Stairs from './images/Stairs.png'
let paths = [
        ['School1FloorHall_Stairs', _Stairs, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Stairs_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Stairs"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1780;
export const Y = 610;
export const Height = 152;
export const Interactive= true
export const Width = 140;
export const Alpha = 1;
export let Scale = 1;

 
