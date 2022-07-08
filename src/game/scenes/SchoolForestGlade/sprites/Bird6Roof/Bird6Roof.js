
        import _Bird6Roof from './images/Bird6Roof.png'
let paths = [
        ['SchoolForestGlade_Bird6Roof', _Bird6Roof, 53],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird6Roof_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird6Roof"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 690;
export const Y = 417;
export const Height = 23;
export const Interactive= true
export const Width = 50;
export const Alpha = 1;
export let Scale = 1;

 
