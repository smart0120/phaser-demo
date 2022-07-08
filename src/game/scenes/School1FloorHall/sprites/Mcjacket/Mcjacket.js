
        import _Mcjacket from './images/Mcjacket.png'
let paths = [
        ['School1FloorHall_Mcjacket', _Mcjacket, 15],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Mcjacket_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Mcjacket"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 15;
export const Y = 552;
export const Height = 43;
export const Interactive= true
export const Width = 87;
export const Alpha = 1;
export let Scale = 1;

 
