
        import _Lunchfinal from './images/Lunchfinal.png'
let paths = [
        ['SchoolLocker_Lunchfinal', _Lunchfinal, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lunchfinal_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lunchfinal"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 731;
export const Y = 824;
export const Height = 157;
export const Interactive= true
export const Width = 296;
export const Alpha = 1;
export let Scale = 1;

 
