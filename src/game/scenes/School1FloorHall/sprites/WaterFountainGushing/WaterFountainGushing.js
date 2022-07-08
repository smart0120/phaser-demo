
        import _WaterFountainGushing from './images/WaterFountainGushing.png'
let paths = [
        ['School1FloorHall_WaterFountainGushing', _WaterFountainGushing, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WaterFountainGushing_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WaterFountainGushing"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 482;
export const Height = 233;
export const Interactive= true
export const Width = 119;
export const Alpha = 1;
export let Scale = 1;

 
