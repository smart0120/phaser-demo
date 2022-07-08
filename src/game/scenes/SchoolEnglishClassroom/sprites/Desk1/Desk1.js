
        import _Desk1 from './images/Desk1.png'
let paths = [
        ['SchoolEnglishClassroom_Desk1', _Desk1, 27],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Desk1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Desk1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 398;
export const Y = 676;
export const Height = 404;
export const Interactive= true
export const Width = 321;
export const Alpha = 1;
export let Scale = 1;

 
