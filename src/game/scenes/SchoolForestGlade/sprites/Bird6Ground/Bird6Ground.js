
        import _Bird6Ground from './images/Bird6Ground.png'
let paths = [
        ['SchoolForestGlade_Bird6Ground', _Bird6Ground, 52],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird6Ground_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird6Ground"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 562;
export const Y = 678;
export const Height = 42;
export const Interactive= true
export const Width = 69;
export const Alpha = 1;
export let Scale = 1;

 
