
        import _Stickynote from './images/Stickynote.png'
let paths = [
        ['SchoolAdminWing_Stickynote', _Stickynote, 31],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Stickynote_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Stickynote"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1358;
export const Y = 483;
export const Height = 34;
export const Interactive= true
export const Width = 41;
export const Alpha = 1;
export let Scale = 1;

 
