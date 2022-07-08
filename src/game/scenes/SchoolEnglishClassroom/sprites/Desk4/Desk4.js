
        import _Desk4 from './images/Desk4.png'
let paths = [
        ['SchoolEnglishClassroom_Desk4', _Desk4, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Desk4_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Desk4"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1314;
export const Y = 565;
export const Height = 293;
export const Interactive= true
export const Width = 311;
export const Alpha = 1;
export let Scale = 1;

 
