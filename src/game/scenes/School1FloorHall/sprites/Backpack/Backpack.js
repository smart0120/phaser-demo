
        import _Backpack from './images/Backpack.png'
let paths = [
        ['School1FloorHall_Backpack', _Backpack, 26],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Backpack_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Backpack"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1350;
export const Y = 789;
export const Height = 107;
export const Interactive= true
export const Width = 121;
export const Alpha = 1;
export let Scale = 1;

 
