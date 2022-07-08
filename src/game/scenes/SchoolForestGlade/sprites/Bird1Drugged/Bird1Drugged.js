
        import _Bird1Drugged from './images/Bird1Drugged.png'
let paths = [
        ['SchoolForestGlade_Bird1Drugged', _Bird1Drugged, 68],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird1Drugged_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird1Drugged"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1011;
export const Y = 584;
export const Height = 47;
export const Interactive= true
export const Width = 34;
export const Alpha = 1;
export let Scale = 1;

 
