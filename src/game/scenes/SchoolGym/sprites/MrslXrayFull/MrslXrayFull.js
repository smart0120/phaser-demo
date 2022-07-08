
        import _MrslXrayFull from './images/MrslXrayFull.png'
let paths = [
        ['SchoolGym_MrslXrayFull', _MrslXrayFull, 36],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MrslXrayFull_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MrslXrayFull"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 508;
export const Y = 469;
export const Height = 144;
export const Interactive= true
export const Width = 126;
export const Alpha = 1;
export let Scale = 1;

 
