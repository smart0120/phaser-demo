
        import _Chairs from './images/Chairs.png'
let paths = [
        ['SchoolMusicClass_Chairs', _Chairs, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Chairs_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Chairs"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 519;
export const Height = 561;
export const Interactive= true
export const Width = 1920;
export const Alpha = 1;
export let Scale = 1;

 
