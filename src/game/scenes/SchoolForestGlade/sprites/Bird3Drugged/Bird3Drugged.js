
        import _Bird3Drugged from './images/Bird3Drugged.png'
let paths = [
        ['SchoolForestGlade_Bird3Drugged', _Bird3Drugged, 64],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird3Drugged_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird3Drugged"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 842;
export const Y = 548;
export const Height = 32;
export const Interactive= true
export const Width = 37;
export const Alpha = 1;
export let Scale = 1;

 
