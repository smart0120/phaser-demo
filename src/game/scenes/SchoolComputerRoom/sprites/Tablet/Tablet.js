
        import _Tablet from './images/Tablet.png'
let paths = [
        ['SchoolComputerRoom_Tablet', _Tablet, 28],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Tablet_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Tablet"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1440;
export const Y = 506;
export const Height = 99;
export const Interactive= true
export const Width = 124;
export const Alpha = 1;
export let Scale = 1;

 
