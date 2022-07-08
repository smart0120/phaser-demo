
        import _WaterPuddle5 from './images/WaterPuddle5.png'
let paths = [
        ['School1FloorHall_WaterPuddle5', _WaterPuddle5, 51],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WaterPuddle5_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WaterPuddle5"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 16;
export const Y = 796;
export const Height = 40;
export const Interactive= true
export const Width = 69;
export const Alpha = 1;
export let Scale = 1;

 
