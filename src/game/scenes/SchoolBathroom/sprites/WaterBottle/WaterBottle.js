
        import _WaterBottle from './images/WaterBottle.png'
let paths = [
        ['SchoolBathroom_WaterBottle', _WaterBottle, 28],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WaterBottle_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WaterBottle"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 772;
export const Y = 805;
export const Height = 100;
export const Interactive= true
export const Width = 37;
export const Alpha = 1;
export let Scale = 1;

 
