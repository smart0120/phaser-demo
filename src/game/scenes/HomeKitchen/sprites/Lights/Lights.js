
        import _Lights from './images/Lights.png'
let paths = [
        ['HomeKitchen_Lights', _Lights, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lights_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lights"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 805;
export const Y = 93;
export const Height = 292;
export const Interactive= true
export const Width = 352;
export const Alpha = 1;
export let Scale = 1;

 
