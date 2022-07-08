
        import _BigSprouts from './images/BigSprouts.png'
let paths = [
        ['SchoolForestGlade_BigSprouts', _BigSprouts, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BigSprouts_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BigSprouts"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 820;
export const Y = 621;
export const Height = 83;
export const Interactive= true
export const Width = 363;
export const Alpha = 1;
export let Scale = 1;

 
