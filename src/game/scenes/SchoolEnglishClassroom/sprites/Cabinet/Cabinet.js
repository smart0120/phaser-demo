
        import _Cabinet from './images/Cabinet.png'
let paths = [
        ['SchoolEnglishClassroom_Cabinet', _Cabinet, 31],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Cabinet_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Cabinet"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 863;
export const Y = 391;
export const Height = 165;
export const Interactive= true
export const Width = 159;
export const Alpha = 1;
export let Scale = 1;

 
