
        import _Cup from './images/Cup.png'
let paths = [
        ['SchoolNurseRoom_Cup', _Cup, 32],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Cup_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Cup"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 517;
export const Y = 616;
export const Height = 113;
export const Interactive= true
export const Width = 93;
export const Alpha = 1;
export let Scale = 1;

 
