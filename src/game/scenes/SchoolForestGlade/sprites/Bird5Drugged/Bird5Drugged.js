
        import _Bird5Drugged from './images/Bird5Drugged.png'
let paths = [
        ['SchoolForestGlade_Bird5Drugged', _Bird5Drugged, 56],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird5Drugged_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird5Drugged"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 741;
export const Y = 626;
export const Height = 43;
export const Interactive= true
export const Width = 53;
export const Alpha = 1;
export let Scale = 1;

 
