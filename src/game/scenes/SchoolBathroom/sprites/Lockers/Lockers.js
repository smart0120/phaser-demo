
        import _Lockers from './images/Lockers.png'
let paths = [
        ['SchoolBathroom_Lockers', _Lockers, 20],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lockers_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lockers"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 624;
export const Y = 273;
export const Height = 429;
export const Interactive= true
export const Width = 364;
export const Alpha = 1;
export let Scale = 1;

 
