
        import _LockerDoor from './images/LockerDoor.png'
let paths = [
        ['School1EastCorridor_LockerDoor', _LockerDoor, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LockerDoor_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LockerDoor"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1722;
export const Y = 105;
export const Height = 937;
export const Interactive= true
export const Width = 198;
export const Alpha = 1;
export let Scale = 1;

 
