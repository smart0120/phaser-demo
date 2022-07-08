
        import _Brush from './images/Brush.png'
let paths = [
        ['SchoolArtClass_Brush', _Brush, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Brush_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Brush"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1721;
export const Y = 801;
export const Height = 84;
export const Interactive= true
export const Width = 61;
export const Alpha = 1;
export let Scale = 1;

 
