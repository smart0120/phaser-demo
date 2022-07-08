
        import _GuardXrayFull from './images/GuardXrayFull.png'
let paths = [
        ['SchoolCafeteria_GuardXrayFull', _GuardXrayFull, 56],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./GuardXrayFull_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "GuardXrayFull"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 511;
export const Y = 334;
export const Height = 300;
export const Interactive= true
export const Width = 140;
export const Alpha = 1;
export let Scale = 1;

 
