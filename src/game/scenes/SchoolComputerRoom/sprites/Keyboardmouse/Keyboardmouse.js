
        import _Keyboardmouse from './images/Keyboardmouse.png'
let paths = [
        ['SchoolComputerRoom_Keyboardmouse', _Keyboardmouse, 46],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Keyboardmouse_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Keyboardmouse"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 332;
export const Y = 673;
export const Height = 122;
export const Interactive= true
export const Width = 851;
export const Alpha = 1;
export let Scale = 1;

 
