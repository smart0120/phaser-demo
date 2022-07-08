
        import _TeacherChair from './images/TeacherChair.png'
let paths = [
        ['SchoolEnglishClassroom_TeacherChair', _TeacherChair, 32],
      
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
export const X = 625;
export const Y = 404;
export const Height = 187;
export const Interactive= true
export const Width = 130;
export const Alpha = 1;
export let Scale = 1;

 
