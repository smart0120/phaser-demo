
        import _Quote06 from './images/Quote06.png'
let paths = [
        ['SchoolEnglishClassroom_Quote06', _Quote06, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Quote06_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Quote06"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1428;
export const Y = 83;
export const Height = 79;
export const Interactive= true
export const Width = 108;
export const Alpha = 1;
export let Scale = 1;

 
