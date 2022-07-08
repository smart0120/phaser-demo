
        import _WaterPuddle3 from './images/WaterPuddle3.png'
let paths = [
        ['School1FloorHall_WaterPuddle3', _WaterPuddle3, 53],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WaterPuddle3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WaterPuddle3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 203;
export const Y = 695;
export const Height = 49;
export const Interactive= true
export const Width = 40;
export const Alpha = 1;
export let Scale = 1;

 
