
        import _Safe from './images/Safe.png'
let paths = [
        ['SchoolEnglishClassroom_Safe', _Safe, 22],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Safe_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Safe"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1397;
export const Y = 287;
export const Height = 68;
export const Interactive= true
export const Width = 65;
export const Alpha = 1;
export let Scale = 1;

 
