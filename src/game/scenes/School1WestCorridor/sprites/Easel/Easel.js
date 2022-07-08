
        import _Easel from './images/Easel.png'
let paths = [
        ['School1WestCorridor_Easel', _Easel, 15],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Easel_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Easel"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1129;
export const Y = 319;
export const Height = 237;
export const Interactive= true
export const Width = 82;
export const Alpha = 1;
export let Scale = 1;

 
