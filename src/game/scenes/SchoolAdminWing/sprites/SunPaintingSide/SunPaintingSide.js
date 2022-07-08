
        import _SunPaintingSide from './images/SunPaintingSide.png'
let paths = [
        ['SchoolAdminWing_SunPaintingSide', _SunPaintingSide, 15],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SunPaintingSide_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SunPaintingSide"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 771;
export const Y = 220;
export const Height = 141;
export const Interactive= true
export const Width = 130;
export const Alpha = 1;
export let Scale = 1;

 
