
        import _Headmasterdoor from './images/Headmasterdoor.png'
let paths = [
        ['SchoolAdminWing_Headmasterdoor', _Headmasterdoor, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Headmasterdoor_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Headmasterdoor"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 498;
export const Y = 115;
export const Height = 572;
export const Interactive= true
export const Width = 129;
export const Alpha = 1;
export let Scale = 1;

 
