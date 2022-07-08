
        import _Blackboard from './images/Blackboard.png'
let paths = [
        ['SchoolEnglishClassroom_Blackboard', _Blackboard, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Blackboard_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Blackboard"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 558;
export const Y = 144;
export const Height = 228;
export const Interactive= true
export const Width = 404;
export const Alpha = 1;
export let Scale = 1;

 
