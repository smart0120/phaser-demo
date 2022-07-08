
        import _JacklynHandUnscrew from './images/JacklynHandUnscrew.png'
let paths = [
        ['SchoolSecretLocker_JacklynHandUnscrew', _JacklynHandUnscrew, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./JacklynHandUnscrew_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "JacklynHandUnscrew"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 536;
export const Y = 444;
export const Height = 680;
export const Interactive= true
export const Width = 993;
export const Alpha = 1;
export let Scale = 1;

 
