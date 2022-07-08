
        import _Desk2 from './images/Desk2.png'
let paths = [
        ['SchoolEnglishClassroom_Desk2', _Desk2, 26],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Desk2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Desk2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 778;
export const Y = 631;
export const Height = 416;
export const Interactive= true
export const Width = 293;
export const Alpha = 1;
export let Scale = 1;

 
