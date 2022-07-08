
        import _LindseyXrayFull from './images/LindseyXrayFull.png'
let paths = [
        ['SchoolEnglishClassroom_LindseyXrayFull', _LindseyXrayFull, 19],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LindseyXrayFull_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LindseyXrayFull"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1255;
export const Y = 226;
export const Height = 370;
export const Interactive= true
export const Width = 130;
export const Alpha = 1;
export let Scale = 1;

 
