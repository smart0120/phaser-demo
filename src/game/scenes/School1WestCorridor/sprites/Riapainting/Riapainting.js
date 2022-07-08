
        import _Riapainting from './images/Riapainting.png'
let paths = [
        ['School1WestCorridor_Riapainting', _Riapainting, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Riapainting_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Riapainting"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 234;
export const Y = 134;
export const Height = 209;
export const Interactive= true
export const Width = 121;
export const Alpha = 1;
export let Scale = 1;

 
