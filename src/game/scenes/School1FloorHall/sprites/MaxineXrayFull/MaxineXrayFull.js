
        import _MaxineXrayFull from './images/MaxineXrayFull.png'
let paths = [
        ['School1FloorHall_MaxineXrayFull', _MaxineXrayFull, 58],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MaxineXrayFull_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MaxineXrayFull"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1498;
export const Y = 711;
export const Height = 302;
export const Interactive= true
export const Width = 272;
export const Alpha = 1;
export let Scale = 1;

 
