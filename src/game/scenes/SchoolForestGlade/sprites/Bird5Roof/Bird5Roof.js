
        import _Bird5Roof from './images/Bird5Roof.png'
let paths = [
        ['SchoolForestGlade_Bird5Roof', _Bird5Roof, 55],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird5Roof_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird5Roof"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 673;
export const Y = 392;
export const Height = 26;
export const Interactive= true
export const Width = 23;
export const Alpha = 1;
export let Scale = 1;

 
