
        import _Quote05 from './images/Quote05.png'
let paths = [
        ['SchoolEnglishClassroom_Quote05', _Quote05, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Quote05_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Quote05"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1187;
export const Y = 170;
export const Height = 130;
export const Interactive= true
export const Width = 82;
export const Alpha = 1;
export let Scale = 1;

 
