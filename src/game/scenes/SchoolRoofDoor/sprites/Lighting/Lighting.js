
        import _Lighting from './images/Lighting.png'
let paths = [
        ['SchoolRoofDoor_Lighting', _Lighting, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lighting_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lighting"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 0;
export const Height = 454;
export const Interactive= true
export const Width = 1920;
export const Alpha = 0.4392157;
export let Scale = 1;

 
