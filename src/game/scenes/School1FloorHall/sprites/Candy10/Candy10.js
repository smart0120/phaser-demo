
        import _Candy10 from './images/Candy10.png'
let paths = [
        ['School1FloorHall_Candy10', _Candy10, 37],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy10_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy10"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1325;
export const Y = 1031;
export const Height = 28;
export const Interactive= true
export const Width = 46;
export const Alpha = 1;
export let Scale = 1;

 
