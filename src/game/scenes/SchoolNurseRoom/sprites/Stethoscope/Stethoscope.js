
        import _Stethoscope from './images/Stethoscope.png'
let paths = [
        ['SchoolNurseRoom_Stethoscope', _Stethoscope, 30],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Stethoscope_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Stethoscope"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 283;
export const Y = 717;
export const Height = 69;
export const Interactive= true
export const Width = 172;
export const Alpha = 1;
export let Scale = 1;

 
