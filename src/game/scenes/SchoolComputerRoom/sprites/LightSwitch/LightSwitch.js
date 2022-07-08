
        import _LightSwitch from './images/LightSwitch.png'
let paths = [
        ['SchoolComputerRoom_LightSwitch', _LightSwitch, 11],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LightSwitch_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LightSwitch"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1576;
export const Y = 481;
export const Height = 59;
export const Interactive= true
export const Width = 35;
export const Alpha = 1;
export let Scale = 1;

 
