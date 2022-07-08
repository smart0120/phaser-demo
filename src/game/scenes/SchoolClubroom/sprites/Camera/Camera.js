
        import _Camera from './images/Camera.png'
let paths = [
        ['SchoolClubroom_Camera', _Camera, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Camera_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Camera"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 900;
export const Y = 663;
export const Height = 73;
export const Interactive= true
export const Width = 95;
export const Alpha = 1;
export let Scale = 1;

 
