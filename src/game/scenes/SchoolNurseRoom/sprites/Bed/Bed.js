
        import _Bed from './images/Bed.png'
let paths = [
        ['SchoolNurseRoom_Bed', _Bed, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bed_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bed"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1097;
export const Y = 447;
export const Height = 353;
export const Interactive= true
export const Width = 610;
export const Alpha = 1;
export let Scale = 1;

 
