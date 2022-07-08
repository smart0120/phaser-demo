
        import _FaceShield from './images/FaceShield.png'
let paths = [
        ['SchoolBathroom_FaceShield', _FaceShield, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FaceShield_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FaceShield"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1373;
export const Y = 749;
export const Height = 82;
export const Interactive= true
export const Width = 105;
export const Alpha = 1;
export let Scale = 1;

 
