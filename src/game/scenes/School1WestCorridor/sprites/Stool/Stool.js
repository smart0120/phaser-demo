
        import _Stool from './images/Stool.png'
let paths = [
        ['School1WestCorridor_Stool', _Stool, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Stool_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Stool"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1106;
export const Y = 495;
export const Height = 81;
export const Interactive= true
export const Width = 64;
export const Alpha = 1;
export let Scale = 1;

 
