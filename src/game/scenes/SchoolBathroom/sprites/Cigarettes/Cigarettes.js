
        import _Cigarettes from './images/Cigarettes.png'
let paths = [
        ['SchoolBathroom_Cigarettes', _Cigarettes, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Cigarettes_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Cigarettes"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 845;
export const Y = 982;
export const Height = 68;
export const Interactive= true
export const Width = 91;
export const Alpha = 1;
export let Scale = 1;

 
