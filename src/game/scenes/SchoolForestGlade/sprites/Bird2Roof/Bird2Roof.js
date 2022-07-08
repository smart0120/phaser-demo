
        import _Bird2Roof from './images/Bird2Roof.png'
let paths = [
        ['SchoolForestGlade_Bird2Roof', _Bird2Roof, 66],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird2Roof_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird2Roof"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 548;
export const Y = 395;
export const Height = 25;
export const Interactive= true
export const Width = 28;
export const Alpha = 1;
export let Scale = 1;

 
