
        import _SunPaintingHiddenStash from './images/SunPaintingHiddenStash.png'
let paths = [
        ['SchoolAdminWing_SunPaintingHiddenStash', _SunPaintingHiddenStash, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SunPaintingHiddenStash_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SunPaintingHiddenStash"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 842;
export const Y = 259;
export const Height = 83;
export const Interactive= true
export const Width = 70;
export const Alpha = 1;
export let Scale = 1;

 
