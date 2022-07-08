
        import _LookbackXrayFull from './images/LookbackXrayFull.png'
let paths = [
        ['SchoolGroundFloor_LookbackXrayFull', _LookbackXrayFull, 39],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LookbackXrayFull_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LookbackXrayFull"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 413;
export const Y = 552;
export const Height = 142;
export const Interactive= true
export const Width = 43;
export const Alpha = 1;
export let Scale = 1;

 
