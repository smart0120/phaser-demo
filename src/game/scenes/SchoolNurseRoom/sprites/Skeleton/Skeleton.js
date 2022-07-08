
        import _Skeleton from './images/Skeleton.png'
let paths = [
        ['SchoolNurseRoom_Skeleton', _Skeleton, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Skeleton_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Skeleton"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 830;
export const Y = 276;
export const Height = 462;
export const Interactive= true
export const Width = 153;
export const Alpha = 1;
export let Scale = 1;

 
