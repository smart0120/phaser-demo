
        import _WaterFountainHoodie from './images/WaterFountainHoodie.png'
let paths = [
        ['School1FloorHall_WaterFountainHoodie', _WaterFountainHoodie, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WaterFountainHoodie_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WaterFountainHoodie"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 542;
export const Height = 173;
export const Interactive= true
export const Width = 119;
export const Alpha = 1;
export let Scale = 1;

 
