
        import _RoofStairsRight from './images/RoofStairsRight.png'
let paths = [
        ['SchoolGroundFloor_RoofStairsRight', _RoofStairsRight, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./RoofStairsRight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "RoofStairsRight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1208;
export const Y = 175;
export const Height = 198;
export const Interactive= true
export const Width = 154;
export const Alpha = 1;
export let Scale = 1;

 
