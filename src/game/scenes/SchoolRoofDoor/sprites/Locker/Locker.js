
        import _Locker from './images/Locker.png'
let paths = [
        ['SchoolRoofDoor_Locker', _Locker, 8],
      
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
export const X = 1308;
export const Y = 816;
export const Height = 264;
export const Interactive= true
export const Width = 448;
export const Alpha = 1;
export let Scale = 1;

 
