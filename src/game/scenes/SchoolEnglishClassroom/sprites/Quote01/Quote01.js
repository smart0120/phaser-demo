
        import _Quote01 from './images/Quote01.png'
let paths = [
        ['SchoolEnglishClassroom_Quote01', _Quote01, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Quote01_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Quote01"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 217;
export const Y = 133;
export const Height = 198;
export const Interactive= true
export const Width = 143;
export const Alpha = 1;
export let Scale = 1;

 
