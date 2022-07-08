
        import _GlassCase from './images/GlassCase.png'
let paths = [
        ['SchoolMusicClass_GlassCase', _GlassCase, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./GlassCase_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "GlassCase"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1703;
export const Y = 578;
export const Height = 328;
export const Interactive= true
export const Width = 210;
export const Alpha = 1;
export let Scale = 1;

 
