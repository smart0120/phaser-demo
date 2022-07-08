
        import _SunPainting from './images/SunPainting.png'
let paths = [
        ['SchoolAdminWing_SunPainting', _SunPainting, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SunPainting_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SunPainting"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 833;
export const Y = 243;
export const Height = 116;
export const Interactive= true
export const Width = 88;
export const Alpha = 1;
export let Scale = 1;

 
