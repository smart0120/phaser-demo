
        import _Bonsai from './images/Bonsai.png'
let paths = [
        ['SchoolNurseRoom_Bonsai', _Bonsai, 34],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bonsai_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bonsai"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 623;
export const Y = 559;
export const Height = 130;
export const Interactive= true
export const Width = 229;
export const Alpha = 1;
export let Scale = 1;

 
