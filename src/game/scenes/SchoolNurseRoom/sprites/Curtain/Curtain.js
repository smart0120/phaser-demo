
        import _Curtain from './images/Curtain.png'
let paths = [
        ['SchoolNurseRoom_Curtain', _Curtain, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Curtain_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Curtain"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 31;
export const Y = 69;
export const Height = 779;
export const Interactive= true
export const Width = 368;
export const Alpha = 1;
export let Scale = 1;

 
