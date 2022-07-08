
        import _Sugarcube2 from './images/Sugarcube2.png'
let paths = [
        ['HomeHall_Sugarcube2', _Sugarcube2, 38],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sugarcube2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sugarcube2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 734;
export const Y = 113;
export const Height = 14;
export const Interactive= true
export const Width = 20;
export const Alpha = 1;
export let Scale = 1;

 
