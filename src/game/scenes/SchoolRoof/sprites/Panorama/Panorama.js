
        import _Panorama from './images/Panorama.png'
let paths = [
        ['SchoolRoof_Panorama', _Panorama, 1],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Panorama_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Panorama"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = -603;
export const Y = -5;
export const Height = 1085;
export const Interactive= true
export const Width = 2523;
export const Alpha = 1;
export let Scale = 1;

 
