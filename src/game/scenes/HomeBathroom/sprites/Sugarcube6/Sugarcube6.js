
        import _Sugarcube6 from './images/Sugarcube6.png'
let paths = [
        ['HomeBathroom_Sugarcube6', _Sugarcube6, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sugarcube6_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sugarcube6"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1315;
export const Y = 425;
export const Height = 22;
export const Interactive= true
export const Width = 22;
export const Alpha = 1;
export let Scale = 1;

 
