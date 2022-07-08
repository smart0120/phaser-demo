
        import _Mrslpainting from './images/Mrslpainting.png'
let paths = [
        ['School1WestCorridor_Mrslpainting', _Mrslpainting, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Mrslpainting_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Mrslpainting"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 209;
export const Y = 371;
export const Height = 144;
export const Interactive= true
export const Width = 176;
export const Alpha = 1;
export let Scale = 1;

 
