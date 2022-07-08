
        import _MaxineXrayFull from './images/MaxineXrayFull.png'
let paths = [
        ['SchoolGroundFloor_MaxineXrayFull', _MaxineXrayFull, 50],
      
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
export const X = 839;
export const Y = 655;
export const Height = 320;
export const Interactive= true
export const Width = 215;
export const Alpha = 1;
export let Scale = 1;

 
