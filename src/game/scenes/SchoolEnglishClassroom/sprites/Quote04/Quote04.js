
        import _Quote04 from './images/Quote04.png'
let paths = [
        ['SchoolEnglishClassroom_Quote04', _Quote04, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Quote04_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Quote04"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1015;
export const Y = 260;
export const Height = 133;
export const Interactive= true
export const Width = 157;
export const Alpha = 1;
export let Scale = 1;

 
