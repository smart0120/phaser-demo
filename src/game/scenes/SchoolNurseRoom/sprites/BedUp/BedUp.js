
        import _BedUp from './images/BedUp.png'
let paths = [
        ['SchoolNurseRoom_BedUp', _BedUp, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BedUp_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BedUp"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1038;
export const Y = 165;
export const Height = 735;
export const Interactive= true
export const Width = 671;
export const Alpha = 1;
export let Scale = 1;

 
