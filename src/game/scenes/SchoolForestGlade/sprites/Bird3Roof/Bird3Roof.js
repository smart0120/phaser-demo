
        import _Bird3Roof from './images/Bird3Roof.png'
let paths = [
        ['SchoolForestGlade_Bird3Roof', _Bird3Roof, 62],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird3Roof_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird3Roof"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 549;
export const Y = 419;
export const Height = 40;
export const Interactive= true
export const Width = 34;
export const Alpha = 1;
export let Scale = 1;

 
