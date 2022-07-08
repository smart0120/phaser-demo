
        import _Sugarcube1 from './images/Sugarcube1.png'
let paths = [
        ['HomeHall_Sugarcube1', _Sugarcube1, 37],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sugarcube1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sugarcube1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1456;
export const Y = 773;
export const Height = 19;
export const Interactive= true
export const Width = 23;
export const Alpha = 1;
export let Scale = 1;

 
