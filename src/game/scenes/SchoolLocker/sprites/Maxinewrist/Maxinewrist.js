
        import _Maxinewrist from './images/Maxinewrist.png'
let paths = [
        ['SchoolLocker_Maxinewrist', _Maxinewrist, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Maxinewrist_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Maxinewrist"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1470;
export const Y = 315;
export const Height = 163;
export const Interactive= true
export const Width = 142;
export const Alpha = 1;
export let Scale = 1;

 
