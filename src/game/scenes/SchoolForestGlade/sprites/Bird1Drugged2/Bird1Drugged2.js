
        import _Bird1Drugged2 from './images/Bird1Drugged2.png'
let paths = [
        ['SchoolForestGlade_Bird1Drugged2', _Bird1Drugged2, 69],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird1Drugged2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird1Drugged2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 990;
export const Y = 653;
export const Height = 42;
export const Interactive= true
export const Width = 38;
export const Alpha = 1;
export let Scale = 1;

 
