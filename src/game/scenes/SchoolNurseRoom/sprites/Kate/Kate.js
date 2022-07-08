
        import _Kate from './images/Kate.png'
let paths = [
        ['SchoolNurseRoom_Kate', _Kate, 48],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Kate_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Kate"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1232;
export const Y = 381;
export const Height = 372;
export const Interactive= true
export const Width = 181;
export const Alpha = 1;
export let Scale = 1;

 
