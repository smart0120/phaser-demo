
        import _LockerSign from './images/LockerSign.png'
let paths = [
        ['School1EastCorridor_LockerSign', _LockerSign, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LockerSign_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LockerSign"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1762;
export const Y = 0;
export const Height = 93;
export const Interactive= true
export const Width = 146;
export const Alpha = 1;
export let Scale = 1;

 
