
        import _BoobsLeft from './images/BoobsLeft.png'
let paths = [
        ['SchoolNurseRoom_BoobsLeft', _BoobsLeft, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BoobsLeft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BoobsLeft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 414;
export const Y = 262;
export const Height = 179;
export const Interactive= true
export const Width = 135;
export const Alpha = 1;
export let Scale = 1;

 
