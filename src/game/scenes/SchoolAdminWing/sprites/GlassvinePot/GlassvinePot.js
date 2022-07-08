
        import _GlassvinePot from './images/GlassvinePot.png'
let paths = [
        ['SchoolAdminWing_GlassvinePot', _GlassvinePot, 23],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./GlassvinePot_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "GlassvinePot"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1269;
export const Y = 431;
export const Height = 147;
export const Interactive= true
export const Width = 124;
export const Alpha = 1;
export let Scale = 1;

 
