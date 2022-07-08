
        import _Butt from './images/Butt.png'
let paths = [
        ['SchoolNurseRoom_Butt', _Butt, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Butt_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Butt"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1258;
export const Y = 248;
export const Height = 161;
export const Interactive= true
export const Width = 141;
export const Alpha = 1;
export let Scale = 1;

 
