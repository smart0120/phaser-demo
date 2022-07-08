
        import _Closecat from './images/Closecat.png'
let paths = [
        ['School1WestCorridor_Closecat', _Closecat, 55],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Closecat_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Closecat"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1303;
export const Y = 792;
export const Height = 256;
export const Interactive= true
export const Width = 135;
export const Alpha = 1;
export let Scale = 1;

 
