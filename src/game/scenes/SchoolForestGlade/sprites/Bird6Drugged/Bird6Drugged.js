
        import _Bird6Drugged from './images/Bird6Drugged.png'
let paths = [
        ['SchoolForestGlade_Bird6Drugged', _Bird6Drugged, 54],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird6Drugged_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird6Drugged"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 802;
export const Y = 746;
export const Height = 51;
export const Interactive= true
export const Width = 75;
export const Alpha = 1;
export let Scale = 1;

 
