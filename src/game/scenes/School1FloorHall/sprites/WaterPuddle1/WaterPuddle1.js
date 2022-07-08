
        import _WaterPuddle1 from './images/WaterPuddle1.png'
let paths = [
        ['School1FloorHall_WaterPuddle1', _WaterPuddle1, 55],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WaterPuddle1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WaterPuddle1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 21;
export const Y = 727;
export const Height = 31;
export const Interactive= true
export const Width = 102;
export const Alpha = 1;
export let Scale = 1;

 
