
        import _IsabelleSkirt from './images/IsabelleSkirt.png'
let paths = [
        ['SchoolEnglishClassroom_IsabelleSkirt', _IsabelleSkirt, 40],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./IsabelleSkirt_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "IsabelleSkirt"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 120;
export const Y = 398;
export const Height = 343;
export const Interactive= true
export const Width = 178;
export const Alpha = 1;
export let Scale = 1;

 
