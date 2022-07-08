
        import _MissingLocker from './images/MissingLocker.png'
let paths = [
        ['SchoolGroundFloor_MissingLocker', _MissingLocker, 31],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MissingLocker_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MissingLocker"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 406;
export const Y = 546;
export const Height = 152;
export const Interactive= true
export const Width = 46;
export const Alpha = 1;
export let Scale = 1;

 
