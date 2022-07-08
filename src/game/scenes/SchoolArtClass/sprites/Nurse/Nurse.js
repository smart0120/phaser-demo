
        import _Nurse from './images/Nurse.png'
let paths = [
        ['SchoolArtClass_Nurse', _Nurse, 31],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Nurse_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Nurse"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 719;
export const Y = 595;
export const Height = 399;
export const Interactive= true
export const Width = 218;
export const Alpha = 1;
export let Scale = 1;

 
