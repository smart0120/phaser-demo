
        import _Bird1Roof from './images/Bird1Roof.png'
let paths = [
        ['SchoolForestGlade_Bird1Roof', _Bird1Roof, 70],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird1Roof_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird1Roof"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 582;
export const Y = 361;
export const Height = 43;
export const Interactive= true
export const Width = 32;
export const Alpha = 1;
export let Scale = 1;

 
