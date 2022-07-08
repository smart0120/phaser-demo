
        import _TeacherChair from './images/TeacherChair.png'
let paths = [
        ['SchoolComputerRoom_TeacherChair', _TeacherChair, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TeacherChair_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TeacherChair"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 166;
export const Y = 505;
export const Height = 100;
export const Interactive= true
export const Width = 103;
export const Alpha = 1;
export let Scale = 1;

 
