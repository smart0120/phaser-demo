
        import _Easel3Sketch from './images/Easel3Sketch.png'
let paths = [
        ['SchoolArtClass_Easel3Sketch', _Easel3Sketch, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Easel3Sketch_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Easel3Sketch"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 841;
export const Y = 423;
export const Height = 279;
export const Interactive= true
export const Width = 147;
export const Alpha = 1;
export let Scale = 1;

 
