
        import _Locker2 from './images/Locker2.png'
let paths = [
        ['SchoolBathroom_Locker2', _Locker2, 22],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Locker2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Locker2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 754;
export const Y = 279;
export const Height = 416;
export const Interactive= true
export const Width = 120;
export const Alpha = 1;
export let Scale = 1;

 
