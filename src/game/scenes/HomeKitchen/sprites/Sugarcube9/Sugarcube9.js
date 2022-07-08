
        import _Sugarcube9 from './images/Sugarcube9.png'
let paths = [
        ['HomeKitchen_Sugarcube9', _Sugarcube9, 71],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sugarcube9_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sugarcube9"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 126;
export const Y = 670;
export const Height = 31;
export const Interactive= true
export const Width = 32;
export const Alpha = 1;
export let Scale = 1;

 
