
        import _Sugarcube4 from './images/Sugarcube4.png'
let paths = [
        ['HomeBedroom_Sugarcube4', _Sugarcube4, 38],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sugarcube4_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sugarcube4"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1649;
export const Y = 320;
export const Height = 17;
export const Interactive= true
export const Width = 22;
export const Alpha = 1;
export let Scale = 1;

 
