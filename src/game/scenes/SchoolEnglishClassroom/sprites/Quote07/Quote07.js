
        import _Quote07 from './images/Quote07.png'
let paths = [
        ['SchoolEnglishClassroom_Quote07', _Quote07, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Quote07_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Quote07"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1848;
export const Y = 170;
export const Height = 187;
export const Interactive= true
export const Width = 72;
export const Alpha = 1;
export let Scale = 1;

 
