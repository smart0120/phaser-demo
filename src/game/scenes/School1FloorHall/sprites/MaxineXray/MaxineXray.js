
        import _MaxineXray from './images/MaxineXray.png'
let paths = [
        ['School1FloorHall_MaxineXray', _MaxineXray, 59],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MaxineXray_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MaxineXray"
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

 
