
        import _RoofStairsLeft from './images/RoofStairsLeft.png'
let paths = [
        ['SchoolGroundFloor_RoofStairsLeft', _RoofStairsLeft, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./RoofStairsLeft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "RoofStairsLeft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 558;
export const Y = 175;
export const Height = 198;
export const Interactive= true
export const Width = 154;
export const Alpha = 1;
export let Scale = 1;

 
