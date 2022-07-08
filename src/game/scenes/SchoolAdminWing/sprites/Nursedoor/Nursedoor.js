
        import _Nursedoor from './images/Nursedoor.png'
let paths = [
        ['SchoolAdminWing_Nursedoor', _Nursedoor, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Nursedoor_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Nursedoor"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 0;
export const Height = 1025;
export const Interactive= true
export const Width = 229;
export const Alpha = 1;
export let Scale = 1;

 
