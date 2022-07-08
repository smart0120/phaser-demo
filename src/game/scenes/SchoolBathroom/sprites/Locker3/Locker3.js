
        import _Locker3 from './images/Locker3.png'
let paths = [
        ['SchoolBathroom_Locker3', _Locker3, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Locker3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Locker3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 876;
export const Y = 279;
export const Height = 416;
export const Interactive= true
export const Width = 104;
export const Alpha = 1;
export let Scale = 1;

 
