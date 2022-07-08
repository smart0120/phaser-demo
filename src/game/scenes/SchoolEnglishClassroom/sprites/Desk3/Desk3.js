
        import _Desk3 from './images/Desk3.png'
let paths = [
        ['SchoolEnglishClassroom_Desk3', _Desk3, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Desk3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Desk3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1078;
export const Y = 594;
export const Height = 357;
export const Interactive= true
export const Width = 294;
export const Alpha = 1;
export let Scale = 1;

 
