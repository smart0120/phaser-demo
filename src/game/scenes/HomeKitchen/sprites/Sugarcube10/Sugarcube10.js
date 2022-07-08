
        import _Sugarcube10 from './images/Sugarcube10.png'
let paths = [
        ['HomeKitchen_Sugarcube10', _Sugarcube10, 72],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sugarcube10_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sugarcube10"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1807;
export const Y = 907;
export const Height = 16;
export const Interactive= true
export const Width = 18;
export const Alpha = 1;
export let Scale = 1;

 
