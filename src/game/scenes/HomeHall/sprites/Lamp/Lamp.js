
        import _Lamp from './images/Lamp.png'
let paths = [
        ['HomeHall_Lamp', _Lamp, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lamp_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lamp"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1374;
export const Y = 448;
export const Height = 324;
export const Interactive= true
export const Width = 148;
export const Alpha = 1;
export let Scale = 1;

 
