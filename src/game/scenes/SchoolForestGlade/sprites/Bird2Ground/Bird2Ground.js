
        import _Bird2Ground from './images/Bird2Ground.png'
let paths = [
        ['SchoolForestGlade_Bird2Ground', _Bird2Ground, 67],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird2Ground_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird2Ground"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1114;
export const Y = 632;
export const Height = 31;
export const Interactive= true
export const Width = 31;
export const Alpha = 1;
export let Scale = 1;

 
