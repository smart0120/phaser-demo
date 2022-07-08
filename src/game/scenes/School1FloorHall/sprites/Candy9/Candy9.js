
        import _Candy9 from './images/Candy9.png'
let paths = [
        ['School1FloorHall_Candy9', _Candy9, 38],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy9_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy9"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1473;
export const Y = 987;
export const Height = 29;
export const Interactive= true
export const Width = 47;
export const Alpha = 1;
export let Scale = 1;

 
