
        import _StickynoteLifted from './images/StickynoteLifted.png'
let paths = [
        ['SchoolAdminWing_StickynoteLifted', _StickynoteLifted, 32],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./StickynoteLifted_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "StickynoteLifted"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1382;
export const Y = 438;
export const Height = 44;
export const Interactive= true
export const Width = 47;
export const Alpha = 1;
export let Scale = 1;

 
