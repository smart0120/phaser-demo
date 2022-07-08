
        import _WaterPuddle6 from './images/WaterPuddle6.png'
let paths = [
        ['School1FloorHall_WaterPuddle6', _WaterPuddle6, 50],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WaterPuddle6_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WaterPuddle6"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 145;
export const Y = 914;
export const Height = 36;
export const Interactive= true
export const Width = 58;
export const Alpha = 1;
export let Scale = 1;

 
