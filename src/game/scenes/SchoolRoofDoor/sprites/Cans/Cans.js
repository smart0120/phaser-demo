
        import _Cans from './images/Cans.png'
let paths = [
        ['SchoolRoofDoor_Cans', _Cans, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Cans_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Cans"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1378;
export const Y = 712;
export const Height = 270;
export const Interactive= true
export const Width = 186;
export const Alpha = 1;
export let Scale = 1;

 
