
        import _MaxineXray0 from './images/MaxineXray0.png'
let paths = [
        ['SchoolComputerRoom_MaxineXray0', _MaxineXray0, 32],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MaxineXray0_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MaxineXray0"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1171;
export const Y = 395;
export const Height = 373;
export const Interactive= true
export const Width = 151;
export const Alpha = 1;
export let Scale = 1;

 