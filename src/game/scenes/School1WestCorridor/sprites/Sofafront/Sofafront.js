
        import _Sofafront from './images/Sofafront.png'
let paths = [
        ['School1WestCorridor_Sofafront', _Sofafront, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sofafront_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sofafront"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1376;
export const Y = 541;
export const Height = 341;
export const Interactive= true
export const Width = 308;
export const Alpha = 1;
export let Scale = 1;

 
