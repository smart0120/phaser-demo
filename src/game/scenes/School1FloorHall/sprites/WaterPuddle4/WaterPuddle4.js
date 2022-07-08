
        import _WaterPuddle4 from './images/WaterPuddle4.png'
let paths = [
        ['School1FloorHall_WaterPuddle4', _WaterPuddle4, 52],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WaterPuddle4_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WaterPuddle4"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 138;
export const Y = 792;
export const Height = 18;
export const Interactive= true
export const Width = 40;
export const Alpha = 1;
export let Scale = 1;

 
