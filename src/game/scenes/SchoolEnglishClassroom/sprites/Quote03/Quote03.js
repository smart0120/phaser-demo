
        import _Quote03 from './images/Quote03.png'
let paths = [
        ['SchoolEnglishClassroom_Quote03', _Quote03, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Quote03_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Quote03"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1031;
export const Y = 178;
export const Height = 63;
export const Interactive= true
export const Width = 85;
export const Alpha = 1;
export let Scale = 1;

 
