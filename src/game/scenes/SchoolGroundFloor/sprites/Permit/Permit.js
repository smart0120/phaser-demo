
        import _Permit from './images/Permit.png'
let paths = [
        ['SchoolGroundFloor_Permit', _Permit, 33],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Permit_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Permit"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 418;
export const Y = 608;
export const Height = 24;
export const Interactive= true
export const Width = 20;
export const Alpha = 1;
export let Scale = 1;

 
