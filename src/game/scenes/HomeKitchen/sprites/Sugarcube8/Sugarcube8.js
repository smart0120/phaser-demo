
        import _Sugarcube8 from './images/Sugarcube8.png'
let paths = [
        ['HomeKitchen_Sugarcube8', _Sugarcube8, 70],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sugarcube8_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sugarcube8"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1271;
export const Y = 614;
export const Height = 19;
export const Interactive= true
export const Width = 19;
export const Alpha = 1;
export let Scale = 1;

 
