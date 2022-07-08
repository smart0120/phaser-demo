
        import _Bird4Drugged from './images/Bird4Drugged.png'
let paths = [
        ['SchoolForestGlade_Bird4Drugged', _Bird4Drugged, 59],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird4Drugged_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird4Drugged"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 999;
export const Y = 623;
export const Height = 99;
export const Interactive= true
export const Width = 56;
export const Alpha = 1;
export let Scale = 1;

 
