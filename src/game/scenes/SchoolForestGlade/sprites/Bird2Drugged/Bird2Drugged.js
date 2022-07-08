
        import _Bird2Drugged from './images/Bird2Drugged.png'
let paths = [
        ['SchoolForestGlade_Bird2Drugged', _Bird2Drugged, 65],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird2Drugged_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird2Drugged"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1182;
export const Y = 689;
export const Height = 64;
export const Interactive= true
export const Width = 71;
export const Alpha = 1;
export let Scale = 1;

 
