
        import _Strikebook from './images/Strikebook.png'
let paths = [
        ['SchoolNurseRoom_Strikebook', _Strikebook, 49],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Strikebook_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Strikebook"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 676;
export const Y = 739;
export const Height = 53;
export const Interactive= true
export const Width = 99;
export const Alpha = 1;
export let Scale = 1;

 
