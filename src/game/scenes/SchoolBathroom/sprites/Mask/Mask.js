
        import _Mask from './images/Mask.png'
let paths = [
        ['SchoolBathroom_Mask', _Mask, 15],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Mask_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Mask"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 368;
export const Y = 528;
export const Height = 88;
export const Interactive= true
export const Width = 60;
export const Alpha = 1;
export let Scale = 1;

 
