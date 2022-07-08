
        import _Carpet from './images/Carpet.png'
let paths = [
        ['HomeBedroom_Carpet', _Carpet, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Carpet_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Carpet"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 255;
export const Y = 742;
export const Height = 206;
export const Interactive= true
export const Width = 831;
export const Alpha = 1;
export let Scale = 1;

 
