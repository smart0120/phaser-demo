
        import _MrslXrayFull from './images/MrslXrayFull.png'
let paths = [
        ['SchoolHomeroom_MrslXrayFull', _MrslXrayFull, 30],
      
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
export const X = 889;
export const Y = 474;
export const Height = 158;
export const Interactive= true
export const Width = 154;
export const Alpha = 1;
export let Scale = 1;

 
