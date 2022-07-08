
        import _Sticks from './images/Sticks.png'
let paths = [
        ['SchoolNurseRoom_Sticks', _Sticks, 35],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sticks_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sticks"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 560;
export const Y = 573;
export const Height = 72;
export const Interactive= true
export const Width = 53;
export const Alpha = 1;
export let Scale = 1;

 
