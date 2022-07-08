
        import _IsabelleXrayFull from './images/IsabelleXrayFull.png'
let paths = [
        ['School1FloorHall_IsabelleXrayFull', _IsabelleXrayFull, 33],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./IsabelleXrayFull_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "IsabelleXrayFull"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1195;
export const Y = 458;
export const Height = 498;
export const Interactive= true
export const Width = 186;
export const Alpha = 1;
export let Scale = 1;

 
