
        import _Misc from './images/Misc.png'
let paths = [
        ['SchoolNurseRoom_Misc', _Misc, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Misc_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Misc"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 48;
export const Height = 609;
export const Interactive= true
export const Width = 858;
export const Alpha = 1;
export let Scale = 1;

 
