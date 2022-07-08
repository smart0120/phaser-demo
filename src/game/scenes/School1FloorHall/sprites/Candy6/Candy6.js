
        import _Candy6 from './images/Candy6.png'
let paths = [
        ['School1FloorHall_Candy6', _Candy6, 41],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy6_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy6"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1099;
export const Y = 861;
export const Height = 28;
export const Interactive= true
export const Width = 45;
export const Alpha = 1;
export let Scale = 1;

 
