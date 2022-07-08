
        import _Quote02 from './images/Quote02.png'
let paths = [
        ['SchoolEnglishClassroom_Quote02', _Quote02, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Quote02_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Quote02"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 381;
export const Y = 142;
export const Height = 188;
export const Interactive= true
export const Width = 138;
export const Alpha = 1;
export let Scale = 1;

 
