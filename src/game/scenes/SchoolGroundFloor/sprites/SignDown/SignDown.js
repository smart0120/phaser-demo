
        import _SignDown from './images/SignDown.png'
let paths = [
        ['SchoolGroundFloor_SignDown', _SignDown, 37],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SignDown_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SignDown"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 412;
export const Y = 730;
export const Height = 68;
export const Interactive= true
export const Width = 174;
export const Alpha = 1;
export let Scale = 1;

 
