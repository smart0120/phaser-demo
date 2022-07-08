
        import _BigBrush from './images/BigBrush.png'
let paths = [
        ['SchoolArtClass_BigBrush', _BigBrush, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BigBrush_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BigBrush"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1729;
export const Y = 734;
export const Height = 68;
export const Interactive= true
export const Width = 101;
export const Alpha = 1;
export let Scale = 1;

 
