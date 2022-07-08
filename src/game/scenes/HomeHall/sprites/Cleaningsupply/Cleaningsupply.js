
        import _Cleaningsupply from './images/Cleaningsupply.png'
let paths = [
        ['HomeHall_Cleaningsupply', _Cleaningsupply, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Cleaningsupply_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Cleaningsupply"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1265;
export const Y = 352;
export const Height = 224;
export const Interactive= true
export const Width = 82;
export const Alpha = 1;
export let Scale = 1;

 
