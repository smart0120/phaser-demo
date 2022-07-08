
        import _BoobsRight from './images/BoobsRight.png'
let paths = [
        ['SchoolNurseRoom_BoobsRight', _BoobsRight, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BoobsRight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BoobsRight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1414;
export const Y = 287;
export const Height = 145;
export const Interactive= true
export const Width = 88;
export const Alpha = 1;
export let Scale = 1;

 
