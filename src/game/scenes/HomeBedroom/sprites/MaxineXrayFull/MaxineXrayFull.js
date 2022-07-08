
        import _MaxineXrayFull from './images/MaxineXrayFull.png'
let paths = [
        ['HomeBedroom_MaxineXrayFull', _MaxineXrayFull, 14],
      
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
export const X = 528;
export const Y = 697;
export const Height = 126;
export const Interactive= true
export const Width = 160;
export const Alpha = 1;
export let Scale = 1;

 
