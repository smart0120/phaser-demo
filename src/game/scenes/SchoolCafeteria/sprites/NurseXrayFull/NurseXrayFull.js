
        import _NurseXrayFull from './images/NurseXrayFull.png'
let paths = [
        ['SchoolCafeteria_NurseXrayFull', _NurseXrayFull, 59],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./NurseXrayFull_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "NurseXrayFull"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 473;
export const Y = 348;
export const Height = 309;
export const Interactive= true
export const Width = 95;
export const Alpha = 1;
export let Scale = 1;

 
