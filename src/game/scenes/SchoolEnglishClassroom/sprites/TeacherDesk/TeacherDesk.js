
        import _TeacherDesk from './images/TeacherDesk.png'
let paths = [
        ['SchoolEnglishClassroom_TeacherDesk', _TeacherDesk, 33],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TeacherDesk_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TeacherDesk"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 496;
export const Y = 346;
export const Height = 270;
export const Interactive= true
export const Width = 416;
export const Alpha = 1;
export let Scale = 1;

 
