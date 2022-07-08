
        import _Locker from './images/Locker.png'
let paths = [
        ['SchoolLocker_Locker', _Locker, 1],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Locker_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Locker"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = -140;
export const Y = 0;
export const Height = 1085;
export const Interactive= true
export const Width = 2128;
export const Alpha = 1;
export let Scale = 1;

 
